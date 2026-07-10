"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, LayoutPanelTop } from "lucide-react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const whitePapers = [
  {
    title: "Evaluating Build vs. Buy for AI Analytics Platforms",
    description:
      "A decision framework for CIOs weighing custom development against vendor platforms.",
    pages: "18 pages",
  },
  {
    title: "Governing Generative AI at Enterprise Scale",
    description:
      "A practical operating model for responsible adoption, oversight, and measurable value.",
    pages: "22 pages",
  },
  {
    title: "Modern Data Foundations for AI-Ready Businesses",
    description:
      "How leaders can prepare trusted, accessible data for the next generation of AI products.",
    pages: "16 pages",
  },
  {
    title: "From AI Pilots to Production Value",
    description:
      "The capabilities and processes teams need to turn experiments into resilient systems.",
    pages: "20 pages",
  },
];

export default function FeaturedResearch() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <SectionHeader
          align="left"
          eyebrow="Featured Research"
          title="White papers"
          description="In-depth research and practical frameworks that help organizations understand emerging technologies, evaluate opportunities, and accelerate AI and analytics adoption."
          maxWidth="4xl"
          descriptionWidth="3xl"
        />

        <article data-aos="fade-up" data-aos-delay="0" data-aos-duration="750" className="mt-10 overflow-hidden rounded-3xl border border-secondary bg-white md:mt-14 lg:grid lg:min-h-[430px] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
            <Image
              src="/img/featured-research-genai.png"
              alt="A translucent robotic hand reaching toward a human hand"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-9 sm:px-10 lg:px-12 lg:py-12">
            <div className="text-[13px] font_regular text-secondary">Latest Release</div>
            <h3 className="mt-2 max-w-xl font-semibold leading-tight tracking-[-0.03em">
              Operationalizing GenAI: A Practical Framework for Enterprise
              Adoption
            </h3>
            <div className="mt-5 max-w-xl leading-7 lg:text-[18px]">
              A structured approach to moving generative AI initiatives from
              pilot to production, with governance, data readiness, and ROI
              benchmarks.
            </div>
            <div className="mt-9 text-[13px] text-[#94A3B8]">
              Data Engineering · 18 pages · July 26
            </div>
            <Button variant="default" className="mt-6 w-fit">
              Download PDF
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </article>

        <div className="mt-12 flex items-center justify-between gap-4">
          <h3 className="text-xl font-medium text-slate-950">
            Other White Papers
          </h3>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous white paper"
              onClick={() => swiperRef.current?.slidePrev()}
              className="grid size-11 place-items-center rounded-full bg-[#50adc2] text-white transition hover:bg-[#378fa4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#378fa4]"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Next white paper"
              onClick={() => swiperRef.current?.slideNext()}
              className="grid size-11 place-items-center rounded-full bg-black text-white transition hover:bg-[#50adc2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>

        <Swiper
          className="mt-7"
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          loop
          grabCursor
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {whitePapers.map((paper, index) => (
            <SwiperSlide key={paper.title} className="h-auto" data-aos="fade-up" data-aos-delay={index * 100} data-aos-duration="750">
              <article className="flex h-full min-h-[255px] flex-col rounded-2xl border border-[#bfe3eb] bg-[#effafd] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-900/5">
                <span className="grid size-12 place-items-center rounded-md bg-[#5aafc2] text-white">
                  <LayoutPanelTop className="size-5" strokeWidth={1.5} />
                </span>
                <h4 className="mt-6 text-xl font-medium leading-snug tracking-[-0.02em] min-h-[60px]">
                  {paper.title}
                </h4>
                <p className="my-3 text-sm leading-6 !text-primary/60">
                  {paper.description}
                </p>
                <div className="mt-auto flex items-center justify-between gap-3 border-t border-[#c6e7ee] pt-4">
                  <span className="text-[13px] text-[#94A3B8]">{paper.pages}</span>
                  <button
                    type="button"
                    className="inline-flex items-center gap-3 text-[18px] font-medium text-[#0891B2] transition hover:text-primary"
                  >
                    Download PDF
                    <ArrowRight className="size-4" />
                  </button>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
