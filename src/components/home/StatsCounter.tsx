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
    <section className="bg-black px-4 py-0 text-white sm:px-6 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1920px] overflow-hidden bg-black divide-y divide-white/10 sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="flex min-h-[220px] flex-col items-center justify-center px-6 py-14 text-center sm:min-h-[260px] sm:px-8 lg:min-h-[356px] lg:px-10"
          >
            <strong className="text-[clamp(3.8rem,4.8vw,5.8rem)] font-medium tracking-[-0.05em] leading-none">
              <Counter value={stat.value} suffix={stat.suffix} />
            </strong>
            <p className="mt-8 text-[clamp(1.25rem,1.8vw,2rem)] font-normal leading-tight text-white/95">
              {stat.label}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
