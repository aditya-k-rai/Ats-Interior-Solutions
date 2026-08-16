import type { Metadata } from "next";
import Link from "next/link";
import { contentClusters, blogPosts } from "@/data/site";

export const metadata: Metadata = {
  title: "Interior Design Guides",
  description: "Cost, comparison and planning guides for interior design and modular kitchen buyers in Delhi NCR."
};

export default function BlogPage() {
  return (
    <main className="bg-porcelain">
      <section className="hero-image min-h-[52vh] text-white">
        <div className="section-shell flex min-h-[52vh] items-end pb-12 pt-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">Guides</p>
            <h1 className="mt-2 font-display text-6xl">Content clusters for real buyer intent</h1>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="section-shell">
          <div className="mb-10 grid gap-4 lg:grid-cols-4">
            {contentClusters.map((cluster) => (
              <article className="rounded-lg bg-white p-5 shadow-soft" key={cluster.title}>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-clay">{cluster.title}</p>
                <div className="mt-4 grid gap-2 text-sm leading-6 text-graphite">
                  {cluster.examples.map((example) => <p key={example}>{example}</p>)}
                </div>
              </article>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link className="rounded-lg bg-white p-6 shadow-soft" href={`/blog/${post.slug}`} key={post.slug}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-clay">{post.category}</p>
                <h2 className="mt-3 font-display text-3xl">{post.title}</h2>
                <p className="mt-4 text-sm text-graphite">{post.readTime} read</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
