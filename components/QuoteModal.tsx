"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";

interface QuoteModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function QuoteModal({ isOpen: externalIsOpen, onClose }: QuoteModalProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);

  // Auto-open modal 2 seconds after page load if not previously dismissed in session
  useEffect(() => {
    if (externalIsOpen !== undefined) return;

    const isDismissed = sessionStorage.getItem("ats_quote_popup_dismissed");
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setInternalIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [externalIsOpen]);

  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleClose = () => {
    sessionStorage.setItem("ats_quote_popup_dismissed", "true");
    setInternalIsOpen(false);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-navy-950/75 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={handleClose}
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl z-10 overflow-hidden transform transition-all duration-300 animate-in fade-in zoom-in-95 my-auto">
        {/* Cancel / Close Button */}
        <button
          onClick={handleClose}
          type="button"
          aria-label="Close quote popup"
          className="absolute top-4 right-4 z-20 grid size-9 place-items-center rounded-full bg-slate-100 text-slate-600 hover:bg-amber-500 hover:text-navy-950 transition-colors shadow-sm cursor-pointer"
        >
          <X size={20} />
        </button>

        {/* Lead Form Component */}
        <div className="pt-2">
          <LeadForm compact defaultCity="Noida" />
        </div>
      </div>
    </div>
  );
}
