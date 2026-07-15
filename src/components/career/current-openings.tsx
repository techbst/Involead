"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Check, ChevronDown, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { roles } from "./career-data";

const applicationSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .regex(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,14}$/, "Please enter a valid phone number."),
  message: z.string().trim().min(10, "Message must contain at least 10 characters."),
});

type ApplicationValues = z.infer<typeof applicationSchema>;
type Role = (typeof roles)[number];

const fieldClass =
  "mt-1.5 w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#48a5b9] focus:ring-2 focus:ring-[#48a5b9]/15";

function ApplicationModal({ role, onClose }: { role: Role; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationValues>({
    resolver: zodResolver(applicationSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const submitApplication = async () => {
    setSubmitted(true);
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-slate-950/55 p-4 backdrop-blur-[2px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="application-title"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        className="w-full max-w-[560px] overflow-hidden rounded-2xl bg-white shadow-2xl"
      >
        <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#48a5b9]">Job application</p>
            <h3 id="application-title" className="mt-1 text-xl font-semibold text-slate-950">
              Applying for {role.title}
            </h3>
          </div>
          <button type="button" onClick={onClose} className="grid size-9 place-items-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-950" aria-label="Close application form">
            <X className="size-5" />
          </button>
        </header>

        {submitted ? (
          <div className="p-8 text-center">
            <span className="mx-auto grid size-12 place-items-center rounded-full bg-[#e2f2f5] text-[#2695ac]"><Check /></span>
            <h4 className="mt-4 text-xl font-semibold text-slate-950">Application received</h4>
            <p className="mt-2 text-sm text-slate-600">Thank you for applying. Our team will review your details and get in touch.</p>
            <Button type="button" onClick={onClose} className="mt-6">Close</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(submitApplication)} noValidate>
            <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
              <label className="text-sm font-medium text-slate-700">
                Name <span className="text-red-500">*</span>
                <input {...register("name")} className={fieldClass} placeholder="Your full name" aria-invalid={Boolean(errors.name)} />
                {errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name.message}</span>}
              </label>
              <label className="text-sm font-medium text-slate-700">
                Email <span className="text-red-500">*</span>
                <input {...register("email")} type="email" className={fieldClass} placeholder="you@example.com" aria-invalid={Boolean(errors.email)} />
                {errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email.message}</span>}
              </label>
              <label className="text-sm font-medium text-slate-700 sm:col-span-2">
                Phone No. <span className="text-red-500">*</span>
                <input {...register("phone")} type="tel" className={fieldClass} placeholder="+91 98765 43210" aria-invalid={Boolean(errors.phone)} />
                {errors.phone && <span className="mt-1 block text-xs text-red-600">{errors.phone.message}</span>}
              </label>
              <label className="text-sm font-medium text-slate-700 sm:col-span-2">
                Message <span className="text-red-500">*</span>
                <textarea {...register("message")} rows={4} className={`${fieldClass} resize-none`} placeholder="Tell us briefly why you're interested in this role." aria-invalid={Boolean(errors.message)} />
                {errors.message && <span className="mt-1 block text-xs text-red-600">{errors.message.message}</span>}
              </label>
            </div>
            <footer className="flex justify-end gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
              <Button type="button" variant="outline" onClick={onClose} className="min-w-[100px] py-2.5">Cancel</Button>
              <Button type="submit" disabled={isSubmitting} className="min-w-[120px] py-2.5">Apply Now</Button>
            </footer>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function CurrentOpenings() {
  const departments = useMemo(() => [...new Set(roles.map((role) => role.department))], []);
  const experiences = useMemo(() => [...new Set(roles.map((role) => role.experience))], []);
  const employmentTypes = useMemo(() => [...new Set(roles.map((role) => role.type))], []);
  const locations = useMemo(() => [...new Set(roles.flatMap((role) => role.location.split(" / ")))], []);

  const [selectedLocations, setSelectedLocations] = useState<string[]>(locations);
  const [department, setDepartment] = useState("");
  const [experience, setExperience] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [locationMenuOpen, setLocationMenuOpen] = useState(false);
  const [applyingFor, setApplyingFor] = useState<Role | null>(null);

  const visibleRoles = useMemo(
    () =>
      roles.filter(
        (role) =>
          (!department || role.department === department) &&
          (!experience || role.experience === experience) &&
          (!employmentType || role.type === employmentType) &&
          (selectedLocations.length === 0 || selectedLocations.some((location) => role.location.includes(location))),
      ),
    [department, employmentType, experience, selectedLocations],
  );

  const clearFilters = () => {
    setSelectedLocations([]);
    setDepartment("");
    setExperience("");
    setEmploymentType("");
  };

  return (
    <section id="openings" className="bg-[#eff9fb] py-20">
      <div className="container mx-auto">
        <div className="relative h-[390px] overflow-hidden rounded-[24px]">
          <Image src="/career/form-bg.webp" alt="Team planning a project" fill className="object-cover" />
          <div className="absolute inset-0 bg-slate-950/25" />
        </div>

        <div className="relative z-10 mx-auto -mt-52 max-w-[96%] rounded-[24px] bg-white p-5 shadow-[0_25px_70px_rgba(15,23,42,.1)] md:p-9">
          <SectionHeader
            className="text-slate-950"
            eyebrow="Current openings"
            title="Find Your Next Role at InvoLead"
            description="Explore opportunities across data science, data engineering, AI, analytics, and consulting. We're looking for people who are curious, accountable, and ready to build."
            maxWidth="3xl"
          />

          <div className="mt-8 grid gap-2 rounded-[14px] bg-[#f3f4f6] p-3 md:grid-cols-[1fr_1fr_1fr_1fr_auto] xl:grid-cols-[1fr_1fr_1fr_1fr_auto]">
            <div className="relative">
              <button type="button" onClick={() => setLocationMenuOpen((open) => !open)} className="flex h-[58px] w-full items-center justify-between rounded-[10px] border border-slate-200 bg-white px-3.5 text-left">
                <span><span className="block text-[10px] uppercase tracking-[.08em] text-slate-400">Location</span><span className="mt-0.5 block text-sm text-[#1A9EA0] font-medium">{selectedLocations.length ? `${selectedLocations.length} selected` : "All locations"}</span></span>
                <ChevronDown className="size-4 text-slate-400" />
              </button>
              {locationMenuOpen && (
                <div className="absolute left-0 top-[64px] z-30 w-full rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                  {locations.map((location) => {
                    const checked = selectedLocations.includes(location);
                    return <button key={location} type="button" onClick={() => setSelectedLocations((current) => checked ? current.filter((item) => item !== location) : [...current, location])} className="flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-slate-50"><span className={`grid size-4 place-items-center rounded border ${checked ? "border-[#48a5b9] bg-[#48a5b9] text-white" : "border-slate-300"}`}>{checked && <Check className="size-3" />}</span>{location}</button>;
                  })}
                </div>
              )}
            </div>

            <FilterSelect label="Function" value={department} onChange={setDepartment} options={departments} allLabel="All functions" />
            <FilterSelect label="Experience" value={experience} onChange={setExperience} options={experiences} allLabel="All levels" />
            <FilterSelect label="Employment type" value={employmentType} onChange={setEmploymentType} options={employmentTypes} allLabel="All types" />
            <button type="button" onClick={clearFilters} className="px-4 text-sm font-medium text-[#1797ad] hover:underline">Clear all</button>
          </div>

          {selectedLocations.length > 0 && (
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-slate-500">
              <span>Filtered by:</span>
              {selectedLocations.map((location) => <button key={location} type="button" onClick={() => setSelectedLocations((current) => current.filter((item) => item !== location))} className="flex items-center gap-1 rounded-full bg-[#f0f1f4] px-3 py-1.5 text-xs text-slate-700">{location}<X className="size-3 text-slate-400" /></button>)}
            </div>
          )}

          <p className="mb-3 mt-10 text-sm text-[#8A8A9A]"><strong className="font-semibold text-slate-950">{visibleRoles.length}</strong> open {visibleRoles.length === 1 ? "role" : "roles"}</p>

          <div className="space-y-3">
            {visibleRoles.map((role, index) => (
              <motion.article key={role.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }} className="grid gap-4 rounded-[14px] border border-slate-200 px-5 py-5 transition hover:border-[#71cfe0] hover:bg-[#edfafd] md:grid-cols-[1.35fr_.9fr_1.05fr_.7fr_auto] md:items-center md:px-6">
                <div>
                    <div className="text-[17px] font-semibold text-slate-950">{role.title}</div>
                    <div className="mt-1 text-[12px] text-[#8A8A9A] font-semibold">{role.department === "AI & Data" ? "B.Tech / BE / MSC / MBA / M.Tech" : "B.Tech / BE in Computer Science"}</div>
                </div>
                <RoleDetail label="Experience" value={role.experience} />
                <RoleDetail label="Location" value={role.location} />
                <RoleDetail label="Type" value={role.type} />
                <button type="button" onClick={() => setApplyingFor(role)} className="flex items-center gap-1 text-sm font-medium text-[#1698ad] hover:underline">Apply Now <ArrowRight className="size-4" /></button>
              </motion.article>
            ))}
            {visibleRoles.length === 0 && <div className="rounded-xl border border-dashed border-slate-300 py-12 text-center text-sm text-slate-500">No roles match the selected filters.</div>}
          </div>
        </div>
      </div>

      <AnimatePresence>{applyingFor && <ApplicationModal role={applyingFor} onClose={() => setApplyingFor(null)} />}</AnimatePresence>
    </section>
  );
}

function FilterSelect({ label, value, onChange, options, allLabel }: { label: string; value: string; onChange: (value: string) => void; options: string[]; allLabel: string }) {
  return <label className="relative flex h-[58px] flex-col justify-center rounded-[10px] border border-slate-200 bg-white px-3.5"><span className="text-[10px] uppercase tracking-[.08em] text-slate-400">{label}</span><select value={value} onChange={(event) => onChange(event.target.value)} className="mt-0.5 appearance-none bg-transparent pr-6 text-sm text-slate-800 outline-none"><option value="">{allLabel}</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400" /></label>;
}

function RoleDetail({ label, value }: { label: string; value: string }) {
  return <div><span className="block text-[12px] font-semibold text-[#8A8A9A]">{label}</span><span className="mt-1 block text-[15px] font-semibold text-slate-950">{value}</span></div>;
}
