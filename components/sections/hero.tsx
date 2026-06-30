"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Stethoscope,
  Wrench,
  ShieldCheck,
  HeartHandshake,
  Smile,
  Shield,
  Heart,
  CalendarCheck,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const floatingCards = [
  {
    icon: ShieldCheck,
    title: "Имплантация",
    desc: "Надёжные и современные решения",
    pos: "top-[2%] right-[2%]",
    delay: 0,
  },
  {
    icon: Stethoscope,
    title: "Ортодонтия",
    desc: "Исправление прикуса для взрослых",
    pos: "top-[26%] -left-[6%] sm:left-[1%]",
    delay: 0.6,
  },
  {
    icon: Wrench,
    title: "Хирургия",
    desc: "Безопасное и комфортное лечение",
    pos: "top-[48%] right-[0%]",
    delay: 1.2,
  },
  {
    icon: Smile,
    title: "Протезирование",
    desc: "Эстетика и функциональность",
    pos: "top-[64%] -left-[4%] sm:left-[3%]",
    delay: 0.3,
  },
  {
    icon: HeartHandshake,
    title: "Бесплатная консультация и неотложная помощь",
    desc: "Забота, когда это нужно",
    pos: "top-[82%] right-[1%]",
    delay: 0.9,
  },
];

const trustStrip = [
  { icon: Smile, label: "Индивидуальный подход", desc: "Лечение, адаптированное под ваши потребности" },
  { icon: Shield, label: "Современные технологии", desc: "Точное оборудование для качественного лечения" },
  { icon: Heart, label: "Безопасность и комфорт", desc: "Стерильность, забота и внимание к деталям" },
  { icon: CalendarCheck, label: "Удобная запись", desc: "Быстрая и комфортная запись на приём" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-14 sm:pt-20 pb-12">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 items-center">
          {/* Left: text */}
          <Reveal>
            <h1 className="font-serif text-[2.6rem] sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-ink">
              Улыбка, которой
              <br />
              вы достойны
            </h1>
            <p className="mt-6 max-w-md text-base sm:text-lg text-muted leading-relaxed">
              Современная стоматология для взрослых: опыт, технологии и
              забота о каждом пациенте.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-cardwhite shadow-sm transition-transform hover:scale-[1.03] hover:bg-gold-light"
              >
                Записаться на консультацию
                <span aria-hidden>→</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-gold hover:text-gold"
              >
                Наши услуги
              </a>
            </div>
          </Reveal>

          {/* Right: photo + floating cards */}
          <div className="relative">
            <Reveal delay={0.15}>
              <div className="relative mx-auto aspect-[942/811] max-w-[520px] lg:max-w-none">
                <Image
                  src="/images/doctor.png"
                  alt="Dr. Nuralievna — врач-стоматолог"
                  fill
                  priority
                  className="object-contain object-bottom"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />

                {floatingCards.map((card, i) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                      className={`absolute ${card.pos} w-[210px] sm:w-[230px] z-10`}
                    >
                      <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{
                          duration: 4.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: card.delay,
                        }}
                        className="flex items-start gap-3 rounded-xl2 border border-border bg-cardwhite/95 backdrop-blur-sm px-4 py-3.5 shadow-[0_8px_24px_rgba(43,36,32,0.06)]"
                      >
                        <span className="mt-0.5 shrink-0 text-gold">
                          <Icon size={18} strokeWidth={1.6} />
                        </span>
                        <span>
                          <span className="block font-serif text-[0.92rem] leading-snug text-ink">
                            {card.title}
                          </span>
                          <span className="mt-0.5 block text-xs leading-snug text-muted">
                            {card.desc}
                          </span>
                        </span>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-border bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6">
            {trustStrip.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={i} delay={i * 0.08} className="text-center sm:border-l sm:first:border-l-0 sm:border-border sm:pl-6 sm:first:pl-0">
                  <span className="mx-auto mb-3 flex h-9 w-9 items-center justify-center text-gold">
                    <Icon size={28} strokeWidth={1.4} />
                  </span>
                  <p className="font-serif text-sm sm:text-base text-ink">{item.label}</p>
                  <p className="mt-1 text-xs sm:text-sm text-muted leading-snug">{item.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
