"use client";

import {
  Stethoscope,
  Wrench,
  ShieldCheck,
  Activity,
  Layers,
  ScanLine,
  Sparkles,
  Siren,
  MessageCircleHeart,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Reveal, RevealGroup, fadeUp } from "@/components/ui/reveal";
import { motion } from "framer-motion";

const services = [
  {
    icon: Stethoscope,
    title: "Ортодонтия",
    desc: "Исправление прикуса для взрослых с применением современных систем выравнивания.",
  },
  {
    icon: Layers,
    title: "Ортопедия",
    desc: "Восстановление и протезирование зубов с акцентом на эстетику и комфорт.",
  },
  {
    icon: Wrench,
    title: "Хирургия",
    desc: "Безопасное и комфортное стоматологическое лечение любой сложности.",
  },
  {
    icon: ShieldCheck,
    title: "Имплантация",
    desc: "Надёжные и современные решения для восстановления зубного ряда.",
  },
  {
    icon: Activity,
    title: "Пародонтология",
    desc: "Диагностика и лечение заболеваний дёсен на любой стадии.",
  },
  {
    icon: Sparkles,
    title: "Гнатология",
    desc: "Диагностика и коррекция работы височно-нижнечелюстного сустава.",
  },
  {
    icon: ScanLine,
    title: "Рентген",
    desc: "Точная цифровая диагностика на современном оборудовании.",
  },
  {
    icon: Siren,
    title: "Неотложка",
    desc: "Неотложная помощь взрослым пациентам при острой боли.",
  },
  {
    icon: MessageCircleHeart,
    title: "Консультация",
    desc: "Бесплатная первичная консультация и план лечения.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <p className="text-xs tracking-[0.2em] text-gold uppercase">Услуги</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink leading-tight">
            Полный спектр стоматологической помощи
          </h2>
          <p className="mt-4 text-muted leading-relaxed">
            От профилактики до сложной хирургии — всё, что нужно для здоровой
            и красивой улыбки, в одной клинике.
          </p>
        </Reveal>

        <RevealGroup className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={i} variants={fadeUp}>
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(43,36,32,0.08)] hover:border-gold/40">
                  <CardHeader>
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/12 text-gold transition-colors group-hover:bg-gold group-hover:text-cardwhite">
                      <Icon size={22} strokeWidth={1.6} />
                    </span>
                    <CardTitle className="mt-2">{service.title}</CardTitle>
                    <CardDescription>{service.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
