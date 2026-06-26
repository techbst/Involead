'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  LineChart,
  Sparkles,
  Target,
} from 'lucide-react';

const modules = [
  { title: 'Marketing Analytics', kpi: '+16.8%', stat: 'ROI', color: '#2563EB', orbit: 'inset-[3%]', speed: 30, angle: 8, tilt: 'rotateX(64deg) rotateZ(-14deg)' },
  { title: 'Forecast Accuracy', kpi: '94.7%', stat: 'MAPE', color: '#06B6D4', orbit: 'inset-[10%]', speed: 24, angle: 64, tilt: 'rotateX(70deg) rotateZ(18deg)' },
  { title: 'Assortment Optimization', kpi: '+9.4%', stat: 'Mix', color: '#10B981', orbit: 'inset-[18%]', speed: 36, angle: 126, tilt: 'rotateX(58deg) rotateZ(-38deg)' },
  { title: 'BI & Dashboarding', kpi: '3.2x', stat: 'Speed', color: '#7C3AED', orbit: 'inset-[26%]', speed: 22, angle: 188, tilt: 'rotateX(76deg) rotateZ(42deg)' },
  { title: 'Inventory Intelligence', kpi: '-14%', stat: 'Waste', color: '#2563EB', orbit: 'inset-[7%]', speed: 42, angle: 242, tilt: 'rotateY(62deg) rotateZ(10deg)' },
  { title: 'Revenue Growth', kpi: '+21%', stat: 'Lift', color: '#10B981', orbit: 'inset-[15%]', speed: 28, angle: 302, tilt: 'rotateY(68deg) rotateZ(-26deg)' },
  { title: 'Content Personalization', kpi: '+31%', stat: 'CVR', color: '#06B6D4', orbit: 'inset-[23%]', speed: 34, angle: 330, tilt: 'rotateX(62deg) rotateZ(70deg)' },
  { title: 'Commercial Planning', kpi: '8 wk', stat: 'Cycle', color: '#7C3AED', orbit: 'inset-[12%]', speed: 38, angle: 156, tilt: 'rotateY(72deg) rotateZ(34deg)' },
  { title: 'Customer Segmentation', kpi: '+12%', stat: 'LTV', color: '#2563EB', orbit: 'inset-[20%]', speed: 26, angle: 30, tilt: 'rotateX(66deg) rotateZ(-68deg)' },
  { title: 'Store Performance', kpi: '+7.6%', stat: 'Comp', color: '#10B981', orbit: 'inset-[29%]', speed: 32, angle: 278, tilt: 'rotateY(64deg) rotateZ(-58deg)' },
];

const commandModules = [
  'Marketing Mix Optimization',
  'Demand Forecasting',
  'Revenue Growth Management',
  'Inventory Intelligence',
  'Store Performance',
  'Customer Segmentation',
  'Commercial Effectiveness',
  'Strategic Planning',
];

function Sparkline({ color, active }: { color: string; active: boolean }) {
  return (
    <svg viewBox="0 0 118 34" className="mt-3 h-9 w-full overflow-visible">
      <motion.path
        d="M2 28 C 15 19, 25 23, 35 13 S 57 20, 68 10 S 90 5, 116 8"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2.5"
        initial={{ pathLength: 0.2 }}
        animate={{ pathLength: active ? [0.15, 1, 0.45] : [0.35, 1, 0.35] }}
        transition={{ duration: active ? 1.6 : 3.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M2 28 C 15 19, 25 23, 35 13 S 57 20, 68 10 S 90 5, 116 8 L116 34 L2 34 Z"
        fill={color}
        animate={{ opacity: active ? [0.12, 0.28, 0.12] : [0.08, 0.18, 0.08] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  );
}

function HeroCopy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative z-10 max-w-2xl"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/15 bg-white/65 px-4 py-2 text-sm font-semibold text-slate-700 shadow-[0_12px_40px_rgba(37,99,235,0.12)] backdrop-blur-xl">
        <Sparkles className="size-4 text-[#2563EB]" />
        Trusted by CPG & Retail Leaders
      </div>

      <h1 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
        Driving{' '}
        <span className="bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#10B981] bg-clip-text text-transparent">
          Commercial Excellence
        </span>
        <br />
        for Leading CPG & Retail Brands
      </h1>

      <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
        We deliver real revenue lifts, optimized margins, and efficient operations through targeted analytics-helping
        teams act on data where it drives the most impact.
      </p>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        <motion.a
          href="/contact-us"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#2563EB] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(37,99,235,0.28)] transition-colors hover:bg-[#1d4ed8]"
        >
          Schedule a Free Consultation
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </motion.a>
        <motion.a
          href="#casestudies"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-white/65 px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-[0_16px_42px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all hover:border-[#06B6D4]/40 hover:bg-white hover:shadow-[0_18px_45px_rgba(6,182,212,0.18)]"
        >
          See Enterprise Results
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </motion.a>
      </div>
    </motion.div>
  );
}

function OrbitCard({
  module,
  index,
  activeIndex,
  setActiveIndex,
}: {
  module: (typeof modules)[number];
  index: number;
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}) {
  const isActive = activeIndex === index;
  const isNearby = activeIndex !== null && Math.abs(activeIndex - index) <= 1;

  return (
    <div className={`absolute ${module.orbit}`} style={{ transform: module.tilt }}>
      <motion.div
        className="absolute inset-0 rounded-full border border-white/70 shadow-[inset_0_0_34px_rgba(37,99,235,0.06)]"
        animate={{ rotate: index % 2 ? -360 : 360 }}
        transition={{ duration: isActive ? module.speed * 1.8 : module.speed, repeat: Infinity, ease: 'linear' }}
      >
        <motion.div
          onMouseEnter={() => setActiveIndex(index)}
          onMouseLeave={() => setActiveIndex(null)}
          className="absolute left-1/2 top-0 w-[166px] -translate-x-1/2 -translate-y-1/2 cursor-default rounded-3xl border border-white/80 bg-white/55 p-3.5 text-slate-950 shadow-[0_22px_70px_rgba(37,99,235,0.16)] backdrop-blur-2xl"
          style={{ rotate: `${module.angle}deg` }}
          animate={{
            y: isActive ? -12 : [0, index % 2 ? 8 : -8, 0],
            scale: isActive ? 1.1 : 1,
            boxShadow: isActive || isNearby ? `0 28px 90px ${module.color}42` : '0 22px 70px rgba(37,99,235,0.16)',
          }}
          transition={{ duration: isActive ? 0.25 : 4 + index * 0.2, repeat: isActive ? 0 : Infinity, ease: 'easeInOut' }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="max-w-[118px] text-[11px] font-semibold leading-snug text-slate-700">{module.title}</div>
              <div className="mt-1 text-xl font-bold tracking-tight">{module.kpi}</div>
            </div>
            <span className="relative mt-1 grid size-7 shrink-0 place-items-center rounded-full bg-white shadow-inner">
              <motion.span
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: module.color }}
                animate={{ opacity: [0.1, isActive || isNearby ? 0.34 : 0.22, 0.1], scale: [1, 1.45, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="relative size-2 rounded-full" style={{ backgroundColor: module.color, boxShadow: `0 0 14px ${module.color}` }} />
            </span>
          </div>
          <Sparkline color={module.color} active={isActive} />
          <div className="mt-2 flex items-center justify-between text-[10px] font-semibold text-slate-500">
            <span>{module.stat}</span>
            <span className="inline-flex items-center gap-1 text-[#10B981]">
              <CheckCircle2 className="size-3" />
              Live
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function RetailGrowthUniverse() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.hero-five-grid', { backgroundPosition: '84px 84px', duration: 10, repeat: -1, ease: 'none' });
      gsap.to('.hero-five-beam', {
        strokeDashoffset: -260,
        duration: 3.2,
        repeat: -1,
        stagger: 0.08,
        ease: 'none',
      });
      gsap.to('.hero-five-ray', {
        opacity: 0.42,
        scaleX: 1.08,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        stagger: 0.22,
        ease: 'sine.inOut',
      });
      gsap.to('.hero-five-dot', {
        y: -18,
        x: 8,
        opacity: 0.95,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.05, from: 'random' },
        ease: 'sine.inOut',
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative mx-auto aspect-square w-full max-w-[660px] [perspective:1300px]">
      <div className="hero-five-grid absolute inset-4 rounded-[42px] bg-[linear-gradient(rgba(37,99,235,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.11)_1px,transparent_1px)] bg-[size:42px_42px] opacity-55 [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
      <div className="absolute left-[10%] top-[12%] size-28 rounded-full bg-[#2563EB]/15 blur-2xl" />
      <div className="absolute bottom-[10%] right-[12%] size-36 rounded-full bg-[#10B981]/18 blur-3xl" />
      <div className="absolute right-[20%] top-[8%] size-24 rounded-full bg-[#7C3AED]/12 blur-2xl" />

      {[...Array(44)].map((_, index) => (
        <span
          key={index}
          className="hero-five-dot absolute size-1 rounded-full bg-[#2563EB]/60 shadow-[0_0_12px_rgba(37,99,235,0.55)]"
          style={{ left: `${5 + ((index * 37) % 90)}%`, top: `${6 + ((index * 53) % 86)}%` }}
        />
      ))}

      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 660 660">
        <defs>
          <linearGradient id="hero-five-flow" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#2563EB" stopOpacity="0.2" />
            <stop offset="0.5" stopColor="#06B6D4" stopOpacity="0.82" />
            <stop offset="1" stopColor="#10B981" stopOpacity="0.18" />
          </linearGradient>
          <filter id="hero-five-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {modules.slice(0, 8).map((module, index) => {
          const radians = ((index * 45 - 90) * Math.PI) / 180;
          const x = 330 + Math.cos(radians) * (205 + (index % 2) * 42);
          const y = 330 + Math.sin(radians) * (150 + (index % 3) * 25);

          return (
            <path
              key={module.title}
              className="hero-five-beam"
              d={`M330 330 C ${(330 + x) / 2} ${(330 + y) / 2 - 70}, ${x} ${y}, ${x} ${y}`}
              fill="none"
              stroke="url(#hero-five-flow)"
              strokeDasharray="10 18"
              strokeLinecap="round"
              strokeWidth="2"
              filter="url(#hero-five-glow)"
            />
          );
        })}
      </svg>

      {[0, 1, 2, 3, 4].map((index) => (
        <div
          key={index}
          className="hero-five-ray absolute left-1/2 top-1/2 h-px w-[46%] origin-left bg-gradient-to-r from-transparent via-[#06B6D4]/50 to-transparent opacity-20"
          style={{ rotate: `${index * 34 - 18}deg` }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 z-20 grid size-44 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[radial-gradient(circle_at_34%_28%,#ffffff,rgba(6,182,212,0.72)_20%,rgba(37,99,235,0.52)_52%,rgba(16,185,129,0.22)_76%,rgba(255,255,255,0.1)_100%)] shadow-[0_0_90px_rgba(37,99,235,0.32),inset_-24px_-26px_60px_rgba(15,23,42,0.18)]"
        animate={{ rotate: 360, scale: [1, 1.045, 1] }}
        transition={{ rotate: { duration: 36, repeat: Infinity, ease: 'linear' }, scale: { duration: 5, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <motion.div
          className="absolute inset-[-18px] rounded-full border border-[#2563EB]/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute inset-[-36px] rounded-full border border-dashed border-[#06B6D4]/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        />
        <BrainCircuit className="relative size-10 text-[#2563EB]" />
        <div className="absolute bottom-10 text-center text-xs font-bold uppercase tracking-[0.16em] text-slate-700">AI Core</div>
      </motion.div>

      {modules.map((module, index) => (
        <OrbitCard
          key={module.title}
          module={module}
          index={index}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      ))}

      <motion.div
        className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/80 bg-white/65 px-5 py-3 text-sm font-semibold text-slate-700 shadow-[0_18px_55px_rgba(37,99,235,0.14)] backdrop-blur-xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Target className="size-4 text-[#10B981]" />
        Retail Growth Universe
      </motion.div>

      <div className="absolute left-6 top-8 z-30 hidden rounded-3xl border border-white/80 bg-white/55 p-4 shadow-[0_18px_55px_rgba(37,99,235,0.12)] backdrop-blur-2xl sm:block">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          <BarChart3 className="size-4 text-[#2563EB]" />
          Command Center
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {commandModules.slice(0, 4).map((item) => (
            <div key={item} className="rounded-2xl bg-white/55 px-3 py-2 text-[10px] font-semibold leading-tight text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute right-6 top-10 z-30 hidden rounded-3xl border border-white/80 bg-white/55 p-4 shadow-[0_18px_55px_rgba(6,182,212,0.12)] backdrop-blur-2xl sm:block">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
          <LineChart className="size-4 text-[#06B6D4]" />
          Intelligence
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {commandModules.slice(4).map((item) => (
            <div key={item} className="rounded-2xl bg-white/55 px-3 py-2 text-[10px] font-semibold leading-tight text-slate-600">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HeroFive() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 24 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const x = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const y = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  return (
    <section
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      className="relative isolate overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] px-6 py-24 text-slate-950 sm:py-28 lg:min-h-screen lg:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.16),transparent_34%),radial-gradient(circle_at_78%_18%,rgba(6,182,212,0.18),transparent_31%),radial-gradient(circle_at_55%_88%,rgba(16,185,129,0.14),transparent_35%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.28)_1px,transparent_0)] [background-size:20px_20px]" />
      <div className="absolute left-[8%] top-[18%] -z-10 size-72 rounded-full bg-white/40 blur-3xl" />
      <div className="absolute bottom-[12%] right-[5%] -z-10 size-80 rounded-full bg-[#06B6D4]/16 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <HeroCopy />
        <motion.div style={{ rotateX, rotateY, x, y }} className="relative z-10 [transform-style:preserve-3d]">
          <RetailGrowthUniverse />
        </motion.div>
      </div>
    </section>
  );
}
