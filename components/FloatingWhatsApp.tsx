"use client";

import { usePathname } from "next/navigation";
import { site } from "@/data/site";

export function FloatingWhatsApp() {
  const pathname = usePathname();

  const getDynamicMessage = () => {
    const basePrefix = "Hi ATS Team, I visited your website and I am interested in your services.";
    if (pathname.includes("kitchen")) return `${basePrefix} Specifically, I am looking for a Modular Kitchen quote in Noida/Greater Noida.`;
    if (pathname.includes("wardrobe")) return `${basePrefix} Specifically, I want details on custom wardrobes for my home.`;
    if (pathname.includes("greater-noida")) return `${basePrefix} Specifically, I need consultation for my property in Greater Noida.`;
    if (pathname.includes("noida")) return `${basePrefix} Specifically, I need consultation for my flat in Noida.`;
    if (pathname.includes("cost")) return `${basePrefix} I used your online cost estimator and want to discuss my project budget with a consultant.`;
    return `${basePrefix} I would like to book a free professional consultation with your team.`;
  };

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(getDynamicMessage())}`;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 group">
      {/* Expandable Glassmorphic Tooltip */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:inline-flex items-center gap-2 rounded-2xl bg-navy-950/90 text-white px-4 py-2.5 text-xs font-extrabold shadow-xl border border-amber-500/30 backdrop-blur opacity-90 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105 group-hover:-translate-x-1"
      >
        <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Chat with Team for Professional Consultation</span>
      </a>

      {/* Official Circular WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with ATS Interior Solutions"
        className="relative grid size-14 place-items-center rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-[0_6px_25px_rgba(37,211,102,0.65)] border-2 border-white/40 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
      >
        {/* Glowing Pulse Ring Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none" />

        {/* Unread Message Notification Counter Badge */}
        <span className="absolute -top-1 -right-1 grid size-5 place-items-center rounded-full bg-amber-500 text-[10px] font-extrabold text-navy-950 shadow border border-white z-10">
          1
        </span>

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="size-8 fill-white drop-shadow-sm transition duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.127 4.116 4.17-1.092z" />
          <path d="M17.513 14.383c-.296-.149-1.755-.867-2.027-.966-.272-.099-.47-.149-.668.149-.198.297-.768.966-.941 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </a>
    </div>
  );
}
