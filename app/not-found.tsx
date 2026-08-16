import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cities, services } from "@/data/site";

export default function NotFound() {
  return (
    <main className="bg-porcelain">
      <section className="hero-image min-h-[60vh] text-white">
        <div className="section-shell flex min-h-[60vh] items-end pb-12 pt-28">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">404</p>
            <h1 className="mt-2 font-display text-6xl">This page is not available</h1>
            <Link className="mt-7 inline-flex items-center gap-2 rounded-md bg-clay px-5 py-4 font-semibold" href="/">
              Go home <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl">Popular services</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {services.map((service) => (
                <Link className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-moss shadow-sm" href={`/${service.slug}-noida`} key={service.slug}>{service.name}</Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl">City hubs</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {cities.map((city) => (
                <Link className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-moss shadow-sm" href={`/locations/${city.slug}`} key={city.slug}>{city.name}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
