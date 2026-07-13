"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BlogCard, type BlogPost } from "@/components/ui/blog-card";
import { SectionHeader } from "@/components/ui/section-header";

const cardPosts: BlogPost[] = [
  {
    featuredimg: "/thought-leadership/7c9436472ebf0a1a08027bfe92b55aaf081c4967.jpg",
    category: "Products & Innovations",
    title: "AI Advantage",
    excerpt:
      "Practical AI and analytics insights for business leaders looking to stay ahead.",
    href: "/articles",
    ctaLabel: "Subscribe on LinkedIn",
  },
  {
    featuredimg: "/thought-leadership/f62b57d26c1535cf52120528a135ba72247123f7.jpg",
    category: "Products & Innovations",
    title: "Leadership Brief",
    excerpt:
      "Executive perspectives on AI strategy, governance, decision-making, and enterprise transformation.",
    href: "/articles",
    ctaLabel: "Subscribe on LinkedIn",
  },
  {
    featuredimg: "/thought-leadership/e5be8f1e0a115d7ff675e32c3bdb29d73622c896.jpg",
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
    <section className="bg-[#effafd] py-20 md:py-20 max-[680px]:!pb-28 relative">
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

          <div className="flex gap-3 max-[680px]:absolute max-[680px]:bottom-12 max-[680px]:right-0  max-[680px]:left-0 max-[680px]:mx-auto max-[680px]:justify-center">
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
            <SwiperSlide key={post.title} className="h-auto py-2">
              <BlogCard post={post} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
