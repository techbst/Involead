'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BarChart3, Database, Network, ShieldCheck, Sparkles } from 'lucide-react';

const layers = [
  { label: 'Enterprise Alignment', icon: ShieldCheck },
  { label: 'Context & Data Integrity', icon: Database },
  { label: 'Intelligence Layer', icon: Network },
  { label: 'Application Value', icon: Sparkles },
] as const;

const retailNodes = [
  { label: 'Inventory', position: 'left-[5%] top-[18%]', delay: 0 },
  { label: 'Pricing', position: 'right-[5%] top-[28%]', delay: 0.5 },
  { label: 'Loyalty', position: 'left-[4%] bottom-[23%]', delay: 1 },
  { label: 'Demand', position: 'right-[6%] bottom-[14%]', delay: 1.5 },
] as const;

export default function ArchitectureGraphicVariantOne() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.75 }}
      className="relative min-h-[480px] overflow-hidden rounded-[32px] border border-cyan-100 bg-[radial-gradient(circle_at_50%_48%,rgba(95,176,194,0.18),transparent_38%),linear-gradient(145deg,#ffffff,#f4fbfc)] shadow-[0_24px_70px_rgba(15,23,42,0.10)] sm:min-h-[560px]"
      style={{ perspective: '1000px' }}
    >
      <div className="absolute inset-x-[18%] bottom-[10%] h-20 rounded-full bg-[#5fb0c2]/15 blur-3xl" />
      <div className="absolute left-1/2 top-[20%] h-[60%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#5fb0c2]/60 to-transparent">
        {!reduceMotion && (
          <motion.span
            className="absolute bottom-0 left-1/2 size-2 -translate-x-1/2 rounded-full bg-[#5fb0c2] shadow-[0_0_16px_4px_rgba(95,176,194,0.45)]"
            animate={{ bottom: ['0%', '100%'], opacity: [0, 1, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
          />
        )}
      </div>

      {layers.map((layer, index) => (
        <motion.div
          key={layer.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
          transition={{
            opacity: { delay: index * 0.1, duration: 0.5 },
            y: { delay: index * 0.35, duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
          }}
          className="absolute left-1/2 flex h-20 w-[62%] items-center gap-3 rounded-[20px] border border-[#5fb0c2]/25 bg-white/75 px-5 shadow-[0_16px_35px_rgba(15,23,42,0.10)] backdrop-blur-xl"
          style={{ top: `${18 + index * 16}%`, x: '-50%', rotateX: 54, rotateZ: -13, transformStyle: 'preserve-3d' }}
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-cyan-50 text-[#5fb0c2] ring-1 ring-cyan-100">
            <layer.icon className="size-4" />
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-700 sm:text-sm">{layer.label}</span>
        </motion.div>
      ))}

      {retailNodes.map((node) => (
        <motion.span
          key={node.label}
          className={`absolute ${node.position} rounded-full border border-cyan-100 bg-white/90 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-600 shadow-sm backdrop-blur sm:text-xs`}
          animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 3.5, delay: node.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="mr-2 inline-block size-1.5 rounded-full bg-[#5fb0c2]" />
          {node.label}
        </motion.span>
      ))}

      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs font-medium text-slate-400">
        <BarChart3 className="size-4 text-[#5fb0c2]" />
        Layered retail intelligence
      </div>
    </motion.div>
  );
}
