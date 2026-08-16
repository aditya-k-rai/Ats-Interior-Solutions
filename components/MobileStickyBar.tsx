"use client";

import { MessageCircle, Phone, Sparkles } from "lucide-react";
import { site, whatsappHref } from "@/data/site";

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy-950/95 border-t border-amber-500/30 p-2 sm:hidden backdrop-blur-md shadow-2xl">
      <div className="grid grid-cols-3 gap-2 text-center">
        <a
          href={`tel:${site.phone.replaceAll(" ", "").replaceAll("-", "")}`}
          className="flex flex-col items-center justify-center rounded-xl bg-white/10 py-2 px-1 text-[11px] font-bold text-white transition active:scale-95 border border-white/10"
        >
          <Phone size={16} className="text-amber-400 mb-0.5" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappHref("Hi ATS Interior, I want an instant quote for my property.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center rounded-xl bg-emerald-600 py-2 px-1 text-[11px] font-extrabold text-white shadow-md transition active:scale-95 border border-emerald-400/30"
        >
          <MessageCircle size={16} className="mb-0.5 animate-pulse" />
          <span>WhatsApp</span>
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
