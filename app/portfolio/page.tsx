import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/site";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A portfolio-first view of ATS Interior Solutions projects across full home interiors, modular kitchens, wardrobes and living spaces."
};

export default function PortfolioPage() {
  return (
    <main className="bg-porcelain">
      <section className="hero-image min-h-[52vh] text-white">
        <div className="section-shell flex min-h-[52vh] items-end pb-12 pt-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">Portfolio</p>
            <h1 className="mt-2 font-display text-6xl">Project stories that build trust</h1>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="section-shell grid gap-4 lg:grid-cols-3">
          {projects.map((project) => (
            <Link className={`flex min-h-[380px] items-end rounded-lg p-5 text-white shadow-soft ${project.className}`} href={`/projects/${project.slug}`} key={project.slug}>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/75">{project.service}</p>
                <h2 className="font-display text-3xl">{project.title}</h2>
                <p className="mt-2 text-sm text-white/86">{project.city} | {project.area} | {project.budget}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
