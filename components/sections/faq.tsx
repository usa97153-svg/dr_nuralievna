"use client";

import { Reveal } from "@/components/ui/reveal";
import { Accordion } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Как записаться на приём?",
    answer:
      "Записаться можно по телефону, через WhatsApp или Instagram — выберите удобный способ в разделе «Контакты». Подберём ближайшее свободное время.",
  },
  {
    question: "Принимаете ли вы карты и рассрочку?",
    answer:
      "Да, мы принимаем оплату банковскими картами и предлагаем рассрочку на ряд процедур, включая имплантацию и ортопедическое лечение.",
  },
  {
    question: "Есть ли неотложная помощь?",
    answer:
      "Да, при острой боли мы принимаем пациентов вне записи в порядке неотложной помощи. Позвоните заранее, чтобы мы подготовились к приёму.",
  },
  {
    question: "Нужна ли подготовка перед визитом?",
    answer:
      "Специальной подготовки не требуется. Возьмите с собой предыдущие снимки или медицинскую карту, если они у вас есть — это поможет врачу быстрее составить план лечения.",
  },
  {
    question: "Сколько длится первичная консультация?",
    answer:
      "В среднем 20–30 минут: осмотр, при необходимости рентген-диагностика и подробное обсуждение плана лечения с врачом.",
  },
  {
    question: "Работаете ли вы с детьми?",
    answer:
      "Клиника специализируется на стоматологии для взрослых. Для уточнения по возрастным ограничениям свяжитесь с нами напрямую.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="text-xs tracking-[0.2em] text-gold uppercase">FAQ</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink leading-tight">
            Частые вопросы
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12">
          <Accordion items={faqItems} />
        </Reveal>
      </div>
    </section>
  );
}
