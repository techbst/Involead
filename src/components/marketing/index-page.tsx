"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import SectionReveal from "@/components/home/SectionReveal";
import type { MarketingIndexCard } from "@/content/marketing-pages";

type IndexPageProps = {
  title: string;
  description: string;
  eyebrow: string;
  cards: readonly MarketingIndexCard[];
  accent: string;
};

export default function MarketingIndexPage({
  title,
  description,
  eyebrow,
  cards,
  accent,
}: IndexPageProps) {
  return (
    <div className="overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)] text-slate-950">
      <section className="relative pt-28 pb-16">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[26rem]"
          style={{
            background: `radial-gradient(circle at 20% 30%, ${accent}22, transparent 25%), radial-gradient(circle at 80% 15%, rgba(255,255,255,0.95), transparent 24%), linear-gradient(135deg, ${accent}12, transparent 60%)`,
          }}
        />
        <div className="container mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-white/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary shadow-sm backdrop-blur">
            {eyebrow}
          </p>
          <h1 className="mt-5 text-[clamp(2.8rem,6vw,5.4rem)] font-semibold leading-[0.95] tracking-tight">
            {title}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            {description}
          </p>
        </div>
      </section>

      <SectionReveal className="container mx-auto pb-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <motion.div
              key={card.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <Link
                href={`/${card.slug}`}
                className="group block overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-950">
                    {card.eyebrow}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {card.description}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary">
                    Open page
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionReveal>
    </div>
  );
}
