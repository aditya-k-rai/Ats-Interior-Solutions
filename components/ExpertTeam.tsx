import React from "react";
import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock,
  Compass,
  Cpu,
  GraduationCap,
  Hammer,
  Palette,
  PenTool,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  Wrench
} from "lucide-react";

export interface TeamMember {
  id: string;
  number: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  description: string;
  specialties: string[];
  icon: React.ElementType;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
}

export const teamMembersData: TeamMember[] = [
  {
    id: "manoj-pal",
    number: "01",
    name: "Mr. Manoj Pal",
    role: "Founder & Managing Director",
    qualification: "Lead Design Director & Site Head",
    experience: "8+ Years",
    description: "Founded ATS Interior Solutions in 2018. Personally oversees architectural planning, material selection, and direct site engineer supervision across Noida and Delhi NCR.",
    specialties: ["Turnkey Project Leadership", "Quality & Material Auditing", "Direct Client Consultation"],
    icon: UserCheck,
    accentColor: "from-amber-500 to-amber-700",
    badgeBg: "bg-amber-100",
    badgeText: "text-amber-800"
  },
  {
    id: "krishan-pal",
    number: "02",
    name: "Mr. Krishan Pal",
    role: "Head of Operations",
    qualification: "MBA in Operations & Marketing",
    experience: "16+ Years",
    description: "Brings over 16 years of high-level project planning, supply chain management, and operational leadership across residential and commercial developments.",
    specialties: ["Project Planning & Scheduling", "Supply Chain & Factory Logistics", "Quality Assurance"],
    icon: Award,
    accentColor: "from-emerald-600 to-teal-800",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-800"
  },
  {
    id: "nishchay-channana",
    number: "03",
    name: "Ar. Nishchay Channana",
    role: "Lead Architect",
    qualification: "Qualified B.Arch Architect",
    experience: "5 Years",
    description: "Expert architect specializing in 3D spatial planning, modern residential layout creation, structural modifications, and Vastu-compliant home planning.",
    specialties: ["3D Render Visualizations", "Vastu-Compliant Layouts", "Commercial & Villa Architecture"],
    icon: PenTool,
    accentColor: "from-blue-600 to-indigo-800",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-800"
  },
  {
    id: "mohit-kumar",
    number: "04",
    name: "Mr. Mohit Kumar",
    role: "Senior Interior Designer",
    qualification: "Construction & Interior Designer",
    experience: "5+ Years",
    description: "Skilled designer with a sharp focus on modern trend integration, custom modular kitchen joinery, PU lacquer finishes, and space-saving ergonomics.",
    specialties: ["Modular Kitchen Joinery", "Custom Wardrobes & Storage", "Modern Color & Lighting Design"],
    icon: Palette,
    accentColor: "from-purple-600 to-purple-800",
    badgeBg: "bg-purple-100",
    badgeText: "text-purple-800"
  }
];

interface ExpertTeamProps {
  id?: string;
  className?: string;
  showTitle?: boolean;
}

export function ExpertTeam({ id = "expert-team", className = "", showTitle = true }: ExpertTeamProps) {
  return (
    <section id={id} className={`py-16 sm:py-24 bg-[#FAF6EE] text-navy-950 relative overflow-hidden ${className}`}>
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 size-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="section-shell relative z-10">
        {showTitle && (
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-700 bg-amber-100/90 px-4 py-1.5 rounded-full border border-amber-300 shadow-sm">
              <Sparkles size={14} className="text-amber-600" /> Leadership & Execution Force
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#3A4D39]">
              Our Expert Team
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Meet the experienced leaders, qualified architects, senior designers, and master craftsmen driving precision and quality in every project.
            </p>
          </div>
        )}

        {/* Employee Profile Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {teamMembersData.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.id}
                className="group rounded-3xl bg-white p-6 sm:p-7 border border-slate-200/80 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-amber-400/80 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Subtle Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${member.accentColor}`} />

                <div>
                  {/* Top Header Badge & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${member.badgeBg} ${member.badgeText}`}>
                      Phase {member.number}
                    </span>
                    <span className="text-xs font-extrabold text-slate-400 flex items-center gap-1">
                      <Clock size={12} /> {member.experience}
                    </span>
                  </div>

                  {/* Icon Avatar Circle */}
                  <div className="relative mb-5 inline-block">
                    <div className={`size-16 sm:size-18 rounded-2xl bg-gradient-to-tr ${member.accentColor} grid place-items-center text-white shadow-md transition duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon size={32} strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Member Name & Role */}
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#2C3E2B] group-hover:text-amber-700 transition duration-300">
                    {member.name}
                  </h3>
                  <p className="text-xs font-extrabold text-amber-700 mt-0.5 tracking-wide">
                    {member.role}
                  </p>

                  <div className="mt-2 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <GraduationCap size={14} className="text-slate-400 shrink-0" />
                    <span>{member.qualification}</span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {member.description}
                  </p>

                  {/* Key Specialties Bullets */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Core Expertise</p>
                    {member.specialties.map((spec) => (
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700" key={spec}>
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlighted Banner 04: Construction Team & German Manufacturing Facility */}
        <div className="mt-12 sm:mt-16 max-w-6xl mx-auto rounded-3xl bg-navy-950 p-6 sm:p-10 text-white relative overflow-hidden border border-amber-500/30 shadow-2xl">
          <div className="absolute -top-10 -right-10 size-60 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center relative z-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-xs font-extrabold uppercase tracking-widest bg-amber-400 text-navy-950 px-3.5 py-1 rounded-full shadow">
                  Team 04 • On-Site & Factory Force
                </span>
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                  <Cpu size={14} /> German Technology Manufacturing
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-bold text-white">
                Construction Team & Master Carpenters
              </h3>

              <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/85 max-w-3xl">
                Supported by <span className="text-amber-300 font-extrabold">15 skilled carpenters</span> and <span className="text-amber-300 font-extrabold">3 dedicated site supervisors</span> ensuring millimeter precision and quality craftsmanship.
              </p>

              <div className="mt-5 grid sm:grid-cols-2 gap-3 max-w-2xl">
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl backdrop-blur border border-white/10 text-xs font-bold text-white">
                  <Wrench size={16} className="text-amber-400 shrink-0" /> 15 Skilled Carpenters & 3 Supervisors
                </div>
                <div className="flex items-center gap-2.5 bg-white/10 p-3 rounded-xl backdrop-blur border border-white/10 text-xs font-bold text-white">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" /> State-of-the-Art German CNC Machinery
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-center justify-center rounded-2xl bg-white/10 p-6 backdrop-blur border border-amber-400/30 text-center">
              <span className="text-3xl font-extrabold text-amber-400 font-display">100%</span>
              <span className="text-xs font-bold text-white uppercase tracking-wider mt-1">In-House Manufacturing</span>
              <span className="text-[11px] text-white/70 mt-1">Zero Third-Party Vendor Reliance</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
