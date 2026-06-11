"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import SectionReveal from "./SectionReveal";
import ClipCard from "@/components/ui/product-card";
// import ClipCard from "../ui/clip-card";


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
      "/product-card/ai.png",
  },
  {
    title: "Insight Control Tower",
    description:
      "Build and deploy intelligent AI assistants tailored to specific business domains, workflows, and operational needs.",
    image:
      "/product-card/insight.png",
  },
  {
    title: "Workflow Orchestrator",
    description:
      "Build and deploy intelligent AI assistants tailored to specific business domains, workflows, and operational needs.",
    image:
      "/product-card/workflow1.png",
  },
  {
    title: "Knowledge Graph Engine",
    description:
      "Build and deploy intelligent AI assistants tailored to specific business domains, workflows, and operational needs.",
    image:
      "/product-card/knowledge.png",
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
      className="products-innovation-shell relative isolate overflow-hidden pt-5 pb-5 "
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#edf8fb] h-full"
        style={{
          clipPath: "polygon(0.01% 0%, 0.04% 0.26%, 0.11% 0.65%, 0.22% 1.12%, 0.39% 1.65%, 0.63% 2.19%, 0.94% 2.71%, 1.34% 3.18%, 1.84% 3.56%, 2.45% 3.82%, 3.18% 3.91%, 13.70% 3.91%, 13.75% 3.91%, 13.90% 3.93%, 14.14% 3.97%, 14.44% 4.05%, 14.79% 4.19%, 15.17% 4.40%, 15.58% 4.68%, 16.01% 5.05%, 16.47% 5.54%, 16.79% 6.15%, 16.83% 6.21%, 16.92% 6.37%, 17.10% 6.62%, 17.31% 6.94%, 17.59% 7.32%, 17.89% 7.75%, 18.22% 8.20%, 18.54% 8.66%, 18.88% 9.11%, 19.18% 9.54%, 19.54% 9.84%, 19.87% 10.07%, 20.14% 10.24%, 20.44% 10.36%, 20.76% 10.43%, 21.06% 10.47%, 21.36% 10.49%, 21.66% 10.49%, 21.96% 10.48%, 22.26% 10.47%, 100% 10.47%, 100% 100%, 22.26% 100%, 21.96% 100.01%, 21.66% 100.01%, 21.36% 100.01%, 21.04% 100%, 20.76% 99.96%, 20.44% 99.89%, 20.14% 99.77%, 19.87% 99.60%, 19.54% 99.37%, 19.22% 99.07%, 18.89% 98.65%, 18.55% 98.19%, 18.21% 97.74%, 17.89% 97.29%, 17.59% 96.86%, 17.33% 96.48%, 17.10% 96.16%, 16.93% 95.90%, 16.83% 95.74%, 16.80% 95.68%, 16.40% 95.07%, 16.01% 94.59%, 15.58% 94.22%, 15.17% 93.92%, 14.79% 93.72%, 14.44% 93.60%, 14.14% 93.51%, 13.90% 93.47%, 13.75% 93.45%, 13.70% 93.45%, 3.18% 93.45%, 2.38% 93.35%, 1.73% 93.05%, 1.20% 92.58%, 0.80% 92.02%, 0.50% 91.42%, 0.28% 90.82%, 0.14% 90.29%, 0.05% 89.84%, 0.01% 89.51%, 0% 89.41%, 0% 0%)",
        }}
      />

      <SectionReveal className="relative z-10 mx-auto container mt-40 mb-20">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className=" font-semibold text-slate-950">
              Products & Innovations
            </p>
            <h2 className="mt-2 max-w-5xl  font-bold leading-tight tracking-normal text-black">
              Powering with Custom Solutions and Intelligent AI Products.
            </h2>
            <p className="mt-5 text-xl text-slate-900">
              From ideas to real-world solutions, built to scale with business
              needs.
            </p>
          </div>
          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={() => swiper?.slidePrev()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black "
              aria-label="Previous product"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() => swiper?.slideNext()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black "
              aria-label="Next product"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-12">
          <Swiper
            slidesPerView={1}
            spaceBetween={32}
            breakpoints={{
              740: { slidesPerView: 2 },
              1140: { slidesPerView: 3 },
              1380: { slidesPerView: 4, spaceBetween: 36 },
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
                  <ClipCard 
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    href="#"
                    className="h-full w-full"
                    showDescriptionOnHover={false}
                  />
                
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
       
      </SectionReveal>
    </section>
  );
}
