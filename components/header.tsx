"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Home, Briefcase, User, Phone, Rocket, Calendar } from "lucide-react"

const NAV = [
  { href: "/", label: "Home", mobileLabel: "Home", icon: Home, color: "from-blue-400 to-cyan-400" },
  { href: "/services", label: "Services", mobileLabel: "Services", icon: Briefcase, color: "from-purple-400 to-pink-400" },
  { href: "/about", label: "About", mobileLabel: "About", icon: User, color: "from-green-400 to-emerald-400" },
  { href: "/portfolio", label: "Portfolio", mobileLabel: "Portfolio", icon: Briefcase, color: "from-orange-400 to-red-400" },
  { href: "/contact", label: "Contact", mobileLabel: "Contact", icon: Phone, color: "from-yellow-400 to-orange-400" },
  { href: "/start", label: "Start Growing", mobileLabel: "Start", icon: Rocket, color: "from-indigo-400 to-purple-400" },
  { href: "/book", label: "Book Session", mobileLabel: "Book", icon: Calendar, color: "from-pink-400 to-rose-400" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const cls = "overflow-hidden"
    const el = document.documentElement
    if (open) el.classList.add(cls)
    else el.classList.remove(cls)
    return () => el.classList.remove(cls)
  }, [open])

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    if (open) {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [open])

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled ? "bg-slate-950/95 backdrop-blur-xl shadow-lg shadow-cyan-500/10" : "bg-slate-950/90 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 transform group-hover:scale-110 transition-all duration-300">
              <Image
                src="/Stenth_Logo-removebg.png"
                alt="Stenth Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold text-cyan-400">STENTH</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-white hover:text-cyan-400 transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-md px-2 py-1 ${
                    pathname === item.href ? 'text-cyan-400' : ''
                  }`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Animated Hamburger Button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative md:hidden w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 flex items-center justify-center group overflow-hidden"
            aria-label="Toggle menu"
          >
            {/* Ripple effect */}
            <div className={`absolute inset-0 rounded-full bg-white/20 scale-0 ${open ? 'animate-ping' : ''}`}></div>
            
            {/* Morphing burger to X */}
            <div className="relative w-6 h-6">
              <span className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
                open ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-2'
              }`}></span>
              <span className={`absolute block h-0.5 w-6 bg-white transition-all duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
                open ? '-rotate-45 translate-y-0' : 'rotate-0 translate-y-2'
              }`}></span>
            </div>
          </button>
        </div>

        {/* 🚀 CREATIVE MOBILE NAVIGATION OPTIONS */}
        
        {/* OPTION 1: Particle System Navigation */}
        <div
          className={`md:hidden fixed inset-0 top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
            open 
              ? "opacity-100 visible" 
              : "opacity-0 invisible"
          }`}
          style={{ zIndex: 50 }}
        >
          {/* Animated Background with Particles */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
            {/* Floating Particles */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${NAV[i % NAV.length].color} animate-pulse`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
            
            {/* Interactive Mouse Glow */}
            <div
              className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400/10 via-blue-500/5 to-purple-600/10 blur-3xl pointer-events-none transition-all duration-300"
              style={{
                left: mousePos.x - 192,
                top: mousePos.y - 192,
              }}
            />
          </div>

          {/* Navigation Content */}
          <div className="relative z-10 flex flex-col h-full justify-center items-center px-8">
            <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
              {NAV.map((item, index) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative overflow-hidden rounded-2xl p-6 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:scale-105 ${
                      pathname === item.href ? 'bg-white/20 border-white/30' : 'bg-white/5 hover:bg-white/10'
                    }`}
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: open ? 'slideInUp 0.6s ease-out forwards' : 'none'
                    }}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}/>
                    
                    {/* Icon */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white font-medium text-sm">{item.mobileLabel}</span>
                    </div>
                  </Link>
                )
              })}
            </div>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="mt-12 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
            >
              <X className="w-6 h-6 group-hover:rotate-180 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </nav>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </header>
  )
}
