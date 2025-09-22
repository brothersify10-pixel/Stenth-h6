import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stenth.com"),
  title: {
    default: "Digital Marketing Agency Canada | Stenth",
    template: "%s | Stenth Canada",
  },
  description:
    "Leading digital marketing agency serving Canadian businesses from coast to coast. Expert SEO, PPC, and social media marketing services in Toronto, Montreal, Vancouver, and beyond.",
  keywords: [
    "digital marketing agency Canada",
    "marketing agency Toronto",
    "digital marketing company Vancouver",
    "SEO services Montreal",
    "Canadian digital marketing",
    "marketing agency Calgary",
    "PPC management Canada",
    "social media marketing Canada",
    "web design Toronto",
    "Canadian SEO agency",
    "bilingual marketing services",
    "French marketing services",
    "Quebec digital marketing",
    "Alberta marketing agency",
    "BC marketing services"
  ],
  alternates: {
    canonical: "/ca/"
  },
  openGraph: {
    type: "website",
    url: "https://www.stenth.com/ca/",
    siteName: "Stenth Canada",
    title: "Digital Marketing Agency Canada | Stenth",
    description:
      "Leading digital marketing agency serving Canadian businesses from coast to coast. Expert SEO, PPC, and social media marketing services.",
    images: [
      {
        url: "/og-image-canada.jpg",
        width: 1200,
        height: 630,
        alt: "Stenth Digital Marketing Agency Canada - Serving Canadian Businesses Coast to Coast",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency Canada | Stenth",
    description:
      "Leading digital marketing agency serving Canadian businesses from coast to coast. Expert SEO, PPC, and social media marketing services.",
    images: ["/og-image-canada.jpg"],
    creator: "@stenth",
    site: "@stenth",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
  category: "Digital Marketing",
  applicationName: "Stenth Digital Marketing Canada",
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
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE || "",
  },
}

export default function CanadaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Canadian-specific structured data
  const canadaOrganizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.stenth.com/ca/",
    "name": "Stenth Digital Marketing Agency Canada",
    "alternateName": "Stenth Canada",
    "url": "https://www.stenth.com/ca/",
    "logo": "https://www.stenth.com/Stenth_Logo-removebg.png",
    "description":
      "Leading digital marketing agency serving Canadian businesses from coast to coast with expert SEO, PPC, and social media marketing services.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-705-790-1965",
      "contactType": "customer service",
      "availableLanguage": ["English", "French"],
      "areaServed": ["CA"],
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "368 Prince of Wales Dr",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "postalCode": "L5B 0A1",
      "addressCountry": "CA",
    },
    "sameAs": [
      "https://www.linkedin.com/company/stenth",
      "https://twitter.com/stenth",
      "https://www.instagram.com/stenth",
      "https://www.facebook.com/stenth",
    ],
    "priceRange": "$-$$",
    "currenciesAccepted": "CAD",
    "paymentAccepted": ["Cash", "Credit Card", "Invoice"],
    "serviceArea": {
      "@type": "Country",
      "name": "Canada"
    }
  }

  const canadaLocalBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stenth Digital Marketing Agency",
    "image": "https://www.stenth.com/Stenth_Logo-removebg.png",
    "@id": "https://www.stenth.com/ca/",
    "url": "https://www.stenth.com/ca/",
    "telephone": "+1-705-790-1965",
    "priceRange": "$-$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "368 Prince of Wales Dr",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "postalCode": "L5B 0A1",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.5890,
      "longitude": -79.6441
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Canada"
    }
  }

  return (
    <html lang="en-CA" className="scroll-smooth">
      <head>
        {/* Canada-specific meta tags */}
        <meta name="geo.region" content="CA" />
        <meta name="geo.country" content="Canada" />
        <meta name="geo.placename" content="Canada" />
        <meta name="currency" content="CAD" />
        <meta name="language" content="English, French" />

        {/* Hreflang tags */}
        <link rel="alternate" hrefLang="en-ca" href="https://www.stenth.com/ca/" />
        <link rel="alternate" hrefLang="en-au" href="https://www.stenth.com/au/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.stenth.com/" />

        {/* Canada-specific JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([canadaOrganizationJsonLd, canadaLocalBusinessJsonLd])
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}