"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

// Single source of truth for navigation
const NAV = [
  { href: "/", label: "Home", mobileLabel: "Home" },
  { href: "/services", label: "Services", mobileLabel: "Services" },
  { href: "/about", label: "About", mobileLabel: "About" },
  { href: "/portfolio", label: "Portfolio", mobileLabel: "Portfolio" },
  { href: "/contact", label: "Contact", mobileLabel: "Contact" },
  { href: "/start", label: "Start Growing", mobileLabel: "Start" },
  { href: "/book", label: "Book Session", mobileLabel: "Book" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setOpen(false), [pathname])

  // Prevent background scroll when menu is open
  useEffect(() => {
    const cls = "overflow-hidden"
    const el = document.documentElement
    if (open) el.classList.add(cls)
    else el.classList.remove(cls)
    return () => el.classList.remove(cls)
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

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 md:hidden transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <div className="relative w-6 h-6">
              <Menu 
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  open ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
                }`} 
              />
              <X 
                className={`absolute inset-0 h-6 w-6 transition-all duration-300 ${
                  open ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Panel - Fullscreen Overlay */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed inset-0 top-0 left-0 w-full h-full bg-slate-950/98 backdrop-blur-xl transition-all duration-500 ease-in-out ${
            open 
              ? "opacity-100 visible translate-x-0" 
              : "opacity-0 invisible translate-x-full"
          }`}
          style={{ zIndex: 50 }}
        >
          {/* Mobile Menu Content */}
          <div className="flex flex-col h-full">
            {/* Header in mobile menu */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
              <Link href="/" className="flex items-center space-x-3">
                <div className="w-10 h-10">
                  <Image
                    src="/Stenth_Logo-removebg.png"
                    alt="Stenth Logo"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-cyan-400">STENTH</span>
              </Link>
              
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 flex flex-col justify-center px-6">
              <ul className="space-y-6">
                {NAV.map((item, index) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block text-2xl font-medium transition-all duration-300 hover:text-cyan-400 hover:translate-x-2 ${
                        pathname === item.href 
                          ? 'text-cyan-400 translate-x-2' 
                          : 'text-white'
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      {item.mobileLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer in mobile menu */}
            <div className="p-6 border-t border-slate-700/50">
              <p className="text-sm text-slate-400 text-center">
                Ready to grow your business?
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
