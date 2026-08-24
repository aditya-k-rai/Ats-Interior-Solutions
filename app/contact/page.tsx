import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { cities, site, whatsappHref } from "@/data/site";
import { Clock3, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact ATS Interior Solutions | Greater Noida Head Office & Map",
  description: "Visit ATS Interior Solutions at Site-4, Ecotech 1, Greater Noida. Call +91 98737 57487 or book a free 3D design consultation with Manoj Pal & team.",
  alternates: {
    canonical: "/contact"
  }
};

export default function ContactPage() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    image: `${site.url}/images/work/owner-engineer-cabin.jpg`,
    telephone: site.phone,
    email: site.email,
    url: site.url,
    hasMap: site.mapUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.state,
      postalCode: site.pincode,
      addressCountry: "IN"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "20:00"
      }
    ],
    founder: {
      "@type": "Person",
      name: site.founderName,
      jobTitle: "Founder & Managing Director"
    },
    sameAs: [
      site.socials.facebook,
      site.socials.pinterest,
      site.socials.instagram
    ],
    areaServed: cities.map((city) => city.name)
  };

  return (
    <main className="bg-porcelain">
      <JsonLd data={localBusiness} />

      {/* Hero Section */}
      <section className="hero-image min-h-[52vh] text-white relative flex items-center">
        <div className="section-shell min-h-[52vh] flex flex-col justify-end pb-12 pt-28">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] backdrop-blur border border-amber-500/30 text-amber-300 shadow-sm">
              <Sparkles size={14} className="text-amber-400 animate-pulse" />
              <span>Direct Consultation • Greater Noida & Noida</span>
            </div>
            <h1 className="text-balance font-display text-4xl sm:text-6xl font-bold leading-tight">
              Contact ATS Interior Solutions
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/85">
              Visit our studio or schedule a site measurement with Founder Manoj Pal & senior engineering team. Transparent pricing, 3D layouts, and zero hidden costs.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: "Contact Us", href: "/contact" }]} />

      {/* Main Contact Grid */}
      <section className="py-16">
        <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Office Details, Map & Socials */}
          <div className="space-y-8">
            <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-navy-950/10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Official Head Office</span>
              <h2 className="font-display text-2xl sm:text-3xl text-navy-950 font-bold mt-1 mb-6">
                ATS Interior Solutions Studio
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-graphite">
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-porcelain border border-navy-950/5">
                  <MapPin size={20} className="text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950 block font-bold">Studio & Factory Address:</strong>
                    <span>{site.address}</span>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-porcelain border border-navy-950/5">
                    <Phone size={18} className="text-amber-600 shrink-0" />
                    <div>
                      <strong className="text-navy-950 block font-bold">Phone / WhatsApp:</strong>
                      <a href={`tel:${site.phoneRaw}`} className="font-bold text-navy-950 hover:text-amber-600 transition">
                        {site.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-porcelain border border-navy-950/5">
                    <Mail size={18} className="text-amber-600 shrink-0" />
                    <div>
                      <strong className="text-navy-950 block font-bold">Official Email:</strong>
                      <a href={`mailto:${site.email}`} className="font-bold text-navy-950 hover:text-amber-600 transition">
                        {site.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-porcelain border border-navy-950/5">
                    <Clock3 size={18} className="text-amber-600 shrink-0" />
                    <div>
                      <strong className="text-navy-950 block font-bold">Working Hours:</strong>
                      <span>Mon – Sat: 09:30 AM – 08:00 PM</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3.5 rounded-xl bg-porcelain border border-navy-950/5">
                    <ShieldCheck size={18} className="text-amber-600 shrink-0" />
                    <div>
                      <strong className="text-navy-950 block font-bold">GSTIN Number:</strong>
                      <span className="font-mono font-bold text-navy-950">{site.gstin}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-xl gradient-btn-gold px-6 py-3.5 text-xs sm:text-sm font-extrabold text-navy-950 shadow-gold transition hover:scale-105 active:scale-95"
                  href={whatsappHref("Hi ATS Interior, I want to book an on-site consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} /> WhatsApp Manoj Pal
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-xl bg-navy-950 px-5 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-navy-900 transition"
                  href={`tel:${site.phoneRaw}`}
                >
                  <Phone size={15} /> Call Direct ({site.phone})
                </a>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-navy-950/10 flex items-center justify-between">
                <span className="text-xs font-bold text-navy-950 uppercase tracking-wider">Verified Social Profiles:</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={site.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Profile"
                    className="grid size-9 place-items-center rounded-xl bg-porcelain text-navy-950 border border-navy-950/10 hover:bg-blue-600 hover:text-white transition hover:scale-105"
                  >
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href={site.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram Profile"
                    className="grid size-9 place-items-center rounded-xl bg-porcelain text-navy-950 border border-navy-950/10 hover:bg-pink-600 hover:text-white transition hover:scale-105"
                  >
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href={site.socials.pinterest}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pinterest Profile"
                    className="grid size-9 place-items-center rounded-xl bg-porcelain text-navy-950 border border-navy-950/10 hover:bg-red-600 hover:text-white transition hover:scale-105"
                  >
                    <svg className="size-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Verified Directory Citations */}
              <div className="mt-6 pt-5 border-t border-navy-950/10">
                <span className="text-xs font-bold text-navy-950 uppercase tracking-wider block mb-2.5">
                  Verified Business Citations & Profiles:
                </span>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={site.directories.indiamart}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-porcelain px-3 py-1.5 text-xs font-semibold text-navy-950 border border-navy-950/10 hover:border-amber-500/50 hover:bg-white transition"
                  >
                    <span className="size-2 rounded-full bg-emerald-500" /> IndiaMART Verified
                  </a>
                  <a
                    href={site.directories.justdial}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-porcelain px-3 py-1.5 text-xs font-semibold text-navy-950 border border-navy-950/10 hover:border-amber-500/50 hover:bg-white transition"
                  >
                    <span className="size-2 rounded-full bg-amber-500" /> Justdial 5.0★
                  </a>
                  <a
                    href={site.directories.kreatecube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-porcelain px-3 py-1.5 text-xs font-semibold text-navy-950 border border-navy-950/10 hover:border-amber-500/50 hover:bg-white transition"
                  >
                    <span className="size-2 rounded-full bg-blue-500" /> KreateCube
                  </a>
                  <a
                    href={site.directories.greaterNoidaDirectory}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-porcelain px-3 py-1.5 text-xs font-semibold text-navy-950 border border-navy-950/10 hover:border-amber-500/50 hover:bg-white transition"
                  >
                    <span className="size-2 rounded-full bg-purple-500" /> IDBF Greater Noida
                  </a>
                  <a
                    href={site.directories.magicpin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-porcelain px-3 py-1.5 text-xs font-semibold text-navy-950 border border-navy-950/10 hover:border-amber-500/50 hover:bg-white transition"
                  >
                    <span className="size-2 rounded-full bg-red-500" /> Magicpin
                  </a>
                </div>
              </div>
            </article>

            {/* Embedded Google Maps */}
            <article className="rounded-2xl bg-white p-6 sm:p-8 shadow-soft border border-navy-950/10 overflow-hidden">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600">Location Map</span>
              <h3 className="font-display text-2xl text-navy-950 font-bold mt-1 mb-4">
                Google Maps Navigation
              </h3>
              <div className="relative w-full h-[380px] rounded-xl overflow-hidden shadow-inner border border-navy-950/10">
                <iframe
                  src={site.mapIframe}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="ATS Interior Solution Google Map Location"
                />
              </div>
            </article>
          </div>

          {/* Right Column: Lead Form */}
          <div className="space-y-6">
            <LeadForm defaultCity="Greater Noida" defaultService="Full Home Interior" />
          </div>
        </div>
      </section>
    </main>
  );
}
