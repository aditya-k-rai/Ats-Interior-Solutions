"use client";

import { useState } from "react";
import { Check, MessageCircle, Phone, Sparkles, Zap } from "lucide-react";
import { cities, services, site, whatsappHref } from "@/data/site";

export function StickyEnquiryBar() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Noida");
  const [service, setService] = useState("Interior Design");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!phone || phone.length < 10) return;
    setLoading(true);
    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, city, service, source: "Sticky Enquiry Bar" })
      });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const message = `I want a free consultation for ${service} in ${city}. Name: ${name || "Client"}, Phone: ${phone}.`;

  return (
    <div className="sticky top-[64px] z-40 border-b border-amber-500/20 bg-ink/95 text-white backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="section-shell py-2">
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center justify-between gap-2 text-xs">
          {/* Badge Label distinguishing it from navigation */}
          <div className="hidden xl:flex items-center gap-1.5 font-bold uppercase tracking-wider text-brass shrink-0 bg-white/5 px-2.5 py-1.5 rounded border border-brass/30">
            <Zap size={13} className="text-brass animate-pulse" />
            <span>Quick 10-Sec Quote</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 flex-1 min-w-[280px]">
            <input
              className="rounded bg-white/10 px-3 py-1.5 text-xs text-white placeholder-white/50 border border-white/15 focus:border-brass focus:outline-none transition"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="rounded bg-white/10 px-3 py-1.5 text-xs text-white placeholder-white/50 border border-white/15 focus:border-brass focus:outline-none transition"
              inputMode="tel"
              placeholder="10-Digit Mobile"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <select
              className="rounded bg-slate-800 px-2 py-1.5 text-xs text-white border border-white/15 focus:border-brass focus:outline-none cursor-pointer"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            >
              {cities.map((item) => (
                <option key={item.slug} value={item.name} className="bg-slate-900 text-white">
                  {item.name}
                </option>
              ))}
            </select>
            <select
              className="rounded bg-slate-800 px-2 py-1.5 text-xs text-white border border-white/15 focus:border-brass focus:outline-none cursor-pointer"
              value={service}
              onChange={(event) => setService(event.target.value)}
            >
              {services.map((item) => (
                <option key={item.slug} value={item.name} className="bg-slate-900 text-white">
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              className="inline-flex items-center justify-center gap-1.5 rounded gradient-btn-gold px-3.5 py-1.5 text-xs font-bold shadow-md transition hover:scale-105 active:scale-95 disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              {submitted ? <Check size={14} /> : <Sparkles size={14} />}
              <span>{submitted ? "Received!" : loading ? "Sending..." : "Get Estimate"}</span>
            </button>

            <a
              aria-label="Call ATS Interior"
              className="grid size-7 place-items-center rounded bg-white/10 text-white transition hover:bg-white/20 hover:text-brass"
              href={`tel:${site.phone.replaceAll(" ", "")}`}
            >
              <Phone size={14} />
            </a>

            <a
              aria-label="WhatsApp ATS Interior"
              className="grid size-7 place-items-center rounded gradient-btn-clay text-white transition hover:scale-105"
              href={whatsappHref(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={14} />
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
