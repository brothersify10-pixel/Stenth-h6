"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import {
  Menu, X, Home, Briefcase, User, Phone, Rocket, Calendar,
  ChevronDown, Sparkles, TrendingUp, Zap, Star, ArrowRight
} from "lucide-react"

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>
type SubItem = { title: string; desc: string; icon: IconType }
type NavItem = {
  href: string; label: string; icon: IconType; color: string; emoji: string; megaMenu?: SubItem[]
}

const NAV: NavItem[] = [
  { href: "/",         label: "Home",      icon: Home,      color: "from-slate-700 to-slate-600", emoji: "🏠" },
  { href: "/services", label: "Services",  icon: Briefcase, color: "from-slate-700 to-slate-600", emoji: "⚡",
    megaMenu: [
      { title: "Digital Marketing", desc: "SEO, PPC, Social Media", icon: TrendingUp },
      { title: "Web Development",   desc: "Custom websites & apps", icon: Briefcase  },
      { title: "Brand Strategy",    desc: "Complete brand overhaul", icon: Sparkles  },
      { title: "Analytics",         desc: "Data-driven insights",     icon: Zap      },
    ],
  },
  { href: "/about",     label: "About",     icon: User,      color: "from-slate-700 to-slate-600", emoji: "👋" },
  { href: "/portfolio", label: "Portfolio", icon: Briefcase, color: "from-slate-700 to-slate-600", emoji: "🎨" },
  { href: "/contact",   label: "Contact",   icon: Phone,     color: "from-slate-700 to-slate-600", emoji: "📞" },
  { href: "/start",     label: "Start Growing", icon: Rocket,color: "from-slate-700 to-slate-600", emoji: "🚀" },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Desktop effects (only when hovering an item)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; color: string }[]>([])

  // Throttle mousemove: less jitter, less work
  const moveHandler = useMemo(() => {
    let ticking = false
    return (e: MouseEvent) => {
      if (ticking) return
      window.requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY })
        ticking = false
      })
      ticking = true
    }
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const el = document.documentElement
    if (open) el.classList.add("overflow-hidden")
    else el.classList.remove("overflow-hidden")
    return () => el.classList.remove("overflow-hidden")
  }, [open])

  // Only listen to mousemove while a desktop item is hovered
  useEffect(() => {
    if (hoveredIndex === null) return
    window.addEventListener("mousemove", moveHandler, { passive: true })
    return () => window.removeEventListener("mousemove", moveHandler)
  }, [hoveredIndex, moveHandler])

  // Spawn particles while hovering (capped & auto-cleanup)
  useEffect(() => {
    if (hoveredIndex === null) return
    const color = NAV[hoveredIndex]?.color ?? "from-cyan-500 to-indigo-500"
    const id = window.setInterval(() => {
      const p = { id: Date.now() + Math.random(), x: mousePos.x, y: mousePos.y, color }
      setParticles(prev => [...prev.slice(-8), p])
      window.setTimeout(() => {
        setParticles(prev => prev.filter(x => x.id !== p.id))
      }, 1500)
    }, 160)
    return () => window.clearInterval(id)
  }, [hoveredIndex, mousePos])

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Desktop-only particles */}
      <div className="fixed inset-0 pointer-events-none z-30 hidden md:block">
        {particles.map(p => (
          <div
            key={p.id}
            className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${p.color} opacity-80`}
            style={{
              left: p.x, top: p.y, transform: "translate(-50%,-50%)",
              animation: "particleFloat 1.4s ease-out forwards",
            }}
          />
        ))}
      </div>

      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
          open
            ? "bg-slate-950"
            : scrolled
              ? "bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-black/40 border-b border-slate-800/60"
              : "bg-slate-950/90 backdrop-blur"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 group relative">
              <div className="relative">
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition duration-700" />
                <div className="relative w-12 h-12 group-hover:scale-110 group-hover:rotate-6 transition-all duration-400">
                  <Image
                    src="/Stenth_Logo-removebg.png"
                    alt="Stenth Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain drop-shadow-lg"
                    priority
                  />
                </div>
              </div>
              <span className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                STENTH
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              <ul className="flex gap-1">
                {NAV.slice(0, 5).map((item, idx) => (
                  <li
                    key={item.href}
                    className="relative group"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`relative px-5 py-2.5 text-sm font-semibold rounded-xl overflow-hidden flex items-center gap-2
                        ${isActive(item.href) ? "text-white" : "text-slate-200 hover:text-white"}`}
                    >
                      {/* wash */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                      {/* border */}
                      <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/20 transition-colors" />
                      {/* contents */}
                      <item.icon className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform" />
                      <span className="relative z-10">{item.label}</span>
                      {item.megaMenu && <ChevronDown className="w-3 h-3 opacity-70" />}
                      {/* streak */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </Link>

                    {/* Mega menu */}
                    {item.megaMenu && hoveredIndex === idx && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-slate-950/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-black/40 p-6 animate-in">
                        <div className="grid grid-cols-2 gap-4">
                          {item.megaMenu.map((sub, i) => (
                            <Link
                              key={i}
                              href={`${item.href}/${sub.title.toLowerCase().replace(/\s+/g, "-")}`}
                              className="group p-4 rounded-xl hover:bg-white/5 transition-colors"
                            >
                              <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-slate-800 group-hover:scale-110 transition-transform">
                                  <sub.icon className="w-5 h-5 text-slate-200" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                    {sub.title}
                                  </h4>
                                  <p className="text-sm text-slate-400 mt-1">{sub.desc}</p>
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

        {/* Mobile drawer (opaque) */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-0 z-50 transition-opacity duration-200 ${open ? "opacity-100" : "opacity-0 pointer-events-none"} bg-slate-950`}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative flex flex-col h-full">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <Image src="/Stenth_Logo-removebg.png" alt="Stenth" width={36} height={36} />
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

            {/* Drawer links */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <nav className="grid gap-2">
                {NAV.map(item => {
                  const Icon = item.icon
                  const active = isActive(item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 border transition-colors
                        ${active ? "bg-slate-900 text-cyan-300 border-slate-800" : "bg-slate-900/60 text-slate-200 hover:bg-slate-900 border-slate-800"}`}
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

            <div className="h-4" />
          </div>
        </div>
      </header>

      {/* Spacer so content isn’t hidden under fixed header */}
      <div className="h-20 md:h-24" />

      <style jsx>{`
        @keyframes particleFloat {
          0%   { transform: translate(-50%,-50%) translateY(0) scale(1);   opacity: .9; }
          50%  { transform: translate(-50%,-50%) translateY(-24px) scale(.92); opacity: .6; }
          100% { transform: translate(-50%,-50%) translateY(-48px) scale(.85); opacity: 0; }
        }
        .animate-in { animation: slideIn .22s ease-out both }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-8px) }
          to   { opacity: 1; transform: translateY(0) }
        }
      `}</style>
    </>
  )
}
