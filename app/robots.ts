// app/robots.ts - Enhanced version
import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      }
    ],
    sitemap: "https://www.stenth.com/sitemap.xml",
    host: "https://www.stenth.com",
  }
}
