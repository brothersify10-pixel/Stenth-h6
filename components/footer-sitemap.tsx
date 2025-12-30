import Link from "next/link"
import { siteStructure, getPagesByCategory, getPagesByCountry } from "@/lib/site-structure"

export default function FooterSitemap() {
  const mainPages = getPagesByCategory('main').filter(p => p.path !== '/')
  const services = getPagesByCategory('services')
  const australiaPages = getPagesByCountry('AU').slice(0, 8)
  const canadaPages = getPagesByCountry('CA').slice(0, 8)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      {/* Main Pages */}
      <div>
        <h3 className="text-white font-semibold mb-4">Company</h3>
        <ul className="space-y-2">
          {mainPages.map((page) => (
            <li key={page.path}>
              <Link
                href={page.path}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-white font-semibold mb-4">Services</h3>
        <ul className="space-y-2">
          {services.map((page) => (
            <li key={page.path}>
              <Link
                href={page.path}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
              >
                {page.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Australia */}
      <div>
        <h3 className="text-white font-semibold mb-4">Australia 🇦🇺</h3>
        <ul className="space-y-2">
          {australiaPages.map((page) => (
            <li key={page.path}>
              <Link
                href={page.path}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
              >
                {page.title.replace(' Marketing', '').replace('Australian ', '')}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Canada */}
      <div>
        <h3 className="text-white font-semibold mb-4">Canada 🇨🇦</h3>
        <ul className="space-y-2">
          {canadaPages.map((page) => (
            <li key={page.path}>
              <Link
                href={page.path}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 text-sm"
              >
                {page.title.replace(' Marketing', '').replace('Canadian ', '')}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
