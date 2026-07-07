"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import SectionReveal from "./SectionReveal";
import ClipCard from "@/components/ui/product-card";
import { SectionHeader } from "../ui/section-header";
import { Autoplay, Pagination } from "swiper/modules";
import CornerShape from "../ui/shape";
// import ClipCard from "../ui/clip-card";

import Slider from "react-slick";
import { sliderSettings } from "../ui/slick-slider";

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
export const CLIP_PATH = "polygon(93.94% 0%, 94.95% 0.06%, 95.86% 0.23%, 96.72% 0.50%, 97.52% 0.86%, 98.22% 1.30%, 98.83% 1.82%, 99.29% 2.40%, 99.69% 3.04%, 99.92% 3.72%, 100% 4.44%, 100% 95.56%, 99.92% 96.28%, 99.69% 96.96%, 99.29% 97.60%, 98.83% 98.18%, 98.22% 98.70%, 97.52% 99.14%, 96.72% 99.50%, 95.86% 99.77%, 94.95% 99.94%, 93.94% 100%, 92.44% 100%, 88.32% 100%, 82.04% 100%, 74.13% 100%, 65.07% 100%, 55.38% 100%, 45.56% 100%, 36.09% 100%, 27.51% 100%, 20.29% 100%, 45.13% 100%, 42.95% 99.81%, 41.14% 99.27%, 39.62% 98.48%, 38.28% 97.52%, 37.02% 96.48%, 35.74% 95.43%, 34.36% 94.47%, 32.77% 93.68%, 30.86% 93.15%, 28.55% 92.95%, 6.74% 92.95%, 4.91% 92.83%, 3.45% 92.53%, 2.31% 92.07%, 1.45% 91.51%, 0.84% 90.92%, 0.43% 90.32%, 0.18% 89.77%, 0.05% 89.31%, 0.01% 89.00%, 0% 88.89%, 0% 4.44%, 0.08% 3.72%, 0.31% 3.04%, 0.68% 2.40%, 1.17% 1.82%, 1.78% 1.30%, 2.48% 0.86%, 3.28% 0.50%, 4.14% 0.23%, 5.08% 0.06%, 6.06% 0%)";
export default function ProductsInnovation() {
const sliderRef = useRef<Slider | null>(null);

  return (
    <section
      className="products-innovation-shell relative isolate overflow-hidden py-20 bg-secondary/15"
    >
      {/* <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[#edf8fb] h-full"
        style={{
          clipPath: "polygon(0.01% 0%, 0.04% 0.26%, 0.11% 0.65%, 0.22% 1.12%, 0.39% 1.65%, 0.63% 2.19%, 0.94% 2.71%, 1.34% 3.18%, 1.84% 3.56%, 2.45% 3.82%, 3.18% 3.91%, 13.70% 3.91%, 13.75% 3.91%, 13.90% 3.93%, 14.14% 3.97%, 14.44% 4.05%, 14.79% 4.19%, 15.17% 4.40%, 15.58% 4.68%, 16.01% 5.05%, 16.47% 5.54%, 16.79% 6.15%, 16.83% 6.21%, 16.92% 6.37%, 17.10% 6.62%, 17.31% 6.94%, 17.59% 7.32%, 17.89% 7.75%, 18.22% 8.20%, 18.54% 8.66%, 18.88% 9.11%, 19.18% 9.54%, 19.54% 9.84%, 19.87% 10.07%, 20.14% 10.24%, 20.44% 10.36%, 20.76% 10.43%, 21.06% 10.47%, 21.36% 10.49%, 21.66% 10.49%, 21.96% 10.48%, 22.26% 10.47%, 100% 10.47%, 100% 100%, 22.26% 100%, 21.96% 100.01%, 21.66% 100.01%, 21.36% 100.01%, 21.04% 100%, 20.76% 99.96%, 20.44% 99.89%, 20.14% 99.77%, 19.87% 99.60%, 19.54% 99.37%, 19.22% 99.07%, 18.89% 98.65%, 18.55% 98.19%, 18.21% 97.74%, 17.89% 97.29%, 17.59% 96.86%, 17.33% 96.48%, 17.10% 96.16%, 16.93% 95.90%, 16.83% 95.74%, 16.80% 95.68%, 16.40% 95.07%, 16.01% 94.59%, 15.58% 94.22%, 15.17% 93.92%, 14.79% 93.72%, 14.44% 93.60%, 14.14% 93.51%, 13.90% 93.47%, 13.75% 93.45%, 13.70% 93.45%, 3.18% 93.45%, 2.38% 93.35%, 1.73% 93.05%, 1.20% 92.58%, 0.80% 92.02%, 0.50% 91.42%, 0.28% 90.82%, 0.14% 90.29%, 0.05% 89.84%, 0.01% 89.51%, 0% 89.41%, 0% 0%)",
        }}
      /> */}

      <SectionReveal className="relative container">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
         <SectionHeader
                    eyebrow={" Products & Innovations"}
                    title="Powering with Custom Solutions and Intelligent AI Products."
                    description="From ideas to real-world solutions, built to scale with business
              needs."
                    align="left"
                    textColor="black"
                    maxWidth="4xl"
                  />
          
          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black "
              aria-label="Previous product"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black "
              aria-label="Next product"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-12">
          <Slider
            ref={sliderRef}
            {...sliderSettings}
            className="mt-12 -mx-2 custom-slick-style-2"
          >
            {products.map((product, index) => (
              <div 
              key={product.title} 
              className="px-2">
                <motion.div
                  // initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.6,
                  }}
                  viewport={{ once: true }}
                  className="relative h-[420px] w-full sm:h-[430px] lg:h-[450px] p-[1px]"
                  style={{
                    clipPath: CLIP_PATH,
                    WebkitClipPath: CLIP_PATH,
                    background: "#e2e8f0",
                  }}
                > 
                <div
                    className="h-full w-full"
                    style={{
                      clipPath: CLIP_PATH,
                      WebkitClipPath: CLIP_PATH,
                      background: "#fff",
                    }}
                  >
                  <ClipCard 
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    href="#"
                    className="h-full w-full"
                    showDescriptionOnHover={false}
                  />
                </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
       
      </SectionReveal>
      <div className="absolute -bottom-[7px] left-0 w-[290px] bg-[#fff] ">
        <CornerShape color="#5fb0c226" />
      </div>
    </section>
  );
}
