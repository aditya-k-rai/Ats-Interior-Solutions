"use client";

import { useState } from "react";
import { Check, MessageCircle, Phone, Send } from "lucide-react";
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
      // Fallback response
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const message = `I want a free consultation for ${service} in ${city}. Name: ${name || "Client"}, Phone: ${phone}.`;

  return (
    <div className="sticky top-0 z-40 border-b border-ink/10 bg-porcelain/95 py-2 shadow-sm backdrop-blur">
      <form onSubmit={handleSubmit} className="section-shell grid gap-2 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.9fr_1fr_auto_auto_auto]">
        <input
          className="rounded-md border border-moss/20 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-moss"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="rounded-md border border-moss/20 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-moss"
          inputMode="tel"
          placeholder="Phone (10 digits)"
          required
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <select
          className="rounded-md border border-moss/20 px-3 py-2 text-sm bg-white"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        >
          {cities.map((item) => (
            <option key={item.slug}>{item.name}</option>
          ))}
        </select>
        <select
          className="rounded-md border border-moss/20 px-3 py-2 text-sm bg-white"
          value={service}
          onChange={(event) => setService(event.target.value)}
        >
          {services.map((item) => (
            <option key={item.slug}>{item.name}</option>
          ))}
        </select>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-md bg-moss px-4 py-2 text-sm font-semibold text-white transition hover:bg-moss/90 disabled:opacity-50"
          type="submit"
          disabled={loading}
        >
          {submitted ? <Check size={16} /> : <Send size={16} />}
          {submitted ? "Submitted!" : loading ? "Sending..." : "Submit"}
        </button>
        <a
          aria-label="Call ATS Interior Solutions"
          className="grid size-10 place-items-center rounded-md border border-moss/20 text-moss transition hover:bg-mist"
          href={`tel:${site.phone.replaceAll(" ", "")}`}
        >
          <Phone size={18} />
        </a>
        <a
          aria-label="WhatsApp ATS Interior Solutions"
          className="grid size-10 place-items-center rounded-md bg-clay text-white transition hover:bg-clay/90"
          href={whatsappHref(message)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={18} />
        </a>
      </form>
    </div>
  );
}
