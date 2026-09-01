import React from "react";
import {
  Award,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Compass,
  HeartHandshake,
  LayoutGrid,
  Palette,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Wallet
} from "lucide-react";

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tag: string;
  accent: string;
  bg: string;
}

export const whyChooseData: WhyChooseItem[] = [
  {
    id: "modern-aesthetics",
    title: "Modern Aesthetics",
    description: "Stylish, contemporary designs that elevate spaces with clean lines, soft neutral palettes, and timeless elegance.",
    icon: Palette,
    tag: "Contemporary Styling",
    accent: "from-amber-500 to-amber-600",
    bg: "bg-amber-100/90 text-amber-800"
  },
  {
    id: "functional-design",
    title: "Functional Design",
    description: "Practical solutions ensuring comfort and usability, optimizing storage, airflow, lighting, and daily ergonomics.",
    icon: Compass,
    tag: "Ergonomic Usability",
    accent: "from-emerald-600 to-teal-700",
    bg: "bg-emerald-100/90 text-emerald-800"
  },
  {
    id: "customer-centric",
    title: "Customer-Centric Approach",
    description: "Tailored services aligned with client vision, transparent material options, zero hidden costs, and direct leadership updates.",
    icon: HeartHandshake,
    tag: "Personalized Vision",
    accent: "from-blue-600 to-indigo-700",
    bg: "bg-blue-100/90 text-blue-800"
  },
  {
    id: "cost-effective-quality",
    title: "Budget-Friendly Precision",
    description: "Cost-effective solutions engineered in our German-tech factory, delivering high-end finish without compromising durability.",
    icon: Wallet,
    tag: "Transparent Value",
    accent: "from-purple-600 to-purple-800",
    bg: "bg-purple-100/90 text-purple-800"
  }
];

interface WhyChooseUsProps {
  id?: string;
  className?: string;
  showTitle?: boolean;
}

export function WhyChooseUs({ id = "why-choose-us", className = "", showTitle = true }: WhyChooseUsProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 bg-[#FAF6EE] text-navy-950 relative overflow-hidden ${className}`}>
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 size-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="section-shell relative z-10 max-w-6xl mx-auto">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-100/90 px-4 py-1.5 rounded-full border border-amber-300 shadow-sm">
              <Sparkles size={14} className="text-amber-600" /> Key Strengths & Value
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#3A4D39]">
              Why Choose Us
            </h2>
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our key strengths lie in delivering innovative designs that balance aesthetics with functionality, while ensuring cost-effective solutions tailored to client needs. With a skilled team, we provide budget-friendly services without compromising quality.
            </p>
          </div>
        )}

        {/* 4 Core Pillars Grid */}
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseData.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/80 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/80 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Subtle Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${item.accent}`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`size-14 rounded-2xl bg-gradient-to-tr ${item.accent} grid place-items-center text-white shadow-md transition duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon size={28} strokeWidth={1.75} />
                    </div>
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${item.bg}`}>
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2C3E2B] group-hover:text-amber-700 transition duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 size={14} className="text-emerald-600 shrink-0" /> Verified Execution Guarantee
                </div>
              </div>
            );
          })}
        </div>

        {/* High-Trust Highlight Strip */}
        <div className="mt-12 sm:mt-16 rounded-3xl bg-navy-950 p-6 sm:p-8 text-white grid sm:grid-cols-2 lg:grid-cols-4 gap-6 border border-amber-500/30 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-2xl bg-amber-400 text-navy-950 font-bold shrink-0 shadow">
              <BadgeCheck size={24} />
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">4500+</p>
              <p className="text-xs text-white/80 font-medium">Satisfied NCR Clients</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-2xl bg-emerald-400 text-navy-950 font-bold shrink-0 shadow">
              <Clock3 size={24} />
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">8+ Years</p>
              <p className="text-xs text-white/80 font-medium">Proven Expertise</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-2xl bg-blue-400 text-navy-950 font-bold shrink-0 shadow">
              <UserCheck size={24} />
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">15+ Force</p>
              <p className="text-xs text-white/80 font-medium">Skilled Carpenters</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="grid size-12 place-items-center rounded-2xl bg-purple-400 text-navy-950 font-bold shrink-0 shadow">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="font-display text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-white/80 font-medium">German Tech In-House</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
