import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/ui/section-header";

const mediaFeatures = [
  {
    publication: "Analytics India Magazine",
    title: "How enterprise AI is moving beyond proof of concept",
    description:
      "How enterprise leaders are closing the gap between promising AI experiments and measurable production value.",
    date: "July 2026",
    image: "/img/featured-research-genai.png",
    href: "/articles",
  },
  {
    publication: "Analytics India Magazine",
    title: "Building trustworthy AI consulting engagements at scale",
    description:
      "A conversation on client trust, model governance, and scoping AI projects responsibly.",
    date: "July 2026",
    image: "/img/cap-2.webp",
    href: "/articles",
  },
  {
    publication: "Analytics India Magazine",
    title: "Why data readiness remains the key to successful AI",
    description:
      "InvoLead's experts discuss the operating foundations that help enterprise AI programs succeed.",
    date: "June 2026",
    image: "/img/cap-3.webp",
    href: "/articles",
  },
];

export default function News() {
  return (
    <section className="bg-[#f0fafc] py-20">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="In the news"
          title="Media Features"
          description="Our perspectives, research, and experts featured across industry publications, conferences, podcasts, and media platforms."
          align="center"
          maxWidth="3xl"
          descriptionWidth="2xl"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mediaFeatures.map((feature, index) => (
            <article
              key={feature.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="750"
              className="group flex min-h-full flex-col rounded-2xl border border-[#c8e6ec] bg-white p-4 shadow-[0_14px_35px_rgba(36,112,128,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(36,112,128,0.12)]"
            >
              <div className="relative min-h-[210px] overflow-hidden rounded-xl">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full border border-[#c5e6ed] bg-[#edf9fb]/95 px-3 py-1.5 text-xs font-medium text-[#43889a] backdrop-blur-sm">
                  {feature.publication}
                </span>
              </div>

              <div className="flex flex-1 flex-col pt-5">
                <h3 className="relative pl-3 text-xl font-medium leading-snug tracking-[-0.02em] text-slate-950 before:absolute before:inset-y-1 before:left-0 before:w-0.5 before:rounded-full before:bg-[#39a9c3]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#d7edf1] pt-4 text-xs">
                  <span className="text-slate-400">{feature.date}</span>
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-1 font-medium text-[#1297b6] transition hover:text-slate-950"
                    aria-label={`Read media feature: ${feature.title}`}
                  >
                    Read Feature <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
