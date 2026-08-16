"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, ChevronRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { whatsappHref } from "@/data/site";

interface LeadFormProps {
  defaultCity?: string;
  defaultService?: string;
  compact?: boolean;
}

export function LeadForm({ defaultCity = "Noida", defaultService = "Full Home Interior", compact }: LeadFormProps = {}) {
  const [step, setStep] = useState(1);
  const [city, setCity] = useState(defaultCity);
  const [bhk, setBhk] = useState("3 BHK");
  const [service, setService] = useState(defaultService);
  const [budget, setBudget] = useState("10L - 15L");
  const [timeline, setTimeline] = useState("1-2 Months");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Calculate Lead Score dynamically (CRO Science)
  const calculateLeadScore = () => {
    let score = 40;
    if (city === "Noida" || city === "Greater Noida") score += 20;
    if (budget === "15L - 25L" || budget === "25L+") score += 25;
    else if (budget === "10L - 15L") score += 15;
    if (timeline === "Immediate" || timeline === "1-2 Months") score += 15;
    return Math.min(score, 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setLoading(true);

    try {
      await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          city,
          bhk,
          service,
          budget,
          timeline,
          leadScore: calculateLeadScore()
        })
      });
    } catch {
      // Fallback gracefully
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const whatsappMessage = `Hi ATS Interior, I requested a quote:\nName: ${name}\nCity: ${city}\nScope: ${service} (${bhk})\nBudget: ${budget}\nTimeline: ${timeline}`;

  if (submitted) {
    return (
      <div className="rounded-2xl bg-white p-7 sm:p-8 shadow-navy border border-amber-500/30 text-center animate-slide-up">
        <div className="mx-auto mb-4 grid size-16 place-items-center rounded-full bg-amber-100 text-amber-600 font-bold">
          <CheckCircle2 size={36} />
        </div>
        <span className="inline-block rounded-full bg-navy-950 px-3.5 py-1 text-xs font-bold text-amber-400 mb-2">
          Lead Qualified • {calculateLeadScore()}% Priority Match
        </span>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-navy-950">Thank You, {name}!</h3>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Your project requirement for <strong>{service} ({bhk})</strong> in <strong>{city}</strong> has been logged. Our Design Director will call you within 1 hour.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <a
            className="inline-flex items-center justify-center gap-2 rounded-xl gradient-btn-gold px-6 py-3.5 text-sm font-bold text-navy-950 shadow-gold transition hover:scale-105"
            href={whatsappHref(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Connect Instantly on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl bg-white p-6 sm:p-7 shadow-navy border border-navy-950/10 relative overflow-hidden ${compact ? "max-w-md mx-auto" : ""}`}>
      {/* High-Converting Accent Header */}
      <div className="mb-5 flex items-center justify-between border-b border-slate-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-amber-600">
            <Sparkles size={13} className="text-amber-500" /> Instant 60-Second Quote
          </span>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-950 mt-0.5">Get Free Design Estimate</h3>
        </div>
        <div className="text-right">
          <span className="text-xs font-extrabold text-navy-900">Step {step} of 3</span>
          <div className="mt-1 flex gap-1">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`h-1.5 w-6 rounded-full transition-all duration-300 ${
                  i <= step ? "bg-amber-500 shadow-sm" : "bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="grid gap-4 animate-slide-up">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">1. Select City</label>
              <div className="grid grid-cols-2 gap-2">
                {["Noida", "Greater Noida", "Ghaziabad", "Delhi NCR"].map((c) => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => setCity(c)}
                    className={`rounded-xl px-3 py-2.5 text-xs font-bold transition border ${
                      city === c
                        ? "bg-navy-950 text-amber-400 border-navy-950 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">2. Property Scope</label>
              <div className="grid grid-cols-3 gap-2">
                {["2 BHK", "3 BHK", "4 BHK / Villa", "Modular Kitchen", "Wardrobes", "Office"].map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => {
                      if (s.includes("BHK") || s.includes("Villa")) {
                        setBhk(s);
                        setService("Full Home Interior");
                      } else {
                        setService(s);
                      }
                    }}
                    className={`rounded-xl px-2 py-2 text-xs font-bold transition border ${
                      (s.includes("BHK") && bhk === s) || service === s
                        ? "bg-amber-500 text-navy-950 border-amber-400 shadow-sm font-extrabold"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStep(2)}
              className="mt-2 w-full inline-flex items-center justify-center gap-2 rounded-xl gradient-btn-gold py-3.5 text-sm font-bold text-navy-950 shadow-gold transition hover:scale-[1.02] active:scale-95"
            >
              <span>Next: Budget & Timeline</span> <ChevronRight size={18} />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4 animate-slide-up">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">3. Budget Range</label>
              <div className="grid grid-cols-2 gap-2">
                {["3L - 6L", "6L - 10L", "10L - 15L", "15L - 25L+"].map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setBudget(b)}
                    className={`rounded-xl px-3 py-2.5 text-xs font-bold transition border ${
                      budget === b
                        ? "bg-navy-950 text-amber-400 border-navy-950 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    Rs. {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">4. Expected Timeline</label>
              <div className="grid grid-cols-3 gap-2">
                {["Immediate", "1-2 Months", "Planning"].map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTimeline(t)}
                    className={`rounded-xl px-2.5 py-2 text-xs font-bold transition border ${
                      timeline === t
                        ? "bg-amber-500 text-navy-950 border-amber-400 shadow-sm"
                        : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2 mt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 rounded-xl border border-slate-300 bg-slate-100 py-3 text-xs font-bold text-slate-700 hover:bg-slate-200"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="w-2/3 inline-flex items-center justify-center gap-2 rounded-xl gradient-btn-gold py-3 text-sm font-bold text-navy-950 shadow-gold hover:scale-[1.02]"
              >
                <span>Final Step: Contact</span> <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-3.5 animate-slide-up">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1">Your Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Ritika Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-navy-950 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1">Phone Number (For WhatsApp Quote)</label>
              <input
                type="tel"
                required
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-navy-950 focus:border-amber-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <div className="rounded-xl bg-amber-50 border border-amber-200 p-3 text-[11px] text-amber-900 flex items-center justify-between">
              <span>Selected: <strong>{city}</strong> • <strong>{bhk}</strong> • <strong>{budget}</strong></span>
              <button type="button" onClick={() => setStep(1)} className="text-amber-700 underline font-bold">Edit</button>
            </div>

            <div className="flex gap-2 mt-1">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="w-1/3 rounded-xl border border-slate-300 bg-slate-100 py-3 text-xs font-bold text-slate-700 hover:bg-slate-200"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-2/3 inline-flex items-center justify-center gap-2 rounded-xl gradient-btn-gold py-3 text-sm font-extrabold text-navy-950 shadow-gold transition hover:scale-105 active:scale-95"
              >
                {loading ? "Calculating..." : "Get Detailed Estimate"} <ArrowRight size={18} />
              </button>
            </div>

            <p className="text-[10px] text-center text-slate-500 mt-1 flex items-center justify-center gap-1">
              <ShieldCheck size={13} className="text-amber-600" /> 100% Privacy • No Spam Guarantee
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
