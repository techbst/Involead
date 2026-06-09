"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { servicesSection } from "@/data/home";
import SectionReveal from "./SectionReveal";
import ClipCard from "@/components/ui/clip-card";

export default function ServicesSection() {
  return (
    <section className="bg-white py-15 ">
      <SectionReveal className="container mx-auto ">
        <div className="max-w-5xl">
          <p className="!text-[16px] font-semibold text-slate-500">
            {servicesSection.eyebrow}
          </p>

          <h2 className="mt-2 max-w-2xl text-2xl md:text-[46px] font-bold leading-tight text-slate-950 ">
            {servicesSection.title}
          </h2>

          <p className="mt-4 max-w-2xl !text-[16px] !leading-[130%] text-black sm:text-base">
            {servicesSection.description}
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={18}
          slidesPerView={1}
       
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1340: {
              slidesPerView: 4,
            },
            1700: {
              slidesPerView: 4,
            },
          }}
          className="mt-12"
        >
          {servicesSection.cards.map((card, index) => (
            <SwiperSlide key={card.title}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.6,
                }}
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
    </section>
  );
}
