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
      className="text-[16px] leading-relaxed text-white/90 transition hover:text-white sm:text-[18px]"
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
    <footer className="bg-[#4f94a1] text-white">
      <div className="container py-14 sm:py-30 lg:py-20">
        <div className="flex pt-10 flex-col gap-10 border-b border-white/25 pb-14 lg:flex-row lg:items-start lg:justify-between lg:pb-16">
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
              className="h-auto w-[220px] object-contain sm:w-[300px] lg:w-[350px]"
            />
          </Link>
          <h2 className="max-w-5xl text-left text-4xl font-bold leading-[1.2] tracking-normal lg:text-right">
            Business With Intelligent AI Solutions
            <br className="hidden sm:block" />
            And Digital Innovation.
          </h2>
        </div>

        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[0.9fr_1fr_0.9fr_1.35fr] lg:gap-16 xl:gap-24">
          <div>
            <h3 className="text-[20px] font-semibold leading-tight text-white">
              Quick Link
            </h3>
            <div className="mt-5 grid gap-1">
              {quickLinks.map((item) => (
                <FooterLink key={item} label={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold leading-tight text-white">
              Our Capabilities
            </h3>
            <div className="mt-5 grid gap-1">
              {capabilities.map((item) => (
                <FooterLink key={item} label={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold leading-tight text-white">
              Industries
            </h3>
            <div className="mt-5 grid gap-1">
              {industries.map((item) => (
                <FooterLink key={item} label={item} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold leading-tight text-white">
              Customer Service
            </h3>
            <div className="mt-6 space-y-9">
              <div className="flex gap-5">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#6ec4d4]">
                  <PhoneCall className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[14px] leading-snug text-white/90">
                    Mon - Sat / 10:00AM - 6:00PM
                  </p>
                  <Link
                    href="tel:+919873074893"
                    className="mt-2 block text-[20px] font-semibold leading-tight tracking-normal text-white"
                  >
                    +91 987-307-4893
                  </Link>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#6ec4d4]">
                  <Mail className="size-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[20px] font-semibold leading-tight text-white">
                    Email Id
                  </p>
                  <Link
                    href="mailto:support@involead.com"
                    className="mt-3 block text-[14px] leading-snug text-white/90"
                  >
                    Support@Involead.Com
                  </Link>
                </div>
              </div>
              <div className="flex gap-5">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#6ec4d4]">
                  <MapPin className="size-7" aria-hidden="true" />
                </span>
                <p className="max-w-md text-[14px] leading-relaxed text-white/90">
                  410A, 4th Floor, D21 Corporate Park, Dwarka Sector 21, New
                  Delhi - 110077
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex !pb-10 flex-col gap-8 border-t border-white/25 pt-10 sm:pt-12 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[20px] leading-relaxed text-white/90">
            © 2026 Involead. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-5">
            {socialLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex size-14 items-center justify-center rounded-full bg-[#6ec4d4] transition hover:bg-white hover:text-[#4f94a1]"
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
