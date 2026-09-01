"use client";

import React from "react";
import { Sparkles, Star } from "lucide-react";

interface TiltedMarqueeProps {
  items?: string[];
  className?: string;
  speed?: string; // e.g. "30s"
}

const defaultMarqueeItems = [
  "ATS INTERIOR SOLUTIONS",
  "ELEGANCE IN EVERY CORNER",
  "100% GERMAN TECH MANUFACTURING",
  "4,500+ COMPLETED PROJECTS",
  "NOIDA & GREATER NOIDA",
  "VASTU COMPLIANT INTERIORS",
  "1-YEAR WARRANTY ASSURED",
  "LUXURY MODULAR KITCHENS",
  "FULL HOME FIT-OUTS"
];

export function TiltedMarquee({
  items = defaultMarqueeItems,
  className = "",
  speed = "35s"
}: TiltedMarqueeProps) {
  // Repeat items array 4 times to ensure seamless infinite scroll on ultra-wide screens
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative w-full overflow-hidden py-6 sm:py-10 z-20 pointer-events-none select-none ${className}`}>
      {/* Background Angled Ribbon Banner */}
      <div className="-rotate-2 sm:-rotate-3 scale-105 bg-gradient-to-r from-navy-950 via-[#2C3E2B] to-navy-950 text-white py-4 sm:py-5 border-y-2 border-amber-400/80 shadow-2xl overflow-hidden pointer-events-auto">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center gap-8 sm:gap-12">
          {repeatedItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 sm:gap-12 whitespace-nowrap">
              <span className="font-display text-xl sm:text-3xl font-bold tracking-wider text-amber-100 uppercase drop-shadow-sm">
                {item}
              </span>
              <span className="inline-flex items-center justify-center text-amber-400">
                <Star size={16} fill="currentColor" className="animate-spin text-amber-400" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
