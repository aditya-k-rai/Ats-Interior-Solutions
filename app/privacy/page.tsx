import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy and lead data handling policy for ATS Interior Solutions."
};

export default function PrivacyPage() {
  return (
    <main className="bg-porcelain">
      <section className="hero-image min-h-[44vh] text-white">
        <div className="section-shell flex min-h-[44vh] items-end pb-12 pt-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">Privacy</p>
            <h1 className="mt-2 font-display text-6xl">Lead data handled with care</h1>
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Privacy", href: "/privacy" }]} />
      <section className="py-16">
        <article className="section-shell rounded-lg bg-white p-6 leading-8 text-graphite shadow-soft">
          <h2 className="font-display text-4xl text-ink">Privacy policy</h2>
          <p className="mt-5">
            ATS Interior Solutions collects enquiry details such as name, phone number, email, city, service requirement, property type, budget range and timeline to respond to consultation requests.
          </p>
          <p className="mt-4">
            Lead information may be used for consultation follow-up, quotation preparation, WhatsApp communication and source attribution. It should not be sold or shared with unrelated third parties.
          </p>
          <p className="mt-4">
            For privacy questions, contact {site.email}. Before production launch, replace this starter policy with legal-reviewed language that matches the final CRM, analytics and retention setup.
          </p>
        </article>
      </section>
    </main>
  );
}
