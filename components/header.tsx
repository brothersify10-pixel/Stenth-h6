"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Home, Briefcase, Images, User, Phone,
  Rocket, Calendar, ChevronDown, X
} from "lucide-react"

type NavItem = {
  href: string
  label: string
  icon: React.ComponentType<any>
}

const LINKS: NavItem[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/portfolio", label: "Portfolio", icon: Images },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Phone },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Lightweight scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close drawer on route change
  useEffect(() => setOpen(false), [pathname])

  // Lock background scroll when drawer open
  useEffect(() => {
    const el = document.documentElement
    if (open) el.classList.add("overflow-hidden")
    else el.classList.remove("overflow-hidden")
    return () => el.classList.remove("overflow-hidden")
  }, [open])

  const isActive = (href: string) => pathname === href

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-[background,box-shadow,border-color] duration-300
        ${open
          ? "bg-slate-950"
          : scrolled
            ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/70 shadow-[0_8px_24px_-12px_rgba(0,0,0,.6)]"
            : "bg-slate-950/90 backdrop-blur"}`
        }
      >
        <nav className="container mx-auto px-5 md:px-6 py-3.5">
          <div className="flex items-center justify-between gap-3">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/Stenth_Logo-removebg.png"
                alt="Stenth"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                priority
              />
              <span className="text-xl md:text-2xl font-semibold tracking-tight text-white">STENTH</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              <ul className="flex items-center gap-1">
                {LINKS.map(({ href, label, icon: Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      aria-current={isActive(href) ? "page" : undefined}
                      className={`group relative px-3.5 py-2 text-sm font-medium rounded-lg
                      ${isActive(href)
                        ? "text-white bg-slate-800"
                        : "text-slate-200 hover:text-white hover:bg-slate-800/60"} flex items-center gap-2`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{label}</span>
                      {/* Underline accent on hover */}
                      <span className="pointer-events-none absolute left-3.5 right-3.5 -bottom-[2px] h-px bg-gradient-to-r from-cyan-400 to-indigo-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTAs */}
              <div className="flex items-center gap-2 ml-3">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                >
                  <Rocket className="w-4 h-4" />
                  Start
                </Link>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-400 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Book
                </Link>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(v => !v)}
              className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl bg-slate-800 text-white ring-1 ring-white/10 hover:bg-slate-700 transition"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? (
                <X className="h-6 w-6" strokeWidth={2.6} />
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile drawer (opaque) */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-0 z-50 transition-opacity duration-200
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"} bg-slate-950`}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative flex flex-col h-full">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <Image src="/Stenth_Logo-removebg.png" alt="Stenth" width={34} height={34} className="object-contain" />
                <span className="text-lg font-semibold text-white">STENTH</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-slate-800 text-white ring-1 ring-white/10 hover:bg-slate-700 transition"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" strokeWidth={2.6} />
              </button>
            </div>

            {/* Drawer links */}
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <nav className="grid gap-2">
                {LINKS.map(({ href, label, icon: Icon }) => {
                  const active = isActive(href)
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 border transition-colors
                      ${active
                        ? "bg-slate-900 text-cyan-300 border-slate-800"
                        : "bg-slate-900/60 text-slate-200 hover:bg-slate-900 border-slate-800"}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-slate-800">
                          <Icon className="w-5 h-5 text-slate-200" />
                        </span>
                        <span className="font-medium">{label}</span>
                      </span>
                      <ChevronDown className="w-4 h-4 rotate-[-90deg] opacity-70" />
                    </Link>
                  )
                })}
              </nav>

              {/* CTAs */}
              <div className="mt-6 grid gap-3">
                <Link
                  href="/start"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-colors"
                >
                  <Rocket className="w-5 h-5" />
                  Start Growing
                </Link>
                <Link
                  href="/book"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-400 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Book Session
                </Link>
              </div>
            </div>

            {/* Safe area spacer */}
            <div className="h-4" />
          </div>
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950 border-t border-slate-800">
        <nav className="grid grid-cols-5">
          {[
            LINKS[0], // Home
            LINKS[1], // Services
            LINKS[2], // Portfolio
            LINKS[4], // Contact
            { href: "/book", label: "Book", icon: Calendar },
          ].map(({ href, label, icon: Icon }) => {
            const active = isActive(href)
            return (
              <Link
                key={href}
                href={href}
                className={`flex flex-col items-center justify-center py-2.5 text-[11px] ${
                  active ? "text-cyan-300" : "text-slate-300 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span>{label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Spacer: header height + bottom tabs */}
      <div className="h-16 md:h-20 pb-14 md:pb-0" />
    </>
  )
}
