import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.stenth.com"),
  title: {
    default: "Digital Marketing Agency Australia | Stenth",
    template: "%s | Stenth Australia",
  },
  description:
    "Leading digital marketing agency serving Australian businesses from Sydney to Perth. Expert SEO, PPC, and social media marketing services in Melbourne, Brisbane, and beyond.",
  keywords: [
    "digital marketing agency Australia",
    "marketing agency Sydney",
    "digital marketing company Melbourne",
    "SEO services Brisbane",
    "Australian digital marketing",
    "marketing agency Perth",
    "PPC management Australia",
    "social media marketing Australia",
    "web design Sydney",
    "Australian SEO agency",
    "search engine optimisation Australia",
    "Google ads Australia",
    "Facebook ads Australia",
    "Instagram marketing Australia",
    "content marketing Australia"
  ],
  alternates: {
    canonical: "/au/"
  },
  openGraph: {
    type: "website",
    url: "https://www.stenth.com/au/",
    siteName: "Stenth Australia",
    title: "Digital Marketing Agency Australia | Stenth",
    description:
      "Leading digital marketing agency serving Australian businesses from Sydney to Perth. Expert SEO, PPC, and social media marketing services.",
    images: [
      {
        url: "/og-image-australia.jpg",
        width: 1200,
        height: 630,
        alt: "Stenth Digital Marketing Agency Australia - Serving Australian Businesses Nationwide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency Australia | Stenth",
    description:
      "Leading digital marketing agency serving Australian businesses from Sydney to Perth. Expert SEO, PPC, and social media marketing services.",
    images: ["/og-image-australia.jpg"],
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
  applicationName: "Stenth Digital Marketing Australia",
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

export default function AustraliaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Australian-specific structured data
  const australiaOrganizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.stenth.com/au/",
    "name": "Stenth Digital Marketing Agency Australia",
    "alternateName": "Stenth Australia",
    "url": "https://www.stenth.com/au/",
    "logo": "https://www.stenth.com/Stenth_Logo-removebg.png",
    "description":
      "Leading digital marketing agency serving Australian businesses from Sydney to Perth with expert SEO, PPC, and social media marketing services.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61-2-8079-2145",
      "contactType": "customer service",
      "availableLanguage": ["English"],
      "areaServed": ["AU"],
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Level 15, 1 Bligh Street",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "postalCode": "2000",
      "addressCountry": "AU",
    },
    "sameAs": [
      "https://www.linkedin.com/company/stenth",
      "https://twitter.com/stenth",
      "https://www.instagram.com/stenth",
      "https://www.facebook.com/stenth",
    ],
    "priceRange": "$-$$",
    "currenciesAccepted": "AUD",
    "paymentAccepted": ["Cash", "Credit Card", "Invoice"],
    "serviceArea": {
      "@type": "Country",
      "name": "Australia"
    }
  }

  const australiaLocalBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stenth Digital Marketing Agency",
    "image": "https://www.stenth.com/Stenth_Logo-removebg.png",
    "@id": "https://www.stenth.com/au/",
    "url": "https://www.stenth.com/au/",
    "telephone": "+61-2-8079-2145",
    "priceRange": "$-$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Level 15, 1 Bligh Street",
      "addressLocality": "Sydney",
      "addressRegion": "NSW",
      "postalCode": "2000",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -33.8688,
      "longitude": 151.2093
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
      "name": "Australia"
    }
  }

  return (
    <>
      {/* Australia-specific JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([australiaOrganizationJsonLd, australiaLocalBusinessJsonLd])
        }}
      />
      {children}
    </>
  )
}