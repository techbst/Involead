"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Pause, Star } from "lucide-react";
import { Button } from "./button";
import { SectionHeader } from "./section-header";

export interface CTAData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  video: string;
  members: number;
  avatars: string[];
}

interface Props {
  data: CTAData;
}

export default function CallToAction1({ data }: Props) {
  return (
    <section className="bg-black relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={data.video} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#10081d]/90 via-[#1b0d45]/50 to-[#10081d]/85" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto flex container flex-col overflow-hidden min-h-[450px]"
      >
        

        <div className="relative z-10 flex h-full flex-1 flex-col justify-between py-20 md:py-20">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <SectionHeader
                align="left"
                title={data.title}
                description=""
                textColor="white"
            />
            <div>
            <Button asChild variant="outline" className="max-[680px]:mb-6">
                <Link href={data.buttonLink}>
                {data.buttonText}
                <ArrowRight className="size-4" />
                </Link>
            </Button>
          </div>
          </div>

          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl lg:text-[18px] md:text-[16px] sm:text-[14px] font-medium leading-relaxed text-white">
              {data.description}
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {data.avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white"
                  >
                    <Image
                      src={avatar}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <div>
                <div className="mb-2 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 fill-white text-white"
                    />
                  ))}
                </div>

                <div className="text-sm uppercase tracking-wider text-white">
                  Trusted By{" "}
                  <span className="font-semibold">{data.members}+</span> Clients
                </div>
              </div>
            </div>
          </div>
        </div>

      </motion.div>
    </section>
  );
}