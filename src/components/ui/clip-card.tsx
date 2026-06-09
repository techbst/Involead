"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface ClipCardProps {
  image: string;
  title: string;
  description: string;
  href: string;
  children?: ReactNode;
  className?: string;
  showDescriptionOnHover?: boolean;
}

const CLIP_PATH = "polygon(93.94% 0%, 94.95% 0.06%, 95.86% 0.23%, 96.72% 0.50%, 97.52% 0.86%, 98.22% 1.30%, 98.83% 1.82%, 99.29% 2.40%, 99.69% 3.04%, 99.92% 3.72%, 100% 4.44%, 100% 95.56%, 99.92% 96.28%, 99.69% 96.96%, 99.29% 97.60%, 98.83% 98.18%, 98.22% 98.70%, 97.52% 99.14%, 96.72% 99.50%, 95.86% 99.77%, 94.95% 99.94%, 93.94% 100%, 92.44% 100%, 88.32% 100%, 82.04% 100%, 74.13% 100%, 65.07% 100%, 55.38% 100%, 45.56% 100%, 36.09% 100%, 27.51% 100%, 20.29% 100%, 45.13% 100%, 42.95% 99.81%, 41.14% 99.27%, 39.62% 98.48%, 38.28% 97.52%, 37.02% 96.48%, 35.74% 95.43%, 34.36% 94.47%, 32.77% 93.68%, 30.86% 93.15%, 28.55% 92.95%, 6.74% 92.95%, 4.91% 92.83%, 3.45% 92.53%, 2.31% 92.07%, 1.45% 91.51%, 0.84% 90.92%, 0.43% 90.32%, 0.18% 89.77%, 0.05% 89.31%, 0.01% 89.00%, 0% 88.89%, 0% 4.44%, 0.08% 3.72%, 0.31% 3.04%, 0.68% 2.40%, 1.17% 1.82%, 1.78% 1.30%, 2.48% 0.86%, 3.28% 0.50%, 4.14% 0.23%, 5.08% 0.06%, 6.06% 0%)";

export default function ClipCard({
  image,
  title,
  description,
  href,
  children,
  className = "relative h-[360px] w-full sm:h-[420px] lg:h-[450px]",
  showDescriptionOnHover = true,
}: ClipCardProps) {
  return (
    <article className={`group relative h-full w-full overflow-hidden ${className}`}>
      <div
        className="relative h-full w-full overflow-hidden"
        style={{
          clipPath: CLIP_PATH,
        }}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, 20vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          style={{
            clipPath: CLIP_PATH,
          }}
        />
      </div>

      {/* Base Overlay */}
      <div
        className="absolute inset-0 z-10 bg-black/30"
        style={{
          clipPath: CLIP_PATH,
        }}
      />

      {/* Hover Overlay */}
     <div
  className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 via-50% to-transparent ${
    showDescriptionOnHover
      ? "opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      : "opacity-100"
  }`}
  style={{
    clipPath: CLIP_PATH,
  }}
/>

      {/* Title */}
      <div className="absolute left-5 top-8 z-20 flex items-center gap-3">
        <span className="mt-0 h-7 w-1 bg-[#5fb0c2]" />
        <h3 className="max-w-[220px] !text-[20px] !font-light leading-tight text-white">
          {title}
        </h3>
      </div>

      {/* Description */}
     
      <div
  className={`absolute bottom-24 left-5 right-5 z-20 ${
    showDescriptionOnHover
      ? "translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
      : ""
  }`}
>
          <p className="text-sm leading-6 !text-white">{description}</p>
        </div>
   

      {/* CTA */}
      <Link
        href={href}
        aria-label={`Open ${title}`}
        className="absolute bottom-6 right-5 z-30 grid size-14 place-items-center rounded-full bg-[#5fb0c2] text-white shadow-lg transition-all duration-500 group-hover:-translate-y-2 hover:text-white hover:bg-black"
      >
        <ArrowRight className="size-7" />
      </Link>

      {/* Optional children for custom content */}
      {children}
    </article>
  );
}
