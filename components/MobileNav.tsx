"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, MessageCircle, Phone, X } from "lucide-react";
import { nav, services, site, whatsappHref } from "@/data/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Toggle Button */}
      <button
        aria-label="Toggle navigation menu"
        className="grid size-10 place-items-center rounded-lg border border-white/20 text-white transition hover:bg-white/10 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-navy-950/98 backdrop-blur-xl transition-all duration-300 lg:hidden flex flex-col justify-between p-6">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <Link
                className="flex items-center gap-2"
                href="/"
                onClick={() => setIsOpen(false)}
              >
                <span className="grid size-9 place-items-center rounded-lg gradient-btn-gold font-display text-lg font-bold text-navy-950 shadow-md">
                  ATS
                </span>
                <span className="font-display text-xl font-bold text-white">
                  ATS Interior Solutions
                </span>
              </Link>
              <button
                aria-label="Close menu"
                className="grid size-10 place-items-center rounded-lg bg-white/10 text-white"
                onClick={() => setIsOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="mt-6 grid gap-2">
              {nav.map((item) => (
                <Link
                  className="rounded-lg px-4 py-3 text-base font-semibold text-white transition hover:bg-white/10 hover:text-amber-400"
                  href={item.href}
                  key={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Services Direct Links */}
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3">Popular Services</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-white/80">
                {services.slice(0, 4).map((service) => (
                  <Link
                    className="rounded bg-white/5 p-2.5 hover:bg-white/10 transition"
                    href={`/${service.slug}-noida`}
                    key={service.slug}
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Contact Buttons at bottom of mobile menu */}
          <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 py-3.5 text-sm font-bold text-white"
              href={`tel:${site.phone.replaceAll(" ", "").replaceAll("-", "")}`}
            >
              <Phone size={16} /> Call Us
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl gradient-btn-gold py-3.5 text-sm font-extrabold text-navy-950 shadow-gold"
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
