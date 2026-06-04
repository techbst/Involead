'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const items = [
  'Generative AI',
  'Data Science & Analytics',
  'Machine Learning Solutions',
  'Business Intelligence',
  'Data Engineering',
  'AI Automation',
  'AI Agents',
  'NLP',
  'Computer Vision',
];

export default function MarqueeBar() {
  const row = [...items, ...items, ...items];

  return (
    <section className="relative z-20 -mt-1 bg-secondary py-4">
      <motion.div
        className="flex w-max gap-[22px] hover:[animation-play-state:paused]"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-3 whitespace-nowrap text-[20px] font-Regular text-white"
          >
            <Image src="/img/star.svg" alt="Star icon" width={28} height={28} />
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
