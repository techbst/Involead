'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

type NavItem =
  | { label: string; href: string; items?: never }
  | { label: string; href?: never; items: { label: string; href: string }[] };

const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Our Solution',
    items: [
      { label: 'Generative AI', href: '/solutions/generative-ai' },
      { label: 'Data Engineering', href: '/solutions/data-engineering' },
    ],
  },
  {
    label: 'Industries',
    items: [
      { label: 'Retail', href: '/industries/retail' },
      { label: 'Healthcare', href: '/industries/healthcare' },
    ],
  },
  {
    label: 'Products',
    items: [
      { label: 'Product A', href: '/products/a' },
      { label: 'Product B', href: '/products/b' },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Career', href: '/career' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }

    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full pt-4 pb-4 transition-colors lg:pt-7 lg:pb-7 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between gap-4 py-3">
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

        <nav className="hidden items-center lg:flex" aria-label="Primary navigation">
          <div className="flex items-center gap-2 rounded-[50px] border border-[#ddd] backdrop-blur-sm px-4 py-2">
            {nav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.items && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
                onFocus={() => item.items && setOpenDropdown(item.label)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    setOpenDropdown(null);
                  }
                }}
              >
                {item.items ? (
                  <button
                    type="button"
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup="menu"
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-black hover:text-secondary xl:px-4"
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3 text-slate-500" aria-hidden="true" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-black hover:text-secondary xl:px-4"
                  >
                    {item.label}
                  </Link>
                )}

                {item.items && (
                  <div
                    role="menu"
                    className={`absolute left-0 top-full z-40 w-48 pt-2 transition-opacity ${
                      openDropdown === item.label
                        ? 'pointer-events-auto opacity-100'
                        : 'pointer-events-none opacity-0'
                    }`}
                  >
                    <div className="rounded-md bg-white py-2 shadow-md">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          role="menuitem"
                          className="block px-4 py-2 text-sm text-black hover:bg-secondary hover:text-white"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Button asChild variant="default">
              <Link href="/contact">
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
          <aside className="absolute left-0 top-0 h-full w-4/5 max-w-xs bg-white p-6 shadow-xl">
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

            <nav className="mt-6 space-y-2" aria-label="Mobile navigation">
              {nav.map((item) => (
                <div key={item.label}>
                  {item.items ? (
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-2 py-3 hover:bg-slate-50">
                        <span className="font-medium">{item.label}</span>
                        <ChevronDown
                          className="h-4 w-4 text-slate-500 transition-transform group-open:rotate-180"
                          aria-hidden="true"
                        />
                      </summary>
                      <div className="mt-2 space-y-1 pl-4">
                        {item.items.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={closeMobileMenu}
                            className="block px-2 py-2 text-sm text-slate-700"
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
                      className="block rounded-md px-2 py-3 text-sm font-medium hover:bg-slate-50"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-6">
              <Button asChild variant="rounded-arrow">
                <Link href="/contact" onClick={closeMobileMenu}>
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
