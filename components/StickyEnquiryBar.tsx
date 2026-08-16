"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, Send, Sparkles } from "lucide-react";
import { site, whatsappHref } from "@/data/site";

export function StickyEnquiryBar() {
  const [city, setCity] = useState("Noida");
  const [service, setService] = useState("Interior Design");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          city,
          service,
          source: "Sticky Quick Bar"
        })
      });
    } catch {
      // Fallback
    } finally {
      setSubmitted(true);
    }
  };

  return (
    <div className="sticky top-[60px] sm:top-[64px] z-40 bg-navy-900 border-b border-amber-500/30 text-white shadow-xl backdrop-blur-md transition-all">
      <div className="section-shell py-2.5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/20 px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-amber-400 border border-amber-500/40">
              <Sparkles size={12} className="animate-pulse" /> ⚡ 10-Sec Quote
            </span>
            <span className="hidden md:inline text-xs font-semibold text-white/90">
              Get direct estimate from Manoj Sharma & team
            </span>
          </div>

          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center gap-1 text-xs font-bold text-amber-400 sm:hidden hover:text-amber-300"
          >
            {collapsed ? (
              <><span>Expand</span> <ChevronDown size={16} /></>
            ) : (
              <><span>Hide Bar</span> <ChevronUp size={16} /></>
            )}
          </button>
        </div>

        {!collapsed && (
          <div className="mt-2.5">
            {submitted ? (
              <div className="flex items-center justify-between rounded-xl bg-amber-500/20 px-4 py-2 text-xs font-bold text-amber-300 border border-amber-500/40 animate-slide-up">
                <span>✓ Direct callback request logged! Design lead will call {phone} shortly.</span>
                <a
                  className="inline-flex items-center gap-1.5 rounded-lg gradient-btn-gold px-3 py-1 text-navy-950 font-extrabold shadow"
                  href={whatsappHref(`Hi ATS Interior, I requested a callback for ${service} in ${city} via Quick Bar.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={14} /> Open WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-2 sm:grid-cols-[1fr_1fr_1.3fr_auto] items-center">
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="rounded-lg bg-navy-950 border border-amber-500/30 px-3 py-2 text-xs font-semibold text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="Noida">City: Noida</option>
                  <option value="Greater Noida">City: Greater Noida</option>
                  <option value="Ghaziabad">City: Ghaziabad</option>
                  <option value="Delhi NCR">City: Delhi NCR</option>
                </select>

                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="rounded-lg bg-navy-950 border border-amber-500/30 px-3 py-2 text-xs font-semibold text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="Interior Design">Scope: Full Interior</option>
                  <option value="Modular Kitchen">Scope: Modular Kitchen</option>
                  <option value="Wardrobe">Scope: Wardrobe</option>
                  <option value="False Ceiling">Scope: False Ceiling</option>
                </select>

                <input
                  type="tel"
                  required
                  placeholder="Enter Phone Number for Quote"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="rounded-lg bg-navy-950 border border-amber-500/30 px-3 py-2 text-xs font-semibold text-white placeholder:text-white/50 focus:border-amber-400 focus:outline-none"
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-1.5 rounded-lg gradient-btn-gold px-4 py-2 text-xs font-extrabold text-navy-950 shadow-gold transition hover:scale-105 active:scale-95"
                >
                  <span>Request Quote</span> <Send size={13} />
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
