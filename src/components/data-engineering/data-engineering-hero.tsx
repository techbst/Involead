"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Check,
  Cloud,
  Database,
  HardDrive,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const trust = ["HIPAA Ready", "GxP Ready", "SOC 2", "FDA 21 CFR Part 11"];

function FlowLine({ d, delay = 0 }: { d: string; delay?: number }) {
  return (
    <>
      <motion.path
        d={d}
        fill="none"
        stroke="rgba(95,176,194,.35)"
        strokeWidth="1.5"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay }}
      />
      <motion.circle r="4" fill="#67e8f9" filter="url(#packetGlow)">
        <animateMotion dur="3s" begin={`${delay}s`} repeatCount="indefinite" path={d} />
      </motion.circle>
    </>
  );
}

function InfrastructureVisual() {
  const visualRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 90, damping: 20 });
  const y = useSpring(0, { stiffness: 90, damping: 20 });

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || !visualRef.current) return;
    const bounds = visualRef.current.getBoundingClientRect();
    x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 14);
    y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 10);
  }

  return (
    <div
      ref={visualRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => { x.set(0); y.set(0); }}
      className="relative mx-auto h-[520px] w-full max-w-[720px] sm:h-[600px]"
      aria-label="Animated data engineering infrastructure connecting cloud, pipelines, databases and analytics"
      role="img"
    >
      <div className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgba(95,176,194,.14),transparent_67%)] blur-2xl" />
      <motion.div style={{ x, y }} className="absolute inset-0">
        <svg viewBox="0 0 720 600" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          <defs>
            <filter id="packetGlow"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            <linearGradient id="pipeGradient"><stop stopColor="#5fb0c2"/><stop offset="1" stopColor="#8b5cf6"/></linearGradient>
          </defs>
          <FlowLine d="M 110 305 C 185 305 190 165 284 165" />
          <FlowLine d="M 110 305 C 185 305 205 420 292 420" delay={0.5} />
          <FlowLine d="M 334 165 C 415 165 410 300 486 300" delay={0.8} />
          <FlowLine d="M 342 420 C 425 420 420 300 486 300" delay={1.1} />
          <FlowLine d="M 540 300 C 610 300 602 175 664 175" delay={1.4} />
          <FlowLine d="M 540 300 C 610 300 602 425 664 425" delay={1.7} />
          <motion.path d="M 145 520 H 590" stroke="url(#pipeGradient)" strokeWidth="2" strokeDasharray="8 10" animate={{ strokeDashoffset: [0, -36] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
        </svg>

        <motion.div animate={reduceMotion ? undefined : { y: [0, -10, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[2%] top-[43%] w-32 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_22px_60px_rgba(15,23,42,.14)]">
          <div className="flex items-center gap-2"><Server className="size-5 text-secondary"/><span className="text-xs font-bold text-slate-950">Sources</span></div>
          <div className="mt-3 space-y-1.5">{[78,55,88].map((n,i)=><div key={i} className="h-1.5 rounded-full bg-slate-100"><motion.div initial={{width:0}} animate={{width:`${n}%`}} transition={{delay:.7+i*.15}} className="h-full rounded-full bg-secondary"/></div>)}</div>
        </motion.div>

        <motion.div animate={reduceMotion ? undefined : { y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute left-[34%] top-[19%] grid size-24 place-items-center rounded-[1.7rem] border border-cyan-200 bg-white shadow-[0_0_45px_rgba(95,176,194,.25)]">
          <Cloud className="size-10 text-secondary" />
          <span className="absolute -bottom-7 text-[10px] font-bold uppercase tracking-[.14em] text-slate-500">Cloud ingest</span>
          <motion.span className="absolute inset-0 rounded-[1.7rem] border border-secondary" animate={{ scale: [1, 1.25], opacity: [.5, 0] }} transition={{ duration: 2.4, repeat: Infinity }} />
        </motion.div>

        <motion.div animate={reduceMotion ? undefined : { x: [0, 6, 0] }} transition={{ duration: 4.2, repeat: Infinity }} className="absolute bottom-[22%] left-[35%] rounded-2xl border border-violet-200 bg-white p-4 shadow-xl">
          <div className="flex items-center gap-2"><Workflow className="size-6 text-violet-600"/><span className="text-xs font-bold text-slate-950">ETL / ELT</span></div>
          <div className="mt-3 flex gap-1">{[0,1,2,3].map(i=><motion.span key={i} animate={{opacity:[.2,1,.2]}} transition={{duration:1.6,repeat:Infinity,delay:i*.2}} className="h-1.5 w-7 rounded-full bg-violet-400"/>)}</div>
        </motion.div>

        <motion.div animate={reduceMotion ? undefined : { scale: [1, 1.025, 1] }} transition={{ duration: 3.6, repeat: Infinity }} className="absolute left-[64%] top-[42%] grid size-28 place-items-center rounded-full border border-cyan-300/50 bg-[#071722] text-white shadow-[0_0_70px_rgba(95,176,194,.34)]">
          <BrainCircuit className="size-11 text-cyan-300" />
          <span className="absolute bottom-4 text-[9px] font-bold tracking-[.16em] text-cyan-100">AI PROCESSING</span>
        </motion.div>

        <motion.div animate={reduceMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 4.8, repeat: Infinity, delay:.4 }} className="absolute right-0 top-[18%] w-32 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
          <div className="flex gap-1"><Database className="size-5 text-secondary"/><HardDrive className="size-5 text-violet-500"/></div><p className="mt-3 text-xs font-bold text-slate-950">Lakehouse</p><p className="mt-1 text-[10px] text-slate-500">Governed · unified</p>
        </motion.div>

        <motion.div animate={reduceMotion ? undefined : { y: [0, 8, 0] }} transition={{ duration: 5.2, repeat: Infinity, delay:1 }} className="absolute bottom-[16%] right-0 w-36 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
          <div className="flex items-center justify-between"><span className="text-xs font-bold text-slate-950">Live insights</span><BarChart3 className="size-4 text-emerald-500"/></div><div className="mt-4 flex h-14 items-end gap-1.5">{[42,70,55,88,68,95].map((h,i)=><motion.span key={i} initial={{height:0}} animate={{height:`${h}%`}} transition={{delay:1+i*.08}} className="flex-1 rounded-t bg-gradient-to-t from-secondary to-cyan-300"/>)}</div>
        </motion.div>
      </motion.div>

      
    </div>
  );
}

export default function DataEngineeringHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7fafb] pt-15">
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,.035)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" /> */}
      <div className="absolute -left-40 top-10 size-[30rem] rounded-full bg-cyan-200/25 blur-3xl" />
      <div className="container relative grid min-h-[680px] items-center gap-8 py-14 lg:grid-cols-[45fr_55fr] lg:gap-4">
        <motion.div variants={{ show: { transition: { staggerChildren: .11 } } }} initial="hidden" animate="show" className="relative z-10">
          
          <motion.h1 variants={reveal} className="mt-6 max-w-3xl text-[clamp(2.75rem,5.3vw,5.35rem)] font-bold leading-[.96] tracking-[-.052em] text-slate-950">
            AI-Powered Data Engineering That Delivers <span className="text-secondary">40% Faster Insights</span>
          </motion.h1>
          <motion.p variants={reveal} className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            HIPAA-Compliant, GxP-Ready data platforms for Life Sciences, Retail and Telecom — built in 90 days, not years.
          </motion.p>
          <motion.div variants={reveal} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/contact-us">Book a Free Data Stack Review <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/our-solutions">Explore Solutions <ArrowRight className="size-4 transition-transform group-hover:translate-x-1"/></Link>
            </Button>
          </motion.div>
          
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 35, scale: .97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: .8, delay: .2 }} className="min-w-0">
          <InfrastructureVisual />
        </motion.div>
      </div>
     
    </section>
  );
}
