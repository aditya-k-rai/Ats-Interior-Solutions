import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";
import "./globals.css";
import { nav, services, site, whatsappHref } from "@/data/site";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { JsonLd } from "@/components/JsonLd";
import { MobileNav } from "@/components/MobileNav";
import { MobileStickyBar } from "@/components/MobileStickyBar";

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
        url: `${site.url}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "ATS Interior Solutions Transparent Logo & Projects"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ATS Interior Solutions",
    description: site.tagline,
    images: [`${site.url}/images/logo.png`]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.pincode,
      addressCountry: "IN"
    },
    vatID: site.gstin,
    foundingDate: site.established,
    founder: {
      "@type": "Person",
      name: site.founderName,
      jobTitle: "Founder & Managing Director",
      worksFor: { "@id": `${site.url}/#organization` }
    },
    sameAs: site.sameAs,
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
    "@type": ["InteriorDesigner", "GeneralContractor", "HomeGoodsStore"],
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.pincode,
      addressCountry: "IN"
    },
    priceRange: "₹500,000 - ₹15,000,000+",
    hasMap: site.mapUrl,
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
      latitude: site.geo.latitude,
      longitude: site.geo.longitude
    },
    areaServed: ["Greater Noida", "Noida", "Ghaziabad", "Delhi NCR"],
    sameAs: site.sameAs,
    founder: {
      "@type": "Person",
      name: site.founderName,
      jobTitle: "Founder & Managing Director"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "ATS Luxury Interior, Kitchen & Civil Construction Offerings",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Turnkey Home Interior Design",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Full Home Interior & Villa Fit-Out",
                description: "Turnkey 3BHK/4BHK/5BHK and Villa Interior Design, 3D Architectural Planning, PU Lacquer & PMMA Acrylic Joinery by Manoj Pal & Team."
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: "1000000",
                maxPrice: "15000000",
                priceCurrency: "INR"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          name: "Modular Kitchen Manufacturing & Design",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "German Tandem Modular Kitchen & Dekton Countertop",
                description: "Island & U-Shape German Kitchens using Action Tesa HDHMR, Blum/Häfele Hardware, and Sintered Porcelain Countertops."
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: "500000",
                maxPrice: "5000000",
                priceCurrency: "INR"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          name: "Civil Construction & Architectural Renovation",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Civil Construction, Plumbing & Electrical Overhaul",
                description: "Structural alterations, CPVC 10-bar pressure tested plumbing, FRLS 16A/20A electrical rewiring, marble flooring, and facade elevation."
              },
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: "1000000",
                maxPrice: "15000000",
                priceCurrency: "INR"
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-porcelain text-ink antialiased pb-16 sm:pb-0">
        <JsonLd data={organization} />
        <JsonLd data={localBusiness} />

        {/* Global Main Header - High Trust Midnight Sapphire Navy */}
        <header className="sticky top-0 z-50 border-b border-amber-500/20 bg-navy-950/95 text-white shadow-xl backdrop-blur-md">
          <nav className="section-shell flex min-h-[60px] sm:min-h-[64px] items-center justify-between gap-3 py-2">
            <Link className="group flex items-center gap-3" href="/">
              <div className="relative h-11 w-36 sm:w-44 flex items-center justify-start transition group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="ATS Interior Solutions Logo"
                  width={180}
                  height={50}
                  priority
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden items-center gap-6 text-xs font-bold uppercase tracking-wider text-white/90 lg:flex">
              {nav.map((item) => (
                <Link className="relative transition hover:text-amber-400 py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Header Action Buttons & Mobile Hamburger */}
            <div className="flex items-center gap-2">
              <a
                aria-label="Call ATS Interior Solutions"
                className="grid size-9 place-items-center rounded-lg border border-white/20 text-white transition hover:border-amber-400 hover:text-amber-400 hover:bg-white/10 active:scale-95"
                href={`tel:${site.phone.replaceAll(" ", "").replaceAll("-", "")}`}
              >
                <Phone size={16} />
              </a>
              <a
                aria-label="WhatsApp ATS Interior Solutions"
                className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 text-navy-950 border border-amber-400 px-3 sm:px-3.5 py-2 text-xs font-extrabold shadow-gold transition hover:bg-amber-400 hover:scale-105 active:scale-95"
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

        {/* Main Page Content */}
        <div className="flex-1">{children}</div>

        {/* Global Floating WhatsApp Button */}
        <FloatingWhatsApp />

        {/* 1-Tap Smartphone Sticky Action Bar */}
        <MobileStickyBar />

        {/* Global Footer - Midnight Sapphire & High Conversion Gold */}
        <footer className="bg-navy-950 py-14 sm:py-16 text-white border-t border-amber-500/20 relative overflow-hidden">
          {/* Ambient Background Glow */}
          <div className="absolute top-0 right-0 size-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 size-80 rounded-full bg-navy-800/40 blur-3xl pointer-events-none" />

          <div className="section-shell relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="relative h-12 w-40 flex items-center justify-start">
                  <Image
                    src="/images/logo.png"
                    alt="ATS Interior Solutions Logo"
                    width={160}
                    height={48}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-xs leading-6 text-white/75">{site.tagline}</p>
              
              <div className="mt-5 grid gap-1.5 text-xs text-white/70 bg-white/5 p-3.5 rounded-lg border border-white/10">
                <p><strong className="text-amber-400">Phone:</strong> {site.phone}</p>
                <p><strong className="text-amber-400">Email:</strong> {site.email}</p>
                <p><strong className="text-amber-400">GSTIN:</strong> {site.gstin}</p>
                <p><strong className="text-amber-400">Established:</strong> {site.established}</p>
                <p><strong className="text-amber-400">Head Office:</strong> {site.address}</p>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  className="rounded-lg gradient-btn-gold px-4 py-2.5 text-xs font-bold text-navy-950 shadow-gold transition hover:scale-105 active:scale-95"
                  href={whatsappHref("I want to discuss my interior project.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Consultation
                </a>
                <a
                  className="rounded-lg border border-white/20 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10 active:scale-95"
                  href={`tel:${site.phone.replaceAll(" ", "").replaceAll("-", "")}`}
                >
                  {site.phone}
                </a>
              </div>

              {/* Memberships & Badges */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {site.memberships.map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-1 rounded bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-amber-400 border border-amber-500/20">
                    <BadgeCheck size={13} /> {badge}
                  </span>
                ))}
              </div>

              {/* Verified Social Media Channels */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">Follow Us:</span>
                <a
                  href={site.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ATS Interior Solutions on Facebook"
                  className="grid size-8 place-items-center rounded-lg bg-white/10 text-white transition hover:bg-blue-600 hover:text-white hover:scale-110 active:scale-95"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={site.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ATS Interior Solutions on Instagram"
                  className="grid size-8 place-items-center rounded-lg bg-white/10 text-white transition hover:bg-pink-600 hover:text-white hover:scale-110 active:scale-95"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href={site.socials.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ATS Interior Solutions on Pinterest"
                  className="grid size-8 place-items-center rounded-lg bg-white/10 text-white transition hover:bg-red-600 hover:text-white hover:scale-110 active:scale-95"
                >
                  <svg className="size-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                  </svg>
                </a>
              </div>

              {/* Verified Citations & Directory Badges */}
              <div className="mt-5 pt-4 border-t border-white/10">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-2">Verified Citations:</span>
                <div className="flex flex-wrap gap-1.5">
                  <a
                    href={site.directories.indiamart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-1 text-[10px] font-semibold text-white/90 hover:bg-white/20 transition border border-white/10"
                  >
                    IndiaMART Verified
                  </a>
                  <a
                    href={site.directories.justdial}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-1 text-[10px] font-semibold text-white/90 hover:bg-white/20 transition border border-white/10"
                  >
                    Justdial 5.0★
                  </a>
                  <a
                    href={site.directories.kreatecube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-1 text-[10px] font-semibold text-white/90 hover:bg-white/20 transition border border-white/10"
                  >
                    KreateCube
                  </a>
                  <a
                    href={site.directories.greaterNoidaDirectory}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-1 text-[10px] font-semibold text-white/90 hover:bg-white/20 transition border border-white/10"
                  >
                    IDBF Greater Noida
                  </a>
                  <a
                    href={site.directories.magicpin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded bg-white/10 px-2 py-1 text-[10px] font-semibold text-white/90 hover:bg-white/20 transition border border-white/10"
                  >
                    Magicpin
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Core Services</p>
              <div className="grid gap-2 text-xs text-white/75">
                {services.map((service) => (
                  <Link className="hover:text-amber-400 transition flex items-center gap-1.5" href={`/${service.slug}-noida`} key={service.slug}>
                    <Sparkles size={11} className="text-amber-400/70" /> {service.name} in Noida
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Local Hubs</p>
              <div className="grid gap-2 text-xs text-white/75">
                <Link className="hover:text-amber-400 transition" href="/interior-design-greater-noida">Interior Greater Noida</Link>
                <Link className="hover:text-amber-400 transition" href="/modular-kitchen-noida">Modular Kitchen Noida</Link>
                <Link className="hover:text-amber-400 transition" href="/wardrobe-indirapuram">Wardrobe Indirapuram</Link>
                <Link className="hover:text-amber-400 transition" href="/false-ceiling-dwarka">False Ceiling Dwarka</Link>
                <Link className="hover:text-amber-400 transition" href="/locations">All 4 Cities</Link>
                <Link className="hover:text-amber-400 transition" href="/cost-calculator">Cost Estimator</Link>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-amber-400">Company & Trust</p>
              <div className="grid gap-2 text-xs text-white/75">
                <Link className="hover:text-amber-400 transition" href="/portfolio">Project Portfolio</Link>
                <Link className="hover:text-amber-400 transition" href="/testimonials">Client Testimonials</Link>
                <Link className="hover:text-amber-400 transition" href="/about">About Us & Team</Link>
                <Link className="hover:text-amber-400 transition" href="/process">5-Step Process</Link>
                <Link className="hover:text-amber-400 transition" href="/faq">FAQ & Voice Search</Link>
                <Link className="hover:text-amber-400 transition" href="/privacy">Privacy Policy</Link>
                <Link className="hover:text-amber-400 transition" href="/contact">Contact Us</Link>
              </div>
            </div>
          </div>

          <div className="section-shell mt-12 border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-white/50 pb-6 sm:pb-0">
            <p>© {new Date().getFullYear()} ATS Interior Solutions. All rights reserved.</p>
            <p className="flex items-center gap-1.5 font-semibold text-amber-400">
              <ShieldCheck size={15} /> 1-Year Comprehensive After-Service Execution Warranty Included
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
