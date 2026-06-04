'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import SectionReveal from './SectionReveal';

interface ProductCard {
  title: string;
  description: string;
  image: string;
}

const products: ProductCard[] = [
  {
    title: 'AI Assistant Platform',
    description: 'Enterprise copilots trained on governed data and operational workflows.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast demand, risk, customer behavior, and operational capacity.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Vision Intelligence',
    description: 'Computer vision pipelines for QA, safety, and document intelligence.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Knowledge System',
    description: 'Search, summarize, and reason across enterprise documents and systems.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Automation Fabric',
    description: 'Agents and workflow orchestration across human and machine processes.',
    image:
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=900&q=80',
  },
];

export default function ProductsInnovation() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [progress, setProgress] = useState(0);

  return (
    <section className="bg-[#eefbff] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <SectionReveal className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-semibold text-slate-500">Products & Innovation</p>
            <h2 className="mt-3 max-w-4xl text-[clamp(2rem,4vw,4.2rem)] font-bold leading-tight tracking-normal text-slate-950">
              Powering with Custom Solutions and Intelligent AI Products
            </h2>
          </div>
          <div className="flex gap-3 lg:self-end">
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

        <div className="mt-12">
          <Swiper
            slidesPerView={1.12}
            spaceBetween={22}
            breakpoints={{
              740: { slidesPerView: 2.3 },
              1180: { slidesPerView: 4, spaceBetween: 28 },
            }}
            onSwiper={setSwiper}
            onProgress={(_, value) => setProgress(value)}
            onSlideChange={(swiper) => setProgress(swiper.progress)}
          >
            {products.map((product) => (
              <SwiperSlide key={product.title} className="pb-8">
                <article className="group relative h-[420px] overflow-hidden rounded-[1.2rem] bg-slate-950 text-white transition-all duration-500 hover:-translate-y-2">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(min-width: 1180px) 25vw, (min-width: 740px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/85" />
                  <div className="relative z-10 flex h-full flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold leading-tight">{product.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/75">{product.description}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-cyan-100">
          <div
            className="h-full rounded-full bg-cyan-400 transition-all duration-500"
            style={{ width: `${Math.max(progress * 100, 12)}%` }}
          />
        </div>
      </SectionReveal>
    </section>
  );
}
