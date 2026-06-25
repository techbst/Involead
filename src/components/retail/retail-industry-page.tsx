'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

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
import SystemicArchitectureSection from './SystemicArchitectureSection';
import ValueCard from '../ui/value-card';
import CaseStudyShowcase from './case-studies';

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
    <section className="overflow-hidden bg-white py-20">
      <div className="container-fluid mx-auto">
        <SectionHeader
          eyebrow="What we solve"
          title="Empowering Your Business with Data-Driven Insights and Strategies"
          description="Purpose-built intelligence for the decisions that determine retail growth, margin, and customer loyalty."
          maxWidth="5xl"
        />

        <div className="mt-8 space-y-5">
          {/* Row 1 - Left */}
          <div className="marquee-row">
            <div className="marquee-track marquee-left">
              {[...solutionCards.slice(0, 7), ...solutionCards.slice(0, 7)].map(
                (item, index) => (
                  <div key={`${item.title}-${index}`} className="w-[320px] shrink-0">
                    <ValueCard
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      index={index}
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Row 2 - Right */}
          <div className="marquee-row">
            <div className="marquee-track marquee-right">
              {[...solutionCards.slice(7, 14), ...solutionCards.slice(7, 14)].map(
                (item, index) => (
                  <div key={`${item.title}-${index}`} className="w-[320px] shrink-0">
                    <ValueCard
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      index={index + 7}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GrowthTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!sectionRef.current || !pathRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      const path = pathRef.current!;
      const length = path.getTotalLength();
      const cards = gsap.utils.toArray<HTMLElement>('[data-timeline-card]');

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: reduceMotion ? 0 : length,
      });

      if (reduceMotion) {
        gsap.set('[data-mobile-progress]', { scaleY: 1 });
        gsap.set('[data-timeline-arrow]', { opacity: 1 });
        return;
      }

      const progress = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 15%',
          end: 'bottom 55%',
          scrub: 0.6,
        },
      });

      progress.to(path, { strokeDashoffset: 0, duration: 1, ease: 'none' }, 0);

      const arrowStops = [0.134, 0.301, 0.467, 0.634, 0.801, 0.968];
      gsap.utils.toArray<SVGPathElement>('[data-timeline-arrow]').forEach((arrow, index) => {
        progress.to(arrow, { opacity: 1, duration: 0.02, ease: 'none' }, arrowStops[index]);
      });

      gsap.fromTo(
        '[data-mobile-progress]',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            end: 'bottom 55%',
            scrub: 0.6,
          },
        }
      );

      const media = gsap.matchMedia();
      media.add('(min-width: 1024px)', () => {
        cards.forEach((card, index) => {
          gsap.from(card, {
            x: index % 2 === 0 ? -80 : 80,
            opacity: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true,
            },
          });
        });
      });
      media.add('(max-width: 1023px)', () => {
        cards.forEach((card) => {
          gsap.from(card, {
            y: 32,
            opacity: 0,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true,
            },
          });
        });
      });
    }, sectionRef);

    return () => context.revert();
  }, [reduceMotion]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-secondary/20 py-20">
      <div className="container mx-auto">
        <SectionHeader
          eyebrow="The intelligence journey"
          title="Unlocking CPG Growth: From Legacy Limits to AI-Driven Wins"
          description="In a market shaped by tight margins and changing consumer behavior, InvoLead turns fragmented signals into precise, real-time action."
        />
        <div className="relative mx-auto mt-16 max-w-6xl">
          <svg
            aria-hidden="true"
            viewBox="0 0 1000 1400"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 left-1/2 z-0 hidden h-full w-[90%] -translate-x-1/2 lg:block"
          >
            <path
              d="M433 73 H500 V282 H567 H500 V491 H433 H500 V700 H567 H500 V909 H433 H500 V1118 H567 H500 V1327 H433"
              fill="none"
              stroke="rgba(95,176,194,.18)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              ref={pathRef}
              d="M433 73 H500 V282 H567 H500 V491 H433 H500 V700 H567 H500 V909 H433 H500 V1118 H567 H500 V1327 H433"
              fill="none"
              stroke="#5fb0c2"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[180, 384, 593, 802, 1010, 1220].map((y) => (
              <path
                data-timeline-arrow
                key={y}
                d={`M490 ${y - 10} L500 ${y} L510 ${y - 10}`}
                fill="none"
                stroke="#5fb0c2"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0"
              />
            ))}
          </svg>
          <div className="absolute bottom-0 left-5 top-0 w-px bg-[#5fb0c2]/20 lg:hidden">
            <div data-mobile-progress className="h-full w-full origin-top bg-[#5fb0c2]" />
          </div>
          <div className="relative space-y-10 lg:space-y-16">
            {timelineItems.map((item, index) => (
              <article
                data-timeline-card
                key={item.title}
                className={cn(
                  'relative z-10 ml-12 rounded-[24px] border border-secondary/40 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] lg:ml-0 lg:w-[44%]',
                  index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'
                )}
              >
                <div className="flex items-center gap-5">
                  <div className="grid size-[110px] shrink-0 place-items-center rounded-xl border border-[#d7eef3] bg-secondary">
                    <item.icon className="size-14 text-white" strokeWidth={1.8} />
                  </div>

                  <div className="pt-1">
                    <h3 className="font-bold leading-tight">{item.title}</h3>
                    <p className="mt-1">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemicAI() {
  return (
    <section className="bg-[#000] py-20 text-white">
      <div className="container mx-auto grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">
        <div>
          <SectionHeader 
          eyebrow="" 
          title="New Possibilities with Systemic AI" 
          description="Empower teams with AI-driven intelligence to optimize every lever of growth with Systemic AI." textColor="white" align="left" /><div className="mt-8 space-y-5">
            <p className="!text-white/90">Agentic AI introduces a powerful paradigm, but its enterprise value depends on how effectively it is integrated.</p>
            <p className="!text-white/90">Systemic AI builds on this by offering a structured, context-driven approach to embedding intelligence across the organization-delivering scalable, reliable outcomes aligned with business goals.
          </p>
          <p className="font-medium !text-white">With Systemic AI, leaders don’t just use AI-they operationalize it and make it their own.</p>
            </div></div>
        
        <motion.div initial={{ opacity: 0, scale: .94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative mx-auto grid aspect-square w-full max-w-lg place-items-center rounded-full bg-[radial-gradient(circle,rgba(95,176,194,.22),transparent_60%)]">
          <motion.div
            className="absolute inset-[-3%] rounded-full border-2 border-dashed border-secondary/20"
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        <motion.div
            className="absolute inset-[12%] rounded-full border-2 border-dashed border-[#5fb0c2]/30"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="absolute inset-[27%] rounded-full border-2 border-dashed border-white/20"
            animate={{ rotate: -360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        <span className="grid size-32 place-items-center rounded-full bg-secondary text-white shadow-[0_0_80px_rgba(95,176,194,.35)]">
          <div className="text-center">
            <BrainCircuit className="mx-auto size-10" />
            <span className="mt-1 block text-sm font-semibold">
              Systemic AI
            </span>
          </div>
        </span>
          {['Enterprise Context','Agentic Workflows','Decision Intelligence','Business Outcomes'].map((text, index) => <span key={text} className={cn('absolute rounded-full border border-secondary/10 bg-secondary px-4 py-2 text-xs text-main backdrop-blur', ['top-[8%]','right-[2%]','bottom-[8%]','left-[2%]'][index])}>{text}
          </span>
        )}
        </motion.div>
      </div>
    </section>
  );
}

const layers = [
  { label: 'Value', title: 'Application Layer', text: 'Real-world use cases that translate intelligence into measurable business impact.', icon: Sparkles, color: 'bg-[#fff]' },
  { label: 'Core', title: 'Intelligence Layer', text: 'Orchestrates agents and models into adaptive, enterprise-grade intelligence.', icon: Network, color: 'bg-[#fff]' },
  { label: 'Foundation', title: 'Context & Data Integrity', text: 'Reliable data and rich context ensure the integrity and trustworthiness of every AI system.', icon: Database, color: 'bg-[#fff]' },
  { label: 'Strategy & Governance', title: 'Enterprise Alignment', text: 'Goals, policies, and structures embed AI with integrity and accountability.', icon: ShieldCheck, color: 'bg-[#fff]' },
];

function BuildingBlocks() {
  return <section className="bg-white py-20 sm:py-28">
        <div className="container mx-auto">
            <SectionHeader 
              eyebrow="Systemic architecture" 
              title="Core Building Blocks of Systemic AI"
              description="A layered framework that connects intelligent technology with enterprise strategy and real-world value." 
              maxWidth='5xl'
            />
            <div className="mx-auto mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 space-y-3 ">{layers.map((layer, index) => 
            <motion.article
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              key={layer.title}
              className={cn(
                "group relative h-full overflow-hidden rounded-[24px] border border-white/10 bg-white/92 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-50/30",
                layer.color
              )}
            >
              <div className="flex items-start gap-4">
                <span className="relative inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-[#5fb0c2] ring-1 ring-cyan-100 transition-colors duration-300 group-hover:bg-white">
                  <layer.icon className="size-5" />
                </span>

                <div>
                  <h3 className="!text-xl font-semibold text-slate-950">
                    {layer.label}
                  </h3>

                  <p className="mt-0 block">
                    {layer.title}
                  </p>
                </div>
              </div>

              <p className="mt-6">
                {layer.text}
              </p>
            </motion.article>
              )}</div>
        </div>
    </section>;
}


function FAQ() {
  const [open, setOpen] = useState(0);
  return <section className="bg-white py-20 sm:py-28"><div className="container mx-auto"><SectionHeader eyebrow="Common questions" title="Frequently Asked Questions" description="Answers to common questions about retail analytics and our approach." /><div className="mx-auto mt-12 max-w-3xl space-y-3">{faqs.map(([question, answer], index) => <div key={question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? -1 : index)} className="flex w-full items-center justify-between gap-5 p-6 text-left font-semibold text-slate-950">{question}<ChevronDown className={cn('size-5 shrink-0 transition', open === index && 'rotate-180 text-[#398da0]')} /></button><AnimatePresence initial={false}>{open === index && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p className="px-6 pb-6 !text-sm !leading-7 !text-slate-500">{answer}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>;
}

function Blog() {
  return <section className="bg-[#f5f8f9] py-20 sm:py-28"><div className="container mx-auto"><div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><SectionHeader eyebrow="Ideas & perspectives" title="Get Insights & Tips from Our Blog" description="Explore the signals shaping AI, analytics, and the future of retail." align="left" className="mx-0" /><Button variant="outline">View all stories <ArrowRight className="size-4" /></Button></div><div className="mt-12 grid gap-5 md:grid-cols-3">{blogs.map((post, index) => <motion.article initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} whileHover={{ y: -6 }} key={post.title} className="group overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white"><div className="relative h-48 overflow-hidden"><Image src={post.image} alt="" fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /></div><div className="p-6"><span className="text-xs font-semibold uppercase tracking-[.15em] text-[#398da0]">{post.category}</span><h3 className="mt-3 !text-xl font-semibold !leading-7 text-slate-950">{post.title}</h3><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-800">Read article <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span></div></motion.article>)}</div></div></section>;
}

export default function RetailIndustryPage() {
  return <main className="overflow-clip bg-white text-slate-950">
    <RetailHero />
    <ResultsSection />
    <SolutionsSection />
    <GrowthTimeline />
    <SystemicAI />
    {/* <BuildingBlocks /> */}
    <SystemicArchitectureSection />
    <CaseStudyShowcase />
    <FAQ />
    <Blog />
    <CallToAction 
    title={<>Turn retail complexity into <span className="text-secondary">commercial advantage.</span></>} 
    description="Bring your highest-value growth challenge. We’ll show you where data and AI can create measurable impact first." 
    primaryButton={{ text: 'Speak to our experts', href: '/contact-us' }} 
    secondaryButton={{ text: 'Explore our solutions', href: '/our-solutions' }} />
    </main>;
}

