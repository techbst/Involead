'use client';

import { motion } from 'framer-motion';
import { Database, Network, ShieldCheck, Sparkles } from 'lucide-react';

import { SectionHeader } from '@/components/ui/section-header';

import ArchitectureGraphicVariantFour from './ArchitectureGraphicVariantFour';
import ArchitectureGraphicVariantOne from './ArchitectureGraphicVariantOne';
import ArchitectureGraphicVariantThree from './ArchitectureGraphicVariantThree';
import ArchitectureGraphicVariantTwo from './ArchitectureGraphicVariantTwo';

const systemicArchitectureCards = [
  { title: 'Value', label: 'Application Layer', text: 'Real-world use cases that translate intelligence into measurable business impact.', icon: Sparkles },
  { title: 'Core', label: 'Intelligence Layer', text: 'Orchestrates agents and models into adaptive, enterprise-grade intelligence.', icon: Network },
  { title: 'Foundation', label: 'Context & Data Integrity', text: 'Reliable data and rich context ensure the integrity and trustworthiness of every AI system.', icon: Database },
  { title: 'Strategy & Governance', label: 'Enterprise Alignment', text: 'Goals, policies, and structures embed AI with integrity and accountability.', icon: ShieldCheck },
] as const;

const graphicVariants = {
  'variant-one': ArchitectureGraphicVariantOne,
  'variant-two': ArchitectureGraphicVariantTwo,
  'variant-three': ArchitectureGraphicVariantThree,
  'variant-four': ArchitectureGraphicVariantFour,
} as const;

type GraphicVariant = keyof typeof graphicVariants;

export const selectedGraphic: GraphicVariant = 'variant-one';

type ArchitectureCardProps = (typeof systemicArchitectureCards)[number] & { index: number };

function ArchitectureCard({ title, label, text, icon: Icon, index }: ArchitectureCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50/30"
    >
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#5fb0c2]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <span className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-[#5fb0c2] ring-1 ring-cyan-100">
          <Icon className="size-5" />
        </span>
        <div>
          <h3 className="!text-xl font-semibold !leading-tight text-slate-950">{title}</h3>
          <span className="mt-1.5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#398da0]">{label}</span>
        </div>
      </div>
      <p className="mt-6 !text-sm !leading-6 !text-slate-600">{text}</p>
    </motion.article>
  );
}

export default function SystemicArchitectureSection() {
  const SelectedGraphic = graphicVariants[selectedGraphic];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_50%,rgba(95,176,194,0.09),transparent_28%),radial-gradient(circle_at_88%_25%,rgba(95,176,194,0.06),transparent_24%)]" />
      <div className="container relative mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7 }}>
          <SectionHeader
            eyebrow="Systemic architecture"
            title="Core Building Blocks of Systemic AI"
            description="A layered framework that connects intelligent technology with enterprise strategy and real-world value."
            maxWidth="5xl"
          />
        </motion.div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] xl:gap-14">
          <ArchitectureGraphicVariantThree />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {systemicArchitectureCards.map((card, index) => (
              <ArchitectureCard key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
