import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Box,
  Building2,
  CheckCircle2,
  Compass,
  Hammer,
  Home,
  Layers,
  Layout,
  Layers3,
  PenTool,
  ShieldCheck,
  Sparkles,
  Sun,
  Wrench
} from "lucide-react";
import { whatsappHref } from "@/data/site";

export interface CompleteSolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  keywords: string[];
  href: string;
  accent: string;
  badgeBg: string;
  badgeText: string;
}

export const completeSolutionsData: CompleteSolutionItem[] = [
  {
    id: "modular-interior",
    title: "Modular Interior",
    subtitle: "Kitchens & Wardrobe Joinery",
    description: "Custom modular kitchens, floor-to-ceiling wardrobes, Action Tesa HDHMR joinery, Dekton stone countertops & Blum soft-close hardware.",
    icon: Layout,
    keywords: ["German Tandem Island Kitchens", "Sliding & Walk-in Wardrobes", "Action Tesa HDHMR & Blum Hardware"],
    href: "/services",
    accent: "from-amber-500 to-amber-700",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800"
  },
  {
    id: "full-home-interior",
    title: "Full Home Interior",
    subtitle: "Turnkey 3BHK/4BHK Home Interiors",
    description: "Complete 3BHK & 4BHK apartment, villa, and penthouse interiors. Photo-realistic 3D planning, PU lacquer finishes, and end-to-end execution.",
    icon: Home,
    keywords: ["3BHK & 4BHK Villa Interiors", "Living & Dining Room Styling", "Vastu-Compliant Space Flow"],
    href: "/services",
    accent: "from-emerald-600 to-teal-800",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-800"
  },
  {
    id: "renovation-remodeling",
    title: "Renovation",
    subtitle: "Smart Civil & Space Remodeling",
    description: "Smart renovation solutions blending innovation with timeless design. We transform aging apartments, old kitchens, bathrooms, and full homes into modern luxury living spaces.",
    icon: Hammer,
    keywords: ["Full Home Renovation Noida", "Civil Demolition & Wall Alteration", "Kitchen & Bathroom Remodeling"],
    href: "/services",
    accent: "from-blue-600 to-indigo-800",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-800"
  },
  {
    id: "office-interior",
    title: "Office Interior",
    subtitle: "Corporate & Commercial Fit-Outs",
    description: "Executive cabins, ergonomic workstations, acoustic conference rooms, reception branding walls, and fast-track commercial project handover.",
    icon: Building2,
    keywords: ["Executive Cabins & Workstations", "Acoustic Conference Rooms", "Commercial Fast-Track Handover"],
    href: "/services",
    accent: "from-purple-600 to-purple-800",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-800"
  }
];

interface CompleteSolutionsProps {
  id?: string;
  className?: string;
  showTitle?: boolean;
}

export function CompleteSolutions({ id = "complete-solutions", className = "", showTitle = true }: CompleteSolutionsProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 bg-[#FAF6EE] text-navy-950 relative overflow-hidden ${className}`}>
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 size-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="section-shell relative z-10 max-w-6xl mx-auto">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-100/90 px-4 py-1.5 rounded-full border border-amber-300 shadow-sm">
              <Sparkles size={14} className="text-amber-600" /> All-in-One Infrastructure & Design
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#3A4D39]">
              Complete Solutions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              From architectural planning and 3D concept visualizations to civil renovation and complete turnkey project delivery across Noida, Greater Noida, and Delhi NCR.
            </p>
          </div>
        )}

        {/* 4 Core Solutions Cards */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {completeSolutionsData.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.id}
                className="group rounded-3xl bg-white p-7 sm:p-9 border border-slate-200/80 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/80 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Subtle Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accent}`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`size-16 rounded-2xl bg-gradient-to-tr ${item.accent} grid place-items-center text-white shadow-md transition duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon size={32} strokeWidth={1.75} />
                    </div>
                    <span className={`text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${item.badgeBg} ${item.badgeText}`}>
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#2C3E2B] group-hover:text-amber-700 transition duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>

                  {/* SEO Keyword Offerings */}
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Key Offerings & SEO Scope</p>
                    <div className="flex flex-wrap gap-2">
                      {item.keywords.map((kw) => (
                        <span key={kw} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100/90 px-3 py-1 rounded-lg border border-slate-200">
                          <CheckCircle2 size={13} className="text-emerald-600 shrink-0" /> {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500">Full Execution Guaranteed</span>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-xl gradient-btn-gold px-5 py-2.5 text-xs font-extrabold text-navy-950 shadow-sm transition hover:scale-105"
                  >
                    <span>Explore Solution</span> <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Highlighted Banner: Vastu-Compliant Planning & Construction (Slide 5 Highlight) */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-navy-950 p-7 sm:p-10 text-white relative overflow-hidden border border-amber-500/30 shadow-2xl">
          <div className="absolute -top-10 -right-10 size-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest bg-amber-400 text-navy-950 px-3.5 py-1 rounded-full shadow mb-3">
                <Sun size={14} className="text-navy-950 animate-spin" /> Vastu Shastra Integration
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-bold text-white">
                Vastu-Compliant Planning & Construction
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/85 max-w-3xl">
                We offer Vastu-compliant planning and construction based on client preferences, ensuring harmony, balanced natural light, optimal spatial flow, and positive energy in every home and office space across Delhi NCR.
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 size={14} className="text-amber-400" /> Main Entrance & Pooja Room Orientation
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 size={14} className="text-amber-400" /> Kitchen & Water Element Alignment
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-white/10 px-3.5 py-1.5 rounded-lg border border-white/10">
                  <CheckCircle2 size={14} className="text-amber-400" /> Master Bedroom Spatial Harmony
                </span>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a
                href={whatsappHref("I want to discuss Vastu-compliant interior planning for my home.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 rounded-2xl gradient-btn-gold px-7 py-4 text-sm font-extrabold text-navy-950 shadow-gold transition hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Consult Vastu Architect</span> <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
