"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CircleDollarSign,
  Gauge,
  LineChart,
  PieChart,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import AnimatedHeadline from "@/components/ui/animated-title";
import { Button } from "@/components/ui/button";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const kpis = [
  { label: "ROI", value: "+15%", icon: TrendingUp, className: "left-0 top-8" },
  { label: "Cost", value: "-10%", icon: TrendingDown, className: "right-0 top-28" },
  { label: "Revenue", value: "+10%", icon: CircleDollarSign, className: "bottom-6 left-[18%]" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] pt-32 pb-16 ">
      

      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.02fr]">
          <motion.div variants={stagger} initial="hidden" animate="show" className="max-w-3xl">
            
            <AnimatedHeadline
              title="AI Empowered Marketing Mix approach for Tracking In-flight Campaign Performance"
              highlightFromWord={8}
              highlightColor="#5fb0c2"
              titleColor="#0f172a"
              className="text-[42px] md:text-[64px]"
            />

            <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Marketing Mix Optimization helps estimate the impact of past marketing campaigns on sales, footfalls, and recommends the right budget mix across marketing tactics for future growth.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/our-solutions">
                  Explore Solutions
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact-us">Talk to an Expert</Link>
              </Button>
            </motion.div>
          </motion.div>

          <MarketingDashboardVisual />
        </div>
      </div>
    </section>
  );
}

function MarketingDashboardVisual() {
  const streamRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let active = true;
    let context: { revert: () => void } | undefined;

    import("gsap").then(({ gsap }) => {
      if (!active || !streamRef.current) return;

      context = gsap.context(() => {
        gsap.to(".data-stream", {
          xPercent: 120,
          opacity: 0.9,
          duration: 3.5,
          stagger: 0.35,
          repeat: -1,
          ease: "none",
        });
        gsap.to(".ai-particle", {
          y: -18,
          opacity: 0.35,
          duration: 2.6,
          stagger: 0.22,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }, streamRef);
    });

    return () => {
      active = false;
      context?.revert();
    };
  }, []);

  return (
    <motion.div
      ref={streamRef}
      initial={{ opacity: 0, scale: 0.94, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.18 }}
      className="relative mx-auto min-h-[560px] w-full max-w-[660px] [perspective:1200px]"
      aria-hidden="true"
    >
      <div className="absolute inset-8 rounded-[2rem] bg-[radial-gradient(circle_at_50%_48%,rgba(95,176,194,0.30),transparent_58%)] blur-2xl" />
      {[0, 1, 2, 3, 4].map((item) => (
        <span
          key={item}
          className="data-stream absolute left-[-30%] h-px w-44 bg-[linear-gradient(90deg,transparent,#5fb0c2,transparent)]"
          style={{ top: `${18 + item * 15}%` }}
        />
      ))}
      {[0, 1, 2, 3, 4, 5].map((item) => (
        <span
          key={item}
          className="ai-particle absolute size-2 rounded-full bg-secondary shadow-[0_0_20px_rgba(255,146,85,0.85)]"
          style={{ left: `${18 + item * 12}%`, top: `${22 + (item % 3) * 18}%` }}
        />
      ))}

      <motion.article
        animate={{ y: [0, -14, 0], rotateX: [7, 10, 7], rotateY: [-10, -5, -10] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute left-6 top-8 w-[76%] rounded-2xl border border-white/80 bg-white/68 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="grid size-11 place-items-center rounded-xl bg-[#5fb0c2]/15 text-[#237487]">
              <LineChart className="size-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-slate-950">Campaign Performance</h3>
              <p className="text-xs text-slate-500">ROI growth and channel attribution</p>
            </div>
          </div>
          <span className="rounded-full bg-secondary/12 px-3 py-1 text-xs font-bold text-primary">Live model</span>
        </div>

        <svg viewBox="0 0 360 150" className="mt-6 h-40 w-full overflow-visible">
          <path d="M18 124 H344" stroke="#e2e8f0" strokeWidth="2" />
          <path d="M18 94 H344" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="6 8" />
          <path d="M18 64 H344" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="6 8" />
          <motion.path
            d="M20 118 C68 82, 90 102, 126 68 S194 54, 230 42 S292 22, 342 18"
            fill="none"
            stroke="#000"
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          />
          {[58, 96, 142, 188, 238, 292].map((x, index) => (
            <motion.rect
              key={x}
              x={x}
              y={58 + (index % 2) * 18}
              width="18"
              height={66 - index * 4}
              rx="9"
              fill="#5fb0c2"
              initial={{ scaleY: 0.2, transformOrigin: "bottom" }}
              animate={{ scaleY: [0.65, 1, 0.65] }}
              transition={{ duration: 1.8, delay: index * 0.12, repeat: Infinity }}
            />
          ))}
        </svg>
      </motion.article>

      
      <motion.article
        animate={{ y: [0, 12, 0], rotateY: [8, 14, 8] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute bottom-20 right-2 w-[48%] rounded-2xl border border-white/80 bg-white/70 p-5 shadow-[0_26px_80px_rgba(15,23,42,0.15)] backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <PieChart className="size-5 text-[#7c3aed]" />
          <h3 className="text-sm font-bold text-slate-950">Media Mix</h3>
        </div>
        <div className="mt-5 flex items-center gap-5">
          <div className="grid size-24 place-items-center rounded-full bg-[conic-gradient(#5fb0c2_0_38%,#ff9255_38%_63%,#2563eb_63%_82%,#7c3aed_82%_100%)]">
            <div className="grid size-14 place-items-center rounded-full bg-white text-sm font-bold text-slate-950">4x</div>
          </div>
          <div className="grid gap-2 text-xs font-semibold text-slate-600">
            <span>Search 38%</span>
            <span>Social 25%</span>
            <span>Retail 19%</span>
          </div>
        </div>
      </motion.article>

      <motion.article
        animate={{ y: [0, -10, 0], rotateY: [-8, -13, -8] }}
        transition={{ duration: 5.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute bottom-6 left-0 w-[43%] rounded-2xl border border-white/80 bg-white/72 p-5 shadow-[0_26px_80px_rgba(15,23,42,0.14)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <BarChart3 className="size-5 text-[#237487]" />
          <Gauge className="size-4 text-[#000]" />
        </div>
        <h3 className="mt-4 text-sm font-bold text-slate-950">Spend Optimizer</h3>
        <div className="mt-5 grid gap-3">
          {[70, 48, 82].map((width, index) => (
            <div key={width} className="h-2 rounded-full bg-slate-200">
              <motion.span
                animate={{ width: [`${width - 16}%`, `${width}%`, `${width - 16}%`] }}
                transition={{ duration: 2, delay: index * 0.15, repeat: Infinity }}
                className="block h-full rounded-full bg-[linear-gradient(90deg,#5fb0c2,#2563eb)]"
              />
            </div>
          ))}
        </div>
      </motion.article>

      {kpis.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            animate={{ y: [0, index === 1 ? 12 : -12, 0] }}
            transition={{ duration: 4.5 + index * 0.35, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className={`absolute ${item.className} flex items-center gap-3 rounded-2xl border border-white/80 bg-white/78 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl`}
          >
            <span className="grid size-10 place-items-center rounded-xl bg-[#5fb0c2]/12 text-[#237487]">
              <Icon className="size-5" />
            </span>
            <span>
              <span className="block text-lg font-bold text-slate-950">{item.value}</span>
              <span className="block text-xs font-semibold text-slate-500">{item.label}</span>
            </span>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
