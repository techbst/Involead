'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BrainCircuit, CircleGauge, Database, ShieldCheck, Sparkles } from 'lucide-react';

const orbitNodes = [
  { label: 'Value', icon: Sparkles, position: 'left-[38%] top-[7%]' },
  { label: 'Core', icon: BrainCircuit, position: 'right-[4%] top-[43%]' },
  { label: 'Foundation', icon: Database, position: 'bottom-[7%] left-[34%]' },
  { label: 'Governance', icon: ShieldCheck, position: 'left-[4%] top-[43%]' },
] as const;

export default function ArchitectureGraphicVariantTwo() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      className="relative grid min-h-[480px] place-items-center overflow-hidden rounded-[32px] border border-slate-200 bg-[linear-gradient(rgba(95,176,194,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(95,176,194,0.045)_1px,transparent_1px),radial-gradient(circle,#f0fbfc,#fff_65%)] bg-[size:28px_28px,28px_28px,auto] shadow-[0_24px_70px_rgba(15,23,42,0.09)] sm:min-h-[560px]"
    >
      <div className="absolute size-[66%] rounded-full border border-[#5fb0c2]/20" />
      {[0, 90, 180, 270].map((rotation) => (
        <div key={rotation} className="absolute left-1/2 top-1/2 h-px w-[33%] origin-left bg-gradient-to-r from-[#5fb0c2]/40 to-transparent" style={{ rotate: `${rotation}deg` }} />
      ))}

      <motion.div
        className="absolute left-1/2 top-1/2 size-[72%] rounded-full border border-dashed border-[#5fb0c2]/35"
        style={{ x: '-50%', y: '-50%' }}
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute left-[14%] top-[4%] size-2.5 rounded-full bg-[#5fb0c2] shadow-[0_0_12px_rgba(95,176,194,0.7)]" />
      </motion.div>
      <motion.div
        className="absolute left-1/2 top-1/2 size-[48%] rounded-full border border-dashed border-[#5fb0c2]/25"
        style={{ x: '-50%', y: '-50%' }}
        animate={reduceMotion ? undefined : { rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        <span className="absolute bottom-[8%] right-[12%] size-2 rounded-full bg-[#398da0]" />
      </motion.div>

      <motion.div
        className="relative z-10 grid size-32 place-items-center rounded-full border border-cyan-100 bg-white shadow-[0_0_60px_rgba(95,176,194,0.28)]"
        animate={reduceMotion ? undefined : { scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-center text-[#398da0]">
          <CircleGauge className="mx-auto size-8" />
          <span className="mt-2 block text-sm font-semibold text-slate-800">Systemic AI</span>
        </div>
      </motion.div>

      {orbitNodes.map((node, index) => (
        <motion.div
          key={node.label}
          className={`absolute z-20 ${node.position} flex items-center gap-2 rounded-2xl border border-cyan-100 bg-white/95 p-3 text-xs font-semibold text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.09)]`}
          animate={reduceMotion ? undefined : { y: [0, index % 2 ? 5 : -5, 0] }}
          transition={{ duration: 3.8, delay: index * 0.3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="grid size-8 place-items-center rounded-lg bg-cyan-50 text-[#5fb0c2]"><node.icon className="size-4" /></span>
          {node.label}
        </motion.div>
      ))}
    </motion.div>
  );
}
