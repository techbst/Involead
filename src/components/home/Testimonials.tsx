'use client';

import { Pause, Quote } from 'lucide-react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import SectionReveal from './SectionReveal';

interface Testimonial {
  review: string;
  name: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    review:
      'Their GenAI research assistant has transformed how our teams explore evidence and make decisions across business units.',
    name: 'Serena Brooks',
    company: 'Clinical Research Network',
  },
  {
    review:
      'The AI-driven analytics platform helped us operationalize forecasting without slowing down compliance or governance.',
    name: 'Vir Ahuja',
    company: 'Fintech Operations Group',
  },
  {
    review:
      'We moved from fragmented reporting to an intelligent data layer our leadership teams trust every morning.',
    name: 'Maya Chen',
    company: 'Global Retail Enterprise',
  },
  {
    review:
      'The delivery team understood production constraints and built automation that our operators actually adopted.',
    name: 'Daniel Ruiz',
    company: 'Industrial Systems Co.',
  },
];

const logos = ['Nexa', 'Orion', 'Vanta', 'Helio'];

export default function Testimonials() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <SectionReveal className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold text-slate-500">Client Feedback</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,4.2rem)] font-bold leading-tight tracking-normal text-slate-950">
            Trusted by Global Leaders
          </h2>
          <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
            Driving innovation and measurable impact across more than 500 organizations.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_18px_80px_rgba(15,23,42,.08)]">
            <div className="flex items-end gap-3">
              <strong className="text-7xl font-bold tracking-normal text-slate-950">100%</strong>
              <span className="pb-3 text-sm font-bold text-slate-500">Client Satisfaction</span>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {['Global', 'AI Experts', 'Secure'].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-cyan-50 p-4 text-center text-xs font-bold text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3">
              <span className="text-4xl font-bold text-slate-950">4.9</span>
              <span className="text-sm font-semibold text-amber-500">★★★★★</span>
            </div>
            <p className="mt-6 text-sm font-semibold text-slate-500">Trusted by Global Leaders</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {logos.map((logo) => (
                <span
                  key={logo}
                  className="rounded-full border border-slate-200 px-4 py-2 text-xs font-bold text-slate-500"
                >
                  {logo}
                </span>
              ))}
            </div>
          </article>

          <div className="min-w-0">
            <Swiper
              modules={[Autoplay]}
              loop
              autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
              speed={4500}
              slidesPerView={1.05}
              spaceBetween={20}
              breakpoints={{ 760: { slidesPerView: 2.05 } }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <SwiperSlide key={`${testimonial.name}-${index}`} className="py-3">
                  <article className="min-h-[300px] rounded-2xl border border-white/70 bg-gradient-to-br from-white via-cyan-50/70 to-sky-100/80 p-7 shadow-sm backdrop-blur">
                    <div className="flex items-center justify-between">
                      <Quote className="size-9 fill-cyan-200 text-cyan-300" />
                      <Pause className="size-4 text-slate-300" />
                    </div>
                    <p className="mt-8 text-base leading-8 text-slate-700">{testimonial.review}</p>
                    <div className="mt-8">
                      <h3 className="text-lg font-bold text-slate-950">{testimonial.name}</h3>
                      <p className="mt-1 text-sm font-semibold text-slate-500">
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
