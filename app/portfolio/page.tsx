import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { projects, realWorkGallery } from "@/data/site";

export const metadata: Metadata = {
  title: "Project Portfolio | Real ATS Work Photographs",
  description: "Explore completed project case studies, modular kitchens, wardrobes, and living room interiors delivered by ATS Interior Solutions in Noida, Greater Noida, and Ghaziabad."
};

export default function PortfolioPage() {
  return (
    <main className="bg-porcelain pb-16">
      <section className="bg-emerald-950 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 size-80 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
        <div className="section-shell relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Real Project Evidence</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">ATS Completed Project Portfolio</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80">
            Real site photographs of completed home interiors, modular kitchens, custom wardrobes, and TV panel consoles across Noida, Greater Noida, and Delhi NCR.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Portfolio", href: "/portfolio" }]} />

      {/* Featured Projects Grid */}
      <section className="py-12">
        <div className="section-shell">
          <div className="mb-8">
            <h2 className="font-display text-3xl text-emerald-950">Detailed Case Studies</h2>
            <p className="text-xs text-graphite mt-1">Inspected floor plans, materials, challenge/solution, and real client quotes.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft border border-emerald-950/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" href={`/projects/${project.slug}`} key={project.slug}>
                <div className="relative h-64 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image || "/images/work/tv-unit-living-1.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/20 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-lg bg-gold-400/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-ink shadow">
                    {project.city} • {project.area}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-emerald-950 group-hover:text-gold-600 transition">{project.title}</h3>
                    <p className="mt-2 text-xs text-graphite line-clamp-2">{project.challenge}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-mist pt-3 text-xs font-semibold text-emerald-800">
                    <span>{project.service}</span>
                    <span className="text-gold-600">{project.budget}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Real Site Handover Photo Gallery */}
      <section className="py-12 bg-white border-t border-emerald-950/10">
        <div className="section-shell">
          <div className="mb-8">
            <h2 className="font-display text-3xl text-emerald-950">Site Handover Photo Gallery</h2>
            <p className="text-xs text-graphite mt-1">Real site photographs from Company Details archives.</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {realWorkGallery.map((item) => (
              <div className="group relative h-72 overflow-hidden rounded-2xl bg-emerald-950 shadow-md border border-emerald-950/10" key={item.title}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/30 to-transparent p-5 flex flex-col justify-end text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">{item.category}</span>
                  <h4 className="font-display text-lg font-bold text-white mt-1 leading-snug">{item.title}</h4>
                  <p className="text-[11px] text-white/80 mt-1 line-clamp-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
