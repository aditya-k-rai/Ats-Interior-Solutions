import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { WorkProcess } from "@/components/WorkProcess";
import { processStepsData } from "@/data/site";

export const metadata: Metadata = {
  title: "4-Step Interior Design & Execution Process | ATS Interior Solutions",
  description: "Learn about ATS Interior Solutions' transparent 4-step process from Consultation, Concept & Design, Factory Execution to Final Handover with 1-year warranty."
};

export default function ProcessPage() {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "4-Step Interior Design Execution Process",
    description: "Transparent 4-step interior execution workflow.",
    step: processStepsData.map((step) => ({
      "@type": "HowToStep",
      position: step.id,
      name: step.title,
      text: step.description
    }))
  };

  return (
    <main className="bg-porcelain pb-16">
      <JsonLd data={howToSchema} />
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 size-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="section-shell relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Transparent Execution Workflow</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">Our Working Process</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80">
            From initial floor plan discussion to final snag closing, see how we deliver turnkey interior and civil projects on time with zero hidden costs.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Process", href: "/process" }]} />

      <WorkProcess showTitle={false} />
    </main>
  );
}
