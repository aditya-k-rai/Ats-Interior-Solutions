"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Menu, MessageCircle, Phone, Sparkles, X } from "lucide-react";
import { nav, services, site, whatsappHref } from "@/data/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const drawerContent = (
    <div
      tabIndex={-1}
      className="fixed inset-0 z-[99999] bg-[#0b1329] text-white lg:hidden flex flex-col justify-between p-5 sm:p-6 overflow-y-auto animate-slide-up"
      style={{ top: 0, left: 0, right: 0, bottom: 0, width: "100vw", height: "100vh" }}
    >
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
                src="/images/LOGO_OF_ATS.png"
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
            type="button"
            className="grid size-11 place-items-center rounded-xl bg-white/15 text-white transition hover:bg-white/25 active:scale-95 border border-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} className="text-amber-400" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="mt-6 grid gap-2">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 mb-1">Navigation Menu</p>
          {nav.map((item) => (
            <Link
              className="flex items-center justify-between rounded-xl bg-white/10 px-4 py-3.5 text-base font-bold text-white transition hover:bg-white/20 hover:text-amber-400 border border-white/10 active:scale-95"
              href={item.href}
              key={item.href}
              onClick={() => setIsOpen(false)}
            >
              <span>{item.label}</span>
              <ChevronRight size={18} className="text-amber-400" />
            </Link>
          ))}
        </div>

        {/* Core Services Links */}
        <div className="mt-6 border-t border-white/15 pt-4">
          <p className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400 mb-3 flex items-center gap-1">
            <Sparkles size={13} /> Popular Core Services
          </p>
          <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-white">
            {services.map((service) => (
              <Link
                className="rounded-lg bg-white/10 p-3 hover:bg-white/20 hover:text-amber-300 transition border border-white/10 flex items-center justify-between active:scale-95"
                href={`/${service.slug}-noida`}
                key={service.slug}
                onClick={() => setIsOpen(false)}
              >
                <span className="truncate">{service.name}</span>
                <ChevronRight size={14} className="text-amber-400/70 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Contact Action Buttons at Bottom of Menu */}
      <div className="mt-8 grid grid-cols-2 gap-3 border-t border-white/15 pt-4 bg-[#0b1329] sticky bottom-0">
        <a
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/15 py-3.5 text-sm font-bold text-white active:scale-95"
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
  );

  return (
    <>
      {/* Mobile Hamburger Toggle Button */}
      <button
        aria-label="Toggle navigation menu"
        type="button"
        className="grid size-10 place-items-center rounded-lg border border-white/20 text-white transition hover:bg-white/10 active:scale-95 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={22} className="text-amber-400" /> : <Menu size={22} />}
      </button>

      {/* Portal Mobile Drawer Overlay directly to Document Body */}
      {isOpen && mounted && createPortal(drawerContent, document.body)}
    </>
  );
}
