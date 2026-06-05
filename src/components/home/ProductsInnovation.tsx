"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import SectionReveal from "./SectionReveal";


interface ProductCard {
  title: string;
  description: string;
  image: string;
}

const products: ProductCard[] = [
  {
    title: "AI Assistant Studio",
    description:
      "Build and deploy intelligent AI assistants tailored to specific business domains, workflows, and operational needs.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Insight Control Tower",
    description:
      "Build and deploy intelligent AI assistants tailored to specific business domains, workflows, and operational needs.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Workflow Orchestrator",
    description:
      "Build and deploy intelligent AI assistants tailored to specific business domains, workflows, and operational needs.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Knowledge Graph Engine",
    description:
      "Build and deploy intelligent AI assistants tailored to specific business domains, workflows, and operational needs.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Automation Fabric",
    description:
      "Agents and workflow orchestration across human and machine processes.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80",
  },
];

export default function ProductsInnovation() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [progress, setProgress] = useState(0);

  return (
    <section
      className="products-innovation-shell relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
      style={{
        backgroundColor: "#edf8fb",

        WebkitMaskImage: "url('/img/container-shape.svg')",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        WebkitMaskSize: "100%",

        maskImage: "url('/img/container-shape.svg')",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        maskSize: "100%",
      }}
    >

      <SectionReveal className="mx-auto container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-[17px] font-semibold text-slate-950">
              Products & Innovations
            </p>
            <h2 className="mt-8 max-w-5xl text-[clamp(2.4rem,4.7vw,5rem)] font-bold leading-tight tracking-normal text-slate-950">
              Powering with Custom Solutions and Intelligent AI Products.
            </h2>
            <p className="mt-8 text-xl text-slate-900">
              From ideas to real-world solutions, built to scale with business
              needs.
            </p>
          </div>
          <div className="hidden gap-3 lg:self-end">
            <button
              onClick={() => swiper?.slidePrev()}
              className="grid size-12 place-items-center rounded-full border border-slate-300 bg-white text-slate-900 transition hover:-translate-y-1 hover:border-cyan-300"
              aria-label="Previous product"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="grid size-12 place-items-center rounded-full bg-cyan-400 text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
              aria-label="Next product"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-14 sm:mt-20 lg:mt-24">
          <Swiper
            slidesPerView={1.05}
            spaceBetween={32}
            breakpoints={{
              740: { slidesPerView: 2.05 },
              1180: { slidesPerView: 3.80, spaceBetween: 36 },
            }}
            onSwiper={setSwiper}
            onProgress={(_, value) => setProgress(value)}
            onSlideChange={(swiper) => setProgress(swiper.progress)}
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.title} className="pb-8">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                  className="relative h-[380px] w-full sm:h-[430px] lg:h-[450px]"
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
                      maskSize: "100% 100%",
                      borderRadius: "20px",
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width:768px) 100vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Base Overlay */}
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-black via-black/95 to-transparent transition-all duration-500 h-[58%]" />

                    {/* Title */}
                    <div className="absolute left-5 top-8 z-20 flex items-center gap-3">
                      <span className="mt-0 h-7 w-1 bg-[#5fb0c2]" />

                      <h3 className="max-w-[220px] !text-[20px] !font-light leading-tight text-white">
                        {product.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <div className="absolute bottom-24 left-5 right-5 z-20 ">
                      <p className="text-sm leading-6 !text-white">
                        {product.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <button
                      type="button"
                      aria-label={`Open ${product.title}`}
                      className="absolute right-7 bottom-7 z-20 grid size-14 place-items-center rounded-full bg-[#5fb0c2] text-white transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#5fb0c2]"
                    >
                      <ArrowRight className="size-7" />
                    </button>
                  </article>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-10 flex items-center gap-4 sm:mt-16 sm:gap-10">
          <div className="h-1 flex-1 overflow-hidden bg-[#b9d5f0]">
            <div
              className="h-full bg-[#5fb0c2] transition-all duration-500"
              style={{ width: `${Math.max(progress * 100, 12)}%` }}
            />
          </div>
          <div className="flex gap-3 sm:gap-6">
            <button
              onClick={() => swiper?.slidePrev()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black sm:size-14"
              aria-label="Previous product"
            >
              <ArrowLeft className="size-6" />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black sm:size-14"
              aria-label="Next product"
            >
              <ArrowRight className="size-6" />
            </button>
          </div>
        </div>
      </SectionReveal>
      <style jsx>{`
        @media (max-width: 639px) {
          .products-innovation-shell {
            -webkit-mask-image: none !important;
            mask-image: none !important;
          }
        }
      `}</style>

    </section>
  );
}
