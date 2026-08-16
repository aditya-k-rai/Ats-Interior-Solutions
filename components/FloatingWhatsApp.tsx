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
      className="fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-clay text-white shadow-soft transition hover:scale-105 active:scale-95"
      href={whatsappHref(contextMessage)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={24} />
    </a>
  );
}
