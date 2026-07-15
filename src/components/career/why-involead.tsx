"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { values } from "./career-data";

export default function WhyInvolead() { return <section id="culture" className="bg-white py-20"><div className="container mx-auto">
  <SectionHeader eyebrow="Why InvoLead" title="A Place Where Talent Grows with Purpose" description="We create an environment where people can learn fast, take ownership, and work on meaningful AI and analytics problems with business impact." align="left" maxWidth="3xl" />
  <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{values.map((item, i) => { const Icon=item.icon; return <motion.article key={item.title} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}} className={`rounded-[20px] border p-7 ${i%3===0||i===4 ? "border-[#4aa4b8] bg-[#4aa4b8] text-white" : "border-[#d6edf2] bg-[#eaf7f9] text-slate-900"}`}><span className={`grid size-11 place-items-center rounded-xl ${i%3===0||i===4?"bg-white/15":"bg-white text-secondary"}`}><Icon className="size-5"/></span><h3 className="mt-5 text-xl font-semibold">{item.title}</h3><p className={`mt-3 text-sm leading-6 ${i%3===0||i===4?"text-white/80":"text-slate-600"}`}>{item.description}</p></motion.article>})}</div>
</div></section> }
