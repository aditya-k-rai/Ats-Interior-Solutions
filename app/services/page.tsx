import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { services, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Interior Design Services in Noida, Greater Noida, Ghaziabad & Delhi NCR",
  description: "Explore ATS Interior Solutions home interior design, modular kitchens, false ceilings, wardrobes, bathrooms, wallpaper and office interiors across NCR.",
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ATS Interior Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: `${site.url}/${service.slug}-noida`
    }))
  };

  return (
    <main className="bg-porcelain">
      <JsonLd data={serviceSchema} />
      <section className="hero-image min-h-[52vh] text-white">
        <div className="section-shell flex min-h-[52vh] items-end pb-12 pt-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">Services</p>
            <h1 className="mt-2 font-display text-6xl">Premium interiors across Delhi NCR</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/82">
              Interior design, modular kitchens, wardrobes, false ceilings and bathroom upgrades tailored for homes, apartments and offices across Noida, Greater Noida, Ghaziabad and Delhi.
            </p>
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      <section className="py-16">
        <div className="section-shell grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link className="rounded-lg bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg" href={`/${service.slug}-noida`} key={service.slug}>
                <Icon className="mb-5 text-clay" size={28} />
                <h2 className="font-display text-3xl">{service.name}</h2>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-graphite">{service.short}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-md bg-mist px-3 py-2 text-xs font-semibold text-moss">{service.budget}</span>
                  <span className="rounded-md border border-moss/15 px-3 py-2 text-xs font-semibold text-ink">{service.timeline}</span>
                </div>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-moss">
                  View Noida page <ArrowRight size={16} />
                </p>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
