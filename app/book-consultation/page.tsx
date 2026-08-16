import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Book Free Interior Consultation | ATS Interior Solutions",
  description: "Schedule a free home interior or modular kitchen consultation in Noida, Greater Noida, Ghaziabad or Delhi NCR."
};

export default function BookConsultationPage() {
  return (
    <main className="bg-porcelain pb-16">
      <section className="bg-ink text-white py-16">
        <div className="section-shell">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brass">100% Free - No Obligation</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">Book Free Consultation</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80">
            Tell us about your property layout, location, budget range and timeline. Our design manager will evaluate your floor plan and share a custom 3D concept.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Book Consultation", href: "/book-consultation" }]} />

      <section className="py-12">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="self-center">
            <h2 className="font-display text-3xl text-ink">What to expect from your consultation:</h2>
            <ul className="mt-6 grid gap-4 text-sm text-graphite">
              {[
                "Floor plan analysis & 3D space optimization ideas",
                "Material guidance (BWP Plywood, HDMR, Acrylic vs Laminate)",
                "Itemized cost estimate tailored to your budget band",
                "Site measurement appointment scheduling",
                "1-Year execution warranty documentation breakdown"
              ].map((item) => (
                <li className="flex items-start gap-3" key={item}>
                  <CheckCircle2 className="text-clay shrink-0 mt-0.5" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <LeadForm />
        </div>
      </section>
    </main>
  );
}
