"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Home, Briefcase, User, Phone, Rocket, Calendar, Zap, Star, ArrowRight, ChevronDown, Sparkles, TrendingUp, Target, Palette, MessageSquare } from "lucide-react"

const NAV = [
  { 
    href: "/", 
    label: "Home", 
    icon: Home, 
    color: "from-slate-600 to-slate-700"
  },
  { 
    href: "/services", 
    label: "Services", 
    icon: Briefcase, 
    color: "from-slate-600 to-slate-700",
    megaMenu: [
      { title: "Digital Marketing", desc: "SEO, PPC, Social Media Strategy", icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
      { title: "Web Development", desc: "Custom websites & applications", icon: Briefcase, color: "from-purple-500 to-blue-500" },
      { title: "Brand Strategy", desc: "Complete brand transformation", icon: Target, color: "from-green-500 to-blue-500" },
      { title: "Design Services", desc: "UI/UX & Visual Design", icon: Palette, color: "from-pink-500 to-purple-500" }
    ]
  },
  { 
    href: "/about", 
    label: "About Us", 
    icon: User, 
    color: "from-slate-600 to-slate-700"
  },
  { 
    href: "/portfolio", 
    label: "Portfolio", 
    icon: Palette, 
    color: "from-slate-600 to-slate-700"
  },
  { 
    href: "/contact", 
    label: "Contact", 
    icon: MessageSquare, 
    color: "from-slate-600 to-slate-700"
  }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setScrolled(scrollPosition > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    return () => { document.documentElement.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Premium Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-700 ease-out ${
          scrolled 
            ? "bg-white/80 backdrop-blur-2xl shadow-xl shadow-black/10 border-b border-slate-200/50" 
            : "bg-white/95 backdrop-blur-xl"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Premium Logo */}
            <Link href="/" className="flex items-center space-x-4 group relative z-10">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                <div className="relative w-12 h-12 transform group-hover:scale-110 transition-all duration-500">
                  <Image
                    src="/Stenth_Logo-removebg.png"
                    alt="Stenth"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>
              </div>
              <div className="relative">
                <span className="text-2xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent tracking-tight">
                  STENTH
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <ul className="flex items-center space-x-2">
                {NAV.map((item, index) => (
                  <li 
                    key={item.href} 
                    className="relative"
                    onMouseEnter={() => {
                      setHoveredItem(index)
                      if (item.megaMenu) setMegaMenuOpen(true)
                    }}
                    onMouseLeave={() => {
                      setHoveredItem(null)
                      if (item.megaMenu) setMegaMenuOpen(false)
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl group flex items-center space-x-2 ${
                        pathname === item.href 
                          ? 'text-white bg-gradient-to-r from-slate-800 to-slate-900 shadow-lg shadow-slate-900/25' 
                          : 'text-slate-700 hover:text-slate-900'
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r from-slate-100 to-slate-50 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl ${pathname === item.href ? 'opacity-0' : ''}`}></div>
                      
                      <item.icon className={`w-4 h-4 relative z-10 transition-all duration-300 ${pathname === item.href ? 'text-white' : 'group-hover:text-cyan-600'}`} />
                      <span className="relative z-10">{item.label}</span>
                      
                      {item.megaMenu && (
                        <ChevronDown className={`w-3 h-3 relative z-10 transition-all duration-300 ${megaMenuOpen && hoveredItem === index ? 'rotate-180' : ''}`} />
                      )}
                    </Link>

                    {/* Premium Mega Menu */}
                    {item.megaMenu && megaMenuOpen && hoveredItem === index && (
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white/95 backdrop-blur-2xl rounded-3xl border border-slate-200/50 shadow-2xl shadow-black/10 p-8 opacity-0 animate-in fade-in-0 slide-in-from-top-2 duration-500 opacity-100">
                        <div className="grid grid-cols-2 gap-6">
                          {item.megaMenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={`${item.href}/${subItem.title.toLowerCase().replace(' ', '-')}`}
                              className="group p-6 rounded-2xl hover:bg-slate-50/80 transition-all duration-300 border border-transparent hover:border-slate-200/50"
                            >
                              <div className="flex items-start space-x-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-r ${subItem.color} shadow-lg shadow-black/10 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                                  <subItem.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors duration-300">
                                    {subItem.title}
                                  </h4>
                                  <p className="text-sm text-slate-600 leading-relaxed">{subItem.desc}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-8 pt-6 border-t border-slate-200/50">
                          <Link
                            href="/services"
                            className="inline-flex items-center text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors duration-200"
                          >
                            View All Services
                            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Premium CTA Buttons */}
              <div className="flex items-center space-x-4 ml-8">
                <Link
                  href="/start"
                  className="relative px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center space-x-2">
                    <Rocket className="w-4 h-4" />
                    <span>Get Started</span>
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="px-6 py-3 text-slate-700 font-semibold rounded-xl border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 flex items-center space-x-2 group"
                >
                  <Calendar className="w-4 h-4 group-hover:text-cyan-600 transition-colors duration-300" />
                  <span>Book Call</span>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-all duration-200 group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 w-6 bg-slate-700 rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-slate-700 rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-slate-700 rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Premium Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Menu Panel */}
        <div className={`absolute right-0 top-0 h-full w-80 bg-slate-900 shadow-2xl transform transition-transform duration-500 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <Image
                src="/Stenth_Logo-removebg.png"
                alt="Stenth"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-lg font-bold text-white">STENTH</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="p-6 space-y-2">
            {NAV.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 group ${
                    pathname === item.href 
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg' 
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <div className={`p-2 rounded-lg transition-all duration-200 ${
                    pathname === item.href 
                      ? 'bg-white/20' 
                      : 'bg-slate-800 group-hover:bg-cyan-600/20'
                  }`}>
                    <Icon className={`w-5 h-5 ${
                      pathname === item.href 
                        ? 'text-white' 
                        : 'text-slate-400 group-hover:text-cyan-400'
                    }`} />
                  </div>
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* Mobile CTA Section */}
          <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-700 bg-slate-800/50">
            <div className="space-y-3">
              <Link
                href="/start"
                className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
                onClick={() => setOpen(false)}
              >
                <Rocket className="w-4 h-4" />
                <span>Get Started</span>
              </Link>
              <Link
                href="/contact"
                className="w-full flex items-center justify-center space-x-2 py-3 text-white font-medium rounded-xl border border-slate-600 hover:bg-slate-700 transition-all duration-200"
                onClick={() => setOpen(false)}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
