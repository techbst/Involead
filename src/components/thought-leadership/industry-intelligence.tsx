import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/ui/section-header";

const industryReports = [
  {
    date: "July 2026",
    title: "AI in Consumer Goods",
    description:
      "Elastic multi-cloud systems that scale workload, cost",
    image: "/img/who-weare.jpg",
  },
  {
    date: "July 2026",
    title: "AI in Retail",
    description:
      "Elastic multi-cloud systems that scale workload, cost",
    image: "/service-img/consulting.webp",
  },
  {
    date: "June 2026",
    title: "AI in Life Sciences",
    description:
      "Elastic multi-cloud systems that scale workload, cost",
    image: "/service-img/datasci.png",
  },
];

export default function IndustryIntelligence() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="Industry Intelligence"
          title="Monthly Industry Reports"
          description="Stay informed with monthly reports covering emerging trends, market developments, and practical insights across industries where AI and analytics are creating measurable impact."
          align="left"
          maxWidth="5xl"
          descriptionWidth="4xl"
        />

        <div className="mt-12 grid gap-5 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 md:grid-cols-1">
          {industryReports.map((report, index) => (
            <article
              key={report.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="750"
              className="group grid grid-cols-[1fr_120px] overflow-hidden rounded-[24px] border border-transparent max-[680px]:border-[#bfe3eb] bg-[#f2fafc] transition duration-300 hover:-translate-y-1 hover:border-[#bfe3eb] hover:shadow-[0_16px_35px_rgba(36,112,128,0.1)] sm:grid-cols-[1fr_165px]"
            >
              <div className="flex min-w-0 flex-col p-5 sm:p-[16px]">
                <div className="text-[13px] font-regular text-secondary">
                  {report.date}
                </div>
                <div className="mt-2 lg:text-[20px] md:text-[18px] md:text-[16px] font-medium leading-snug tracking-[-0.02em]">
                  {report.title}
                </div>
                <div className="mt-5 max-[680px]:mt-1 text-[15px] max-[680px]:text-[13px] max-[980px]:text-[14px] text-primary leading-6 line-clamp-2">
                  {report.description}
                </div>
                <Link
                  href="/articles"
                  className="mt-auto max-[680px]:mt-1 inline-flex w-fit items-center gap-1 pt-1 text-sm font-medium text-[#1598b7] transition hover:text-slate-950"
                  aria-label={`Read report: ${report.title}`}
                >
                  Read Report <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="relative m-3 ml-0 overflow-hidden rounded-xl">
                <Image
                  src={report.image}
                  alt={report.title}
                  fill
                  sizes="145px"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#2f9db7]/10" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
