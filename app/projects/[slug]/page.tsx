import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock3, MapPin, Ruler, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { getProjectBySlug, projects, site, whatsappHref } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${project.area}, ${project.city}`,
    description: `${project.title} by ATS Interior Solutions in ${project.area}, ${project.city}. See scope, materials, timeline, budget and transformation story.`,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    openGraph: {
      title: `${project.title} | ATS Interior Solutions`,
      description: `${project.service} project in ${project.city} with ${project.budget} budget range.`
    }
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="bg-porcelain">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          about: project.service,
          locationCreated: `${project.area}, ${project.city}`,
          creator: {
            "@type": "LocalBusiness",
            name: site.name,
            telephone: site.phone
          },
          review: {
            "@type": "Review",
            reviewBody: project.testimonial,
            author: {
              "@type": "Person",
              name: `${project.city} client`
            }
          }
        }}
      />
      <section className={`min-h-[68vh] text-white ${project.className}`}>
        <div className="section-shell flex min-h-[68vh] items-end pb-12 pt-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/72">{project.city} | {project.area} | {project.service}</p>
            <h1 className="mt-3 font-display text-5xl leading-tight lg:text-7xl">{project.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/86">
              A case-study page built for trust, local relevance and buyer confidence, following the PDF recommendation to turn portfolio items into stories.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }, { label: project.title, href: `/projects/${project.slug}` }]} />

      <section className="bg-white py-6">
        <div className="section-shell grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [MapPin, "Location", `${project.area}, ${project.city}`],
            [Ruler, "Property", `${project.property} | ${project.size}`],
            [Clock3, "Timeline", project.timeline],
            [Sparkles, "Budget", project.budget]
          ].map(([Icon, label, value]) => {
            const StatIcon = Icon as typeof MapPin;
            return (
              <div className="flex gap-4 rounded-lg border border-moss/10 bg-porcelain p-4" key={String(label)}>
                <StatIcon className="text-clay" size={22} />
                <div>
                  <p className="text-sm text-graphite">{String(label)}</p>
                  <p className="mt-1 font-semibold text-ink">{String(value)}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_420px]">
          <article className="rounded-lg bg-white p-6 shadow-soft">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">{project.style}</p>
            <h2 className="mt-2 font-display text-4xl">Challenge, solution and delivery</h2>
            <div className="mt-6 grid gap-6 leading-8 text-graphite">
              <div>
                <h3 className="font-display text-2xl text-ink">Client requirement</h3>
                <p className="mt-2">{project.challenge}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl text-ink">ATS solution</h3>
                <p className="mt-2">{project.solution}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl text-ink">Materials and finishes</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.materials.map((material) => (
                    <span className="rounded-md bg-mist px-3 py-2 text-sm font-semibold text-moss" key={material}>{material}</span>
                  ))}
                </div>
              </div>
            </div>
            <blockquote className="mt-8 rounded-lg bg-porcelain p-5 text-lg leading-8 text-ink">
              {project.testimonial}
            </blockquote>
          </article>
          <div className="grid gap-5 self-start">
            <div className="rounded-lg bg-white p-5 shadow-soft">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">Scope of work</p>
              <div className="mt-4 grid gap-3">
                {project.scope.map((item) => (
                  <p className="flex items-center gap-2 text-sm font-semibold" key={item}>
                    <CheckCircle2 className="text-clay" size={18} /> {item}
                  </p>
                ))}
              </div>
            </div>
            <LeadForm defaultCity={project.city} defaultService={project.service === "Kitchen" ? "Modular Kitchen" : "Interior Design"} compact />
          </div>
        </div>
      </section>

      <section className="bg-moss py-14 text-white">
        <div className="section-shell flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">Similar project</p>
            <h2 className="mt-2 font-display text-4xl">Want a transformation like this?</h2>
          </div>
          <a className="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-4 font-semibold" href={whatsappHref(`I want a similar project to ${project.title}.`)}>
            Discuss Similar Project <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
