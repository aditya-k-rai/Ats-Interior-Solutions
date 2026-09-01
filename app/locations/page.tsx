import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, MapPin, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { cities, services, site, whatsappHref } from "@/data/site";
import { premiumLocations } from "@/data/locations50";
import { societiesData } from "@/data/societies";

export const metadata: Metadata = {
  title: "Top 50 Premium Interior Locations in Noida & Greater Noida | ATS",
  description: "Explore ATS Interior Solutions service coverage across 50+ luxury sectors in Noida Expressway, Central Noida, Greater Noida, and Greater Noida West. Local pricing, societies & estimates.",
  alternates: {
    canonical: "/locations"
  }
};

export default function LocationsPage() {
  const citySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ATS Interior Service Areas & Premium Sectors",
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

      {/* Hero Section */}
      <section className="hero-image min-h-[55vh] text-white relative flex items-center py-20">
        <div className="section-shell w-full pt-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full bg-navy-950/85 sm:bg-navy-950/80 px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider sm:tracking-[0.15em] backdrop-blur-md border border-amber-400/80 text-amber-300 shadow-[0_2px_12px_rgba(0,0,0,0.4),0_0_12px_rgba(245,158,11,0.25)]">
                <Sparkles size={14} className="text-amber-400 shrink-0 animate-spin" />
                <span>Hyperlocal NCR Coverage • 50+ Premium Sectors</span>
              </div>
              <h1 className="text-balance font-display text-4xl sm:text-6xl font-bold leading-tight">
                Interior Services Across Delhi NCR
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/85">
                Explore ATS Interior Solutions hyper-local service coverage across 50+ high-demand sectors in Noida Expressway, Central Noida, Greater Noida, and Greater Noida West.
              </p>
            </div>

            {/* Desktop Feature Card */}
            <div className="rounded-2xl glass-dark p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 size-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                <Building2 size={14} /> Local Studio Reach
              </span>
              <h3 className="font-display text-2xl text-white font-bold mt-1">4 Major City Hubs</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80">
                Greater Noida (Pari Chowk, Site-4), Noida Expressway (Sector 128, 137, 150), Ghaziabad (Indirapuram), & Delhi NCR.
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                <span>📍 Site Measurement in 24 Hours</span>
                <span className="font-bold text-amber-400">Zero Travel Charge</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }]} />

      {/* 4 Main City Hubs */}
      <section className="py-16">
        <div className="section-shell">
          <div className="mb-8">
            <p className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Major City Hubs</p>
            <h2 className="font-display text-3xl sm:text-4xl text-navy-950 font-bold mt-1">
              Select Your City
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {cities.map((city) => (
              <Link
                className="group rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-navy-950/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-500/40"
                href={`/locations/${city.slug}`}
                key={city.slug}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="size-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 border border-amber-500/20">
                    <MapPin size={24} />
                  </div>
                  <span className="text-xs font-bold text-navy-950/60 uppercase tracking-wider">{city.areas.length}+ Local Areas</span>
                </div>
                <h3 className="font-display text-3xl text-navy-950 font-bold group-hover:text-amber-600 transition">{city.name}</h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-graphite">{city.focus}.</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {services.slice(0, 4).map((service) => (
                    <span className="rounded-lg bg-porcelain px-3 py-1.5 text-xs font-semibold text-navy-950 border border-navy-950/5" key={service.slug}>
                      {service.name}
                    </span>
                  ))}
                </div>
                <p className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold text-amber-600">
                  <span>Explore {city.name} Hub</span>
                  <ArrowRight size={16} />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top 50 Premium Sectors Grid */}
      <section className="bg-white py-16 border-t border-navy-950/10">
        <div className="section-shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Hyper-Local Sectors</p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-950 font-bold mt-1">
                Top 50 Premium Locations & Sectors
              </h2>
            </div>
            <p className="text-sm text-graphite max-w-md">
              Each sector features verified property valuation ranges, average turnkey interior estimates, and direct links to society case studies.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {premiumLocations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/interior-design-${loc.slug}`}
                className="group p-5 rounded-xl bg-porcelain border border-navy-950/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-amber-500/40 hover:bg-white"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-extrabold uppercase text-amber-600">{loc.city}</span>
                  <span className="text-[11px] text-graphite font-semibold">{loc.avgPropertyPrice}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-navy-950 group-hover:text-amber-600 transition">
                  {loc.name}
                </h3>
                <p className="text-xs text-graphite mt-1 mb-3 line-clamp-1">{loc.zone}</p>
                <div className="text-[11px] text-graphite/80 space-y-1 border-t border-navy-950/5 pt-2">
                  <p><strong className="text-navy-950">Interior Budget:</strong> {loc.interiorBudgetAvg}</p>
                  <p><strong className="text-navy-950">Top Societies:</strong> {loc.topSocieties.slice(0, 2).join(", ")}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Societies CTA */}
      <section className="py-16 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 size-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="section-shell relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400">Verified Project Proof</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mt-1">
              Looking for Your Specific Society?
            </h2>
            <p className="mt-3 text-sm text-white/80 max-w-xl">
              We have completed turnkey interiors and modular kitchens across 30+ flagship societies including Kalpataru Vista, Jaypee Greens, County 107, M3M Cullinan, and more.
            </p>
          </div>
          <Link
            href="/societies"
            className="rounded-xl gradient-btn-gold px-7 py-4 text-xs sm:text-sm font-extrabold text-navy-950 shadow-gold transition hover:scale-105"
          >
            Explore 30+ High Society Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
