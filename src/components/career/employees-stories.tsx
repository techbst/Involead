"use client";

import Image from "next/image";
import { ArrowRight, Quote } from "lucide-react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { SectionHeader } from "@/components/ui/section-header";

const stories = [
  {
    quote:
      "At InvoLead, the work goes beyond writing code or building models. You get to understand real business problems, collaborate with strong teams, and see how your solution creates measurable impact for clients.",
    name: "Avinna Saho",
    role: "Data Scientist / AI Engineer",
    image: "/team/avinna-saho.webp",
  },
  {
    quote:
      "Every engagement gives us a new problem to solve and the freedom to think deeply. The team brings together technical expertise and business context in a way that makes the work genuinely rewarding.",
    name: "Nilesh Gupta",
    role: "Data Engineering Lead",
    image: "/team/nilesh-gupta.webp",
  },
  {
    quote:
      "What stands out is the ownership you receive from day one. Ideas are heard, collaboration is open, and you can clearly see how your contribution helps both the client and the wider team grow.",
    name: "Pinaki Gosh",
    role: "Analytics Consultant",
    image: "/team/pinaki-gosh.webp",
  },
  {
    quote:
      "InvoLead gives you space to keep learning while working on meaningful challenges. You're surrounded by people who share knowledge freely and care about building solutions that last.",
    name: "Srikanth Patil",
    role: "Senior Data Engineer",
    image: "/team/srikanth-patil.webp",
  },
];

export default function EmployeesStories() {
  return (
    <section className="employee-stories overflow-hidden bg-white py-20">
      <div className="container mx-auto">
        <SectionHeader
          className="text-slate-950"
          eyebrow="Employees stories"
          title="What Our People Say About Working at InvoLead"
          titleClassName="max-w-3xl mx-auto"
          description="Hear from the people building AI, analytics, and data solutions at InvoLead, and discover how they grow, collaborate, and create impact across real enterprise challenges."
          maxWidth="4xl"
        />
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        centeredSlides
        loop
        grabCursor
        slidesPerView={1.06}
        spaceBetween={12}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1.12, spaceBetween: 14 },
          1024: { slidesPerView: 1.22, spaceBetween: 14 },
        }}
        className="employee-stories-slider mt-12 pb-10"
      >
        {stories.map((story) => (
          <SwiperSlide key={story.name} className="h-auto">
            <article className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-[16px] bg-[#e2f2f5] px-6 py-[40px] text-center sm:px-12 lg:min-h-[320px] lg:px-20">
              <span aria-hidden="true" className="h-8 text-[52px] font-semibold leading-none text-[#72cbdc]">
               <Quote />
              </span>

              <blockquote className="mx-auto mt-3 max-w-[700px] text-[22px] font-medium italic leading-[1.55] text-[#417F8C] sm:text-[18px]">
                {story.quote}
              </blockquote>

              <div className="mt-7 flex items-center justify-center gap-3">
                <Image
                  src={story.image}
                  alt={story.name}
                  width={52}
                  height={52}
                  className="size-[52px] rounded-[15px] object-cover object-top"
                />
                <div className="text-left">
                  <div className="text-[18px] font-medium text-slate-950">{story.name}</div>
                  <div className="mt-0.1 text-[13px] text-[#6A809F]">{story.role}</div>
                </div>
              </div>

              <button
                type="button"
                className="mt-5 inline-flex items-center gap-3 rounded-full bg-black px-5 py-2.5 text-[13px] font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#48a5b9]"
                aria-label={`Read ${story.name}'s story`}
              >
                Read Story <ArrowRight className="size-4" />
              </button>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .employee-stories-slider .swiper-pagination {
          bottom: 0;
        }

        .employee-stories-slider .swiper-pagination-bullet {
          width: 11px;
          height: 11px;
          margin: 0 4px !important;
          border: 1px solid #67bfd1;
          background: transparent;
          opacity: 1;
        }

        .employee-stories-slider .swiper-pagination-bullet-active {
          background: #58b4c7;
        }
      `}</style>
    </section>
  );
}
