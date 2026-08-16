import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import { BadgeCheck, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import "./globals.css";
import { nav, services, site, whatsappHref } from "@/data/site";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { JsonLd } from "@/components/JsonLd";
import { MobileNav } from "@/components/MobileNav";
import { StickyEnquiryBar } from "@/components/StickyEnquiryBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "ATS Interior Solutions | Premium Interior Designer in Noida, Greater Noida, Ghaziabad and Delhi NCR",
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
      <body className="font-sans min-h-screen flex flex-col bg-porcelain text-ink antialiased">
        <JsonLd data={organization} />
        <JsonLd data={localBusiness} />

        {/* Global Main Header */}
        <header className="sticky top-0 z-50 border-b border-gold-500/20 bg-emerald-950/95 text-white shadow-xl backdrop-blur-md">
          <nav className="section-shell flex min-h-[60px] sm:min-h-[64px] items-center justify-between gap-3 py-2">
            <Link className="group flex items-center gap-2" href="/">
              <span className="grid size-8 sm:size-9 place-items-center rounded-lg gradient-btn-gold font-display text-base sm:text-lg font-bold text-ink shadow-md transition group-hover:scale-105">
                ATS
              </span>
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white transition group-hover:text-gold-400">
                  ATS Interior Solutions
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gold-400 font-semibold -mt-1 hidden xs:inline">
                  Greater Noida • Noida • Delhi NCR
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center gap-6 text-xs font-bold uppercase tracking-wider text-white/90 lg:flex">
              {nav.map((item) => (
                <Link className="relative transition hover:text-gold-400 py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold-400 after:transition-all hover:after:w-full" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Header Action Buttons & Mobile Hamburger */}
            <div className="flex items-center gap-2">
              <a
                aria-label="Call ATS Interior Solutions"
                className="grid size-9 place-items-center rounded-lg border border-white/20 text-white transition hover:border-gold-400 hover:text-gold-400 hover:bg-white/10 active:scale-95"
                href={`tel:${site.phone.replaceAll(" ", "")}`}
              >
                <Phone size={16} />
              </a>
              <a
                aria-label="WhatsApp ATS Interior Solutions"
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-800 text-gold-400 border border-gold-500/30 px-3 sm:px-3.5 py-2 text-xs font-bold shadow-md transition hover:bg-emerald-700 active:scale-95"
                href={whatsappHref("I want a free interior consultation.")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={15} /> <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Touch-Friendly Mobile Drawer */}
              <MobileNav />
            </div>
          </nav>
        </header>

        {/* Distinct Collapsible Quick Quote Strip */}
        <StickyEnquiryBar />

        {/* Main Page Content */}
        <div className="flex-1">{children}</div>

        {/* Global Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Global Footer */}
        <footer className="bg-emerald-950 py-14 sm:py-16 text-white border-t border-gold-500/20 relative overflow-hidden">
          {/* Ambient Background Glow */}
          <div className="absolute top-0 right-0 size-80 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 size-80 rounded-full bg-emerald-800/20 blur-3xl pointer-events-none" />

          <div className="section-shell relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="grid size-9 place-items-center rounded-lg gradient-btn-gold font-display text-lg font-bold text-ink shadow-md">
                  ATS
                </span>
                <h2 className="font-display text-2xl text-white">ATS Interior Solutions</h2>
              </div>
              <p className="text-xs leading-6 text-white/75">{site.tagline}</p>
              
              <div className="mt-5 grid gap-1.5 text-xs text-white/70 bg-white/5 p-3.5 rounded-lg border border-white/10">
                <p><strong className="text-gold-400">GSTIN:</strong> {site.gstin}</p>
                <p><strong className="text-gold-400">Established:</strong> {site.established}</p>
                <p><strong className="text-gold-400">Head Office:</strong> {site.address}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  className="rounded-lg gradient-btn-gold px-4 py-2.5 text-xs font-bold text-ink shadow-md transition hover:scale-105 active:scale-95"
                  href={whatsappHref("I want to discuss my interior project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Consultation
                </a>
                <a
                  className="rounded-lg border border-white/20 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10 active:scale-95"
                  href={`tel:${site.phone.replaceAll(" ", "")}`}
                >
                  {site.phone}
                </a>
              </div>

              {/* Memberships & Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {site.memberships.map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-1 rounded bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-gold-400 border border-gold-500/20">
                    <BadgeCheck size={13} /> {badge}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Core Services</p>
              <div className="grid gap-2 text-xs text-white/75">
                {services.map((service) => (
                  <Link className="hover:text-gold-400 transition flex items-center gap-1.5" href={`/${service.slug}-noida`} key={service.slug}>
                    <Sparkles size={11} className="text-gold-400/60" /> {service.name} in Noida
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Local Hubs</p>
              <div className="grid gap-2 text-xs text-white/75">
                <Link className="hover:text-gold-400 transition" href="/interior-design-greater-noida">Interior Greater Noida</Link>
                <Link className="hover:text-gold-400 transition" href="/modular-kitchen-noida">Modular Kitchen Noida</Link>
                <Link className="hover:text-gold-400 transition" href="/wardrobe-indirapuram">Wardrobe Indirapuram</Link>
                <Link className="hover:text-gold-400 transition" href="/false-ceiling-dwarka">False Ceiling Dwarka</Link>
                <Link className="hover:text-gold-400 transition" href="/locations">All 4 Cities</Link>
                <Link className="hover:text-gold-400 transition" href="/cost-calculator">Cost Estimator</Link>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-400">Company & Trust</p>
              <div className="grid gap-2 text-xs text-white/75">
                <Link className="hover:text-gold-400 transition" href="/portfolio">Project Portfolio</Link>
                <Link className="hover:text-gold-400 transition" href="/testimonials">Client Testimonials</Link>
                <Link className="hover:text-gold-400 transition" href="/about">About ATS Team</Link>
                <Link className="hover:text-gold-400 transition" href="/process">5-Step Process</Link>
                <Link className="hover:text-gold-400 transition" href="/faq">FAQ & Voice Search</Link>
                <Link className="hover:text-gold-400 transition" href="/privacy">Privacy Policy</Link>
                <Link className="hover:text-gold-400 transition" href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>

          <div className="section-shell mt-12 border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50 pb-6 sm:pb-0">
            <p>© {new Date().getFullYear()} ATS Interior Solutions. All rights reserved.</p>
            <p className="flex items-center gap-1.5 font-semibold text-gold-400">
              <ShieldCheck size={15} /> 1-Year Comprehensive After-Service Execution Warranty Included
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
