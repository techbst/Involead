import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import AnimatedHeadline from "@/components/ui/animated-title";
import { Button } from "@/components/ui/button";
import AnimatedNumber from "../ui/animated-number";

const EXPERTISE_CARD_CLIP_PATH =
  "polygon(93.94% 0%, 94.95% 0.06%, 95.86% 0.23%, 96.72% 0.50%, 97.52% 0.86%, 98.22% 1.30%, 98.83% 1.82%, 99.29% 2.40%, 99.69% 3.04%, 99.92% 3.72%, 100% 4.44%, 100% 95.56%, 99.92% 96.28%, 99.69% 96.96%, 99.29% 97.60%, 98.83% 98.18%, 98.22% 98.70%, 97.52% 99.14%, 96.72% 99.50%, 95.86% 99.77%, 94.95% 99.94%, 93.94% 100%, 92.44% 100%, 88.32% 100%, 82.04% 100%, 74.13% 100%, 65.07% 100%, 55.38% 100%, 45.56% 100%, 36.09% 100%, 27.51% 100%, 20.29% 100%, 45.13% 100%, 42.95% 99.81%, 41.14% 99.27%, 39.62% 98.48%, 38.28% 97.52%, 37.02% 96.48%, 35.74% 95.43%, 34.36% 94.47%, 32.77% 93.68%, 30.86% 93.15%, 28.55% 92.95%, 6.74% 92.95%, 4.91% 92.83%, 3.45% 92.53%, 2.31% 92.07%, 1.45% 91.51%, 0.84% 90.92%, 0.43% 90.32%, 0.18% 89.77%, 0.05% 89.31%, 0.01% 89.00%, 0% 88.89%, 0% 4.44%, 0.08% 3.72%, 0.31% 3.04%, 0.68% 2.40%, 1.17% 1.82%, 1.78% 1.30%, 2.48% 0.86%, 3.28% 0.50%, 4.14% 0.23%, 5.08% 0.06%, 6.06% 0%)";

export default function AboutOverviewHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] lg:pt-0 text-slate-950 pt-35 lg:pt-28 md:pt-28 md:pb-24">
     
        <Image src="/img/List-overview.svg" width={649} height={651} alt="List Overview" className="absolute right-[0px] top-[8%]" />
   
      <div className="container relative z-10 mx-auto grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <div className="text-[14px] font-medium uppercase py-0 !px-4 bg-[#e4fbff] inline-block rounded-[50px] !text-[#417f8c] mb-3">
            <span>About Us</span>
          </div>

          <AnimatedHeadline
            title="Helping Organizations Turn Data into Business Advantage"
            titleColor="#0f172a"
            highlightColor="#5fb0c2"
            highlightFromWord={2}
            className="max-w-2xl text-[36px] font-bold leading-[115%] md:text-[54px]"
          />

          <p className="mt-4 max-w-2xl text-primary">
            Businesses today have more data than ever before, yet many still struggle
            to turn it into confident decisions. At InvoLead, we help enterprises
            connect fragmented data, operationalize AI, and build intelligent systems
            that create measurable business impact.
          </p>

          <div className="mt-8">
            <Link href="/contact-us">
              <Button variant="default">
                Talk to Our Experts
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full bg-[url('/img/Left-Rectangle.png')] bg-contain bg-top bg-no-repeat md:px-10 pb-24 pt-28 md:pb-28 md:pt-32">


          <div className="relative flex items-center gap-5 lg:gap-5 ">


            <div className=" w-full md:w-[50%] flex flex-col gap-5">
              <div className="overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <Image
                  src="/img/over-hero-top.jpg"
                  alt="Hand placing wooden blocks"
                  width={560}
                  height={420}
                  className="h-[280px]"
                />
              </div>
              <div className="rounded-[1.65rem] bg-[#56abc0] px-4 py-6 text-white shadow-[0_22px_55px_rgba(86,171,192,0.32)] md:px-4">
                <div className="flex items-center justify-between gap-5">
                  <div>
                    <div className="text-[24px] font-semibold leading-none tracking-[-0.04em]">
                      {/* 30% */}
                      <AnimatedNumber 
                      value="30%"
                      />
                    </div>
                    <p className="mt-2 ] text-[16px] leading-[1.45] text-white/95 md:text-[18px]">
                      Business Formation
                      <br />
                      &amp; Growth
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <Image src="/img/animate_vector.svg" alt="Animated Vector" width={80} height={80} className="h-auto w-full object-contain" />
                    <div className="flex  items-end gap-1 pb-1">
                      {[16, 20, 22, 28, 36, 33, 46].map((height, index) => (
                        <span
                          key={index}
                          className={`w-[7px] rounded-[0.5px] ${index === 4  ? 'bg-[#8dd7e9]' : index === 5 ? 'bg-[#3DE6F5]' : index === 6 ? 'bg-[#57E0FF]' : 'bg-[#B6D3FF]'}`}
                          style={{ height }}
                        />
                      ))}
                    </div>

                  </div>
                </div>


              </div>


            </div>
            <div className=" w-full md:w-[50%]">
              <div
                className="block overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
                style={{ clipPath: EXPERTISE_CARD_CLIP_PATH }}
              >
                <Image
                  src="/img/overivew-main.png"
                  alt="Team celebrating success"
                  width={420}
                  height={640}
                  className="h-[390px] w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
