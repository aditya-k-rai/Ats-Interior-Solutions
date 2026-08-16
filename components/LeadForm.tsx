"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, MessageCircle, Send, Sparkles } from "lucide-react";
import { cities, services, whatsappHref } from "@/data/site";

const budgets = ["Below Rs. 5L", "Rs. 5-10L", "Rs. 10-15L", "Rs. 15-25L", "Rs. 25L+", "Not decided"];
const timelines = ["Immediate", "Within 1 month", "1-3 months", "3-6 months", "Exploring"];
const properties = ["2 BHK", "3 BHK", "4 BHK", "Villa", "Office", "Shop", "Other"];

type LeadFormProps = {
  compact?: boolean;
  defaultService?: string;
  defaultCity?: string;
};

export function LeadForm({ compact = false, defaultService = "Interior Design", defaultCity = "Noida" }: LeadFormProps) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    service: defaultService,
    city: defaultCity,
    property: "3 BHK",
    budget: "Rs. 10-15L",
    timeline: "1-3 months",
    name: "",
    phone: "",
    email: ""
  });

  const score = useMemo(() => {
    let value = 15;
    if (["Rs. 15-25L", "Rs. 25L+"].includes(form.budget)) value += 30;
    if (["Greater Noida", "Noida", "Ghaziabad", "Delhi NCR"].includes(form.city)) value += 20;
    if (["Immediate", "Within 1 month", "1-3 months"].includes(form.timeline)) value += 20;
    if (form.service === "Interior Design") value += 15;
    if (form.service === "Modular Kitchen") value += 10;
    if (form.phone.length >= 10) value += 10;
    if (["4 BHK", "Villa", "Office", "Shop"].includes(form.property)) value += 10;
    return Math.min(value, 100);
  }, [form]);

  const options = [
    {
      label: "Requirement",
      content: (
        <Field label="What service are you looking for?">
          <select value={form.service} onChange={(event) => setForm({ ...form, service: event.target.value })}>
            {services.map((service) => (
              <option key={service.slug}>{service.name}</option>
            ))}
          </select>
        </Field>
      )
    },
    {
      label: "Location",
      content: (
        <Field label="Where is your property located?">
          <select value={form.city} onChange={(event) => setForm({ ...form, city: event.target.value })}>
            {cities.map((city) => (
              <option key={city.slug}>{city.name}</option>
            ))}
            <option>Other</option>
          </select>
        </Field>
      )
    },
    {
      label: "Property",
      content: (
        <Field label="Property Type / Layout">
          <select value={form.property} onChange={(event) => setForm({ ...form, property: event.target.value })}>
            {properties.map((property) => (
              <option key={property}>{property}</option>
            ))}
          </select>
        </Field>
      )
    },
    {
      label: "Budget",
      content: (
        <Field label="Approximate Budget Band">
          <select value={form.budget} onChange={(event) => setForm({ ...form, budget: event.target.value })}>
            {budgets.map((budget) => (
              <option key={budget}>{budget}</option>
            ))}
          </select>
        </Field>
      )
    },
    {
      label: "Timeline",
      content: (
        <Field label="Expected Work Start Date">
          <select value={form.timeline} onChange={(event) => setForm({ ...form, timeline: event.target.value })}>
            {timelines.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
        </Field>
      )
    },
    {
      label: "Contact",
      content: (
        <div className="grid gap-3">
          <Field label="Your Full Name">
            <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="e.g. Rahul Sharma" />
          </Field>
          <Field label="Phone / WhatsApp Number">
            <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="10-digit mobile number" inputMode="tel" />
          </Field>
          <Field label="Email Address (Optional)">
            <input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="name@example.com" type="email" />
          </Field>
        </div>
      )
    }
  ];

  const message = `Hi ATS, I am interested in ${form.service} in ${form.city}. Property: ${form.property}, Budget: ${form.budget}, Timeline: ${form.timeline}. My Name: ${form.name || "Client"}.`;

  if (compact) {
    return (
      <form className="grid gap-3 rounded-xl bg-white p-5 shadow-xl border border-emerald-900/10">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles className="text-gold-600" size={18} />
          <h3 className="font-display text-xl text-emerald-950">Quick Consultation</h3>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Name">
            <input placeholder="Your name" />
          </Field>
          <Field label="Phone">
            <input placeholder="Mobile number" inputMode="tel" />
          </Field>
          <Field label="City">
            <select defaultValue={defaultCity}>
              {cities.map((city) => (
                <option key={city.slug}>{city.name}</option>
              ))}
            </select>
          </Field>
          <Field label="Service">
            <select defaultValue={defaultService}>
              {services.map((service) => (
                <option key={service.slug}>{service.name}</option>
              ))}
            </select>
          </Field>
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg gradient-btn-gold px-4 py-3 text-xs font-bold text-ink shadow-md transition hover:scale-105" type="button">
            <Send size={15} /> Free Consultation
          </button>
          <a className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-800 text-gold-400 border border-gold-500/30 px-4 py-3 text-xs font-bold shadow-md transition hover:bg-emerald-700" href={whatsappHref(message)} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={15} /> WhatsApp
          </a>
        </div>
      </form>
    );
  }

  return (
    <div className="rounded-2xl bg-white/95 p-6 shadow-2xl backdrop-blur-md border border-white/40 sm:p-7 transition-all duration-300">
      <div className="mb-5 flex items-center justify-between gap-3 border-b border-emerald-900/10 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-emerald-800 border border-emerald-200">
            <Sparkles size={12} className="text-gold-600" /> Step {step + 1} of 6
          </span>
          <h3 className="font-display text-2xl text-emerald-950 mt-1.5">Book Free Consultation</h3>
        </div>
        <div className="rounded-xl bg-emerald-950 p-3 text-right text-white shadow-inner border border-gold-500/20">
          <p className="text-[10px] uppercase font-bold text-gold-400 tracking-wider">Lead Score</p>
          <p className="font-display text-xl font-bold text-white">{score}<span className="text-xs text-gold-400">/100</span></p>
        </div>
      </div>

      {/* Progress Indicators */}
      <div className="mb-6 grid grid-cols-6 gap-1.5">
        {options.map((option, index) => (
          <button
            aria-label={option.label}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === step
                ? "bg-gold-400 shadow-glow"
                : index < step
                ? "bg-emerald-800"
                : "bg-linen"
            }`}
            key={option.label}
            onClick={() => setStep(index)}
            type="button"
          />
        ))}
      </div>

      {/* Active Form Field */}
      <div className="min-h-[105px] animate-slide-up">{options[step].content}</div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-emerald-900/10 pt-4">
        <button
          className="inline-flex items-center gap-2 rounded-lg border border-emerald-900/20 px-4 py-2.5 text-xs font-bold text-emerald-950 transition hover:bg-mist disabled:opacity-40 disabled:hover:bg-transparent cursor-pointer"
          disabled={step === 0}
          onClick={() => setStep((value) => Math.max(0, value - 1))}
          type="button"
        >
          <ArrowLeft size={15} /> Back
        </button>

        {step < options.length - 1 ? (
          <button
            className="inline-flex items-center gap-2 rounded-lg gradient-btn-gold px-5 py-2.5 text-xs font-bold text-ink shadow-md transition hover:scale-105 cursor-pointer"
            onClick={() => setStep((value) => Math.min(options.length - 1, value + 1))}
            type="button"
          >
            Next Step <ArrowRight size={15} />
          </button>
        ) : (
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-800 text-gold-400 border border-gold-500/30 px-5 py-2.5 text-xs font-bold shadow-lg transition hover:bg-emerald-700 cursor-pointer"
            href={whatsappHref(message)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Check size={15} /> Send via WhatsApp
          </a>
        )}
      </div>

      <p className="mt-4 text-[11px] leading-4 text-graphite/80 flex items-center gap-1">
        <CheckCircle2 size={13} className="text-emerald-800 shrink-0" />
        <span>By submitting, you agree to be contacted by ATS Interior Solutions for your free evaluation.</span>
      </p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-xs font-bold uppercase tracking-wider text-graphite">
      {label}
      <span className="contents [&>input]:w-full [&>input]:rounded-lg [&>input]:border [&>input]:border-emerald-900/20 [&>input]:bg-white [&>input]:px-3.5 [&>input]:py-3 [&>input]:text-sm [&>input]:font-normal [&>input]:text-emerald-950 [&>input]:focus:border-gold-400 [&>input]:focus:outline-none [&>select]:w-full [&>select]:rounded-lg [&>select]:border [&>select]:border-emerald-900/20 [&>select]:bg-white [&>select]:px-3.5 [&>select]:py-3 [&>select]:text-sm [&>select]:font-normal [&>select]:text-emerald-950 [&>select]:focus:border-gold-400 [&>select]:focus:outline-none">
        {children}
      </span>
    </label>
  );
}
