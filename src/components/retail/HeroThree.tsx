'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Gauge, LineChart, PieChart, Sparkles, TrendingUp } from 'lucide-react';

const panels = [
  { title: 'Revenue Chart', value: '$42.8M', className: 'left-[2%] top-[10%] w-[245px]', color: '#06B6D4' },
  { title: 'Forecast Graph', value: '94.8%', className: 'right-[4%] top-[4%] w-[230px]', color: '#10B981' },
  { title: 'Profit Gauge', value: '+11.6%', className: 'left-[16%] top-[43%] w-[210px]', color: '#7C3AED' },
  { title: 'Market Share', value: '28.4%', className: 'right-[7%] top-[43%] w-[220px]', color: '#2563EB' },
  { title: 'Heatmap', value: '1,204', className: 'left-[7%] bottom-[3%] w-[240px]', color: '#10B981' },
  { title: 'Growth %', value: '+24.2%', className: 'right-[18%] bottom-[8%] w-[190px]', color: '#06B6D4' },
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

function ChartLine({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 210 70" className="mt-4 h-16 w-full overflow-visible">
      <motion.path
        d="M3 58 C 28 50, 38 24, 62 34 S 93 52, 119 24 S 153 17, 177 27 S 194 22, 207 8"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="3"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0.18, 1, 0.18] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.path
        d="M3 58 C 28 50, 38 24, 62 34 S 93 52, 119 24 S 153 17, 177 27 S 194 22, 207 8 L207 70 L3 70 Z"
        fill={color}
        opacity="0.12"
        animate={{ opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      />
    </svg>
  );
}

function Heatmap() {
  return (
    <div className="mt-4 grid grid-cols-7 gap-1.5">
      {[...Array(28)].map((_, index) => (
        <motion.span
          key={index}
          className="aspect-square rounded-md"
          style={{ backgroundColor: ['#2563EB', '#06B6D4', '#10B981', '#7C3AED'][index % 4] }}
          animate={{ opacity: [0.18, 0.86, 0.32] }}
          transition={{ duration: 2.4, delay: index * 0.035, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function GaugePanel({ color }: { color: string }) {
  return (
    <div className="mt-4 flex items-center gap-4">
      <div className="relative grid size-20 place-items-center rounded-full" style={{ background: `conic-gradient(${color} 0 74%, rgba(255,255,255,.09) 74% 100%)` }}>
        <div className="grid size-14 place-items-center rounded-full bg-[#07111f]">
          <Gauge className="size-6" style={{ color }} />
        </div>
      </div>
      <div className="space-y-2">
        {[72, 48, 86].map((width, index) => (
          <motion.div
            key={width}
            className="h-2 rounded-full"
            style={{ backgroundColor: color, width }}
            animate={{ scaleX: [0.55, 1, 0.7] }}
            transition={{ duration: 2.6, delay: index * 0.25, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
}

function DashboardPanels() {
  return (
    <div className="relative mx-auto h-[610px] w-full max-w-[620px] [perspective:1300px]">
      <motion.div
        className="absolute left-1/2 top-1/2 h-[360px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-[34px] border border-white/10 bg-white/[0.05] shadow-[0_40px_140px_rgba(37,99,235,0.2)] backdrop-blur-2xl [transform:rotateX(62deg)_rotateZ(-28deg)]"
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 rounded-[34px] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-30" />
      </motion.div>

      {panels.map((panel, index) => (
        <motion.div
          key={panel.title}
          className={`absolute ${panel.className} rounded-3xl border border-white/10 bg-white/[0.08] p-5 text-white shadow-[0_28px_90px_rgba(0,0,0,0.36)] backdrop-blur-2xl`}
          initial={{ opacity: 0, y: 32, rotateX: 18, rotateY: -12 }}
          animate={{ opacity: 1, y: [0, index % 2 ? 16 : -16, 0], rotateX: [14, 18, 14], rotateY: [-12, -7, -12] }}
          transition={{ opacity: { duration: 0.6, delay: index * 0.12 }, y: { duration: 5 + index * 0.45, repeat: Infinity, ease: 'easeInOut' }, rotateX: { duration: 6, repeat: Infinity, ease: 'easeInOut' }, rotateY: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          whileHover={{ y: -18, scale: 1.045, boxShadow: `0 34px 100px ${panel.color}33` }}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-slate-300">{panel.title}</span>
            {index % 3 === 0 ? <LineChart className="size-4" style={{ color: panel.color }} /> : index % 3 === 1 ? <TrendingUp className="size-4" style={{ color: panel.color }} /> : <PieChart className="size-4" style={{ color: panel.color }} />}
          </div>
          <motion.div
            className="mt-3 text-3xl font-semibold tracking-tight"
            animate={{ opacity: [0.72, 1, 0.72] }}
            transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.2 }}
          >
            {panel.value}
          </motion.div>
          {panel.title === 'Heatmap' ? <Heatmap /> : panel.title === 'Profit Gauge' ? <GaugePanel color={panel.color} /> : <ChartLine color={panel.color} />}
        </motion.div>
      ))}
    </div>
  );
}

export default function HeroThree() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 80, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 80, damping: 24 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);

  return (
    <section
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      className="relative isolate overflow-hidden bg-[#030712] px-6 py-24 text-white sm:py-28 lg:min-h-screen lg:px-10"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_22%,rgba(37,99,235,0.18),transparent_34%),radial-gradient(circle_at_77%_30%,rgba(16,185,129,0.17),transparent_32%),radial-gradient(circle_at_50%_88%,rgba(124,58,237,0.2),transparent_34%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_76%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.055] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <HeroCopy />
        <motion.div style={{ rotateX, rotateY }} className="relative z-10 [transform-style:preserve-3d]">
          <DashboardPanels />
        </motion.div>
      </div>
    </section>
  );
}
