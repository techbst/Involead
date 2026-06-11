"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const headlineWords = [
  "Engineering",
  "Products",
  "with",
  "Intelligent",
  "AI",
  "&",
  "Data",
  "Solutions",
];

function AnimatedHeadline() {
  return (
    <motion.h1
      variants={fadeUp}
      className="max-w-4xl text-[36px] md:!text-[54px] font-bold !leading-[115%] tracking-normal text-slate-950"
      aria-label="Engineering Products with Intelligent AI & Data Solutions"
    >
      {headlineWords.map((word, wordIndex) => (
        <span key={word} className="inline-block overflow-hidden align-bottom">
          <motion.span
            aria-hidden
            initial={{ y: wordIndex % 2 === 0 ? "-115%" : "115%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.62,
              delay: 0.08 + wordIndex * 0.075,
              ease: [0.2, 0.9, 0.2, 1],
            }}
            className={`mr-3 inline-block ${
              wordIndex >= 3 ? "text-secondary" : ""
            }`}
          >
            {word}
          </motion.span>
        </span>
      ))}
      <motion.span
        aria-hidden
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
        className="ml-1 inline-block h-[.9em] w-[3px] translate-y-1 bg-secondary"
      />
    </motion.h1>
  );
}

export default function Hero() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 18 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [14, -14]);

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      onMouseMove={handleMove}
      onMouseLeave={() => {
        pointerX.set(0);
        pointerY.set(0);
      }}
      className="relative flex items-center overflow-hidden bg-[#f8fbff] pt-26 pb-26 md:pt-40 md:pb-24"
    >
          <img
        src="/img/List.svg"
        alt=""
        aria-hidden
        className="absolute right-0 z-2 top-28 hidden h-full w-fit lg:block"
      />
      <img
        src="/img/Feature.png"
        alt=""
        aria-hidden
      
        className="absolute inset-0 h-full w-full object-cover opacity-55 mix-blend-multiply right-0 top-0"
      />
     
      
     
  

      <div className="relative z-10 mx-auto grid w-full container items-center gap-10 lg:grid-cols-[2fr_1fr] lg:gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="max-w-4xl"
        >
          <AnimatedHeadline />
          <motion.p variants={fadeUp} className="mt-4 max-w-2xl ">
            We help enterprises leverage AI, analytics, and intelligent
            automation to streamline operations, accelerate decision-making, and
            build scalable digital solutions that drive measurable business
            growth.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-4">
            <Link href="/about">
              <Button variant="default">
                Explore Services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          // style={{ rotateX, rotateY, transformPerspective: 900 }}
          className="relative mx-auto h-[260px] w-[242px]  flex  sm:h-[320px] sm:w-[297px] lg:h-[360px] lg:w-[334px] items-center"
        >
          {/* <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-12 rounded-full bg-cyan-300/30 blur-3xl"
          /> */}
          {/* <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="absolute inset-10 rounded-full border border-cyan-200/70 border-t-cyan-500/70"
          /> */}
          {/* <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute inset-20 rounded-full border border-sky-100 border-r-sky-400/70"
          /> */}
          <motion.img
            animate={{ y: [0, -30, 0], rotate: [0, 60, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            src="/img/shape-1.webp"
            alt="Futuristic abstract AI data object"
            className="relative mx-auto object-contain mix-blend-multiply drop-shadow-[0_28px_55px_rgba(14,116,144,.28)] "
          />
        </motion.div>
      </div>
    </section>
  );
}
