import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { site, testimonials } from "@/data/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Client testimonials and review signals for ATS Interior Solutions across Noida, Greater Noida and Ghaziabad."
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
            reviewCount: "200"
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
      <section className="hero-image min-h-[52vh] text-white">
        <div className="section-shell flex min-h-[52vh] items-end pb-12 pt-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">Reviews</p>
            <h1 className="mt-2 font-display text-6xl">Trust signals from real projects</h1>
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Testimonials", href: "/testimonials" }]} />
      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="grid gap-4">
            {testimonials.map((item) => (
              <article className="rounded-lg bg-white p-6 shadow-soft" key={item.name}>
                <div className="mb-4 flex gap-1 text-brass">
                  {Array.from({ length: item.rating }).map((_, index) => (
                    <Star fill="currentColor" key={index} size={18} />
                  ))}
                </div>
                <p className="text-lg leading-8 text-graphite">{item.quote}</p>
                <p className="mt-5 font-semibold">{item.name}</p>
                <p className="text-sm text-graphite">{item.city} | {item.project}</p>
              </article>
            ))}
          </div>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
