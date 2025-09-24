"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { X, Home, Briefcase, User, Phone, Rocket, Calendar, ArrowRight, Sparkles, MapPin } from "lucide-react"

const NAV = [
  { href: "/", label: "Home", mobileLabel: "Home", icon: Home, color: "from-blue-400 to-cyan-400" },
  {
    href: "/services",
    label: "Services",
    mobileLabel: "Services",
    icon: Briefcase,
    color: "from-purple-400 to-pink-400",
    // Removed megaMenu property
  },
  { href: "/about", label: "About Us", mobileLabel: "About", icon: User, color: "from-green-400 to-emerald-400" },
  { href: "/portfolio", label: "Portfolio", mobileLabel: "Work", icon: Briefcase, color: "from-orange-400 to-red-400" },
  { href: "/ca", label: "🇨🇦 Canada", mobileLabel: "Canada", icon: MapPin, color: "from-red-400 to-red-500" },
  { href: "/au", label: "🇦🇺 Australia", mobileLabel: "Australia", icon: MapPin, color: "from-green-400 to-yellow-400" },
  { href: "/contact", label: "Contact", mobileLabel: "Contact", icon: Phone, color: "from-yellow-400 to-orange-400" },
  { href: "/start", label: "Start Growing", mobileLabel: "Grow", icon: Rocket, color: "from-indigo-400 to-purple-400" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hoveredItem, setHoveredItem] = useState(null)
  // Removed megaMenuOpen state as it's no longer needed
  const [particles, setParticles] = useState([])
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    let lastScrollY = 0

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsHeaderVisible(false)
        } else {
          setIsHeaderVisible(true)
        }
      } else {
        setIsHeaderVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredItem !== null) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: mousePos.x + (Math.random() - 0.5) * 100,
          y: mousePos.y + (Math.random() - 0.5) * 100,
          color: NAV[hoveredItem]?.color || "from-cyan-400 to-blue-500",
        }
        setParticles((prev) => [...prev.slice(-8), newParticle])

        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => p.id !== newParticle.id))
        }, 1500)
      }
    }, 150)

    return () => clearInterval(interval)
  }, [hoveredItem, mousePos])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const cls = "overflow-hidden"
    const el = document.documentElement
    if (open) el.classList.add(cls)
    else el.classList.remove(cls)
    return () => el.classList.remove(cls)
  }, [open])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      {/* Skip navigation link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[9999] px-4 py-2 bg-white text-black font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
      >
        Skip to main content
      </a>

      <div className="fixed inset-0 pointer-events-none z-30">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${particle.color} opacity-60`}
            style={{
              left: particle.x,
              top: particle.y,
              animation: "particleFloat 1.5s ease-out forwards",
            }}
          />
        ))}
      </div>

      <header
        role="banner"
        className={`fixed top-0 w-full z-40 transition-transform duration-500 ease-out ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "bg-slate-950/98 backdrop-blur-2xl shadow-xl shadow-cyan-500/25 border-b border-cyan-500/40"
            : "bg-slate-950/95 backdrop-blur-xl"
        }`}
      >
        <nav role="navigation" aria-label="Main navigation" className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>

                <div className="relative w-12 h-12 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Image
                    src="/Stenth_Logo-removebg.png"
                    alt="Stenth Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                    sizes="48px"
                  />
                </div>
              </div>

              <div className="relative">
                <span className="text-2xl font-bold text-white bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-500">
                  STENTH
                </span>
                <div className="absolute -top-1 -right-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                </div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-2">
              <ul className="flex space-x-1">
                {NAV.slice(0, 6).map((item, index) => (
                  <li
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group overflow-hidden ${
                        pathname === item.href
                          ? "text-cyan-200 bg-cyan-400/25 font-semibold border border-cyan-400/30"
                          : "text-slate-300 hover:text-white hover:bg-white/15"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg`}
                      ></div>

                      <span className="relative z-10">{item.label}</span>

                      <div
                        className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r ${item.color} group-hover:w-full group-hover:left-0 transition-all duration-300`}
                      ></div>

                      <div
                        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                      >
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${item.color} rounded-full animate-ping`}
                            style={{
                              left: `${20 + i * 20}%`,
                              top: `${10 + i * 10}%`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          />
                        ))}
                      </div>
                    </Link>

                    {/* Removed mega menu rendering logic */}
                  </li>
                ))}
              </ul>

              <div className="flex space-x-3 ml-6">
                <Link
                  href="/start"
                  className="relative px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-400 hover:to-purple-500 transition-all duration-300 group overflow-hidden shadow-lg shadow-purple-500/25"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                  <span className="relative flex items-center space-x-2">
                    <Rocket className="w-4 h-4" />
                    <span>Start Growing</span>
                  </span>
                </Link>

                <Link
                  href="/book"
                  className="relative px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 group overflow-hidden shadow-lg shadow-cyan-500/25 animate-pulse hover:animate-none"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-0.5 group-hover:animate-spin">
                    <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                  </div>

                  <span className="relative flex items-center space-x-2 z-10">
                    <Calendar className="w-4 h-4" />
                    <span>Book Session</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-md min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <div className="w-6 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    open ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    open ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`md:hidden fixed inset-0 top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
        style={{ zIndex: 50 }}
      >
        <div className="absolute inset-0 bg-slate-950 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full bg-gradient-to-r ${NAV[i % NAV.length].color} opacity-20`}
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite ${i * 0.1}s`,
              }}
            />
          ))}

          <div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-purple-600/20 blur-3xl pointer-events-none transition-all duration-300"
            style={{
              left: mousePos.x - 192,
              top: mousePos.y - 192,
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col h-full justify-center items-center px-8">
          <Link
            href="/book"
            className="mb-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/25 relative overflow-hidden group"
            onClick={() => setOpen(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative flex items-center space-x-2 z-10">
              <Calendar className="w-5 h-5" />
              <span>Book Free Session</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>

          <div className="grid grid-cols-2 gap-6 w-full max-w-md">
            {NAV.map((item, index) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 group text-center transform ${
                    pathname === item.href
                      ? `bg-gradient-to-br ${item.color} bg-opacity-20 border-white/30 shadow-lg`
                      : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
                  }`}
                  onClick={() => setOpen(false)}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: open ? "slideInUp 0.6s ease-out forwards" : "none",
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-2xl ${pathname === item.href ? "animate-pulse" : ""}`}
                  />

                  <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${item.color} group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span
                      className={`font-medium transition-colors duration-300 ${
                        pathname === item.href ? "text-cyan-300" : "text-white group-hover:text-cyan-400"
                      }`}
                    >
                      {item.mobileLabel}
                    </span>
                  </div>

                  {pathname === item.href && (
                    <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  )}
                </Link>
              )
            })}
          </div>

          <button
            onClick={() => setOpen(false)}
            className="mt-12 w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          50% { 
            transform: translateY(-20px) rotate(10deg); 
          }
        }
        
        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes particleFloat {
          0% { 
            transform: translateY(0) scale(1) rotate(0deg); 
            opacity: 1; 
          }
          50% { 
            transform: translateY(-20px) scale(0.8) rotate(180deg); 
            opacity: 0.7; 
          }
          100% { 
            transform: translateY(-40px) scale(0) rotate(360deg); 
            opacity: 0; 
          }
        }
        
        @keyframes fade-in-0 {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slide-in-from-top-2 {
          from { 
            opacity: 0;
            transform: translateY(-8px) translateX(-50%);
          }
          to { 
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }
        
        .animate-in {
          animation-fill-mode: both;
        }
      `}</style>
    </>
  )
}
