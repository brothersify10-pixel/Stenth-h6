"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
            <span className="text-2xl font-bold text-slate-100">STENTH</span>
          </Link>

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
        </div>
      </nav>
    </header>
  )
}
