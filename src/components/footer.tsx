import Link from "next/link";
import Image from "next/image";
type FooterNavItem = {
  label: string;
  href?: string;
};

const services: FooterNavItem[] = [
  { label: "Data Engineering", href: "/our-solutions/data-engineering" },
  { label: "Data Analytics", href: "/our-solutions/data-science" },
  { label: "Cloud Solutions" },
  { label: "Consulting" },
];

const company: FooterNavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "Case Studies" },
  { label: "Careers", href: "/career" },
  { label: "Contact Us", href: "/contact-us" },
];

const legalLinks: FooterNavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Sales and Refunds", href: "/sales-and-refunds" },
  { label: "Legal", href: "/legal" },
  { label: "Site Map", href: "/site-map" },
];

const socialLinks = [
  { label: "in", href: "https://linkedin.com" },
  { label: "f", href: "https://facebook.com" },
  { label: "X", href: "https://x.com" },
];

function FooterLink({ label, href }: FooterNavItem) {
  const className =
    "text-[16px] leading-[1.7] text-white/74 transition-colors hover:text-white sm:text-[17px]";

  if (!href) {
    return <span className={className}>{label}</span>;
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: FooterNavItem[];
}) {
  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <p className="text-[20px] font-medium !text-white sm:!text-[24px]">{title}</p>
      <ul className="flex flex-col gap-3 sm:gap-4">
        {items.map((item) => (
          <li key={item.label}>
            <FooterLink {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="rounded-t-3xl bg-secondary scroll-mt-24 pt-20 sm:pt-24 lg:scroll-mt-28">
      <div className="container">
        <div className=" ">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex flex-col gap-8 text-center lg:max-w-[28rem] lg:text-left">
              <div className="flex flex-col gap-6">
                <span className="text-[34px] font-semibold tracking-[-0.04em] text-white sm:text-[40px]">
                  InvoLead
                </span>
                <p className="!text-[20px] leading-[1.75] !text-white/74 sm:!text-[26px]">
                  Business With Intelligent AI Solutions And Digital Innovation.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="!text-[20px] font-medium !text-white sm:!text-[24px]">
                  Follow Us on
                </p>
                <div className="flex items-center justify-center gap-3 lg:justify-start">
                  {socialLinks.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex h-12 w-12 items-center justify-center rounded-full outline outline-1 outline-[#fff] transition hover:bg-[#fff] hover:!text-[#60b0c2]"
                    >
                      <span className="text-[20px] font-semibold text-white">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-10 sm:gap-12 lg:gap-[4.375rem]">
              <FooterColumn title="Services" items={services} />
              <FooterColumn title="Company" items={company} />

              <div className="flex flex-col gap-4 sm:gap-6">
                <p className="!text-[20px] font-medium !text-white sm:!text-[24px]">
                  Get in Touch
                </p>
                <ul className="flex flex-col gap-3 sm:gap-4">
                  <li>
                    <Link
                      href="tel:+919873074893"
                      className="text-[16px] text-white transition-colors hover:text-[#5fb0c2] sm:text-[17px]"
                    >
                      +91 987-307-4893
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:support@involead.com"
                      className="text-[16px] text-white transition-colors hover:text-[#5fb0c2] sm:text-[17px]"
                    >
                      Support@Involead.Com
                    </Link>
                  </li>
                  <li className="max-w-[18rem] text-[16px] leading-[1.7] text-white/74 sm:text-[17px]">
                    410A, 4th Floor, D21 Corporate Park, Dwarka Sector 21, New
                    Delhi - 110077
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative mt-0 w-full ">
            <Image src="/img/white-footer.svg" width={1000} height={100} className="h-full w-full" alt="image svg" />
          </div>

          <div className=" flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-center !text-[13px] leading-[1.55] !text-white/45 lg:text-left">
              © 2026 Involead Services Private Limited.
              <br />
              All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
              {legalLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="text-[13px] text-white/45 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
