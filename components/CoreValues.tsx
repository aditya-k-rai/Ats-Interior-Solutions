import React from "react";
import { Lightbulb, Award, Clock, Leaf, Handshake, Users } from "lucide-react";

export interface CoreValueItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

export const coreValuesData: CoreValueItem[] = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "Innovative ideas and unique solutions that transform spaces into inspiring environments."
  },
  {
    icon: Award,
    title: "Quality",
    description: "Excellence in every project, ensuring durability, precision, and high standards."
  },
  {
    icon: Clock,
    title: "Timeliness",
    description: "Consistently complete projects within schedule without compromising quality."
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Design and build with responsibility, integrating eco-friendly practices for a better future."
  },
  {
    icon: Handshake,
    title: "Integrity",
    description: "Uphold honesty, transparency, and trust in all relationships and projects."
  },
  {
    icon: Users,
    title: "Teamwork",
    description: "Foster collaboration, respecting every contribution to achieve common goals efficiently."
  }
];

interface CoreValuesProps {
  id?: string;
  className?: string;
  showTitle?: boolean;
}

export function CoreValues({ id, className = "", showTitle = true }: CoreValuesProps) {
  return (
    <section id={id} className={`py-14 sm:py-16 bg-[#FAF6EE] text-navy-950 relative overflow-hidden ${className}`}>
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 size-96 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-96 rounded-full bg-navy-950/5 blur-3xl pointer-events-none" />

      <div className="section-shell relative z-10">
        {showTitle && (
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-100/80 px-3.5 py-1.5 rounded-full border border-amber-300 shadow-sm">
              Our Principles
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#3A4D39]">
              Core Values
            </h2>
          </div>
        )}

        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-2 max-w-5xl">
          {coreValuesData.map((item) => {
            const Icon = item.icon;
            return (
              <div className="flex items-start gap-4 sm:gap-5 group" key={item.title}>
                <div className="grid size-12 sm:size-14 place-items-center rounded-2xl bg-white p-3 text-[#4A6347] shadow-sm border border-emerald-900/10 shrink-0 transition duration-300 group-hover:scale-110 group-hover:bg-[#4A6347] group-hover:text-white">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-medium text-[#2C3E2B] tracking-wide">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
