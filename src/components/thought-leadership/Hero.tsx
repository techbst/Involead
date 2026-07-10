"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import AnimatedHeadline from "@/components/ui/animated-title";
import { Button } from "@/components/ui/button";
import CornerShape from "../ui/shape";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function MiniBars() {
  const bars = [28, 34, 38, 44, 54, 63];

  return (
    <div className="flex h-14 items-end gap-1.5">
      {bars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className={`w-3 rounded-t-[4px] ${
            index < 3 ? "bg-[#b8d4ff]" : "bg-[#49c4e1]"
          }`}
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

function ConnectorLines() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 860 700"
      className="absolute inset-0 h-full w-full"
    >
      <g fill="none" stroke="#62b8ce" strokeWidth="2.5" strokeLinecap="round">
        <path d="M210 76 V148 H340" />
        <path d="M340 148 V0" opacity="0.5" />
        <path d="M60 372 V500 H160" />
        <path d="M160 500 V620" />
        <path d="M310 372 H410" />
        <path d="M410 372 V440" />
        <path d="M410 620 H660" />
        <path d="M660 620 V520 H828" />
        <path d="M828 520 V0" opacity="0.4" />
      </g>

      <g fill="#62b8ce">
        <circle cx="210" cy="76" r="10" />
        <circle cx="340" cy="148" r="10" />
        <circle cx="60" cy="372" r="10" />
        <circle cx="160" cy="500" r="10" />
        <circle cx="160" cy="620" r="10" />
        <circle cx="310" cy="372" r="10" />
        <circle cx="410" cy="372" r="10" />
        <circle cx="410" cy="620" r="10" />
        <circle cx="660" cy="620" r="10" />
        <circle cx="828" cy="520" r="10" />
      </g>
    </svg>
  );
}

function ChartGlyph() {
  return (
    <div className="pt-1">
      <svg
        viewBox="0 0 132 78"
        className="mb-1 h-11 w-24 sm:h-12 sm:w-28"
        aria-hidden="true"
      >
        <path
          d="M6 30 L24 18 L45 22 L68 6 L90 12 L124 -10"
          fill="none"
          stroke="#9bdff0"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <MiniBars />
    </div>
  );
}

export default function ThoughtLeadershipHero() {
  const reduceMotion = !!useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] pt-32 pb-10 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(125,197,215,0.12),transparent_34%)]" />

      <div className="container relative mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr]">
          <motion.div
            initial={reduceMotion ? "show" : "hidden"}
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
            className="relative z-10"
          >
            <div className="text-[14px] font-medium uppercase py-2 !px-4 bg-[#e4fbff] inline-block rounded-[50px] !text-[#417f8c] mb-3 text-slate-950">
              Thought Leadership
            </div>

            <div className="mt-7 max-w-4xl">
              <AnimatedHeadline
                title="Perspectives That Shape Smarter Business Decisions"
                highlightFromWord={3}
                highlightColor="#1f9fc1"
                titleColor="#0f172a"
              />
            </div>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg"
            >
              Explore research, industry perspectives, and expert insights from
              leaders in AI, data science, analytics, and enterprise
              transformation.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button asChild variant="default">
                <Link href="/contact-us">
                  Talk to Our Experts
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/our-solutions">
                  Explore Our Solutions
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto min-h-[560px] w-full max-w-[780px] lg:min-h-[700px]"
          >
            <ConnectorLines />

           
            {/* Large featured image, top-right, plain rounded corners */}
            <div className="absolute right-0 top-[3%] z-10 h-[62%] w-[52%] overflow-hidden rounded-[36px] shadow-[0_34px_90px_rgba(69,143,181,0.18)]">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(84,145,255,0.16),rgba(84,145,255,0.02))]" />
              <Image
                src="/img/over-hero-top.jpg"
                alt="Featured thought leadership visual"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* 98.5% stat card */}
            <div className="absolute left-[1%] top-[20%] z-20 w-[40%] rounded-[28px] border border-[#dce5ee] bg-white px-7 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[54px] font-semibold leading-none tracking-[-0.06em] text-[#171a23]">
                    98.5%
                  </div>
                  <p className="mt-10 max-w-[340px] text-[22px] leading-[1.35] tracking-[-0.03em] text-[#5e677f]">
                    Prediction accuracy in live production systems
                  </p>
                </div>

                <ChartGlyph />
              </div>
            </div>

            {/* 50+ stat card, plain rounded corners, overlapping bottom of image */}
            <div className="absolute bottom-[8%] left-[26%] z-20 w-[38%] rounded-[30px] bg-[#4fa7be] px-9 py-10 text-white shadow-[0_22px_60px_rgba(77,168,191,0.22)]">
              <div className="text-[56px] font-semibold leading-none tracking-[-0.06em]">
                50+
              </div>
              <p className="mt-8 max-w-[320px] text-[22px] leading-[1.38] tracking-[-0.03em] text-white/95">
                Research publications published annually
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}