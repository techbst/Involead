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
];type MarqueeBarProps = {
  bgColor?: string;
};

export default function MarqueeBar({
  bgColor = "#5fb0c2",
}: MarqueeBarProps) {
   const row = [...items, ...items, ...items];
  return (
    <section
      className="relative z-20 -mt-1 py-4"
      style={{
        backgroundColor:
          bgColor === "secondary"
            ? "#5fb0c2"
            : bgColor,
      }}
    >
      <motion.div
        className="flex w-max gap-[22px] hover:[animation-play-state:paused]"
        animate={{ x: ['0%', '-33.333%'] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
      >
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-3 whitespace-nowrap text-base font-normal text-white sm:text-[20px]"
          >
            <Image src="/img/star.svg" alt="Star icon" width={28} height={28} />
            {item}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
