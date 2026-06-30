"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Heart, Calendar } from "lucide-react";
import Image from "next/image";

const floatCards = [
  {
    icon: "tooth",
    title: "Ортодонтия",
    text: "Исправление прикуса для взрослых",
    className: "left-2 top-[34%] lg:left-0",
    delay: 0.1,
  },
  {
    icon: "implant",
    title: "Имплантация",
    text: "Надёжные и современные решения",
    className: "right-0 top-[10%]",
    delay: 0.25,
  },
  {
    icon: "pin",
    title: "Хирургия",
    text: "Безопасное и комфортное лечение",
    className: "right-2 top-[40%] lg:right-0",
    delay: 0.4,
  },
  {
    icon: "molar",
    title: "Протезирование",
    text: "Эстетика и функциональность",
    className: "left-6 top-[62%] lg:left-2",
    delay: 0.55,
  },
  {
    icon: "shield",
    title: "Бесплатная консультация и неотложная помощь",
    text: "Забота, когда это нужно",
    className: "right-4 top-[68%] lg:right-2",
    delay: 0.7,
  },
];

function CardIcon({ name }: { name: string }) {
  const cls = "w-5 h-5 text-gold-dark";
  switch (name) {
    case "implant":
      return <Sparkles className={cls} />;
    case "pin":
      return <Heart className={cls} />;
    case "shield":
      return <Shield className={cls} />;
    default:
      return <Calendar className={cls} />;
  }
}

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
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 lg:pt-20 lg:pb-24 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="font-serif text-[2.6rem] leading-[1.08] sm:text-5xl lg:text-6xl text-brown">
            Улыбка, которой
            <br />
            вы достойны
          </h1>
          <p className="mt-6 text-graytext text-lg leading-relaxed max-w-md">
            Современная стоматология для взрослых: опыт, технологии и забота
            о&nbsp;каждом пациенте.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gold hover:bg-gold-dark transition-colors text-white px-7 py-4 text-[15px] font-medium"
            >
              Записаться на консультацию
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border border-bordersoft bg-transparent hover:bg-white/60 transition-colors text-brown px-7 py-4 text-[15px] font-medium"
            >
              Наши услуги
            </a>
          </div>
        </motion.div>

        {/* Right: photo + floating cards */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto aspect-[4/5] max-w-md rounded-[2rem] overflow-hidden border border-bordersoft shadow-[0_30px_60px_-30px_rgba(43,36,32,0.25)]"
          >
            <Image
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80"
              alt="Доктор Нуралиевна, стоматолог"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brown/10 via-transparent to-transparent" />
          </motion.div>

          {floatCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.6, delay: card.delay },
                y: {
                  duration: 4.5 + i * 0.4,
                  delay: card.delay + 0.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className={`hidden sm:flex absolute ${card.className} max-w-[230px] items-start gap-3 rounded-2xl bg-white/95 backdrop-blur-sm border border-bordersoft shadow-lg px-4 py-3.5`}
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15">
                <CardIcon name={card.icon} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-brown leading-snug">
                  {card.title}
                </span>
                <span className="block text-xs text-graytext leading-snug mt-0.5">
                  {card.text}
                </span>
              </span>
            </motion.div>
          ))}
        </div>
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
