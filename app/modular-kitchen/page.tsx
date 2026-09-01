"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChefHat,
  Clock3,
  Flame,
  Hammer,
  Layers,
  Layout,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Sun,
  Wrench
} from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteModal } from "@/components/QuoteModal";
import { site, whatsappHref } from "@/data/site";

export interface KitchenSubcategory {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  budget: string;
  timeline: string;
  highlights: string[];
  specs: string[];
}

export const modularKitchenSubcategories: KitchenSubcategory[] = [
  {
    id: "l-shaped-kitchen",
    name: "L-Shaped Kitchen",
    tag: "Most Popular & Versatile Layout",
    description: "Optimizes corner spaces seamlessly creating an efficient work triangle between sink, stove, and refrigerator. Ideal for modern apartments & open-plan living spaces in Noida & Greater Noida.",
    image: "/images/work/modular-kitchen-1.jpg",
    budget: "Rs. 3.5L - 7.5L+",
    timeline: "3 to 4 Weeks",
    highlights: [
      "Action Tesa HDHMR / BWP Marine Plywood",
      "2.0mm High-Gloss Acrylic & PU Shutters",
      "Engineered Quartz / Kalingastone Countertop",
      "Blum Soft-Close Tandem Drawer Systems"
    ],
    specs: ["Corner Carousel Pullouts", "Under-Sink Waste Organizer", "Wall Trough LED Lighting"]
  },
  {
    id: "u-shaped-kitchen",
    name: "U-Shaped Kitchen",
    tag: "Maximum Storage & Counter Space",
    description: "Surrounds you on three sides with continuous countertops and floor-to-ceiling cabinetry. Perfect for multi-cook families, large homes, and high daily Indian cooking requirements.",
    image: "/images/work/modular-kitchen-4.jpg",
    budget: "Rs. 4.5L - 9.5L+",
    timeline: "4 to 5 Weeks",
    highlights: [
      "3-Sided Continuous Prep Countertop",
      "Tall Storage Pantry with Inner Trays",
      "Magic Corner & Blind Corner Organizers",
      "Oil-Resistant Matte & Gloss Shutters"
    ],
    specs: ["Heavy Duty Action Tesa Board", "Hafele Lift-up Flap Units", "Built-in Microwave & Oven Tower"]
  },
  {
    id: "parallel-kitchen",
    name: "Parallel Kitchen",
    tag: "Ergonomic Galley Chef Layout",
    description: "Two parallel counter walls creating a dedicated galley passage with zero wasted steps. Highly favored by professional chefs for peak cooking efficiency and dual work zones.",
    image: "/images/kitchen-2.jpg",
    budget: "Rs. 3.8L - 8.0L+",
    timeline: "3 to 4 Weeks",
    highlights: [
      "Dual Counter Wet & Dry Separation",
      "Under-Counter Tandem Box Drawers",
      "Built-in Appliance Storage Column",
      "Anti-Scratch German Laminate Shutters"
    ],
    specs: ["CPVC 10-Bar Pressure Plumbing", "Chimney Trough Duct Concealing", "Hettich Soft-Close Hinges"]
  },
  {
    id: "island-kitchen",
    name: "Island Kitchen",
    tag: "Luxury Open-Plan Centerpiece",
    description: "Features a central freestanding island counter for dining, prep work, or built-in hob with ceiling-mounted chimney. The ultimate centerpiece for luxury villas and spacious penthouses.",
    image: "/images/kitchen-1.jpg",
    budget: "Rs. 6.5L - 18.0L+",
    timeline: "4 to 6 Weeks",
    highlights: [
      "Waterfall Quartz / Dekton Island Counter",
      "Integrated Breakfast Bar & Stool Ledge",
      "Ceiling Island Chimney Ducting",
      "Built-in Wine Cooler & Concealed Drawers"
    ],
    specs: ["Dekton Sintered Porcelain Top", "Gola Handleless Aluminum Profile", "Motorized Aventos Flap Hardware"]
  },
  {
    id: "italian-modular-kitchen",
    name: "Italian Modular Kitchen",
    tag: "Ultra-Luxury Handleless Aesthetics",
    description: "Handleless Gola aluminum profiles, ultra-matt anti-fingerprint lacquered finishes, tinted glass cabinets, and Dekton heatproof porcelain countertops for timeless European elegance.",
    image: "/images/work/modular-kitchen-1.jpg",
    budget: "Rs. 8.0L - 25.0L+",
    timeline: "5 to 7 Weeks",
    highlights: [
      "Gola Aluminum Profile (Handleless)",
      "Ultra-Matt Lacquer & PU Coating",
      "Dekton 1200°C Fireproof Countertops",
      "Motorized Touch-to-Open Blum Hardware"
    ],
    specs: ["100% Glass-Fronted Upper Cabinets", "Concealed Trough Lighting", "Zero Edge-Tape Joint Finish"]
  },
  {
    id: "cabinets-and-woodwork",
    name: "Cabinets & Woodwork",
    tag: "Precision Joinery & Storage",
    description: "Custom floor-to-ceiling pantry cabinets, crockery units, appliance tall towers, and IS 710 marine plywood woodwork crafted in our state-of-the-art German-tech manufacturing facility.",
    image: "/images/work/wardrobe-acrylic-blue.jpg",
    budget: "Rs. 2.0L - 6.0L+",
    timeline: "2 to 4 Weeks",
    highlights: [
      "100% IS 710 Boiling Water Proof Plywood",
      "Custom Pantry Drawer & Spice Organizers",
      "Concealed LED Trough Lighting Channels",
      "German CNC Millimetre Cutting Precision"
    ],
    specs: ["Action Tesa HDHMR Carcass", "1-Year Warranty Card Issued", "Millimetre CNC Edge Banding"]
  }
];

export default function ModularKitchenPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <main className="bg-porcelain text-navy-950">
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />

      {/* Hero Header Section */}
      <section className="relative bg-navy-950 text-white pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden">
        {/* Background Overlay Image */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/work/modular-kitchen-1.jpg"
            alt="Modular Kitchen Design Noida"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute top-1/4 left-10 size-[450px] rounded-full bg-amber-500/15 blur-[140px] pointer-events-none z-[1]" />

        <div className="section-shell relative z-10 max-w-6xl mx-auto flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-navy-950/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-300 backdrop-blur-md shadow-md mb-4">
            <Sparkles size={14} className="text-amber-400 animate-spin" />
            <span>6 Core Modular Layouts • German CNC Precision</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.12] drop-shadow-lg">
            Modular Kitchens &amp; Modular Interiors
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-200 font-medium max-w-3xl leading-relaxed drop-shadow-md">
            Custom German Tandem Kitchens, L-Shaped, U-Shaped, Parallel, Island &amp; Italian Modular Kitchens crafted with Action Tesa HDHMR, 100% BWP Marine Plywood, and Blum/Hettich soft-close hardware across Noida, Greater Noida &amp; Delhi NCR.
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-xl gradient-btn-gold animate-shimmer-sweep px-7 py-4 text-sm font-extrabold text-navy-950 shadow-gold transition hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Sparkles size={16} className="text-navy-950" />
              <span>Book Free Kitchen Consultation</span>
            </button>
            <a
              href={whatsappHref("I am interested in Modular Kitchen design and would like a quote.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl glow-btn-purple px-7 py-4 text-sm font-bold text-white shadow-md transition hover:scale-105 active:scale-95"
            >
              <MessageCircle size={16} className="text-purple-300" />
              <span>Get WhatsApp Quote</span>
            </a>
          </div>
        </div>
      </section>

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Modular Kitchen", href: "/modular-kitchen" }
        ]}
      />

      {/* 6 Subcategory Cards Showcase Section */}
      <section className="py-16 sm:py-24 bg-[#FAF6EE]" id="layouts">
        <div className="section-shell max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-100 px-4 py-1.5 rounded-full border border-amber-300 shadow-sm">
              <ChefHat size={14} className="text-amber-600" /> Customized For Every Home Layout
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#2C3E2B]">
              6 Modular Kitchen &amp; Interior Subcategories
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Explore our 6 custom modular kitchen layouts engineered for maximum storage, effortless cleaning, ergonomic cooking workflow, and lifetime structural durability.
            </p>
          </div>

          {/* 6 Cards Grid (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {modularKitchenSubcategories.map((sub, index) => {
              const cardThemes = [
                { gradient: "from-amber-400 via-amber-500 to-amber-600", badgeBg: "bg-amber-500 text-navy-950 font-extrabold" },
                { gradient: "from-emerald-400 via-teal-500 to-emerald-600", badgeBg: "bg-emerald-500 text-navy-950 font-extrabold" },
                { gradient: "from-purple-400 via-indigo-500 to-purple-600", badgeBg: "bg-purple-500 text-white font-extrabold" },
                { gradient: "from-blue-400 via-cyan-500 to-blue-600", badgeBg: "bg-blue-500 text-white font-extrabold" },
                { gradient: "from-rose-400 via-pink-500 to-rose-600", badgeBg: "bg-rose-500 text-white font-extrabold" },
                { gradient: "from-amber-500 via-orange-500 to-amber-700", badgeBg: "bg-amber-600 text-white font-extrabold" }
              ];
              const theme = cardThemes[index % cardThemes.length];

              return (
                <article
                  key={sub.id}
                  className="group rounded-3xl bg-white overflow-hidden shadow-soft border border-slate-200/90 transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_22px_50px_rgba(15,23,42,0.18)] hover:border-amber-400/90 flex flex-col justify-between relative"
                >
                  {/* Top Glowing Color Accent Stripe */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${theme.gradient}`} />

                  <div>
                    {/* 1. High-Resolution Image Banner with Animated Zoom */}
                    <div className="relative h-56 sm:h-60 w-full overflow-hidden bg-navy-950">
                      <Image
                        src={sub.image}
                        alt={sub.name}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                      {/* Floating Glassmorphic Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                        <span className="rounded-xl px-2.5 py-1 text-[10.5px] font-extrabold uppercase tracking-wider shadow-md backdrop-blur-md bg-navy-950/85 text-amber-300 border border-amber-400/30">
                          {sub.budget}
                        </span>
                        <div className="grid size-10 place-items-center rounded-xl bg-navy-950/85 text-amber-400 border border-amber-400/40 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                          <ChefHat size={20} />
                        </div>
                      </div>

                      {/* Image Bottom Title Overlay */}
                      <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block mb-0.5">
                          {sub.tag}
                        </span>
                        <h3 className="font-display text-2xl font-bold tracking-tight text-white drop-shadow-md group-hover:text-amber-300 transition duration-300">
                          {sub.name}
                        </h3>
                      </div>
                    </div>

                    {/* 2. Subcategory Card Body & Specs */}
                    <div className="p-6">
                      <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                        {sub.description}
                      </p>

                      {/* Key Highlights Checklist */}
                      <div className="mt-5 pt-4 border-t border-slate-100">
                        <span className="text-[10.5px] font-extrabold uppercase tracking-wider text-amber-700 block mb-2.5">Key Materials &amp; Hardware:</span>
                        <ul className="grid grid-cols-1 gap-y-2 text-xs text-slate-700">
                          {sub.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-2 font-medium text-slate-700">
                              <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 3. TWO MAIN ACTION BUTTONS: LEFT & RIGHT (SIDE-BY-SIDE IN 1 ROW) */}
                  <div className="px-4 pb-5 pt-2 border-t border-slate-100 flex flex-row items-center gap-2 w-full">
                    <button
                      onClick={() => setIsQuoteModalOpen(true)}
                      type="button"
                      className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl gradient-btn-gold animate-shimmer-sweep px-2.5 py-3 text-[11px] min-[400px]:text-xs font-extrabold text-navy-950 shadow-gold transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
                    >
                      <Sparkles size={13} className="text-navy-950 shrink-0" />
                      <span>Consultation</span>
                    </button>
                    <a
                      href={whatsappHref(`I need a quote for ${sub.name}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 rounded-xl glow-btn-purple px-2.5 py-3 text-[11px] min-[400px]:text-xs font-bold text-white shadow-md transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
                    >
                      <MessageCircle size={13} className="text-purple-300 shrink-0" />
                      <span>Get Quote</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Material & Construction Standard Section */}
      <section className="py-16 bg-white border-t border-slate-200/80">
        <div className="section-shell max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-porcelain p-6 border border-slate-200 flex items-start gap-4">
              <div className="grid size-12 place-items-center rounded-xl bg-amber-500 text-navy-950 font-bold shrink-0 shadow-md">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-navy-950">100% BWP Marine Plywood</h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  72-hour boiling water proof plywood for kitchen wet sink zones ensuring zero swelling and lifetime termite resistance.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-porcelain p-6 border border-slate-200 flex items-start gap-4">
              <div className="grid size-12 place-items-center rounded-xl bg-emerald-500 text-navy-950 font-bold shrink-0 shadow-md">
                <BadgeCheck size={24} />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-navy-950">Blum &amp; Hettich Hardware</h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  German engineered soft-close tandem drawers, Aventos lift-ups, and hinges with 100,000 cycle lifetime motion guarantee.
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-porcelain p-6 border border-slate-200 flex items-start gap-4">
              <div className="grid size-12 place-items-center rounded-xl bg-purple-600 text-white font-bold shrink-0 shadow-md">
                <Wrench size={24} />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold text-navy-950">German Tech Factory Build</h4>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  Millimetre CNC precision cutting and automated edge-banding at our state-of-the-art Greater Noida manufacturing unit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
