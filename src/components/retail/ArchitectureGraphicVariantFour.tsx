'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BrainCircuit, HeartHandshake, PackageCheck, Percent, TrendingUp } from 'lucide-react';

const panels = [
  { title: 'Demand Forecast', value: '+18.4%', icon: TrendingUp, position: 'left-[5%] top-[8%]', bars: [38, 52, 48, 72, 86] },
  { title: 'Margin Signals', value: 'Healthy', icon: Percent, position: 'right-[5%] top-[8%]', bars: [72, 58, 76, 68, 82] },
  { title: 'Customer Loyalty', value: '91 score', icon: HeartHandshake, position: 'bottom-[8%] left-[5%]', bars: [45, 56, 65, 74, 88] },
  { title: 'Inventory Health', value: '96.2%', icon: PackageCheck, position: 'bottom-[8%] right-[5%]', bars: [82, 78, 88, 92, 96] },
] as const;

const statuses = ['Real-time', 'Trusted Context', 'Governed AI'] as const;

export default function ArchitectureGraphicVariantFour() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      className="relative min-h-[480px] overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(rgba(95,176,194,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(95,176,194,0.05)_1px,transparent_1px),linear-gradient(145deg,#f9fdfd,#fff)] bg-[size:24px_24px,24px_24px,auto] shadow-[0_24px_70px_rgba(15,23,42,0.09)] sm:min-h-[560px]"
    >
      {panels.map((panel, index) => (
        <motion.div
          key={panel.title}
          className={`absolute ${panel.position} w-[40%] rounded-[20px] border border-slate-200 bg-white/95 p-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] backdrop-blur sm:p-4`}
          animate={reduceMotion ? undefined : { y: [0, index % 2 ? 6 : -6, 0] }}
          transition={{ duration: 4, delay: index * 0.35, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-cyan-50 text-[#5fb0c2]"><panel.icon className="size-4" /></span>
            <span className="text-[10px] font-semibold text-[#398da0] sm:text-xs">{panel.value}</span>
          </div>
          <h3 className="mt-3 !text-[11px] font-semibold text-slate-700 sm:!text-sm">{panel.title}</h3>
          <div className="mt-3 flex h-8 items-end gap-1">
            {panel.bars.map((height, barIndex) => (
              <motion.span
                key={`${panel.title}-${height}`}
                className="flex-1 rounded-t-sm bg-gradient-to-t from-[#5fb0c2] to-cyan-200"
                initial={{ height: 2 }}
                whileInView={{ height: `${height}%` }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + barIndex * 0.06, duration: 0.55 }}
              />
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-[26px] border border-[#5fb0c2]/30 bg-white/90 p-5 text-center shadow-[0_20px_55px_rgba(95,176,194,0.2)] backdrop-blur-xl sm:p-7"
        style={{ x: '-50%', y: '-50%' }}
        animate={reduceMotion ? undefined : { scale: [1, 1.035, 1] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#5fb0c2] text-white shadow-[0_0_28px_rgba(95,176,194,0.45)] sm:size-16"><BrainCircuit className="size-7" /></span>
        <h3 className="mt-4 !text-base font-semibold text-slate-900 sm:!text-xl">Retail AI Core</h3>
        <p className="mt-2 !text-[10px] !leading-4 !text-slate-500 sm:!text-xs">Live commercial intelligence</p>
      </motion.div>

      <div className="absolute inset-x-[13%] top-1/2 h-px bg-gradient-to-r from-[#5fb0c2]/10 via-[#5fb0c2]/50 to-[#5fb0c2]/10" />
      <div className="absolute inset-y-[15%] left-1/2 w-px bg-gradient-to-b from-[#5fb0c2]/10 via-[#5fb0c2]/50 to-[#5fb0c2]/10" />

      <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 sm:bottom-5 sm:gap-2">
        {statuses.map((status, index) => (
          <motion.span
            key={status}
            className="whitespace-nowrap rounded-full border border-cyan-100 bg-white px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-[#398da0] shadow-sm sm:px-3 sm:text-[10px]"
            animate={reduceMotion ? undefined : { opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 2.4, delay: index * 0.4, repeat: Infinity }}
          >
            {status}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
