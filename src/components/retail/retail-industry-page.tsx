'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BrainCircuit,
  ChevronDown,
  Database,
  Network,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  BarChart3,
  DollarSign,
} from 'lucide-react';

import CallToAction from '@/components/ui/call-to-action';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { cn } from '@/lib/utils';
import { blogs, caseStudies, faqs, metrics, solutionCards, timelineItems } from './retail-data';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function RetailHero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] pt-36 pb-20 md:flex md:items-center md:pt-28">
      
      <motion.div aria-hidden animate={{ y: [0, -18, 0], rotate: [0, 2, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-[8%] top-[24%] hidden size-[340px] rounded-[42%] border border-white/10 bg-white/5 shadow-[inset_0_0_80px_rgba(95,176,194,.2),0_30px_90px_rgba(0,0,0,.3)] backdrop-blur md:block">
        <div className="absolute inset-12 rounded-full border border-[#73c5d6]/30" /><div className="absolute inset-24 rounded-full border border-white/15" /><Sparkles className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 text-[#73c5d6]" />
      </motion.div>
      <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }} className="container mx-auto relative z-10">
        <div className="max-w-4xl">
    
          <motion.h1 variants={fadeUp} className="max-w-4xl text-[36px] md:text-[54px] font-bold leading-[115%]">Driving Commercial Excellence for Leading <span className='text-secondary'>CPG & Retail Brands</span></motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl">We deliver real revenue lifts, optimized margins, and efficient operations through targeted analytics—helping teams act on data where it drives the most impact.</motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <Button asChild >
              <Link href="/contact-us">Schedule a Free Consultation <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild variant="outline">
              <a href="#casestudies">See Enterprise Results <ArrowRight className="size-4" /></a>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function ResultsSection() {
  return (
    <section className="relative overflow-hidden bg-black py-20 text-white sm:py-20">
      <div className="container relative mx-auto">
        <SectionHeader eyebrow="Measured impact" title="Proven Results Across the Industry" description="Our solutions have consistently delivered measurable impact." textColor="white" />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .2 }} variants={{ show: { transition: { staggerChildren: .08 } } }} className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {metrics.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className={cn(
                  "rounded-[1.75rem] border border-white/10 p-6 shadow-2xl",
                  [
                    "bg-[#e7f5f7] text-[#071a20]",
                    "bg-[#eef0fb] text-[#16152e]",
                    "bg-[#edf6e8] text-[#10200d]",
                    "bg-[#f6efdf] text-[#241b0b]",
                  ][index % 4]
                )}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="mt-0 !text-3xl font-bold leading-tight tracking-[-0.04em]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-[#0e1a16] text-white shadow-lg">
                    <Icon className="h-[15px] w-[15px]" />
                  </div>
                </div>

                <div className="my-5 h-px bg-current/10" />

                <p>
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <SectionHeader
        eyebrow="What we solve"
        title="Empowering Your Business with Data-Driven Insights and Strategies" description="Purpose-built intelligence for the decisions that determine retail growth, margin, and customer loyalty." 
        maxWidth='5xl'
        />
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .08 }} variants={{ show: { transition: { staggerChildren: .04 } } }} className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {solutionCards.map((item, index) => <motion.article variants={fadeUp} whileHover={{ y: -6 }} key={item.title} className="group flex min-h-64 flex-col rounded-[1.5rem] border border-slate-200 bg-[#f9fbfb] p-6 transition-shadow hover:shadow-[0_24px_65px_rgba(15,23,42,.09)]"><div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-xl bg-[#5fb0c2]/12 text-[#37899b] transition group-hover:bg-[#5fb0c2] group-hover:text-white"><item.icon className="size-5" /></span><span className="font-mono text-xs text-slate-300">{String(index + 1).padStart(2, '0')}</span></div><h3 className="mt-7 !text-xl font-semibold tracking-tight text-slate-950">{item.title}</h3><p className="mt-3 !text-sm !leading-6 !text-slate-500">{item.description}</p></motion.article>)}
        </motion.div>
      </div>
    </section>
  );
}

function GrowthTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || !pathRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const path = pathRef.current;
    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: reduceMotion ? 0 : length });
    if (reduceMotion) return;
    const context = gsap.context(() => {
      gsap.to(path, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top 58%', end: 'bottom 55%', scrub: .5 } });
      gsap.fromTo('[data-mobile-progress]', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: sectionRef.current, start: 'top 58%', end: 'bottom 55%', scrub: .5 } });
      gsap.utils.toArray<HTMLElement>('[data-timeline-card]').forEach((card, index) => {
        ScrollTrigger.create({ trigger: card, start: 'top 63%', end: 'bottom 40%', onEnter: () => setActive(index), onEnterBack: () => setActive(index) });
      });
    }, sectionRef);
    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[linear-gradient(145deg,#eaf8f2_0%,#dde8ff_100%)] py-20 sm:py-28">
      <div className="container mx-auto">
        <SectionHeader eyebrow="The intelligence journey" title="Unlocking CPG Growth: From Legacy Limits to AI-Driven Wins" description="In a market shaped by tight margins and changing consumer behavior, InvoLead turns fragmented signals into precise, real-time action." />
        <div className="relative mx-auto mt-16 max-w-6xl">
          <svg aria-hidden viewBox="0 0 1000 1540" preserveAspectRatio="none" className="absolute left-1/2 top-0 hidden h-full w-[72%] -translate-x-1/2 lg:block">
            <path d="M170 20 C170 130 830 105 830 235 C830 360 170 325 170 455 C170 580 830 545 830 675 C830 800 170 765 170 895 C170 1020 830 985 830 1115 C830 1245 170 1205 170 1335 C170 1430 500 1450 500 1520" fill="none" stroke="rgba(79,111,255,.15)" strokeWidth="6" strokeLinecap="round" />
            <path ref={pathRef} d="M170 20 C170 130 830 105 830 235 C830 360 170 325 170 455 C170 580 830 545 830 675 C830 800 170 765 170 895 C170 1020 830 985 830 1115 C830 1245 170 1205 170 1335 C170 1430 500 1450 500 1520" fill="none" stroke="#4F6FFF" strokeWidth="7" strokeLinecap="round" />
          </svg>
          <div className="absolute bottom-0 left-5 top-0 w-1 rounded-full bg-[#4F6FFF]/15 lg:hidden"><div data-mobile-progress className="h-full w-full origin-top rounded-full bg-[#4F6FFF]" /></div>
          <div className="relative space-y-10 lg:space-y-16">
            {timelineItems.map((item, index) => {
              const isActive = Boolean(reduceMotion) || index <= active;
              return <motion.article data-timeline-card key={item.title} initial={{ opacity: 0, x: index % 2 ? 80 : -80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .8, ease: [0.22,1,.36,1] }} animate={{ scale: isActive ? 1.03 : 1, opacity: isActive ? 1 : .62 }} className={cn('relative ml-12 flex overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/70 backdrop-blur-xl transition-shadow lg:ml-0 lg:w-[45%]', index % 2 ? 'lg:ml-auto' : 'lg:mr-auto', isActive && 'shadow-[0_22px_65px_rgba(79,111,255,.22)]')}><div className={cn('grid w-20 shrink-0 place-items-center bg-[#4F6FFF]/10 text-[#4F6FFF] transition sm:w-28', isActive && 'bg-[#4F6FFF] text-white')}><item.icon className="size-7" /></div><div className="p-6 sm:p-7"><span className="text-xs font-semibold tracking-[.18em] text-[#4F6FFF]">0{index + 1}</span><h3 className="mt-2 !text-xl font-semibold text-slate-950">{item.title}</h3><p className="mt-3 !text-sm !leading-6 !text-slate-600">{item.description}</p></div></motion.article>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemicAI() {
  return (
    <section className="bg-[#07171d] py-20 text-white sm:py-28">
      <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">
        <div><SectionHeader eyebrow="The enterprise advantage" title="New Possibilities with Systemic AI" description="Empower teams with AI-driven intelligence to optimize every lever of growth with Systemic AI." textColor="white" align="left" /><div className="mt-8 space-y-5"><p className="!text-white/60">Agentic AI introduces a powerful paradigm, but its enterprise value depends on how effectively it is integrated.</p><p className="!text-white/60">Systemic AI adds a structured, context-driven approach—delivering scalable, reliable outcomes aligned with business goals.</p><p className="font-medium !text-white">Leaders do not merely use AI. They operationalize it and make it their own.</p></div></div>
        <motion.div initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative mx-auto grid aspect-square w-full max-w-lg place-items-center rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(95,176,194,.22),transparent_60%)]"><div className="absolute inset-[12%] rounded-full border border-[#5fb0c2]/25" /><div className="absolute inset-[27%] rounded-full border border-white/15" /><span className="grid size-28 place-items-center rounded-full bg-[#5fb0c2] text-slate-950 shadow-[0_0_80px_rgba(95,176,194,.4)]"><BrainCircuit className="size-12" /></span>{['Context','Agents','Decisions','Value'].map((text, index) => <span key={text} className={cn('absolute rounded-full border border-white/10 bg-white/8 px-4 py-2 text-xs text-white/70 backdrop-blur', ['top-[8%]','right-[2%]','bottom-[8%]','left-[2%]'][index])}>{text}</span>)}</motion.div>
      </div>
    </section>
  );
}

const layers = [
  { label: 'Value', title: 'Application Layer', text: 'Real-world use cases that translate intelligence into measurable business impact.', icon: Sparkles, color: 'bg-[#dff5f4]' },
  { label: 'Core', title: 'Intelligence Layer', text: 'Orchestrates agents and models into adaptive, enterprise-grade intelligence.', icon: Network, color: 'bg-[#e5e9ff]' },
  { label: 'Foundation', title: 'Context & Data Integrity', text: 'Reliable data and rich context ensure the integrity and trustworthiness of every AI system.', icon: Database, color: 'bg-[#ebf4df]' },
  { label: 'Strategy & Governance', title: 'Enterprise Alignment', text: 'Goals, policies, and structures embed AI with integrity and accountability.', icon: ShieldCheck, color: 'bg-[#f5eadf]' },
];

function BuildingBlocks() {
  return <section className="bg-white py-20 sm:py-28"><div className="container mx-auto"><SectionHeader eyebrow="Systemic architecture" title="Core Building Blocks of Systemic AI" description="A layered framework that connects intelligent technology with enterprise strategy and real-world value." /><div className="mx-auto mt-12 max-w-5xl space-y-3">{layers.map((layer, index) => <motion.article initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} key={layer.title} className={cn('grid items-center gap-5 rounded-[1.5rem] border border-slate-200 p-5 sm:grid-cols-[180px_1fr_auto] sm:p-7', layer.color)}><div><span className="text-xs font-semibold uppercase tracking-[.15em] text-slate-500">{layer.label}</span><h3 className="mt-2 !text-xl font-semibold text-slate-950">{layer.title}</h3></div><p className="!text-sm !leading-6 !text-slate-600">{layer.text}</p><span className="grid size-12 place-items-center rounded-xl bg-slate-950 text-white"><layer.icon className="size-5" /></span></motion.article>)}</div></div></section>;
}

function CaseStudies() {
  return <section id="casestudies" className="scroll-mt-24 bg-[#f5f8f9] py-20 sm:py-28"><div className="container mx-auto"><div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionHeader eyebrow="Customer outcomes" title="How Our Customers Grow With InvoLead" description="See how teams use InvoLead to unlock insights and accelerate measurable outcomes." align="left" className="mx-0" /><Button asChild variant="outline"><Link href="/industries">See all case studies <ArrowRight className="size-4" /></Link></Button></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{caseStudies.map((study, index) => <motion.article initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} whileHover={{ y: -7 }} key={study.title} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,.06)]"><div className="relative h-52 overflow-hidden"><Image src={study.image} alt="" fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" /><span className="absolute bottom-5 left-5 rounded-full bg-white/15 px-3 py-1 text-xs text-white backdrop-blur">{study.tag}</span></div><div className="p-6"><h3 className="!text-2xl font-semibold tracking-tight text-slate-950">{study.title}</h3><p className="mt-3 !text-sm !leading-6 !text-slate-500">{study.description}</p><div className="mt-6 flex items-end justify-between border-t border-slate-100 pt-5"><div><span className="text-3xl font-semibold text-[#398da0]">{study.metric}</span><span className="mt-1 block text-xs text-slate-500">{study.label}</span></div><ArrowRight className="size-5 text-slate-400 transition group-hover:translate-x-1 group-hover:text-[#398da0]" /></div></div></motion.article>)}</div></div></section>;
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="bg-white py-20 sm:py-28"><div className="container mx-auto"><SectionHeader eyebrow="Common questions" title="Frequently Asked Questions" description="Answers to common questions about retail analytics and our approach." /><div className="mx-auto mt-12 max-w-3xl space-y-3">{faqs.map(([question, answer], index) => <div key={question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 p-6 text-left font-semibold text-slate-950">{question}<ChevronDown className={cn('size-5 shrink-0 transition', open === index && 'rotate-180 text-[#398da0]')} /></button><AnimatePresence initial={false}>{open === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p className="px-6 pb-6 !text-sm !leading-7 !text-slate-500">{answer}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>;
}

function Blog() {
  return <section className="bg-[#f5f8f9] py-20 sm:py-28"><div className="container mx-auto"><div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionHeader eyebrow="Ideas & perspectives" title="Get Insights & Tips from Our Blog" description="Explore the signals shaping AI, analytics, and the future of retail." align="left" className="mx-0" /><Button variant="outline">View all stories <ArrowRight className="size-4" /></Button></div><div className="mt-12 grid gap-5 md:grid-cols-3">{blogs.map((post, index) => <motion.article initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} whileHover={{ y: -6 }} key={post.title} className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white"><div className="relative h-48 overflow-hidden"><Image src={post.image} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /></div><div className="p-6"><span className="text-xs font-semibold uppercase tracking-[.15em] text-[#398da0]">{post.category}</span><h3 className="mt-3 !text-xl font-semibold !leading-7 text-slate-950">{post.title}</h3><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">Read article <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span></div></motion.article>)}</div></div></section>;
}

export default function RetailIndustryPage() {
  return <main className="overflow-clip bg-white text-slate-950"><RetailHero /><ResultsSection /><SolutionsSection /><GrowthTimeline /><SystemicAI /><BuildingBlocks /><CaseStudies /><FAQ /><Blog /><CallToAction title={<>Turn retail complexity into <span className="text-secondary">commercial advantage.</span></>} description="Bring your highest-value growth challenge. We’ll show you where data and AI can create measurable impact first." primaryButton={{ text: 'Speak to our experts', href: '/contact-us' }} secondaryButton={{ text: 'Explore our solutions', href: '/our-solutions' }} /></main>;
}
