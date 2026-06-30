"use client";

import { motion } from "framer-motion";
import {
  Smile,
  Crown,
  Scissors,
  Zap,
  Activity,
  ScanLine,
  AlertTriangle,
  MessageCircleHeart,
  Stethoscope,
} from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Ортодонтия",
    text: "Исправление прикуса и выравнивание зубов для взрослых пациентов.",
  },
  {
    icon: Crown,
    title: "Ортопедия",
    text: "Протезирование и восстановление эстетики и функции зубов.",
  },
  {
    icon: Scissors,
    title: "Хирургия",
    text: "Удаление зубов и хирургические вмешательства с комфортом.",
  },
  {
    icon: Zap,
    title: "Имплантация",
    text: "Надёжные имплантаты премиальных систем под ключ.",
  },
  {
    icon: Activity,
    title: "Пародонтология",
    text: "Лечение дёсен и профилактика заболеваний пародонта.",
  },
  {
    icon: Stethoscope,
    title: "Гнатология",
    text: "Диагностика и лечение нарушений работы челюстных суставов.",
  },
  {
    icon: ScanLine,
    title: "Рентген",
    text: "Цифровая диагностика для точной картины лечения.",
  },
  {
    icon: AlertTriangle,
    title: "Неотложка для взрослых",
    text: "Срочная помощь при острой боли в любое время приёма.",
  },
  {
    icon: MessageCircleHeart,
    title: "Бесплатная консультация",
    text: "Осмотр и план лечения от доктора без оплаты.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <span className="text-xs tracking-[0.2em] text-gold-dark font-medium">
            УСЛУГИ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown mt-3">
            Полный спектр стоматологической помощи
          </h2>
          <p className="text-graytext mt-4 leading-relaxed">
            От профилактики до сложной хирургии — всё, что нужно для здоровой
            и красивой улыбки, в одной клинике.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-whitecard border border-bordersoft p-7 transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(43,36,32,0.2)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                <service.icon size={22} className="text-gold-dark" />
              </span>
              <h3 className="font-serif text-xl text-brown mt-5">
                {service.title}
              </h3>
              <p className="text-sm text-graytext mt-2 leading-relaxed">
                {service.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
