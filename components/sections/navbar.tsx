"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CLINIC } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex flex-col leading-none">
            <span className="font-serif text-2xl text-ink">{CLINIC.name}</span>
            <span className="mt-1 text-[10px] tracking-[0.2em] text-muted">
              {CLINIC.tagline}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Открыть меню"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-cream">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-ink/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
