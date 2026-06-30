"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquareText, UsersRound } from "lucide-react";

import { SectionHeader } from "@/components/ui/section-header";

const images = [
  "/data-science/photo-1552664730-d307ca884978.avif",
  "/data-science/photo-1460925895917-afdab827c52f.jpg",
  "/data-science/photo-1451187580459-43490279c0fa.jpg",
];

export default function Collaboration() {
  return (
    <section className="bg-[#f8fbff] py-20">
      <div className="container mx-auto">
        <SectionHeader
          title="Where Collaboration Meets Commitment"
          description="A culture where teams connect, support each other, and stay committed to shared goals."
          descriptionWidth="3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 overflow-hidden rounded-[1.75rem] border border-white bg-white p-4 shadow-[0_26px_70px_rgba(15,23,42,0.08)] md:p-6"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(95,176,194,0.16),transparent_30%),radial-gradient(circle_at_84%_80%,rgba(88,28,135,0.08),transparent_30%)]" />

          <div className="relative grid gap-4 lg:grid-cols-[0.8fr_1.4fr_0.8fr]">
            {images.map((src, index) => (
              <motion.div
                key={src}
                className={`relative min-h-[250px] overflow-hidden rounded-[1.25rem] ${index === 1 ? "lg:min-h-[330px]" : "lg:mt-10 lg:min-h-[290px]"}`}
                animate={{ y: index === 1 ? [0, -8, 0] : [0, 8, 0] }}
                transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image src={src} alt="" fill className="object-cover" sizes="(min-width: 1024px) 33vw, 100vw" />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="absolute left-8 top-8 hidden rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.12)] md:flex md:items-center md:gap-3"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="grid size-9 place-items-center rounded-full bg-[#eaf7fb] text-secondary">
              <UsersRound className="size-4" />
            </span>
            <span className="text-sm font-semibold text-slate-950">Shared ownership</span>
          </motion.div>

          <motion.div
            className="absolute bottom-8 right-8 hidden rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.12)] md:flex md:items-center md:gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="grid size-9 place-items-center rounded-full bg-[#eaf7fb] text-secondary">
              <MessageSquareText className="size-4" />
            </span>
            <span className="text-sm font-semibold text-slate-950">Transparent decisions</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
