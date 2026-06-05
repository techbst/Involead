"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import SectionReveal from "./SectionReveal";

const stats: { value: string; label: string; icon: string }[] = [
  {
    value: "450+",
    label: "Enterprise Clients Served",
    icon: "/img/people.svg",
  },
  {
    value: "12.8PB+",
    label: "Data Processed Monthly",
    icon: "/img/db-setting.svg",
  },
  {
    value: "15+",
    label: "Enterprise Tech Stacks Supported",
    icon: "/img/db.svg",
  },
  {
    value: "67%",
    label: "Average Efficiency Increase",
    icon: "/img/growth.svg",
  },
  {
    value: "98.7%",
    label: "Prediction Accuracy Rate",
    icon: "/img/db-setting.svg",
  },
  {
    value: "24/7",
    label: "Real-Time Monitoring Active",
    icon: "/img/clock.svg",
  },
];

const partnerLogos = [
  { name: "OpenAI", src: "/enterprise-logo/gpt.png" },
  { name: "Database", src: "/enterprise-logo/db.png" },
  { name: "SQL", src: "/enterprise-logo/sql.png" },
  { name: "Documentation", src: "/enterprise-logo/doc.png" },
  { name: "n8n", src: "/enterprise-logo/n8.png" },
  { name: "TensorFlow", src: "/enterprise-logo/tensflow.png" },
];

export default function TechnologyScale() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
      <SectionReveal className="mx-auto container">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[24px] font-semibold text-slate-950">
            Technology at Scale
          </p>
          <h2 className="mt-6 text-[clamp(2.4rem,5vw,5.8rem)] font-bold leading-[1.14] tracking-normal text-slate-950 sm:mt-9">
            Enterprise Infrastructure Powered by AI, Data & Automation
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-20 sm:gap-7 lg:mt-24 lg:grid-cols-[1fr_1fr_1fr_1.05fr] lg:grid-rows-2">
          {stats.slice(0, 2).map(({ value, label, icon }, index) => (
            <motion.article
              key={label}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative min-h-[230px] rounded-[28px] bg-[#eef8fb] p-7 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-200/40 sm:min-h-[280px] sm:rounded-[32px] sm:p-9 ${index === 1 ? "lg:col-span-2" : ""
                }`}
            >
              <div className="flex items-center justify-between">
                <strong className="text-2xl md:text-[36px] font-[500] leading-none text-black">
                  {value}
                </strong>
                <Image
                  src={icon}
                  alt=""
                  width={60}
                  height={60}
                  aria-hidden
                  className=""
                /> </div>
              <p className="absolute bottom-7 left-7 max-w-[300px] text-[22px] font-medium leading-snug text-black/65 sm:bottom-10 sm:left-9 sm:text-[26px]">
                {label}
              </p>
            </motion.article>
          ))}
          <motion.article
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative min-h-[560px] overflow-hidden rounded-[28px] bg-[#eef8fb] bg-[url('/img/company.png')] bg-cover bg-center p-7 sm:min-h-[640px] sm:rounded-[32px] sm:p-9 lg:row-span-2"
          >
            <strong className="block text-2xl md:text-[36px] font-[500] leading-none text-black">
              {stats[2].value}
            </strong>
            <p className="mt-10 max-w-[285px] text-[29px] font-medium leading-snug text-black/70">
              {stats[2].label}
            </p>
            <div className="absolute inset-x-0 bottom-[52px] h-[86px] overflow-hidden bg-white">
              <div className="tech-logo-track flex h-full w-max items-center gap-12 px-8">
                {[...partnerLogos, ...partnerLogos].map((partner, index) => (
                  <span
                    key={`${partner.name}-${index}`}
                    className="flex h-full min-w-20 shrink-0 items-center justify-center"
                  >
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={100}
                      height={100}
                      className="max-h-14 w-auto object-contain"
                    />
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-[52px] bg-[#eef8fb]" />
          </motion.article>
          {stats.slice(3).map(({ value, label, icon }) => (
            <motion.article
              key={label}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative min-h-[230px] rounded-[28px] bg-[#eef8fb] p-7 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-200/40 sm:min-h-[280px] sm:rounded-[32px] sm:p-9"
            >
              <div className="flex items-center justify-between">
                <strong className="text-2xl md:text-[36px] font-[500] leading-none text-black">
                  {value}
                </strong>
                <Image
                  src={icon}
                  alt=""
                  width={60}
                  height={60}
                  aria-hidden
                />  </div>
              <p className="absolute bottom-7 left-7 max-w-[320px] text-[22px] font-medium leading-snug text-black/65 sm:bottom-10 sm:left-9 sm:text-[26px]">
                {label}
              </p>
            </motion.article>
          ))}
        </div>
        <style jsx>{`
          .tech-logo-track {
            animation: tech-logo-run 15s linear infinite;
          }

          @keyframes tech-logo-run {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </SectionReveal>
    </section>
  );
}
