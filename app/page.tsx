"use client";

import { useEffect, useState } from "react";
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
import { VastuSection } from "@/components/VastuSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { WorkProcess } from "@/components/WorkProcess";
import { blogPosts, cities, faqs, materialComparisons, process, projects, realWorkGallery, services, site, trustMetrics, usp, whatsappHref } from "@/data/site";

const smartphoneImages = [
  "/images/Smartphone/1.png",
  "/images/Smartphone/2.png",
  "/images/Smartphone/3.png",
  "/images/Smartphone/4.png",
  "/images/Smartphone/5.png"
];

const tabletImages = [
  "/images/Tablet/1.png",
  "/images/Tablet/2.png",
  "/images/Tablet/3.png",
  "/images/Tablet/4.png",
  "/images/Tablet/5.png"
];

const laptopImages = [
  "/images/Laptop/1.png",
  "/images/Laptop/2.png",
  "/images/Laptop/3.png"
];

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const getSlideClasses = (idx: number, total: number) => {
    const current = currentSlide % total;
    const previous = (currentSlide - 1 + total) % total;

    if (idx === current) {
      return "z-20 opacity-100 transition-opacity duration-3000 ease-in-out";
    }
    if (idx === previous) {
      return "z-10 opacity-100 transition-none";
    }
    return "z-0 opacity-0 pointer-events-none transition-none";
  };
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

      {/* Hero Section - Smooth Auto-Sliding Device Background Carousel (3s interval, 1s smooth slide) */}
      <section className="relative min-h-[100dvh] sm:min-h-[85vh] text-white flex flex-col justify-between pt-[88px] sm:pt-28 md:pt-32 pb-16 sm:pb-12 overflow-hidden bg-navy-950">
        {/* 1. Smartphone Background Slider (0 - 640px) */}
        <div className="block sm:hidden absolute inset-0 z-0 overflow-hidden">
          {smartphoneImages.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 ${getSlideClasses(idx, smartphoneImages.length)}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${src}')`
                }}
              />
            </div>
          ))}
        </div>

        {/* 2. Tablet Background Slider (640px - 1024px) */}
        <div className="hidden sm:block lg:hidden absolute inset-0 z-0 overflow-hidden">
          {tabletImages.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 ${getSlideClasses(idx, tabletImages.length)}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${src}')`
                }}
              />
            </div>
          ))}
        </div>

        {/* 3. Laptop & Desktop Background Slider (1024px+) */}
        <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden">
          {laptopImages.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 ${getSlideClasses(idx, laptopImages.length)}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${src}')`
                }}
              />
            </div>
          ))}
        </div>

        {/* Luxury Background Glow Overlays */}
        <div className="absolute top-1/4 left-10 size-[500px] rounded-full bg-amber-500/15 blur-[140px] pointer-events-none z-[1]" />
        <div className="absolute bottom-10 right-10 size-[500px] rounded-full bg-navy-800/45 blur-[160px] pointer-events-none z-[1]" />

        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 flex flex-col justify-between items-start text-left relative z-10 h-full flex-1">
          {/* Top Group: Location Badge, Main Heading & Subtitle Description */}
          <div className="flex flex-col items-start text-left w-full">
            <div className="mb-3 sm:mb-4 inline-flex max-w-full items-center gap-1.5 sm:gap-2.5 rounded-full bg-navy-950/85 sm:bg-navy-950/80 px-2.5 sm:px-5 py-1.5 sm:py-2 text-[10.5px] sm:text-xs font-bold sm:font-extrabold uppercase tracking-wider sm:tracking-[0.18em] backdrop-blur-md border border-amber-400/80 text-amber-300 shadow-sm">
              <Sparkles size={13} className="text-amber-400 shrink-0 animate-spin" />
              <span>Greater Noida • Noida • Ghaziabad • Delhi NCR</span>
            </div>

            <h1 className="font-display text-[39px] sm:text-[50px] md:text-[62px] lg:text-[75px] xl:text-[79px] font-bold leading-[1.12] tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] w-full max-w-full lg:max-w-6xl text-left">
              Discover the Best Interior Designers in Greater Noida for Your Noida Home
            </h1>

            <p className="mt-3.5 sm:mt-4 max-w-3xl lg:max-w-4xl text-[14px] sm:text-lg md:text-xl leading-relaxed text-slate-100 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] text-left">
              Premium home interiors, modular kitchens, wardrobes, false ceilings and office spaces across Greater Noida, Noida, Ghaziabad and Delhi NCR — led by Founder Manoj Pal & team.
            </p>
          </div>

          {/* Bottom Group: 4 Trust Cards Above, 2 CTA Buttons Down on Smartphone (flex-col-reverse sm:flex-col) */}
          <div className="mt-auto pt-4 sm:pt-6 flex flex-col-reverse sm:flex-col items-start text-left w-full gap-3 sm:gap-6">
            {/* 2 CTA Buttons (Bottom on Mobile, Top on Desktop) */}
            <div className="flex flex-row items-center justify-start gap-2.5 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => setIsQuoteModalOpen(true)}
                type="button"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl gradient-btn-gold animate-shimmer-sweep px-4.5 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-sm md:text-base font-extrabold text-navy-950 shadow-gold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Get Free Consultation</span> <ArrowRight size={17} className="shrink-0 sm:size-4" />
              </button>
              <Link
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl glow-btn-purple px-4.5 py-3.5 sm:px-6 sm:py-4 text-xs sm:text-sm md:text-base font-bold transition active:scale-95"
                href="/portfolio"
              >
                <Play size={16} className="text-purple-300 animate-pulse shrink-0 sm:size-4" /> View Real Work
              </Link>
            </div>

            {/* 4 Trust Data Cards in 1 Single Horizontal Row on Smartphone */}
            <div className="grid grid-cols-4 gap-1 sm:gap-3 w-full max-w-full sm:max-w-3xl">
              {[
                { count: "450+", label: "Projects Delivered", glow: "glow-btn-amber" },
                { count: "5", label: "Cities Covered", glow: "glow-btn-teal" },
                { count: "10 Yr", label: "Warranty Included", glow: "glow-btn-purple" },
                { count: "8+ Yrs", label: "Years Experience", glow: "glow-btn-blue" }
              ].map((item) => (
                <div className={`rounded-lg sm:rounded-xl ${item.glow} py-1.5 px-0.5 sm:py-3 sm:px-3 lg:py-3.5 lg:px-3 text-center backdrop-blur-md shadow-md border border-white/15 transition-all hover:scale-105 flex flex-col items-center justify-center min-w-0`} key={item.label}>
                  <p className="font-display text-[10px] min-[380px]:text-xs sm:text-lg lg:text-xl font-extrabold leading-tight text-white tracking-tight">{item.count}</p>
                  <p className="text-[7px] min-[380px]:text-[8px] sm:text-[11px] lg:text-xs font-semibold opacity-90 leading-tight mt-0.5 sm:mt-1 text-center">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curved Loop Wave Banner (Exact animation & effect from newdesigninternitystudio) */}
      <CurvedLoop marqueeText="ATS Interior Solutions        ATS Interior Solutions        ATS Interior Solutions        ATS Interior Solutions        " />



      {/* True Focus Animated Process Banner (Exact component & blur effect from reference site) */}
      <TrueFocusProcess />

      {/* Services Section */}
      <section className="py-16 sm:py-20" id="services">
        <div className="section-shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-navy-950">Built for every stage of your space</h2>
            </div>
            <Link className="inline-flex items-center gap-2 font-bold text-navy-800 hover:text-amber-600 transition text-sm group" href="/services">
              <span>View all services</span> <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-4 xl:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              const categoryImages: Record<string, string> = {
                "modular-interior": "/images/work/modular-kitchen-1.jpg",
                "interior-design": "/images/work/tv-unit-living-1.jpg",
                "civil-construction": "/images/kitchen-1.jpg",
                "office-interior": "/images/work/owner-engineer-cabin.jpg"
              };
              const cardImage = categoryImages[service.slug] || "/images/work/tv-unit-living-1.jpg";
              const cardThemes = [
                { gradient: "from-amber-400 via-amber-500 to-amber-600", tagBg: "bg-amber-100 text-amber-800 border-amber-300" },
                { gradient: "from-emerald-400 via-teal-500 to-emerald-600", tagBg: "bg-emerald-100 text-emerald-800 border-emerald-300" },
                { gradient: "from-purple-400 via-indigo-500 to-purple-600", tagBg: "bg-purple-100 text-purple-800 border-purple-300" },
                { gradient: "from-blue-400 via-cyan-500 to-blue-600", tagBg: "bg-blue-100 text-blue-800 border-blue-300" }
              ];
              const theme = cardThemes[index % cardThemes.length];

              return (
                <article
                  className="group rounded-3xl bg-white overflow-hidden shadow-soft border border-slate-200/90 transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_22px_50px_rgba(15,23,42,0.18)] hover:border-amber-400/90 flex flex-col justify-between relative"
                  key={service.slug}
                >
                  {/* Top Glowing Color Accent Stripe */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${theme.gradient}`} />

                  <div>
                    {/* 1. High-Resolution Image Banner with Animated Zoom */}
                    <div className="relative h-48 sm:h-52 lg:h-44 xl:h-48 w-full overflow-hidden bg-navy-950">
                      <Image
                        src={cardImage}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                      {/* Floating Glassmorphic Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        <span className="rounded-xl px-2.5 py-1 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider shadow-md backdrop-blur-md bg-navy-950/80 text-amber-300 border border-amber-400/30">
                          {service.budget}
                        </span>
                        <div className="grid size-10 place-items-center rounded-xl bg-navy-950/85 text-amber-400 border border-amber-400/40 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                          <Icon size={19} />
                        </div>
                      </div>

                      {/* Image Bottom Title Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 z-10 text-white">
                        <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-md group-hover:text-amber-300 transition duration-300">
                          {service.name}
                        </h3>
                        <p className="text-[11px] text-white/80 font-medium line-clamp-1 mt-0.5">{service.short}</p>
                      </div>
                    </div>

                    {/* 2. Subcategories Checklist & Micro-Graphics */}
                    <div className="p-4 sm:p-5">
                      <div className="pt-1 border-t border-slate-100">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-amber-700 block">Scope & Deliverables:</span>
                          <span className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${theme.tagBg}`}>
                            {service.timeline}
                          </span>
                        </div>
                        <ul className="grid grid-cols-1 gap-y-1.5 text-[11.5px] text-slate-700">
                          {service.subcategories.map((sub) => (
                            <li key={sub} className="flex items-center gap-1.5 font-semibold text-slate-700">
                              <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                              <span className="truncate">{sub}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 3. TWO MAIN BUTTONS: LEFT & RIGHT (SIDE-BY-SIDE IN 1 ROW) */}
                  <div className="px-3.5 pb-4 pt-2 border-t border-slate-100/80 flex flex-row items-center gap-1.5 w-full">
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      type="button"
                      className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl gradient-btn-gold animate-shimmer-sweep px-2 py-2.5 text-[10.5px] min-[400px]:text-xs font-extrabold text-navy-950 shadow-gold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      <Sparkles size={12} className="text-navy-950 shrink-0" />
                      <span>Consultation</span>
                    </button>
                    <a
                      href={whatsappHref(`I need a quote for ${service.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl glow-btn-purple px-2 py-2.5 text-[10.5px] min-[400px]:text-xs font-bold text-white shadow-md transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
                    >
                      <span>Get Quote</span>
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

      {/* Vastu Shastra Compliance Section */}
      <VastuSection id="vastu" />

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
