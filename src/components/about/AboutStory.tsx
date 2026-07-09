"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";

const IMAGE_CLIP_PATH =
  "polygon(93.94% 0%, 94.95% 0.06%, 95.86% 0.23%, 96.72% 0.50%, 97.52% 0.86%, 98.22% 1.30%, 98.83% 1.82%, 99.29% 2.40%, 99.69% 3.04%, 99.92% 3.72%, 100% 4.44%, 100% 95.56%, 99.92% 96.28%, 99.69% 96.96%, 99.29% 97.60%, 98.83% 98.18%, 98.22% 98.70%, 97.52% 99.14%, 96.72% 99.50%, 95.86% 99.77%, 94.95% 99.94%, 93.94% 100%, 92.44% 100%, 88.32% 100%, 82.04% 100%, 74.13% 100%, 65.07% 100%, 55.38% 100%, 45.56% 100%, 36.09% 100%, 27.51% 100%, 20.29% 100%, 45.13% 100%, 42.95% 99.81%, 41.14% 99.27%, 39.62% 98.48%, 38.28% 97.52%, 37.02% 96.48%, 35.74% 95.43%, 34.36% 94.47%, 32.77% 93.68%, 30.86% 93.15%, 28.55% 92.95%, 6.74% 92.95%, 4.91% 92.83%, 3.45% 92.53%, 2.31% 92.07%, 1.45% 91.51%, 0.84% 90.92%, 0.43% 90.32%, 0.18% 89.77%, 0.05% 89.31%, 0.01% 89.00%, 0% 88.89%, 0% 4.44%, 0.08% 3.72%, 0.31% 3.04%, 0.68% 2.40%, 1.17% 1.82%, 1.78% 1.30%, 2.48% 0.86%, 3.28% 0.50%, 4.14% 0.23%, 5.08% 0.06%, 6.06% 0%)";

export default function AboutStory() {
  return (
    <section className="bg-[#000] py-20 md:py-24">
      <div className="container mx-auto">
        <div className="grid items-start gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader
              eyebrow="Our Story"
              title="Built to Close the Gap Between Data and Decisions"
              description=" Technology has made it easier than ever to collect data. Turning that
              data into consistent, business-wide decisions remains the real
              challenge."
              align="left"
              maxWidth="5xl"
              tone="light"
              textColor="white"
              // titleClassName="]"
            />


            <div className="mt-10 max-w-5xl  text-[#D9D9D9] ">
              <p>
                Technology alone doesn&apos;t solve business problems. The real value
                comes from connecting data, people, and processes in ways that
                improve how organizations operate and make decisions.
              </p>
              <p className="mt-3">
                InvoLead is a data science and AI consulting partner that helps
                enterprises design modern data foundations, deploy production-grade
                AI solutions, and embed analytics into everyday business operations.
                From strategy through execution, we focus on building capabilities
                that scale with your business, not isolated solutions that stop at
                deployment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[610px]"
          >
            <div
              className="relative overflow-hidden rounded-[2rem] bg-[#dfe8f6] shadow-[0_24px_70px_rgba(0,0,0,0.25)]"
              style={{ clipPath: IMAGE_CLIP_PATH }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_left_top,rgba(144,235,240,0.28),transparent_28%),radial-gradient(circle_at_right_top,rgba(255,255,255,0.48),transparent_22%)]" />
              <div className="absolute inset-x-0 top-[20%] h-px bg-white/35" />
              <div className="absolute inset-x-0 bottom-[22%] h-px bg-white/35" />
              <Image
                src="/img/about-stor-main.webp"
                alt="AI intelligence visual"
                width={900}
                height={980}
                className="relative z-10 h-[471px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
          >
            <Image
              src="/img/second_story.webp"
              alt="Data blocks representing structured decision-making"
              width={1200}
              height={700}
              className="h-[248px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2rem] shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
          >
            <Image
              src="/img/third_story.webp"
              alt="Team working through a planning exercise"
              width={1200}
              height={700}
              className="h-[250px] w-full object-cover md:h-[370px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
