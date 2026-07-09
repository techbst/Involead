"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import { servicesSection } from "@/data/home";
import SectionReveal from "./SectionReveal";
import ClipCard from "@/components/ui/clip-card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import CornerShape from "../ui/shape";
import { sliderSettings } from "../ui/swiper-slider";
export default function ServicesSection() {
  const sliderRef = useRef<SwiperType | null>(null);

  return (
    <section className="bg-white pt-20 pb-20 relative">
      <SectionReveal className="container mx-auto ">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            eyebrow={servicesSection.eyebrow}
            title={servicesSection.title}
            description={servicesSection.description}
            align="left"
          />
          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={() => sliderRef.current?.slidePrev()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black "
              aria-label="Previous product"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() => sliderRef.current?.slideNext()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black "
              aria-label="Next product"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>
        <Swiper
          onSwiper={(swiper) => {
            sliderRef.current = swiper;
          }}
          {...sliderSettings}
          className="mt-12"
        >
          {servicesSection.cards.map((card, index) => (
            <SwiperSlide key={card.title} className="h-auto">
              <motion.div
                // initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                // transition={{
                //   delay: index * 0.08,
                //   duration: 0.6,
                // }}
                viewport={{ once: true }}
                className="relative h-[360px] w-full sm:h-[420px] lg:h-[450px]"
              >
                <ClipCard
                  image={card.image}
                  title={card.title}
                  description={card.description}
                  href={card.href}
                  showDescriptionOnHover={true}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionReveal>
      <div className="absolute -bottom-[8px] left-0 w-[290px] bg-black ">
        <CornerShape color="#fff" />
      </div>
      {/* <CornerShape color="#fff" /> */}
    </section>
  );
}
