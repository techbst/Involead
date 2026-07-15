"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SectionHeader } from "@/components/ui/section-header";
import { workPrinciples } from "./career-data";

export default function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsViewportRef = useRef<HTMLDivElement>(null);
  const cardsTrackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      const media = gsap.matchMedia();

      media.add("(min-width: 1024px)", () => {
        const viewport = cardsViewportRef.current;
        const track = cardsTrackRef.current;
        const cards = gsap.utils.toArray<HTMLElement>(".work-card");

        if (!viewport || !track || cards.length === 0) return;

        const overflow = () => Math.max(0, track.scrollHeight - viewport.clientHeight);
        let activeIndex = -1;

        const highlightCard = (nextIndex: number) => {
          if (nextIndex === activeIndex) return;
          activeIndex = nextIndex;

          cards.forEach((card, index) => {
            const active = index === activeIndex;
            gsap.to(card, {
              backgroundColor: active ? "#48a5b9" : "#e2f2f5",
              color: active ? "#ffffff" : "#171717",
              duration: 0.25,
              overwrite: true,
            });
          });
        };

        highlightCard(0);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: () => `+=${Math.max(overflow() * 2.2, 590)}`,
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const nextIndex = Math.min(
                cards.length - 1,
                Math.floor(self.progress * cards.length),
              );
              highlightCard(nextIndex);
            },
          },
        });

        timeline
          .to(track, { y: () => -overflow(), duration: 0.86, ease: "none" })
          .to({}, { duration: 0.14 });

        return () => {
          gsap.set(track, { clearProps: "transform" });
          gsap.set(cards, { clearProps: "backgroundColor,color" });
        };
      });

      requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => media.revert();
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1d1d1d] py-16 text-white sm:py-20 lg:h-screen lg:overflow-hidden lg:py-0"
    >
      <div className="container mx-auto grid h-full items-center gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-20">
        <SectionHeader
          eyebrow="How we work"
          title="Simple, Transparent, and People-First Process"
          description="We believe great AI solutions come from curious minds, collaborative teams, and a strong understanding of business. That's why we combine technical excellence with practical problem-solving on every engagement."
          align="left"
          tone="light"
          maxWidth="2xl"
          descriptionWidth="xl"
          
        />

        <div
          ref={cardsViewportRef}
          className="lg:h-[clamp(560px,62vh,570px)] lg:overflow-hidden"
        >
          <div ref={cardsTrackRef} className="space-y-3">
            {workPrinciples.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="work-card min-h-[190px] rounded-[12px] bg-[#e2f2f5] p-5 text-[#171717] sm:p-6  lg:min-h-0"
                >
                  <span className="grid size-[50px] place-items-center rounded-[8px] bg-white text-[#36a5bd]">
                    <Icon aria-hidden="true" className="size-[22px] stroke-[1.4]" />
                  </span>
                  <h3 className="mt-3 text-[17px] font-medium leading-tight sm:text-[18px]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12px] leading-[1.55] text-current opacity-90 sm:text-[13px]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
