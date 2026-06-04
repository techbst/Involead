"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { servicesSection } from "@/data/home";
import SectionReveal from "./SectionReveal";

export default function ServicesSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <SectionReveal className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold text-slate-500">
            {servicesSection.eyebrow}
          </p>

          <h2 className="mt-3 max-w-4xl text-[clamp(2rem,4vw,4.35rem)] font-bold leading-tight text-slate-950">
            {servicesSection.title}
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            {servicesSection.description}
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
       
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
            1440: {
              slidesPerView: 4,
            },
            1700: {
              slidesPerView: 4,
            },
          }}
          className="mt-14"
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
                className="relative h-[450px] w-full"
              >
                <article
                  className="group relative h-full w-full overflow-hidden"
                  style={{
                    WebkitMaskImage: "url('/img/shape-card.svg')",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    WebkitMaskSize: "100% 100%",
                    maskImage: "url('/img/shape-card.svg')",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                    maskSize: "auto",
                    borderRadius: "20px",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width:768px) 100vw, 20vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Base Overlay */}
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Hover Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-black via-black/95 to-transparent transition-all duration-500 group-hover:h-[58%]" />

                  {/* Title */}
                  <div className="absolute left-5 top-8 z-20 flex items-center gap-3">
                    <span className="mt-0 h-7 w-1 bg-[#5fb0c2]" />

                    <h3 className="max-w-[220px] !text-[20px] !font-light leading-tight text-white">
                      {card.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="absolute bottom-24 left-5 right-5 z-20 translate-y-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm leading-6 !text-white">
                      {card.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <Link
                    href={card.href}
                    aria-label={`Open ${card.title}`}
                    className="absolute bottom-6 right-5 z-30 grid size-14 place-items-center rounded-full bg-[#5fb0c2] text-white shadow-lg transition-all duration-500 group-hover:-translate-y-2   hover:text-white hover:bg-black"
                  >
                    <ArrowRight className="size-7" />
                  </Link>
                </article>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </SectionReveal>
    </section>
  );
}