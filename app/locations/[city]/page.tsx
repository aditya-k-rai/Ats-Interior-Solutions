import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { cities, getCityBySlug, projects, services, site, titleCaseSlug, whatsappHref } from "@/data/site";

type Props = {
  params: Promise<{ city: string }>;
};

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) return {};
  return {
    title: `Interior Designer in ${city.name}`,
    description: `ATS Interior Solutions ${city.name} local hub for interior design, modular kitchen, wardrobe, false ceiling and office interiors.`,
    alternates: {
      canonical: `/locations/${city.slug}`
    }
  };
}

export default async function CityHubPage({ params }: Props) {
  const { city: slug } = await params;
  const city = getCityBySlug(slug);
  if (!city) notFound();

  const cityProjects = projects.filter((project) => project.city === city.name || (city.slug === "greater-noida" && project.city === "Greater Noida"));

  return (
    <main className="bg-porcelain">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          telephone: site.phone,
          url: `${site.url}/locations/${city.slug}`,
          areaServed: [city.name, ...city.areas.map(titleCaseSlug)],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "200"
          }
        }}
      />
      <section className="hero-image min-h-[62vh] text-white">
        <div className="section-shell grid min-h-[62vh] items-end gap-8 pb-12 pt-28 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">City hub</p>
            <h1 className="mt-3 font-display text-6xl leading-tight">Interior Designer in {city.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/82">
              Local service coverage for {city.focus}. Explore services, nearby areas, project proof and a consultation path built for serious buyers.
            </p>
            <a className="mt-7 inline-flex items-center gap-2 rounded-md bg-clay px-5 py-4 font-semibold" href={whatsappHref(`I need interior services in ${city.name}.`)}>
              Enquire in {city.name} <ArrowRight size={18} />
            </a>
          </div>
          <LeadForm defaultCity={city.name} compact />
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: city.name, href: `/locations/${city.slug}` }]} />

      <section className="bg-white py-8">
        <div className="section-shell grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg bg-porcelain p-4"><p className="text-sm text-graphite">Priority services</p><p className="mt-1 font-display text-3xl text-moss">7</p></div>
          <div className="rounded-lg bg-porcelain p-4"><p className="text-sm text-graphite">Local areas</p><p className="mt-1 font-display text-3xl text-moss">{city.areas.length}+</p></div>
          <div className="rounded-lg bg-porcelain p-4"><p className="text-sm text-graphite">Rating target</p><p className="mt-1 font-display text-3xl text-moss">4.9/5</p></div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Local SEO evidence</p>
            <h2 className="mt-2 font-display text-4xl">Why this city page exists</h2>
            <p className="mt-4 leading-7 text-graphite">
              The PDF prioritizes city hubs because buyers often search by city before narrowing to a service. This hub connects ATS services, real areas, projects, reviews and consultation CTAs without creating low-value duplicate pages.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {["Service + city internal links", "Nearby area coverage", "Project and review proof", "Google Business Profile consistency"].map((item) => (
              <p className="flex items-center gap-2 rounded-lg bg-white p-4 font-semibold shadow-soft" key={item}>
                <CheckCircle2 className="text-clay" size={19} /> {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="section-shell">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Services in {city.name}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link className="rounded-lg bg-white p-5 shadow-soft" href={`/${service.slug}-${city.slug}`} key={service.slug}>
                <h3 className="font-display text-2xl">{service.name}</h3>
                <p className="mt-2 min-h-[72px] text-sm leading-6 text-graphite">{service.short}</p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-moss">Open page <ArrowRight size={16} /></p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Areas covered</p>
            <h2 className="mt-2 font-display text-4xl">Hyperlocal coverage in {city.name}</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {city.areas.map((area) => (
                <Link className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-moss shadow-sm" href={`/interior-design-${area}`} key={area}>
                  <MapPin size={15} /> {titleCaseSlug(area)}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Project proof</p>
            <h2 className="mt-2 font-display text-4xl">Projects near this city</h2>
            <div className="mt-6 grid gap-3">
              {(cityProjects.length ? cityProjects : projects.slice(0, 2)).map((project) => (
                <Link className="rounded-lg bg-white p-4 shadow-soft" href={`/projects/${project.slug}`} key={project.slug}>
                  <p className="flex items-center gap-2 text-sm font-bold text-clay"><Star size={16} /> {project.area}, {project.city}</p>
                  <h3 className="mt-2 font-display text-2xl">{project.title}</h3>
                  <p className="mt-1 text-sm text-graphite">{project.budget} | {project.timeline}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
