"use client";

import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
interface ValueCardProps {
  icon?: React.ElementType;
  image?: string;
  title: string;
  description: string;
  index: number;
}
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};
// Icon morphs on card hover — subtle scale + rotation
const iconVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.18,
    rotate: -8,
    transition: { type: "spring", stiffness: 320, damping: 18 },
  },
};
// Title shifts right slightly on hover
const titleVariants: Variants = {
  rest: { x: 0 },
  hover: {
    x: 6,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const descVariants: Variants = {
  rest: {
    opacity: 0.75,
    y: 0,
  },
  hover: {
    opacity: 1,
    y: -2,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
// Accent line grows from left on hover
const lineVariants: Variants = {
  rest: { scaleX: 0, originX: 0 },
  hover: {
    scaleX: 1,
    originX: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ValueCard({ icon: Icon, image, title, description, index }: ValueCardProps) {
  const col = index % 3;
  const row = Math.floor(index / 3);

  return (
    <motion.article
      key={title}
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className={`group relative h-full overflow-hidden  border border-white/10 bg-white/92 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1  transition-colors duration-300 hover:bg-cyan-50/30 rounded-[24px] 
      `}
    >
      {/* Radial glow — expands from card center on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(95,176,194,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Icon container with spring bounce */}
      <motion.div
        variants={iconVariants}
        className="relative inline-flex size-12 items-center justify-center rounded-xl bg-cyan-50 ring-1 ring-cyan-100"
      >
        {image ? (
            <Image
            src={image}
            alt={title}
            width={24}
            height={24}
            className="object-contain"
            />
        ) : (
            Icon && <Icon className="size-6 stroke-[1.5] text-[#5FB0C2]" />
        )}

        {/* Ping ring — appears on hover */}
        <motion.span
          className="absolute inset-0 rounded-xl ring-2 ring-[#5FB0C2]/40"
          initial={{ scale: 1, opacity: 0 }}
          whileHover={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>

      {/* Title with subtle slide */}
      <motion.h3
        variants={titleVariants}
        className="mt-6 text-xl font-bold text-slate-950"
      >
        {title}
      </motion.h3>

      {/* Animated accent line under title */}
      <motion.div
        variants={lineVariants}
        className="mt-1.5 h-[2px] w-10 rounded-full bg-[#5FB0C2]"
      />

      {/* Description */}
      <motion.p
        variants={descVariants}
        className="mt-4 text-main"
      >
        {description}
      </motion.p>

      {/* Corner arrow — slides in on hover */}
      <motion.div
        className="absolute right-5 bottom-5 text-[#5FB0C2]"
        initial={{ opacity: 0, x: 6, y: 6 }}
        whileHover={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </motion.div>
    </motion.article>
  );
}