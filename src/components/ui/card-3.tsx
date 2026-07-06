"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export type CoreValueCardItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string;
};

type CoreValueCardProps = {
  item: CoreValueCardItem;
  index: number;
  active: number | null;
  setActive: (index: number | null) => void;
  resetActive?: number | null;
  imageWidth?: number;
  className?: string;
};

export default function CoreValueCard({
  item,
  index,
  active,
  setActive,
  resetActive = null,
  imageWidth = 160,
  className,
}: CoreValueCardProps) {
  const Icon = item.icon;
  const isActive = active === index;

  return (
    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  onMouseEnter={() => setActive(index)}
  onMouseLeave={() => setActive(0)}
  style={{ flex: 1 }}
  animate={{
    flex: isActive ? 1.7 : 1,
  }}
  transition={{
    opacity: {
      duration: 0.55,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
    y: {
      duration: 0.55,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
    flex: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  }}
  className={cn(
    "group relative min-h-[230px] w-full min-w-0 overflow-hidden rounded-[24px] p-5",
    "border bg-[#f4fbfd] transition-colors duration-500",
    isActive
      ? "border-secondary/50 shadow-[0_10px_15px_rgba(95,176,194,0.22)]"
      : "border-transparent",
    className
  )}
>
      <div className="relative z-10 flex h-full gap-5">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="mb-7 grid size-[54px] place-items-center rounded-[7px] bg-[#5fb0c2] text-white">
            <Icon className="size-7" strokeWidth={1.7} />
          </div>

          <h3 className="relative mb-3 w-fit font-semibold leading-tight text-black">
            {item.title}

            <span
              className={cn(
                "absolute -bottom-1 left-0 h-[1px] bg-[#5fb0c2] transition-all duration-500",
                isActive ? "w-full" : "w-0"
              )}
            />
          </h3>

          <p className="line-clamp-4 text-sm leading-relaxed text-black/60">
            {item.desc}
          </p>
        </div>

        <motion.div
          animate={{
            width: isActive ? imageWidth : 0,
            opacity: isActive ? 1 : 0,
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative hidden shrink-0 overflow-hidden rounded-[8px] md:block"
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}