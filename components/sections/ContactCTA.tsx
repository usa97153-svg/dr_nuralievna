"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { CLINIC } from "@/lib/data";

export default function ContactCTA() {
  const open2GIS = () => {
    window.location.href = CLINIC.twoGisAppLink;
    setTimeout(() => {
      window.open(CLINIC.twoGisWebLink, "_blank");
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="bg-brown text-cream relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none [background-image:radial-gradient(circle_at_20%_20%,#C9A268_0,transparent_45%),radial-gradient(circle_at_80%_80%,#C9A268_0,transparent_45%)]" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs tracking-[0.2em] text-gold font-medium">
            ЗАПИСЬ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl mt-3">
            Сделайте первый шаг к здоровой улыбке
          </h2>
          <p className="text-cream/70 mt-4 max-w-xl mx-auto leading-relaxed">
            Запишитесь на бесплатную консультацию удобным способом — мы
            ответим в течение дня.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold hover:bg-gold-dark transition-colors text-white px-7 py-4 text-sm font-medium w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              Написать в WhatsApp
            </a>

            <button
              onClick={open2GIS}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-cream/25 hover:bg-cream/10 transition-colors text-cream px-7 py-4 text-sm font-medium w-full sm:w-auto"
            >
              <MapPin size={18} />
              {CLINIC.address}
            </button>
          </div>

          <a
            href={CLINIC.phoneHref}
            className="inline-flex items-center gap-2 mt-8 text-cream/80 hover:text-gold text-sm transition-colors"
          >
            <Phone size={16} />
            {CLINIC.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
