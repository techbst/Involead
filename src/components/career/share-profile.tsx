"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
export default function ShareProfile(){return <section className="bg-[#eff9fb] py-20"><div className="container mx-auto text-center"><SectionHeader eyebrow="Share your profile" title="Don’t See the Perfect Fit? Reach Out Anyway" description="We’re always open to meeting talented people passionate about data science, AI, analytics, and building intelligent systems for real-world impact." maxWidth="4xl"/><Button asChild className="mt-8"><Link href="mailto:careers@involead.com">Send Your CV <ArrowRight/></Link></Button></div></section>}
