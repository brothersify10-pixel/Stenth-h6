import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function STENTHFooter() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ]

  // Update these with your actual social media URLs
  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/stenth", // Replace with your actual Facebook URL
      label: "Facebook" 
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/stenth_official", // Replace with your actual Twitter/X URL
      label: "Twitter" 
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/stenth.official", // Replace with your actual Instagram URL
      label: "Instagram" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/company/stenth", // Replace with your actual LinkedIn URL
      label: "LinkedIn" 
    },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              STENTH
            </h3>
            <p className="text-slate-400 leading-relaxed">Strategy. Marketing. Growth.</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              We don't just market brands—we build businesses through data-driven strategies and measurable results.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank" // Opens in new tab
                  rel="noopener noreferrer" // Security best practice
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            
            {/* Optional: Add contact info */}
            <div className="space-y-2 pt-4">
              <p className="text-slate-400 text-sm">
                📧 <a href="mailto:info@stenth.com" className="hover:text-cyan-400 transition-colors">info@stenth.com</a>
              </p>
              <p className="text-slate-400 text-sm">
                🌐 <a href="https://www.stenth.com" className="hover:text-cyan-400 transition-colors">www.stenth.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">© 2025 STENTH. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
