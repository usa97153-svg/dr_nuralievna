"use client";

import { Star } from "lucide-react";
import { Reveal, RevealGroup, fadeUp } from "@/components/ui/reveal";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Айгерим Т.",
    text: "Очень внимательный врач, всё подробно объяснила перед лечением. Боли не почувствовала вообще, хотя обычно боюсь стоматологов.",
    initials: "АТ",
  },
  {
    name: "Нурлан С.",
    text: "Ставил имплант — результат превзошёл ожидания. Чисто, аккуратно, без очередей. Запись и приём вовремя, без задержек.",
    initials: "НС",
  },
  {
    name: "Динара К.",
    text: "Привела ребёнка на неотложную помощь вечером, приняли сразу. Спасибо за заботу и профессионализм в сложной ситуации.",
    initials: "ДК",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <p className="text-xs tracking-[0.2em] text-gold uppercase">Отзывы</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink leading-tight">
            Что говорят наши пациенты
          </h2>
          <div className="mt-4 flex items-center gap-2">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <span className="text-sm text-muted">5.0 · 11 оценок · 8 отзывов</span>
          </div>
        </Reveal>

        <RevealGroup className="mt-12 grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-xl2 border border-border bg-cardwhite p-7"
            >
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star key={si} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                {review.text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 font-serif text-sm text-gold">
                  {review.initials}
                </span>
                <span className="font-serif text-sm text-ink">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
