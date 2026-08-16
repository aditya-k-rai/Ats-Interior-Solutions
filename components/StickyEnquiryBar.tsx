"use client";

import { useState } from "react";
import { Check, ChevronDown, ChevronUp, MessageCircle, Phone, Sparkles, Zap } from "lucide-react";
import { cities, services, site, whatsappHref } from "@/data/site";

export function StickyEnquiryBar() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("Noida");
  const [service, setService] = useState("Interior Design");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

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
    <div className="sticky top-[60px] sm:top-[64px] z-40 border-b border-gold-500/20 bg-emerald-950/95 text-white backdrop-blur-md shadow-lg transition-all duration-300">
      <div className="section-shell py-2">
        {/* Mobile View Toggle Strip */}
        <div className="flex sm:hidden items-center justify-between gap-2">
          <button
            type="button"
            className="flex items-center gap-1.5 text-xs font-bold text-gold-400 bg-white/5 px-3 py-1.5 rounded-lg border border-gold-500/30 flex-1 justify-between"
            onClick={() => setMobileExpanded(!mobileExpanded)}
          >
            <span className="flex items-center gap-1.5">
              <Zap size={14} className="text-gold-400 animate-pulse" />
              <span>Quick 10-Sec Quote Form</span>
            </span>
            {mobileExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
          
          <div className="flex items-center gap-1.5 shrink-0">
            <a
              aria-label="Call ATS Interior"
              className="grid size-9 place-items-center rounded-lg bg-white/10 text-white active:scale-95"
              href={`tel:${site.phone.replaceAll(" ", "")}`}
            >
              <Phone size={15} />
            </a>

            <a
              aria-label="WhatsApp ATS Interior"
              className="grid size-9 place-items-center rounded-lg bg-emerald-800 text-gold-400 border border-gold-500/30 active:scale-95"
              href={whatsappHref(message)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} />
            </a>
          </div>
        </div>

        {/* Form Body (Always visible on SM+, Collapsible on mobile) */}
        <form
          onSubmit={handleSubmit}
          className={`${
            mobileExpanded ? "flex mt-2.5" : "hidden sm:flex"
          } flex-wrap items-center justify-between gap-2 text-xs transition-all duration-300`}
        >
          {/* Badge Label */}
          <div className="hidden xl:flex items-center gap-1.5 font-bold uppercase tracking-wider text-gold-400 shrink-0 bg-white/5 px-3 py-2 rounded-lg border border-gold-500/30">
            <Zap size={13} className="text-gold-400 animate-pulse" />
            <span>Quick 10-Sec Quote</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 flex-1 min-w-[240px]">
            <input
              className="rounded-lg bg-emerald-900/60 px-3.5 py-2 text-xs text-white placeholder-white/50 border border-emerald-700/50 focus:border-gold-400 focus:outline-none transition min-h-[40px]"
              placeholder="Your Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <input
              className="rounded-lg bg-emerald-900/60 px-3.5 py-2 text-xs text-white placeholder-white/50 border border-emerald-700/50 focus:border-gold-400 focus:outline-none transition min-h-[40px]"
              inputMode="tel"
              placeholder="10-Digit Mobile"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <select
              className="rounded-lg bg-emerald-900 px-3 py-2 text-xs text-white border border-emerald-700/50 focus:border-gold-400 focus:outline-none cursor-pointer min-h-[40px]"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            >
              {cities.map((item) => (
                <option key={item.slug} value={item.name} className="bg-emerald-950 text-white">
                  {item.name}
                </option>
              ))}
            </select>
            <select
              className="rounded-lg bg-emerald-900 px-3 py-2 text-xs text-white border border-emerald-700/50 focus:border-gold-400 focus:outline-none cursor-pointer min-h-[40px]"
              value={service}
              onChange={(event) => setService(event.target.value)}
            >
              {services.map((item) => (
                <option key={item.slug} value={item.name} className="bg-emerald-950 text-white">
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0 mt-1 sm:mt-0">
            <button
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-lg gradient-btn-gold px-4 py-2.5 text-xs font-bold text-ink shadow-md transition active:scale-95 disabled:opacity-50 min-h-[40px]"
              type="submit"
              disabled={loading}
            >
              {submitted ? <Check size={14} /> : <Sparkles size={14} />}
              <span>{submitted ? "Received!" : loading ? "Sending..." : "Get Free Estimate"}</span>
            </button>

            <a
              aria-label="Call ATS Interior"
              className="hidden sm:grid size-9 place-items-center rounded-lg bg-white/10 text-white transition hover:bg-white/20 hover:text-gold-400"
              href={`tel:${site.phone.replaceAll(" ", "")}`}
            >
              <Phone size={14} />
            </a>

            <a
              aria-label="WhatsApp ATS Interior"
              className="hidden sm:grid size-9 place-items-center rounded-lg bg-emerald-800 text-gold-400 border border-gold-500/30 transition hover:bg-emerald-700"
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
