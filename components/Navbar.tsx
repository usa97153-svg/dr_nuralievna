"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CLINIC, NAV_LINKS } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-bordersoft">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#" className="flex flex-col leading-none">
          <span className="font-serif text-2xl text-brown">
            {CLINIC.name}
          </span>
          <span className="text-[11px] tracking-[0.2em] text-graytext mt-1">
            {CLINIC.tagline}
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-brown/80 hover:text-gold-dark transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={CLINIC.phoneHref}
          className="hidden lg:inline-flex items-center rounded-full bg-gold hover:bg-gold-dark transition-colors text-white text-sm px-5 py-2.5"
        >
          {CLINIC.phone}
        </a>

        <button
          aria-label="Открыть меню"
          className="lg:hidden p-2 text-brown"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-bordersoft bg-cream"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-brown/85"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CLINIC.phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-gold text-white text-sm px-5 py-3 mt-2"
              >
                {CLINIC.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
