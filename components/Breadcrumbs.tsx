import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";

type Crumb = {
  label: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: allItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.label,
            item: `${site.url}${item.href === "/" ? "" : item.href}`
          }))
        }}
      />
      <nav aria-label="Breadcrumb" className="section-shell py-4 text-sm">
        <ol className="flex flex-wrap items-center gap-2 text-graphite">
          {allItems.map((item, index) => (
            <li className="flex items-center gap-2" key={item.href}>
              {index > 0 ? <ChevronRight size={14} /> : null}
              <Link className="inline-flex items-center gap-1 font-semibold text-moss" href={item.href}>
                {index === 0 ? <Home size={14} /> : null}
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
