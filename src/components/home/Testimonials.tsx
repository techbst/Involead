"use client";

import { BrainCircuit, ChartNoAxesCombined, Globe, Globe2, Microscope } from "lucide-react";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SectionReveal from "./SectionReveal";

interface Testimonial {
  review: string;
  name: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    review:
      "Their AI-driven solutions have accelerated our decision-making process across regulatory submissions. The team's deep understanding of pharma workflows is evident in every feature.",
    name: "Senior Director - Clinical Research",
    company: "Fortune 500 Pharma Company",
  },
  {
    review:
      "Their AI-driven solutions have accelerated our decision-making process across regulatory submissions. The team's deep understanding of pharma workflows is evident in every feature.",
    name: "VP - Medical Affairs",
    company: "Fortune 500 Pharma Company",
  },
  {
    review:
      "The platform helped our leaders unify data, research evidence, and operational signals without slowing down governance.",
    name: "Head of Digital Operations",
    company: "Fortune 500 Healthcare Company",
  },
];

const proofItems = [
  { icon: Globe, label: "Global Reach" },
  { icon: BrainCircuit, label: "AI-Powered Innovation" },
  { icon: ChartNoAxesCombined, label: "Research Excellence" },
];

export default function Testimonials() {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 text-black sm:px-8 lg:px-12 lg:py-28">
      <SectionReveal className="mx-auto max-w-[1420px]">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-base font-medium text-black">Client Feedback</p>
          <h2 className="mt-7 text-[clamp(2.4rem,4vw,4.4rem)] font-bold leading-tight tracking-normal">
            Trusted by Global Leaders
          </h2>
          <p className="mt-6 text-base leading-7 text-black/85 sm:text-lg">
            Driving innovation and efficiency across the world&apos;s leading
            Fortune 500 organizations
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-center">
          <aside className="mx-auto w-full max-w-[360px] text-center lg:mx-0">
            <Image
              src="/img/badge.svg"
              alt="100% Client Satisfaction"
              width={218}
              height={107}
              className="mx-auto h-auto w-[218px]"
            />

            <div className="mt-12 grid grid-cols-3 gap-5">
              {proofItems.map(({ icon: Icon, label }) => (
                <div key={label} className="group text-center">
                  <Icon className="mx-auto size-9 stroke-[1.7] transition duration-300 group-hover:-translate-y-1 group-hover:text-[#5fb0c2]" />
                  <p className="mt-2 text-sm leading-snug text-black">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 flex items-center justify-center gap-4">
              <strong className="text-[52px] font-semibold leading-none">
                4.9
              </strong>
              <div className="text-left">
                <p className="text-xl leading-none !text-[#ffc21a]">★★★★★</p>
                <p className="mt-0 text-base text-black">
                  Operational Excellence
                </p>
              </div>
            </div>
          </aside>

          <div className="min-w-0 lg:-mr-24">
            <Swiper
              modules={[Autoplay]}
              loop
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              speed={5200}
              slidesPerView={1.02}
              spaceBetween={24}
              breakpoints={{
                760: { slidesPerView: 1.6, spaceBetween: 28 },
                1180: { slidesPerView: 2.15, spaceBetween: 32 },
              }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <SwiperSlide
                  key={`${testimonial.name}-${index}`}
                  className="py-3"
                >
                  <article className="group min-h-[360px] rounded-[24px] bg-[url('/img/company.png')] bg-cover bg-center p-3 transition duration-300 hover:-translate-y-2">
                    <div className="flex min-h-[245px] flex-col rounded-[16px] bg-white p-7 sm:p-9">
                      <Image
                        src="/img/quote.svg"
                        alt=""
                        width={31}
                        height={22}
                        aria-hidden
                        className="h-auto w-[31px]"
                      />
                      <p className="mt-6 text-lg leading-8 text-black sm:text-xl">
                        {testimonial.review}
                      </p>
                    </div>
                    <div className="p-7 sm:p-9">
                      <h3 className="text-base font-medium text-black sm:text-lg">
                        {testimonial.name}
                      </h3>
                      <p className="mt-2 text-base text-black/55">
                        {testimonial.company}
                      </p>
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
