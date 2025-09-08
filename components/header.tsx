label: "Home", 
    icon: Home, 
    color: "from-blue-500 to-cyan-400", 
    bgColor: "bg-blue-500", 
    emoji: "🏠",
    desc: "Welcome to the future"
    emoji: "🏠"
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
@@ -36,36 +32,28 @@ const NAV = [
    label: "About", 
    icon: User, 
    color: "from-green-500 to-emerald-400", 
    bgColor: "bg-green-500", 
    emoji: "👋",
    desc: "Our story & mission"
    emoji: "👋"
  },
  { 
    href: "/portfolio", 
    label: "Portfolio", 
    icon: Briefcase, 
    color: "from-orange-500 to-red-400", 
    bgColor: "bg-orange-500", 
    emoji: "🎨",
    desc: "Our best work"
    emoji: "🎨"
  },
  { 
    href: "/contact", 
    label: "Contact", 
    icon: Phone, 
    color: "from-yellow-500 to-orange-400", 
    bgColor: "bg-yellow-500", 
    emoji: "📞",
    desc: "Let's talk business"
    emoji: "📞"
  },
  { 
    href: "/start", 
    label: "Start Growing", 
    icon: Rocket, 
    color: "from-indigo-500 to-purple-400", 
    bgColor: "bg-indigo-500", 
    emoji: "🚀",
    desc: "Begin your journey"
    emoji: "🚀"
  },
]

@@ -80,8 +68,6 @@ export default function Header() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState([])
  const pathname = usePathname()
  const containerRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
@@ -91,7 +77,6 @@ export default function Header() {
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Mouse tracking for desktop effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
@@ -100,7 +85,6 @@ export default function Header() {
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Generate particles periodically
  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredItem !== null) {
@@ -110,13 +94,13 @@ export default function Header() {
          y: mousePosition.y,
          color: NAV[hoveredItem]?.color || 'from-cyan-400 to-blue-500'
        }
        setParticles(prev => [...prev.slice(-10), newParticle])
        setParticles(prev => [...prev.slice(-5), newParticle])

        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id))
        }, 2000)
      }
    }, 100)
    }, 200)

    return () => clearInterval(interval)
  }, [hoveredItem, mousePosition])
@@ -131,7 +115,6 @@ export default function Header() {
    return () => el.classList.remove(cls)
  }, [open])

  // Touch/Swipe gestures for mobile
  const handleTouchStart = (e) => {
    const touch = e.touches[0]
    setTouchStart({ x: touch.clientX, y: touch.clientY })
@@ -178,7 +161,7 @@ export default function Header() {
        {particles.map(particle => (
          <div
            key={particle.id}
            className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${particle.color} animate-ping`}
            className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${particle.color} opacity-70`}
            style={{
              left: particle.x,
              top: particle.y,
@@ -189,7 +172,6 @@ export default function Header() {
      </div>

      <header
        ref={headerRef}
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          scrolled 
            ? "bg-slate-950/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/20 border-b border-cyan-500/30" 
@@ -198,12 +180,11 @@ export default function Header() {
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* 🚀 REVOLUTIONARY LOGO */}
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                {/* Multiple glow layers */}
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500"></div>

                <div className="relative w-12 h-12 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
                  <Image
@@ -214,16 +195,15 @@ export default function Header() {
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />

                  {/* Logo particle burst */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-ping"
                        className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        style={{
                          left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 30}%`,
                          top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 30}%`,
                          animationDelay: `${i * 0.1}s`
                          animation: `ping 1s ease-out infinite ${i * 0.1}s`
                        }}
                      />
                    ))}
@@ -236,19 +216,17 @@ export default function Header() {
                  STENTH
                </span>

                {/* Floating sparkles */}
                <div className="absolute -top-2 -right-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                </div>
                <div className="absolute -bottom-1 -left-2 opacity-0 group-hover:opacity-100 transition-all duration-700">
                  <Star className="w-3 h-3 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
                  <Star className="w-3 h-3 text-purple-400 animate-spin" />
                </div>
              </div>
            </Link>

            {/* 🔥 NEXT-LEVEL DESKTOP NAVIGATION */}
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {/* Main Navigation Links */}
              <ul className="flex space-x-1">
                {NAV.slice(0, 5).map((item, index) => (
                  <li 
@@ -267,50 +245,41 @@ export default function Header() {
                      href={item.href}
                      className={`relative px-5 py-3 text-sm font-semibold transition-all duration-500 rounded-xl group overflow-hidden flex items-center space-x-2 ${
                        pathname === item.href 
                          ? `text-white bg-gradient-to-r ${item.color} shadow-lg shadow-${item.bgColor.split('-')[1]}-500/50` 
                          ? `text-white bg-gradient-to-r ${item.color} shadow-lg` 
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
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                      {/* Floating particles on hover */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${item.color} rounded-full animate-bounce`}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${item.color} rounded-full`}
                            style={{
                              left: `${20 + i * 20}%`,
                              top: `${20 + (i % 2) * 60}%`,
                              animationDelay: `${i * 0.2}s`,
                              animationDuration: '1s'
                              animation: `bounce 1s ease-out infinite ${i * 0.2}s`
                            }}
                          />
                        ))}
                      </div>
                    </Link>

                    {/* MEGA MENU */}
                    {item.megaMenu && megaMenuOpen && hoveredItem === index && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/20 p-6 animate-in slide-in-from-top-2 duration-300">
                      <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-purple-500/20 p-6 opacity-0 animate-in slide-in-from-top-2 duration-300 opacity-100">
                        <div className="grid grid-cols-2 gap-4">
                          {item.megaMenu.map((subItem, subIndex) => (
                            <Link
@@ -338,19 +307,14 @@ export default function Header() {
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
@@ -359,18 +323,14 @@ export default function Header() {
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
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 opacity-0 group-hover:opacity-30 animate-spin transition-opacity duration-300"></div>

                  {/* Lightning effect */}
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Zap className="absolute top-1 right-2 w-3 h-3 text-yellow-300 animate-ping" />
                  </div>
@@ -384,7 +344,7 @@ export default function Header() {
              </div>
            </div>

            {/* Mobile hamburger (enhanced) */}
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="relative md:hidden w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 hover:scale-105 transition-all duration-300 flex items-center justify-center group overflow-hidden shadow-2xl shadow-cyan-500/50"
@@ -394,7 +354,7 @@ export default function Header() {
              <div className={`absolute inset-0 rounded-2xl border-2 border-white/30 ${open ? 'animate-ping' : ''}`}></div>
              <div className={`absolute inset-2 rounded-xl border border-white/20 ${open ? 'animate-pulse' : ''}`}></div>

              <div className="relative w-6 h-6 transform transition-all duration-500" style={{ perspective: '100px' }}>
              <div className="relative w-6 h-6 transform transition-all duration-500">
                <span className={`absolute block h-0.5 w-6 bg-white rounded-full transform transition-all duration-500 shadow-lg ${
                  open ? 'rotate-45 translate-y-0' : 'rotate-0 -translate-y-2'
                }`}></span>
@@ -409,13 +369,12 @@ export default function Header() {
          </div>
        </nav>

        {/* Mobile Navigation (keeping the revolutionary version) */}
        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 top-0 left-0 w-full h-full transition-all duration-1000 ease-out ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ zIndex: 60 }}
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
@@ -426,15 +385,14 @@ export default function Header() {
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className={`absolute rounded-full bg-gradient-to-r ${NAV[i % NAV.length].color} animate-float`}
                className={`absolute rounded-full bg-gradient-to-r ${NAV[i % NAV.length].color}`}
                style={{
                  width: `${Math.random() * 20 + 10}px`,
                  height: `${Math.random() * 20 + 10}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: 0.1,
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${i * 0.2}s`
                }}
              />
            ))}
@@ -512,7 +470,7 @@ export default function Header() {
                      >
                        <div className={`w-full h-full bg-gradient-to-br ${item.color} flex items-center justify-center relative overflow-hidden`}>
                          {isActive && (
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer"></div>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-pulse"></div>
                          )}
                          <Icon className={`text-white ${isActive ? 'w-8 h-8' : 'w-6 h-6'} transition-all duration-300`} />
                        </div>
@@ -540,7 +498,7 @@ export default function Header() {
                    href={NAV[activeIndex]?.href}
                    className={`inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r ${NAV[activeIndex]?.color} text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden group`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Go to {NAV[activeIndex]?.label}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </Link>
@@ -552,6 +510,7 @@ export default function Header() {
              <Link
                href="/book"
                className="w-full flex items-center justify-center space-x-3 py-4 bg-gradient-to-r from-pink-500 via-red-500 to-orange-500 text-white font-bold rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl relative overflow-hidden group animate-pulse hover:animate-none"
                onClick={createRipple}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-red-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="w-6 h-6 relative z-10" />
@@ -565,23 +524,35 @@ export default function Header() {

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
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
          }
          25% { 
            transform: translateY(-10px) rotate(2deg); 
          }
          50% { 
            transform: translateY(-5px) rotate(-1deg); 
          }
          75% { 
            transform: translateY(-15px) rotate(1deg); 
          }
        }
        
        @keyframes particleFloat {
          0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 1; }
          50% { transform: translateY(-30px) scale(0.8) rotate(180deg); opacity: 0.7; }
          100% { transform: translateY(-60px) scale(0) rotate(360deg); opacity: 0; }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
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
      `}</style>
    </>
  )
}
