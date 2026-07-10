"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import SectionReveal from "./SectionReveal";
import AnimatedNumber from "../ui/animated-number";
import { SectionHeader } from "../ui/section-header";
import CornerShape from "../ui/shape";

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

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0 },
};

export default function TechnologyScale() {
  return (
    <section className="bg-white  py-20  relative overflow-hidden py-20">
      <div className="mx-auto container">
        <SectionHeader
          eyebrow={"Technology at Scale"}
          title="Enterprise Infrastructure Powered by AI, Data & Automation"
          description="Build scalable, intelligent infrastructure that powers seamless operations, automation, and business growth."
          align="center"
          textColor="black"
          maxWidth="4xl"

        />


        <div className="grid grid-cols-1 gap-5 mt-12 sm:gapx-4 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.05fr] lg:grid-rows-2">
          {stats.slice(0, 2).map(({ value, label, icon }, index) => (
            <motion.article
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative  rounded-[24px] bg-[#eef8fb] px-4 py-6 bg-[linear-gradient(90.13deg,_#bfddef_0.12%,_#eaeaea_98.69%)] transition-all duration-300 hover:shadow-xl hover:shadow-cyan-200/40  sm:rounded-[24px] flex flex-col justify-between  ${index === 1 ? "lg:col-span-2" : ""
                }`}
            >
              <div className="flex  items-center justify-between">
                <strong className="text-2xl md:text-[30px] font-[500] leading-none text-black">
                  <AnimatedNumber value={value} />
                </strong>
                <Image
                  src={icon}
                  alt=""
                  width={50}
                  height={50}
                  aria-hidden
                  className=""
                /> </div>
              <p className=" bottom-7 left-7 max-w-[300px] text-[22px] font-medium leading-snug !text-black/70 sm:bottom-10 sm:left-9 sm:text-[26px]">
                {label}
              </p>
            </motion.article>
          ))}
          <motion.article
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: 2 * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -10, scale: 1.02 }}
            className=" overflow-hidden rounded-[24px]  bg-[#eef8fb] bg-[url('/img/company.png')] bg-cover bg-center py-6  sm:rounded-[24px] flex flex-col justify-between h-[320px] sm:h-[360px] lg:h-[400px] lg:row-span-2"
          >
            <div className="px-4">

              <strong className="text-2xl md:text-[30px] font-[500] leading-none text-black">
                <AnimatedNumber value={stats[2].value} />
              </strong>
              <p className="mt-3 !text-[20px] font-medium leading-snug !text-black/70">
                {stats[2].label}
              </p>
            </div>
            <div className="  inset-x-0  overflow-hidden bg-white">
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
            <div className="absolute inset-x-0 bottom-0  bg-[#eef8fb]" />
          </motion.article>
          {stats.slice(3).map(({ value, label, icon }, index) => (
            <motion.article
              key={label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: (index + 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative  rounded-[24px] bg-[linear-gradient(90.13deg,_#bfddef_0.12%,_#eaeaea_98.69%)] px-4 py-6 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-200/40  sm:rounded-[24px] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <strong className="text-2xl md:text-[30px] font-[500] leading-none text-black">
                  <AnimatedNumber value={value} />
                </strong>

                <Image
                  src={icon}
                  alt=""
                  width={50}
                  height={50}
                  aria-hidden
                />  </div>
              <p className=" bottom-7 left-7 max-w-[320px] text-[22px] font-medium leading-snug !text-black/70 sm:bottom-10 sm:left-9 sm:text-[26px]">
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
      </div>
      <div className="absolute -bottom-[7px] left-0 w-[290px] bg-black">
        <CornerShape color="#fff" />
      </div>
    </section>
  );
}
