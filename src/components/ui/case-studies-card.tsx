"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudiesCardProps = {
  image: string;
  title: string;
  description: string;
  metrics: CaseStudyMetric[];
  href?: string;
  buttonText?: string;
  className?: string;
};

export default function CaseStudiesCard({
  image,
  title,
  description,
  metrics,
  href = "#",
  buttonText = "Explore More",
  className,
}: CaseStudiesCardProps) {
  return (
    <article
      className={cn(
        "rounded-[28px] bg-white p-4 shadow-[0_24px_70px_rgba(0,0,0,0.10)]",
        "md:rounded-[32px] md:p-5",
        className
      )}
    >
      <div className="grid gap-6 lg:grid-cols-[300px_1fr] xl:grid-cols-[330px_1fr]">
        <div className="relative min-h-[260px] overflow-hidden rounded-[22px] md:min-h-[320px]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 330px"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/45 to-transparent" />
        </div>

        <div className="flex flex-col py-1 lg:pr-1">
          <h3 className="text-2xl font-semibold tracking-tight text-slate-800 md:text-[26px]">
            {title}
          </h3>

          <p className="mt-5 line-clamp-2">
            {description}
          </p>

          <div className="mt-15 grid overflow-hidden rounded-[14px] border border-secondary/24 bg-[#eef6ff] sm:grid-cols-3">
            {metrics.slice(0, 3).map((metric, index) => (
              <div
                key={`${metric.value}-${metric.label}`}
                className={cn(
                  "p-5 md:p-6",
                  index !== 0 && "border-t border-secondary/24 sm:border-l sm:border-t-0"
                )}
              >
                <div className="text-2xl font-bold text-secondary md:text-[28px]">
                  {metric.value}
                </div>
                <p className="mt-3 line-clamp-1">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex justify-end">
            <Button asChild>
              <Link href={href}>
                {buttonText}
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}