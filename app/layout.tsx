import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import { BadgeCheck, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import "./globals.css";
import { nav, services, site, whatsappHref } from "@/data/site";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { JsonLd } from "@/components/JsonLd";
import { StickyEnquiryBar } from "@/components/StickyEnquiryBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ATS Interior Solutions | Interior Designer in Noida, Greater Noida, Ghaziabad and Delhi NCR",
    template: "%s | ATS Interior Solutions"
  },
  description:
    "Modern home interiors, modular kitchens, wardrobes, false ceilings, bathrooms, wallpapers and office interiors across Noida, Greater Noida, Ghaziabad and Delhi NCR.",
  keywords: [
    "interior designer in Noida",
    "modular kitchen in Greater Noida",
    "home interior in Ghaziabad",
    "wardrobe designer Delhi NCR",
    "false ceiling contractor Noida",
    "ATS Interior Solutions"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "ATS Interior Solutions",
    description: site.tagline,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82",
        width: 1200,
        height: 630,
        alt: "Modern home interior by ATS Interior Solutions"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ATS Interior Solutions",
    description: site.tagline,
    images: ["https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN"
    },
    vatID: site.gstin,
    foundingDate: site.established,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
      areaServed: "IN"
    },
    potentialAction: {
      "@type": "CommunicateAction",
      target: whatsappHref("I want a free interior consultation.")
    }
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: site.address,
    priceRange: "₹₹ - ₹₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "20:00"
      }
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.5355",
      longitude: "77.3910"
    },
    areaServed: ["Greater Noida", "Noida", "Ghaziabad", "Delhi NCR"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-porcelain text-ink">
        <JsonLd data={organization} />
        <JsonLd data={localBusiness} />

        {/* Global Header */}
        <header className="sticky top-0 z-50 border-b border-white/15 bg-ink text-white shadow-md">
          <nav className="section-shell flex min-h-16 items-center justify-between gap-4 py-2">
            <Link className="font-display text-2xl font-semibold tracking-tight text-white hover:text-brass transition" href="/">
              ATS Interior Solutions
            </Link>
            <div className="hidden items-center gap-6 text-sm font-semibold lg:flex">
              {nav.map((item) => (
                <Link className="transition hover:text-brass" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <a
                aria-label="Call ATS Interior Solutions"
                className="grid size-9 place-items-center rounded-md border border-white/25 text-white transition hover:bg-white/10"
                href={`tel:${site.phone.replaceAll(" ", "")}`}
              >
                <Phone size={17} />
              </a>
              <a
                aria-label="WhatsApp ATS Interior Solutions"
                className="inline-flex items-center gap-1.5 rounded-md bg-clay px-3 py-2 text-xs font-bold text-white transition hover:bg-clay/90"
                href={whatsappHref("I want a free interior consultation.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={15} /> <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </nav>
        </header>

        {/* Global Sticky Lead Bar */}
        <StickyEnquiryBar />

        {/* Main Content */}
        <div className="flex-1">{children}</div>

        {/* Global Floating WhatsApp Widget */}
        <FloatingWhatsApp />

        {/* Global Footer */}
        <footer className="bg-ink py-14 text-white">
          <div className="section-shell grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <h2 className="font-display text-3xl text-white">ATS Interior Solutions</h2>
              <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">{site.tagline}</p>
              
              <div className="mt-5 grid gap-2 text-xs text-white/70">
                <p><strong>GSTIN:</strong> {site.gstin}</p>
                <p><strong>Established:</strong> {site.established}</p>
                <p><strong>Address:</strong> {site.address}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  className="rounded-md bg-clay px-4 py-2.5 text-xs font-bold text-white transition hover:bg-clay/90"
                  href={whatsappHref("I want to discuss my interior project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Consultation
                </a>
                <a
                  className="rounded-md border border-white/20 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10"
                  href={`tel:${site.phone.replaceAll(" ", "")}`}
                >
                  {site.phone}
                </a>
              </div>

              {/* Memberships & Trust Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {site.memberships.map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-1 rounded bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-brass backdrop-blur">
                    <BadgeCheck size={13} /> {badge}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brass">Core Services</p>
              <div className="grid gap-2 text-sm text-white/75">
                {services.map((service) => (
                  <Link className="hover:text-brass transition" href={`/${service.slug}-noida`} key={service.slug}>
                    {service.name} in Noida
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brass">Local Hubs</p>
              <div className="grid gap-2 text-sm text-white/75">
                <Link className="hover:text-brass transition" href="/interior-design-greater-noida">Interior Greater Noida</Link>
                <Link className="hover:text-brass transition" href="/modular-kitchen-noida">Modular Kitchen Noida</Link>
                <Link className="hover:text-brass transition" href="/wardrobe-indirapuram">Wardrobe Indirapuram</Link>
                <Link className="hover:text-brass transition" href="/false-ceiling-dwarka">False Ceiling Dwarka</Link>
                <Link className="hover:text-brass transition" href="/locations">All 4 Cities</Link>
                <Link className="hover:text-brass transition" href="/cost-calculator">Cost Calculator</Link>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brass">Company & Trust</p>
              <div className="grid gap-2 text-sm text-white/75">
                <Link className="hover:text-brass transition" href="/portfolio">Project Portfolio</Link>
                <Link className="hover:text-brass transition" href="/testimonials">Client Testimonials</Link>
                <Link className="hover:text-brass transition" href="/about">About ATS Team</Link>
                <Link className="hover:text-brass transition" href="/faq">FAQ & Hindi Voice Search</Link>
                <Link className="hover:text-brass transition" href="/privacy">Privacy Policy</Link>
                <Link className="hover:text-brass transition" href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>

          <div className="section-shell mt-12 border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50">
            <p>© {new Date().getFullYear()} ATS Interior Solutions. All rights reserved.</p>
            <p className="flex items-center gap-1"><ShieldCheck size={14} className="text-brass" /> 1-Year After-Service Execution Warranty Included</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
