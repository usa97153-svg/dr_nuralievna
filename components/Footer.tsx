import { MessageCircle } from "lucide-react";
import { CLINIC, NAV_LINKS } from "@/lib/data";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#211b17] text-cream/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <span className="font-serif text-2xl text-cream">
            {CLINIC.name}
          </span>
          <p className="text-xs tracking-[0.2em] text-cream/50 mt-1">
            {CLINIC.tagline}
          </p>
          <p className="text-sm mt-4 leading-relaxed max-w-[220px]">
            Премиальная стоматология для взрослых в Актобе.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-medium text-cream mb-4">Навигация</h4>
          <ul className="space-y-2.5 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-cream mb-4">Контакты</h4>
          <ul className="space-y-2.5 text-sm">
            <li>{CLINIC.address}</li>
            <li>
              <a href={CLINIC.phoneHref} className="hover:text-gold transition-colors">
                {CLINIC.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-medium text-cream mb-4">Мы в соцсетях</h4>
          <div className="flex gap-3">
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:border-gold hover:text-gold transition-colors"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 hover:border-gold hover:text-gold transition-colors"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-cream/40 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} {CLINIC.name}. Все права защищены.</span>
          <span>{CLINIC.address}</span>
        </div>
      </div>
    </footer>
  );
}
