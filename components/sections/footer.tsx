import { MessageCircle } from "lucide-react";
import { CLINIC, NAV_LINKS } from "@/lib/data";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-darkbrown border-t border-cardwhite/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          <div>
            <p className="font-serif text-2xl text-cardwhite">{CLINIC.name}</p>
            <p className="mt-1 text-[10px] tracking-[0.2em] text-cardwhite/50">
              {CLINIC.tagline}
            </p>
            <p className="mt-4 max-w-xs text-sm text-cardwhite/50 leading-relaxed">
              {CLINIC.address}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cardwhite/15 text-cardwhite/70 transition-colors hover:border-gold hover:text-gold"
              >
                <InstagramIcon size={16} />
              </a>
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cardwhite/15 text-cardwhite/70 transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-cardwhite/60 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-cardwhite/10 pt-6 text-xs text-cardwhite/40">
          © {new Date().getFullYear()} {CLINIC.name}. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
