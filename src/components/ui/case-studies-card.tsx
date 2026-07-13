"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudiesCardProps = {
  image: string;
  icon: LucideIcon;
  title: string;
  description: string;
  metrics: CaseStudyMetric[];
  category: string;
  href?: string;
  buttonText?: string;
  className?: string;
};

export default function CaseStudiesCard({
  image,
  icon: Icon,
  title,
  description,
  metrics,
  category,
  href = "#",
  buttonText = "Explore More",
  className,
}: CaseStudiesCardProps) {
  return (
    <article
      className={cn(
        "cursor-grab rounded-[28px] bg-[linear-gradient(180deg,_#68C1D5_-15.15%,_#FFFFFF_112.08%)] p-3 shadow-[0_14px_30px_rgba(0,0,0,0.10)] sm:p-4",
        "md:rounded-[32px] md:p-5",
        className
      )}
    >
      <div className="grid min-w-0 gap-4 md:gap-6 lg:grid-cols-[300px_1fr] xl:grid-cols-[330px_1fr]">
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

        <div className="flex min-w-0 flex-col rounded-[24px] bg-white px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
          <span className="mb-5 max-w-max rounded-full bg-secondary/10 px-4 py-2 text-center text-xs font-semibold text-secondary">Case Study</span>
          <h3 className="font-semibold tracking-tight line-clamp-2 lg:line-clamp-1">
            {title}
          </h3>

          <p className="mt-3 line-clamp-2">
            {description}
          </p>

          <div className="mt-5 grid overflow-hidden rounded-[14px] bg-[#DFF2F6] sm:grid-cols-3">
            {metrics.slice(0, 3).map((metric, index) => (
              <div
                key={`${metric.value}-${metric.label}`}
                className={cn(
                  "p-3 md:p-3",
                  index !== 0 && "border-t border-secondary/24 sm:border-l sm:border-t-0"
                )}
              >
               <div
                  className="
                    break-words
                    font-bold
                    leading-tight
                    text-[15px]
                    min-[680px]:text-[20px]
                    min-[980px]:text-[18px]
                    min-[1171px]:text-[22px]
                  "
                >
                  {metric.value}
                </div>
                <div className="mt-1 text-sm leading-snug sm:line-clamp-2 min-[680px]:text-[14px] min-[980px]:text-[14px] min-[1171px]:text-[16px]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <Button asChild variant={"outline"} className="bg-secondary/10 !text-secondary">
              <Link href={href}><Icon className="size-4" /> {category}</Link>
            </Button>
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
