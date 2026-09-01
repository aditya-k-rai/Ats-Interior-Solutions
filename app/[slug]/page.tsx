import type { Metadata } from "next";
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
import {
  cities,
  faqs,
  getLandingPage,
  getLandingPages,
  pricingTiers,
  projects,
  serviceSubtypes,
  site,
  titleCaseSlug,
  whatsappHref
} from "@/data/site";
import { getLongtailKeywordBySlug } from "@/data/longtailKeywords";
import { getPremiumLocationBySlug, premiumLocations } from "@/data/locations50";
import { societiesData } from "@/data/societies";
import { coreSubstrates, hardwareBrands, surfaceFinishes, countertopSpecs } from "@/data/materialsReference";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLandingPages().map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const keywordItem = getLongtailKeywordBySlug(slug);
  if (keywordItem) {
    return {
      title: keywordItem.title,
      description: keywordItem.description,
      alternates: { canonical: `/${slug}` },
      openGraph: {
        title: keywordItem.title,
        description: keywordItem.description,
        url: `${site.url}/${slug}`
      }
    };
  }

  const page = getLandingPage(slug);
  if (!page) return {};
  const location = page.area ? titleCaseSlug(page.area) : page.city?.name ?? "Delhi NCR";
  const title = `${page.service.name} in ${location} | ATS Interior Solutions`;
  const description = `Looking for ${page.service.name.toLowerCase()} in ${location}? ATS Interior Solutions delivers premium turnkey woodwork, German kitchens, 3D designs, and transparent pricing.`;

  return {
    title,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title,
      description,
      url: `${site.url}/${slug}`
    }
  };
}

export default async function DynamicLandingPage({ params }: Props) {
  const { slug } = await params;
  const keywordItem = getLongtailKeywordBySlug(slug);
  const page = getLandingPage(slug);

  if (!keywordItem && !page) notFound();

  // Keyword-specific Landing Page Mode
  if (keywordItem) {
    const matchingSocieties = societiesData.filter(
      (s) => s.city.toLowerCase().includes(keywordItem.city.toLowerCase()) || s.sector.toLowerCase().includes(keywordItem.location.toLowerCase())
    ).slice(0, 3);

    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: keywordItem.title,
      provider: {
        "@type": "LocalBusiness",
        name: site.name,
        telephone: site.phone,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address,
          addressLocality: keywordItem.city,
          addressRegion: "Uttar Pradesh",
          addressCountry: "IN"
        }
      },
      serviceType: keywordItem.category,
      areaServed: `${keywordItem.location}, ${keywordItem.city}`,
      description: keywordItem.description
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: keywordItem.faqs.map((f) => ({
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
        <section className="hero-image min-h-[78vh] text-white relative flex items-center">
          <div className="section-shell grid min-h-[78vh] items-end gap-8 pb-12 pt-28 lg:grid-cols-[1.1fr_420px] relative z-10">
            <div>
              <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full bg-navy-950/85 sm:bg-navy-950/80 px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider sm:tracking-[0.15em] backdrop-blur-md border border-amber-400/80 text-amber-300 shadow-[0_2px_12px_rgba(0,0,0,0.4),0_0_12px_rgba(245,158,11,0.25)]">
                <Sparkles size={14} className="text-amber-400 shrink-0 animate-spin" />
                <span>{keywordItem.location} • {keywordItem.city} • {keywordItem.category}</span>
              </div>

              <h1 className="text-balance font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight capitalize">
                {keywordItem.keyword}
              </h1>

              <p className="mt-5 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/85">
                ATS Interior Solutions delivers high-intent execution for {keywordItem.keyword}. Complete material transparency (IS 710 BWP, Action Tesa HDHMR, Blum/Häfele hardware) supervised by Founder Manoj Pal & engineering team.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="rounded-lg bg-navy-950/80 backdrop-blur px-3 py-1.5 text-xs font-semibold text-amber-300 border border-amber-500/30">
                  Target Budget: {keywordItem.targetBudget}
                </span>
                <span className="rounded-lg bg-navy-950/80 backdrop-blur px-3 py-1.5 text-xs font-semibold text-white/90 border border-white/20">
                  Warranty: 1 Year Execution Included
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-xl gradient-btn-gold px-6 py-3.5 text-xs sm:text-sm font-extrabold text-navy-950 shadow-gold transition hover:scale-105 active:scale-95"
                  href={whatsappHref(`Hi ATS Interior, I am inquiring regarding ${keywordItem.keyword}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} /> WhatsApp Quote Consultation
                </a>
                <Link
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 backdrop-blur px-5 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/15"
                  href="/societies"
                >
                  View Society Proofs
                </Link>
              </div>
            </div>

            <div className="w-full">
              <LeadForm defaultCity={keywordItem.city} defaultService={keywordItem.category} compact />
            </div>
          </div>
        </section>

        <Breadcrumbs
          items={[
            { label: keywordItem.category, href: "/services" },
            { label: keywordItem.location, href: `/${slug}` }
          ]}
        />

        {/* Value Metrics */}
        <section className="bg-white py-6 border-b border-navy-950/10">
          <div className="section-shell grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl bg-porcelain p-4 text-center border border-navy-950/5">
              <p className="text-xs text-graphite font-semibold">Turnkey Budget Range</p>
              <p className="font-display text-xl sm:text-2xl font-bold text-navy-950 mt-1">{keywordItem.targetBudget}</p>
            </div>
            <div className="rounded-xl bg-porcelain p-4 text-center border border-navy-950/5">
              <p className="text-xs text-graphite font-semibold">Delivery Timeline</p>
              <p className="font-display text-xl sm:text-2xl font-bold text-navy-950 mt-1">4 to 8 Weeks</p>
            </div>
            <div className="rounded-xl bg-porcelain p-4 text-center border border-navy-950/5">
              <p className="text-xs text-graphite font-semibold">Hardware Engineering</p>
              <p className="font-display text-xl sm:text-2xl font-bold text-navy-950 mt-1">Blum & Häfele</p>
            </div>
            <div className="rounded-xl bg-porcelain p-4 text-center border border-navy-950/5">
              <p className="text-xs text-graphite font-semibold">Quality Guarantee</p>
              <p className="font-display text-xl sm:text-2xl font-bold text-navy-950 mt-1">100% Calibrated</p>
            </div>
          </div>
        </section>

        {/* Content Details */}
        <section className="py-16">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-10">
              {/* Detailed Service Overview */}
              <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-navy-950/10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Architectural & Execution Guidance</span>
                <h2 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold mt-1 mb-4 capitalize">
                  {keywordItem.keyword} in {keywordItem.location}, {keywordItem.city}
                </h2>
                <p className="text-sm leading-7 text-graphite mb-6">
                  When homeowners search for <strong>{keywordItem.keyword}</strong>, quality, structural longevity, and price transparency are paramount. ATS Interior Solutions combines 3D CAD modeling, factory-pressed modular carcasses, and strict site engineer supervision to eliminate execution mismatches.
                </p>

                <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-3">Key Highlights & Deliverables:</h3>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {keywordItem.keyHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 rounded-lg bg-porcelain p-3 text-xs font-medium text-navy-950 border border-navy-950/5">
                      <CheckCircle2 size={16} className="text-amber-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </article>

              {/* Recommended Engineering Materials */}
              <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-navy-950/10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Material Integrity</span>
                <h2 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold mt-1 mb-4">
                  Recommended Substrates & Finishes
                </h2>
                <p className="text-xs text-graphite mb-6">
                  Based on our engineering standards manual, we deploy calibrated materials suited for Delhi NCR climate conditions:
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-navy-950/10 p-4 bg-porcelain">
                    <p className="text-xs font-bold text-navy-950 flex items-center gap-2 mb-2">
                      <Layers size={15} className="text-amber-500" /> Core Boards & Substrates
                    </p>
                    <ul className="space-y-1.5 text-xs text-graphite">
                      {keywordItem.materialsRecommended.map((mat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-amber-500" />
                          <span>{mat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-navy-950/10 p-4 bg-porcelain">
                    <p className="text-xs font-bold text-navy-950 flex items-center gap-2 mb-2">
                      <Wrench size={15} className="text-amber-500" /> Precision Hardware
                    </p>
                    <ul className="space-y-1.5 text-xs text-graphite">
                      {keywordItem.hardwareRecommended.map((hw, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="size-1.5 rounded-full bg-amber-500" />
                          <span>{hw}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              {/* FAQs */}
              <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-navy-950/10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Frequently Asked Questions</span>
                <h2 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold mt-1 mb-6">
                  Common Queries
                </h2>
                <div className="space-y-3">
                  {keywordItem.faqs.map((faq, i) => (
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

            {/* Right Column: High Society Proof & Consultation */}
            <aside className="space-y-6">
              {matchingSocieties.length > 0 && (
                <div className="rounded-2xl bg-white p-6 shadow-soft border border-navy-950/10">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-3 flex items-center gap-2">
                    <Building2 size={16} className="text-amber-500" /> Verified Work Nearby
                  </h3>
                  <div className="space-y-3">
                    {matchingSocieties.map((soc) => (
                      <Link
                        key={soc.slug}
                        href={`/societies/${soc.slug}`}
                        className="block p-3 rounded-xl bg-porcelain border border-navy-950/5 hover:border-amber-500/40 transition group"
                      >
                        <p className="text-xs font-bold text-navy-950 group-hover:text-amber-600 transition">{soc.name}</p>
                        <p className="text-[11px] text-graphite">{soc.workDoneTitle}</p>
                        <p className="text-[10px] text-amber-600 font-semibold mt-1">Budget: {soc.interiorBudgetRange}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Consultation Card */}
              <div className="rounded-2xl gradient-btn-gold p-6 text-navy-950 shadow-gold">
                <h3 className="font-display text-xl font-bold mb-2">Speak with Manoj Pal</h3>
                <p className="text-xs leading-relaxed mb-4 font-semibold">
                  Get direct engineering guidance and an itemized BOQ estimate for your home in {keywordItem.location}.
                </p>
                <a
                  href={whatsappHref(`Hi Manoj Ji, I would like an estimate for ${keywordItem.keyword}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-navy-950 px-4 py-3 text-xs font-extrabold text-white hover:bg-navy-900 transition"
                >
                  <Phone size={14} /> WhatsApp Consultation
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>
    );
  }

  // Standard / Premium Location Page Mode
  const location = page?.area ? titleCaseSlug(page.area) : page?.city?.name ?? "Delhi NCR";
  const premiumLoc = getPremiumLocationBySlug(page?.area ?? "");
  const matchingSocieties = societiesData.filter(
    (s) => s.sector.toLowerCase().includes(location.toLowerCase()) || s.city.toLowerCase().includes(page?.city?.name?.toLowerCase() ?? "")
  ).slice(0, 3);

  return (
    <main className="bg-porcelain">
      {/* Hero Section */}
      <section className="hero-image min-h-[76vh] text-white relative flex items-center">
        <div className="section-shell grid min-h-[76vh] items-end gap-8 pb-12 pt-28 lg:grid-cols-[1.1fr_420px] relative z-10">
          <div>
            <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full bg-navy-950/85 sm:bg-navy-950/80 px-3.5 sm:px-4 py-1.5 text-[10px] sm:text-xs font-extrabold uppercase tracking-wider sm:tracking-[0.15em] backdrop-blur-md border border-amber-400/80 text-amber-300 shadow-[0_2px_12px_rgba(0,0,0,0.4),0_0_12px_rgba(245,158,11,0.25)]">
              <Sparkles size={14} className="text-amber-400 shrink-0 animate-spin" />
              <span>{page?.city?.name ?? "Delhi NCR"} Hub • {page?.service.name}</span>
            </div>

            <h1 className="text-balance font-display text-4xl sm:text-6xl font-bold leading-tight">
              {page?.service.name} in {location}
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/85">
              ATS Interior Solutions designs and builds turnkey {page?.service.name.toLowerCase()} for {location}. Get factory-pressed woodwork, 3D concept plans, and 1-year execution warranty.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-xl gradient-btn-gold px-6 py-3.5 text-xs sm:text-sm font-extrabold text-navy-950 shadow-gold transition hover:scale-105 active:scale-95"
                href={whatsappHref(`I am interested in ${page?.service.name} in ${location}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} /> WhatsApp Consultation
              </a>
              <Link
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/5 backdrop-blur px-5 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/15"
                href="/societies"
              >
                View Society Proofs
              </Link>
            </div>
          </div>

          <div className="w-full">
            <LeadForm defaultCity={page?.city?.name ?? "Noida"} defaultService={page?.service.name} compact />
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: page?.service.name ?? "Service", href: `/${page?.service.slug}` }, { label: location, href: `/${slug}` }]} />

      {/* Stats Bar */}
      <section className="bg-white py-6 border-b border-navy-950/10">
        <div className="section-shell grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-xl bg-porcelain p-4 text-center border border-navy-950/5">
            <p className="text-xs text-graphite font-semibold">Projects in Area</p>
            <p className="font-display text-2xl font-bold text-navy-950 mt-1">30+</p>
          </div>
          <div className="rounded-xl bg-porcelain p-4 text-center border border-navy-950/5">
            <p className="text-xs text-graphite font-semibold">Typical Timeline</p>
            <p className="font-display text-2xl font-bold text-navy-950 mt-1">{page?.service.timeline}</p>
          </div>
          <div className="rounded-xl bg-porcelain p-4 text-center border border-navy-950/5">
            <p className="text-xs text-graphite font-semibold">Client Rating</p>
            <p className="font-display text-2xl font-bold text-navy-950 mt-1">4.9 / 5.0</p>
          </div>
          <div className="rounded-xl bg-porcelain p-4 text-center border border-navy-950/5">
            <p className="text-xs text-graphite font-semibold">Service Warranty</p>
            <p className="font-display text-2xl font-bold text-navy-950 mt-1">1 Year Free</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            {/* Overview */}
            <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-navy-950/10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Local Area Focus</span>
              <h2 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold mt-1 mb-4">
                {page?.service.name} Engineered for {location} Homes
              </h2>
              <p className="text-sm leading-7 text-graphite mb-4">
                Homeowners searching for {page?.service.name.toLowerCase()} in {location} require a seasoned partner who understands society regulations, floor layouts, material longevity, and factory execution. Led by Mr. Manoj Pal, ATS Interior Solutions delivers transparent itemized estimates and 3D visual precision.
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2 mt-6">
                {["3D CAD Visualization before execution", "IS 710 BWP & Action Tesa HDHMR substrate assurance", "Genuine Blum & Häfele German hardware integration", "Dedicated site engineer quality supervision"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg bg-porcelain p-3 text-xs font-semibold text-navy-950">
                    <CheckCircle2 size={16} className="text-amber-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>

            {/* Pricing Tiers */}
            <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-navy-950/10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Transparent Costing</span>
              <h2 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold mt-1 mb-6">
                Pricing Tiers in {location}
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {pricingTiers.map((tier) => (
                  <div key={tier.tier} className="rounded-xl border border-navy-950/10 p-4 bg-porcelain flex flex-col justify-between">
                    <div>
                      <span className="text-[11px] font-extrabold uppercase text-amber-600">{tier.tier}</span>
                      <p className="font-display text-xl font-bold text-navy-950 mt-1">{tier.range}</p>
                      <p className="text-xs text-graphite mt-2 leading-relaxed">{tier.includes}</p>
                    </div>
                    <a
                      href={whatsappHref(`I want an exact quote for ${page?.service.name} (${tier.tier} tier) in ${location}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 block text-center rounded-lg bg-navy-950 py-2 text-xs font-bold text-white hover:bg-navy-900 transition"
                    >
                      Get Quote
                    </a>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside className="space-y-6">
            {matchingSocieties.length > 0 && (
              <div className="rounded-2xl bg-white p-6 shadow-soft border border-navy-950/10">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950 mb-3">
                  Top Societies in {location}
                </h3>
                <div className="space-y-3">
                  {matchingSocieties.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/societies/${s.slug}`}
                      className="block p-3 rounded-xl bg-porcelain border border-navy-950/5 hover:border-amber-500/40 transition group"
                    >
                      <p className="text-xs font-bold text-navy-950 group-hover:text-amber-600 transition">{s.name}</p>
                      <p className="text-[11px] text-graphite">{s.workDoneTitle}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="rounded-2xl gradient-btn-gold p-6 text-navy-950 shadow-gold">
              <h3 className="font-display text-xl font-bold mb-2">Book Free Consultation</h3>
              <p className="text-xs leading-relaxed mb-4 font-semibold">
                Get Manoj Pal to review your floor plan in {location}.
              </p>
              <a
                href={whatsappHref(`Hi ATS Interior, I would like a consultation for ${page?.service.name} in ${location}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-navy-950 px-4 py-3 text-xs font-extrabold text-white hover:bg-navy-900 transition"
              >
                <Phone size={14} /> WhatsApp Manoj Pal
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
