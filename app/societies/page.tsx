import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, MapPin, Sparkles, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { societiesData } from "@/data/societies";
import { site, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Top 30 High Society Interior Projects in Noida & Greater Noida | ATS",
  description: "Explore completed interior design & modular kitchen case studies across top luxury societies in Noida & Greater Noida. Kalpataru Vista, Jaypee Greens, County 107, M3M Cullinan & more.",
  alternates: {
    canonical: "/societies"
  }
};

export default function SocietiesDirectoryPage() {
  const directorySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ATS Interior Solutions - High Society Project Portfolio",
    description: "Verified luxury interior fit-outs delivered across Noida and Greater Noida flagship societies.",
    itemListElement: societiesData.map((society, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: `${society.name} - ${society.workDoneTitle}`,
      url: `${site.url}/societies/${society.slug}`
    }))
  };

  return (
    <main className="bg-porcelain">
      <JsonLd data={directorySchema} />

      {/* Hero Section */}
      <section className="hero-image min-h-[55vh] text-white relative flex items-center py-20">
        <div className="section-shell w-full pt-12">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur border border-amber-500/30 text-amber-300 shadow-sm">
                <Sparkles size={14} className="text-amber-400 animate-pulse" />
                <span>Hyper-Local Society Proof • Noida & Greater Noida</span>
              </div>
              <h1 className="text-balance font-display text-4xl sm:text-6xl font-bold leading-tight">
                Top Luxury Society Projects
              </h1>
              <p className="mt-4 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/85">
                Explore real turnkey interiors, bare-shell executions, and German modular kitchens delivered across Noida Expressway, Jaypee Greens, and Greater Noida&apos;s most prestigious enclaves.
              </p>
            </div>

            {/* Right-Side Desktop Feature Card */}
            <div className="rounded-2xl glass-dark p-6 sm:p-8 border border-amber-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 size-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 flex items-center gap-1.5">
                <Building2 size={14} /> Flagship Coverage
              </span>
              <h3 className="font-display text-2xl text-white font-bold mt-1">30+ High Society Case Studies</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80">
                Pre-rendered architectural specs, material checklists (IS 710 BWP, HDHMR, Blum/Häfele), property valuation brackets, and verified client story handovers.
              </p>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                <span>⚡ 3D Floor Plan Approval</span>
                <span className="font-bold text-amber-400">100% Price Lock BOQ</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Societies", href: "/societies" }]} />

      {/* Trust Badges */}
      <section className="bg-white py-6 border-b border-navy-950/10">
        <div className="section-shell grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Luxury Societies Delivered", value: "30+" },
            { label: "Starting Fit-out Budget", value: "₹5L – ₹1.5 Cr+" },
            { label: "Hardware Standards", value: "Blum / Häfele" },
            { label: "Execution Warranty", value: "1 Year Complete" }
          ].map((item) => (
            <div className="rounded-xl bg-porcelain p-4 text-center border border-amber-500/20" key={item.label}>
              <p className="text-xs text-graphite font-semibold">{item.label}</p>
              <p className="font-display text-2xl font-bold text-navy-950 mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Society Grid */}
      <section className="py-16">
        <div className="section-shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Verified Project Proof</p>
              <h2 className="font-display text-3xl sm:text-4xl text-navy-950 font-bold mt-1">
                Explore Society Case Studies
              </h2>
            </div>
            <p className="text-sm text-graphite max-w-md">
              Each case study details the exact work scope, material specifications (IS 710 BWP, HDHMR, Quartz), budget tier, and client review.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {societiesData.map((society) => (
              <article
                key={society.slug}
                className="group flex flex-col rounded-2xl bg-white overflow-hidden shadow-soft border border-navy-950/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div className="relative h-56 w-full overflow-hidden bg-navy-950">
                  <Image
                    src={society.heroImage}
                    alt={`${society.name} Interior by ATS`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="rounded-full bg-navy-950/80 backdrop-blur px-3 py-1 text-[11px] font-extrabold text-amber-400 border border-amber-500/30">
                      {society.sector}
                    </span>
                    <span className="rounded-full bg-white/20 backdrop-blur px-2.5 py-1 text-[11px] font-bold text-white">
                      {society.city}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-xs font-bold text-amber-300 uppercase tracking-wider">{society.propertyType}</p>
                    <h3 className="font-display text-2xl font-bold text-white truncate">{society.name}</h3>
                  </div>
                </div>

                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-navy-950 line-clamp-1 mb-2">
                      {society.workDoneTitle}
                    </h4>
                    <p className="text-xs text-graphite leading-relaxed line-clamp-3 mb-4">
                      {society.workDoneSummary}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[11px] bg-porcelain p-3 rounded-lg border border-navy-950/5 mb-4">
                      <div>
                        <span className="text-graphite/70 block">Interior Budget:</span>
                        <span className="font-bold text-navy-950">{society.interiorBudgetRange}</span>
                      </div>
                      <div>
                        <span className="text-graphite/70 block">Timeline:</span>
                        <span className="font-bold text-navy-950">{society.turnaroundTime}</span>
                      </div>
                    </div>

                    <div className="space-y-1.5 mb-5">
                      {society.scopeOfWork.slice(0, 3).map((item, i) => (
                        <p key={i} className="flex items-center gap-2 text-xs text-graphite line-clamp-1">
                          <CheckCircle2 size={13} className="text-amber-500 shrink-0" />
                          <span>{item}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-navy-950/10 flex items-center justify-between">
                    <Link
                      href={`/societies/${society.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-navy-950 hover:text-amber-600 transition"
                    >
                      <span>View Society Specs</span>
                      <ArrowRight size={14} />
                    </Link>
                    <a
                      href={whatsappHref(`Hi ATS Interior, I want an estimate for my flat in ${society.name} (${society.sector}).`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-navy-950 hover:bg-amber-400 transition"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
