"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Star, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import AnimatedHeadline from "@/components/ui/animated-title";
import { Button } from "@/components/ui/button";

const growthRows = [
  { label: "M", width: "92%", level: "Lead", color: "bg-[#F3E8FF] text-[#374151]" },
  { label: "A", width: "70%", level: "Sr", color: "bg-[#E0F2FE] text-[#374151]" },
  { label: "J", width: "58%", level: "Mid+", color: "bg-[#FEF3C7] text-[#374151]" },
  { label: "S", width: "43%", level: "Mid", color: "bg-[#DCFCE7] text-[#374151]" },
  { label: "T", width: "31%", level: "Jr+", color: "bg-[#FEE2E2] text-[#374151]" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative h-auto overflow-hidden bg-[#f1f8fa] pt-24 text-slate-950">
      <Image src="/img/List-overview.svg" width={649} height={651} alt="List Overview" className="absolute right-[0px] top-[8%]" />
      <div className="container mx-auto grid min-h-[631px] items-center gap-10 py-14 lg:grid-cols-[1.08fr_.92fr] lg:py-0">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 lg:pr-4"
        >
          <span className="text-[14px] font-medium uppercase py-2 !px-4 bg-[#e4fbff] inline-block rounded-[50px] !text-[#417f8c] mb-3 ">
            Careers at InvoLead
          </span>

          <AnimatedHeadline
            title="Build What's Next with Data & AI"
            highlightColor="#48a8bd"
            highlightFromWord={4}
  
          />

          <p className="mt-4 max-w-[680px] text-[16px] leading-[1.55]">
            Join a team of consultants, engineers, and data scientists helping global
            organizations solve complex business challenges through AI, advanced
            analytics, and intelligent data solutions. Build technology that creates
            measurable impact where it matters most.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="min-w-[160px]">
              <Link href="#openings">View Open Roles <ArrowRight className="ml-2" /></Link>
            </Button>
            <Button asChild variant="outline" className="min-w-[132px] border-slate-600 bg-white/70">
              <Link href="#culture">Our Culture</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 34 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[470px] w-full max-w-[590px] lg:ml-auto"
        >
          <div className="absolute bottom-[38px] right-[44px] top-[48px] w-[353px] h-[406px] rounded-[30px] border border-[#49b1c8] bg-transparent" />
          {/* 
          <div className="absolute left-[17%] top-[108px] h-[64px] w-[12%] rounded-bl-xl border-b border-l border-[#49b1c8]" />
          <div className="absolute left-[12%] top-[170px] h-[112px] w-[17%] rounded-bl-xl border-b border-l border-[#49b1c8]" />
          <div className="absolute left-[8%] top-[280px] h-[78px] w-[21%] rounded-tl-xl border-l border-t border-[#49b1c8]" /> */}

          <div className="absolute top-[148px] left-[20%] top-[72px] w-[141px] h-[236px] overflow-hidden rounded-[24px]">
            <Image
              src="/career/line-1.svg"
              alt="Line"
              width={141}
              height={236}
            />
          </div>

          <div className="absolute bottom-[38px] right-[3%] top-[72px] w-[61%] overflow-hidden rounded-[24px]">
            <Image
              src="/career/hero.svg"
              alt="InvoLead team celebrating a successful project"
              width={307}
              height={358}

            />
          </div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[10%] -top-8 z-20 w-[205px] rounded-2xl border border-[#62bdd0] bg-white p-4 shadow-[0_12px_32px_rgba(30,100,115,.12)]"
          >
            <div className="flex items-center justify-between text-[10px] font-semibold text-slate-900">
              <span>CAREER GROWTH</span>
              <TrendingUp className="size-3 text-[#9CA3AF]" />
            </div>
            <div className="mt-3 space-y-1.5">
              {growthRows.map((row, index) => (
              <div
                key={row.label}
                className="grid grid-cols-[16px_1fr_28px] items-center gap-2"
              >
                <span className={`grid size-4 place-items-center rounded-full font-medium text-[8px] ${row.color}`}>
                  {row.label}
                </span>

                <span className="h-1 rounded-full bg-slate-100">
                  <span
                    className="block h-full rounded-full bg-[#73c7d7]"
                    style={{ width: row.width }}
                  />
                </span>

                <span
                  className={`text-[9px] text-right font-medium ${
                    index === 0 ? "text-[#46A4B9]" : "text-[#6B7280]"
                  }`}
                >
                  {row.level}
                </span>
              </div>
            ))}
            </div>
            <div className="mt-3 text-right text-[10px] italic text-[#9CA3AF]">Team averages trending +12%</div>
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-11 z-20 flex w-[244px] items-center justify-between rounded-2xl bg-[#46A4B9] p-4 text-white shadow-[0_15px_35px_rgba(36,125,143,.22)]"
          >
            <div>
              <strong className="block text-[39px] font-bold leading-none">50+</strong>
              <span className="mt-2 block text-[14px] leading-5 text-white/85 font-medium">New roles fills in
                <br />2026</span>
            </div>
            <span className="grid size-14 place-items-center rounded-full bg-[#E7F5F8] text-[#46A4B9]">
              <BriefcaseBusiness className="size-6" />
            </span>
          </motion.div>

          <div className="absolute right-8 -bottom-[10px] z-20 w-[145px] rounded-2xl border border-[#63bfd2] bg-white p-4 shadow-[0_12px_30px_rgba(30,100,115,.12)]">
            <div className="flex items-center gap-1">
              <strong className="text-[25px] text-[#1A1A1A]">4.5</strong>
              <span className="ml-1 text-[10px] text-[#808080]">/ 5</span>
            </div>
            <div className="mt-1 flex gap-0.5 text-amber-400">
              {[0, 1, 2, 3, 4].map(i => <Star key={i} className="size-4 fill-current" />)}
            </div>
            <p className="mt-2 text-[8px] text-slate-400">2,481 reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
