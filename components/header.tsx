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
    emoji: "🏠"
  },
  { 
    href: "/services", 
    label: "Services", 
    icon: Briefcase, 
    color: "from-purple-500 to-pink-400", 
    emoji: "⚡",
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
    emoji: "👋"
  },
  { 
    href: "/portfolio", 
    label: "Portfolio", 
    icon: Briefcase, 
    color: "from-orange-500 to-red-400", 
    emoji: "🎨"
  },
  { 
    href: "/contact", 
    label: "Contact", 
    icon: Phone, 
    color: "from-yellow-500 to-orange-400", 
    emoji: "📞"
  },
  { 
    href: "/start", 
    label: "Start Growing", 
    icon: Rocket, 
    color: "from-indigo-500 to-purple-400", 
    emoji: "🚀"
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredItem !== null) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: mousePosition.x,
          y: mousePosition.y,
          color: NAV[hoveredItem]?.color || 'from-cyan-400 to-blue-500'
        }
        setParticles(prev => [...prev.slice(-5), newParticle])
        
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id))
        }, 2000)
      }
    }, 200)

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
            className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${particle.color} opacity-70`}
            style={{
              left: particle.x,
              top: particle.y,
              animation: 'particleFloat 2s ease-out forwards'
            }}
          />
        ))}
      </div>

      <header
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? "bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 border-b border-cyan-500/30" 
            : "bg-slate-950/90 backdrop-blur-md"
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                
                <div className="relative w-12 h-12 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                  <Image
                    src="/Stenth_Logo-removebg.png"
                    alt="Stenth Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                  
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        style={{
                          left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 30}%`,
                          top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 30}%`,
                          animation: `ping 1s ease-out infinite ${i * 0.1}s`
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
                
                <div className="absolute -top-2 -right-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                </div>
                <div className="absolute -bottom-1 -left-2 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <Star className="w-3 h-3 text-purple-400 animate-spin" />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
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
                          ? `text-white bg-gradient-to-r ${item.color} shadow-lg` 
                          : 'text-white hover:text-white'
                      }`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl transform scale-0 group-hover:scale-100`}></div>
                      
                      <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
                      
                      <item.icon className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
                      
                      <span className="relative z-10">{item.label}</span>
                      
                      {item.megaMenu && (
                        <ChevronDown className="w-3 h-3 relative z-10 transition-transform duration-300 group-hover:rotate-180" />
                      )}
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${item.color} rounded-full`}
                            style={{
                              left: `${20 + i * 20}%`,
                              top: `${20 + (i % 2) * 60}%`,
                              animation: `bounce 1s ease-out infinite ${i * 0.2}s`
                            }}
                          />
                        ))}
                      </div>
                    </Link>

                    {item.megaMenu && megaMenuOpen && hoveredItem === index && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/20 p-6 opacity-0 animate-in slide-in-from-top-2 duration-300 opacity-100">
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

              <div className="flex space-x-4 ml-8">
                <Link
                  href="/start"
                  className="relative px-8 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-full hover:scale-105 transition-all duration-500 group overflow-hidden shadow-2xl shadow-purple-500/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute inset-0 rounded-full border-2 border-purple-400/50 group-hover:border-purple-300 animate-pulse"></div>
                  
                  <span className="relative flex items-center space-x-2 z-10">
                    <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-500" />
                    <span>Start Growing</span>
                    <TrendingUp className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  </span>
                </Link>

                <Link
                  href="/book"
                  className="relative px-8 py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500 text-white font-bold rounded-full hover:scale-105 transition-all duration-500 group overflow-hidden shadow-2xl shadow-cyan-500/50"
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 opacity-0 group-hover:opacity-30 animate-spin transition-opacity duration-300"></div>
                  
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

            {/* Enhanced Mobile Hamburger Menu */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="relative md:hidden w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 border border-slate-600 hover:scale-105 transition-all duration-300 flex items-center justify-center group overflow-hidden shadow-2xl hover:shadow-cyan-500/30 hover:border-cyan-500/50"
              aria-label="Toggle menu"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              
              {/* Pulsing border effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 ${open ? 'border-cyan-400 animate-pulse' : 'border-transparent group-hover:border-cyan-400/50'} transition-all duration-300`}></div>
              
              {/* Menu icon with enhanced animation */}
              <div className="relative w-8 h-8 transform transition-all duration-500">
                {/* Top line */}
                <span className={`absolute block h-1 w-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transform transition-all duration-500 shadow-lg ${
                  open ? 'rotate-45 translate-y-3 bg-gradient-to-r from-red-400 to-pink-500' : 'rotate-0 -translate-y-2'
                }`}></span>
                
                {/* Middle line */}
                <span className={`absolute block h-1 w-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-300 shadow-lg ${
                  open ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}></span>
                
                {/* Bottom line */}
                <span className={`absolute block h-1 w-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transform transition-all duration-500 shadow-lg ${
                  open ? '-rotate-45 -translate-y-3 bg-gradient-to-r from-red-400 to-pink-500' : 'rotate-0 translate-y-2'
                }`}></span>
              </div>
              
              {/* Sparkle effects */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${open ? 'opacity-100' : ''}`}>
                <Sparkles className="absolute top-2 right-2 w-3 h-3 text-cyan-400 animate-ping" />
                <Star className="absolute bottom-2 left-2 w-2 h-2 text-purple-400 animate-pulse" />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation with Opaque Background */}
        <div
          className={`md:hidden fixed inset-0 top-0 left-0 w-full h-full transition-all duration-1000 ease-out ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ zIndex: 60 }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          {/* Opaque Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Solid opaque background */}
            <div className="absolute inset-0 bg-slate-950"></div>
            
            {/* Gradient overlay for visual appeal */}
            <div className={`absolute inset-0 bg-gradient-to-br ${NAV[activeIndex]?.color} opacity-10 transition-all duration-1000`}></div>
            
            {/* Animated pattern overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(14,165,233,0.1),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(168,85,247,0.1),transparent_50%)]"></div>
            
            {/* Floating decorative elements */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full bg-gradient-to-r ${NAV[i % NAV.length].color}`}
                style={{
                  width: `${Math.random() * 30 + 15}px`,
                  height: `${Math.random() * 30 + 15}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.15,
                  animation: `float ${4 + Math.random() * 6}s ease-in-out infinite ${i * 0.3}s`
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
            {/* Enhanced Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-50 animate-pulse"></div>
                  <Image
                    src="/Stenth_Logo-removebg.png"
                    alt="Stenth Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">STENTH</span>
                  <p className="text-xs text-slate-400">Digital Excellence</p>
                </div>
              </div>
              
              <button
                onClick={() => setOpen(false)}
                className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-600 text-white hover:bg-slate-700 hover:border-red-500/50 transition-all duration-300 flex items-center justify-center group relative overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <X className="w-7 h-7 group-hover:rotate-180 transition-transform duration-500 relative z-10 text-red-400" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-6">
              <div className="text-center mb-8">
                <div className={`inline-flex items-center justify-center w-28 h-28 rounded-3xl bg-gradient-to-br ${NAV[activeIndex]?.color} shadow-2xl mb-6 transform transition-all duration-500 hover:scale-110 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-3xl"></div>
                  <span className="text-5xl relative z-10">{NAV[activeIndex]?.emoji}</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Star className="w-3 h-3 text-white animate-spin" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-white mb-3 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">{NAV[activeIndex]?.label}</h2>
                <p className="text-slate-300 text-lg">Swipe left or right to explore</p>
              </div>

              <div className="relative">
                <div className="flex justify-center items-center space-x-4 mb-10">
                  {NAV.map((item, index) => {
                    const Icon = item.icon
                    const distance = Math.abs(index - activeIndex)
                    const isActive = index === activeIndex
                    
                    return (
                      <button
                        key={item.href}
                        onClick={() => setActiveIndex(index)}
                        className={`relative transition-all duration-500 rounded-2xl overflow-hidden shadow-2xl ${
                          isActive 
                            ? 'w-24 h-24 scale-110' 
                            : distance === 1 
                              ? 'w-18 h-18 opacity-70 scale-95' 
                              : 'w-14 h-14 opacity-40 scale-75'
                        }`}
                        style={{
                          transform: `translateX(${(index - activeIndex) * (isActive ? 0 : distance * 10)}px) rotateY(${(index - activeIndex) * 15}deg)`,
                          zIndex: NAV.length - distance,
                        }}
                      >
                        <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                          {isActive && (
                            <>
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
                              <div className="absolute inset-0 border-2 border-white/40 rounded-2xl animate-pulse"></div>
                            </>
                          )}
                          <Icon className={`text-white ${isActive ? 'w-10 h-10' : 'w-6 h-6'} transition-all duration-300 drop-shadow-lg`} />
                        </div>
                      </button>
                    )
                  })}
                </div>

                <div className="flex justify-center space-x-3 mb-10">
                  {NAV.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex 
                          ? `bg-gradient-to-r ${NAV[activeIndex].color} w-12 shadow-lg` 
                          : 'bg-white/30 w-3 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>

                <div className="text-center">
                  <Link
                    href={NAV[activeIndex]?.href}
                    className={`inline-flex items-center space-x-4 px-10 py-5 bg-gradient-to-r ${NAV[activeIndex]?.color} text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden group text-lg`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Go to {NAV[activeIndex]?.label}</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-800">
              <Link
                href="/book"
                className="w-full flex items-center justify-center space-x-3 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-200"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-15px) rotate(3deg); 
          }
          50% { 
            transform: translateY(-8px) rotate(-2deg); 
          }
          75% { 
            transform: translateY(-20px) rotate(2deg); 
          }
        }
        
        @keyframes particleFloat {
          0% { 
            transform: translateY(0) scale(1) rotate(0deg); 
            opacity: 1; 
          }
          50% { 
            transform: translateY(-30px) scale(0.8) rotate(180deg); 
            opacity: 0.7; 
          }
          100% { 
            transform: translateY(-60px) scale(0) rotate(360deg); 
            opacity: 0; 
          }
        }
        
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(-20px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-in {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}
