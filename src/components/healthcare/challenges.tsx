"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  BrainCircuit,
  ClipboardCheck,
  Cloud,
  Database,
  ShieldCheck,
} from "lucide-react";

import { SectionHeader } from "../ui/section-header";

type ChallengeCard = {
  title: string;
  description: string;
  icon: typeof Database;
  tone: "light" | "dark";
};

const challengeCards: ChallengeCard[] = [
  {
    title: "Unified Healthcare Data",
    description:
      "Consolidate clinical, operational, financial, and patient data into a single trusted enterprise data ecosystem.",
    icon: Database,
    tone: "light",
  },
  {
    title: "Legacy Platform Modernization",
    description:
      "Modernize legacy healthcare platforms with scalable cloud-native architectures built for performance and growth.",
    icon: Cloud,
    tone: "dark",
  },
  {
    title: "Real-Time Healthcare Analytics",
    description:
      "Enable real-time insights for patient care, claims processing, and operational intelligence.",
    icon: Activity,
    tone: "light",
  },
  {
    title: "Data Governance & Compliance",
    description:
      "Ensure healthcare data remains accurate, governed, secure, and compliant across the enterprise.",
    icon: ShieldCheck,
    tone: "light",
  },
  {
    title: "AI-Ready Data Foundation",
    description:
      "Prepare trusted, analytics-ready data that accelerates AI and machine learning initiatives.",
    icon: BrainCircuit,
    tone: "light",
  },
  {
    title: "Regulatory & Compliance Analytics",
    description:
      "Support HIPAA, GDPR, audit readiness, and enterprise reporting with governed, traceable, and compliant data solutions.",
    icon: ClipboardCheck,
    tone: "light",
  },
];

function ChallengeCardTile({ title, description, icon: Icon, tone }: ChallengeCard) {
  const isDark = tone === "dark";

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.015 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={[
        "group flex h-full min-h-[280px] flex-col rounded-[24px] p-[20px]",
        "border transition-all duration-300",
        isDark
          ? "border-[#49a4ba] bg-[#49a4ba] text-white shadow-[0_18px_45px_rgba(73,164,186,0.16)] hover:shadow-[0_26px_60px_rgba(73,164,186,0.28)]"
          : "border-[#d8ecf2] bg-[#e8f4f7] text-slate-950 shadow-[0_18px_45px_rgba(15,23,42,0.06)] hover:shadow-[0_26px_60px_rgba(15,23,42,0.12)]",
      ].join(" ")}
    >
      <div className="inline-flex w-[84px] h-[84px] items-center justify-center rounded-[24px] bg-white text-secondary shadow-[0_8px_24px_rgba(15,23,42,0.08)] transition-transform duration-300 group-hover:scale-[1.03]">
        <Icon className="size-10 stroke-[1.6]" aria-hidden="true" />
      </div>

      <h3
        className={[
          "mt-[20px] max-w-[18ch] text-[clamp(1.45rem,1.8vw,1.95rem)] font-medium ",
          isDark ? "text-white" : "text-slate-900",
        ].join(" ")}
      >
        {title}
      </h3>

      <p
        className={[
          "mt-4",
          isDark ? "text-white/90" : "text-slate-700",
        ].join(" ")}
      >
        {description}
      </p>
    </motion.article>
  );
}

export default function HealthcareChallengesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-[#1d1d1d] bg-[url('/healthcare/bg-1.jpg')] bg-contain bg-no-repeat bg-top-left py-20 text-white sm:py-20 lg:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl"
        >
          <SectionHeader
            align="center"
            eyebrow="Challenges We Solve"
            title="Solving Complex Healthcare Data Challenges"
            description="Overcome fragmented data, legacy systems, and regulatory complexity to build a trusted data foundation for analytics and AI."
            maxWidth="2xl"
            descriptionWidth="3xl"
            textColor="white"
          />
        </motion.div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 xl:grid-cols-3">
          {challengeCards.map((card, index) => (
            <motion.div
              key={card.title}
              className="h-full"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: reduceMotion ? 0 : index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ChallengeCardTile {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
