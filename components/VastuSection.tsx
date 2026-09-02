"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Compass, Flame, Heart, MessageCircle, Moon, ShieldCheck, Sparkles, Sun } from "lucide-react";
import { QuoteModal } from "./QuoteModal";
import { whatsappHref } from "@/data/site";

export interface VastuPillar {
  id: string;
  zone: string;
  direction: string;
  title: string;
  description: string;
  icon: React.ElementType;
  guideline: string;
}

export const vastuPillars: VastuPillar[] = [
  {
    id: "kitchen-vastu",
    zone: "Agni Kone",
    direction: "South-East (SE)",
    title: "Kitchen Hob & Fire Zone",
    description: "Cooktop placed in the South-East Agni corner facing East while cooking. Sink placed in North-East for perfect water-fire harmony.",
    icon: Flame,
    guideline: "Fosters health, vital energy & family prosperity"
  },
  {
    id: "bedroom-vastu",
    zone: "Nairitya Kone",
    direction: "South-West (SW)",
    title: "Master Bedroom Suite",
    description: "Master bed positioned in South-West corner with head facing South or West. Heavier wardrobes placed on South/West walls for grounding.",
    icon: Moon,
    guideline: "Promotes deep sleep, stability & marital harmony"
  },
  {
    id: "pooja-vastu",
    zone: "Ishan Kone",
    direction: "North-East (NE)",
    title: "Pooja Room & Mandir",
    description: "Sacred mandir placed in the pristine North-East Ishan corner using white marble, soft warm lighting, and zero overhead clutter.",
    icon: Sun,
    guideline: "Attracts positive spiritual vibrations & peace"
  },
  {
    id: "living-vastu",
    zone: "Vayu Kone",
    direction: "North-West / East",
    title: "Living & Entrance Gateway",
    description: "Uncluttered main entrance, light furniture placement in North/East, and maximize natural morning sunlight flow across living areas.",
    icon: Compass,
    guideline: "Enhances social harmony, abundance & fresh airflow"
  }
];

export function VastuSection({ id = "vastu-section" }: { id?: string }) {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <section id={id} className="py-16 sm:py-24 bg-navy-950 text-white relative overflow-hidden">
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />

      {/* Decorative background glows */}
      <div className="absolute top-1/3 left-10 size-96 rounded-full bg-amber-500/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 size-96 rounded-full bg-emerald-500/15 blur-[120px] pointer-events-none" />

      <div className="section-shell max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-amber-300 bg-navy-900/90 border border-amber-400/30 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md">
            <Compass size={14} className="text-amber-400 animate-spin" /> Ancient Wisdom • Modern Aesthetics
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight text-white drop-shadow-md">
            100% Vastu Shastra Compliant Interiors
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Harmonizing positive energy, natural light, and spatial directional flow across every 3BHK/4BHK apartment, villa, and home interior in Noida &amp; Greater Noida.
          </p>
        </div>

        {/* 4 Vastu Pillars Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {vastuPillars.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group rounded-3xl bg-navy-900/80 border border-amber-400/20 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-amber-400/60 hover:shadow-[0_16px_40px_rgba(212,175,55,0.18)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest bg-amber-500/20 text-amber-300 px-3 py-1 rounded-lg border border-amber-400/30">
                      {item.zone} ({item.direction})
                    </span>
                    <div className="grid size-10 place-items-center rounded-xl bg-navy-950 text-amber-400 border border-amber-400/30 shadow-md group-hover:rotate-12 group-hover:scale-110 transition duration-300">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-300 transition duration-300">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center gap-2 text-[11px] font-semibold text-emerald-400">
                  <ShieldCheck size={14} className="shrink-0 text-emerald-400" />
                  <span>{item.guideline}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout & Action CTA */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-navy-900 via-navy-900/90 to-navy-900 border border-amber-400/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-left">
            <div className="grid size-14 place-items-center rounded-2xl bg-amber-500 text-navy-950 font-bold shrink-0 shadow-gold">
              <Compass size={28} />
            </div>
            <div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white">Need a Vastu Design Audit for Your Noida Home?</h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-300">
                Our certified Vastu interior architects review your floor plan for optimal energy alignment before construction starts.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl gradient-btn-gold animate-shimmer-sweep px-6 py-3.5 text-xs font-extrabold text-navy-950 shadow-gold transition hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Sparkles size={14} className="text-navy-950" />
              <span>Book Vastu Audit</span>
            </button>
            <a
              href={whatsappHref("Hello ATS team, I would like to consult on Vastu-compliant home interior design.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl glow-btn-purple px-6 py-3.5 text-xs font-bold text-white shadow-md transition hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <MessageCircle size={14} className="text-purple-300" />
              <span>WhatsApp Vastu Query</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
