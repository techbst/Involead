"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChartNoAxesColumnIncreasing,
  CircleGauge,
  Clock3,
  DatabaseZap,
  Quote,
} from "lucide-react";
import Counter from "@/components/ui/animated-number";
import { SectionHeader } from "@/components/ui/section-header";

const IMAGE_CLIP_PATH =
  "polygon(93.94% 0%, 94.95% 0.06%, 95.86% 0.23%, 96.72% 0.50%, 97.52% 0.86%, 98.22% 1.30%, 98.83% 1.82%, 99.29% 2.40%, 99.69% 3.04%, 99.92% 3.72%, 100% 4.44%, 100% 95.56%, 99.92% 96.28%, 99.69% 96.96%, 99.29% 97.60%, 98.83% 98.18%, 98.22% 98.70%, 97.52% 99.14%, 96.72% 99.50%, 95.86% 99.77%, 94.95% 99.94%, 93.94% 100%, 92.44% 100%, 88.32% 100%, 82.04% 100%, 74.13% 100%, 65.07% 100%, 55.38% 100%, 45.56% 100%, 36.09% 100%, 27.51% 100%, 20.29% 100%, 45.13% 100%, 42.95% 99.81%, 41.14% 99.27%, 39.62% 98.48%, 38.28% 97.52%, 37.02% 96.48%, 35.74% 95.43%, 34.36% 94.47%, 32.77% 93.68%, 30.86% 93.15%, 28.55% 92.95%, 6.74% 92.95%, 4.91% 92.83%, 3.45% 92.53%, 2.31% 92.07%, 1.45% 91.51%, 0.84% 90.92%, 0.43% 90.32%, 0.18% 89.77%, 0.05% 89.31%, 0.01% 89.00%, 0% 88.89%, 0% 4.44%, 0.08% 3.72%, 0.31% 3.04%, 0.68% 2.40%, 1.17% 1.82%, 1.78% 1.30%, 2.48% 0.86%, 3.28% 0.50%, 4.14% 0.23%, 5.08% 0.06%, 6.06% 0%)";

const statCards = [
  {
    value: "67",
    label: "Average Efficiency Increase",
    icon: "/img/db-setting.svg",
    accent: true,
    suffix: "%",
  },
  {
    value: "98.7",
    label: "Prediction Accuracy Rate",
    icon: "/img/db-adat.svg",
    accent: false,
    suffix: "%",
  },
  {
    value: "24/7",
    label: "Real-Time Monitoring Active",
    icon: "/img/about-blackclk.svg",
    accent: true,
    suffix: "",
  },
  {
    value: "24/7",
    label: "Operational Support Coverage",
    icon: "/img/real-colorclk.svg",
    accent: false,
    suffix: "",
  },
];

export default function WhoWeAre() {
  return (
    <section className=" py-20 ">
      <div className="container mx-auto">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <SectionHeader
              eyebrow="Who we are"
              title="Data Science & AI Consulting Built Around Business Outcomes"
              description="A strategic partner helping organizations build intelligent, data-driven businesses through AI, analytics, and scalable technology solutions."
              align="left"
              maxWidth="5xl"
              tone="light"
              textColor="black"
              
            />

            <div className="mt-2 max-w-5xl py-5 px-6">
              <Image src="/img/quote_svg.svg" alt="quote" height={100} width={100} className="size-8 " />
              <p className="mt-2 max-w-4xl text-[24px] font-medium italic leading-[1.6] !text-secondary md:text-[20px]">
                Technology alone doesn&apos;t solve business problems. The real value
                comes from connecting data, people, and processes in ways that
                improve how organizations operate and make decisions.
              </p>
              <div className="mt-0 flex justify-end pr-10">
                <Image src="/img/quote_svg.svg" alt="quote " height={100} width={100} className="size-8 rotate-180" />
              </div>
            </div>

            <p className="mt-2 max-w-5xl text-[18px] leading-8 !text-[#1D1D1D]">
              InvoLead is a data science and AI consulting partner that helps
              enterprises design modern data foundations, deploy production-grade AI
              solutions, and embed analytics into everyday business operations. From
              strategy through execution, we focus on building capabilities that
              scale with your business, not isolated solutions that stop at
              deployment.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full "
          >
            <div
              className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
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
          </motion.div>
        </div>

        <div className="mt-14 grid gap-5 grid-cols-1 lg:grid-cols-4 md:grid-cols-4">
          {statCards.map((card, index) => {
            // const Icon = card.icon;

            return (
              <motion.article
                key={card.label}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`rounded-[24px] border px-8 py-8  ${
                  card.accent
                    ? "border-[#C6E4EB] bg-[#F0F9FA]"
                    : "border-[#D9D9D9] bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[36px] font-semibold leading-none tracking-[-0.05em] text-black">
                    <Counter value={card.value} />
                    {card.suffix && <span>{card.suffix}</span>}
                  </div>
                  <Image src={card.icon} alt="icons" width={50} height={50} className="" />
                </div>
                <p className="mt-14 text-[18px] leading-7 text-slate-700">
                  {card.label}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
