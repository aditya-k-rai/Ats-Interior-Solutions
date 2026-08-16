"use client";

import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/data/site";

export function FloatingWhatsApp() {
  const pathname = usePathname();

  let contextMessage = "I am interested in a free interior consultation with ATS Interior Solutions.";
  if (pathname && pathname !== "/") {
    const slug = pathname.replace("/", "").replaceAll("-", " ");
    contextMessage = `Hi ATS, I am viewing your page for "${slug}" and would like to discuss my interior requirements.`;
  }

  return (
    <a
      aria-label="Open WhatsApp consultation"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5 rounded-full bg-emerald-800 text-white px-4 py-3.5 shadow-2xl border border-gold-400/30 transition-all duration-300 hover:scale-105 hover:bg-emerald-700 active:scale-95 animate-pulse-glow"
      href={whatsappHref(contextMessage)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={22} className="text-gold-400" />
      <span className="text-xs font-bold tracking-wide hidden sm:inline text-white">Chat on WhatsApp</span>
    </a>
  );
}
