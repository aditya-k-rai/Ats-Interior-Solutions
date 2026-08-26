import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { services, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Interior Design Services in Noida, Greater Noida, Ghaziabad & Delhi NCR",
  description: "Explore ATS Interior Solutions home interior design, modular kitchens, false ceilings, wardrobes, bathrooms, wallpaper and office interiors across NCR.",
  alternates: {
    canonical: "/services"
  }
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ATS Interior Services",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: `${site.url}/${service.slug}-noida`
    }))
  };

  return (
    <main className="bg-porcelain">
      <JsonLd data={serviceSchema} />
      <section className="hero-image min-h-[52vh] text-white">
        <div className="section-shell flex min-h-[52vh] items-end pb-12 pt-28">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brass">Services</p>
            <h1 className="mt-2 font-display text-6xl">Premium interiors across Delhi NCR</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/82">
              Interior design, modular kitchens, wardrobes, false ceilings and bathroom upgrades tailored for homes, apartments and offices across Noida, Greater Noida, Ghaziabad and Delhi.
            </p>
          </div>
        </div>
      </section>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      <section className="py-16">
        <div className="section-shell grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div className="rounded-2xl bg-white p-6 sm:p-7 shadow-soft border border-navy-950/10 transition hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between" key={service.slug}>
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <div className="grid size-12 place-items-center rounded-xl bg-navy-950 text-amber-400 font-bold shadow-md">
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-[11px] font-extrabold text-amber-800 border border-amber-300">
                      6 Subcategories
                    </span>
                  </div>
                  <h2 className="font-display text-2xl font-bold text-navy-950">{service.name}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{service.short}</p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-700 block mb-2">Key Offerings:</span>
                    <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
                      {service.subcategories.map((sub) => (
                        <li key={sub} className="flex items-center gap-1.5 font-medium">
                          <span className="size-1.5 rounded-full bg-amber-500 shrink-0" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="rounded-md bg-porcelain px-3 py-1.5 text-xs font-semibold text-slate-700 border border-navy-950/5">{service.budget}</span>
                  <Link className="inline-flex items-center gap-1.5 rounded-lg gradient-btn-gold px-4 py-2 text-xs font-extrabold text-navy-950 shadow-sm transition hover:scale-105" href={`/${service.slug}-noida`}>
                    <span>View Details</span> <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
