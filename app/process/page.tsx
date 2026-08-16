import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { process, site, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "5-Step Interior Design & Execution Process",
  description: "Learn about ATS Interior Solutions' transparent 5-step process from consultation, 3D design, material selection to factory manufacturing and handover."
};

export default function ProcessPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "5-Step Interior Design Execution Process",
    description: "Transparent 5-step interior execution workflow.",
    step: process.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.copy
    }))
  };

  return (
    <main className="bg-porcelain pb-16">
      <JsonLd data={howToSchema} />
      <section className="bg-ink text-white py-16">
        <div className="section-shell">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">Transparent Execution Workflow</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">Our 5-Step Process</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80">
            From initial floor plan discussion to final snag closing, see how we deliver projects on time with zero hidden costs.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Process", href: "/process" }]} />

      <section className="py-12">
        <div className="section-shell max-w-4xl grid gap-4">
          {process.map((step, index) => (
            <div className="rounded-xl bg-white p-6 sm:p-8 shadow-soft border border-moss/10 flex flex-col sm:flex-row items-start gap-6" key={step.title}>
              <div className="grid size-14 place-items-center rounded-xl bg-brass text-ink font-display text-2xl font-bold shrink-0">
                0{index + 1}
              </div>
              <div>
                <h2 className="font-display text-2xl text-ink">{step.title}</h2>
                <p className="mt-2 text-sm leading-7 text-graphite">{step.copy}</p>
                <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-moss">
                  <CheckCircle2 size={16} className="text-clay" /> Quality Inspection & Client Approval Included
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-moss py-12 text-white">
        <div className="section-shell flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-display text-3xl">Ready to start Step 1?</h2>
            <p className="text-sm text-white/80 mt-1">Book your free initial consultation and floor plan evaluation.</p>
          </div>
          <a
            className="inline-flex items-center gap-2 rounded-md bg-clay px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-clay/90"
            href={whatsappHref("I want to start Step 1: Free Consultation for my interior project.")}
          >
            Start Free Consultation <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
