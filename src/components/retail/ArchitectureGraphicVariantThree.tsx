'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BrainCircuit, CheckCircle2, Database, FileKey2, Layers3, Lightbulb, Play, Target } from 'lucide-react';

const inputs = [
  { label: 'Data', icon: Database },
  { label: 'Context', icon: Layers3 },
  { label: 'Policies', icon: FileKey2 },
] as const;

const outputs = [
  { label: 'Decisions', icon: Lightbulb },
  { label: 'Actions', icon: Play },
  { label: 'Outcomes', icon: Target },
] as const;

export default function ArchitectureGraphicVariantThree() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      className="relative flex min-h-[480px] items-center overflow-hidden rounded-[32px] border border-slate-200 bg-[radial-gradient(circle_at_50%_50%,rgba(95,176,194,0.13),transparent_34%),linear-gradient(145deg,#fff,#f6fbfc)] p-5 shadow-[0_24px_70px_rgba(15,23,42,0.09)] sm:min-h-[560px] sm:p-8"
    >
      <div className="grid w-full grid-cols-[1fr_1.15fr_1fr] items-center gap-3 sm:gap-6">
        <div className="space-y-8 sm:space-y-10">
          {inputs.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="relative rounded-2xl border border-cyan-100 bg-white/90 p-3 shadow-sm sm:p-4"
            >
              <item.icon className="mb-2 size-5 text-[#5fb0c2]" />
              <span className="text-[11px] font-semibold text-slate-700 sm:text-sm">{item.label}</span>
              <span className="absolute left-full top-1/2 h-px w-[calc(50%+0.75rem)] bg-[#5fb0c2]/25 sm:w-[calc(50%+1.5rem)]">
                {!reduceMotion && <motion.i className="absolute -top-1 size-2 rounded-full bg-[#5fb0c2]" animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: index * 0.35, repeat: Infinity, ease: 'linear' }} />}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative z-10 rounded-[24px] border border-[#5fb0c2]/30 bg-white/90 p-4 text-center shadow-[0_18px_50px_rgba(95,176,194,0.18)] backdrop-blur sm:p-7"
          animate={reduceMotion ? undefined : { boxShadow: ['0 18px 50px rgba(95,176,194,.12)', '0 18px 55px rgba(95,176,194,.28)', '0 18px 50px rgba(95,176,194,.12)'] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#5fb0c2] text-white shadow-[0_8px_25px_rgba(95,176,194,0.35)] sm:size-20">
            <BrainCircuit className="size-7 sm:size-9" />
          </span>
          <h3 className="mt-4 !text-sm font-semibold text-slate-900 sm:!text-lg">Systemic AI Engine</h3>
          <span className="mt-2 inline-flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-[#398da0] sm:text-[11px]"><CheckCircle2 className="size-3" /> Trusted reasoning</span>
        </motion.div>

        <div className="space-y-8 sm:space-y-10">
          {outputs.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + index * 0.12 }}
              className="relative rounded-2xl border border-cyan-100 bg-white/90 p-3 shadow-sm sm:p-4"
            >
              <span className="absolute right-full top-1/2 h-px w-[calc(50%+0.75rem)] bg-[#5fb0c2]/25 sm:w-[calc(50%+1.5rem)]">
                {!reduceMotion && <motion.i className="absolute -top-1 size-2 rounded-full bg-[#5fb0c2]" animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 0.2 + index * 0.35, repeat: Infinity, ease: 'linear' }} />}
              </span>
              <item.icon className="mb-2 size-5 text-[#5fb0c2]" />
              <span className="text-[11px] font-semibold text-slate-700 sm:text-sm">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
