import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/data/site";

export const metadata: Metadata = {
  title: "Interior Design FAQs & Hindi Voice Search Guide",
  description: "60+ answers to common questions about interior design costs, modular kitchen prices, materials, timelines and Hindi voice search queries in Delhi NCR."
};

export default function FaqPage() {
  const englishFaqs = faqs.filter((f) => !f.q.startsWith("[Hindi]"));
  const hindiFaqs = faqs.filter((f) => f.q.startsWith("[Hindi]"));

  return (
    <main className="bg-porcelain pb-16">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q.replace("[Hindi] ", ""),
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a
            }
          }))
        }}
      />

      <section className="bg-navy-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="section-shell relative z-10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-400">AEO & Voice Search Knowledge Base</p>
              <h1 className="mt-2 font-display text-4xl sm:text-6xl font-bold leading-tight">Questions Buyers Ask First</h1>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/80">
                Comprehensive answers regarding interior costs, modular kitchen material grades, timelines, society guidelines, and NCR voice search queries in English & Hindi.
              </p>
            </div>

            {/* Desktop Feature Card */}
            <div className="rounded-2xl glass-dark p-6 border border-amber-500/30 shadow-2xl relative overflow-hidden">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">Voice Assistant Ready</span>
              <h3 className="font-display text-2xl text-white font-bold mt-1">Instant Direct Answers</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/80">
                Formulated for Google Assistant, Perplexity, Gemini, and Siri speech queries. Get immediate answers to pricing, warranties, and material grades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />

      <section className="py-10">
        <div className="section-shell grid gap-12">
          {/* English FAQs */}
          <div>
            <h2 className="font-display text-3xl text-ink mb-6">General & Commercial Questions</h2>
            <div className="grid gap-3">
              {englishFaqs.map((faq) => (
                <details className="rounded-lg bg-white p-5 shadow-soft border border-moss/10" key={faq.q}>
                  <summary className="cursor-pointer font-display text-xl text-ink hover:text-moss transition">{faq.q}</summary>
                  <p className="mt-3 text-sm leading-7 text-graphite">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Hindi Voice Search FAQs Section (Crucial for AEO/Voice Search) */}
          <div className="rounded-xl bg-mist/90 p-6 sm:p-8 border border-moss/20">
            <div className="mb-6">
              <span className="rounded bg-clay px-3 py-1 text-xs font-bold text-white uppercase tracking-widest">AEO Voice Search</span>
              <h2 className="font-display text-3xl text-ink mt-2">Hindi Voice Search FAQs (हिंदी प्रश्न)</h2>
              <p className="text-xs text-graphite mt-1">
                Direct answers for Hindi voice search queries on Google Assistant, Perplexity, and voice devices across NCR.
              </p>
            </div>

            <div className="grid gap-3">
              {hindiFaqs.map((faq) => (
                <details className="rounded-lg bg-white p-5 shadow-soft border border-moss/10" key={faq.q}>
                  <summary className="cursor-pointer font-semibold text-lg text-ink hover:text-clay transition">
                    {faq.q.replace("[Hindi] ", "")}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-graphite">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
