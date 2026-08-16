import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock3, MapPin, ShieldCheck, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { cities, faqs, getLandingPage, getLandingPages, pricingTiers, projects, serviceSubtypes, site, titleCaseSlug, whatsappHref } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getLandingPages().map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) return {};
  const location = page.area ? titleCaseSlug(page.area) : page.city?.name ?? "Delhi NCR";
  const title = `${page.service.name} in ${location}`;
  return {
    title,
    description: `${page.service.name} by ATS Interior Solutions in ${location}. Get design, execution, budget guidance, portfolio proof and a free consultation across Delhi NCR.`,
    alternates: {
      canonical: `/${slug}`
    },
    openGraph: {
      title: `${title} | ATS Interior Solutions`,
      description: `Book a free consultation for ${page.service.name.toLowerCase()} in ${location}.`,
      url: `${site.url}/${slug}`
    }
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const page = getLandingPage(slug);
  if (!page) notFound();

  const location = page.area ? titleCaseSlug(page.area) : page.city?.name ?? "Delhi NCR";
  const cityFocus = page.city?.focus ?? "homes, kitchens, wardrobes, ceiling, bathroom and office projects across NCR";
  const relatedAreas = (page.city?.areas ?? cities.flatMap((city) => city.areas)).slice(0, 6);
  const relatedCities = cities.filter((city) => city.slug !== page.city?.slug);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${page.service.name} in ${location}`,
    provider: {
      "@type": "LocalBusiness",
      name: site.name,
      telephone: site.phone,
      areaServed: page.city?.name ?? "Delhi NCR"
    },
    serviceType: page.service.name,
    areaServed: location
  };

  return (
    <main className="bg-porcelain">
      <JsonLd data={schema} />
      <section className="hero-image min-h-[76vh] text-white">
        <div className="section-shell grid min-h-[76vh] items-end gap-8 pb-12 pt-28 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="mb-4 inline-flex rounded-md bg-white/12 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur">
              {page.city?.name ?? "Delhi NCR"} service page
            </p>
            <h1 className="text-balance font-display text-5xl font-semibold leading-tight lg:text-7xl">
              {page.service.name} in {location}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82">
              ATS Interior Solutions plans and executes {page.service.name.toLowerCase()} projects for {cityFocus}. Get a practical estimate, material direction and a local consultation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a className="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-4 font-semibold text-white" href={whatsappHref(`I am interested in ${page.service.name} in ${location}.`)}>
                WhatsApp Enquiry <ArrowRight size={18} />
              </a>
              <Link className="inline-flex items-center gap-2 rounded-md border border-white/30 px-5 py-4 font-semibold text-white" href="/portfolio">
                View Portfolio
              </Link>
            </div>
          </div>
          <LeadForm defaultCity={page.city?.name ?? "Noida"} defaultService={page.service.name} compact />
        </div>
      </section>

      <Breadcrumbs items={[{ label: page.service.name, href: `/${page.service.slug}` }, { label: location, href: `/${slug}` }]} />

      <section className="bg-white py-6">
        <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Projects in area", "30+"],
            ["Average completion", page.service.timeline],
            ["Client rating", "4.9/5"],
            ["Warranty", "1 year"]
          ].map(([label, value]) => (
            <div className="rounded-lg border border-moss/10 bg-porcelain p-4" key={label}>
              <p className="text-sm text-graphite">{label}</p>
              <p className="mt-1 font-display text-3xl text-moss">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <aside className="self-start rounded-lg bg-white p-5 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Quick facts</p>
            <div className="mt-5 grid gap-4 text-sm">
              <p className="flex gap-3"><MapPin className="text-clay" size={19} /> {location}</p>
              <p className="flex gap-3"><Clock3 className="text-clay" size={19} /> Typical timeline: {page.service.timeline}</p>
              <p className="flex gap-3"><ShieldCheck className="text-clay" size={19} /> After-service support and warranty</p>
              <p className="flex gap-3"><Star className="text-clay" size={19} /> Portfolio-led design consultation</p>
            </div>
          </aside>
          <article className="rounded-lg bg-white p-6 shadow-soft">
            <h2 className="font-display text-4xl">{page.service.name} planned for {location} homes</h2>
            <p className="mt-5 leading-8 text-graphite">
              Buyers searching for {page.service.name.toLowerCase()} in {location} usually need more than a catalogue. They need a team that can understand property size, society constraints, family routines, material durability and final execution. ATS Interior Solutions uses a consultation-first process so the estimate, design language and project scope stay connected from the first conversation.
            </p>
            <p className="mt-4 leading-8 text-graphite">
              The recommended approach from the roadmap is to keep every local page useful, not thin. This page is structured with visible service scope, local context, project proof, FAQs, internal links and a clear enquiry path. As real ATS projects are added, this content should be enriched with original photos, society names where appropriate, client stories and measured outcomes.
            </p>
            <div className="mt-8 grid gap-3 md:grid-cols-2">
              {["Design brief and measurements", "Material and finish guidance", "3D visualisation before execution", "Factory and site coordination", "Transparent budget discussion", "Handover and after-service"].map((item) => (
                <p className="flex items-center gap-2 rounded-md bg-mist p-3 text-sm font-semibold" key={item}>
                  <CheckCircle2 className="text-clay" size={18} /> {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Sub-services</p>
          <h2 className="mt-2 font-display text-4xl">{page.service.name} options in {location}</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {(serviceSubtypes[page.service.slug] ?? []).map((item) => (
              <div className="rounded-lg border border-moss/10 bg-porcelain p-4" key={item}>
                <h3 className="font-semibold">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-graphite">Planned with measurements, material guidance, execution timeline and budget fit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Pricing transparency</p>
            <h2 className="mt-2 font-display text-4xl">{page.service.name} cost in {location}</h2>
            <p className="mt-4 leading-7 text-graphite">
              The PDF emphasizes price clarity because interior buyers compare carefully before enquiring. These ranges are indicative and should be replaced with ATS-approved pricing after real measurement and material selection.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <article className="rounded-lg bg-white p-5 shadow-soft" key={tier.tier}>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">{tier.tier}</p>
                <h3 className="mt-3 font-display text-3xl text-moss">{tier.range}</h3>
                <p className="mt-3 text-sm leading-6 text-graphite">{tier.includes}</p>
                <a className="mt-5 inline-flex rounded-md bg-moss px-4 py-3 text-sm font-semibold text-white" href={whatsappHref(`I want an exact quote for ${page.service.name} in ${location}.`)}>
                  Get Exact Quote
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="section-shell">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Project proof</p>
          <h2 className="mt-2 font-display text-4xl">Relevant work to attach to this page</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <Link className={`relative flex min-h-[330px] items-end rounded-lg p-5 text-white shadow-soft ${project.className}`} href={`/projects/${project.slug}`} key={project.slug}>
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75">{project.city} | {project.area}</p>
                  <h3 className="font-display text-3xl">{project.title}</h3>
                  <p className="mt-2 text-sm text-white/86">{project.budget}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">FAQs</p>
            <h2 className="mt-2 font-display text-4xl">Common questions before booking</h2>
            <div className="mt-7 grid gap-3">
              {faqs.slice(0, 4).map((faq) => (
                <details className="rounded-lg bg-white p-4 shadow-soft" key={faq.q}>
                  <summary className="cursor-pointer font-semibold">{faq.q}</summary>
                  <p className="mt-3 text-sm leading-6 text-graphite">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
          <LeadForm defaultCity={page.city?.name ?? "Noida"} defaultService={page.service.name} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Area pages</p>
            <h2 className="mt-2 font-display text-4xl">Nearby local pages</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {relatedAreas.map((area) => (
                <Link className="rounded-md bg-porcelain px-3 py-2 text-sm font-semibold text-moss" href={`/${page.service.slug}-${area}`} key={area}>
                  {page.service.name} {titleCaseSlug(area)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Other cities</p>
            <h2 className="mt-2 font-display text-4xl">Expand your search</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {relatedCities.map((city) => (
                <Link className="rounded-md bg-mist px-3 py-2 text-sm font-semibold text-moss" href={`/${page.service.slug}-${city.slug}`} key={city.slug}>
                  {page.service.name} {city.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
