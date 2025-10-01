import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import FooterSitemap from "./footer-sitemap"

export default function Footer() {
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
        {/* Brand Section */}
        <div className="text-center md:text-left mb-12">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            STENTH
          </h3>
          <p className="text-slate-400 leading-relaxed mb-2">Strategy. Marketing. Growth.</p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto md:mx-0">
            We don't just market brands—we build businesses through data-driven strategies and measurable results.
          </p>
        </div>

        {/* Comprehensive Site Map */}
        <div className="mb-12">
          <FooterSitemap />
        </div>

        {/* Contact & Social */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contact Information</h4>
            <div className="space-y-3">
              <p className="text-slate-400 flex items-center">
                📧 <a href="mailto:info@stenth.com" className="hover:text-cyan-400 transition-colors ml-2">info@stenth.com</a>
              </p>
              <p className="text-slate-400 flex items-start">
                🏢 <span className="ml-2">368 Prince of Wales Dr, Mississauga, ON L5B 0A1</span>
              </p>
              <p className="text-slate-400 flex items-start">
                🇦🇺 <span className="ml-2">Picnic Ave Clyde North VIC 3978</span>
              </p>
            </div>
          </div>

          {/* Social Media & CTA */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Connect With Us</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                  aria-label={`Follow us on ${social.label}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <div className="space-y-3">
              <Link href="/book" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-sm font-medium">
                🚀 Book Free Consultation
              </Link>
              <div className="flex flex-col space-y-1">
                <Link href="/start" className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                  Get Started Today →
                </Link>
                <Link href="/portfolio" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  View Our Work →
                </Link>
              </div>
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
