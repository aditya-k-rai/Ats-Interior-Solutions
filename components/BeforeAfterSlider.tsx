"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeftRight, MessageCircle } from "lucide-react";
import { whatsappHref } from "@/data/site";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  title?: string;
  subtitle?: string;
}

export function BeforeAfterSlider({
  beforeImage = "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
  afterImage = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  title = "Modular Kitchen Transformation",
  subtitle = "From a cluttered, dark kitchen to an open, high-gloss acrylic layout with 2x storage in Gaur City, Greater Noida."
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    if (event.touches.length > 0) {
      updatePosition(event.touches[0].clientX);
    }
  }, [updatePosition]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    updatePosition(event.clientX);
  }, [updatePosition]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-moss/10">
      <div
        ref={containerRef}
        className="group relative h-[300px] sm:h-[420px] md:h-[480px] w-full select-none touch-none cursor-ew-resize overflow-hidden"
        onMouseDown={(e) => {
          setIsDragging(true);
          updatePosition(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          updatePosition(e.touches[0].clientX);
        }}
      >
        {/* After Image (Background) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage})` }}
        >
          <span className="absolute bottom-3 right-3 rounded-lg bg-moss/90 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur shadow">
            AFTER (ATS Design)
          </span>
        </div>

        {/* Before Image (Clipped Foreground) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${beforeImage})`,
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`
          }}
        >
          <span className="absolute bottom-3 left-3 rounded-lg bg-ink/90 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur shadow">
            BEFORE (Original Site)
          </span>
        </div>

        {/* Slider Handle Divider */}
        <div
          className="absolute bottom-0 top-0 w-1 bg-white shadow-2xl"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white gradient-btn-gold p-2.5 text-ink shadow-lg transition-transform group-hover:scale-110 active:scale-95">
            <ArrowLeftRight size={18} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-mist/60 sm:p-6 border-t border-moss/10">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-clay bg-clay/10 px-2.5 py-1 rounded">
            Touch / Drag SXO Comparison
          </span>
          <h3 className="font-display text-xl sm:text-2xl text-ink mt-1">{title}</h3>
          <p className="mt-1 text-xs sm:text-sm text-graphite max-w-xl leading-relaxed">{subtitle}</p>
        </div>
        <a
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl gradient-btn-clay px-5 py-3 text-xs font-bold text-white shadow-md transition hover:scale-105 active:scale-95"
          href={whatsappHref(`I want a similar transformation for my ${title}.`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={16} /> Get a Similar Transformation
        </a>
      </div>
    </div>
  );
}
