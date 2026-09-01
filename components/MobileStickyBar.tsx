"use client";

import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { site, whatsappHref } from "@/data/site";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 border-t border-amber-500/30 p-2 sm:hidden backdrop-blur-md shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-center">
        <a
          href={`tel:${site.phone.replaceAll(" ", "").replaceAll("-", "")}`}
          className="flex flex-col items-center justify-center rounded-xl glow-btn-blue py-2 px-1 text-[11px] font-bold transition active:scale-95"
        >
          <Phone size={16} className="text-blue-300 mb-0.5" />
          <span>Call Now</span>
        </a>

        <a
          href="/services"
          className="flex flex-col items-center justify-center rounded-xl glow-btn-emerald py-2 px-1 text-[11px] font-extrabold shadow-md transition active:scale-95 text-emerald-100"
        >
          <Sparkles size={16} className="mb-0.5 animate-pulse text-emerald-300" />
          <span>Know More</span>
        </a>

        <a
          href="#consultation"
          className="flex flex-col items-center justify-center rounded-xl gradient-btn-gold py-2 px-1 text-[11px] font-extrabold text-navy-950 shadow-gold transition active:scale-95"
        >
          <Sparkles size={15} className="mb-0.5" />
          <span>Free Quote</span>
        </a>
      </div>
    </div>
  );
}
