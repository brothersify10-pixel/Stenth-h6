"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Menu, X, Home, Briefcase, User, Phone, Rocket, Calendar,
  ChevronDown, Sparkles, TrendingUp
} from "lucide-react"

type Sub = { title: string; desc: string; icon: React.ComponentType<any> }
type Item = { href: string; label: string; icon: React.ComponentType<any>; wash: string; mega?: Sub[] }

const NAV: Item[] = [
  { href: "/",          label: "Home",      icon: Home,      wash: "from-slate-700 to-slate-600" },
  { href: "/services",  label: "Services",  icon: Briefcase, wash: "from-slate-700 to-slate-600",
    mega: [
      { title: "Digital Marketing", desc: "SEO, PPC, Social", icon: TrendingUp },
      { title: "Web Development",   desc: "Sites & apps",     icon: Briefcase  },
      { title: "Brand Strategy",    desc: "Positioning, ID",  icon: Sparkles   },
      { title: "Analytics",         desc: "Data insights",    icon: TrendingUp },
    ],
  },
  { href: "/about",     label: "About",     icon: User,      wash: "from-slate-700 to-slate-600" },
  { href: "/portfolio", label: "Portfolio", icon: Briefcase, wash: "from-slate-700 to-slate-600" },
  { href: "/contact",   label: "Contact",   icon: Phone,     wash: "from-slate-700 to-slate-600" },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const [hide, setHide] = useState(false) // duplicate guard

  // Duplicate-render guard (stops double nav if you accidentally mount twice)
  useEffect(() => {
    if (typeof document === "undefined") return
    const FLAG = "data-stenth-header-mounted"
    if (document.body.hasAttribute(FLAG)) {
      setHide(true)
      return
    }
    document.body.setAttribute(FLAG, "1")
    return () => document.body.removeAttribute(FLAG)
  }, [])
  if (hide) return null

  // Header elevation on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile on route change
  useEffect(() => setOpen(false), [pathname])

  // Lock page scroll when drawer open
  useEffect(() => {
    const el = document.documentElement
    if (open) el.classList.add("overflow-hidden")
    else el.classList.remove("overflow-hidden")
    return () => el.classList.remove("overflow-hidden")
  }, [open])

  const isActive = useMemo(() => (href: string) => pathname === href, [pathname])

  return (
    <>
      {/* STICKY header (no spacer needed, no white gap) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          open
            ? "bg-slate-950"
            : scrolled
            ? "bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-black/30 border-b border-slate-800/60"
            : "bg-slate-950/90 backdrop-blur"
        }`}
        data-stenth-header
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <span className="relative inline-block">
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-400 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                <Image
                  src="/Stenth_Logo-removebg.png"
                  alt="Stenth"
                  width={48}
                  height={48}
                  priority
                  className="relative z-10 w-12 h-12 object-contain group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                />
              </span>
              <span className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                STENTH
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              <ul className="flex gap-1">
                {NAV.map((it, idx) => (
                  <li
                    key={it.href}
                    className="relative group"
                    onMouseEnter={() => setHovered(idx)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <Link
                      href={it.href}
                      className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl overflow-hidden flex items-center gap-2
                        ${isActive(it.href) ? "text-white" : "text-slate-200 hover:text-white"}`}
                    >
                      {/* Hover wash */}
                      <span className={`absolute inset-0 bg-gradient-to-r ${it.wash} opacity-0 group-hover:opacity-10 transition-opacity`} />
                      {/* Subtle border */}
                      <span className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/15 transition-colors" />
                      <it.icon className="w-4 h-4 relative z-10 group-hover:-translate-y-[1px] group-hover:rotate-12 transition-transform" />
                      <span className="relative z-10">{it.label}</span>
                      {it.mega && <ChevronDown className="w-3 h-3 opacity-70" />}
                      {/* Shimmer */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    </Link>

                    {/* Mega menu */}
                    {it.mega && hovered === idx && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-slate-950/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/40 p-6 animate-in">
                        <div className="grid grid-cols-2 gap-4">
                          {it.mega.map((m, i) => (
                            <Link
                              key={i}
                              href={`${it.href}/${m.title.toLowerCase().replace(/\s+/g, "-")}`}
                              className="group p-4 rounded-xl hover:bg-white/5 transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-slate-800 group-hover:scale-110 transition-transform">
                                  <m.icon className="w-5 h-5 text-slate-200" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                    {m.title}
                                  </h4>
                                  <p className="text-sm text-slate-400 mt-1">{m.desc}</p>
                                </div>
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
              <div className="flex gap-3 ml-6">
                <Link
                  href="/start"
                  className="relative px-6 py-2.5 rounded-full text-sm font-semibold text-slate-950 bg-cyan-500 hover:bg-cyan-400 transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <Rocket className="w-4 h-4" />
                    Start Growing
                  </span>
                </Link>
                <Link
                  href="/book"
                  className="relative px-6 py-2.5 rounded-full text-sm font-semibold text-white bg-indigo-500 hover:bg-indigo-400 transition-colors"
                >
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Session
                  </span>
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
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile drawer (opaque, transform-only) */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
          role="dialog"
          aria-modal="true"
          aria-hidden={!open}
        >
          {/* Opaque backdrop */}
          <div className="absolute inset-0 bg-slate-950" />

          {/* Drawer (slides up). No blur, no gradients → fast */}
          <div
            className={`relative h-full flex flex-col transition-transform duration-220 ease-out will-change-transform ${
              open ? "translate-y-0" : "translate-y-full"
            }`}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <Image src="/Stenth_Logo-removebg.png" alt="Stenth" width={36} height={36} priority />
                <span className="text-lg font-semibold text-white">STENTH</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-slate-800 text-white ring-1 ring-white/10 hover:bg-slate-700 transition"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer body */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <nav className="grid gap-2">
                {[...NAV,
                  { href: "/start", label: "Start Growing", icon: Rocket, wash: "" },
                  { href: "/book",  label: "Book Session",  icon: Calendar, wash: "" },
                ].map((it: any) => {
                  const Icon = it.icon
                  const active = isActive(it.href)
                  return (
                    <Link
                      key={it.href}
                      href={it.href}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 border transition-colors
                        ${active ? "bg-slate-900 text-cyan-300 border-slate-800" : "bg-slate-900/90 text-slate-200 hover:bg-slate-900 border-slate-800"}`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-slate-800">
                          <Icon className="w-5 h-5 text-slate-200" />
                        </span>
                        <span className="font-medium">{it.label}</span>
                      </span>
                      <span className={`h-1.5 w-6 rounded-full ${active ? "bg-cyan-400" : "bg-slate-700"}`} />
                    </Link>
                  )
                })}
              </nav>
            </div>

            {/* safe-area */}
            <div className="h-6" />
          </div>
        </div>
      </header>

      <style jsx>{`
        .animate-in { animation: slideIn .22s ease-out both }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-6px) }
          to   { opacity: 1; transform: translateY(0) }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: .01ms !important; animation-iteration-count: 1 !important; transition-duration: .01ms !important; }
        }
      `}</style>
    </>
  )
}
