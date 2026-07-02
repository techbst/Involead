"use client";

import { motion } from "framer-motion";
import { Eye, Target, Telescope } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import CornerShape from "../ui/shape";

const cards = [
  {
    title: "Our Vision",
    icon: Telescope,
    image: "/about/vision.webp",
    className: "bg-primary text-white",
    text: [
      "Data is generated at every unit of your business. The magic is connecting those data sources to drive meaningful, actionable insights.",
      "Our team at InvoLead - with deep expertise in Advanced Analytics - creates this magic consistently: a simple, sustainable, yet scalable framework to drive outcomes that matter.",
    ],
  },
  {
    title: "Our Mission",
    icon: Target,
    image: "/about/mission.webp",
    className: "bg-secondary text-slate-950",
    text: [
      "We believe in radical simplification. Our aim is to simplify business outcomes from complex data processes - facilitating faster, better decision-making at every level.",
      "With innovation as our core strength, we envision being the thought partner in your data-driven journey, every step of the way.",
    ],
  },
];

export default function WhatDrives() {
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto">
        <SectionHeader
        eyebrow="Our Vision & Mission"
          title="What drives us forward"
          description="Two guiding principles underpin everything we do at InvoLead - a clear vision for the future and a focused mission for today."
          descriptionWidth="3xl"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group h-[360px] [perspective:1200px]"
              >
                <div
  className={`relative h-full w-full rounded-[1.75rem] transition-transform duration-700 [transform-style:preserve-3d] ${
    index === 0
      ? "[transform:rotateY(180deg)] group-hover:[transform:rotateY(0deg)]"
      : "group-hover:[transform:rotateY(180deg)]"
  }`}
>
                  
                  {/* Front */}
                  <div className="absolute inset-0 overflow-hidden rounded-[1.75rem] [backface-visibility:hidden]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

                    <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-9">
                      <span className="grid size-13 place-items-center rounded-[14px] bg-secondary/20 text-white backdrop-blur-md">
                        <Icon className="size-6" />
                      </span>

                      <div>
                        <h3 className="text-2xl font-semibold text-white md:text-3xl">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 rounded-[1.75rem] bg-secondary p-7  [backface-visibility:hidden] [transform:rotateY(180deg)] md:p-9">
                    <div className="absolute -right-1 -top-1 max-w-[250px] opacity-20"><img src="/img/shape-2.webp" /></div>
                    <div className="mb-8 flex items-center justify-between">
                      <span className="grid size-13 place-items-center rounded-[14px] bg-white text-secondary backdrop-blur-md">
                        <Icon className="size-6" />
                      </span>                 
                    </div>

                    <h3 className="mb-5 text-2xl font-semibold text-white md:text-3xl">
                      {card.title}
                    </h3>

                    <div className="space-y-4">
                      {card.text.map((paragraph) => (
                        <p key={paragraph} className="!text-white">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
      <div className="absolute -bottom-[6px] left-0 w-[290px] bg-secondary/15">
        <CornerShape color="#fff" />
      </div>
    </section>
  );
}
