"use client";

import React, { useEffect, useId, useMemo, useRef, useState } from "react";

interface CurvedLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  curveAmount?: number;
  direction?: "left" | "right";
  interactive?: boolean;
}

export function CurvedLoop({
  marqueeText = "ATS Interior Solutions        ATS Interior Solutions        ATS Interior Solutions        ATS Interior Solutions        ",
  speed = 1.5,
  className = "",
  curveAmount = 140,
  direction = "left",
  interactive = true
}: CurvedLoopProps) {
  const formattedText = useMemo(() => {
    return (/\s|\u00A0$/.test(marqueeText) ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0";
  }, [marqueeText]);

  const textRef = useRef<SVGTextElement>(null);
  const textPathRef = useRef<SVGTextPathElement>(null);

  const [textLength, setTextLength] = useState<number>(0);
  const offsetRef = useRef<number>(0);

  const uniqueId = `curve-${useId().replace(/:/g, "")}`;
  // Wide, compact quadratic Bezier arc engineered to fit perfectly with zero bottom whitespace
  const pathD = `M -100 35 Q 720 ${35 + curveAmount} 1540 35`;

  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const dirRef = useRef<"left" | "right">(direction);
  const velocityX = useRef<number>(0);

  const repeatedText = useMemo(() => {
    if (!textLength) return formattedText;
    const count = Math.ceil(3000 / textLength) + 4;
    return Array(count).fill(formattedText).join("");
  }, [textLength, formattedText]);

  const isReady = textLength > 0;

  // Measure single text unit length
  useEffect(() => {
    if (textRef.current) {
      const len = textRef.current.getComputedTextLength();
      setTextLength(len);
      offsetRef.current = -len;
    }
  }, [formattedText, className]);

  // Silky-Smooth 60FPS Hardware Animation Loop (Zero React Re-renders)
  useEffect(() => {
    if (!textLength || !isReady) return;
    let animId: number;

    const loop = () => {
      if (!isDragging.current && textPathRef.current) {
        const step = dirRef.current === "right" ? speed : -speed;
        let pos = offsetRef.current + step;
        const limit = textLength;

        if (pos <= -limit) pos += limit;
        if (pos > 0) pos -= limit;

        offsetRef.current = pos;
        textPathRef.current.setAttribute("startOffset", `${pos}px`);
      }
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [textLength, speed, isReady]);

  // Interactive Dragging & Touch Swipe
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    isDragging.current = true;
    startX.current = e.clientX;
    velocityX.current = 0;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive || !isDragging.current || !textPathRef.current) return;
    const delta = e.clientX - startX.current;
    startX.current = e.clientX;
    velocityX.current = delta;

    let pos = offsetRef.current + delta;
    const limit = textLength;

    if (pos <= -limit) pos += limit;
    if (pos > 0) pos -= limit;

    offsetRef.current = pos;
    textPathRef.current.setAttribute("startOffset", `${pos}px`);
  };

  const handlePointerUp = () => {
    if (!interactive) return;
    isDragging.current = false;
    if (Math.abs(velocityX.current) > 0.5) {
      dirRef.current = velocityX.current > 0 ? "right" : "left";
    }
  };

  return (
    <div className="group w-full bg-[#FAF6EE] border-y border-amber-900/10 py-2 sm:py-4 mt-0 overflow-hidden relative z-20 opacity-30 hover:opacity-100 transition-opacity duration-500">
      <div
        className={`curved-loop-jacket ${isReady ? "visible" : "invisible"} ${interactive ? "cursor-grab active:cursor-grabbing" : "cursor-auto"} touch-none`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <svg
          className="curved-loop-svg w-full aspect-[100/13] overflow-visible block select-none"
          viewBox="0 0 1440 190"
        >
          {/* Hidden measuring text */}
          <text
            ref={textRef}
            xmlSpace="preserve"
            className="invisible opacity-0 pointer-events-none font-serif text-4xl sm:text-6xl font-light tracking-wide"
          >
            {formattedText}
          </text>

          <defs>
            <path id={uniqueId} d={pathD} fill="none" stroke="transparent" />
          </defs>

          {isReady && (
            <text
              xmlSpace="preserve"
              className={`font-serif text-4xl sm:text-6xl font-light tracking-wider fill-[#8b7355] group-hover:fill-[#3A4D39] transition-colors duration-500 ${className}`}
            >
              <textPath ref={textPathRef} href={`#${uniqueId}`} startOffset={`${offsetRef.current}px`} xmlSpace="preserve">
                {repeatedText}
              </textPath>
            </text>
          )}
        </svg>
      </div>
    </div>
  );
}
