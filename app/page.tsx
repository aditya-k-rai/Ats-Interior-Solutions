import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Play, Star } from "lucide-react";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { BudgetEstimator } from "@/components/BudgetEstimator";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { blogPosts, cities, faqs, materialComparisons, process, projects, services, site, trustMetrics, usp, whatsappHref } from "@/data/site";

export default function HomePage() {
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

  return (
    <main>
      <JsonLd data={localBusiness} />
      <JsonLd data={faqSchema} />
      <JsonLd data={howToSchema} />

      {/* Hero Section */}
      <section className="hero-image min-h-[88vh] text-white relative">
        <div className="section-shell grid min-h-[88vh] items-end gap-8 pb-10 pt-20 lg:grid-cols-[1.08fr_0.72fr] lg:pb-16 relative z-10">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-md bg-white/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur border border-gold-500/30 text-gold-300">
              Greater Noida | Noida | Ghaziabad | Delhi NCR
            </p>
            <h1 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Interior Designer in Noida, Greater Noida & Delhi NCR
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Premium home interiors, modular kitchens, wardrobes, false ceilings and office spaces across Greater Noida, Noida, Ghaziabad and Delhi NCR — planned around your budget, timeline and daily routine.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-lg gradient-btn-gold px-6 py-4 font-bold text-ink shadow-lg shadow-gold-500/20 transition-all hover:scale-105 active:scale-95" href="#consultation">
                Get Free Consultation <ArrowRight size={18} />
              </a>
              <Link className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-4 font-bold text-white transition hover:bg-white/10 hover:border-gold-400/50" href="/portfolio">
                <Play size={18} /> View Our Work
              </Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {["50+ Projects Delivered", "4 NCR Cities Covered", "1 Year Warranty"].map((item) => (
                <div className="rounded-lg border border-white/18 bg-white/10 p-3 text-xs font-semibold backdrop-blur sm:text-sm text-gold-200" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* Trust Metrics Strip */}
      <section className="bg-white py-8 border-b border-emerald-900/10">
        <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div className="flex items-center gap-4 rounded-xl border border-emerald-900/10 bg-porcelain p-4 shadow-sm" key={metric.label}>
                <div className="grid size-12 place-items-center rounded-lg bg-emerald-800 text-gold-400 font-bold shadow-md">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="font-display text-3xl text-emerald-950">{metric.value}</p>
                  <p className="text-xs font-semibold text-graphite">{metric.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16" id="services">
        <div className="section-shell">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Seven Core Services</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl text-emerald-950">Built for every stage of your space</h2>
            </div>
            <Link className="inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-gold-600 transition text-sm" href="/services">
              View all services <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="rounded-xl bg-white p-6 shadow-soft border border-emerald-900/5 transition hover:-translate-y-1 hover:border-gold-500/30" key={service.slug}>
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="grid size-12 place-items-center rounded-lg bg-mist text-emerald-800">
                      <Icon size={23} />
                    </div>
                    <Link className="rounded-md border border-emerald-900/15 px-3 py-1.5 text-xs font-bold text-emerald-800 hover:bg-mist hover:text-gold-600 transition" href={`/${service.slug}-noida`}>
                      See Projects
                    </Link>
                  </div>
                  <h3 className="font-display text-2xl text-emerald-950">{service.name}</h3>
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-graphite">{service.short}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-mist pt-4">
                    <span className="rounded-md bg-porcelain px-3 py-1.5 text-xs font-semibold text-graphite">{service.budget}</span>
                    <a className="rounded-lg gradient-btn-gold px-4 py-1.5 text-xs font-bold text-ink shadow-sm transition hover:scale-105" href={whatsappHref(`I need a quote for ${service.name}.`)}>
                      Get Quote
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Proof */}
      <section className="bg-mist/80 py-16">
        <div className="section-shell">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Portfolio Case Studies</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl text-emerald-950">Real projects delivered across NCR</h2>
            </div>
            <Link className="inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-gold-600 transition text-sm" href="/portfolio">
              Full portfolio <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <Link className={`relative flex min-h-[360px] items-end overflow-hidden rounded-xl p-6 text-white shadow-soft group border border-emerald-900/10 ${project.className}`} href={`/projects/${project.slug}`} key={project.slug}>
                <div className="relative z-10 transition group-hover:translate-y-[-4px]">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-300">{project.city} | {project.area}</p>
                  <h3 className="font-display text-3xl">{project.title}</h3>
                  <p className="mt-2 text-xs font-semibold text-white/90">{project.service} | {project.budget}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive SXO Before & After Showcase */}
      <section className="py-16">
        <div className="section-shell">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Interactive SXO Showcase</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-emerald-950">Drag to see the transformation</h2>
            <p className="mt-2 text-sm leading-6 text-graphite">
              Slide back and forth to inspect original site condition vs finished modular interior execution.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Material Comparison Section (GEO Strategy) */}
      <section className="bg-white py-16 border-t border-emerald-900/10">
        <div className="section-shell">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Material Guidance (GEO & SXO)</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-emerald-950">Understand materials before buying</h2>
            <p className="mt-2 text-sm leading-6 text-graphite">
              Clear comparison data helps home buyers choose board grades and shutter finishes with confidence.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {materialComparisons.map((item) => (
              <div className="rounded-xl border border-emerald-900/10 bg-porcelain p-5 shadow-sm" key={item.title}>
                <h3 className="font-display text-2xl text-emerald-950">{item.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-gold-600">{item.factor}</p>
                <div className="mt-4 grid gap-3 text-xs leading-5 text-graphite">
                  <div className="rounded-lg bg-white p-3 border border-emerald-900/10">
                    <p className="font-bold text-emerald-800">Option A</p>
                    <p className="mt-1">{item.optionA}</p>
                  </div>
                  <div className="rounded-lg bg-white p-3 border border-emerald-900/10">
                    <p className="font-bold text-gold-600">Option B</p>
                    <p className="mt-1">{item.optionB}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ATS */}
      <section className="py-16">
        <div className="section-shell">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Why ATS</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl text-emerald-950">Trust signals for high-value interior decisions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {usp.map((item) => {
              const Icon = item.icon;
              return (
                <div className="rounded-xl border border-emerald-900/10 bg-white p-5 shadow-soft hover:border-gold-500/30 transition" key={item.title}>
                  <Icon className="mb-4 text-gold-600" size={24} />
                  <h3 className="font-semibold text-emerald-950">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-graphite">{item.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-mist/70 py-16 border-t border-emerald-900/10">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">5-Step Process</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl text-emerald-950">A clear path from brief to handover</h2>
              <p className="mt-4 text-sm leading-6 text-graphite">
                Transparent execution schedule ensures zero surprises, on-time delivery, and clean site closure.
              </p>
            </div>
            <div className="grid gap-3">
              {process.map((step, index) => (
                <div className="grid grid-cols-[48px_1fr] gap-4 rounded-xl bg-white p-4 shadow-soft border border-emerald-900/5" key={step.title}>
                  <div className="grid size-12 place-items-center rounded-lg gradient-btn-gold font-bold text-ink font-display text-lg">{index + 1}</div>
                  <div>
                    <h3 className="font-display text-xl text-emerald-950">{step.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-graphite">{step.copy}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cost Estimator */}
      <section className="py-16" id="cost">
        <div className="section-shell">
          <BudgetEstimator />
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="bg-white py-16 border-t border-emerald-900/10">
        <div className="section-shell">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Cities We Serve</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl text-emerald-950">Hyperlocal coverage across Delhi NCR</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <Link className="rounded-xl border border-emerald-900/10 bg-porcelain p-5 transition hover:-translate-y-1 hover:shadow-soft hover:border-gold-500/30" href={`/interior-design-${city.slug}`} key={city.slug}>
                <MapPin className="mb-3 text-gold-600" size={24} />
                <h3 className="font-display text-2xl text-emerald-950">{city.name}</h3>
                <p className="mt-2 text-xs leading-5 text-graphite">{city.focus}.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Hindi Voice Search Section */}
      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Reviews & Voice Search FAQs</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-emerald-950">Answers to common buyer questions</h2>
            <div className="mt-6 rounded-xl bg-white p-6 shadow-soft border border-emerald-900/10">
              <div className="mb-3 flex gap-1 text-gold-400">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star fill="currentColor" key={item} size={18} />
                ))}
              </div>
              <p className="text-sm leading-6 text-graphite">
                The ATS team helped us plan storage, board grades and cove lighting before execution. The process was transparent and the final home felt exactly like the 3D renders.
              </p>
              <p className="mt-4 text-xs font-bold text-emerald-950">Ritika Sharma | Noida Sector 137 (3 BHK Interior)</p>
            </div>

            <div className="mt-6">
              <Link className="inline-flex items-center gap-2 font-bold text-emerald-800 hover:text-gold-600 transition text-sm" href="/faq">
                View all 60+ FAQs & Hindi Voice Queries <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="grid gap-3">
            {faqs.slice(0, 5).map((faq) => (
              <details className="rounded-xl bg-white p-4 shadow-soft border border-emerald-900/5" key={faq.q}>
                <summary className="cursor-pointer font-semibold text-sm text-emerald-950">{faq.q}</summary>
                <p className="mt-3 text-xs leading-6 text-graphite">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="bg-mist/80 py-16 border-t border-emerald-900/10">
        <div className="section-shell">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">Guides & Resources</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl text-emerald-950">Commercial content clusters for search intent</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <Link className="rounded-xl bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-gold-500/30 border border-emerald-900/5" href="/blog" key={post.slug}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-600">{post.category}</p>
                <h3 className="mt-2 font-display text-xl leading-snug text-emerald-950">{post.title}</h3>
                <p className="mt-2 text-xs leading-5 text-graphite">{post.excerpt}</p>
                <p className="mt-4 text-xs font-bold text-emerald-800">{post.readTime} read</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Consultation Band */}
      <section className="bg-emerald-950 py-16 text-white border-t border-gold-500/20" id="consultation">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="self-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Free Consultation</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">Ready to transform your space?</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Share your city, budget and timeline. Our design manager will contact you within 1 hour with a free consultation and floor plan evaluation.
            </p>
            <ul className="mt-6 grid gap-3 text-xs text-white/85">
              {["Contextual WhatsApp click tracking", "Multi-step lead qualification model", "1-Year comprehensive after-service execution warranty"].map((item) => (
                <li className="flex items-center gap-2" key={item}>
                  <CheckCircle2 className="text-gold-400" size={16} /> {item}
                </li>
              ))}
            </ul>
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
