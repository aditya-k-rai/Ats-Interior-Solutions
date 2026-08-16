import type { Metadata } from "next";
import Image from "next/image";
import { BadgeCheck, CheckCircle2, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site, trustMetrics } from "@/data/site";

export const metadata: Metadata = {
  title: "About ATS Interior Solutions | Founder Manoj Sharma & Team",
  description: "Learn about ATS Interior Solutions founded by Mr. Manoj Sharma in 2018 in Noida & Greater Noida. Contact: +91 98737 57487."
};

export default function AboutPage() {
  return (
    <main className="bg-porcelain pb-16">
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 size-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="section-shell relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">E-E-A-T Leadership & Verification</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">About ATS Interior Solutions</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80">
            Founded in 2018 by Mr. Manoj Sharma, ATS Interior Solutions is a leading local interior design, custom modular kitchen, and house execution company operating across Greater Noida, Noida, Ghaziabad and Delhi NCR.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />

      {/* Leadership Profile Section */}
      <section className="py-12">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-navy-900/10 group">
            <Image
              src="/images/work/founder-manoj-sharma.jpg"
              alt="Manoj Sharma - Founder & Managing Director ATS Interior Solutions"
              width={600}
              height={700}
              className="w-full h-[440px] object-cover object-top transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Founder & Managing Director</span>
              <h3 className="font-display text-3xl font-bold">Manoj Sharma</h3>
              <p className="text-xs text-white/80 mt-1">Lead Design Director & Project Head</p>
            </div>
          </div>

          <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-navy-900/10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-navy-800 border border-navy-200 mb-4">
              <UserCheck size={14} className="text-amber-600" /> Direct Leadership Supervision
            </div>
            <h2 className="font-display text-3xl text-navy-950">Our Founding Story & Execution Promise</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              ATS Interior Solutions was established by Mr. Manoj Sharma with a clear mission: to eliminate delays, cost escalations, and material compromises in home interior execution.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              By combining in-house 3D design planning, factory modular production, and dedicated site engineer supervision (led by Site Engineer Utkarsh), we deliver projects that match approved 3D renders with exact material specifications.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl bg-slate-100 p-4 border border-navy-900/10">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Direct Phone / WhatsApp</p>
                <p className="font-display text-lg text-navy-950 font-bold mt-1">{site.phone}</p>
              </div>
              <div className="rounded-xl bg-slate-100 p-4 border border-navy-900/10">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Official Email</p>
                <p className="font-display text-sm text-navy-950 font-bold mt-1.5 truncate">{site.email}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Team & Cabin Visual Showcase */}
      <section className="py-12 bg-white border-y border-navy-900/10">
        <div className="section-shell">
          <div className="mb-8 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-600">On-Site Real Proof</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl text-navy-950">Design Discussions & Execution Team</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Mr. Manoj Sharma personally oversees architectural discussions and site progress across Noida, Greater Noida, and Delhi NCR.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="relative rounded-xl overflow-hidden shadow-md group h-[300px]">
              <Image
                src="/images/work/owner-architect-discussion.jpg"
                alt="Manoj Sharma discussing interior design layout with architect"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent p-5 flex flex-col justify-end text-white">
                <p className="font-display text-xl font-bold">Design & Architecture Discussion</p>
                <p className="text-xs text-white/80 mt-1">Reviewing 3D floor plans with Senior Architect</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-md group h-[300px]">
              <Image
                src="/images/work/owner-engineer-cabin.jpg"
                alt="Founder Manoj Sharma with Site Engineer in Cabin"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent p-5 flex flex-col justify-end text-white">
                <p className="font-display text-xl font-bold">Client Consultation Studio</p>
                <p className="text-xs text-white/80 mt-1">Managing Director Cabin & Material Display Studio</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-12">
        <div className="section-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div className="flex items-center gap-4 rounded-xl border border-navy-900/10 bg-white p-5 shadow-sm" key={metric.label}>
                <div className="grid size-12 place-items-center rounded-lg gradient-btn-gold font-bold text-navy-950 shadow-md">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="font-display text-3xl text-navy-950">{metric.value}</p>
                  <p className="text-xs font-semibold text-slate-600">{metric.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
