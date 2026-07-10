"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import AnimatedHeadline from "@/components/ui/animated-title";
import { Button } from "@/components/ui/button";
import CornerShape from "../ui/shape";

const IMAGE_CLIP_PATH =
  "polygon(93.94% 0%, 94.95% 0.06%, 95.86% 0.23%, 96.72% 0.50%, 97.52% 0.86%, 98.22% 1.30%, 98.83% 1.82%, 99.29% 2.40%, 99.69% 3.04%, 99.92% 3.72%, 100% 4.44%, 100% 95.56%, 99.92% 96.28%, 99.69% 96.96%, 99.29% 97.60%, 98.83% 98.18%, 98.22% 98.70%, 97.52% 99.14%, 96.72% 99.50%, 95.86% 99.77%, 94.95% 99.94%, 93.94% 100%, 92.44% 100%, 88.32% 100%, 82.04% 100%, 74.13% 100%, 65.07% 100%, 55.38% 100%, 45.56% 100%, 36.09% 100%, 27.51% 100%, 20.29% 100%, 45.13% 100%, 42.95% 99.81%, 41.14% 99.27%, 39.62% 98.48%, 38.28% 97.52%, 37.02% 96.48%, 35.74% 95.43%, 34.36% 94.47%, 32.77% 93.68%, 30.86% 93.15%, 28.55% 92.95%, 6.74% 92.95%, 4.91% 92.83%, 3.45% 92.53%, 2.31% 92.07%, 1.45% 91.51%, 0.84% 90.92%, 0.43% 90.32%, 0.18% 89.77%, 0.05% 89.31%, 0.01% 89.00%, 0% 88.89%, 0% 4.44%, 0.08% 3.72%, 0.31% 3.04%, 0.68% 2.40%, 1.17% 1.82%, 1.78% 1.30%, 2.48% 0.86%, 3.28% 0.50%, 4.14% 0.23%, 5.08% 0.06%, 6.06% 0%)";

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
    <div className="flex h-8 items-end gap-[2px]">
      {bars.map((height, index) => (
        <span
          key={`${height}-${index}`}
          className={`w-2 rounded-t-[2px] ${index < 3 ? "bg-[#b8d4ff]" : "bg-[#49c4e1]"
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
    <g transform="scale(1.08,1.08) translate(-30,-25)">
    <g
      fill="none"
      stroke="#62b8ce"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <path d="M210 1 V148 " />
      <path d="M210 1 H348 " />
      <path d="M348 -50 V1" />
        <path d="M320 300 V360" />
         <path d="M320 300 H390" />
         <path d="M390 210 V310" />
      <path d="M240 128 V120" />
      <path d="M120 360 H180" />
      <path d="M180 360 V460" />
      <path d="M180 460 H360" />
      <path d="M120 360 V160" />
      <path d="M310 372 H410" />
      <path d="M410 372 V440" />
      <path d="M410 460 v160" />
      <path d="M410 620 H600" />
      <path d="M780 450 H600" />
      <path d="M600 450 V620" />
      <path d="M780 450 V0" opacity="0.4" />
    </g>

    <g fill="#62b8ce">
      <circle cx="210" cy="1" r="8" />
      <circle cx="390" cy="210" r="5" />
      <circle cx="320" cy="300" r="8" />
       <circle cx="390" cy="300" r="8" />
      <circle cx="348" cy="1" r="8" />
      <circle cx="348" cy="-50" r="5" />
      <circle cx="340" cy="148" r="8" />
      <circle cx="120" cy="360" r="8" />
      <circle cx="180" cy="360" r="8" />
      <circle cx="180" cy="460" r="8" />
      <circle cx="310" cy="372" r="8" />
      <circle cx="410" cy="372" r="8" />
      <circle cx="600" cy="450" r="8" />
      <circle cx="410" cy="620" r="8" />
      <circle cx="600" cy="620" r="8" />
      <circle cx="780" cy="450" r="8" />
    </g>
  </g>
    </svg>
  );
}

function ChartGlyph() {
  return (
    <div className=" relative">
      <svg
        viewBox="0 0 132 78"
        className="mb-1 h-10 w-14 absolute top-0 left-0 "
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
    <section className="relative overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] pt-32 pb-8 md:pt-36 ">
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
            className="relative mx-auto min-h-[630px] w-full bg-[url('/img/Left-Rectangle.png')] bg-contain bg-[90%] bg-no-repeat"
          >
            <ConnectorLines />


            {/* Large featured image, top-right, plain rounded corners */}

            <div
              className="absolute right-0 top-[0] z-10 h-[328px] w-[274px] overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
              style={{ clipPath: IMAGE_CLIP_PATH }}
            >
              <Image
                src="/img/who-weare.jpg"
                alt="Team reviewing business insights together"
                width={900}
                height={1100}
                className="h-[450px] w-full object-cover object-center"
              />
            </div>


            {/* 98.5% stat card */}
            <div data-aos="fade-up" data-aos-delay="0" data-aos-duration="750" className="absolute left-[1%] top-[16%] z-20 w-[240px] rounded-[24px] border border-[#dce5ee] bg-white px-6 py-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <div className="flex flex-col  gap-4">
                <div className="flex  gap-1 items-end justify-between">

                  <div className="text-[28px] font-semibold leading-none tracking-[-0.06em] text-[#171a23]">
                    98.5%
                  </div>
                  <ChartGlyph />
                </div>
                <p className="mt-2  tracking-[-0.03em] text-slate-600">
                  Prediction accuracy in live production systems
                </p>


              </div>
            </div>

            {/* 50+ stat card, plain rounded corners, overlapping bottom of image */}
            <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="750" className="absolute top-[50%] left-[28%] z-20 w-[240px] rounded-[30px] bg-[#4fa7be] px-6 py-8 text-white shadow-[0_22px_60px_rgba(77,168,191,0.22)]">
              <div className="text-[28px] font-semibold leading-none tracking-[-0.06em]">
                50+
              </div>
              <p className="mt-4  leading-[1.38] tracking-[-0.03em] text-white/95">
                Research publications published annually
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
