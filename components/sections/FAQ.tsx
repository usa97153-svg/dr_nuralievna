"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Как записаться на приём?",
    a: "Позвоните по телефону, напишите в WhatsApp или Instagram — мы подберём удобное время и подтвердим запись в течение дня.",
  },
  {
    q: "Принимаете ли вы карту или рассрочку?",
    a: "Да, оплата возможна картой, наличными, а также доступна рассрочка на лечение — подробности уточняйте на консультации.",
  },
  {
    q: "Есть ли неотложная помощь при острой боли?",
    a: "Да, мы принимаем взрослых пациентов с острой болью вне очереди в часы работы клиники — позвоните заранее, чтобы мы подготовились.",
  },
  {
    q: "Сколько длится первичная консультация?",
    a: "Первичная консультация бесплатна и обычно занимает 20–30 минут: осмотр, диагностика и обсуждение плана лечения.",
  },
  {
    q: "Нужно ли направление для имплантации?",
    a: "Нет, направление не требуется. Врач проведёт осмотр и рентген-диагностику, после чего предложит оптимальный план лечения.",
  },
  {
    q: "Где находится клиника и как добраться?",
    a: "Клиника находится по адресу проспект Абилкайыр-хана, 22, Актобе. Точный маршрут можно открыть в 2GIS по кнопке в разделе контактов.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream">
      <div className="mx-auto max-w-4xl px-6 lg:px-10 py-20 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-xs tracking-[0.2em] text-gold-dark font-medium">
            FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-brown mt-3">
            Частые вопросы
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-bordersoft bg-whitecard overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-brown">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="shrink-0 flex h-7 w-7 items-center justify-center rounded-full bg-gold/15 text-gold-dark"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm text-graytext leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
