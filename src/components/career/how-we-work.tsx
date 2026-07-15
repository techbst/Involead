"use client";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { workPrinciples } from "./career-data";

export default function HowWeWork(){return <section className="bg-[#171717] py-20 text-white"><div className="container mx-auto grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><SectionHeader eyebrow="How we work" title="Simple, Transparent, and People-First Process" description="We believe great AI solutions come from focused minds, collaborative teams, and a deep understanding of business." align="left" tone="light" maxWidth="2xl"/><div className="space-y-4">{workPrinciples.map((item,i)=>{const Icon=item.icon;return <motion.article key={item.title} initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.1}} className={`rounded-2xl p-6 ${i===1?"bg-[#4ba8bb]":"bg-[#eaf7f9] text-slate-900"}`}><Icon className={`size-6 ${i===1?"text-white":"text-secondary"}`}/><h3 className="mt-3 text-lg font-semibold">{item.title}</h3><p className={`mt-2 text-sm leading-6 ${i===1?"text-white/80":"text-slate-600"}`}>{item.description}</p></motion.article>})}</div></div></section>}
