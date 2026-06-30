"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Консультация",
    price: "Бесплатно",
    note: "Первичный осмотр",
    features: [
      "Осмотр и диагностика",
      "Консультация врача",
      "План лечения",
    ],
    highlighted: false,
  },
  {
    title: "Лечение кариеса",
    price: "от 15 000 ₸",
    note: "За один зуб",
    features: [
      "Анестезия включена",
      "Современные материалы",
      "Гарантия на пломбу",
    ],
    highlighted: true,
  },
  {
    title: "Имплантация",
    price: "от 180 000 ₸",
    note: "Под ключ",
    features: [
      "Имплантат премиум-класса",
      "Хирургический протокол",
      "Сопровождение врача",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <span className="text-xs tracking-[0.2em] text-gold-dark font-medium">
            ЦЕНЫ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown mt-3">
            Прозрачные цены без сюрпризов
          </h2>
          <p className="text-graytext mt-4 leading-relaxed">
            Точную стоимость лечения врач озвучит на консультации — после
            осмотра и диагностики.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`rounded-2xl p-8 border transition-shadow ${
                plan.highlighted
                  ? "bg-brown text-cream border-brown shadow-xl"
                  : "bg-whitecard text-brown border-bordersoft"
              }`}
            >
              <h3 className="font-serif text-xl">{plan.title}</h3>
              <p
                className={`text-3xl font-serif mt-4 ${
                  plan.highlighted ? "text-gold" : "text-gold-dark"
                }`}
              >
                {plan.price}
              </p>
              <p
                className={`text-xs mt-1 ${
                  plan.highlighted ? "text-cream/70" : "text-graytext"
                }`}
              >
                {plan.note}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={
                        plan.highlighted ? "text-gold mt-0.5" : "text-gold-dark mt-0.5"
                      }
                    />
                    <span
                      className={
                        plan.highlighted ? "text-cream/90" : "text-brown/85"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-gold hover:bg-gold-dark text-white"
                    : "border border-bordersoft hover:bg-cream text-brown"
                }`}
              >
                Записаться
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
