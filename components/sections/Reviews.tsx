"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Айгерим Болатова",
    text: "Очень внимательный и аккуратный доктор. Объяснила каждый шаг лечения, было совсем не страшно. Результатом довольна на все сто.",
    initial: "А",
  },
  {
    name: "Нурлан Сейтканов",
    text: "Ставил имплант — переживал зря. Всё прошло быстро и без боли, врач на связи даже после приёма. Рекомендую друзьям и коллегам.",
    initial: "Н",
  },
  {
    name: "Динара Жумабекова",
    text: "Пришла на бесплатную консультацию, осталась лечиться. Чисто, современно, без очередей. Особенно понравилось отношение персонала.",
    initial: "Д",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="bg-[#F0E8DA]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mb-14"
        >
          <span className="text-xs tracking-[0.2em] text-gold-dark font-medium">
            ОТЗЫВЫ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown mt-3">
            Нам доверяют пациенты
          </h2>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-gold text-gold"
                />
              ))}
            </div>
            <span className="text-sm text-graytext">
              5.0 · 11 оценок, 8 отзывов
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl bg-whitecard border border-bordersoft p-7"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={15} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-brown/85 leading-relaxed">
                {review.text}
              </p>
              <div className="flex items-center gap-3 mt-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold-dark font-serif">
                  {review.initial}
                </span>
                <span className="text-sm font-medium text-brown">
                  {review.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
