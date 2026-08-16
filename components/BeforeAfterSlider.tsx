"use client";

import { useState } from "react";
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

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.touches[0].clientX, rect);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = event.currentTarget.getBoundingClientRect();
    handleMove(event.clientX, rect);
  };

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-soft">
      <div
        className="group relative h-[380px] w-full select-none sm:h-[460px]"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${afterImage})` }}
        >
          <span className="absolute bottom-4 right-4 rounded-md bg-moss/80 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
            AFTER (ATS Interior)
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
          <span className="absolute bottom-4 left-4 rounded-md bg-ink/80 px-3 py-1.5 text-xs font-bold text-white backdrop-blur">
            BEFORE (Original Site)
          </span>
        </div>

        {/* Slider Divider Bar */}
        <div
          className="absolute bottom-0 top-0 w-1 cursor-ew-resize bg-white shadow-lg"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-clay p-2 text-white shadow-md transition group-hover:scale-110">
            <ArrowLeftRight size={18} />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 p-5 bg-mist/60 sm:p-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Interactive SXO Showcase</span>
          <h3 className="font-display text-2xl text-ink mt-0.5">{title}</h3>
          <p className="mt-1 text-sm text-graphite max-w-xl">{subtitle}</p>
        </div>
        <a
          className="inline-flex items-center gap-2 rounded-md bg-moss px-4 py-3 text-sm font-semibold text-white transition hover:bg-moss/90"
          href={whatsappHref(`I want a similar transformation for my ${title}.`)}
        >
          <MessageCircle size={16} /> Get a Similar Transformation
        </a>
      </div>
    </div>
  );
}
