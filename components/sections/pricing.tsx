"use client";

import { Check } from "lucide-react";
import { Reveal, RevealGroup, fadeUp } from "@/components/ui/reveal";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Консультация",
    price: "Бесплатно",
    desc: "Первичный осмотр и план лечения",
    features: [
      "Осмотр врача-стоматолога",
      "Консультация по плану лечения",
      "Ответы на все вопросы",
    ],
    highlighted: false,
  },
  {
    name: "Лечение кариеса",
    price: "от 15 000 ₸",
    desc: "Качественное лечение с гарантией",
    features: [
      "Анестезия включена",
      "Современные пломбировочные материалы",
      "Гарантия на работу",
      "Контрольный осмотр",
    ],
    highlighted: true,
  },
  {
    name: "Имплантация",
    price: "от 180 000 ₸",
    desc: "Полное восстановление зуба",
    features: [
      "Установка импланта",
      "3D-планирование",
      "Сопровождение на всех этапах",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <p className="text-xs tracking-[0.2em] text-gold uppercase">Цены</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink leading-tight">
            Прозрачные цены без сюрпризов
          </h2>
        </Reveal>

        <RevealGroup className="mt-12 grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div
                className={cn(
                  "h-full rounded-xl2 border p-8 transition-transform hover:-translate-y-1.5",
                  plan.highlighted
                    ? "border-gold bg-darkbrown text-cardwhite shadow-[0_20px_44px_rgba(43,36,32,0.18)]"
                    : "border-border bg-cardwhite text-ink"
                )}
              >
                <h3 className="font-serif text-xl">{plan.name}</h3>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    plan.highlighted ? "text-cardwhite/70" : "text-muted"
                  )}
                >
                  {plan.desc}
                </p>
                <p
                  className={cn(
                    "mt-6 font-serif text-3xl",
                    plan.highlighted ? "text-gold-light" : "text-gold"
                  )}
                >
                  {plan.price}
                </p>

                <ul className="mt-7 flex flex-col gap-3">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={16}
                        className={cn(
                          "mt-0.5 shrink-0",
                          plan.highlighted ? "text-gold-light" : "text-gold"
                        )}
                      />
                      <span className={plan.highlighted ? "text-cardwhite/90" : "text-muted"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "mt-8 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors",
                    plan.highlighted
                      ? "bg-gold text-darkbrown hover:bg-gold-light"
                      : "border border-border text-ink hover:border-gold hover:text-gold"
                  )}
                >
                  Записаться
                </a>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
