"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeftRight, ChefHat, Home, MessageCircle, Sparkles } from "lucide-react";
import { whatsappHref } from "@/data/site";

const presets = [
  {
    id: "kitchen",
    label: "Modular Kitchen",
    icon: ChefHat,
    beforeImage: "/images/work/modular-kitchen-1.jpg",
    afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
    title: "Modular Kitchen Transformation",
    subtitle: "From a raw site under installation to an open high-gloss acrylic island kitchen with Action Tesa HDHMR & Blum tandem hardware in Gaur City, Greater Noida."
  },
  {
    id: "living",
    label: "Living Room & TV Console",
    icon: Home,
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85",
    afterImage: "/images/work/tv-unit-living-1.jpg",
    title: "Turnkey 3BHK Living Room Upgrade",
    subtitle: "From a plain unfurnished room to Italian marble flooring, wooden louver wall panelling, fluted TV console & cove lighting at ATS One Hamlet, Sector 104 Noida."
  },
  {
    id: "wardrobe",
    label: "Master Bedroom & Wardrobe",
    icon: Sparkles,
    beforeImage: "https://images.unsplash.com/photo-1540518614846-7ede433c5172?auto=format&fit=crop&w=1400&q=85",
    afterImage: "/images/work/wardrobe-site-1.jpg",
    title: "Floor-to-Ceiling Wardrobe Fit-Out",
    subtitle: "From an empty plain bedroom wall to a floor-to-ceiling acrylic lacquered sliding wardrobe with integrated sensor LED lighting & Hettich hydraulic organizers in Jaypee Greens."
  }
];

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  title?: string;
  subtitle?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  subtitle
}: BeforeAfterSliderProps = {}) {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentPreset = presets[activePresetIndex];
  const activeBefore = beforeImage || currentPreset.beforeImage;
  const activeAfter = afterImage || currentPreset.afterImage;
  const activeTitle = title || currentPreset.title;
  const activeSubtitle = subtitle || currentPreset.subtitle;

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
    <div className="overflow-hidden rounded-2xl bg-white shadow-2xl border border-navy-950/10">
      {/* Transformation Selection Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-navy-950 text-white border-b border-amber-500/20">
        <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 px-3 py-1">
          Select Transformation:
        </span>
        <div className="flex flex-wrap gap-2">
          {presets.map((preset, idx) => {
            const Icon = preset.icon;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => {
                  setActivePresetIndex(idx);
                  setSliderPosition(50);
                }}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-extrabold transition cursor-pointer ${
                  activePresetIndex === idx
                    ? "gradient-btn-gold text-navy-950 shadow-gold scale-105"
                    : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/10"
                }`}
              >
                <Icon size={14} /> <span>{preset.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Before/After Interactive Comparison Canvas */}
      <div
        ref={containerRef}
        className="group relative h-[320px] sm:h-[440px] md:h-[500px] w-full select-none touch-none cursor-ew-resize overflow-hidden bg-slate-900"
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
          style={{ backgroundImage: `url(${activeAfter})` }}
        >
          <span className="absolute bottom-4 right-4 rounded-xl gradient-btn-gold px-3.5 py-1.5 text-xs font-extrabold text-navy-950 shadow-gold backdrop-blur z-10">
            AFTER (ATS Luxury Execution)
          </span>
        </div>

        {/* Before Image (Clipped Foreground) */}
        <div
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: `url(${activeBefore})`,
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
            willChange: "clip-path"
          }}
        >
          <span className="absolute bottom-4 left-4 rounded-xl bg-navy-950/90 border border-white/20 px-3.5 py-1.5 text-xs font-extrabold text-white backdrop-blur shadow-md z-10">
            BEFORE (Original Site Condition)
          </span>
        </div>

        {/* Slider Handle Divider */}
        <div
          className="absolute bottom-0 top-0 w-1 bg-white shadow-[0_0_15px_rgba(212,175,55,0.8)] pointer-events-none"
          style={{ left: `${sliderPosition}%`, willChange: "left" }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white gradient-btn-gold p-3 text-navy-950 shadow-gold transition-transform group-hover:scale-110 active:scale-95 cursor-grab active:cursor-grabbing pointer-events-auto">
            <ArrowLeftRight size={18} />
          </div>
        </div>
      </div>

      {/* Description & Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 sm:p-6 bg-porcelain border-t border-navy-950/10">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            Touch / Drag SXO Comparison
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mt-1.5">{activeTitle}</h3>
          <p className="mt-1.5 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">{activeSubtitle}</p>
        </div>
        <a
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl gradient-btn-gold px-6 py-3.5 text-xs font-extrabold text-navy-950 shadow-gold transition hover:scale-105 active:scale-95 cursor-pointer"
          href={whatsappHref(`I want a similar transformation for my ${activeTitle}.`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={16} /> Get Similar Transformation
        </a>
      </div>
    </div>
  );
}
