'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#effcff_44%,#f7f0ff_100%)] lg:pt-[180px] sm:pt-[140px] lg:py-[80px] sm:py-[80px]">
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(20,184,166,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,.12)_1px,transparent_1px)] [background-size:42px_42px]" />
      <div className="absolute right-8 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-cyan-300 to-transparent lg:block" />
      <div className="absolute right-10 top-28 hidden h-3 w-3 rotate-45 bg-white shadow-[0_0_24px_rgba(34,211,238,.9)] lg:block" />

      <div className="relative z-10 mx-auto grid w-full container items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="max-w-3xl"
        >
          <motion.h1
            variants={fadeUp}
            className="max-w-4xl text-[clamp(2.5rem,6vw,3.625rem)] font-bold leading-[1.02] tracking-normal text-slate-950 letter-spacing-[-2px]"
          >
            Engineering Products with{' '}
            <span className="text-secondary">Intelligent AI & Data Solutions</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-7 max-w-[585px]">
            We help enterprises leverage AI, analytics, and intelligent automation to streamline
            operations, accelerate decision-making, and build scalable digital solutions that drive
            measurable business growth.
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
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="relative mx-auto aspect-squar max-w-[620px] flex items-center"
        >
          <div className="absolute inset-12 rounded-full bg-cyan-300/30 blur-3xl" />
          <motion.img
            animate={{ y: [0, -18, 0], rotate: [0, 4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            src="/img/shape-1.webp"
            alt="Futuristic abstract AI data object"
            className="relative h-[339px] w-[314px] object-contain mix-blend-multiply mx-auto "
          />
        </motion.div>
      </div>
    </section>
  );
}
