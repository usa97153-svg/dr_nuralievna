"use client";

import { motion } from "framer-motion";
import { Sparkles, Shield, Heart, Calendar } from "lucide-react";
import Image from "next/image";

const trustItems = [
  {
    title: "Индивидуальный подход",
    text: "Лечение, адаптированное под ваши потребности",
  },
  {
    title: "Современные технологии",
    text: "Точное оборудование для качественного лечения",
  },
  {
    title: "Безопасность и комфорт",
    text: "Стерильность, забота и внимание к деталям",
  },
  {
    title: "Удобная запись",
    text: "Быстрая и комфортная запись на приём",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="relative w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative w-full"
        >
          <Image
            src="/hero-reference.png"
            alt="Dr. Nuralievna — улыбка, которой вы достойны"
            width={1672}
            height={844}
            priority
            sizes="100vw"
            className="w-full h-auto select-none"
          />

          {/* Invisible clickable overlays matching the buttons baked into the reference image */}
          <a
            href="#contact"
            aria-label="Записаться на консультацию"
            className="absolute"
            style={{
              left: "7.3%",
              top: "50.2%",
              width: "19.6%",
              height: "7.1%",
            }}
          />
          <a
            href="#services"
            aria-label="Наши услуги"
            className="absolute"
            style={{
              left: "27.7%",
              top: "50.2%",
              width: "10.3%",
              height: "7.1%",
            }}
          />
        </motion.div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-bordersoft">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold-dark">
                <TrustIcon index={i} />
              </div>
              <h3 className="text-sm font-semibold text-brown">
                {item.title}
              </h3>
              <p className="text-xs text-graytext mt-1.5 leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustIcon({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <Heart size={18} />;
    case 1:
      return <Shield size={18} />;
    case 2:
      return <Sparkles size={18} />;
    default:
      return <Calendar size={18} />;
  }
}
