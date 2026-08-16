import type { Metadata } from "next";
import { BadgeCheck, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site, trustMetrics } from "@/data/site";

export const metadata: Metadata = {
  title: "About ATS Interior Solutions | Team & Credentials",
  description: "Learn about ATS Interior Solutions, established in 2018 in Noida & Greater Noida. GST registered, CREDAI partner with 50+ completed projects."
};

export default function AboutPage() {
  return (
    <main className="bg-porcelain pb-16">
      <section className="bg-ink text-white py-16">
        <div className="section-shell">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">E-E-A-T Authority & Credentials</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">About ATS Interior Solutions</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80">
            Founded in 2018, ATS Interior Solutions is a leading local interior design and modular execution company operating across Greater Noida, Noida, Ghaziabad and Delhi NCR.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <section className="py-12">
        <div className="section-shell grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-xl bg-white p-6 sm:p-8 shadow-soft border border-moss/10">
            <h2 className="font-display text-3xl text-ink">Our Founding Story & Execution Capability</h2>
            <p className="mt-4 text-sm leading-7 text-graphite">
              ATS Interior Solutions was established with a singular objective: to eliminate the ambiguity, hidden costs, and delayed handovers that homeowners frequently experience when hiring interior contractors in Delhi NCR.
            </p>
            <p className="mt-4 text-sm leading-7 text-graphite">
              By combining in-house 3D design concepts with precision factory modular manufacturing, we ensure that every wardrobe, modular kitchen, and false ceiling detail matches the exact approved design brief.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-mist p-4">
                <p className="text-xs text-graphite font-semibold uppercase tracking-wider">GSTIN Registration</p>
                <p className="font-display text-xl text-ink mt-1">{site.gstin}</p>
              </div>
              <div className="rounded-lg bg-mist p-4">
                <p className="text-xs text-graphite font-semibold uppercase tracking-wider">Established</p>
                <p className="font-display text-xl text-ink mt-1">{site.established} (8+ Years Experience)</p>
              </div>
            </div>
          </article>

          <aside className="rounded-xl bg-ink p-6 sm:p-8 text-white shadow-soft flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">Verified Industry Credentials</p>
              <h3 className="font-display text-3xl mt-2">Memberships & Affiliations</h3>
              <ul className="mt-6 grid gap-3 text-sm text-white/85">
                {site.memberships.map((item) => (
                  <li className="flex items-center gap-2.5" key={item}>
                    <BadgeCheck className="text-brass shrink-0" size={18} /> {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-xs text-white/70">1-Year Execution Warranty</p>
              <p className="text-sm font-semibold text-brass mt-1 flex items-center gap-1.5">
                <ShieldCheck size={16} /> All ATS projects come with a formal 1-year after-service guarantee.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-8">
        <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div className="flex items-center gap-4 rounded-lg border border-moss/10 bg-white p-5 shadow-sm" key={metric.label}>
                <div className="grid size-12 place-items-center rounded-md bg-moss text-white">
                  <Icon size={22} />
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
    </main>
  );
}
