"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Menu, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { nav, services, site, whatsappHref } from "@/data/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Hamburger Toggle Button */}
      <button
        aria-label="Toggle navigation menu"
        className="grid size-10 place-items-center rounded-lg border border-white/20 text-white transition hover:bg-white/10 active:scale-95 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={22} className="text-amber-400" /> : <Menu size={22} />}
      </button>

      {/* Full-Screen Opaque Mobile Drawer Overlay (z-[100] prevents background bleed) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-[#0b1329] text-white lg:hidden flex flex-col justify-between p-5 sm:p-6 overflow-y-auto animate-slide-up">
          <div>
            {/* Mobile Drawer Top Bar */}
            <div className="flex items-center justify-between border-b border-white/15 pb-4">
              <Link
                className="flex items-center gap-2"
                href="/"
                onClick={() => setIsOpen(false)}
              >
                <div className="relative h-10 w-36 flex items-center justify-start">
                  <Image
                    src="/images/logo.png"
                    alt="ATS Interior Solutions Logo"
                    width={150}
                    height={40}
                    priority
                    className="h-full w-auto object-contain"
                  />
                </div>
              </Link>
              <button
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-xl bg-white/10 text-white transition hover:bg-white/20 active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                <X size={22} className="text-amber-400" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="mt-6 grid gap-1.5">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 mb-1">Navigation Menu</p>
              {nav.map((item) => (
                <Link
                  className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-base font-bold text-white transition hover:bg-white/15 hover:text-amber-400 border border-white/5 active:scale-95"
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{item.label}</span>
                  <ChevronRight size={18} className="text-amber-400/70" />
                </Link>
              ))}
            </div>

            {/* Core Services Links */}
            <div className="mt-6 border-t border-white/15 pt-4">
              <p className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-1">
                <Sparkles size={13} /> Popular Core Services
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-white/90">
                {services.map((service) => (
                  <Link
                    className="rounded-lg bg-white/5 p-2.5 hover:bg-white/15 hover:text-amber-300 transition border border-white/5 flex items-center justify-between"
                    href={`/${service.slug}-noida`}
                    key={service.slug}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="truncate">{service.name}</span>
                    <ChevronRight size={14} className="text-amber-400/50 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Contact Action Buttons at Bottom of Menu */}
          <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/15 pt-4 bg-[#0b1329] sticky bottom-0">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 py-3.5 text-sm font-bold text-white active:scale-95"
              href={`tel:${site.phone.replaceAll(" ", "").replaceAll("-", "")}`}
            >
              <Phone size={16} className="text-amber-400" /> Call Direct
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl gradient-btn-gold py-3.5 text-sm font-extrabold text-navy-950 shadow-gold active:scale-95"
              href={whatsappHref("I want a free interior consultation from mobile menu.")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  );
}
