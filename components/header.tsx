"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/start", label: "Start" },
  { href: "/book", label: "Book" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    const cls = "overflow-hidden";
    const el = document.documentElement;
    if (open) el.classList.add(cls);
    else el.classList.remove(cls);
    return () => el.classList.remove(cls);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/40 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Logo / Brand */}
      <Link href="/" className="flex items-center gap-2">
  <img src="/apple-icon.png" alt="Stenth" className="h-7 w-7" />
  <span className="text-xl font-bold tracking-tight text-[#22a1ff]">STENTH</span>
</Link>


        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium hover:text-black/80 ${
                pathname === item.href ? "text-black" : "text-black/60"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-black/70 hover:bg-black/5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-[max-height] duration-300 overflow-hidden ${
          open ? "max-h-[90vh]" : "max-h-0"
        }`}
      >
        <div className="border-t border-slate-200/60 bg-white/95 px-4 py-3">
          <nav className="grid gap-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-base font-medium text-black/80 hover:bg-black/5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
