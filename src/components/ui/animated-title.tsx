"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

interface AnimatedHeadlineProps {
  title: string;
  titleColor?: string;
  highlightColor?: string;
  highlightFromWord?: number;
  showCursor?: boolean;
  className?: string;
}

export default function AnimatedHeadline({
  title,
  titleColor = "#0f172a",
  highlightColor = "#06b6d4",
  highlightFromWord = 3,
  showCursor = false,
  className,
}: AnimatedHeadlineProps) {
  const words = title.split(" ");

  return (
    <motion.h1
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className={cn(
        "max-w-4xl text-[36px] font-bold leading-[115%] md:text-[54px]",
        className,
      )}
      style={{ color: titleColor }}
    >
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            initial={{
              y: index % 2 === 0 ? "-115%" : "115%",
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.62,
              delay: 0.08 + index * 0.075,
              ease: [0.2, 0.9, 0.2, 1],
            }}
            className="mr-3 inline-block"
            style={{
              color:
                index >= highlightFromWord
                  ? highlightColor
                  : titleColor,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}

      {/* Blinking Cursor */}
      {showCursor && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "linear",
          }}
          className="ml-1 inline-block h-[.9em] w-[3px] translate-y-1"
          style={{ backgroundColor: highlightColor }}
        />
      )}
    </motion.h1>
    );
      
}
