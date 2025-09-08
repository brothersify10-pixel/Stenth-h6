"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Home, Briefcase, User, Phone, Rocket, Calendar,
  ChevronDown, TrendingUp, Sparkles, Zap, Star, ArrowRight, X
} from "lucide-react"

type NavItem = {
  href: string
  label: string
  icon: React.ComponentType<any>
  color: string
  emoji: string
  megaMenu?: { title: string; desc: string; icon: React.ComponentType<any> }[]
}

const NAV: NavItem[] = [
  { href: "/", label: "Home", icon: Home, color: "from-slate-700 to-slate-600", emoji: "🏠" },
  {
    href: "/services", label: "Services", icon: Briefcase, color: "from-slate-700 to-slate-600", emoji: "⚡",
    megaMenu: [
      { title: "Digital Marketing", desc: "SEO, PPC, Social Media", icon: TrendingUp },
      { title: "Web Development", desc: "Custom websites & apps", icon: Briefcase },
      { title: "Brand Strategy", desc: "Complete brand overhaul", icon: Sparkles },
      { title: "Analytics", desc: "Data-driven insights", icon: Zap }
    ]
  },
  { href: "/about", label: "About", icon: User, color: "from-slate-700 to-slate-600", emoji: "👋" },
  { href: "/portfolio", label: "Portfolio", icon: Briefcase, color: "from-slate-700 to-slate-600", emoji: "🎨" },
  { href: "/contact", label: "Contact", icon: Phone, color: "from-slate-700 to-slate-600", emoji: "📞" },
  { href: "/start", label: "Start Growing", icon: Rocket, color: "from-slate-700 to-slate-600", emoji: "🚀" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => setOpen(false), [pathname])

  // Lock bg scroll when drawer open
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
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          open
            ? "bg-slate-950"
            : scrolled
            ? "bg-slate-950/95 backdrop-blur-xl shadow-xl shadow-slate-900/40 border-b border-slate-800/60"
            : "bg-slate-950/90 backdrop-blur"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/Stenth_Logo-removebg.png"
                alt="Stenth Logo"
                width={44}
                height={44}
                className="w-11 h-11 object-contain"
                priority
              />
              <span className="text-2xl font-semibold tracking-tight text-white">STENTH</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              <ul className="flex items-center gap-1">
                {NAV.slice(0, 5).map((item) => (
                  <li key={item.href} className="relative">
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center gap-2
                        ${isActive(item.href) ? "text-white bg-slate-800" : "text-slate-200 hover:text-white hover:bg-slate-800/60"}`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                      {item.megaMenu && <ChevronDown className="w-3 h-3 opacity-70" />}
                    </Link>

                    {/* Simple dropdown for Services (optional mega-menu styling kept subtle) */}
                    {item.megaMenu && isActive("/services") && (
                      <div className="absolute top-full left-0 mt-2 w-[28rem] rounded-xl border border-slate-800/70 bg-slate-950 shadow-2xl shadow-black/40 p-4">
                        <div className="grid grid-cols-2 gap-2">
                          {item.megaMenu.map((sub, i) => (
                            <Link
                              key={i}
                              href={`${item.href}/${sub.title.toLowerCase().replace(/\s+/g, "-")}`}
                              className="flex items-start gap-3 rounded-lg p-3 hover:bg-slate-900/80 transition-colors"
                            >
                              <div className="p-2 rounded-md bg-slate-800">
                                <sub.icon className="w-5 h-5 text-slate-200" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-white">{sub.title}</p>
                                <p className="text-xs text-slate-400">{sub.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Desktop CTAs */}
              <div className="flex items-center gap-3 ml-4">
                <Link
                  href="/start"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-colors"
                >
                  <Rocket className="w-4 h-4" />
                  Start Growing
                </Link>
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold bg-indigo-500 text-white hover:bg-indigo-400 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  Book Session
                </Link>
              </div>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(v => !v)}
              className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-white ring-1 ring-white/10 hover:bg-slate-700 transition"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? (
                <X className="h-6 w-6" strokeWidth={2.75} />
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" className="h-6 w-6">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.75" strokeLinecap="round"/>
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile overlay: fully opaque */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-0 z-50 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0 pointer-events-none"} bg-slate-950`}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative flex flex-col h-full">
            {/* Top bar inside overlay */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <Image src="/Stenth_Logo-removebg.png" alt="Stenth" width={36} height={36} className="object-contain" />
                <span className="text-lg font-semibold text-white">STENTH</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-slate-800 text-white ring-1 ring-white/10 hover:bg-slate-700 transition"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" strokeWidth={2.75} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <nav className="grid gap-2">
                {NAV.map((item) => {
                  const Icon = item.icon
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 transition-colors border border-slate-800 ${
                        active ? "bg-slate-900 text-cyan-300" : "bg-slate-900/60 text-slate-200 hover:bg-slate-900"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-slate-800">
                          <Icon className="w-5 h-5 text-slate-200" />
                        </span>
                        <span className="font-medium">{item.label}</span>
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-300" />
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

            {/* Bottom safe area for devices with home indicator */}
            <div className="h-4" />
          </div>
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-slate-950 border-t border-slate-800">
        <nav className="grid grid-cols-5">
          {[
            NAV[0],           // Home
            NAV[1],           // Services
            NAV[3],           // Portfolio
            NAV[4],           // Contact
            { href: "/book", label: "Book", icon: Calendar, color: "", emoji: "" } as NavItem,
          ].map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center py-2.5 text-xs ${
                  active ? "text-cyan-300" : "text-slate-300 hover:text-white"
                }`}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Spacer: header height + bottom tabs on mobile */}
      <div className="h-20 md:h-24 pb-14 md:pb-0" />
    </>
  )
}
