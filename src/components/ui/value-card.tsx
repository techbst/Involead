"use client";

import { motion, type Variants } from "framer-motion";
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
    transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const iconVariants: Variants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.15,
    rotate: -6,
    transition: { type: "spring", stiffness: 320, damping: 18 },
  },
};

const titleVariants: Variants = {
  rest: { x: 0 },
  hover: { x: 6, transition: { duration: 0.3 } },
};

const descVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -2, transition: { duration: 0.3 } },
};

const lineVariants: Variants = {
  rest: { scaleX: 0, originX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.35 } },
};

export default function ValueCard({
  icon: Icon,
  image,
  title,
  description,
}: ValueCardProps) {
  return (
    <motion.article
      variants={cardVariants}
      initial="rest"
      animate="rest"
      whileHover="hover"
      className="group relative h-full overflow-hidden rounded-[28px] border border-cyan-100/70 bg-[linear-gradient(145deg,#ffffff_0%,#f8fdfe_55%,#eefbfd_100%)] p-7 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_28px_80px_rgba(95,176,194,0.18)]"
    >
      
      {/* clipped vector shape - top right */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-36 w-44 bg-[linear-gradient(135deg,rgba(95,176,194,0.26),rgba(14,165,233,0.08))] transition-transform duration-500 group-hover:scale-110"
        style={{
          clipPath: "polygon(35% 0, 100% 0, 100% 78%, 70% 100%, 42% 74%)",
        }}
      />

      {/* clipped vector shape - bottom left */}
      <div
        className="pointer-events-none absolute -bottom-8 -left-8 h-36 w-40 bg-[linear-gradient(135deg,rgba(95,176,194,0.18),rgba(255,255,255,0))] blur-[1px] transition-transform duration-500 group-hover:scale-110"
        style={{
          clipPath:
            "polygon(0 20%, 58% 0, 100% 38%, 82% 100%, 18% 90%, 0 58%)",
        }}
      />
      

      {/* subtle inner highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white via-cyan-50/60 to-transparent" />

      <motion.div
        className="pointer-events-none absolute inset-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(95,176,194,0.12), transparent 70%)",
        }}
      />

      <motion.div
        variants={iconVariants}
        className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#EAFBFD,#FFFFFF)] shadow-[0_12px_28px_rgba(95,176,194,0.18)] ring-1 ring-cyan-100"
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            width={28}
            height={28}
            className="object-contain"
          />
        ) : (
          Icon && <Icon className="h-7 w-7 stroke-[1.6] text-[#5FB0C2]" />
        )}
      </motion.div>

      <motion.h3
        variants={titleVariants}
        className="relative z-10 mt-6 text-[21px] font-semibold text-slate-900"
      >
        {title}
      </motion.h3>

      <motion.div
        variants={lineVariants}
        className="relative z-10 mt-3 h-[3px] w-12 rounded-full bg-gradient-to-r from-cyan-500 to-sky-400"
      />

      <motion.p
        variants={descVariants}
        className="relative z-10 mt-5 leading-7 !text-slate-600"
      >
        {description}
      </motion.p>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}