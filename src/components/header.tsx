'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import DesktopMegaMenu from '@/components/navigation/desktop-mega-menu';
import { Button } from '@/components/ui/button';

type MobileNavItem =
  | { label: string; href: string; items?: never }
  | { label: string; href?: never; items: { label: string; href: string }[] };

const nav: MobileNavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Our Solutions',
    items: [
      { label: 'Data Science', href: '/our-solutions/data-science' },
      { label: 'Software Development', href: '/our-solutions/software-development' },
      { label: 'Generative AI', href: '/our-solutions/generative-ai' },
      { label: 'Data Engineering', href: '/our-solutions/data-engineering' },
      { label: 'Cloud Solution', href: '/our-solutions/cloud-solution' },
      { label: 'Consulting', href: '/our-solutions/consulting' },
    ],
  },
  {
    label: 'Industries',
    items: [
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Healthcare', href: '/industries/healthcare' },
      { label: 'Finance', href: '/industries/finance' },
    ],
  },
  {
    label: 'Products',
    items: [
      { label: 'AI Assistant Studio', href: '/products/ai-assistant-studio' },
      { label: 'Knowledge Graph Engine', href: '/products/knowledge-graph-engine' },
      { label: 'Insight Control Tower', href: '/products/insight-control-tower' },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Career', href: '/career' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 10);

      if (currentScrollY < 100) {
        setShowHeader(true);
      } else {
        // setShowHeader(currentScrollY < lastScrollY);
        setShowHeader(currentScrollY > lastScrollY);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 z-[100] flex justify-center xl:px-12 px-5 transition-transform duration-300 ${showHeader
          ? "translate-y-0"
          : "-translate-y-full"
        } ${scrolled
          ? "!bg-white !top-0 shadow-xl shadow-black/5"
          : "top-5 bg-transparent"
        }`}
    >
      <div
        className={`relative max-w-[84rem]  w-full px-5 flex items-center justify-between overflow-visible rounded-full border py-3  border-white/60 backdrop-blur-xl transition-all duration-300 ${scrolled
            ? " !shadow-none rounded-none transition-all duration-300 "
            : "bg-white/10 shadow-[0_2px_20px_rgba(0,0,0,0.04),0_1px_0_rgba(255,255,255,0.7)_inset] transition-all duration-300"
          }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <Image
              src="/img/logo.png"
              alt="InvoLead"
              width={164}
              height={46}
              className="h-auto w-full max-w-[164px] object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-3 lg:flex" aria-label="Primary navigation">
          <Link
            href="/"
            className="flex h-10 items-center rounded-full px-4 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-100 hover:text-secondary"
          >
            Home
          </Link>
          <DesktopMegaMenu />
          <Link
            href="/about"
            className="flex h-10 items-center rounded-full px-4 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-100 hover:text-secondary"
          >
            About Us
          </Link>
          <Link
            href="/career"
            className="flex h-10 items-center rounded-full px-4 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-100 hover:text-secondary"
          >
            Career
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button asChild variant="default">
              <Link href="/contact-us">
                Contact Us
                <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            className="inline-flex items-center justify-center rounded-md p-2 lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40"
            onClick={closeMobileMenu}
          />
          <aside className="absolute left-0 top-0 flex h-full w-[min(92vw,22rem)] flex-col bg-white p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  IL
                </div>
                <span className="font-semibold">InvoLead</span>
              </Link>
              <button
                type="button"
                aria-label="Close menu"
                onClick={closeMobileMenu}
                className="p-2"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-6 flex-1 space-y-2 overflow-y-auto pr-1 pb-6" aria-label="Mobile navigation">
              {nav.map((item) => (
                <div key={item.label}>
                  {item.items ? (
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 hover:bg-slate-50">
                        <span className="font-medium text-slate-950">{item.label}</span>
                        <ChevronDown
                          className="h-4 w-4 text-slate-500 transition-transform group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <div className="mt-2 space-y-1 pl-3">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={closeMobileMenu}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-secondary"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-950 hover:bg-slate-50 hover:text-secondary"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-auto pt-4">
              <Button asChild variant="rounded-arrow">
                <Link href="/contact-us" onClick={closeMobileMenu}>
                  Contact Us
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
