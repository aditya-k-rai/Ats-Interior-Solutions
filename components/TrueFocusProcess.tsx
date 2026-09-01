"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface TrueFocusProcessProps {
  stages?: string[];
  blurAmount?: number;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

const DEFAULT_STAGES = ["Consultation", "Concept & Design", "Execution", "Handover"];

export function TrueFocusProcess({
  stages = DEFAULT_STAGES,
  blurAmount = 8,
  animationDuration = 0.6,
  pauseBetweenAnimations = 1.4
}: TrueFocusProcessProps) {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const [frameStyle, setFrameStyle] = useState<{
    x: number;
    y: number;
    width: number;
    height: number;
    opacity: number;
  }>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    opacity: 0
  });

  const currentIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;

  // Exact relative offset calculation for 100% pixel-perfect frame alignment
  const updateFrame = useCallback(() => {
    const target = itemRefs.current[currentIndex];
    if (!target || !containerRef.current) return;

    setFrameStyle({
      x: target.offsetLeft,
      y: target.offsetTop,
      width: target.offsetWidth,
      height: target.offsetHeight,
      opacity: 1
    });
  }, [currentIndex]);

  // Auto cycle loop
  useEffect(() => {
    if (hoveredIndex !== null) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stages.length);
    }, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => clearInterval(interval);
  }, [hoveredIndex, animationDuration, pauseBetweenAnimations, stages.length]);

  // Update layout position on change, resize, or font load
  useEffect(() => {
    updateFrame();
    const timer = setTimeout(updateFrame, 50);
    window.addEventListener("resize", updateFrame);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateFrame);
    };
  }, [updateFrame, activeIndex, currentIndex]);

  const handleNavigate = () => {
    router.push("/process");
  };

  return (
    <section
      onClick={handleNavigate}
      className="w-full bg-[#3D2B1F] text-white py-12 sm:py-16 px-4 sm:px-8 relative cursor-pointer select-none transition-colors duration-500 border-y border-[#4A372B]"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center relative z-10">
        
        {/* Main Stage Text Container - Compact, zero-scroll flex bar */}
        <div
          ref={containerRef}
          className="relative inline-flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 max-w-5xl mx-auto py-4 z-10"
        >
          {stages.map((stageName, idx) => {
            const isActive = idx === currentIndex;
            return (
              <span
                key={stageName}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  setHoveredIndex(idx);
                }}
                onMouseLeave={(e) => {
                  e.stopPropagation();
                  setHoveredIndex(null);
                }}
                className={`relative z-10 inline-block font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight px-3 py-1.5 transition-all duration-500 ${
                  isActive
                    ? "text-white opacity-100 scale-105"
                    : "text-white/40 opacity-30 hover:opacity-75"
                }`}
                style={{
                  filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
                  transition: `all ${animationDuration}s cubic-bezier(0.16, 1, 0.3, 1)`
                }}
              >
                {stageName}
              </span>
            );
          })}

          {/* Exact Rounded L-shaped White Corner Brackets ┌ ┐ └ ┘ */}
          <div
            className="absolute top-0 left-0 pointer-events-none transition-all ease-out duration-500 box-border z-20"
            style={{
              transform: `translate3d(${frameStyle.x}px, ${frameStyle.y}px, 0)`,
              width: `${frameStyle.width}px`,
              height: `${frameStyle.height}px`,
              opacity: frameStyle.opacity
            }}
          >
            {/* Top-Left Corner */}
            <span className="absolute -top-2.5 -left-2.5 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-l-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.85)] rounded-tl-md" />
            {/* Top-Right Corner */}
            <span className="absolute -top-2.5 -right-2.5 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-r-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.85)] rounded-tr-md" />
            {/* Bottom-Left Corner */}
            <span className="absolute -bottom-2.5 -left-2.5 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-l-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.85)] rounded-bl-md" />
            {/* Bottom-Right Corner */}
            <span className="absolute -bottom-2.5 -right-2.5 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-r-2 border-white shadow-[0_0_10px_rgba(255,255,255,0.85)] rounded-br-md" />
          </div>
        </div>

        {/* Clean Pill Button matching reference screenshot */}
        <div className="mt-8">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNavigate();
            }}
            className="px-7 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white text-white hover:text-[#3D2B1F] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md backdrop-blur-sm"
          >
            Explore Working Process
          </button>
        </div>
      </div>
    </section>
  );
}
