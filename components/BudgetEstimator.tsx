"use client";

import { useMemo, useState } from "react";
import { Calculator, MessageCircle, Sparkles } from "lucide-react";
import { cities, services, whatsappHref } from "@/data/site";

const multipliers: Record<string, number> = {
  "Interior Design": 2200,
  "Modular Kitchen": 3600,
  "Civil Construction & Renovation": 2400,
  "False Ceiling": 250,
  Wardrobe: 1800,
  Bathroom: 2800,
  "Office Interior": 2300
};

const serviceFloorLimits: Record<string, { minLakhs: number; maxLakhs: number }> = {
  "Interior Design": { minLakhs: 10, maxLakhs: 150 },
  "Modular Kitchen": { minLakhs: 5, maxLakhs: 50 },
  "Civil Construction & Renovation": { minLakhs: 10, maxLakhs: 150 },
  "False Ceiling": { minLakhs: 1, maxLakhs: 5 },
  Wardrobe: { minLakhs: 1.5, maxLakhs: 12 },
  Bathroom: { minLakhs: 2, maxLakhs: 10 },
  "Office Interior": { minLakhs: 10, maxLakhs: 80 }
};

export function BudgetEstimator() {
  const [size, setSize] = useState(1400);
  const [service, setService] = useState("Interior Design");
  const [city, setCity] = useState("Noida");

  const range = useMemo(() => {
    const limits = serviceFloorLimits[service] ?? { minLakhs: 10, maxLakhs: 150 };
    const base = size * (multipliers[service] ?? 2000);
    const calculatedLower = base * 0.8 / 100000;
    const calculatedUpper = base * 1.25 / 100000;

    const lower = Math.max(calculatedLower, limits.minLakhs);
    const upper = Math.min(Math.max(calculatedUpper, lower + 2), limits.maxLakhs);

    return {
      lower: Number(lower.toFixed(1)),
      upper: Number(upper.toFixed(1))
    };
  }, [service, size]);

  const message = `I used the budget estimator for ${service} in ${city}. Size: ${size} sqft. Estimated range: Rs. ${range.lower}L to Rs. ${range.upper}L. I want an exact quote from Manoj Pal & team.`;

  return (
    <div className="grid gap-8 rounded-2xl bg-navy-950 p-6 text-white shadow-2xl border border-amber-500/20 lg:grid-cols-[1.1fr_0.9fr] lg:p-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 size-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-12 place-items-center rounded-xl gradient-btn-gold text-navy-950 font-bold shadow-md">
            <Calculator size={22} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 flex items-center gap-1">
              <Sparkles size={12} /> Interactive Cost Calculator
            </span>
            <h3 className="font-display text-3xl text-white">Know Your Likely Range</h3>
          </div>
        </div>

        <div className="grid gap-5">
          <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span>Property Floor Area</span>
              <span className="text-amber-400 font-mono font-bold text-base bg-white/10 px-3 py-1 rounded border border-amber-500/30">
                {size} SQFT
              </span>
            </div>
            <input
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-amber-400 focus:outline-none"
              min="400"
              max="6000"
              step="50"
              type="range"
              value={size}
              onChange={(event) => setSize(Number(event.target.value))}
            />
            <div className="flex justify-between text-[10px] text-white/50 font-normal">
              <span>400 sqft (Compact)</span>
              <span>1800 sqft (Standard)</span>
              <span>6000 sqft (Villa / Penthouse)</span>
            </div>
          </label>

          <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
            Service Category
            <select
              className="rounded-lg border border-white/20 bg-slate-900 px-4 py-3 text-sm text-white font-normal focus:border-amber-400 focus:outline-none cursor-pointer"
              value={service}
              onChange={(event) => setService(event.target.value)}
            >
              {services.map((item) => (
                <option className="bg-slate-900 text-white" key={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
            Target City / Hub
            <select
              className="rounded-lg border border-white/20 bg-slate-900 px-4 py-3 text-sm text-white font-normal focus:border-amber-400 focus:outline-none cursor-pointer"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            >
              {cities.map((item) => (
                <option className="bg-slate-900 text-white" key={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="relative z-10 flex flex-col justify-between rounded-xl bg-white/5 p-6 border border-white/10 backdrop-blur-md">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Estimated Investment</span>
          <p className="font-display text-4xl font-bold text-amber-300 mt-2">
            Rs. {range.lower} Lakhs <span className="text-xl font-normal text-white/80">to</span> Rs. {range.upper} Lakhs
          </p>
          <p className="mt-3 text-xs leading-relaxed text-white/75">
            Includes factory modular production, IS 710 BWP plywood / HDHMR, authentic Blum & Häfele German hardware, 3D CAD modeling & on-site supervision by Manoj Pal & team.
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 space-y-3">
          <a
            className="flex w-full items-center justify-center gap-2 rounded-xl gradient-btn-gold px-5 py-3.5 text-xs font-extrabold text-navy-950 shadow-gold transition hover:scale-105 active:scale-95"
            href={whatsappHref(message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} /> WhatsApp Estimate to Manoj Pal
          </a>
          <p className="text-[10px] text-center text-white/60">
            *Final BOQ provided after free site measurement and 3D floor plan layout approval.
          </p>
        </div>
      </div>
    </div>
  );
}
