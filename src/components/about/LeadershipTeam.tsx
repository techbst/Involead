"use client";

import { motion } from "framer-motion";

import { SectionHeader } from "@/components/ui/section-header";

const members = [
  { name: "Avinna Saho", role: "Co-Founder & Director", initials: "AS" },
  { name: "Dr. Nilesh Gupta", role: "Co-Founder & Director", initials: "NG" },
  { name: "Pinaki Ghosh", role: "Co-Founder & Director", initials: "PG" },
  { name: "Srikanth Patil", role: "Vice President", initials: "SP" },
];

const loopedMembers = [...members, ...members];

export default function LeadershipTeam() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <SectionHeader
          title="Leadership Team"
          description="A team of deep expertise in problem solving and business acumen empowered by continuous innovation and experience in building large teams!"
          descriptionWidth="4xl"
        />
      </div>

      <div className="mt-12 overflow-hidden">
        <motion.div
          className="flex w-max gap-5 px-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        >
          {loopedMembers.map((member, index) => (
            <article
              key={`${member.name}-${index}`}
              className="group relative h-[330px] w-[260px] shrink-0 overflow-hidden rounded-[1.35rem] border border-slate-200 bg-[#eef0fb] shadow-[0_18px_46px_rgba(15,23,42,0.08)] sm:w-[300px]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(95,176,194,0.30),transparent_34%),linear-gradient(180deg,#f8fbff_0%,#dceff4_100%)]" />
              <div className="absolute left-1/2 top-16 grid size-32 -translate-x-1/2 place-items-center rounded-full bg-white text-4xl font-semibold text-secondary shadow-inner">
                {member.initials}
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-slate-100 bg-white/95 p-4 shadow-[0_16px_38px_rgba(15,23,42,0.12)] backdrop-blur">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-slate-950">{member.name}</h3>
                    <p className="mt-1 !text-xs !leading-5 text-slate-500">{member.role}</p>
                  </div>
                  <button
                    type="button"
                    aria-label={`${member.name} LinkedIn profile`}
                    className="grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-950 transition-colors hover:border-secondary hover:bg-secondary hover:text-white"
                  >
                    <span className="text-sm font-bold leading-none">in</span>
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-x-0 top-0 h-1 bg-secondary" />
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
