import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Header from "@/components/header"
import Breadcrumbs from "@/components/breadcrumbs"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stenth.com"),
  title: {
    default: "Stenth — Digital Marketing That Builds Businesses",
    template: "%s | Stenth",
  },
  description:
    "Transform your business with Stenth. We don't just market brands—we build businesses through data-driven strategies, brand management, and measurable ROI.",
  keywords: [
    "digital marketing agency",
    "business growth marketing",
    "data-driven marketing",
    "brand management",
    "ROI marketing",
    "marketing strategy",
    "paid advertising",
    "social media marketing",
    "SEO optimization",
    "content marketing",
    "web development",
    "marketing analytics",
    "lead generation",
    "conversion optimization",
    "marketing automation",
    "performance marketing",
    "brand strategy",
    "marketing consultation",
    "digital transformation",
    "growth hacking",
  ],
  alternates: { canonical: "/" }, // resolves to https://www.stenth.com/
  openGraph: {
    type: "website",
    url: "https://www.stenth.com",
    siteName: "Stenth",
    title: "Stenth — Digital Marketing That Builds Businesses",
    description:
      "Transform your business with Stenth. We don't just market brands—we build businesses through data-driven strategies, brand management, and measurable ROI.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stenth Digital Marketing Agency - Building Businesses Through Strategic Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stenth — Digital Marketing That Builds Businesses",
    description:
      "Transform your business with Stenth. We don't just market brands—we build businesses through data-driven strategies, brand management, and measurable ROI.",
    images: ["/og-image.jpg"],
    creator: "@stenth", // remove if not real
    site: "@stenth",     // remove if not real
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Digital Marketing",
  applicationName: "Stenth Digital Marketing",
  referrer: "origin-when-cross-origin",
  creator: "Stenth Team",
  publisher: "Stenth Digital Marketing Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon0.svg", type: "image/svg+xml" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",

  // ✅ Add verification so you can prove ownership to search engines
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE || "",
    yandex: process.env.YANDEX_VERIFICATION_CODE || "",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children, modal }: { children: React.ReactNode; modal: React.ReactNode }) {
  // Move FAQPage JSON-LD to the specific page that actually renders FAQs.
  // Move ProfessionalService JSON-LD to the homepage ONLY (and keep it truthful).
  // Keep Organization + WebSite here (sitewide) since they describe the site/org.

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Stenth Digital Marketing Agency",
    alternateName: "Stenth",
    url: "https://www.stenth.com",
    logo: "https://www.stenth.com/Stenth_Logo-removebg.png",
    description:
      "We don't just market brands—we build businesses through data-driven strategies, brand management, and measurable ROI.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-705-790-1965", // put the real number you want indexed
      contactType: "customer service",
      availableLanguage: ["English"],
      areaServed: ["CA", "AU", "US"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "368 Prince of Wales Dr",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: "L5B 0A1",
      addressCountry: "CA",
    },
    sameAs: [
      "https://www.linkedin.com/company/stenth",
      "https://twitter.com/stenth",
      "https://www.instagram.com/stenth",
      "https://www.facebook.com/stenth",
    ],
  }

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Stenth Digital Marketing Agency",
    url: "https://www.stenth.com",
    description:
      "Transform your business with data-driven digital marketing strategies that build businesses, not just campaigns.",
    publisher: {
      "@type": "Organization",
      name: "Stenth",
      logo: {
        "@type": "ImageObject",
        url: "https://www.stenth.com/Stenth_Logo-removebg.png",
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.stenth.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Core Meta */}
        <meta name="apple-mobile-web-app-title" content="Stenth" />
        <meta name="application-name" content="Stenth" />
        <meta name="author" content="Stenth Digital Marketing Agency" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="color-scheme" content="dark light" />

        {/* Performance and SEO optimization */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://vercel.live" crossOrigin="anonymous" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//vercel.live" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Preload critical resources for Core Web Vitals */}
        <link rel="preload" href="/Stenth_Logo-removebg.png" as="image" type="image/png" />

        {/* Hreflang tags for international SEO */}
        <link rel="alternate" hrefLang="x-default" href="https://www.stenth.com/" />
        <link rel="alternate" hrefLang="en-ca" href="https://www.stenth.com/ca/" />
        <link rel="alternate" hrefLang="en-au" href="https://www.stenth.com/au/" />

        {/* ❌ Removed obsolete geo/ICBM meta and Google Fonts preconnect (you use self-hosted Geist). */}

        {/* Consolidated JSON-LD structured data for better performance */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd])
          }}
        />
      </head>

      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div className="h-20 bg-slate-950/95" />}>
          <Header />
        </Suspense>
        <Breadcrumbs />
        <main role="main" id="main-content">
          {modal}
          {children}
        </main>
        <Footer />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        {/* Performance script - externalized for better caching */}
        <script src="/scripts/performance.js" defer />
      </body>
    </html>
  )
}
