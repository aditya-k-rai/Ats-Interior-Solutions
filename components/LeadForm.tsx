"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Check, MessageCircle, Send } from "lucide-react";
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
    let value = 10;
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
        <Field label="What are you looking for?">
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
        <Field label="Where is the property?">
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
        <Field label="Property type">
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
        <Field label="Approximate budget">
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
        <Field label="Expected start">
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
          <Field label="Name">
            <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" />
          </Field>
          <Field label="Phone / WhatsApp">
            <input value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} placeholder="10 digit mobile" inputMode="tel" />
          </Field>
          <Field label="Email">
            <input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="Optional" type="email" />
          </Field>
        </div>
      )
    }
  ];

  const message = `I am interested in ${form.service} in ${form.city}. Property: ${form.property}. Budget: ${form.budget}. Timeline: ${form.timeline}.`;

  if (compact) {
    return (
      <form className="grid gap-3 rounded-lg bg-white p-4 shadow-soft">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Name">
            <input placeholder="Your name" />
          </Field>
          <Field label="Phone">
            <input placeholder="Phone number" inputMode="tel" />
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
        <div className="flex flex-wrap gap-2">
          <button className="inline-flex items-center justify-center gap-2 rounded-md bg-clay px-4 py-3 text-sm font-semibold text-white" type="button">
            <Send size={16} /> Get Free Consultation
          </button>
          <a className="inline-flex items-center justify-center gap-2 rounded-md border border-moss/20 px-4 py-3 text-sm font-semibold text-moss" href={whatsappHref(message)}>
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
        <p className="text-xs leading-5 text-graphite">By enquiring, you agree to be contacted about your project. Your details are used for consultation follow-up.</p>
      </form>
    );
  }

  return (
    <div className="rounded-lg bg-white p-4 shadow-soft sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Qualified enquiry</p>
          <h3 className="font-display text-2xl text-ink">Book a free consultation</h3>
        </div>
        <div className="rounded-md bg-mist px-3 py-2 text-right">
          <p className="text-xs text-graphite">Lead score</p>
          <p className="font-bold text-moss">{score}/100</p>
        </div>
      </div>
      <div className="mb-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
        {options.map((option, index) => (
          <button
            aria-label={option.label}
            className={`h-2 rounded-full ${index <= step ? "bg-clay" : "bg-linen"}`}
            key={option.label}
            onClick={() => setStep(index)}
            type="button"
          />
        ))}
      </div>
      <div className="min-h-[96px]">{options[step].content}</div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <button
          className="inline-flex items-center gap-2 rounded-md border border-moss/20 px-4 py-3 text-sm font-semibold text-moss disabled:opacity-40"
          disabled={step === 0}
          onClick={() => setStep((value) => Math.max(0, value - 1))}
          type="button"
        >
          <ArrowLeft size={16} /> Back
        </button>
        {step < options.length - 1 ? (
          <button
            className="inline-flex items-center gap-2 rounded-md bg-moss px-4 py-3 text-sm font-semibold text-white"
            onClick={() => setStep((value) => Math.min(options.length - 1, value + 1))}
            type="button"
          >
            Next <ArrowRight size={16} />
          </button>
        ) : (
          <a className="inline-flex items-center gap-2 rounded-md bg-clay px-4 py-3 text-sm font-semibold text-white" href={whatsappHref(message)}>
            <Check size={16} /> Send on WhatsApp
          </a>
        )}
      </div>
      <p className="mt-4 text-xs leading-5 text-graphite">By continuing, you agree to be contacted by ATS Interior Solutions about this enquiry.</p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1.5 text-sm font-semibold text-ink">
      {label}
      <span className="contents [&>input]:w-full [&>input]:rounded-md [&>input]:border [&>input]:border-moss/20 [&>input]:bg-white [&>input]:px-3 [&>input]:py-3 [&>input]:font-normal [&>select]:w-full [&>select]:rounded-md [&>select]:border [&>select]:border-moss/20 [&>select]:bg-white [&>select]:px-3 [&>select]:py-3 [&>select]:font-normal">
        {children}
      </span>
    </label>
  );
}
