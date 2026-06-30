"use client";

import { MapPin, Phone, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CLINIC } from "@/lib/data";

export function Contact() {
  const open2GIS = () => {
    window.location.href = CLINIC.twoGisAppLink;
    setTimeout(() => {
      window.open(CLINIC.twoGisWebLink, "_blank");
    }, 1500);
  };

  return (
    <section id="contact" className="bg-darkbrown py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.2em] text-gold uppercase">Контакты</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-cardwhite leading-tight">
            Запишитесь на консультацию
            <br />
            уже сегодня
          </h2>
          <p className="mt-4 text-cardwhite/60 max-w-md mx-auto leading-relaxed">
            Ответим на ваши вопросы и подберём удобное время приёма в течение
            дня.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CLINIC.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-darkbrown transition-transform hover:scale-[1.03] hover:bg-gold-light"
          >
            <MessageCircle size={18} />
            Написать в WhatsApp
          </a>
          <button
            onClick={open2GIS}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-cardwhite/20 px-7 py-3.5 text-sm font-medium text-cardwhite transition-colors hover:border-gold hover:text-gold"
          >
            <MapPin size={18} />
            {CLINIC.address}
          </button>
          <a
            href={CLINIC.phoneHref}
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-cardwhite/20 px-7 py-3.5 text-sm font-medium text-cardwhite transition-colors hover:border-gold hover:text-gold"
          >
            <Phone size={18} />
            {CLINIC.phone}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
