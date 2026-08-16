import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { cities, site, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Book a Free Consultation for Interior Design in NCR",
  description: "Contact ATS Interior Solutions for a free consultation across Noida, Greater Noida, Ghaziabad and Delhi NCR.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82",
    telephone: site.phone,
    email: site.email,
    address: site.address,
    areaServed: cities.map((city) => city.name),
    url: site.url
  };

  return (
    <main className="bg-porcelain">
      <JsonLd data={localBusiness} />
      <section className="hero-image min-h-[52vh] text-white">
        <div className="section-shell flex min-h-[52vh] items-end pb-12 pt-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">Contact</p>
            <h1 className="mt-2 font-display text-6xl">Book a free consultation</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/82">
              Tell us your city, property type and budget. We’ll guide the right design scope, material direction and next steps.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="rounded-lg bg-white p-6 shadow-soft">
            <h2 className="font-display text-3xl">ATS Interior Solutions</h2>
            <div className="mt-5 grid gap-3 text-sm leading-6 text-graphite">
              <p>Phone: <a className="font-semibold text-moss" href={`tel:${site.phone.replaceAll(" ", "")}`}>{site.phone}</a></p>
              <p>Email: <a className="font-semibold text-moss" href={`mailto:${site.email}`}>{site.email}</a></p>
              <p>Address: {site.address}</p>
              <p>Service areas: {cities.map((city) => city.name).join(", ")}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a className="inline-flex rounded-md bg-clay px-4 py-3 text-sm font-semibold text-white" href={whatsappHref("I want to book a free consultation.")}>
                WhatsApp now
              </a>
              <a className="inline-flex rounded-md border border-moss/20 px-4 py-3 text-sm font-semibold text-moss" href={`tel:${site.phone.replaceAll(" ", "")}`}>
                Call ATS
              </a>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
