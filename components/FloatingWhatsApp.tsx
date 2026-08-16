"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function FloatingWhatsApp() {
  const pathname = usePathname();

  const getDynamicMessage = () => {
    if (pathname.includes("kitchen")) return "Hi ATS Interior, I am looking for a Modular Kitchen quote in Noida/Greater Noida.";
    if (pathname.includes("wardrobe")) return "Hi ATS Interior, I want details on custom wardrobes for my home.";
    if (pathname.includes("greater-noida")) return "Hi ATS Interior, I need interior design consultation for my property in Greater Noida.";
    if (pathname.includes("noida")) return "Hi ATS Interior, I need interior design consultation for my flat in Noida.";
    if (pathname.includes("cost")) return "Hi ATS Interior, I used your cost estimator and want to discuss my budget.";
    return "Hi ATS Interior, I want to book a free home interior consultation.";
  };

  const whatsappUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(getDynamicMessage())}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with ATS Interior Solutions"
      className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-3.5 sm:px-4 py-3 text-xs font-extrabold text-white shadow-2xl transition-all duration-300 hover:bg-emerald-500 hover:scale-110 active:scale-95 border-2 border-white/80"
    >
      <MessageCircle size={20} className="animate-pulse" />
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
