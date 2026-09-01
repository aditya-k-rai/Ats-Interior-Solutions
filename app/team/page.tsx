import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExpertTeam } from "@/components/ExpertTeam";
import { JsonLd } from "@/components/JsonLd";
import { expertTeam, site, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Expert Team & Leadership | ATS Interior Solutions",
  description: "Meet Founder Manoj Pal, Head of Operations Krishan Pal (MBA, 16+ yrs exp), Lead Architect Ar. Nishchay Channana, Senior Designer Mohit Kumar and our 15 skilled carpenters.",
  alternates: {
    canonical: "/team"
  }
};

export default function TeamPage() {
  const teamSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ATS Interior Solutions Leadership & Engineering Team",
    description: "Leadership team driving precision, 3D architecture, German-tech manufacturing, and site execution.",
    itemListElement: expertTeam.map((member, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        worksFor: {
          "@type": "Organization",
          name: site.name,
          url: site.url
        }
      }
    }))
  };

  return (
    <main className="bg-porcelain pb-16">
      <JsonLd data={teamSchema} />
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 size-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="section-shell relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
            <Sparkles size={14} /> E-E-A-T Leadership & Verification
          </span>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">Our Expert Team</h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/80">
            Meet the experienced leaders, qualified architects, interior designers, and site engineers driving 100% in-house execution across Greater Noida, Noida, Ghaziabad and Delhi NCR.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Our Team", href: "/team" }]} />

      {/* Leadership Spotlight & Founding Story */}
      <section className="py-12">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center max-w-6xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy-900/10 group">
            <Image
              src="/images/work/founder-manoj-sharma.jpg"
              alt="Manoj Pal - Founder & Managing Director ATS Interior Solutions"
              width={600}
              height={700}
              className="w-full h-[460px] object-cover object-top transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Founder & Managing Director</span>
              <h2 className="font-display text-3xl font-bold">Mr. Manoj Pal</h2>
              <p className="text-xs text-white/80 mt-1">Lead Design Director & Site Project Head</p>
            </div>
          </div>

          <article className="rounded-3xl bg-white p-6 sm:p-9 shadow-soft border border-navy-900/10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-amber-800 border border-amber-200 mb-4">
              <UserCheck size={14} className="text-amber-600" /> Direct Leadership Accountability
            </div>
            <h2 className="font-display text-3xl text-navy-950 font-bold">Visionary Leadership & Site Commitment</h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              Founded in 2018 by Mr. Manoj Pal, ATS Interior Solutions operates on a strict promise: <span className="text-navy-950 font-bold">zero third-party vendor reliance, zero cost escalation, and complete material transparency</span>.
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              Mr. Manoj Pal personally inspects site layouts and coordinates with Lead Architect Ar. Nishchay Channana and Head of Operations Mr. Krishan Pal to ensure every project matches approved 3D renders.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">Direct Phone / WhatsApp</p>
                <p className="font-display text-base text-navy-950 font-bold mt-1">{site.phone}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200">
                <p className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider">Official Email</p>
                <p className="font-display text-xs text-navy-950 font-bold mt-1.5 truncate">{site.email}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Main Employee Profile Cards Component */}
      <ExpertTeam showTitle={false} />

      {/* Team CTA Banner */}
      <section className="py-12 bg-white border-t border-navy-900/10">
        <div className="section-shell max-w-5xl text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950">Want to discuss your floor plan with our team?</h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Book a direct site measurement and 3D architectural consultation with Founder Manoj Pal & Senior Architect Ar. Nishchay Channana.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              className="inline-flex items-center gap-2 rounded-2xl gradient-btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-gold transition hover:scale-105"
              href={whatsappHref("Hi Manoj Sir, I want to book a consultation with the ATS Design & Architecture team.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Book Consultation</span> <ArrowRight size={18} />
            </a>
            <Link
              className="inline-flex items-center gap-2 rounded-2xl bg-navy-950 px-7 py-4 text-sm font-bold text-white transition hover:bg-navy-900"
              href="/portfolio"
            >
              <span>View Completed Projects</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
