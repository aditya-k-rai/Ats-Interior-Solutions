"use client";

import { useMemo, useState } from "react";
import { Calculator, MessageCircle, Sparkles } from "lucide-react";
import { cities, services, whatsappHref } from "@/data/site";

const multipliers: Record<string, number> = {
  "Interior Design": 1800,
  "Modular Kitchen": 3200,
  "False Ceiling": 220,
  Wardrobe: 1500,
  Bathroom: 2600,
  Wallpaper: 180,
  "Office Interior": 2100
};

export function BudgetEstimator() {
  const [size, setSize] = useState(1200);
  const [service, setService] = useState("Interior Design");
  const [city, setCity] = useState("Noida");

  const range = useMemo(() => {
    const base = size * (multipliers[service] ?? 1200);
    const lower = Math.max(base * 0.75, service === "Wallpaper" ? 20000 : 75000);
    const upper = base * 1.22;
    return {
      lower: Math.round(lower / 100000),
      upper: Math.max(Math.round(upper / 100000), Math.round(lower / 100000) + 1)
    };
  }, [service, size]);

  const message = `I used the budget estimator for ${service} in ${city}. Size: ${size} sqft. Estimated range: Rs. ${range.lower}L to Rs. ${range.upper}L. I want an exact quote.`;

  return (
    <div className="grid gap-8 rounded-2xl bg-ink p-6 text-white shadow-2xl border border-amber-500/20 lg:grid-cols-[1.1fr_0.9fr] lg:p-8 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 size-80 rounded-full bg-brass/10 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-3">
          <div className="grid size-12 place-items-center rounded-xl gradient-btn-gold text-ink font-bold shadow-md">
            <Calculator size={22} />
          </div>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-brass flex items-center gap-1">
              <Sparkles size={12} /> Interactive Widget
            </span>
            <h3 className="font-display text-3xl text-white">Know Your Likely Range</h3>
          </div>
        </div>

        <div className="grid gap-5">
          <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span>Property Size</span>
              <span className="text-brass font-mono font-bold text-base bg-white/10 px-3 py-1 rounded">{size} SQFT</span>
            </div>
            <input
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-brass focus:outline-none"
              min="400"
              max="3500"
              step="50"
              type="range"
              value={size}
              onChange={(event) => setSize(Number(event.target.value))}
            />
            <div className="flex justify-between text-[10px] text-white/50 font-normal">
              <span>400 sqft (Compact)</span>
              <span>1800 sqft (Standard)</span>
              <span>3500 sqft (Villa)</span>
            </div>
          </label>

          <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-white/80">
            Service Category
            <select
              className="rounded-lg border border-white/20 bg-slate-900 px-4 py-3 text-sm text-white font-normal focus:border-brass focus:outline-none cursor-pointer"
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
            Target City
            <select
              className="rounded-lg border border-white/20 bg-slate-900 px-4 py-3 text-sm text-white font-normal focus:border-brass focus:outline-none cursor-pointer"
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

      <div className="relative z-10 grid content-between gap-6 rounded-xl bg-white/95 p-6 text-ink shadow-xl backdrop-blur border border-white/40">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-clay bg-clay/10 px-2.5 py-1 rounded">
            Estimated Investment
          </span>
          <p className="mt-3 font-display text-4xl sm:text-5xl text-moss font-bold tracking-tight">
            Rs. {range.lower}L <span className="text-brass text-3xl font-normal">-</span> Rs. {range.upper}L
          </p>
          <p className="mt-3 text-xs leading-6 text-graphite">
            Includes 3D designs, board materials (BWP/HDMR), shutter finishes, installation, and 1-year execution warranty.
          </p>
        </div>

        <a
          className="inline-flex items-center justify-center gap-2 rounded-xl gradient-btn-clay px-5 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg transition hover:scale-105"
          href={whatsappHref(message)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={17} /> Get Exact Itemized Quote
        </a>
      </div>
    </div>
  );
}
