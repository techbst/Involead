"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";
import CornerShape from "../ui/shape";

const principleCards = [
  {
    title: "Business Before Technology",
    body:
      "Every engagement starts with understanding the business challenge before selecting the right technology.",
    className: "border-[#C5CCF1] bg-[#EEF0FB]",
    hiddenX: 140,
  },
  {
    title: "Practical Innovation",
    body:
      "We apply AI where it creates measurable value, not where it simply adds complexity.",
    className: "border-[#FFFAEB] bg-[#FFEDB8]",
    hiddenX: -140,
  },
  {
    title: "Built to Scale",
    body:
      "We design solutions that evolve with the organization, supporting long-term growth rather than short-term wins.",
    className: "border-[#C0E5ED] bg-[#E7F5F8]",
    hiddenX: 140,
  },
  {
    title: "Partnership Over Projects",
    body:
      "We work alongside our clients to build capabilities, drive adoption, and create lasting impact.",
    className: "border-[#C4EDDF] bg-[#EBF9F4]",
    hiddenX: -140,
  },
];

function PrincipleCard({
  title,
  body,
  className,
  animateIn,
  delay,
  hiddenX,
}: {
  title: string;
  body: string;
  className: string;
  animateIn: boolean;
  delay: number;
  hiddenX: number;
}) {
  return (
    <motion.article
      initial={false}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 30px 80px rgba(15,23,42,0.12)",
      }}
      whileTap={{ scale: 0.99 }}
      animate={{
        opacity: animateIn ? 1 : 0,
        x: animateIn ? 0 : hiddenX,
        y: animateIn ? 0 : 24,
        scale: animateIn ? 1 : 0.96,
        filter: animateIn ? "blur(0px)" : "blur(6px)",
      }}
      transition={{
        duration: 0.7,
        delay: animateIn ? delay : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group h-full cursor-pointer rounded-[20px] border p-7 shadow-[0_20px_60px_rgba(15,23,42,0.05)] md:p-8 ${className}`}
    >
      <h3 className="max-w-[260px] text-[30px] font-medium leading-[1.15] text-slate-900 transition-colors duration-300 group-hover:text-slate-950">
        {title}
      </h3>
      <p className="mt-5 max-w-[420px] text-[18px] leading-8 text-slate-700 transition-colors duration-300">
        {body}
      </p>
    </motion.article>
  );
}

export default function AboutDrive() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.35 });
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      setVisibleCount(0);
      return;
    }

    const timers = principleCards.map((_, index) =>
      window.setTimeout(() => {
        setVisibleCount(index + 1);
      }, 220 + index * 180)
    );

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [inView]);

  return (
    <section className="bg-white overflow-hidden relative py-20 md:py-24">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="What Drives Us"
          title="The Principles Behind Every Engagement"
          description="The principles below guide every engagement, every recommendation, and every solution we build alongside our clients."
          align="center"
          maxWidth="5xl"
          descriptionWidth="2xl"
          textColor="black"
          titleClassName="mx-auto max-w-2xl"
        />

        <div ref={sectionRef} className="mt-16">
          <div className="xl:hidden">
            <motion.div
              initial={false}
              whileHover={{ y: -10, scale: 1.02 }}
              animate={{
                scale: inView ? 1 : 0.98,
                opacity: 1,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative mx-auto aspect-[3/4] max-w-[520px] cursor-pointer overflow-hidden rounded-[20px]"
            >
              <Image
                src="/img/aboutdrives.webp"
                alt="Team meeting around a conference table"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </motion.div>

            <div className="mt-6 space-y-4">
              {principleCards.map((card, index) => (
                <PrincipleCard
                  key={card.title}
                  title={card.title}
                  body={card.body}
                  className={card.className}
                  animateIn={index < visibleCount}
                  delay={0}
                  hiddenX={0}
                />
              ))}
            </div>
          </div>

          <div className="mx-auto hidden grid-cols-3 grid-rows-2 gap-x-3 gap-y-5 overflow-visible xl:grid xl:auto-rows-[397px]">
            <div className="relative z-10">
              <PrincipleCard
                title={principleCards[0].title}
                body={principleCards[0].body}
                className={principleCards[0].className}
                animateIn={visibleCount >= 1}
                delay={0}
                hiddenX={principleCards[0].hiddenX}
              />
            </div>

            <div className="relative z-20 row-span-2 h-full">
              <motion.div
                initial={false}
                whileHover={{ y: -10, scale: 1.015 }}
                animate={{
                  scale: inView ? 1 : 0.96,
                  y: inView ? 0 : 18,
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full min-h-[620px] cursor-pointer overflow-hidden rounded-[20px] shadow-[0_35px_100px_rgba(15,23,42,0.12)]"
              >
                <Image
                  src="/img/aboutdrives.webp"
                  alt="Team meeting around a conference table"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </motion.div>
            </div>

            <div className="relative z-10">
              <PrincipleCard
                title={principleCards[1].title}
                body={principleCards[1].body}
                className={principleCards[1].className}
                animateIn={visibleCount >= 2}
                delay={0}
                hiddenX={principleCards[1].hiddenX}
              />
            </div>

            <div className="relative z-10">
              <PrincipleCard
                title={principleCards[2].title}
                body={principleCards[2].body}
                className={principleCards[2].className}
                animateIn={visibleCount >= 3}
                delay={0}
                hiddenX={principleCards[2].hiddenX}
              />
            </div>

            <div className="relative z-10">
              <PrincipleCard
                title={principleCards[3].title}
                body={principleCards[3].body}
                className={principleCards[3].className}
                animateIn={visibleCount >= 4}
                delay={0}
                hiddenX={principleCards[3].hiddenX}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[6px] left-0 w-[290px] bg-secondary/15">
              <CornerShape color="#fff" />
            </div>
    </section>
  );
}
