import Link from "next/link"
import FooterSitemap from "./footer-sitemap"

export default function Footer() {
  return (
    <footer className="bg-slate-950/90 backdrop-blur-sm border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        {/* Brand Section */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent mb-2">
            STENTH
          </h2>
          <p className="text-slate-400 text-lg">
            Strategy. Marketing. Growth.
          </p>
          <p className="text-slate-300 mt-2 max-w-2xl mx-auto">
            We don't just market brands—we build businesses through data-driven strategies and measurable results.
          </p>
        </div>

        {/* Sitemap Grid */}
        <FooterSitemap />

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <h3 className="text-white font-semibold mb-4 text-center">Contact Information</h3>
          <div className="grid md:grid-cols-3 gap-4 text-slate-300 text-sm">
            <div className="text-center">
              <p className="mb-1">📧</p>
              <a href="mailto:info@stenth.com" className="hover:text-cyan-400 transition-colors">
                info@stenth.com
              </a>
            </div>
            <div className="text-center">
              <p className="mb-1">🏢</p>
              <p>368 Prince of Wales Dr, Mississauga, ON L5B 0A1</p>
            </div>
            <div className="text-center">
              <p className="mb-1">🇦🇺</p>
              <p>Picnic Ave Clyde North VIC 3978</p>
            </div>
          </div>
        </div>

        {/* Connect With Us */}
        <div className="mt-8 text-center">
          <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
          <div className="flex justify-center gap-4 mb-8">
            <Link
              href="/book"
              className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              🚀 Book Free Consultation
            </Link>
            <Link
              href="/start"
              className="px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
            >
              Get Started Today →
            </Link>
            <Link
              href="/portfolio"
              className="px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 transition-colors"
            >
              View Our Work →
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2025 STENTH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
