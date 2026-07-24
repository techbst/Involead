import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import AnimatedHeadline from "@/components/ui/animated-title";
import { Button } from "@/components/ui/button";
import AnimatedNumber from "../ui/animated-number";

export default function AboutOverviewHero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] lg:pt-0 text-slate-950 pt-35 lg:pt-28 md:pt-28 md:pb-24">
     
        <Image src="/img/List-overview.svg" width={649} height={651} alt="List Overview" className="absolute right-[0px] top-[8%]" />
   
      <div className="container relative z-10 mx-auto grid items-center gap-10 lg:grid-cols-[1.5fr_1fr] xl:grid-cols-[1fr_1fr]">
        <div>
          <div className="text-[14px] font-medium uppercase py-2 !px-4 bg-[#e4fbff] inline-block rounded-[50px] !text-[#417f8c] mb-3 text-slate-950">
            <span>Healthcare Analytics</span>
          </div>

          <AnimatedHeadline
            title="Transform Healthcare with Smarter Data"
            titleColor="#0f172a"
            highlightColor="#5fb0c2"
            highlightFromWord={3}
            className="max-w-2xl text-[36px] font-bold leading-[115%] md:text-[54px]"
          />

          <p className="mt-4 max-w-2xl text-primary">Unify fragmented healthcare data, modernize analytics platforms, and build AI-ready ecosystems that improve patient outcomes, accelerate decision-making, and drive operational excellence.</p>

          <div className="mt-8">
            <Link href="/contact-us">
              <Button variant="default">
                Talk to Our Experts
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto min-h-[540px] w-full max-w-[690px] bg-[url('/img/Left-Rectangle.png')] bg-contain bg-top bg-no-repeat">
         

          <div className="absolute right-0 top-[100px] overflow-hidden rounded-[30px] sm:top-[104px] ">
            <Image
              src="/healthcare/hero.png"
              alt="Healthcare professional operating medical equipment"
              width={353}
              height={392}
            />
          </div>

          <div className="absolute left-[20%] top-[-5%] sm:top-[10%] xl:left-[20%] lg:-left-[5%] md:left-[20%] z-10 w-[78%] max-w-[235px] rounded-[24px] border border-[#86CDDD] bg-white p-4 shadow-[0_16px_34px_rgba(15,23,42,0.09)] sm:p-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-xs">
              <div className="flex items-center gap-3 font-medium text-slate-600 text-[9px]">
                <span className="flex gap-1.5" aria-hidden="true">
                  <i className="size-1.5 rounded-full bg-[#b8dfe8]" />
                  <i className="size-1.5 rounded-full bg-[#b8dfe8]" />
                  <i className="size-1.5 rounded-full bg-[#b8dfe8]" />
                </span>
                Healthcare Console
              </div>
              <span className="rounded-full bg-[#e5f9ef] px-2 py-1 text-[8px] font-medium text-[#14a65b]">• Live</span>
            </div>

            <div className="mt-4 text-sm leading-tight text-slate-500 sm:text-[11px]">
              Data processing<br />volume, last 6 weeks
            </div>

            <div className="mt-4 flex h-20 items-end justify-between gap-2 sm:mt-5 sm:h-[100px]">
              {[44, 44, 38, 66, 61, 87, 102].map((height, index) => (
                <span
                  key={index}
                  className="w-full max-w-[27px] rounded-t-[8px] bg-[#49a7bc]"
                  style={{ height }}
                  aria-hidden="true"
                />
              ))}
            </div>
            <div className="mt-4 text-right text-[8.15px] italic text-[#9CA3AF]">Team averages trending +12%</div>
          </div>

          <div className="absolute bottom-10 sm:bottom-0 left-0 sm:left-[30%] z-20 flex w-fit items-center gap-2 rounded-[16px] bg-[#4da9bd] px-4 py-2 text-white shadow-[0_16px_30px_rgba(77,169,189,0.22)]">
            <span className="text-[24px] font-bold leading-none">
              <AnimatedNumber value="40%" />
            </span>
            <span className="text-[14px] font-medium">Faster Decision-<br />Making</span>
          </div>
        </div>
      </div>
    </section>
  );
}
