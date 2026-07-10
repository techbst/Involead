import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/ui/section-header";

const industryReports = [
  {
    date: "July 2026",
    title: "AI in Consumer Goods",
    description:
      "How intelligent planning and analytics are reshaping consumer goods operations.",
    image: "/img/who-weare.jpg",
  },
  {
    date: "July 2026",
    title: "AI in Retail",
    description:
      "Emerging applications transforming merchandising, pricing, and customer experience.",
    image: "/service-img/consulting.webp",
  },
  {
    date: "June 2026",
    title: "AI in Life Sciences",
    description:
      "Practical advances in data platforms, patient insights, and intelligent operations.",
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

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industryReports.map((report, index) => (
            <article
              key={report.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="750"
              className="group grid min-h-[210px] grid-cols-[1fr_120px] overflow-hidden rounded-2xl border border-transparent bg-[#f2fafc] transition duration-300 hover:-translate-y-1 hover:border-[#bfe3eb] hover:shadow-[0_16px_35px_rgba(36,112,128,0.1)] sm:grid-cols-[1fr_145px]"
            >
              <div className="flex min-w-0 flex-col p-5 sm:p-6">
                <p className="text-xs font-medium text-[#1598b7]">
                  {report.date}
                </p>
                <h3 className="mt-2 text-xl font-medium leading-snug tracking-[-0.02em] text-slate-950">
                  {report.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {report.description}
                </p>
                <Link
                  href="/articles"
                  className="mt-auto inline-flex w-fit items-center gap-1 pt-5 text-sm font-medium text-[#1598b7] transition hover:text-slate-950"
                  aria-label={`Read report: ${report.title}`}
                >
                  Read Report <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="relative m-3 ml-0 min-h-[180px] overflow-hidden rounded-xl">
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
