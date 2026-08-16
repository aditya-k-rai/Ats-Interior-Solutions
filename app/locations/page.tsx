import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { cities, services, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Interior Designers in Greater Noida, Noida, Ghaziabad & Delhi NCR",
  description: "Find ATS Interior Solutions local hub pages for Greater Noida, Noida, Ghaziabad and Delhi NCR with service coverage, project proof and local consultations.",
  alternates: {
    canonical: "/locations"
  }
};

export default function LocationsPage() {
  const citySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ATS Interior Service Areas",
    itemListElement: cities.map((city, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: city.name,
      url: `${site.url}/locations/${city.slug}`
    }))
  };

  return (
    <main className="bg-porcelain">
      <JsonLd data={citySchema} />
      <section className="hero-image min-h-[52vh] text-white">
        <div className="section-shell flex min-h-[52vh] items-end pb-12 pt-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">Local hubs</p>
            <h1 className="mt-2 font-display text-6xl">Interior services across Delhi NCR</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/82">
              Discover ATS Interior Solutions service coverage in the precincts and neighbourhoods homeowners search most often across Greater Noida, Noida, Ghaziabad and Delhi.
            </p>
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }]} />
      <section className="py-16">
        <div className="section-shell grid gap-4 md:grid-cols-2">
          {cities.map((city) => (
            <Link className="rounded-lg bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg" href={`/locations/${city.slug}`} key={city.slug}>
              <MapPin className="mb-5 text-clay" size={28} />
              <h2 className="font-display text-4xl">{city.name}</h2>
              <p className="mt-3 leading-7 text-graphite">{city.focus}.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {services.slice(0, 4).map((service) => (
                  <span className="rounded-md bg-mist px-3 py-2 text-xs font-semibold text-moss" key={service.slug}>{service.name}</span>
                ))}
              </div>
              <p className="mt-6 inline-flex items-center gap-2 font-semibold text-moss">
                View city hub <ArrowRight size={18} />
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
