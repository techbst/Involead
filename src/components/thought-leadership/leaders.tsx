import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Eye } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const perspective = {
  title: "Why Most AI Initiatives Fail Before They Reach Production",
  description:
    "Most enterprise AI pilots never scale - not because the models are wrong, but because the organization never catches up. Aditya breaks down the four failure points he sees most often, and how to fix them before they sink a rollout.",
  category: "AI strategy",
  author: "Avinna Saho",
  role: "Co-Founder & Director",
  image: "/thought-leadership/Why-Most-AI-Initiatives-Fail-Before-They-Reach-Production.webp",
  avatar: "/team/avinna-saho.webp",
  href: "/articles",
};

const relatedPerspectives = [
  {
    title: "Why Most AI Initiatives Fail Before They Reach Production",
    category: "Ai strategy",
    author: "Nilesh Gupta",
    role: "Co-Founder & Director",
  },
  {
    title: "Why Most AI Initiatives Fail Before They Reach Production",
    category: "AI strategy",
    author: "Pinaki Ghosh",
    role: "Co-Founder & Director",
  },
  {
    title: "Why Most AI Initiatives Fail Before They Reach Production",
    category: "AI strategy",
    author: "Srikanth Patil",
    role: "Vice President",
  },
];

function CategoryBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[#c5e6ed] bg-[#edf9fb] px-3 py-1.5 text-xs font-medium text-[#43889a] text-nowrap">
      {children}
    </span>
  );
}

export default function Leaders() {
  return (
    <section className="bg-[#1d1d1d] py-20 text-white ">
      <div className="container mx-auto">
        <SectionHeader
          align="left"
          eyebrow="From our leaders"
          title="Latest perspectives"
          description="Hear directly from InvoLead's leadership team as they share practical perspectives on AI strategy, data transformation, emerging technologies, and the future of enterprise decision-making."
          tone="light"
          maxWidth="5xl"
          descriptionWidth="4xl"
          titleClassName="normal-case"
        />

        <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1.35fr_0.95fr]">
          <article data-aos="fade-up" data-aos-delay="0" data-aos-duration="750" className="flex flex-col rounded-[24px] bg-[#eaf8fb] p-4 text-slate-950 sm:p-5">
            <div className="relative min-h-[211px] overflow-hidden rounded-[24px] sm:min-h-[211px]">
              <Image
                src={perspective.image}
                alt="Digital technology representing enterprise AI strategy"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-3">
                <span className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#43889a] shadow-sm">
                  Editor&apos;s Pick
                </span>
                <CategoryBadge>{perspective.category}</CategoryBadge>
              </div>
            </div>

            <h3 className="mt-5 lg:!text-[29px] sm:!text-[24px] md:!text-[20px] font-semibold leading-tight tracking-[-0.03em] sm:text-[28px]">
              {perspective.title}
            </h3>
            <p className="mt-4 leading-7 text-slate-600">
              {perspective.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-2">
                <Clock3 className="size-4" /> 7 min read
              </span>
              <span className="inline-flex items-center gap-2">
                <Eye className="size-4" /> 20K views
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-4 border-t border-[#b9e2ea] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="relative size-14 overflow-hidden rounded-[8px] bg-white">
                  <Image
                    src={perspective.avatar}
                    alt={perspective.author}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-primary">
                    {perspective.author}
                  </div>
                  <div className="text-[13px] text-[#6A809F]">{perspective.role}</div>
                </div>
              </div>

              <Button asChild className="lg:!w-fit md:!w-fit sm:!w-full ">
                <Link href={perspective.href}>
                  Read Article <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </article>

          <div className="grid gap-5">
            {relatedPerspectives.map((item, index) => (
              <article
                key={item.title}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                data-aos-duration="750"
                className="flex flex-col justify-between rounded-[24px] bg-white p-5 text-slate-950 shadow-[0_16px_40px_rgba(0,0,0,0.1)] sm:p-6"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="max-w-md text-[20px] max-[680px]:text-[18px] font-semibold leading-snug tracking-[-0.02em]">
                    {item.title}
                  </div>
                  <CategoryBadge>{item.category}</CategoryBadge>
                </div>
                <p className="mt-2 text-sm text-slate-600">
                  {item.author}
                  <span className="text-slate-400"> · {item.role}</span>
                </p>
                <div className="mt-7 flex items-center justify-between gap-4">
                  <Link
                    href="/articles"
                    className="inline-flex items-center gap-1 text-sm font-medium text-[#1598b7] transition hover:text-slate-950"
                  >
                    Read Feature <ArrowRight className="size-4" />
                  </Link>
                  <span className="inline-flex items-center gap-2 text-xs text-slate-400">
                    <Clock3 className="size-4" /> 7 min read
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
