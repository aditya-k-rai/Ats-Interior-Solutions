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
      <section className="hero-image min-h-[88vh] text-white">
        <div className="section-shell grid min-h-[88vh] items-end gap-8 pb-10 pt-20 lg:grid-cols-[1.08fr_0.72fr] lg:pb-16">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-md bg-white/12 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
              Greater Noida | Noida | Ghaziabad | Delhi NCR
            </p>
            <h1 className="text-balance font-display text-4xl font-semibold leading-tight sm:text-6xl lg:text-7xl">
              Interior Designer in Noida, Greater Noida & Delhi NCR
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
              Premium home interiors, modular kitchens, wardrobes, false ceilings and office spaces across Greater Noida, Noida, Ghaziabad and Delhi NCR — planned around your budget, timeline and daily routine.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-4 font-semibold text-white transition hover:bg-clay/90" href="#consultation">
                Get Free Consultation <ArrowRight size={18} />
              </a>
              <Link className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-4 font-semibold text-white transition hover:bg-white/10" href="/portfolio">
                <Play size={18} /> View Our Work
              </Link>
            </div>
            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {["50+ Projects Delivered", "4 NCR Cities Covered", "1 Year Warranty"].map((item) => (
                <div className="rounded-md border border-white/18 bg-white/10 p-3 text-xs font-semibold backdrop-blur sm:text-sm" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <LeadForm />
        </div>
      </section>

      {/* Trust Metrics Strip */}
      <section className="bg-white py-8 border-b border-moss/10">
        <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div className="flex items-center gap-4 rounded-lg border border-moss/10 bg-porcelain p-4 shadow-sm" key={metric.label}>
                <div className="grid size-11 place-items-center rounded-md bg-moss text-white">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="font-display text-3xl text-ink">{metric.value}</p>
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
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Seven Core Services</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">Built for every stage of your space</h2>
            </div>
            <Link className="inline-flex items-center gap-2 font-semibold text-moss hover:underline" href="/services">
              View all services <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="rounded-lg bg-white p-6 shadow-soft border border-moss/5 transition hover:-translate-y-1" key={service.slug}>
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="grid size-12 place-items-center rounded-md bg-mist text-moss">
                      <Icon size={23} />
                    </div>
                    <Link className="rounded-md border border-moss/15 px-3 py-1.5 text-xs font-bold text-moss hover:bg-mist" href={`/${service.slug}-noida`}>
                      See Projects
                    </Link>
                  </div>
                  <h3 className="font-display text-2xl">{service.name}</h3>
                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-graphite">{service.short}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-mist pt-4">
                    <span className="rounded-md bg-porcelain px-3 py-1.5 text-xs font-semibold text-graphite">{service.budget}</span>
                    <a className="rounded-md bg-clay px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-clay/90" href={whatsappHref(`I need a quote for ${service.name}.`)}>
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
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Portfolio Case Studies</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">Real projects delivered across NCR</h2>
            </div>
            <Link className="inline-flex items-center gap-2 font-semibold text-moss hover:underline" href="/portfolio">
              Full portfolio <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <Link className={`relative flex min-h-[360px] items-end overflow-hidden rounded-lg p-6 text-white shadow-soft group ${project.className}`} href={`/projects/${project.slug}`} key={project.slug}>
                <div className="relative z-10 transition group-hover:translate-y-[-4px]">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/80">{project.city} | {project.area}</p>
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
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Interactive SXO Showcase</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Drag to see the transformation</h2>
            <p className="mt-2 text-sm leading-6 text-graphite">
              Slide back and forth to inspect original site condition vs finished modular interior execution.
            </p>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Material Comparison Section (GEO Strategy) */}
      <section className="bg-white py-16 border-t border-moss/10">
        <div className="section-shell">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Material Guidance (GEO & SXO)</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Understand materials before buying</h2>
            <p className="mt-2 text-sm leading-6 text-graphite">
              Clear comparison data helps home buyers choose board grades and shutter finishes with confidence.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {materialComparisons.map((item) => (
              <div className="rounded-lg border border-moss/10 bg-porcelain p-5 shadow-sm" key={item.title}>
                <h3 className="font-display text-2xl text-ink">{item.title}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-clay">{item.factor}</p>
                <div className="mt-4 grid gap-3 text-xs leading-5 text-graphite">
                  <div className="rounded bg-white p-3 border border-moss/10">
                    <p className="font-semibold text-moss">Option A</p>
                    <p className="mt-1">{item.optionA}</p>
                  </div>
                  <div className="rounded bg-white p-3 border border-moss/10">
                    <p className="font-semibold text-clay">Option B</p>
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
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Why ATS</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Trust signals for high-value interior decisions</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {usp.map((item) => {
              const Icon = item.icon;
              return (
                <div className="rounded-lg border border-moss/10 bg-white p-5 shadow-soft" key={item.title}>
                  <Icon className="mb-4 text-clay" size={24} />
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-graphite">{item.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-mist/70 py-16">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">5-Step Process</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl">A clear path from brief to handover</h2>
              <p className="mt-4 text-sm leading-6 text-graphite">
                Transparent execution schedule ensures zero surprises, on-time delivery, and clean site closure.
              </p>
            </div>
            <div className="grid gap-3">
              {process.map((step, index) => (
                <div className="grid grid-cols-[48px_1fr] gap-4 rounded-lg bg-white p-4 shadow-soft" key={step.title}>
                  <div className="grid size-12 place-items-center rounded-md bg-brass font-bold text-ink">{index + 1}</div>
                  <div>
                    <h3 className="font-display text-xl">{step.title}</h3>
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
      <section className="bg-white py-16 border-t border-moss/10">
        <div className="section-shell">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Cities We Serve</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Hyperlocal coverage across Delhi NCR</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <Link className="rounded-lg border border-moss/10 bg-porcelain p-5 transition hover:-translate-y-1 hover:shadow-soft" href={`/interior-design-${city.slug}`} key={city.slug}>
                <MapPin className="mb-3 text-clay" size={24} />
                <h3 className="font-display text-2xl">{city.name}</h3>
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
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Reviews & Voice Search FAQs</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl">Answers to common buyer questions</h2>
            <div className="mt-6 rounded-lg bg-white p-6 shadow-soft border border-moss/10">
              <div className="mb-3 flex gap-1 text-brass">
                {[1, 2, 3, 4, 5].map((item) => (
                  <Star fill="currentColor" key={item} size={18} />
                ))}
              </div>
              <p className="text-sm leading-6 text-graphite">
                The ATS team helped us plan storage, board grades and cove lighting before execution. The process was transparent and the final home felt exactly like the 3D renders.
              </p>
              <p className="mt-4 text-xs font-bold text-ink">Ritika Sharma | Noida Sector 137 (3 BHK Interior)</p>
            </div>

            <div className="mt-6">
              <Link className="inline-flex items-center gap-2 font-semibold text-moss hover:underline text-sm" href="/faq">
                View all 60+ FAQs & Hindi Voice Queries <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          
          <div className="grid gap-3">
            {faqs.slice(0, 5).map((faq) => (
              <details className="rounded-lg bg-white p-4 shadow-soft" key={faq.q}>
                <summary className="cursor-pointer font-semibold text-sm">{faq.q}</summary>
                <p className="mt-3 text-xs leading-6 text-graphite">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="bg-mist/80 py-16">
        <div className="section-shell">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">Guides & Resources</p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Commercial content clusters for search intent</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-4">
            {blogPosts.map((post) => (
              <Link className="rounded-lg bg-white p-5 shadow-soft transition hover:-translate-y-1" href="/blog" key={post.slug}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">{post.category}</p>
                <h3 className="mt-2 font-display text-xl leading-snug">{post.title}</h3>
                <p className="mt-2 text-xs leading-5 text-graphite">{post.excerpt}</p>
                <p className="mt-4 text-xs font-semibold text-moss">{post.readTime} read</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final Consultation Band */}
      <section className="bg-moss py-16 text-white" id="consultation">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="self-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">Free Consultation</p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">Ready to transform your space?</h2>
            <p className="mt-4 text-sm leading-7 text-white/80">
              Share your city, budget and timeline. Our design manager will contact you within 1 hour with a free consultation and floor plan evaluation.
            </p>
            <ul className="mt-6 grid gap-3 text-xs text-white/85">
              {["Contextual WhatsApp click tracking", "Multi-step lead qualification model", "1-Year comprehensive after-service execution warranty"].map((item) => (
                <li className="flex items-center gap-2" key={item}>
                  <CheckCircle2 className="text-brass" size={16} /> {item}
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
