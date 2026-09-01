"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck2,
  Hammer,
  HelpCircle,
  Key,
  Layers,
  Lightbulb,
  MessageSquare,
  Palette,
  PenTool,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench
} from "lucide-react";
import { processStepsData as rawStepsData, whatsappHref } from "@/data/site";

const stepIcons = [PhoneCall, PenTool, Wrench, ShieldCheck];
const stepAccents = [
  "from-amber-500 to-amber-600",
  "from-emerald-600 to-teal-700",
  "from-blue-600 to-indigo-700",
  "from-purple-600 to-purple-800"
];
const stepBadgeBgs = ["bg-amber-100/90", "bg-emerald-100/90", "bg-blue-100/90", "bg-purple-100/90"];
const stepBadgeTexts = ["text-amber-800", "text-emerald-800", "text-blue-800", "text-purple-800"];

export const processStepsData = rawStepsData.map((step, idx) => ({
  ...step,
  icon: stepIcons[idx % stepIcons.length],
  accentColor: stepAccents[idx % stepAccents.length],
  badgeBg: stepBadgeBgs[idx % stepBadgeBgs.length],
  badgeText: stepBadgeTexts[idx % stepBadgeTexts.length]
}));

interface WorkProcessProps {
  id?: string;
  className?: string;
  showTitle?: boolean;
}

export function WorkProcess({ id = "process", className = "", showTitle = true }: WorkProcessProps) {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto animation cycle through steps
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % processStepsData.length) + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section id={id} className={`py-16 sm:py-24 bg-[#FAF6EE] text-navy-950 relative overflow-hidden ${className}`}>
      {/* Decorative background ambient glows */}
      <div className="absolute top-0 right-0 size-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-96 rounded-full bg-navy-950/5 blur-3xl pointer-events-none" />

      <div className="section-shell relative z-10">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-100/90 px-4 py-1.5 rounded-full border border-amber-300 shadow-sm animate-pulse">
              <Sparkles size={14} className="text-amber-600" /> Transparent Execution Workflow
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#3A4D39]">
              Our Working Process
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              From initial consultation to final key handover — experience a structured, 4-phase design and execution journey tailored for peace of mind.
            </p>
          </div>
        )}

        {/* Step Selector Tabs for Interactive Exploration */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {processStepsData.map((step) => {
            const Icon = step.icon;
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => {
                  setActiveStep(step.id);
                  setIsAutoPlaying(false);
                }}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-extrabold transition-all duration-300 border cursor-pointer ${
                  isActive
                    ? "bg-navy-950 text-white border-amber-400 shadow-lg scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:border-amber-400/60 hover:bg-amber-50/50"
                }`}
              >
                <span
                  className={`grid size-6 place-items-center rounded-full text-[11px] font-bold ${
                    isActive ? "bg-amber-400 text-navy-950" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {step.number}
                </span>
                <span>{step.title}</span>
                {isActive && <span className="size-2 rounded-full bg-amber-400 animate-ping" />}
              </button>
            );
          })}
        </div>

        {/* Vertical Animated Timeline with Alternating Left / Right Branches */}
        <div className="relative max-w-5xl mx-auto py-4">
          {/* Central Vertical Timeline Stem Bar */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-1.5 bg-gradient-to-b from-amber-300 via-emerald-400 to-purple-400 rounded-full shadow-inner opacity-70">
            {/* Animated Pulse Particle travelling down stem */}
            <div
              className="absolute w-3.5 h-3.5 -left-1 rounded-full bg-amber-400 shadow-[0_0_15px_rgba(245,158,11,1)] transition-all duration-700 ease-in-out"
              style={{
                top: `${((activeStep - 1) / (processStepsData.length - 1)) * 92}%`
              }}
            />
          </div>

          <div className="space-y-12 sm:space-y-16">
            {processStepsData.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 1; // Alternating layout on desktop
              const isActive = activeStep === step.id;

              return (
                <div
                  key={step.id}
                  onClick={() => {
                    setActiveStep(step.id);
                    setIsAutoPlaying(false);
                  }}
                  className={`relative grid md:grid-cols-2 gap-8 items-center cursor-pointer group transition-all duration-500 ${
                    isActive ? "scale-[1.02]" : "opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* Left Column (Desktop) */}
                  <div className={`order-2 md:order-1 ${isEven ? "md:text-left" : "md:text-right"}`}>
                    {!isEven ? (
                      <div
                        className={`rounded-3xl p-6 sm:p-8 bg-white border transition-all duration-500 shadow-soft ${
                          isActive
                            ? "border-amber-400 shadow-xl ring-2 ring-amber-400/30 bg-gradient-to-br from-white via-amber-50/20 to-white"
                            : "border-slate-200/80 group-hover:border-amber-300 group-hover:shadow-lg"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-3 md:justify-end">
                          <span className={`text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${step.badgeBg} ${step.badgeText}`}>
                            Phase {step.number}
                          </span>
                          <span className="text-xs font-bold text-slate-400">{step.subtitle}</span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2C3E2B] group-hover:text-amber-700 transition duration-300">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                          {step.description}
                        </p>

                        {/* Feature Highlights Tags */}
                        <div className="mt-5 flex flex-wrap gap-2 md:justify-end">
                          {step.highlights.map((h) => (
                            <span
                              key={h}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100/90 px-3 py-1 rounded-lg border border-slate-200"
                            >
                              <CheckCircle2 size={13} className="text-emerald-600" /> {h}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500 md:justify-end">
                          <FileCheck2 size={15} className="text-amber-600" /> Deliverable: <span className="text-navy-950 font-extrabold">{step.deliverables}</span>
                        </div>
                      </div>
                    ) : (
                      // Graphic Illustration Placeholder / Counterpart for right-side step
                      <div className="hidden md:flex flex-col items-center justify-center p-6 text-center">
                        <div className="relative group-hover:scale-110 transition duration-500">
                          <div className={`size-24 rounded-3xl bg-gradient-to-tr ${step.accentColor} grid place-items-center text-white shadow-xl`}>
                            <Icon size={44} strokeWidth={1.5} />
                          </div>
                          <div className="absolute -bottom-2 -right-2 grid size-9 place-items-center rounded-full bg-navy-950 text-amber-400 text-sm font-extrabold shadow-md border-2 border-white">
                            {step.number}
                          </div>
                        </div>
                        <p className="mt-4 text-xs font-extrabold uppercase tracking-widest text-slate-500">
                          {step.subtitle}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Center Node Badge (Desktop) */}
                  <div className="hidden md:grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 size-14 place-items-center rounded-2xl bg-navy-950 text-amber-400 border-4 border-[#FAF6EE] shadow-xl font-display text-xl font-extrabold transition-all duration-500 group-hover:scale-125 group-hover:bg-amber-500 group-hover:text-navy-950">
                    {step.number}
                  </div>

                  {/* Right Column (Desktop) */}
                  <div className={`order-3 ${isEven ? "md:text-left" : "md:text-left"}`}>
                    {isEven ? (
                      <div
                        className={`rounded-3xl p-6 sm:p-8 bg-white border transition-all duration-500 shadow-soft ${
                          isActive
                            ? "border-amber-400 shadow-xl ring-2 ring-amber-400/30 bg-gradient-to-br from-white via-amber-50/20 to-white"
                            : "border-slate-200/80 group-hover:border-amber-300 group-hover:shadow-lg"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${step.badgeBg} ${step.badgeText}`}>
                            Phase {step.number}
                          </span>
                          <span className="text-xs font-bold text-slate-400">{step.subtitle}</span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2C3E2B] group-hover:text-amber-700 transition duration-300">
                          {step.title}
                        </h3>

                        <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                          {step.description}
                        </p>

                        {/* Feature Highlights Tags */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {step.highlights.map((h) => (
                            <span
                              key={h}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100/90 px-3 py-1 rounded-lg border border-slate-200"
                            >
                              <CheckCircle2 size={13} className="text-emerald-600" /> {h}
                            </span>
                          ))}
                        </div>

                        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-slate-500">
                          <FileCheck2 size={15} className="text-amber-600" /> Deliverable: <span className="text-navy-950 font-extrabold">{step.deliverables}</span>
                        </div>
                      </div>
                    ) : (
                      // Graphic Illustration Placeholder / Counterpart for left-side step
                      <div className="hidden md:flex flex-col items-center justify-center p-6 text-center">
                        <div className="relative group-hover:scale-110 transition duration-500">
                          <div className={`size-24 rounded-3xl bg-gradient-to-tr ${step.accentColor} grid place-items-center text-white shadow-xl`}>
                            <Icon size={44} strokeWidth={1.5} />
                          </div>
                          <div className="absolute -bottom-2 -right-2 grid size-9 place-items-center rounded-full bg-navy-950 text-amber-400 text-sm font-extrabold shadow-md border-2 border-white">
                            {step.number}
                          </div>
                        </div>
                        <p className="mt-4 text-xs font-extrabold uppercase tracking-widest text-slate-500">
                          {step.subtitle}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-16 sm:mt-20 max-w-4xl mx-auto rounded-3xl bg-navy-950 p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-amber-500/30 shadow-2xl">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Ready to Begin?</span>
            <h3 className="mt-1 font-display text-2xl sm:text-3xl font-bold">Start Step 1 with a Free Consultation</h3>
            <p className="mt-2 text-xs sm:text-sm text-white/80">
              Schedule your on-site measurement and 3D layout evaluation with Founder Manoj Pal & design team.
            </p>
          </div>
          <a
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2.5 rounded-2xl gradient-btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-gold transition hover:scale-105 active:scale-95 cursor-pointer"
            href={whatsappHref("I want to schedule Step 1: Free On-Site Consultation for my interior project.")}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Start Free Consultation</span> <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
