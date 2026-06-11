import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, PhoneCall } from "lucide-react";

const quickLinks = [
  "Services",
  "Industries",
  "Careers",
  "Case Studies",
  "About Us",
  "Contact",
];
const capabilities = [
  "Generative AI",
  "Data Science",
  "Business Intelligence",
  "Data Engineering",
  "Cloud Solutions",
  "Software Engineering",
];
const industries = [
  "Retail",
  "Pharma",
  "Telecom",
  "Manufacturing",
  "CPG",
  "Healthcare",
];

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "X", href: "#" },
  { label: "YouTube", href: "#" },
];

function FooterLink({ label, href = "#" }: { label: string; href?: string }) {
  return (
    <Link
      href={href}
      className="text-[15px] leading-6 text-white/90 transition hover:text-white sm:text-[16px]"
    >
      {label}
    </Link>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return <span className="text-[24px] font-bold leading-none">in</span>;
  }

  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <circle
          cx="12"
          cy="12"
          r="3"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <circle cx="16.5" cy="7.5" r="1.2" fill="currentColor" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return <span className="text-[32px] font-bold leading-none">f</span>;
  }

  if (label === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" className="size-7" aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="4" fill="currentColor" />
        <path d="M10 9.25 15 12l-5 2.75z" fill="#6ec4d4" />
      </svg>
    );
  }

  return <span className="text-[28px] font-light leading-none">X</span>;
}

export default function Footer() {
  return (
    <footer className="bg-[#4f94a1] text-white pb-10">
      <div className="container py-10 sm:py-12 lg:py-14">
        <div className="flex flex-col gap-8 border-b border-white/25 pb-8 pt-6 sm:gap-10 sm:pb-10 sm:pt-8 lg:flex-row lg:items-start lg:justify-between lg:pb-12 lg:pt-10">
          <Link
            href="/"
            aria-label="InvoLead home"
            className="inline-flex w-fit"
          > 
            <Image
              src="/img/logo.png"
              alt="InvoLead"
              width={350}
              height={105}
              className="h-auto w-[180px] object-contain sm:w-[240px] lg:w-[300px]"
            />
          </Link>
          <h2 className="max-w-3xl text-left md:!text-[40px] font-bold leading-[1.08] tracking-normal lg:text-right">
            Business With Intelligent AI Solutions And Digital Innovation.
          </h2>
        </div>

        <div className="grid gap-10 py-10 sm:gap-12 sm:py-12 lg:grid-cols-[0.95fr_1fr_0.9fr_1.2fr] lg:gap-12 xl:gap-16">
          <div>
            <h3 className="text-[18px] font-semibold leading-tight text-white sm:text-[20px]">
              Quick Link
            </h3>
            <div className="mt-4 grid gap-2 sm:mt-5">
              {quickLinks.map((item) => (
                <FooterLink key={item} label={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold leading-tight text-white sm:text-[20px]">
              Our Capabilities
            </h3>
            <div className="mt-4 grid gap-2 sm:mt-5">
              {capabilities.map((item) => (
                <FooterLink key={item} label={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold leading-tight text-white sm:text-[20px]">
              Industries
            </h3>
            <div className="mt-4 grid gap-2 sm:mt-5">
              {industries.map((item) => (
                <FooterLink key={item} label={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[18px] font-semibold leading-tight text-white sm:text-[20px]">
              Customer Service
            </h3>
            <div className="mt-5 space-y-6 sm:mt-6 sm:space-y-7">
              <div className="flex gap-4 sm:gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#6ec4d4] sm:size-12">
                  <PhoneCall className="size-5 sm:size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[13px] leading-snug text-white/90 sm:text-[14px]">
                    Mon - Sat / 10:00AM - 6:00PM
                  </p>
                  <Link
                    href="tel:+919873074893"
                    className="mt-1.5 block text-[17px] font-semibold leading-tight tracking-normal text-white sm:mt-2 sm:text-[20px]"
                  >
                    +91 987-307-4893
                  </Link>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#6ec4d4] sm:size-12">
                  <Mail className="size-5 sm:size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="!text-[17px] !font-bold leading-tight text-white sm:text-[20px]">
                    Email ID
                  </p>
                  <Link
                    href="mailto:support@involead.com"
                    className="mt-1.5 block text-[13px] leading-snug text-white/90 sm:mt-2 sm:text-[14px]"
                  >
                    Support@Involead.Com
                  </Link>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#6ec4d4] sm:size-12">
                  <MapPin className="size-5 sm:size-6" aria-hidden="true" />
                </span>
                <p className="max-w-md text-[13px] leading-relaxed text-white/90 sm:text-[14px]">
                  410A, 4th Floor, D21 Corporate Park, Dwarka Sector 21, New
                  Delhi - 110077
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/25 pt-8 sm:pt-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-sm leading-relaxed text-white/90 sm:text-base">
            © 2026 Involead. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            {socialLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex size-11 items-center justify-center rounded-full bg-[#6ec4d4] transition hover:bg-white hover:text-[#4f94a1] sm:size-12"
              >
                <SocialIcon label={label} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
