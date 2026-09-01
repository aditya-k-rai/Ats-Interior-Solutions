"use client";

import React, { useState } from "react";
import { BadgeCheck, Building2, MapPin, Quote, Sparkles, Star, UserCheck } from "lucide-react";
import { testimonials as allTestimonials } from "@/data/site";

interface ClientTestimonialsProps {
  id?: string;
  className?: string;
  showTitle?: boolean;
}

export function ClientTestimonials({ id = "testimonials", className = "", showTitle = true }: ClientTestimonialsProps) {
  const [selectedCity, setSelectedCity] = useState<string>("All");

  const citiesFilter = ["All", "Greater Noida", "Noida", "Delhi NCR"];

  const filteredTestimonials =
    selectedCity === "All"
      ? allTestimonials
      : allTestimonials.filter((item) => item.city.toLowerCase().includes(selectedCity.toLowerCase()));

  return (
    <section id={id} className={`py-16 sm:py-24 bg-[#FAF6EE] text-navy-950 relative overflow-hidden ${className}`}>
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 size-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-96 rounded-full bg-navy-950/5 blur-3xl pointer-events-none" />

      <div className="section-shell relative z-10">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-100/90 px-4 py-1.5 rounded-full border border-amber-300 shadow-sm">
              <Sparkles size={14} className="text-amber-600" /> Real Client Experience
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#3A4D39]">
              Client Testimonials
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Read verified feedback from homeowners in SDS NRI City, Purvanchal Heights, Gaur City, Sector 137, and luxury villas across Delhi NCR.
            </p>
          </div>
        )}

        {/* Filter Pills */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2.5">
          {citiesFilter.map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer border ${
                selectedCity === city
                  ? "bg-navy-950 text-white border-amber-400 shadow-md scale-105"
                  : "bg-white text-slate-700 border-slate-200 hover:border-amber-300 hover:bg-amber-50/50"
              }`}
            >
              {city === "All" ? "All Locations (4500+ Happy Clients)" : city}
            </button>
          ))}
        </div>

        {/* Testimonial Cards Grid (Matching Slide 8 PPT Design) */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {filteredTestimonials.map((item) => (
            <article
              key={item.name}
              className="group rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/80 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/80 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top amber border accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-emerald-500" />

              <div>
                {/* Big Stylized Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="size-10 rounded-xl bg-amber-100/80 grid place-items-center text-amber-700 group-hover:scale-110 transition duration-300">
                    <Quote size={20} className="rotate-180" />
                  </div>

                  {/* 5-Star Rating */}
                  <div className="flex gap-1 text-amber-400 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star key={idx} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>

                {/* Quote Content */}
                <blockquote className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author & Project Info */}
              <div className="mt-8 pt-5 border-t border-slate-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#2C3E2B] group-hover:text-amber-700 transition duration-300">
                      — {item.name}
                    </h3>
                    <p className="text-xs font-bold text-amber-800 mt-0.5 flex items-center gap-1">
                      <Building2 size={13} className="text-amber-600 shrink-0" />
                      {item.project}
                    </p>
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
                    {item.city}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Overall Trust Footer */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-slate-600">
          <span className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
            <BadgeCheck size={16} className="text-emerald-600" /> 4.9/5 Rating on Justdial & Google
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200">
            <UserCheck size={16} className="text-amber-600" /> 4500+ Completed Projects
          </span>
        </div>
      </div>
    </section>
  );
}
