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
      const isMobile = window.innerWidth < 1024;

      setScrolled(currentScrollY > 10);

      if (isMobile) {
        setShowHeader(true);
        lastScrollY = currentScrollY;
        return;
      }

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

  useEffect(() => {
    if (!mobileOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <header
      className={`fixed left-0 right-0 z-[150] flex justify-center px-0 lg:px-12 transition-transform duration-300 ${showHeader
          ? "translate-y-0"
          : "-translate-y-full"
        } ${scrolled
          ? "!bg-white !top-0 shadow-xl shadow-black/5"
          : "top-0 bg-white lg:top-5 lg:bg-transparent"
        }`}
    >
      <div
        className={`relative max-w-[84rem] w-full flex items-center justify-between overflow-visible rounded-none border-x-0 border-y border-slate-200 px-4 py-3 backdrop-blur-xl transition-all duration-300 lg:rounded-full lg:border lg:border-white/60 lg:px-5 ${scrolled
            ? "shadow-none"
            : "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.04),0_1px_0_rgba(255,255,255,0.7)_inset] lg:bg-white/10 lg:shadow-[0_2px_20px_rgba(0,0,0,0.04),0_1px_0_rgba(255,255,255,0.7)_inset] lg:shadow-[0_12px_40px_rgba(15,23,42,0.12)]"
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
            className="inline-flex size-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm lg:hidden"
            onClick={() => setMobileOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[260] lg:hidden">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-slate-950/45 backdrop-blur-[2px]"
            onClick={closeMobileMenu}
          />

          <aside className="absolute left-0 top-0 flex h-full w-[min(100vw,26rem)] flex-col overflow-hidden border-r border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.22)]">
            <div className="border-b border-slate-200 bg-[linear-gradient(135deg,rgba(95,176,194,0.08),rgba(255,255,255,1))] px-5 py-4">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
                  <Image
                    src="/img/logo.png"
                    alt="InvoLead"
                    width={142}
                    height={40}
                    className="h-auto w-[118px] object-contain"
                    priority
                  />
                </Link>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMobileMenu}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-secondary">
                  Explore InvoLead
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  AI, data, and software delivery shaped around enterprise outcomes.
                </p>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
              <div className="space-y-2">
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-950"
                >
                  <span>Home</span>
                  <ArrowRight className="size-4 text-secondary" />
                </Link>

                {nav.map((item) =>
                  item.items ? (
                    <details key={item.label} className="group rounded-2xl border border-slate-200 bg-white">
                      <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3">
                        <span className="text-sm font-semibold text-slate-950">{item.label}</span>
                        <ChevronDown
                          className="h-4 w-4 text-slate-500 transition-transform group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <div className="grid gap-2 border-t border-slate-100 px-3 py-3">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={closeMobileMenu}
                            className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-secondary"
                          >
                            <span>{sub.label}</span>
                            <ArrowRight className="size-4 text-slate-400" />
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : null,
                )}

                <Link
                  href="/about"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-950"
                >
                  <span>About Us</span>
                  <ArrowRight className="size-4 text-secondary" />
                </Link>

                <Link
                  href="/career"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-950"
                >
                  <span>Career</span>
                  <ArrowRight className="size-4 text-secondary" />
                </Link>
              </div>
            </nav>

            <div className="border-t border-slate-200 p-4">
              <Button asChild className="w-full rounded-full bg-secondary px-6 py-6 text-white">
                <Link href="/contact-us" onClick={closeMobileMenu}>
                  Contact Us
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
