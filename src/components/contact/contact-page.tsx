'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Clock3,
  Handshake,
  LoaderCircle,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SectionHeader } from '../ui/section-header';

const reasons = [
  {
    value: 'business',
    title: 'Business inquiry',
    description: 'Discuss a new engagement, pilot or proposal.',
    icon: BriefcaseBusiness,
  },
  {
    value: 'partnership',
    title: 'Alliances & partnerships',
    description: 'Technology partners, advisors and co-sellers.',
    icon: Handshake,
  },
  {
    value: 'career',
    title: 'Career enquiry',
    description: 'Join the team or explore future opportunities.',
    icon: Sparkles,
  },
] as const;

const locations = [
  {
    tag: 'Headquarters · India',
    city: 'Delhi',
    address:
      '410A, 4th Floor, D21 Corporate Park, Dwarka Sector 21, New Delhi – 110077',
    map: 'https://www.google.com/maps/search/?api=1&query=D21+Corporate+Park+Dwarka+Sector+21+New+Delhi',
  },
  {
    tag: 'Haryana · India',
    city: 'Gurgaon',
    address:
      'Unit # 323-324, 3rd Floor, JMD Megapolis, Sector 48, Gurgaon, Haryana – 122018',
    map: 'https://www.google.com/maps/search/?api=1&query=JMD+Megapolis+Sector+48+Gurgaon',
  },
  {
    tag: 'Odisha · India',
    city: 'Bhubaneswar',
    address:
      '#201, 2nd Floor, DLF Cybercity, Chandaka Industrial Estate, Patia, Bhubaneswar, Odisha – 751024',
    map: 'https://www.google.com/maps/search/?api=1&query=DLF+Cybercity+Patia+Bhubaneswar',
  },
  {
    tag: 'Maharashtra · India',
    city: 'Pune',
    address:
      '822, Suratwwala Mark Plazzo, Hinjewadi Phase 1, Pune, Maharashtra 411057',
    map: 'https://www.google.com/maps/search/?api=1&query=Suratwwala+Mark+Plazzo+Hinjewadi+Pune',
  },
];

const fieldClass =
  'mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3.5 text-sm text-slate-950 outline-none transition duration-200 placeholder:text-slate-400 hover:border-slate-300 focus:border-[#5fb0c2] focus:bg-white focus:ring-4 focus:ring-[#5fb0c2]/10 aria-invalid:border-red-400 aria-invalid:ring-4 aria-invalid:ring-red-50';

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

type FormErrors = Partial<Record<'name' | 'organization' | 'jobTitle' | 'email' | 'phone' | 'message', string>>;

export function ContactHero() {
  return (
    <section className="relative isolate min-h-[610px] overflow-hidden bg-[linear-gradient(45deg,#f8fbff_0%,#81bfce59_100%)] pt-36 pb-24 md:flex md:min-h-[680px] md:items-center md:pt-28">
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="container mx-auto text-center"
      >
        
        <motion.h1 variants={reveal} className="mx-auto mt-7 max-w-5xl !text-[clamp(2.8rem,6.4vw,6rem)] font-semibold !leading-[1.02] tracking-[-0.055em] text-main">
          Let&apos;s build <span className="text-[#76c5d5]">something remarkable.</span>
        </motion.h1>
        <motion.p variants={reveal} className="mx-auto mt-7 max-w-2xl !leading-8 !text-main sm:text-lg">
          Tell us about your challenge, your team, or your ambition. Our principal engineers and scientists will get back within one business day.
        </motion.p>
        <motion.div variants={reveal} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link href="mailto:support@involead.com"><Mail className="size-4" /> support@involead.com</Link>
          </Button>
          <Button asChild variant={"outline"}>
            <Link href="tel:+919873074893"><Phone className="size-4" /> +91 987 3074 893</Link>
          </Button>
          
        </motion.div>
      </motion.div>
    </section>
  );
}

export function ReasonCard({ reason, selected, onSelect }: { reason: (typeof reasons)[number]; selected: boolean; onSelect: () => void }) {
  const Icon = reason.icon;
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={cn(
        'relative flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition duration-200 focus-visible:ring-4 focus-visible:ring-[#5fb0c2]/20 focus-visible:outline-none',
        selected ? 'border-[#5fb0c2] bg-[#5fb0c2]/8 shadow-[0_12px_30px_rgba(95,176,194,.12)]' : 'border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md',
      )}
    >
      <span className={cn('grid size-10 shrink-0 place-items-center rounded-xl', selected ? 'bg-[#5fb0c2] text-white' : 'bg-slate-100 text-slate-600')}><Icon className="size-5" /></span>
      <span><span className="block text-sm font-semibold text-slate-950">{reason.title}</span><span className="mt-1 block text-xs leading-5 text-slate-500">{reason.description}</span></span>
      <span className={cn('absolute top-4 right-4 grid size-5 place-items-center rounded-full border', selected ? 'border-[#5fb0c2] bg-[#5fb0c2] text-white' : 'border-slate-300')}>
        {selected && <Check className="size-3" />}
      </span>
    </button>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? <p id={id} role="alert" className="mt-1.5 !text-xs !text-red-600">{message}</p> : null;
}

export function ContactForm() {
  const [reason, setReason] = useState<(typeof reasons)[number]['value']>('business');
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    const nextErrors: FormErrors = {};
    if (!String(values.name ?? '').trim()) nextErrors.name = 'Please enter your name.';
    if (!String(values.organization ?? '').trim()) nextErrors.organization = 'Please enter your organization.';
    if (!String(values.jobTitle ?? '').trim()) nextErrors.jobTitle = 'Please enter your job title.';
    const email = String(values.email ?? '').trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = 'Please enter a valid work email.';
    if (!String(values.phone ?? '').trim()) nextErrors.phone = 'Please enter your phone number.';
    if (String(values.message ?? '').trim().length < 20) nextErrors.message = 'Please share at least 20 characters about your needs.';
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setStatus('loading');
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setStatus('success');
    form.reset();
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} role="status" className="flex min-h-[620px] flex-col items-center justify-center rounded-[2rem] border border-[#5fb0c2]/25 bg-white p-8 text-center shadow-[0_24px_80px_rgba(15,23,42,.08)]">
        <span className="grid size-16 place-items-center rounded-full bg-[#5fb0c2]/12 text-[#3b8fa2]"><CheckCircle2 className="size-8" /></span>
        <h2 className="mt-6 !text-3xl font-semibold tracking-tight text-slate-950">Message received.</h2>
        <p className="mt-3 max-w-sm !text-slate-500">Thanks for reaching out. Our team will get back to you within one business day.</p>
        <Button type="button" variant="outline" className="mt-7" onClick={() => setStatus('idle')}>Send another message</Button>
      </motion.div>
    );
  }

  return (
    <motion.div variants={reveal} className="rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-[0_24px_80px_rgba(15,23,42,.07)] sm:p-8 lg:p-10">
      <h2 className="!text-3xl font-semibold tracking-tight text-slate-950 sm:!text-4xl">Get in touch</h2>
      <p className="mt-2 !text-slate-500">We&apos;ll reply within one business day.</p>
      <form className="mt-8" noValidate onSubmit={handleSubmit}>
        <fieldset>
          <legend className="text-sm font-semibold text-slate-800">Reason for reaching out <span className="text-[#3b8fa2]">*</span></legend>
          <div role="radiogroup" className="mt-3 grid gap-3 xl:grid-cols-3">
            {reasons.map((item) => <ReasonCard key={item.value} reason={item} selected={reason === item.value} onSelect={() => setReason(item.value)} />)}
          </div>
          <input type="hidden" name="reason" value={reason} />
        </fieldset>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={{ visible: { transition: { staggerChildren: 0.05 } } }} className="mt-8 grid gap-x-5 gap-y-5 sm:grid-cols-2">
          {[
            ['name', 'Name', 'Jane Doe', 'text'],
            ['organization', 'Organization', 'Acme Inc.', 'text'],
            ['jobTitle', 'Job title', 'Head of Analytics', 'text'],
            ['email', 'Work email', 'jane@company.com', 'email'],
            ['phone', 'Phone', '+1 555 000 0000', 'tel'],
          ].map(([name, label, placeholder, type]) => (
            <motion.label variants={reveal} key={name} className="block text-sm font-medium text-slate-700">
              {label} <span className="text-[#3b8fa2]">*</span>
              <input name={name} type={type} placeholder={placeholder} aria-invalid={Boolean(errors[name as keyof FormErrors])} aria-describedby={`${name}-error`} className={fieldClass} onChange={() => setErrors((current) => ({ ...current, [name]: undefined }))} />
              <FieldError id={`${name}-error`} message={errors[name as keyof FormErrors]} />
            </motion.label>
          ))}
          <motion.label variants={reveal} className="block text-sm font-medium text-slate-700">
            How did you hear about us?
            <select name="source" defaultValue="" className={fieldClass}>
              <option value="" disabled>Please select</option><option>Google</option><option>LinkedIn</option><option>Referral</option><option>Partner</option><option>Conference/Event</option><option>Other</option>
            </select>
          </motion.label>
          <motion.label variants={reveal} className="block text-sm font-medium text-slate-700 sm:col-span-2">
            Message <span className="text-[#3b8fa2]">*</span>
            <textarea name="message" rows={6} placeholder="Tell us about the challenge, desired outcome, and timeline." aria-invalid={Boolean(errors.message)} aria-describedby="message-error" className={cn(fieldClass, 'resize-y')} onChange={() => setErrors((current) => ({ ...current, message: undefined }))} />
            <FieldError id="message-error" message={errors.message} />
          </motion.label>
        </motion.div>
        <div className="mt-6 flex flex-col gap-5 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md !text-xs !leading-5 !text-slate-500">By submitting, you agree to our <span className="font-medium text-slate-800">privacy policy</span>. We never share your details.</p>
          <Button type="submit" disabled={status === 'loading'} className="min-w-44 bg-slate-950 text-white hover:bg-[#5fb0c2]">
            {status === 'loading' ? <><LoaderCircle className="size-4 animate-spin" /> Sending…</> : <>Send message <Send className="size-4" /></>}
          </Button>
        </div>
      </form>
    </motion.div>
  );
}

export function ContactSidebar() {
  return (
    <motion.aside variants={reveal} data-contact-sidebar className="rounded-[2rem] bg-[#071a20] p-6 text-white shadow-[0_24px_60px_rgba(7,26,32,.18)] sm:p-8 lg:sticky lg:top-28">
   
      <h2 className="mt-4 !text-3xl font-semibold tracking-tight text-white">Talk to us directly</h2>
      <p className="mt-3 !text-sm !text-white/55">Prefer email or phone? Reach the team directly.</p>
      <div className="mt-7 space-y-3">
        <a href="mailto:support@involead.com" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#5fb0c2]/50 hover:bg-white/8">
          <span className="grid size-10 place-items-center rounded-xl bg-[#5fb0c2]/15 text-[#7bc8d8]"><Mail className="size-5" /></span><span><span className="block text-xs text-white/45">Email</span><span className="mt-0.5 block text-sm text-white/90">support@involead.com</span></span>
        </a>
        <a href="tel:+919873074893" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#5fb0c2]/50 hover:bg-white/8">
          <span className="grid size-10 place-items-center rounded-xl bg-[#5fb0c2]/15 text-[#7bc8d8]"><Phone className="size-5" /></span><span><span className="block text-xs text-white/45">Phone</span><span className="mt-0.5 block text-sm text-white/90">+91 987 3074 893</span></span>
        </a>
      </div>
      <div className="my-7 h-px bg-white/10" />
      <div className="flex gap-4"><Clock3 className="mt-0.5 size-5 text-[#7bc8d8]" /><div><h3 className="!text-base font-semibold text-white">Business hours</h3><p className="mt-3 !text-sm !leading-6 !text-white/55">Monday – Friday<br /><span className="text-white/85">9:00 AM – 6:00 PM IST</span></p><p className="mt-3 !text-sm !leading-6 !text-white/55">Saturday – Sunday<br /><span className="text-white/85">Closed · We reply by email</span></p></div></div>
      <div className="my-7 h-px bg-white/10" />
      <h3 className="!text-base font-semibold text-white">Looking for something else?</h3>
      <div className="mt-3 divide-y divide-white/10">
        {[['Career opportunities', '/career'], ['Our services & practices', '/our-solutions'], ['Case studies', '/case-studies']].map(([label, href]) => (
          <Link key={label} href={href} className="group flex items-center justify-between py-3 text-sm text-white/65 transition hover:text-white">{label}<ArrowRight className="size-4 transition group-hover:translate-x-1 group-hover:text-[#7bc8d8]" /></Link>
        ))}
      </div>
    </motion.aside>
  );
}

export function LocationCard({ location, index }: { location: (typeof locations)[number]; index: number }) {
  return (
    <motion.article variants={reveal} whileHover={{ y: -7 }} transition={{ duration: 0.25 }} className="group flex min-h-[400px] flex-col rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_12px_45px_rgba(15,23,42,.04)] transition-shadow hover:shadow-[0_24px_60px_rgba(15,23,42,.1)]">
      <div className="flex items-start justify-between"><span className="grid size-12 place-items-center rounded-2xl bg-[#5fb0c2]/10 text-[#3b8fa2] transition group-hover:bg-[#5fb0c2] group-hover:text-white"><MapPin className="size-5" /></span>
      <span className="text-xs text-slate-300">0{index + 1}</span></div>
      <p className="mt-7 text-xs font-semibold !text-secondary">{location.tag}</p>
      <h3 className="mt-2 !text-2xl font-semibold tracking-tight text-main">{location.city}</h3>
      <p className="mt-4 min-h-20 !text-sm !leading-6 !text-main">{location.address}</p>
      <div className="mt-0 space-y-2 text-sm"><a href="tel:+919873074893" className="flex items-center gap-2 text-main transition hover:!text-secondary font-medium"><Phone className="size-4" />+91 987 3074 893</a><a href="mailto:support@involead.com" className="flex items-center gap-2 text-main transition hover:text-[#3b8fa2]"><Mail className="size-4" />support@involead.com</a></div>
      <a href={location.map} target="_blank" rel="noreferrer" className="group/link mt-auto flex items-center justify-between border-t border-slate-100 pt-5 text-sm font-semibold text-slate-900">View on map <ArrowRight className="size-4 transition group-hover/link:translate-x-1 group-hover/link:text-[#3b8fa2]" /></a>
    </motion.article>
  );
}

export function LocationsSection() {
  return (
    <section data-gsap-section className="py-20 bg-secondary/20">
      <div className="container mx-auto">
        <div>
          <SectionHeader
            eyebrow="Our Locations"
            title="Four offices, one global team."
            description="Reach us at the office closest to you, or write to any team - we work as one across time zones."
            align="center"
            maxWidth="5xl"
            descriptionWidth="2xl"
          />
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={{ visible: { transition: { staggerChildren: 0.1 } } }} className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {locations.map((location, index) => <LocationCard key={location.city} location={location} index={index} />)}
        </motion.div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  const root = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || !root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.to('[data-hero-mesh]', { yPercent: 18, ease: 'none', scrollTrigger: { trigger: root.current, start: 'top top', end: '700px top', scrub: true } });
      gsap.utils.toArray<HTMLElement>('[data-gsap-section]').forEach((section) => {
        gsap.from(section.children, { opacity: 0, y: 38, duration: 0.8, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 82%', once: true } });
      });
    }, root);
    return () => context.revert();
  }, [reduceMotion]);

  return (
    <div ref={root} className="overflow-clip bg-[#fff] text-slate-950">
      <ContactHero />
      <section data-gsap-section className="py-20 sm:py-28 ">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }} className="container mx-auto grid items-start gap-8 lg:grid-cols-[minmax(0,1.85fr)_minmax(310px,1fr)]">
          <ContactForm />
          <ContactSidebar />
        </motion.div>
      </section>
      <LocationsSection />
      
    </div>
  );
}
