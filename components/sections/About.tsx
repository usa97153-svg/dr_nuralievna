"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Современное оборудование и цифровая диагностика",
  "Стерильность и протоколы безопасности на каждом этапе",
  "Индивидуальный план лечения для каждого пациента",
  "Спокойная, тёплая атмосфера без лишнего стресса",
];

export default function About() {
  return (
    <section id="about" className="bg-[#F0E8DA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative grid grid-cols-2 gap-4"
        >
          <div className="relative col-span-2 aspect-[16/10] rounded-2xl overflow-hidden border border-bordersoft">
            <Image
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
              alt="Кабинет клиники Dr. Nuralievna"
              fill
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-bordersoft">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
              alt="Стоматологическое кресло"
              fill
              sizes="(max-width: 1024px) 45vw, 240px"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-bordersoft">
            <Image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80"
              alt="Рентген-снимок на мониторе"
              fill
              sizes="(max-width: 1024px) 45vw, 240px"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs tracking-[0.2em] text-gold-dark font-medium">
            О КЛИНИКЕ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown mt-3">
            Забота, основанная на опыте и технологиях
          </h2>
          <p className="text-graytext mt-5 leading-relaxed">
            Клиника Dr. Nuralievna в Актобе принимает взрослых пациентов,
            ценящих внимательное отношение и качественную диагностику.
            Мы сочетаем современное оборудование с индивидуальным подходом,
            чтобы каждый визит был комфортным, а результат — предсказуемым.
          </p>

          <ul className="mt-7 space-y-4">
            {points.map((point, i) => (
              <motion.li
                key={point}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={20}
                  className="text-gold-dark shrink-0 mt-0.5"
                />
                <span className="text-sm text-brown/90">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
