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
    "text-[15px] leading-[1.7] text-white transition-colors hover:text-white sm:text-[15px]";

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
      <p className="!text-[18px] font-medium !text-white sm:!text-[20px]">{title}</p>
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
    <footer id="contact" className=" bg-secondary scroll-mt-20 pt-12 sm:pt-12 lg:scroll-mt-28">
      <div className="container">
        <div className=" ">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <div className="mx-auto flex max-w-md flex-col gap-6 text-center lg:mx-0 lg:max-w-[28rem] lg:text-left">
              <div className="flex flex-col gap-2">
               <Image
                           src="/img/logo.png"
                           alt="InvoLead"
                           width={164}
                           height={46}
                           className="mx-auto h-auto w-full max-w-[164px] object-contain lg:mx-0"
                           priority
                         /> 
                <p className="mt-2 !text-[20px] leading-[1.75] !text-white sm:!text-[24px]">
                  Business With Intelligent AI Solutions And Digital Innovation.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <p className="!text-[18px] font-medium !text-white sm:!text-[20px]">
                  Follow Us on
                </p>
                <div className="flex items-center justify-center gap-3 lg:justify-start">
                  {socialLinks.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex group h-8 w-8 items-center justify-center rounded-full outline outline-1 outline-[#fff] transition hover:bg-[#fff] "
                    >
                      <span className="text-[16px] font-semibold group-hover:!text-[#60b0c2] text-white">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid w-full gap-10 text-center sm:grid-cols-3 sm:text-left lg:w-auto lg:gap-[4.375rem]">
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
                      className="text-[15px] text-white transition-colors  sm:text-[15px]"
                    >
                      +91 987-307-4893
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:support@involead.com"
                      className="text-[15px] text-white transition-colors  sm:text-[15px]"
                    >
                      Support@Involead.Com
                    </Link>
                  </li>
                  <li className="mx-auto max-w-[18rem] text-[15px] leading-[1.7] text-white sm:mx-0 sm:text-[15px]">
                    410A, 4th Floor, D21 Corporate Park, Dwarka Sector 21, New
                    Delhi - 110077
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative mt-8 mb-5 w-full lg:mt-0">
            <Image src="/img/footer-logo.svg" width={1000} height={100} className="mx-auto h-auto w-full" alt="image svg" />
          </div>

          <div className="border-t-1 mt-4 pt-4 pb-3 border-white/20 flex flex-col gap-4  pb-5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-center !text-[14px] leading-[1.55] !text-white lg:text-left">
              © 2026 Involead Services Private Limited.
              
              All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:gap-x-10">
              {legalLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="text-[14px] text-white transition-colors hover:text-white"
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
