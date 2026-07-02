"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Link from "next/link";
import CornerShape from "../ui/shape";

const members = [
  { 
    name: "Avinna Saho", 
    role: "Co-Founder & Director", 
    initials: "AS", 
    img: "/team/avinna-saho.webp", 
    linkedin: "https://www.linkedin.com/in/avinna-sahoo-782b7822", 
    description: [
      "Avinna leads engagement delivery and heads capabilities development for Marketing Science, Customer Analytics, Next Best Action, Machine Learning, and AI. He has 12+ years of experience with Accenture Consulting, delivering value for Fortune 100 clients.",

      "He has deep expertise across Retail, CPG, Pharma, and Automotive industries, leading large-scale projects for clients in the US, UK, Europe, and Australia.",

      "Avinna holds an MS in Quantitative Economics from the Indian Statistical Institute (ISI), India."
    ] 
  },
  { 
    name: "Dr. Nilesh Gupta", 
    role: "Co-Founder & Director", 
    initials: "NG", 
    img: "/team/nilesh-gupta.webp", 
    linkedin: "https://www.linkedin.com/in/nilesh-kumar-gupta-b072624",
    description: [
      "Nilesh Gupta is responsible to deliver differentiated value to its end users with a focus on speed. trust, and security. He is also responsible for the development of the analytical solutions and the analytical strategies focused on driving value for our clients.",

      "Prior to joining InvoLead, Dr. Gupta was a Principal Director with Accenture in the applied intelligence practice and led several marketing analytics capabilities across Global markets.",

      "Dr. Gupta has over 18 + years of experience in leading engagements to solve business problems through analytical solutions. He has cross industry expertise across Retail, CPG, Life Sciences, Communication, Media & Tech and finance."
    ] 
  },
  { 
    name: "Pinaki Ghosh", 
    role: "Co-Founder & Director", 
    initials: "PG", 
    img: "/team/pinaki-gosh.webp", 
    linkedin: "https://www.linkedin.com/in/pinaki-asish-ghosh-87716016",
    description: [
      "Pinaki leads AI transformation journey, innovation and nurture breakthrough ideas and build high performance teams. Prior to joining InvoLead, Pinaki was a senior manager in Accenture Applied Intelligence practice where he led several Marketing Analytics and Net Revenue Management capabilities.",

      "He is a subject matter expert in Trade Promotion Optimization, Pricing, Assortment and Marketing Mix Optimization. His deepest sector specialized is in Retail, CPG, Telecom and Pharma.",

      "Pinaki has done his masters from Indian Institute of Technology (IIT Bombay, India) in Applied Statistics and Informatics."
    ] 
  },
  { 
    name: "Srikanth Patil", 
    role: "Vice President", 
    initials: "SP", 
    img: "/team/srikanth-patil.webp", 
    linkedin: "https://in.linkedin.com/in/isrikanthpatil",
    description: [
      "Srikanth Patil is a dynamic leader with a strong background in data analytics and business strategy. He has successfully driven digital transformation initiatives across multiple organizations.",

      "With over a decade of experience, Srikanth has a deep understanding of market trends and consumer behavior, enabling him to provide actionable insights that enhance business decision-making.",

      "He holds an MBA in Business Analytics from the Indian School of Business (ISB), India, and is passionate about leveraging data to create value for businesses."
    ] 
  },
];

const loopedMembers = [...members, ...members];

export default function LeadershipTeam() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedMember, setSelectedMember] = useState<(typeof members)[number] | null>(null);
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto">
        

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeader
            title="Leadership Team"
            description="A team of deep expertise in problem solving and business acumen empowered by continuous innovation and experience in building large teams!"
            descriptionWidth="4xl"
            align="left"
          />
          <div className="flex gap-3 sm:gap-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black "
              aria-label="Previous product"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="grid size-12 place-items-center rounded-full bg-[#5fb0c2] text-white transition hover:-translate-y-1 hover:bg-black "
              aria-label="Next product"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-12">
          <Swiper
          modules={[Autoplay]}
          spaceBetween={18}
          slidesPerView={1}
          loop={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1340: {
              slidesPerView: 3,
            },
            1700: {
              slidesPerView: 3,
            },
          }}
          className="mt-12 custom-swiper-style-2"
        >
            {members.map((member) => (
              <SwiperSlide key={member.name}>
                <article
                  onClick={() => setSelectedMember(member)}
                  className="group relative h-[420px] cursor-pointer overflow-hidden rounded-[1.35rem] border border-slate-200 shadow-[0_18px_46px_rgba(15,23,42,0.08)]"
                >
                  <div className="absolute inset-0">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-[0_16px_38px_rgba(15,23,42,0.12)] backdrop-blur">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-semibold">{member.name}</h3>
                        <p className="mt-0">{member.role}</p>
                      </div>

                      <Link
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="grid size-10 place-items-center rounded-full border border-[#0a66c2] bg-[#0a66c2] text-sm font-bold text-white transition-colors hover:border-secondary hover:bg-secondary"
                      >
                        in
                      </Link>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <AnimatePresence>
            {selectedMember && (
              <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94, y: 20 }}
                  transition={{ duration: 0.25 }}
                  className="w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-[0_30px_100px_rgba(0,0,0,0.25)]"
                >
                  <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                    <h3 className="text-lg font-semibold text-black">Leadership Team</h3>

                    <button
                      type="button"
                      onClick={() => setSelectedMember(null)}
                      className="grid size-9 place-items-center rounded-full bg-slate-100 text-black transition hover:bg-black hover:text-white"
                    >
                      <X className="size-5" />
                    </button>
                  </div>

                  <div className="p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                      <div className="relative size-28 shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                        <Image
                          src={selectedMember.img}
                          alt={selectedMember.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-2xl font-semibold text-black">
                          {selectedMember.name}
                        </h4>
                        <p className="mt-1 text-black/60">{selectedMember.role}</p>
                      </div>

                      <Link
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid size-11 place-items-center rounded-full bg-[#0a66c2] text-sm font-bold text-white transition hover:bg-secondary"
                      >
                        in
                      </Link>
                    </div>

                    <p className="mt-6 leading-relaxed text-black/65">
                      {selectedMember.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="absolute -bottom-[7px] left-0 w-[290px] bg-secondary/15">
        <CornerShape color="#fff" />
      </div>
    </section>
    
  );
}
