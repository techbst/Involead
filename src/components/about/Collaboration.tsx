"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageSquareText, UsersRound } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
const images = [
  "/data-science/photo-1552664730-d307ca884978.avif",
  "/data-science/photo-1460925895917-afdab827c52f.jpg",
  "/data-science/photo-1451187580459-43490279c0fa.jpg",
  "/data-science/photo-1552664730-d307ca884978.avif",
  "/data-science/photo-1460925895917-afdab827c52f.jpg",
  "/data-science/photo-1451187580459-43490279c0fa.jpg",
];

export default function Collaboration() {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <section className="bg-secondary/15 py-20">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            title="Where Collaboration Meets Commitment"
            description="A culture where teams connect, support each other, and stay committed to shared goals."
            descriptionWidth="5xl"
            maxWidth="5xl"
            align="left"
          />
          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black "
              aria-label="Previous product"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black "
              aria-label="Next product"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
        

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={18}
            slidesPerView={1}
            loop={false}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="mt-12 custom-swiper-style-2"
          >
            {images.map((src) => (
              <SwiperSlide key={src}>
                <div className="relative h-[320px] overflow-hidden rounded-[24px]">
                  <Image src={src} alt="Collaboration" fill className="object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
