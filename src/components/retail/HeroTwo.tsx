'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import gsap from 'gsap';
import {
  ArrowRight,
  BadgeDollarSign,
  BrainCircuit,
  Boxes,
  Megaphone,
  Network,
  PackageSearch,
  ShoppingBag,
  Sparkles,
  Store,
  Tags,
  Truck,
  Users,
  TrendingUp,
  BarChart3,
  BriefcaseBusiness
} from 'lucide-react';
import AnimatedHeadline from '../ui/animated-title';
import { Button } from "@/components/ui/button";
import Link from "next/link";

const nodes = [
  {
    label: 'Marketing Mix',
    icon: Megaphone,
    x: 50,
    y: 6,
    color: '#06B6D4',
  },
  {
    label: 'Demand Forecasting',
    icon: TrendingUp,
    x: 84,
    y: 22,
    color: '#10B981',
  },
  {
    label: 'Inventory Intelligence',
    icon: Boxes,
    x: 92,
    y: 52,
    color: '#7C3AED',
  },
  {
    label: 'Revenue Growth',
    icon: BadgeDollarSign,
    x: 74,
    y: 82,
    color: '#2563EB',
  },
  {
    label: 'Store Performance',
    icon: Store,
    x: 28,
    y: 84,
    color: '#10B981',
  },
  {
    label: 'Customer Insights',
    icon: Users,
    x: 8,
    y: 56,
    color: '#06B6D4',
  },
  {
    label: 'BI Dashboard',
    icon: BarChart3,
    x: 14,
    y: 22,
    color: '#7C3AED',
  },
];

function HeroCopy() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative z-10 max-w-2xl"
    >
      <AnimatedHeadline
        title="Driving Commercial Excellence for Leading CPG & Retail Brands"
        highlightFromWord={5}
        highlightColor="var(--secondary)"
        titleColor="var(--primary)"
      />
      
      <div className="mt-6 max-w-xl leading-8 sm:text-lg">
        We deliver real revenue lifts, optimized margins, and efficient operations through targeted analytics-helping
        teams act on data where it drives the most impact.
      </div>
      <div className="mt-9 flex flex-col gap-4 sm:flex-row">
        
        <Button asChild variant="default">
          <Link href="/contact-us">
            Schedule a Free Consultation
            <ArrowRight className="size-4" />
          </Link>
        </Button>

          <Button asChild variant="outline">
          <Link href="/case-studies">
            See Enterprise Results
              <ArrowRight className="size-4" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
}

function IntelligenceNetwork() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.network-grid', { backgroundPosition: '80px 80px', duration: 9, repeat: -1, ease: 'none' });
      gsap.to('.network-node', {
        y: -10,
        scale: 1.04,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.16, from: 'center' },
        ease: 'sine.inOut',
      });
      gsap.to('.network-beam', {
        strokeDashoffset: -220,
        duration: 2.8,
        repeat: -1,
        stagger: 0.08,
        ease: 'none',
      });
      gsap.to('.network-core-ring', { rotate: 360, transformOrigin: '50% 50%', duration: 18, repeat: -1, ease: 'none' });
      gsap.to('.network-orbit', { rotate: -360, transformOrigin: '50% 50%', duration: 26, repeat: -1, ease: 'none' });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative mx-auto aspect-square w-full max-w-[610px] [perspective:1200px]">
      
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 600 600">
        <defs>
          <linearGradient id="network-line" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#06B6D4" stopOpacity="0.9" />
            <stop offset="0.55" stopColor="#7C3AED" stopOpacity="0.75" />
            <stop offset="1" stopColor="#10B981" stopOpacity="0.85" />
          </linearGradient>
          <filter id="network-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {nodes.map((node) => (
          <path
            key={node.label}
            className="network-beam"
            d={`M300 300 C ${(300 + node.x * 6) / 2} ${(300 + node.y * 6) / 2 - 70}, ${node.x * 6} ${node.y * 6}, ${node.x * 6} ${node.y * 6}`}
            fill="none"
            stroke="url(#network-line)"
            strokeDasharray="12 18"
            strokeLinecap="round"
            strokeWidth="2"
            filter="url(#network-glow)"
            opacity="0.72"
          />
        ))}
      </svg>

      <div className="network-orbit absolute inset-[13%] rounded-full border border-dashed border-cyan-300/20" />
      <div className="network-orbit absolute inset-[25%] rounded-full border border-dashed border-purple-300/20" />

      <div className="absolute left-1/2 top-1/2 z-20 grid size-30 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[24px] border border-white/15 bg-white text-center shadow-[0_30px_120px_rgba(37,99,235,0.38)] backdrop-blur-2xl">
        <div className="network-core-ring absolute inset-[-14px] rounded-[38px] border border-cyan-300/30" />
        <div className="absolute inset-3 rounded-[24px] bg-[radial-gradient(circle,rgba(6,182,212,0.24),transparent_72%)]" />
        <BriefcaseBusiness className="relative mx-auto size-9 text-secondary" />
        <div className="relative mt-0 text-sm font-semibold ">AI Retail Intelligence</div>
      </div>

      {nodes.map((node, index) => {
        const Icon = node.icon;

        return (
          <div
            key={node.label}
            className="network-node absolute z-10 flex min-w-[112px] -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-3xl border border-secondary/40 bg-white px-3.5 py-3 text-xs font-semibold shadow-[0_22px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <span className="grid size-8 shrink-0 place-items-center rounded-2xl" style={{ backgroundColor: `${node.color}22`, color: node.color }}>
              <Icon className="size-4" />
            </span>
            {node.label}
            <span
              className="absolute -right-1 -top-1 size-3 rounded-full"
              style={{ backgroundColor: node.color, boxShadow: `0 0 18px ${node.color}` }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function HeroTwo() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 70, damping: 24 });
  const smoothY = useSpring(mouseY, { stiffness: 70, damping: 24 });
  const x = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const y = useTransform(smoothY, [-0.5, 0.5], [-12, 12]);

  return (
    <section
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
      }}
      className="relative isolate overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] px-6 pt-28 pb-10 lg:min-h-screen lg:px-10"
    >
      
      <div className="mx-auto grid container items-center gap-14 lg:grid-cols-[0.92fr_1.08fr]">
        <HeroCopy />
        <motion.div style={{ x, y }} className="relative z-10">
          <IntelligenceNetwork />
        </motion.div>
      </div>
    </section>
  );
}
