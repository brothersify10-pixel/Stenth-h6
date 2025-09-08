"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const NAV = [
  { href: "/", label: "Home" },
  { href: "/start", label: "Start" },
  { href: "/book", label: "Book" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
            {[
              { name: "Home", href: "/" },
              { name: "Services", href: "/services" },
              { name: "About", href: "/about" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "Contact", href: "/contact" },
              { name: "Start Growing", href: "/start" },
              { name: "Book Session", href: "/book" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-white hover:text-cyan-400 transition-colors duration-300 relative group focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 rounded-md px-2 py-1"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-white hover:bg-white/10 md:hidden"
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
          <div className="border-t border-slate-700/60 bg-slate-950/95 px-4 py-3 mt-4">
            <nav className="grid gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-base font-medium text-white hover:bg-white/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </nav>
    </header>
  )
}
