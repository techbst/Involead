"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";

const IMAGE_CLIP_PATH =
  "polygon(93.94% 0%, 94.95% 0.06%, 95.86% 0.23%, 96.72% 0.50%, 97.52% 0.86%, 98.22% 1.30%, 98.83% 1.82%, 99.29% 2.40%, 99.69% 3.04%, 99.92% 3.72%, 100% 4.44%, 100% 95.56%, 99.92% 96.28%, 99.69% 96.96%, 99.29% 97.60%, 98.83% 98.18%, 98.22% 98.70%, 97.52% 99.14%, 96.72% 99.50%, 95.86% 99.77%, 94.95% 99.94%, 93.94% 100%, 92.44% 100%, 88.32% 100%, 82.04% 100%, 74.13% 100%, 65.07% 100%, 55.38% 100%, 45.56% 100%, 36.09% 100%, 27.51% 100%, 20.29% 100%, 45.13% 100%, 42.95% 99.81%, 41.14% 99.27%, 39.62% 98.48%, 38.28% 97.52%, 37.02% 96.48%, 35.74% 95.43%, 34.36% 94.47%, 32.77% 93.68%, 30.86% 93.15%, 28.55% 92.95%, 6.74% 92.95%, 4.91% 92.83%, 3.45% 92.53%, 2.31% 92.07%, 1.45% 91.51%, 0.84% 90.92%, 0.43% 90.32%, 0.18% 89.77%, 0.05% 89.31%, 0.01% 89.00%, 0% 88.89%, 0% 4.44%, 0.08% 3.72%, 0.31% 3.04%, 0.68% 2.40%, 1.17% 1.82%, 1.78% 1.30%, 2.48% 0.86%, 3.28% 0.50%, 4.14% 0.23%, 5.08% 0.06%, 6.06% 0%)";

export default function AboutVision() {
  return (
    <section className="overflow-hidden bg-[#1f1f1f] py-20 text-white md:py-24 ">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Our Vision"
          title="Every Business Generates Data. The Value Lies in Connecting It"
          description="We envision a future where organizations move beyond fragmented systems and isolated initiatives to build connected, intelligent enterprises powered by trusted data, advanced analytics, and AI."
          align="center"
          maxWidth="5xl"
          descriptionWidth="4xl"
          textColor="white"
          titleClassName="mx-auto max-w-4xl"
        />

        <div className="mt-14 grid items-center gap-10 xl:mt-16 md:grid-cols-[0.95fr_1.25fr] xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[720px]"
          >
            <div
              className="overflow-hidden rounded-[2rem] bg-[#2a2a2a] shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
              style={{ clipPath: IMAGE_CLIP_PATH }}
            >
              <Image
                src="/img/vision-md.webp"
                alt="Team collaborating around data-driven business strategy"
                width={900}
                height={700}
                className="h-[320px] w-full object-cover object-center sm:h-[380px] lg:h-[430px]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <div className="px-4">
              <Image
                src="/img/vision-quote.svg"
                alt="Opening quote"
                width={60}
                height={60}
                className="size-8 rotate-180 sm:size-8"
              />

              <div className="mt-4 space-y-4 text-[24px] italic leading-[1.6] text-[#8fd6e5] sm:text-[28px] lg:text-[32px]">
                 
                <p>
                  As organizations continue to generate data across every function,
                  the opportunity is no longer in collecting more information,
                  it&apos;s in connecting it.
                </p>
                <p>
                  We envision a future where data moves seamlessly across the
                  enterprise, AI supports confident decision-making, and advanced
                  analytics become a natural part of everyday business operations.
                </p>
                <p
  className="
    
    after:inline-block
    after:content-['']
    after:w-8
    after:h-8
    after:bg-[url('/img/vision-quote.svg')]
    after:bg-contain
    after:bg-no-repeat
    after:ml-2
    after:align-middle
    after:transition-transform
    after:duration-300
    hover:after:translate-x-1
  "
>
  Our mission is to help organizations build that future through
  intelligent, scalable, and sustainable transformation.
</p>
              </div>

              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
