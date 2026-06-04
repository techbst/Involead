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
    <section className="bg-black px-5 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="bg-black p-8 transition-all duration-300 hover:bg-cyan-400 hover:text-slate-950"
          >
            <strong className="text-5xl font-bold tracking-normal">
              <Counter value={stat.value} suffix={stat.suffix} />
            </strong>
            <p className="mt-5 text-sm font-semibold opacity-75">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
