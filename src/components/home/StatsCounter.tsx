'use client';

import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 50, suffix: '+', label: 'Enterprise Clients' },
  { value: 10, suffix: '+', label: 'Industries Served' },
  { value: 98, suffix: '%', label: 'AI Accuracy' },
  { value: 150, suffix: '+', label: 'Projects Delivered' },
];

function Counter({ value, suffix }: Pick<Stat, 'value' | 'suffix'>) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => `${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration: 1.6, ease: 'easeOut' });
    return controls.stop;
  }, [count, inView, value]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function StatsCounter() {
  return (
    <section className="bg-black px-0 py-0 text-white sm:px-6 lg:px-12">
      <div className="mx-auto grid w-full  overflow-hidden bg-black divide-y divide-white/10 grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="flex flex-col items-center justify-center max-md:border max-md:border-white/10 px-4 py-4 text-center md:py-10 sm:px-8 lg:px-10"
          >
            <h2 className="text-2xl !font-light !md:text-[48px] leading-none">
              <Counter value={stat.value} suffix={stat.suffix} />
            </h2>
            <p className="mt-3  !text-sm !md:text-[28px] font-normal leading-tight text-white/95">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
