"use client";
import Link from "next/link";
import { ArrowUpRight, Cpu, Sparkles, Zap, Database, ArrowRight } from "lucide-react";
import Image from "next/image";

interface ClipCardProps {
  image: string;
  title: string;
  description: string;
  href?: string;
  className?: string;
  showDescriptionOnHover?: boolean;
}

// Map titles to subtle category indicators and icons for high architectural fidelity
const getCategoryInfo = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes("assistant")) return { label: "Cognitive Agent", icon: Sparkles, color: "text-amber-600 bg-amber-50 border-amber-200" };
  if (t.includes("insight") || t.includes("control")) return { label: "Data Analytics", icon: Cpu, color: "text-blue-600 bg-blue-55 border-blue-200" };
  if (t.includes("workflow") || t.includes("orchestrator")) return { label: "System Core", icon: Zap, color: "text-emerald-600 bg-emerald-50 border-emerald-200" };
  return { label: "Infrastructure", icon: Database, color: "text-purple-600 bg-purple-50 border-purple-200" };
};

export default function ClipCard({
  image,
  title,
  description,
  href = "#",
  className = "",
  showDescriptionOnHover = false,
}: ClipCardProps) {
  const info = getCategoryInfo(title);
  const IconComponent = info.icon;

  // Modern rounded clip path using inset for consistent 24px rounding
  const clipPathStyle = {
    clipPath: "inset(0 round 24px)",
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-[24px] bg-white p-[1px] transition-all duration-300  ${className}`}
      style={clipPathStyle}
      id={`clip-card-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Outer border glow effect on hover */}


      {/* Main card body */}
      <div
        className="relative flex h-full flex-col justify-between rounded-[24px] bg-slate-50 transition-colors duration-300 group-hover:bg-white"
        style={clipPathStyle}
      >
        {/* Image / Header Media Section */}
        <div className="relative rounded-[24px] h-80 overflow-hidden bg-slate-900">
          {/* Accent light overlay */}
          <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
          
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1380px) 25vw, (min-width: 1140px) 33vw, (min-width: 740px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          {/* Floating Category Badge */}
          <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 rounded-[50px] px-2.5 py-1.5 text-xs font-semibold backdrop-blur-md bg-[#e4fbff] text-[#417f8c]">
            {/* <IconComponent className="size-3 text-[#318697]" /> */}
            <span>{info.label}</span>
          </div>

          {/* Quick Stats Widget */}
         
        </div>

        {/* Info Card Body */}
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h3 className="font-display !text-lg font-bold tracking-tight text-slate-900 group-hover:text-[#2c7787] transition-colors duration-300 sm:!text-xl">
              {title}
            </h3>

            {/* Sub-label under title */}
            <div className="mt-1 flex items-center gap-1.5">
              {/* <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#5fb0c2]" /> */}
              {/* <span className=" text-[10px] tracking-wider text-slate-500">READY FOR DEPLOYMENT</span> */}
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              {description}
            </p>
          </div>

          {/* Interaction action buttons */}
          <div className="mt-6 flex items-center justify-end pt-4">
           <Link
            href={href}
            aria-label={`Open ${title}`}
            className="absolute bottom-6 right-5 z-30 grid size-10 place-items-center rounded-full bg-[#5fb0c2] text-white shadow-lg transition-all duration-500 group-hover:-translate-y-2 hover:text-white hover:bg-black"
          >
            <ArrowRight className="size-4" />
          </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
