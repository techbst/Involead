"use client";

import { useRef, useState } from "react";
import { Check } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useMotionValueEvent,
  type Variants,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";

const conventionalItems = [
  "Deliver technology solutions",
  "Focus on implementation",
  "Build standalone systems",
  "Complete projects",
  "Deploy AI",
];

const involeadItems = [
  "Solve business problems",
  "Focus on measurable outcomes",
  "Create connected ecosystems",
  "Build long-term capabilities",
  "Operationalize AI across the business",
];

const premiumEase = [0.22, 1, 0.36, 1] as const;

function buildItemVariants(
  reduceMotion: boolean,
  direction: "left" | "right",
  baseDelay: number,
): Variants {
  const offset = direction === "left" ? -14 : 14;

  return {
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      x: reduceMotion ? 0 : offset,
    },
    show: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: reduceMotion ? 0.01 : 0.45,
        delay: reduceMotion ? 0 : baseDelay + index * 0.06,
        ease: premiumEase,
      },
    }),
  };
}

function DifferenceCard({
  title,
  items,
  inverted = false,
  reduceMotion = false,
  itemBaseDelay = 0,
  itemsVisible = true,
  animateItems = true,
}: {
  title: string;
  items: string[];
  inverted?: boolean;
  reduceMotion?: boolean;
  itemBaseDelay?: number;
  itemsVisible?: boolean;
  animateItems?: boolean;
}) {
  const itemVariants = buildItemVariants(
    reduceMotion,
    inverted ? "right" : "left",
    itemBaseDelay,
  );

  return (
    <article
      className={`rounded-[28px] p-8 md:p-8 md:!pl-10 xl:p-10 xl:!pl-20 ${
        inverted
          ? "border border-[#2A626F] bg-[#46A4B9] text-white"
          : "bg-[#F7FCFD]"
      }`}
    >
      <h3
        className={`text-[24px] font-medium leading-tight md:text-[30px] ${
          inverted ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h3>

      <motion.div
        initial={false}
        animate={itemsVisible ? "show" : "hidden"}
        className="mt-8 space-y-4"
      >
        {items.map((item, index) =>
          animateItems ? (
            <motion.div
              key={item}
              custom={index}
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              {inverted ? (
                <span className="grid size-8 place-items-center rounded-full bg-white text-[#4d9fb6]">
                  <Check className="size-6 stroke-[2.75]" />
                </span>
              ) : (
                <span className="block size-8 rounded-full bg-[#bfe8f4]" />
              )}

              <p
                className={`text-[18px] leading-[1.35] md:text-[24px] ${
                  inverted ? "text-white" : "text-slate-800"
                }`}
              >
                {item}
              </p>
            </motion.div>
          ) : (
            <div key={item} className="flex items-center gap-4">
              {inverted ? (
                <span className="grid size-8 place-items-center rounded-full bg-white text-[#4d9fb6]">
                  <Check className="size-6 stroke-[2.75]" />
                </span>
              ) : (
                <span className="block size-8 rounded-full bg-[#bfe8f4]" />
              )}

              <p
                className={`text-[18px] leading-[1.35] md:text-[24px] ${
                  inverted ? "text-white" : "text-slate-800"
                }`}
              >
                {item}
              </p>
            </div>
          ),
        )}
      </motion.div>
    </article>
  );
}

export default function AboutDifference() {
  const reduceMotion = !!useReducedMotion();
  const desktopStageRef = useRef<HTMLDivElement | null>(null);
  const [desktopItemsVisible, setDesktopItemsVisible] = useState({
    first: true,
    second: reduceMotion,
  });
  const [secondCardActive, setSecondCardActive] = useState(reduceMotion);

  const { scrollYProgress } = useScroll({
    target: desktopStageRef,
    offset: ["start 88%", "end 40%"],
  });

  const firstCardXRaw = useTransform(
    scrollYProgress,
    [0, 0.4],
    reduceMotion ? ["0%", "0%"] : ["52%", "0%"],
  );
  const firstCardX = useSpring(firstCardXRaw, {
    stiffness: 130,
    damping: 22,
    mass: 0.8,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (reduceMotion) {
      setDesktopItemsVisible({ first: true, second: true });
      setSecondCardActive(true);
      return;
    }

    setSecondCardActive(latest > 0.34);

    setDesktopItemsVisible((current) => {
      const next = {
        first: true,
        second: latest > 0.34,
      };

      return current.first === next.first && current.second === next.second
        ? current
        : next;
    });
  });

  const desktopStageVariants: Variants = {
    hidden: {},
    show: {},
  };

  const mobileCardVariants = (delay = 0): Variants => ({
    hidden: {
      opacity: reduceMotion ? 1 : 0,
      x: reduceMotion ? 0 : 18,
      y: reduceMotion ? 0 : 22,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: reduceMotion
        ? { duration: 0.01 }
        : { duration: 0.64, delay, ease: premiumEase },
    },
  });

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="The Involead Difference"
          title="Beyond Delivery. Focused on Lasting Business Value"
          description="We combine execution, domain expertise, and long-term partnership to help organizations realize the full potential of their data and AI investments."
          align="center"
          maxWidth="5xl"
          descriptionWidth="4xl"
          textColor="black"
          titleClassName="mx-auto max-w-2xl"
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          variants={desktopStageVariants}
          className="mt-14 hidden overflow-hidden md:block xl:mt-16"
        >
          <div
            ref={desktopStageRef}
            className="relative min-h-[360px] lg:min-h-[370px] xl:min-h-[380px]"
          >
            <motion.div
              style={{ x: firstCardX }}
              className="absolute left-0 top-0 w-[calc(50%-12px)]"
            >
              <DifferenceCard
                title="Conventional Technology Engagements"
                items={conventionalItems}
                reduceMotion={reduceMotion}
                itemBaseDelay={0}
                itemsVisible
                animateItems={false}
              />
            </motion.div>

            <motion.div
              initial={false}
              animate={{
                x: reduceMotion ? "0%" : secondCardActive ? "0%" : "54%",
                opacity: reduceMotion ? 1 : secondCardActive ? 1 : 0,
              }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.62,
                ease: premiumEase,
              }}
              className="absolute right-0 top-0 w-[calc(50%-12px)]"
            >
              <DifferenceCard
                title="The InvoLead Approach"
                items={involeadItems}
                inverted
                reduceMotion={reduceMotion}
                itemBaseDelay={reduceMotion ? 0 : 0.04}
                itemsVisible={desktopItemsVisible.second}
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.35 }}
          className="mt-14 space-y-6 md:hidden"
        >
          <motion.div variants={mobileCardVariants(0)}>
            <DifferenceCard
              title="Conventional Technology Engagements"
              items={conventionalItems}
              reduceMotion={reduceMotion}
              itemBaseDelay={0}
              itemsVisible
              animateItems={false}
            />
          </motion.div>

          <motion.div variants={mobileCardVariants(reduceMotion ? 0 : 0.14)}>
            <DifferenceCard
              title="The InvoLead Approach"
              items={involeadItems}
              inverted
              reduceMotion={reduceMotion}
              itemBaseDelay={reduceMotion ? 0 : 0.04}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
