"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Collage */}
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative col-span-2 aspect-[16/8] overflow-hidden rounded-xl2 border border-border">
                <Image
                  src="/images/clinic-interior.jpg"
                  alt="Интерьер клиники Dr. Nuralievna"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 90vw, 45vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl2 border border-border bg-cardwhite p-4">
                <Image
                  src="/images/equipment.png"
                  alt="Современное стоматологическое оборудование"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 45vw, 22vw"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl2 border border-border bg-darkbrown/95 p-6">
                <Image
                  src="/images/xray-monitor.png"
                  alt="Цифровой рентген-снимок на мониторе"
                  fill
                  className="object-contain p-3"
                  sizes="(max-width: 1024px) 45vw, 22vw"
                />
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={0.1}>
            <p className="text-xs tracking-[0.2em] text-gold uppercase">О клинике</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl text-ink leading-tight">
              Стоматология, где важна
              <br />
              каждая деталь
            </h2>
            <p className="mt-5 text-muted leading-relaxed">
              В клинике Dr. Nuralievna мы объединяем многолетний опыт врача,
              современное диагностическое оборудование и спокойную, светлую
              атмосферу — чтобы визит к стоматологу стал комфортным, а не
              тревожным.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Цифровой рентген, стерильные кабинеты и индивидуальный план
              лечения для каждого пациента — мы заботимся не только о
              результате, но и о том, как вы себя чувствуете на каждом этапе.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <p className="font-serif text-3xl text-gold">5.0</p>
                <p className="mt-1 text-sm text-muted">
                  рейтинг клиники по {11} оценкам
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-gold">8</p>
                <p className="mt-1 text-sm text-muted">отзывов от пациентов</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
