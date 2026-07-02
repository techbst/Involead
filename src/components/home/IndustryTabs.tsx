"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import SectionReveal from "./SectionReveal";
import { SectionHeader } from "@/components/ui/section-header";
import CornerShape from "../ui/shape";
interface IndustryCard {
  title: string;
  description: string;
  image: string;
  metrics: { value: string; label: string }[];
  tint: string;
}

interface Industry {
  name: string;
  cards: IndustryCard[];
}

const industries: Industry[] = [
{
name: "Healthcare",
cards: [
{
title: "AI Transforming Patient Care And Operational Efficiency",
description:
"We deploy intelligent workflows that improve care coordination, accelerate diagnostics support, and reduce operational waste.",
image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+20-30%", label: "Faster Care" },
{ value: "-18-25%", label: "Lower Costs" },
{ value: "+25-35%", label: "Better Outcomes" },
],
tint: "bg-[#EAF7EB]",
},
{
title: "AI-Powered Clinical Workflow Automation",
description:
"Automate scheduling, documentation, and care management processes to improve operational efficiency.",
image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+22-35%", label: "Efficiency" },
{ value: "-15-28%", label: "Admin Time" },
{ value: "+20-32%", label: "Patient Access" },
],
tint: "bg-[#E7F4FB]",
},
{
title: "Predictive Analytics For Population Health",
description:
"Identify high-risk patients and improve preventive care through predictive intelligence.",
image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+18-30%", label: "Risk Detection" },
{ value: "-20-25%", label: "Readmissions" },
{ value: "+24-36%", label: "Care Quality" },
],
tint: "bg-[#F2EEF8]",
},
{
title: "Remote Patient Monitoring Intelligence",
description:
"Track patient health in real time and enable proactive interventions through AI insights.",
image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+28-40%", label: "Monitoring" },
{ value: "-12-22%", label: "Hospital Visits" },
{ value: "+18-30%", label: "Engagement" },
],
tint: "bg-[#FAF7D9]",
},
{
title: "Revenue Cycle And Claims Optimization",
description:
"Improve claims processing and accelerate reimbursements with AI automation.",
image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+20-33%", label: "Revenue" },
{ value: "-18-30%", label: "Claim Errors" },
{ value: "+25-38%", label: "Processing Speed" },
],
tint: "bg-[#ECEEFA]",
},
],
},

{
name: "Pharma",
cards: [
{
title: "AI Accelerating Drug Discovery And Clinical Operations",
description:
"AI-led research workflows improve evidence discovery, clinical review speed, and submission confidence.",
image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+15-28%", label: "Faster Discovery" },
{ value: "-20-35%", label: "Reduced Delays" },
{ value: "+30-45%", label: "Higher Efficiency" },
],
tint: "bg-[#FDECEC]",
},
{
title: "Commercial Intelligence For Medical Affairs",
description:
"Connect field insights, claims data, and market signals into governed commercial intelligence.",
image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+18-26%", label: "Better Signals" },
{ value: "-12-22%", label: "Manual Review" },
{ value: "+21-34%", label: "Faster Action" },
],
tint: "bg-[#0e1a16]",
},
{
title: "Predictive Supply For Regulated Pharma",
description:
"Forecast inventory, cold-chain risk, and demand shifts across regulated distribution networks.",
image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+18-32%", label: "Availability" },
{ value: "-15-30%", label: "Supply Risk" },
{ value: "+20-38%", label: "Delivery Speed" },
],
tint: "bg-[#E7F4FB]",
},
{
title: "AI-Powered Clinical Trial Optimization",
description:
"Improve patient recruitment, monitoring, and trial outcomes using predictive analytics.",
image: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+22-34%", label: "Enrollment" },
{ value: "-18-29%", label: "Trial Delays" },
{ value: "+20-33%", label: "Success Rate" },
],
tint: "bg-[#F2EEF8]",
},
{
title: "Regulatory Compliance Automation",
description:
"Automate documentation, audits, and reporting across complex regulatory environments.",
image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+24-36%", label: "Compliance Speed" },
{ value: "-20-30%", label: "Audit Risk" },
{ value: "+18-28%", label: "Accuracy" },
],
tint: "bg-[#FAF7D9]",
},
],
},

{
name: "Retail & CPG",
cards: [
{
title: "Personalized Retail Growth With AI Decisioning",
description:
"Forecast demand, personalize engagement, and optimize inventory with real-time data products.",
image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+18-31%", label: "Sales Lift" },
{ value: "-14-24%", label: "Churn Risk" },
{ value: "+25-35%", label: "Repeat Sales" },
],
tint: "bg-[#ECEEFA]",
},
{
title: "Supply Intelligence Across Retail Networks",
description:
"Connect customer, store, SKU, and distribution data into a responsive operating model.",
image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+21-34%", label: "Faster Planning" },
{ value: "-18-29%", label: "Stockouts" },
{ value: "+20-32%", label: "Margin Lift" },
],
tint: "bg-[#ECEEFA]",
},
{
title: "AI For Modern Consumer Operations",
description:
"Automate demand sensing, category analytics, and campaign performance intelligence.",
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+17-29%", label: "Forecast Accuracy" },
{ value: "-15-25%", label: "Waste" },
{ value: "+19-33%", label: "Conversion" },
],
tint: "bg-[#FDECEC]",
},
{
title: "Customer Journey Analytics",
description:
"Understand customer behavior across channels and optimize every touchpoint.",
image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+20-30%", label: "Engagement" },
{ value: "-12-20%", label: "Drop-offs" },
{ value: "+18-28%", label: "Loyalty" },
],
tint: "bg-[#EAF7EB]",
},
{
title: "Dynamic Pricing And Promotion Intelligence",
description:
"Optimize pricing strategies using demand forecasting and competitive insights.",
image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+22-35%", label: "Revenue" },
{ value: "-10-18%", label: "Discount Waste" },
{ value: "+20-29%", label: "Profitability" },
],
tint: "bg-[#E7F4FB]",
},
],
},

{
name: "Manufacturing",
cards: [
{
title: "AI Optimizing Production, Supply Chains, And Factory Operations",
description:
"Deploy AI systems that optimize production planning, monitor equipment health in real time, and improve delivery.",
image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+18-32%", label: "Higher Output" },
{ value: "-15-30%", label: "Less Downtime" },
{ value: "+20-38%", label: "Faster Delivery" },
],
tint: "bg-[#F2EEF8]",
},
{
title: "Predictive Quality Across Production Lines",
description:
"Computer vision and streaming analytics catch quality drift before production loss compounds.",
image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+22-36%", label: "QA Speed" },
{ value: "-20-35%", label: "Rework" },
{ value: "+19-31%", label: "OEE" },
],
tint: "bg-[#EAF7EB]",
},
{
title: "Factory Data Fabric For Connected Plants",
description:
"Unify machine, operator, supplier, and quality signals into production intelligence.",
image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+24-38%", label: "Visibility" },
{ value: "-16-27%", label: "Delays" },
{ value: "+20-30%", label: "Throughput" },
],
tint: "bg-[#E7F4FB]",
},
{
title: "Computer Vision For Defect Detection",
description:
"Detect product defects instantly with AI-powered visual inspection systems.",
image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+30-45%", label: "Detection Rate" },
{ value: "-22-35%", label: "Defects" },
{ value: "+18-27%", label: "Quality Score" },
],
tint: "bg-[#F2EEF8]",
},
{
title: "AI-Driven Maintenance Intelligence",
description:
"Predict equipment failures before they happen and optimize maintenance schedules.",
image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",
metrics: [
{ value: "+25-40%", label: "Uptime" },
{ value: "-20-32%", label: "Failures" },
{ value: "+16-28%", label: "Asset Life" },
],
tint: "bg-[#EAF7EB]",
},
],
},
];


// Card width matches original max-w-[400px]
const CARD_W = 400;

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous industry" : "Next industry"}
      className="grid size-11 place-items-center rounded-full border border-white/80 p-0 text-white transition duration-300 hover:-translate-y-1 hover:border-[#5fb0c2] hover:bg-[#5fb0c2] sm:size-12"
    >
      <Icon className="size-6" />
    </button>
  );
}

export default function IndustryTabs() {
  const [activeIndustry, setActiveIndustry] = useState(0);

  // activeCard is the index of the card currently in center
  const activeCardRef = useRef(0);
  const busyRef = useRef(false);
  const gsapRef = useRef<typeof import("gsap").gsap | null>(null);
  // 3 refs, one per card slot
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stageRef = useRef<HTMLDivElement>(null);

  const applyLayout = useCallback((animate: boolean) => {
    const gsap = gsapRef.current;
    if (!gsap) return;

    const stageW = stageRef.current?.offsetWidth ?? 1000;
    const cx = stageW / 2 - CARD_W / 2;
    const spread = CARD_W;

    const curr = activeCardRef.current;
    const N = cardRefs.current.length;

    cardRefs.current.forEach((el, i) => {
      if (!el) return;

      let offset = i - curr;
      if (offset > N / 2) offset -= N;
      if (offset < -N / 2) offset += N;

      const isCenter = offset === 0;
      const isLeft = offset < 0;
      const x = cx + offset * spread;
      const y = isCenter ? 0 : 40;
      const rotation = isCenter ? 0 : isLeft ? -20 : 20;
      const scale = isCenter ? 1 : 0.92;
      const opacity = Math.abs(offset) > 1 ? 0 : isCenter ? 1 : 0.6;
      const zIndex = 10 - Math.abs(offset);

      const props = {
        x,
        y,
        rotation,
        scale,
        opacity,
        zIndex,
        transformOrigin: "bottom center",
      };

      if (animate) {
        gsap.to(el, {
          ...props,
          duration: 0.65,
          ease: "power3.out",
          overwrite: true,
          onComplete: isCenter
            ? () => {
                busyRef.current = false;
              }
            : undefined,
        });
      } else {
        gsap.set(el, props);
      }
    });
  }, []);

  useEffect(() => {
    let cancelled = false;

    const loadGsap = async () => {
      const { gsap } = await import("gsap");
      if (cancelled) return;
      gsapRef.current = gsap;
      applyLayout(false);
    };

    void loadGsap();

    return () => {
      cancelled = true;
      gsapRef.current = null;
    };
  }, [applyLayout]);

  useEffect(() => {
    let frame = 0;
    const handler = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => applyLayout(false));
    };

    window.addEventListener("resize", handler);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handler);
    };
  }, [applyLayout]);

  // When industry changes reset to card 0 and re-layout
  useEffect(() => {
    activeCardRef.current = 0;
    busyRef.current = false;
    const frame = window.requestAnimationFrame(() => applyLayout(false));
    return () => window.cancelAnimationFrame(frame);
  }, [activeIndustry, applyLayout]);

  const goToCard = (direction: 1 | -1) => {
    if (busyRef.current) return;
    const N = industries[activeIndustry].cards.length;
    activeCardRef.current = ((activeCardRef.current + direction) % N + N) % N;
    busyRef.current = true;
    applyLayout(true);
  };

  const switchIndustry = (idx: number) => {
    setActiveIndustry(idx);
    // reset handled in useEffect above
  };

  const cards = industries[activeIndustry].cards;

  return (
    <section className="relative overflow-hidden bg-black py-15 text-white">
      <SectionReveal className="mx-auto container">
        
         <SectionHeader
                    eyebrow={"AI-Driven Innovation"}
                    title="Transforming Industries with AI & Data"
                    description="  Enabling smarter decisions, operational efficiency, and sustainable
            growth through intelligent solutions."
                    align="center"
                    textColor="white"
                    maxWidth="4xl"
                  />
        {/* <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(2.6rem,5vw,5.2rem)] font-bold leading-tight tracking-normal"
          >
            
          </motion.h2>
          <p className="mx-auto mt-7 max-w-md text-lg text-white/80">
          
          </p>
        </div> */}

        {/* Tab row — arrows slide cards, tabs switch industry */}
        <div className="mt-12 flex items-center justify-center gap-2 max-lg:flex-wrap">
          <ArrowButton direction="prev" onClick={() => goToCard(-1)} />
          {industries.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => switchIndustry(index)}
              className={`rounded-full border px-4 py-3 text-[11px] font-medium tracking-wider uppercase tracking-normal transition duration-300 sm:px-6 sm:text-xs ${
                index === activeIndustry
                  ? "border-[#5fb0c2] bg-[#5fb0c2] text-white"
                  : "border-white bg-transparent text-white hover:border-[#5fb0c2]"
              }`}
            >
              {item.name}
            </button>
          ))}
          <ArrowButton direction="next" onClick={() => goToCard(1)} />
        </div>

        {/* Stage: overflow-hidden clips side cards, height matches min-h-[500px] + padding */}
        <div
          ref={stageRef}
          className="relative mt-10 mb-10 h-[540px] w-full overflow-visible sm:mb-20"
        >
          {cards.map((card, i) => (
            <div
              key={card.title}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`absolute top-0`}
              style={{ width: CARD_W, willChange: "transform" }}
            >
              {/* ── Exact original card markup, zero changes ── */}
              <article
                className={`relative min-h-[500px] w-full max-w-[400px] shrink-0 rounded-[24px] px-5 pt-7 pb-5 text-black shadow-2xl shadow-black/40 sm:pt-8 ${card.tint}`}
              >
                <div className="flex gap-2">
                  <span className="mt-1  w-1 shrink-0 bg-[#5fb0c2]" />
                  <h3 className="!text-[20px] font-medium tracking-normal">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-4 !text-[16px] line-clamp-2 text-black/80">
                  {card.description}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-6">
                  {card.metrics.map((metric) => (
                    <div key={metric.label}>
                      <strong className="block text-[18px] font-semibold leading-none">
                        {metric.value}
                      </strong>
                      <span className="mt-2 block text-[13px] leading-snug">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-x-5 bottom-5 h-[190px] overflow-hidden rounded-[24px] sm:inset-x-8 sm:h-[200px]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="520px"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <button
                  type="button"
                  aria-label={`Open ${card.title}`}
                  className="absolute right-2 bottom-2 z-10 grid size-16 rotate-45 place-items-center rounded-full border-[10px] border-white bg-[#5fb0c2] text-white transition duration-300 hover:bg-black sm:size-[68px] sm:border-[14px]"
                >
                  <ArrowUpRight className="size-4" />
                </button>
              </article>
            </div>
          ))}
        </div>

      </SectionReveal>
      <div className="absolute -bottom-[7px] left-0 w-[290px] bg-[#fff] ">
      <CornerShape color="#000" />
    </div>
    </section>
  );
}
