"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BlogCard, type BlogPost } from "@/components/ui/blog-card";
import { SectionHeader } from "@/components/ui/section-header";

const cardPosts: BlogPost[] = [
  {
    featuredimg: "/img/cap-1.webp",
    category: "Products & Innovations",
    title: "AI Advantage",
    excerpt:
      "Practical AI and analytics insights for business leaders looking to stay ahead.",
    href: "/articles",
    ctaLabel: "Subscribe on LinkedIn",
  },
  {
    featuredimg: "/img/cap-2.webp",
    category: "Products & Innovations",
    title: "Leadership Brief",
    excerpt:
      "Executive perspectives on AI strategy, governance, decision-making, and enterprise transformation.",
    href: "/articles",
    ctaLabel: "Subscribe on LinkedIn",
  },
  {
    featuredimg: "/img/cap-3.webp",
    category: "Products & Innovations",
    title: "Inside the Model",
    excerpt:
      "Technical deep dives into GenAI, machine learning, data engineering, LLMs, and enterprise AI implementation.",
    href: "/articles",
    ctaLabel: "Subscribe on LinkedIn",
  },
  {
    featuredimg: "/img/cap-4.webp",
    category: "Products & Innovations",
    title: "Data to Decisions",
    excerpt:
      "Applied analytics ideas that help teams move from fragmented information to confident action.",
    href: "/articles",
    ctaLabel: "Subscribe on LinkedIn",
  },
];

export default function TL_CARDS() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-[#effafd] py-16 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            align="left"
            eyebrow="Monthly Intelligence"
            title="Stay connected with our latest thinking"
            description="From ideas to real-world solutions, built to scale with business needs."
            maxWidth="5xl"
            descriptionWidth="4xl"
            titleClassName="normal-case"
          />

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="grid size-12 place-items-center rounded-full bg-[#48a8be] text-white transition hover:-translate-y-1 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#48a8be]"
              aria-label="Previous publication"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="grid size-12 place-items-center rounded-full bg-[#48a8be] text-white transition hover:-translate-y-1 hover:bg-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#48a8be]"
              aria-label="Next publication"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <Swiper
          className="mt-12"
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
          {cardPosts.map((post, index) => (
            <SwiperSlide key={post.title} className="h-auto py-2" data-aos="fade-up" data-aos-delay={index * 100} data-aos-duration="750">
              <BlogCard post={post} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
