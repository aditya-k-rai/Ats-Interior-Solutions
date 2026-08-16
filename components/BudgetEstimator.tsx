"use client";

import { useMemo, useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";
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

  const message = `I used the cost estimator for ${service} in ${city}. Size: ${size} sqft. Estimated range: Rs. ${range.lower}L to Rs. ${range.upper}L. I want an exact quote.`;

  return (
    <div className="grid gap-6 rounded-lg bg-ink p-5 text-white shadow-soft lg:grid-cols-[1fr_0.8fr] lg:p-7">
      <div>
        <div className="mb-5 flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-md bg-brass text-ink">
            <Calculator size={22} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">Budget estimator</p>
            <h3 className="font-display text-3xl">Know your likely range</h3>
          </div>
        </div>
        <div className="grid gap-4">
          <label className="grid gap-2 text-sm font-semibold">
            Property size: {size} sqft
            <input min="400" max="3500" step="50" type="range" value={size} onChange={(event) => setSize(Number(event.target.value))} />
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            Service
            <select className="rounded-md border border-white/15 bg-white/10 px-3 py-3" value={service} onChange={(event) => setService(event.target.value)}>
              {services.map((item) => (
                <option className="text-ink" key={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold">
            City
            <select className="rounded-md border border-white/15 bg-white/10 px-3 py-3" value={city} onChange={(event) => setCity(event.target.value)}>
              {cities.map((item) => (
                <option className="text-ink" key={item.slug}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="grid content-center gap-4 rounded-lg bg-white p-5 text-ink">
        <p className="text-sm font-semibold text-graphite">Estimated project range</p>
        <p className="font-display text-4xl text-moss">Rs. {range.lower}L - Rs. {range.upper}L</p>
        <p className="text-sm leading-6 text-graphite">
          Final pricing depends on measurements, materials, finish selection, hardware, site condition and timeline.
        </p>
        <a className="inline-flex items-center justify-center gap-2 rounded-md bg-clay px-4 py-3 text-sm font-semibold text-white" href={whatsappHref(message)}>
          <MessageCircle size={16} /> Get Exact Quote
        </a>
      </div>
    </div>
  );
}
