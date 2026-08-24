import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Flame,
  Layers,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { getSocietyBySlug, societiesData } from "@/data/societies";
import { site, whatsappHref } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return societiesData.map((society) => ({ slug: society.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const society = getSocietyBySlug(slug);
  if (!society) return {};

  const title = `Interior Design & Modular Kitchen in ${society.name}, ${society.sector} | ATS`;
  const description = `Turnkey interior design, modular kitchen & woodwork delivered in ${society.name} (${society.sector}, ${society.city}). Full material specifications, pricing & 3D planning by Manoj Pal & team.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/societies/${society.slug}`
    },
    openGraph: {
      title,
      description,
      url: `${site.url}/societies/${society.slug}`,
      images: [{ url: `${site.url}${society.heroImage}`, width: 1200, height: 630, alt: `${society.name} Interior Design` }]
    }
  };
}

export default async function SocietyDetailPage({ params }: Props) {
  const { slug } = await params;
  const society = getSocietyBySlug(slug);
  if (!society) notFound();

  const relatedSocieties = societiesData
    .filter((s) => s.slug !== society.slug && (s.city === society.city || s.sector === society.sector))
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Interior Design & Modular Kitchen in ${society.name}`,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phone,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address,
        addressLocality: society.city,
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN"
      }
    },
    areaServed: `${society.name}, ${society.sector}, ${society.city}`,
    serviceType: "Luxury Home Interiors and Modular Kitchens",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "500000",
      highPrice: "8500000"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: society.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  };

  return (
    <main className="bg-porcelain">
      <JsonLd data={schema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <section className="hero-image min-h-[75vh] text-white relative flex items-center">
        <div className="section-shell grid min-h-[75vh] items-end gap-8 pb-12 pt-28 lg:grid-cols-[1.1fr_420px] relative z-10">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur border border-amber-500/30 text-amber-300 shadow-sm">
              <Sparkles size={14} className="text-amber-400 animate-pulse" />
              <span>{society.sector} • {society.city}</span>
            </div>

            <h1 className="text-balance font-display text-4xl sm:text-6xl font-bold leading-tight">
              Interior Design in {society.name}
            </h1>

            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/85">
              Turnkey home interiors, German modular kitchens, and custom woodwork tailored for {society.propertyType} at {society.name}. Planned and supervised by Founder Manoj Pal & site team.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="rounded-lg bg-navy-950/80 backdrop-blur px-3 py-1.5 text-xs font-semibold text-amber-300 border border-amber-500/30">
                Property Valuation: {society.propertyPrice}
              </span>
              <span className="rounded-lg bg-navy-950/80 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white/90 border border-white/20">
                Floor Plate: {society.sqftRange}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-xl gradient-btn-gold px-6 py-3.5 text-xs sm:text-sm font-extrabold text-navy-950 shadow-gold transition hover:scale-105 active:scale-95"
                href={whatsappHref(`Hi ATS, I need an interior design estimate for my flat in ${society.name} (${society.sector}).`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} /> Instant WhatsApp Consultation
              </a>
              <Link
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 backdrop-blur px-5 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/15"
                href="/portfolio"
              >
                View Project Gallery
              </Link>
            </div>
          </div>

          <div className="w-full">
            <LeadForm defaultCity={society.city} defaultService="Full Home Interior" compact />
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Societies", href: "/societies" },
          { label: society.name, href: `/societies/${society.slug}` }
        ]}
      />

      {/* Quick Numbers Bar */}
      <section className="bg-white py-6 border-b border-navy-950/10">
        <div className="section-shell grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl bg-porcelain p-4 text-center border border-navy-950/5">
            <p className="text-xs text-graphite font-semibold">Typical Interior Budget</p>
            <p className="font-display text-xl sm:text-2xl font-bold text-navy-950 mt-1">{society.interiorBudgetRange}</p>
          </div>
          <div className="rounded-xl bg-porcelain p-4 text-center border border-navy-950/5">
            <p className="text-xs text-graphite font-semibold">Modular Kitchen Budget</p>
            <p className="font-display text-xl sm:text-2xl font-bold text-navy-950 mt-1">{society.kitchenBudgetRange}</p>
          </div>
          <div className="rounded-xl bg-porcelain p-4 text-center border border-navy-950/5">
            <p className="text-xs text-graphite font-semibold">Execution Timeline</p>
            <p className="font-display text-xl sm:text-2xl font-bold text-navy-950 mt-1">{society.turnaroundTime}</p>
          </div>
          <div className="rounded-xl bg-porcelain p-4 text-center border border-navy-950/5">
            <p className="text-xs text-graphite font-semibold">After-Service Warranty</p>
            <p className="font-display text-xl sm:text-2xl font-bold text-navy-950 mt-1">1 Year Complete</p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Left Column: Work Done & Specifications */}
          <div className="space-y-10">
            {/* Work Executed Overview */}
            <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-navy-950/10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Case Study & Scope</span>
              <h2 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold mt-1 mb-4">
                {society.workDoneTitle}
              </h2>
              <p className="text-sm leading-7 text-graphite mb-6">
                {society.workDoneSummary}
              </p>

              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-3">Key Scope of Work Delivered:</h3>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {society.scopeOfWork.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 rounded-lg bg-porcelain p-3 text-xs font-medium text-navy-950 border border-navy-950/5">
                    <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Engineering Materials & Hardware Spec */}
            <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-navy-950/10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Engineering Transparency</span>
              <h2 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold mt-1 mb-4">
                Materials & Hardware Specifications
              </h2>
              <p className="text-xs text-graphite mb-6">
                ATS adheres to strict industrial standards from our engineering manual, using IS 710 BWP plywood, Action Tesa HDHMR, and authentic German hardware.
              </p>

              <div className="space-y-4 text-xs">
                <div className="rounded-xl border border-navy-950/10 p-4 bg-porcelain">
                  <p className="font-bold text-navy-950 flex items-center gap-2 mb-1">
                    <Layers size={15} className="text-amber-500" /> Core Substrates
                  </p>
                  <p className="text-graphite">{society.materialsUsed.substrate}</p>
                </div>

                <div className="rounded-xl border border-navy-950/10 p-4 bg-porcelain">
                  <p className="font-bold text-navy-950 flex items-center gap-2 mb-1">
                    <Sparkles size={15} className="text-amber-500" /> Shutter Finishes
                  </p>
                  <p className="text-graphite">{society.materialsUsed.shutters}</p>
                </div>

                <div className="rounded-xl border border-navy-950/10 p-4 bg-porcelain">
                  <p className="font-bold text-navy-950 flex items-center gap-2 mb-1">
                    <Wrench size={15} className="text-amber-500" /> Hardware & Mechanisms
                  </p>
                  <p className="text-graphite">{society.materialsUsed.hardware}</p>
                </div>

                <div className="rounded-xl border border-navy-950/10 p-4 bg-porcelain">
                  <p className="font-bold text-navy-950 flex items-center gap-2 mb-1">
                    <ShieldCheck size={15} className="text-amber-500" /> Countertop & Stone
                  </p>
                  <p className="text-graphite">{society.materialsUsed.countertop}</p>
                </div>
              </div>
            </article>

            {/* Real Project Gallery */}
            <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-navy-950/10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Visual Proof</span>
              <h2 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold mt-1 mb-6">
                Project Gallery
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {society.galleryImages.map((img, i) => (
                  <div key={i} className="relative h-48 sm:h-56 rounded-xl overflow-hidden bg-navy-950 group">
                    <Image
                      src={img}
                      alt={`${society.name} Interior photo ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </article>

            {/* FAQs */}
            <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-navy-950/10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Hyperlocal FAQ</span>
              <h2 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold mt-1 mb-6">
                Questions About Interior Work in {society.name}
              </h2>
              <div className="space-y-3">
                {society.faqs.map((faq, i) => (
                  <details key={i} className="rounded-xl bg-porcelain p-4 border border-navy-950/5 text-xs group" open={i === 0}>
                    <summary className="font-bold text-navy-950 cursor-pointer list-none flex items-center justify-between">
                      <span>{faq.q}</span>
                      <span className="text-amber-600 font-bold group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <p className="mt-3 text-graphite leading-relaxed border-t border-navy-950/5 pt-3">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </article>
          </div>

          {/* Right Column: Sticky Sidebar & Social Proof */}
          <aside className="space-y-6">
            {/* Client Testimonial */}
            <div className="rounded-2xl bg-navy-950 p-6 text-white border border-amber-500/30 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 size-32 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(society.clientStory.rating)].map((_, i) => (
                  <Star key={i} size={15} fill="currentColor" />
                ))}
              </div>
              <p className="text-xs italic leading-relaxed text-white/90 mb-4">
                &ldquo;{society.clientStory.quote}&rdquo;
              </p>
              <div className="border-t border-white/10 pt-3">
                <p className="text-xs font-extrabold text-amber-300">{society.clientStory.clientName}</p>
                <p className="text-[11px] text-white/70">{society.clientStory.bhk}</p>
              </div>
            </div>

            {/* Society Highlights Card */}
            <div className="rounded-2xl bg-white p-6 shadow-soft border border-navy-950/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-3 flex items-center gap-2">
                <Building2 size={16} className="text-amber-500" /> Society Profile
              </h3>
              <ul className="space-y-2 text-xs text-graphite">
                {society.societyHighlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="size-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Consultation CTA Box */}
            <div className="rounded-2xl gradient-btn-gold p-6 text-navy-950 shadow-gold">
              <h3 className="font-display text-xl font-bold mb-2">Book Site Measurement</h3>
              <p className="text-xs leading-relaxed mb-4 font-semibold">
                Get Manoj Pal & engineering team to inspect your layout at {society.name}.
              </p>
              <a
                href={whatsappHref(`Hi Manoj Ji, I would like to book a site measurement for my apartment in ${society.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-navy-950 px-4 py-3 text-xs font-extrabold text-white hover:bg-navy-900 transition"
              >
                <Phone size={14} /> Book via WhatsApp
              </a>
            </div>

            {/* Related Societies */}
            {relatedSocieties.length > 0 && (
              <div className="rounded-2xl bg-white p-6 shadow-soft border border-navy-950/10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-3">
                  Nearby Societies
                </h3>
                <div className="space-y-3">
                  {relatedSocieties.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/societies/${rel.slug}`}
                      className="block p-3 rounded-xl bg-porcelain border border-navy-950/5 hover:border-amber-500/40 transition group"
                    >
                      <p className="text-xs font-bold text-navy-950 group-hover:text-amber-600 transition">{rel.name}</p>
                      <p className="text-[11px] text-graphite">{rel.sector} • {rel.interiorBudgetRange}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
