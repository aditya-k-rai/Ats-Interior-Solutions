import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ClientTestimonials } from "@/components/ClientTestimonials";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { site, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | ATS Interior Solutions",
  description: "Read real client reviews and testimonials from SDS NRI City, Purvanchal Heights, Gaur City and villas across Noida & Greater Noida."
};

export default function TestimonialsPage() {
  return (
    <main className="bg-porcelain">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "450"
          },
          review: testimonials.map((item) => ({
            "@type": "Review",
            reviewBody: item.quote,
            author: {
              "@type": "Person",
              name: item.name
            },
            reviewRating: {
              "@type": "Rating",
              ratingValue: item.rating,
              bestRating: 5
            }
          }))
        }}
      />
      <section className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 size-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="section-shell relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Verified Client Reviews</p>
          <h1 className="mt-2 font-display text-4xl sm:text-6xl">Trust Signals & Reviews</h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80">
            Real feedback from home interior, modular kitchen, and villa construction clients across SDS NRI City, Purvanchal Heights, and Delhi NCR.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Testimonials", href: "/testimonials" }]} />

      <section className="py-12">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_380px]">
          <div>
            <ClientTestimonials showTitle={false} className="py-0 bg-transparent" />
          </div>
          <div className="w-full">
            <LeadForm />
          </div>
        </div>
      </section>
    </main>
  );
}
