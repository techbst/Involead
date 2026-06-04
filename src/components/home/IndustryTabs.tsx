'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SectionReveal from './SectionReveal';

interface IndustryCard {
  title: string;
  description: string;
  image: string;
  metrics: string[];
}

interface Industry {
  name: string;
  cards: IndustryCard[];
}

const industries: Industry[] = [
  {
    name: 'Healthcare',
    cards: [
      {
        title: 'AI Transforming Patient Care',
        description:
          'Clinical workflow automation that helps teams detect risk, triage faster, and personalize care pathways.',
        image:
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
        metrics: ['30% faster triage', '92% model precision', '18% lower cost'],
      },
      {
        title: 'Predictive Hospital Operations',
        description:
          'Forecasting demand, staffing, and resource usage across distributed care facilities.',
        image:
          'https://images.unsplash.com/photo-1581093458791-9d09a5bdc4d2?auto=format&fit=crop&w=900&q=80',
        metrics: ['24/7 insights', '41% fewer delays', '12 sites scaled'],
      },
    ],
  },
  {
    name: 'Manufacturing',
    cards: [
      {
        title: 'Autonomous Quality Intelligence',
        description:
          'Computer vision and IoT analytics that identify defects before production loss compounds.',
        image:
          'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80',
        metrics: ['67% less rework', '5M events/day', '99.1% uptime'],
      },
      {
        title: 'Factory Data Fabric',
        description:
          'Unified production intelligence across plants, machines, suppliers, and operators.',
        image:
          'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=900&q=80',
        metrics: ['14 plants', '3.2x faster reports', '22% throughput'],
      },
    ],
  },
  {
    name: 'Finance',
    cards: [
      {
        title: 'Risk Intelligence Engine',
        description:
          'Real-time anomaly detection and explainable models for compliance-heavy financial teams.',
        image:
          'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80',
        metrics: ['48% fraud lift', '8x faster review', '99.9% audit trail'],
      },
    ],
  },
  {
    name: 'Retail',
    cards: [
      {
        title: 'Customer Growth Intelligence',
        description:
          'Personalized journeys, demand signals, and SKU-level forecasting for modern commerce teams.',
        image:
          'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80',
        metrics: ['21% basket lift', '35% fewer stockouts', '1:1 targeting'],
      },
    ],
  },
  {
    name: 'Logistics',
    cards: [
      {
        title: 'Predictive Fleet Optimization',
        description:
          'Route, fleet, warehouse, and carrier optimization with live exception intelligence.',
        image:
          'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
        metrics: ['19% fuel saved', '27% SLA lift', 'Real-time ETA'],
      },
    ],
  },
];

export default function IndustryTabs() {
  const [active, setActive] = useState(industries[0].name);
  const industry = useMemo(
    () => industries.find((item) => item.name === active) ?? industries[0],
    [active],
  );

  return (
    <section className="bg-black px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <SectionReveal className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-cyan-300">Industries</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,4.1rem)] font-bold leading-tight tracking-normal">
            Transforming Industries with AI & Data
          </h2>
          <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
            Enabling predictive decisions, operational intelligence, and automation across
            mission-critical enterprise workflows.
          </p>
        </div>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {industries.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                active === item.name
                  ? 'border-cyan-300 bg-cyan-300 text-slate-950 shadow-[0_0_28px_rgba(103,232,249,.45)]'
                  : 'border-white/15 bg-white/5 text-white/70 hover:border-cyan-300/70 hover:text-cyan-200'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={industry.name}
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="mt-12"
          >
            <Swiper
              slidesPerView={1.1}
              centeredSlides
              spaceBetween={22}
              breakpoints={{
                768: { slidesPerView: 2.2 },
                1180: { slidesPerView: 3, spaceBetween: 34 },
              }}
            >
              {[...industry.cards, ...industry.cards].map((card, index) => (
                <SwiperSlide key={`${card.title}-${index}`} className="py-10">
                  {({ isActive }) => (
                    <article
                      className={`group h-[460px] overflow-hidden rounded-[1.3rem] border border-white/10 bg-slate-100 text-slate-950 transition-all duration-500 ${
                        isActive
                          ? 'scale-105 rotate-0 shadow-2xl shadow-cyan-400/20'
                          : 'scale-95 odd:-rotate-6 even:rotate-6 opacity-70'
                      }`}
                    >
                      <div className="relative h-56 w-full overflow-hidden">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(min-width: 1180px) 33vw, (min-width: 768px) 45vw, 90vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-2xl font-bold leading-tight">{card.title}</h3>
                        <p className="mt-4 text-sm leading-6 text-slate-600">{card.description}</p>
                        <div className="mt-6 grid grid-cols-3 gap-3">
                          {card.metrics.map((metric) => (
                            <div
                              key={metric}
                              className="rounded-xl bg-cyan-50 p-3 text-center text-xs font-bold text-slate-900"
                            >
                              {metric}
                            </div>
                          ))}
                        </div>
                      </div>
                    </article>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      </SectionReveal>
    </section>
  );
}
