'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Building2,
  LineChart,
  Sparkles,
  TrendingUp,
} from 'lucide-react';

const kpis = [
  { label: 'Revenue lift', value: '+18.4%', icon: TrendingUp, x: 'left-[3%]', y: 'top-[13%]' },
  { label: 'Margin gain', value: '+7.2%', icon: LineChart, x: 'right-[0%]', y: 'top-[20%]' },
  { label: 'Stores', value: '2,840', icon: Building2, x: 'left-[0%]', y: 'bottom-[22%]' },
  { label: 'Inventory', value: '-14%', icon: Boxes, x: 'right-[7%]', y: 'bottom-[13%]' },
];

const cubeMetrics = ['Revenue Graph', 'Margin %', 'Retail Stores', 'Inventory', 'Forecast'];

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

function MiniChart() {
  return (
    <svg viewBox="0 0 180 72" className="h-20 w-full overflow-visible">
      <defs>
        <linearGradient id="hero-one-chart" x1="0" x2="1" y1="0" y2="0">
          <stop stopColor="#06B6D4" />
          <stop offset="1" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <motion.path
        d="M4 58 C 28 38, 42 48, 60 31 S 101 30, 118 18 S 149 22, 176 8"
        fill="none"
        stroke="url(#hero-one-chart)"
        strokeLinecap="round"
        strokeWidth="4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2.8, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
      />
      {[20, 62, 104, 146].map((x, index) => (
        <motion.circle
          key={x}
          cx={x}
          cy={[45, 31, 25, 15][index]}
          r="3.5"
          fill="#fff"
          animate={{ scale: [1, 1.7, 1], opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2, delay: index * 0.25, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

function AnalyticsCube() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] [perspective:1200px]">
      <motion.div
        className="absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.24),transparent_62%)] blur-2xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.55, 0.9, 0.55] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {[...Array(30)].map((_, index) => (
        <motion.span
          key={index}
          className="absolute size-1 rounded-full bg-cyan-200/70 shadow-[0_0_12px_rgba(6,182,212,0.9)]"
          style={{ left: `${8 + ((index * 31) % 84)}%`, top: `${6 + ((index * 47) % 84)}%` }}
          animate={{ y: [0, -16, 0], opacity: [0.15, 0.9, 0.15], scale: [0.7, 1.4, 0.7] }}
          transition={{ duration: 3.6 + (index % 5), delay: index * 0.08, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] sm:h-[360px] sm:w-[360px]"
        animate={{ rotateX: [58, 66, 58], rotateY: [34, 394], rotateZ: [-6, 4, -6] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
      >
        {[
          'translateZ(150px)',
          'rotateY(180deg) translateZ(150px)',
          'rotateY(90deg) translateZ(150px)',
          'rotateY(-90deg) translateZ(150px)',
          'rotateX(90deg) translateZ(150px)',
          'rotateX(-90deg) translateZ(150px)',
        ].map((transform, index) => (
          <div
            key={transform}
            className="absolute inset-0 overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.07] shadow-[inset_0_0_70px_rgba(255,255,255,0.08),0_28px_90px_rgba(6,182,212,0.16)] backdrop-blur-2xl"
            style={{ transform }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(37,99,235,0.18),transparent_45%,rgba(16,185,129,0.14))]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:36px_36px] opacity-30" />
            {index === 0 && (
              <div className="absolute inset-8">
                <MiniChart />
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {cubeMetrics.slice(1).map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-3 text-xs text-slate-200">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </motion.div>

      {kpis.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            className={`absolute ${item.x} ${item.y} z-10 w-[154px] rounded-3xl border border-white/10 bg-white/[0.08] p-4 text-white shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl`}
            animate={{ y: [0, index % 2 ? 18 : -18, 0], rotate: [0, index % 2 ? -2 : 2, 0] }}
            transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
            whileHover={{ y: -8, scale: 1.04, boxShadow: '0 30px 90px rgba(6,182,212,0.24)' }}
          >
            <div className="flex items-center justify-between">
              <Icon className="size-5 text-[#06B6D4]" />
              <span className="size-2 rounded-full bg-[#10B981] shadow-[0_0_14px_rgba(16,185,129,0.9)]" />
            </div>
            <div className="mt-5 text-2xl font-semibold">{item.value}</div>
            <div className="mt-1 text-xs text-slate-300">{item.label}</div>
          </motion.div>
        );
      })}

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 560">
        {[120, 210, 330, 430].map((y, index) => (
          <motion.path
            key={y}
            d={`M${60 + index * 20} ${y} C 180 ${y - 60}, 360 ${y + 80}, ${510 - index * 28} ${y - 12}`}
            fill="none"
            stroke="rgba(6,182,212,.35)"
            strokeDasharray="5 14"
            strokeLinecap="round"
            animate={{ strokeDashoffset: [0, -80], opacity: [0.15, 0.65, 0.15] }}
            transition={{ duration: 5 + index, repeat: Infinity, ease: 'linear' }}
          />
        ))}
      </svg>

      <motion.div
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/30 px-5 py-3 text-sm text-slate-200 backdrop-blur-xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <BarChart3 className="size-4 text-[#10B981]" />
        Forecast accuracy 94.8%
      </motion.div>
    </div>
  );
}

export default function HeroOne() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 22 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);

  return (
    <section
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      className="relative isolate overflow-hidden bg-[#030712] px-6 py-24 text-white sm:py-28 lg:min-h-screen lg:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_22%,rgba(37,99,235,0.22),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(6,182,212,0.16),transparent_32%),radial-gradient(circle_at_58%_88%,rgba(124,58,237,0.2),transparent_34%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <HeroCopy />
        <motion.div style={{ rotateX, rotateY }} className="relative z-10 [transform-style:preserve-3d]">
          <AnalyticsCube />
        </motion.div>
      </div>
    </section>
  );
}
