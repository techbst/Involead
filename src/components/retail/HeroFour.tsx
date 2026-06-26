'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Orbit, Sparkles } from 'lucide-react';

const orbitItems = [
  { label: 'Revenue', radius: 'inset-[5%]', duration: 22, color: '#06B6D4', angle: 15 },
  { label: 'SKU', radius: 'inset-[14%]', duration: 17, color: '#10B981', angle: 96 },
  { label: 'Stores', radius: 'inset-[23%]', duration: 28, color: '#7C3AED', angle: 174 },
  { label: 'Forecast', radius: 'inset-[32%]', duration: 19, color: '#2563EB', angle: 248 },
  { label: 'Demand', radius: 'inset-[10%]', duration: 31, color: '#10B981', angle: 310 },
  { label: 'Pricing', radius: 'inset-[27%]', duration: 24, color: '#06B6D4', angle: 42 },
];

function HeroCopy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative z-10 max-w-2xl"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-sm font-medium text-cyan-100 shadow-[0_0_35px_rgba(6,182,212,0.18)] backdrop-blur-xl">
        <Sparkles className="size-4 text-[#06B6D4]" />
        Trusted by CPG & Retail Leaders
      </div>
      <h1 className="mt-7 text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl">
        Driving{' '}
        <span className="bg-gradient-to-r from-[#06B6D4] via-white to-[#10B981] bg-clip-text text-transparent">
          Commercial Excellence
        </span>
        <br />
        for Leading CPG & Retail Brands
      </h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
        We deliver real revenue lifts, optimized margins, and efficient operations through targeted analytics-helping
        teams act on data where it drives the most impact.
      </p>
      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <motion.a
          href="/contact-us"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.38)] transition-colors hover:bg-[#1d4ed8]"
        >
          Schedule a Free Consultation
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </motion.a>
        <motion.a
          href="#casestudies"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all hover:border-cyan-300/40 hover:bg-white/[0.1] hover:shadow-[0_18px_45px_rgba(6,182,212,0.16)]"
        >
          See Enterprise Results
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </motion.div>
  );
}

function DataGalaxy() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[620px] [perspective:1200px]">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.18),transparent_58%)] blur-2xl" />
      {[...Array(54)].map((_, index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: `${1 + (index % 3)}px`,
            height: `${1 + (index % 3)}px`,
            left: `${4 + ((index * 37) % 92)}%`,
            top: `${4 + ((index * 53) % 92)}%`,
          }}
          animate={{ opacity: [0.1, 0.9, 0.16], scale: [0.8, 1.8, 0.8], y: [0, -18, 0] }}
          transition={{ duration: 3.8 + (index % 7), delay: index * 0.04, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 size-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_32%_28%,#ffffff,rgba(6,182,212,0.95)_18%,rgba(37,99,235,0.72)_42%,rgba(124,58,237,0.5)_66%,rgba(3,7,18,0.2)_100%)] shadow-[0_0_80px_rgba(6,182,212,0.58),inset_-24px_-28px_70px_rgba(3,7,18,0.62)]"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 34, repeat: Infinity, ease: 'linear' }, scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <div className="absolute inset-5 rounded-full border border-white/20" />
        <div className="absolute inset-12 rounded-full border border-cyan-200/20" />
      </motion.div>

      {[...Array(7)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-1/2 h-px w-[78%] origin-left bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent"
          style={{ rotate: `${index * 26}deg` }}
          animate={{ opacity: [0.08, 0.42, 0.08], scaleX: [0.76, 1, 0.76] }}
          transition={{ duration: 4 + index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {orbitItems.map((item, index) => (
        <motion.div
          key={item.label}
          className={`absolute ${item.radius} rounded-full border border-white/10`}
          style={{ transform: 'rotateX(66deg) rotateZ(-18deg)' }}
          animate={{ rotate: index % 2 ? -360 : 360 }}
          transition={{ duration: item.duration, repeat: Infinity, ease: 'linear' }}
        >
          <motion.div
            className="absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.09] px-3.5 py-2 text-xs font-semibold text-white shadow-[0_22px_70px_rgba(0,0,0,0.38)] backdrop-blur-2xl"
            style={{ rotate: `${item.angle}deg`, color: item.color }}
            whileHover={{ scale: 1.12, y: -4 }}
          >
            <span className="size-2 rounded-full" style={{ backgroundColor: item.color, boxShadow: `0 0 16px ${item.color}` }} />
            <span className="text-white">{item.label}</span>
          </motion.div>
        </motion.div>
      ))}

      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-dashed border-cyan-200/20"
          style={{ inset: `${18 + index * 10}%`, transform: `rotateX(${64 + index * 6}deg) rotateZ(${index * 28}deg)` }}
          animate={{ rotate: index % 2 ? -360 : 360 }}
          transition={{ duration: 20 + index * 8, repeat: Infinity, ease: 'linear' }}
        />
      ))}

      {['POS', 'Promo ROI', 'Elasticity', 'OTIF', 'Basket'].map((chip, index) => (
        <motion.div
          key={chip}
          className="absolute rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-2 text-xs font-medium text-slate-200 shadow-[0_16px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl"
          style={{ left: `${12 + ((index * 19) % 70)}%`, top: `${16 + ((index * 27) % 64)}%` }}
          animate={{ y: [0, index % 2 ? 18 : -18, 0], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
        >
          {chip}
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/35 px-5 py-3 text-sm text-slate-200 backdrop-blur-xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Orbit className="size-4 text-[#06B6D4]" />
        Live retail data galaxy
      </motion.div>
    </div>
  );
}

export default function HeroFour() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 22 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [8, -8]);

  return (
    <section
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      className="relative isolate overflow-hidden bg-[#030712] px-6 py-24 text-white sm:py-28 lg:min-h-screen lg:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_22%_20%,rgba(37,99,235,0.18),transparent_34%),radial-gradient(circle_at_78%_25%,rgba(6,182,212,0.2),transparent_30%),radial-gradient(circle_at_70%_90%,rgba(124,58,237,0.22),transparent_36%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:17px_17px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <HeroCopy />
        <motion.div style={{ rotateX, rotateY }} className="relative z-10 [transform-style:preserve-3d]">
          <DataGalaxy />
        </motion.div>
      </div>
    </section>
  );
}
