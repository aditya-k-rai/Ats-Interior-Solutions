"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Phone, Play, ShieldCheck, Sparkles, Star, UserCheck } from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { BudgetEstimator } from "@/components/BudgetEstimator";
import { ClientTestimonials } from "@/components/ClientTestimonials";
import { CompleteSolutions } from "@/components/CompleteSolutions";
import { CoreValues } from "@/components/CoreValues";
import { CurvedLoop } from "@/components/CurvedLoop";
import { ExpertTeam } from "@/components/ExpertTeam";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { QuoteModal } from "@/components/QuoteModal";
import { TrueFocusProcess } from "@/components/TrueFocusProcess";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { WorkProcess } from "@/components/WorkProcess";
import { blogPosts, cities, faqs, materialComparisons, process, projects, realWorkGallery, services, site, trustMetrics, usp, whatsappHref } from "@/data/site";

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: site.address,
    areaServed: cities.map((city) => city.name),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200"
    },
    makesOffer: services.map((service) => service.name)
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to hire an interior designer in Noida & Greater Noida",
    description: "5-step transparent workflow for home interior design and modular execution.",
    step: process.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.copy
    }))
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "ATS Interior Solutions Site Work & Modular Kitchen Transformation",
    description: "Real site video walkthrough of modular kitchen, living room TV console, and custom wardrobe installation in Noida & Greater Noida.",
    thumbnailUrl: `${site.url}/images/work/modular-kitchen-1.jpg`,
    uploadDate: "2024-01-15T08:00:00+05:30",
    contentUrl: "https://atsinteriorsolution.com/portfolio",
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: `${site.url}/images/logo.png`
      }
    }
  };

  return (
    <main className="overflow-x-hidden">
      <JsonLd data={localBusiness} />
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />
      <JsonLd data={videoSchema} />

      {/* Hero Section - True Transparent Navbar Overlay & Pixel-Perfect Header Spacing */}
      <section className="hero-image min-h-[60vh] sm:min-h-[65vh] text-white relative flex items-center pt-[100px] sm:pt-[104px] lg:pt-[108px] pb-6 sm:pb-8 overflow-hidden">
        {/* Luxury Background Glow Overlays */}
        <div className="absolute top-1/4 left-10 size-[500px] rounded-full bg-amber-500/15 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 size-[500px] rounded-full bg-navy-800/45 blur-[160px] pointer-events-none" />

        <div className="section-shell w-full max-w-6xl mx-auto flex flex-col items-start justify-center text-left relative z-10">
          <div className="mb-4 sm:mb-5 inline-flex max-w-full items-center gap-2.5 rounded-full bg-navy-950/85 sm:bg-navy-950/80 px-4 sm:px-5 py-2 text-xs sm:text-sm font-extrabold uppercase tracking-wider sm:tracking-[0.18em] backdrop-blur-md border border-amber-400/80 text-amber-300 shadow-[0_2px_12px_rgba(0,0,0,0.4),0_0_12px_rgba(245,158,11,0.25)]">
            <Sparkles size={16} className="text-amber-400 shrink-0 animate-spin" />
            <span>Greater Noida • Noida • Ghaziabad • Delhi NCR</span>
          </div>

          <h1 className="text-balance font-display text-[44px] sm:text-[55px] md:text-[69px] lg:text-[83px] xl:text-[88px] font-bold leading-[1.12] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] w-full max-w-5xl text-left">
            Discover the Best Interior Designers in Greater Noida West for Your Noida Home
          </h1>

          <p className="mt-4 sm:mt-5 max-w-3xl text-lg sm:text-xl md:text-2xl leading-relaxed text-slate-100 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-left">
            Premium home interiors, modular kitchens, wardrobes, false ceilings and office spaces across Greater Noida, Noida, Ghaziabad and Delhi NCR — led by Founder Manoj Pal & site team.
          </p>

          <div className="mt-5 sm:mt-8 flex flex-row items-center justify-start gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              type="button"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-lg sm:rounded-xl gradient-btn-gold animate-shimmer-sweep px-4.5 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-sm md:text-base font-extrabold text-navy-950 shadow-gold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Get Free Consultation</span> <ArrowRight size={17} className="shrink-0 sm:size-4" />
            </button>
            <Link
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-lg sm:rounded-xl glow-btn-purple px-4.5 py-3.5 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-bold transition active:scale-95"
              href="/portfolio"
            >
              <Play size={16} className="text-purple-300 animate-pulse shrink-0 sm:size-4" /> View Real Work
            </Link>
          </div>

          {/* Luxury 4-Item Compact Centered Trust Data Cards (+10% Height & Text) */}
          <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 w-full max-w-2xl sm:max-w-3xl">
            {[
              { count: "450+", label: "Projects Delivered", glow: "glow-btn-amber" },
              { count: "5", label: "Cities Covered", glow: "glow-btn-teal" },
              { count: "10 Yr", label: "Warranty Included", glow: "glow-btn-purple" },
              { count: "8+ Yrs", label: "Years Experience", glow: "glow-btn-blue" }
            ].map((item) => (
              <div className={`rounded-lg ${item.glow} py-2.5 px-2 sm:py-3.5 sm:px-3 text-center backdrop-blur-md shadow-md border border-white/15 transition-all hover:scale-105 flex flex-col items-center justify-center min-w-0`} key={item.label}>
                <p className="font-display text-base sm:text-lg lg:text-xl font-extrabold leading-tight text-white tracking-tight">{item.count}</p>
                <p className="text-[10px] sm:text-xs font-semibold opacity-90 leading-tight mt-0.5 text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curved Loop Wave Banner (Exact animation & effect from newdesigninternitystudio) */}
      <CurvedLoop marqueeText="ATS Interior Solutions        ATS Interior Solutions        ATS Interior Solutions        ATS Interior Solutions        " />

      {/* Trust Metrics Strip */}
      <section className="bg-white py-10 border-b border-navy-950/10">
        <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            const glows = ["glow-btn-amber", "glow-btn-teal", "glow-btn-purple", "glow-btn-blue"];
            const currentGlow = glows[idx % glows.length];
            return (
              <div className="flex items-center gap-4 rounded-xl border border-navy-950/10 bg-porcelain p-4 sm:p-5 shadow-sm transition hover:border-amber-500/40 hover:-translate-y-1" key={metric.label}>
                <div className={`grid size-12 place-items-center rounded-xl ${currentGlow} font-bold shadow-md shrink-0`}>
                  <Icon size={22} />
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-navy-950">{metric.value}</p>
                  <p className="text-xs font-semibold text-slate-600">{metric.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* True Focus Animated Process Banner (Exact component & blur effect from reference site) */}
      <TrueFocusProcess />

      {/* Services Section */}
      <section className="py-16 sm:py-20" id="services">
        <div className="section-shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full border border-amber-300 shadow-sm">
                6 Core Categories • 36 Subcategories
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy-950">Built for every stage of your space</h2>
            </div>
            <Link className="inline-flex items-center gap-2 font-bold text-navy-800 hover:text-amber-600 transition text-sm group" href="/services">
              <span>View all services</span> <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              const cardThemes = [
                { glow: "glow-btn-amber", iconBg: "bg-navy-950 text-amber-400 group-hover:bg-amber-400 group-hover:text-navy-950 group-hover:border-amber-300 group-hover:shadow-[0_0_22px_rgba(212,175,55,0.6)]" },
                { glow: "glow-btn-emerald", iconBg: "bg-navy-950 text-emerald-400 group-hover:bg-emerald-400 group-hover:text-navy-950 group-hover:border-emerald-300 group-hover:shadow-[0_0_22px_rgba(16,185,129,0.6)]" },
                { glow: "glow-btn-purple", iconBg: "bg-navy-950 text-purple-400 group-hover:bg-purple-400 group-hover:text-navy-950 group-hover:border-purple-300 group-hover:shadow-[0_0_22px_rgba(168,85,247,0.6)]" },
                { glow: "glow-btn-rose", iconBg: "bg-navy-950 text-rose-400 group-hover:bg-rose-400 group-hover:text-navy-950 group-hover:border-rose-300 group-hover:shadow-[0_0_22px_rgba(244,63,94,0.6)]" },
                { glow: "glow-btn-blue", iconBg: "bg-navy-950 text-blue-400 group-hover:bg-blue-400 group-hover:text-navy-950 group-hover:border-blue-300 group-hover:shadow-[0_0_22px_rgba(59,130,246,0.6)]" },
                { glow: "glow-btn-teal", iconBg: "bg-navy-950 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-navy-950 group-hover:border-cyan-300 group-hover:shadow-[0_0_22px_rgba(45,212,191,0.6)]" }
              ];
              const theme = cardThemes[index % cardThemes.length];
              return (
                <article className="group rounded-2xl bg-white p-6 sm:p-7 shadow-soft border border-navy-950/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-amber-500/40 flex flex-col justify-between" key={service.slug}>
                  <div>
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className={`grid size-14 place-items-center rounded-2xl border border-amber-500/20 ${theme.iconBg} transition-all duration-300 shadow-md`}>
                        <Icon size={26} className="transition duration-300 group-hover:scale-110" />
                      </div>
                      <Link className={`rounded-xl ${theme.glow} px-3 py-1.5 text-xs font-bold transition`} href={`/${service.slug}-noida`}>
                        See Projects
                      </Link>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-navy-950 group-hover:text-amber-600 transition">{service.name}</h3>
                    <p className="mt-2.5 text-sm leading-6 text-slate-600">{service.short}</p>

                    {/* 6 Subcategories Grid */}
                    <div className="mt-4 pt-3.5 border-t border-slate-100">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 block mb-2">6 Subcategories Included:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-slate-700">
                        {service.subcategories.map((sub) => (
                          <li key={sub} className="flex items-center gap-1.5 font-medium hover:text-navy-950 transition">
                            <span className="size-1.5 rounded-full bg-amber-500 shrink-0" />
                            <span className="truncate">{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4">
                    <span className="rounded-md bg-porcelain px-3 py-1.5 text-xs font-semibold text-slate-700 border border-navy-950/5">{service.budget}</span>
                    <a className="rounded-lg gradient-btn-gold px-4 py-2 text-xs font-extrabold text-navy-950 shadow-sm transition hover:scale-105" href={whatsappHref(`I need a quote for ${service.name}.`)}>
                      Get Quote
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Complete Solutions Section */}
      <CompleteSolutions id="solutions" />

      {/* Real Completed Work Projects */}
      <section className="bg-slate-100/70 py-16 sm:py-20 border-y border-navy-950/10" id="work">
        <div className="section-shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-white px-3 py-1 rounded-full border border-amber-200">
                Real ATS Project Portfolio
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy-950">Actual Work Delivered by ATS</h2>
              <p className="text-sm text-slate-600 mt-2">Real site photographs of kitchens, wardrobes, living rooms and TV consoles in Noida & Greater Noida.</p>
            </div>
            <Link className="inline-flex items-center gap-2 font-bold text-navy-800 hover:text-amber-600 transition text-sm group" href="/portfolio">
              <span>Full portfolio</span> <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft border border-navy-950/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" href={`/projects/${project.slug}`} key={project.slug}>
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image || "/images/work/tv-unit-living-1.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-lg bg-amber-500/95 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-widest text-navy-950 shadow">
                    {project.city} • {project.area}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-navy-950 group-hover:text-amber-600 transition">{project.title}</h3>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2">{project.challenge}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-navy-800">
                    <span>{project.service}</span>
                    <span className="text-amber-600 font-extrabold">{project.budget}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Actual Site Work Photo Gallery */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="section-shell">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              Site Handover Gallery
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy-950">ATS Real Site Photographs</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Inspected and verified photos from real client handovers, factory assembly, and on-site engineering execution.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {realWorkGallery.map((item) => (
              <div className="group relative h-72 overflow-hidden rounded-2xl bg-navy-950 shadow-md border border-navy-950/10" key={item.title}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent p-5 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400">{item.category}</span>
                  <h4 className="font-display text-lg font-bold text-white mt-1 leading-snug">{item.title}</h4>
                  <p className="text-[11px] text-white/80 mt-1 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive SXO Before & After Showcase */}
      <section className="py-16 sm:py-20 bg-slate-100/60 border-t border-navy-950/10">
        <div className="section-shell">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-white px-3 py-1 rounded-full border border-amber-200">
              Interactive SXO Showcase
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy-950">Drag or Touch to see the transformation</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Slide back and forth to inspect original site condition vs finished modular interior execution by Mr. Manoj Pal & team.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Material Comparison Section (GEO Strategy) */}
      <section className="bg-white py-16 sm:py-20 border-t border-navy-950/10">
        <div className="section-shell">
          <div className="mb-10 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              Material Guidance (GEO & SXO)
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy-950">Understand materials before buying</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Clear comparison data helps home buyers choose board grades and shutter finishes with confidence.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {materialComparisons.map((item) => (
              <div className="rounded-2xl border border-navy-950/10 bg-porcelain p-6 shadow-sm flex flex-col justify-between" key={item.title}>
                <div>
                  <h3 className="font-display text-2xl font-bold text-navy-950">{item.title}</h3>
                  <p className="mt-1 text-xs font-extrabold uppercase tracking-wider text-amber-600">{item.factor}</p>
                  <div className="mt-4 grid gap-3 text-xs leading-5 text-slate-600">
                    <div className="rounded-xl bg-white p-4 border border-navy-950/10 shadow-sm">
                      <p className="font-extrabold text-navy-800 text-sm">Option A</p>
                      <p className="mt-1">{item.optionA}</p>
                    </div>
                    <div className="rounded-xl bg-white p-4 border border-navy-950/10 shadow-sm">
                      <p className="font-extrabold text-amber-600 text-sm">Option B</p>
                      <p className="mt-1">{item.optionB}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <WorkProcess id="process" />

      {/* Cost Estimator */}
      <section className="py-16 sm:py-20" id="cost">
        <div className="section-shell">
          <BudgetEstimator />
        </div>
      </section>

      {/* Core Values Section */}
      <CoreValues id="core-values" />

      {/* Why Choose Us Section */}
      <WhyChooseUs id="why-choose-us" />

      {/* Our Expert Team Section */}
      <ExpertTeam id="team" />

      {/* Customer Testimonials Section */}
      <ClientTestimonials id="testimonials" />

      {/* Cities We Serve */}
      <section className="bg-white py-16 sm:py-20 border-t border-navy-950/10">
        <div className="section-shell">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            Cities We Serve
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy-950">Hyperlocal coverage across Delhi NCR</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <Link className="rounded-2xl border border-navy-950/10 bg-porcelain p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-amber-500/40" href={`/interior-design-${city.slug}`} key={city.slug}>
                <MapPin className="mb-3 text-amber-600" size={26} />
                <h3 className="font-display text-2xl font-bold text-navy-950">{city.name}</h3>
                <p className="mt-2 text-xs leading-5 text-slate-600">{city.focus}.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Voice Search Section */}
      <section className="py-16 sm:py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
              Reviews & Voice Search FAQs
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy-950">Answers to common buyer questions</h2>
            <div className="mt-6 rounded-2xl bg-white p-6 sm:p-7 shadow-soft border border-navy-950/10">
              <div className="mb-3 flex gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star fill="currentColor" key={item} size={18} />
                ))}
              </div>
              <p className="text-sm leading-7 text-slate-600">
                Mr. Manoj Pal personally reviewed our site layout. The ATS team helped us plan storage, board grades and cove lighting before execution. Handover was smooth and on schedule.
              </p>
              <p className="mt-4 text-xs font-bold text-navy-950">Ritika Sharma | Noida Sector 137 (3 BHK Interior)</p>
            </div>

            <div className="mt-6">
              <Link className="inline-flex items-center gap-2 font-bold text-navy-800 hover:text-amber-600 transition text-sm group" href="/faq">
                <span>View all 60+ FAQs & Hindi Voice Queries</span> <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          <div className="grid gap-3.5">
            {faqs.slice(0, 5).map((faq) => (
              <details className="rounded-2xl bg-white p-5 shadow-soft border border-navy-950/5 group" key={faq.q}>
                <summary className="cursor-pointer font-semibold text-sm sm:text-base text-navy-950 group-hover:text-amber-600 transition">{faq.q}</summary>
                <p className="mt-3 text-xs sm:text-sm leading-6 text-slate-600 border-t border-slate-100 pt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="bg-slate-100/80 py-16 sm:py-20 border-t border-navy-950/10">
        <div className="section-shell">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-white px-3 py-1 rounded-full border border-amber-200">
            Guides & Resources
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-navy-950">Commercial content clusters for search intent</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link className="rounded-2xl bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-amber-500/40 border border-navy-950/5 flex flex-col justify-between" href="/blog" key={post.slug}>
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-amber-600">{post.category}</span>
                  <h3 className="mt-2 font-display text-xl font-bold leading-snug text-navy-950">{post.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">{post.excerpt}</p>
                </div>
                <p className="mt-5 text-xs font-bold text-navy-800 border-t border-slate-100 pt-3">{post.readTime} read</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Consultation Band - High Trust Midnight Sapphire */}
      <section className="bg-navy-950 py-16 sm:py-20 text-white border-t border-amber-500/20 relative overflow-hidden" id="consultation">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] relative z-10">
          <div className="self-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 bg-white/10 px-3 py-1 rounded-full border border-amber-500/30">
              Free Consultation
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Ready to transform your space?</h2>
            <p className="mt-4 text-sm sm:text-base leading-7 text-white/80">
              Share your city, budget and timeline. Our design manager will contact you within 1 hour with a free consultation and floor plan evaluation.
            </p>
            <ul className="mt-6 grid gap-3 text-xs sm:text-sm text-white/85">
              {[
                "Contextual WhatsApp click tracking",
                "Multi-step lead qualification model",
                "1-Year comprehensive after-service execution warranty"
              ].map((item) => (
                <li className="flex items-center gap-2.5" key={item}>
                  <CheckCircle2 className="text-amber-400 shrink-0" size={17} /> <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* Quote Popup Modal (Automated & Triggerable with Cancel X icon) */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </main>
  );
}
