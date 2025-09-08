"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Home, Briefcase, User, Phone, Rocket, Calendar, Zap, Star, ArrowRight, ChevronDown, Sparkles, TrendingUp } from "lucide-react"

const NAV = [
  { 
    href: "/", 
    label: "Home", 
    icon: Home, 
    color: "from-blue-500 to-cyan-400", 
    bgColor: "bg-blue-500", 
    emoji: "🏠",
    desc: "Welcome to the future"
  },
  { 
    href: "/services", 
    label: "Services", 
    icon: Briefcase, 
    color: "from-purple-500 to-pink-400", 
    bgColor: "bg-purple-500", 
    emoji: "⚡",
    desc: "Growth solutions",
    megaMenu: [
      { title: "Digital Marketing", desc: "SEO, PPC, Social Media", icon: TrendingUp },
      { title: "Web Development", desc: "Custom websites & apps", icon: Briefcase },
      { title: "Brand Strategy", desc: "Complete brand overhaul", icon: Sparkles },
      { title: "Analytics", desc: "Data-driven insights", icon: Zap }
    ]
  },
  { 
    href: "/about", 
    label: "About", 
    icon: User, 
    color: "from-green-500 to-emerald-400", 
    bgColor: "bg-green-500", 
    emoji: "👋",
    desc: "Our story & mission"
  },
  { 
    href: "/portfolio", 
    label: "Portfolio", 
    icon: Briefcase, 
    color: "from-orange-500 to-red-400", 
    bgColor: "bg-orange-500", 
    emoji: "🎨",
    desc: "Our best work"
  },
  { 
    href: "/contact", 
    label: "Contact", 
    icon: Phone, 
    color: "from-yellow-500 to-orange-400", 
    bgColor: "bg-yellow-500", 
    emoji: "📞",
    desc: "Let's talk business"
  },
  { 
    href: "/start", 
    label: "Start Growing", 
    icon: Rocket, 
    color: "from-indigo-500 to-purple-400", 
    bgColor: "bg-indigo-500", 
    emoji: "🚀",
    desc: "Begin your journey"
  },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 })
  const [ripples, setRipples] = useState([])
  const [hoveredItem, setHoveredItem] = useState(null)
  const [megaMenuOpen, setMegaMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])
  const pathname = usePathname()
  const containerRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mouse tracking for desktop effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate particles periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredItem !== null) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: mousePosition.x,
          y: mousePosition.y,
          color: NAV[hoveredItem]?.color || 'from-cyan-400 to-blue-500'
        }
        setParticles(prev => [...prev.slice(-10), newParticle])
        
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id))
        }, 2000)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [hoveredItem, mousePosition])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const cls = "overflow-hidden"
    const el = document.documentElement
    if (open) el.classList.add(cls)
    else el.classList.remove(cls)
    return () => el.classList.remove(cls)
  }, [open])

  // Touch/Swipe gestures for mobile
  const handleTouchStart = (e) => {
    const touch = e.touches[0]
    setTouchStart({ x: touch.clientX, y: touch.clientY })
  }

  const handleTouchMove = (e) => {
    if (!touchStart.x) return
    
    const touch = e.touches[0]
    const deltaX = touch.clientX - touchStart.x
    
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0 && activeIndex > 0) {
        setActiveIndex(prev => prev - 1)
      } else if (deltaX < 0 && activeIndex < NAV.length - 1) {
        setActiveIndex(prev => prev + 1)
      }
      setTouchStart({ x: 0, y: 0 })
    }
  }

  const createRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
    }
    
    setRipples(prev => [...prev, newRipple])
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 1000)
  }

  return (
    <>
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {particles.map(particle => (
          <div
            key={particle.id}
            className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${particle.color} animate-ping`}
            style={{
              left: particle.x,
              top: particle.y,
              animation: 'particleFloat 2s ease-out forwards'
            }}
          />
        ))}
      </div>

      <header
        ref={headerRef}
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? "bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 border-b border-cyan-500/30" 
            : "bg-slate-950/90 backdrop-blur-md"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* 🚀 REVOLUTIONARY LOGO */}
            <Link href="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                {/* Multiple glow layers */}
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div>
                
                <div className="relative w-12 h-12 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                  <Image
                    src="/Stenth_Logo-removebg.png"
                    alt="Stenth Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  
                  {/* Logo particle burst */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"
                        style={{
                          left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 30}%`,
                          top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 30}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-400 transition-all duration-500">
                  STENTH
                </span>
                
                {/* Floating sparkles */}
                <div className="absolute -top-2 -right-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                </div>
                <div className="absolute -bottom-1 -left-2 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <Star className="w-3 h-3 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
                </div>
              </div>
            </Link>

            {/* 🔥 NEXT-LEVEL DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Main Navigation Links */}
              <ul className="flex space-x-1">
                {NAV.slice(0, 5).map((item, index) => (
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
                      className={`relative px-5 py-3 text-sm font-semibold transition-all duration-500 rounded-xl group overflow-hidden flex items-center space-x-2 ${
                        pathname === item.href 
                          ? `text-white bg-gradient-to-r ${item.color} shadow-lg shadow-${item.bgColor.split('-')[1]}-500/50` 
                          : 'text-white hover:text-white'
                      }`}
                    >
                      {/* Dynamic background that morphs */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl transform scale-0 group-hover:scale-100`}></div>
                      
                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
                      
                      {/* Icon */}
                      <item.icon className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                      
                      {/* Text */}
                      <span className="relative z-10">{item.label}</span>
                      
                      {/* Mega menu indicator */}
                      {item.megaMenu && (
                        <ChevronDown className="w-3 h-3 relative z-10 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                      
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Floating particles on hover */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${item.color} rounded-full animate-bounce`}
                            style={{
                              left: `${20 + i * 20}%`,
                              top: `${20 + (i % 2) * 60}%`,
                              animationDelay: `${i * 0.2}s`,
                              animationDuration: '1s'
                            }}
                          />
                        ))}
                      </div>
                    </Link>

                    {/* MEGA MENU */}
                    {item.megaMenu && megaMenuOpen && hoveredItem === index && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/20 p-6 animate-in slide-in-from-top-2 duration-300">
                        <div className="grid grid-cols-2 gap-4">
                          {item.megaMenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={`${item.href}/${subItem.title.toLowerCase().replace(' ', '-')}`}
                              className="group p-4 rounded-xl hover:bg-white/5 transition-all duration-300"
                            >
                              <div className="flex items-start space-x-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                                  <subItem.icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                    {subItem.title}
                                  </h4>
                                  <p className="text-sm text-slate-400 mt-1">{subItem.desc}</p>
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

              {/* 💎 PREMIUM CTA BUTTONS */}
              <div className="flex space-x-4 ml-8">
                {/* Start Growing Button - Holographic */}
                <Link
                  href="/start"
                  className="relative px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transition-all duration-500 group overflow-hidden shadow-2xl shadow-purple-500/50"
                >
                  {/* Holographic background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Animated border ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400/50 group-hover:border-purple-300 animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full border border-white/20 group-hover:animate-spin" style={{ animationDuration: '3s' }}></div>
                  
                  <span className="relative flex items-center space-x-2 z-10">
                    <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
                    <span>Start Growing</span>
                    <TrendingUp className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </span>
                </Link>

                {/* Book Session Button - Pulsing Energy */}
                <Link
                  href="/book"
                  className="relative px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 text-white font-bold rounded-full hover:scale-105 transition-all duration-500 group overflow-hidden shadow-2xl shadow-cyan-500/50"
                >
                  {/* Energy waves */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  
                  {/* Rotating energy ring */}
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 opacity-0 group-hover:opacity-30 animate-spin transition-opacity duration-300" style={{ animationDuration: '2s' }}></div>
                  
                  {/* Lightning effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Zap className="absolute top-1 right-2 w-3 h-3 text-yellow-300 animate-ping" />
                  </div>
                  
                  <span className="relative flex items-center space-x-2 z-10">
                    <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
                    <span>Book Session</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Mobile hamburger (enhanced) */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="relative md:hidden w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 hover:scale-105 transition-all duration-300 flex items-center justify-center group overflow-hidden shadow-2xl shadow-cyan-500/50"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 via-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className={`absolute inset-0 rounded-2xl border-2 border-white/30 ${open ? 'animate-ping' : ''}`}></div>
              <div className={`absolute inset-2 rounded-xl border border-white/20 ${open ? 'animate-pulse' : ''}`}></div>
              
              <div className="relative w-6 h-6 transform transition-all duration-500" style={{ perspective: '100px' }}>
                <span className={`absolute block h-0.5 w-6 bg-white rounded-full transform transition-all duration-500 shadow-lg ${
                  open ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-2'
                }`}></span>
                <span className={`absolute block h-0.5 w-6 bg-white rounded-full transition-all duration-300 shadow-lg ${
                  open ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}></span>
                <span className={`absolute block h-0.5 w-6 bg-white rounded-full transform transition-all duration-500 shadow-lg ${
                  open ? '-rotate-45 translate-y-0' : 'rotate-0 translate-y-2'
                }`}></span>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation (keeping the revolutionary version) */}
        <div
          className={`md:hidden fixed inset-0 top-0 left-0 w-full h-full transition-all duration-1000 ease-out ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ zIndex: 60 }}
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
            <div className={`absolute inset-0 bg-gradient-to-br ${NAV[activeIndex]?.color} opacity-5 transition-all duration-1000`}></div>
            
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full bg-gradient-to-r ${NAV[i % NAV.length].color} animate-float`}
                style={{
                  width: `${Math.random() * 20 + 10}px`,
                  height: `${Math.random() * 20 + 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.1,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                }}
              />
            ))}
            
            {ripples.map(ripple => (
              <div
                key={ripple.id}
                className="absolute pointer-events-none animate-ping"
                style={{
                  left: ripple.x - 50,
                  top: ripple.y - 50,
                  width: 100,
                  height: 100,
                }}
              >
                <div className={`w-full h-full rounded-full bg-gradient-to-r ${NAV[activeIndex]?.color} opacity-30`}></div>
              </div>
            ))}
          </div>

          <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-center p-6">
              <div className="flex items-center space-x-3">
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
              </div>
              
              <button
                onClick={() => setOpen(false)}
                className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
              >
                <X className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500 relative z-10" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${NAV[activeIndex]?.color} shadow-2xl mb-4 transform transition-all duration-500 hover:scale-110`}>
                  <span className="text-4xl">{NAV[activeIndex]?.emoji}</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">{NAV[activeIndex]?.label}</h2>
                <p className="text-slate-400">Swipe left or right to explore</p>
              </div>

              <div className="relative">
                <div className="flex justify-center items-center space-x-4 mb-8">
                  {NAV.map((item, index) => {
                    const Icon = item.icon
                    const distance = Math.abs(index - activeIndex)
                    const isActive = index === activeIndex
                    
                    return (
                      <button
                        key={item.href}
                        onClick={() => setActiveIndex(index)}
                        className={`relative transition-all duration-500 rounded-2xl overflow-hidden ${
                          isActive 
                            ? 'w-20 h-20 shadow-2xl scale-110' 
                            : distance === 1 
                              ? 'w-16 h-16 opacity-70 scale-95' 
                              : 'w-12 h-12 opacity-40 scale-75'
                        }`}
                        style={{
                          transform: `translateX(${(index - activeIndex) * (isActive ? 0 : distance * 10)}px) rotateY(${(index - activeIndex) * 15}deg)`,
                          zIndex: NAV.length - distance,
                        }}
                      >
                        <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer"></div>
                          )}
                          <Icon className={`text-white ${isActive ? 'w-8 h-8' : 'w-6 h-6'} transition-all duration-300`} />
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className="flex justify-center space-x-2 mb-8">
                  {NAV.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeIndex 
                          ? `bg-gradient-to-r ${NAV[activeIndex].color} w-8` 
                          : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-center">
                  <Link
                    href={NAV[activeIndex]?.href}
                    className={`inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r ${NAV[activeIndex]?.color} text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden group`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Go to {NAV[activeIndex]?.label}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-white/10">
              <Link
                href="/book"
                className="w-full flex items-center justify-center space-x-3 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden group animate-pulse hover:animate-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="w-6 h-6 relative z-10" />
                <span className="relative z-10 text-lg">Book Your Session Now</span>
                <Star className="w-6 h-6 animate-spin relative z-10" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(2deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(1deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        
        @keyframes particleFloat {
          0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
          50% { transform: translateY(-30px) scale(0.8) rotate(180deg); opacity: 0.7; }
          100% { transform: translateY(-60px) scale(0) rotate(360deg); opacity: 0; }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
