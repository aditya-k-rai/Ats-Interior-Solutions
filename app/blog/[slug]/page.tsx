import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { blogPosts, site, whatsappHref } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: `${post.title}. Practical interior design guidance from ${site.name}.`,
    alternates: {
      canonical: `/blog/${post.slug}`
    }
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main className="bg-porcelain">
      <section className="hero-image min-h-[58vh] text-white">
        <div className="section-shell flex min-h-[58vh] items-end pb-12 pt-28">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">{post.category} | {post.readTime}</p>
            <h1 className="mt-3 font-display text-5xl leading-tight lg:text-6xl">{post.title}</h1>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_420px]">
          <article className="rounded-lg bg-white p-6 leading-8 text-graphite shadow-soft">
            <h2 className="font-display text-4xl text-ink">Practical planning guide</h2>
            <p className="mt-5">
              This starter article is structured from the SEO roadmap. Replace it with ATS project evidence, original photographs, specific material examples, local context and pricing notes after measurement and site review.
            </p>
            <p className="mt-4">
              Strong content should answer the buyer&apos;s immediate question first, then explain budget drivers, material tradeoffs, timelines, execution risks and when to book a consultation. Avoid repeating keyword variants without adding useful detail.
            </p>
            <a className="mt-6 inline-flex items-center gap-2 rounded-md bg-clay px-4 py-3 text-sm font-semibold text-white" href={whatsappHref(`I read ${post.title} and want a consultation.`)}>
              Discuss my project <ArrowRight size={16} />
            </a>
          </article>
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
