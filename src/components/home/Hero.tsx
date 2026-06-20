"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";
import AnimatedHeadline from "@/components/ui/animated-title";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  labelicon?: ReactNode;
  label?: string;
  title: string;
  description: string;
clipPath?: string;
  ctaText?: string;
  ctaLink?: string;

  heroImage?: string;
  bgImage?: string;
  sideImage?: string;

  titleColor?: string;
  highlightColor?: string;
  bgColor?: string;
  showCursor?: boolean;
  descmaxWidth?: string;
  children?: ReactNode;
}

export default function HeroSection({
  labelicon,
  label,
  title,
  description,

  ctaText = "Learn More",
  ctaLink = "/",

  heroImage,
  bgImage,
  sideImage,

  titleColor = "#0f172a",
  highlightColor = "#5fb0c2",
  bgColor = "#f8fbff",
  showCursor = true,
  descmaxWidth = "2xl",
  clipPath = "",
  children,
}: HeroSectionProps) {
  return (
    <section
      className="relative flex items-center overflow-hidden pt-30 pb-26 md:pt-40 md:pb-24"
      style={{ background: bgColor, clipPath }}
    >
      
      {sideImage && (
        <img
          src={sideImage}
          alt=""
          aria-hidden
          className="absolute right-0 top-28 z-2 hidden h-full w-fit lg:block"
        />
      )}

      {bgImage && (
        <img
          src={bgImage}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover opacity-55 mix-blend-multiply"
        />
      )}

      <div className="container relative z-10 mx-auto grid items-center gap-10 lg:grid-cols-[2fr_1fr]">
        {/* Content */}
        <div>
          {labelicon && (
        <div className="mb-4 flex items-center gap-2 text-sm font-light text-slate-600">
         <motion.div
              animate={{ y: [0, 0, 0], rotate: [0, 60, 0], scale: [0.8, 1, 0.9] }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
          >
            {labelicon}
          </motion.div>
          <span>{label}</span>
        </div>
      )}
          <AnimatedHeadline
            title={title}
            titleColor={titleColor}
            highlightColor={highlightColor}
            highlightFromWord={3}
            showCursor={showCursor}
          />
          <p className={`mt-4 max-w-${descmaxWidth} text-slate-950`}>
            {description}
          </p>

          {children}

          {ctaText && (
            <div className="mt-8">
              <Link href={ctaLink}>
                <Button>
                  {ctaText}
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Hero Image */}
        {heroImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto flex "
          >
            <motion.img
              src={heroImage}
              alt={title}
              animate={{ y: [0, -30, 0], rotate: [0, 60, 0] }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mx-auto object-contain"
            />
          </motion.div>
        )}
      </div>
    </section>
  );
}