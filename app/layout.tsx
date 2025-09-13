import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Header from "@/components/header"

export const metadata: Metadata = {
  metadataBase: new URL('https://stenth.com'),
  title: { 
    default: 'Stenth — Digital Marketing That Builds Businesses', 
    template: '%s | Stenth' 
  },
  description: 'Transform your business with Stenth. We don\'t just market brands—we build businesses through data-driven strategies, brand management, and measurable ROI.',
  keywords: [
    'digital marketing agency', 
    'business growth marketing', 
    'data-driven marketing', 
    'brand management', 
    'ROI marketing', 
    'marketing strategy', 
    'paid advertising',
    'social media marketing',
    'SEO optimization',
    'content marketing',
    'web development',
    'marketing analytics',
    'lead generation',
    'conversion optimization',
    'marketing automation',
    'performance marketing',
    'brand strategy',
    'marketing consultation',
    'digital transformation',
    'growth hacking'
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://stenth.com',
    siteName: 'Stenth',
    title: 'Stenth — Digital Marketing That Builds Businesses',
    description: 'Transform your business with Stenth. We don\'t just market brands—we build businesses through data-driven strategies, brand management, and measurable ROI.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Stenth Digital Marketing Agency - Building Businesses Through Strategic Marketing'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stenth — Digital Marketing That Builds Businesses',
    description: 'Transform your business with Stenth. We don\'t just market brands—we build businesses through data-driven strategies, brand management, and measurable ROI.',
    images: ['/og-image.jpg'],
    creator: '@stenth',
    site: '@stenth'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_CODE || 'your-google-verification-code-here',
    yandex: process.env.YANDEX_VERIFICATION_CODE || 'your-yandex-verification-code-here',
    bing: process.env.BING_VERIFICATION_CODE || 'your-bing-verification-code-here',
  },
  category: 'Digital Marketing',
  classification: 'Business Services',
  generator: 'Next.js',
  applicationName: 'Stenth Digital Marketing',
  referrer: 'origin-when-cross-origin',
  creator: 'Stenth Team',
  publisher: 'Stenth Digital Marketing Agency',
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
    shortcut: "/favicon.ico"
  },
  manifest: "/manifest.json",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Core Meta Tags */}
        <meta name="apple-mobile-web-app-title" content="Stenth" />
        <meta name="application-name" content="Stenth" />
        <meta name="author" content="Stenth Digital Marketing Agency" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="color-scheme" content="dark light" />
        
        {/* Business Information */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Mississauga" />
        <meta name="geo.position" content="43.5890;-79.6441" />
        <meta name="ICBM" content="43.5890, -79.6441" />
        
        {/* Structured Data for Digital Marketing Agency */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Stenth Digital Marketing Agency",
              "alternateName": "Stenth",
              "description": "We don't just market brands—we build businesses through data-driven strategies, brand management, and measurable ROI.",
              "url": "https://stenth.com",
              "logo": "https://stenth.com/Stenth_Logo-removebg.png",
              "image": "https://stenth.com/og-image.jpg",
              "telephone": "+1-705-790-1965", // Replace with actual phone
              "email": "info@stenth.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "368 Prince of Wales Dr",
                "addressLocality": "Mississauga",
                "addressRegion": "ON",
                "postalCode": "L5B 0A1",
                "addressCountry": "CA"
              },
              "additionalLocation": {
                "@type": "PostalAddress",
                "streetAddress": "Picnic Ave Clyde North",
                "addressRegion": "VIC",
                "postalCode": "3978",
                "addressCountry": "AU"
              },
              "serviceArea": [
                {
                  "@type": "Country",
                  "name": "Canada"
                },
                {
                  "@type": "Country", 
                  "name": "Australia"
                },
                {
                  "@type": "Country",
                  "name": "United States"
                }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Digital Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Digital Marketing Strategy",
                      "description": "Comprehensive digital transformation strategies that align with business goals"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Social Media Marketing",
                      "description": "Engaging social media campaigns that build communities and drive conversions"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Paid Advertising",
                      "description": "Data-driven advertising campaigns optimized for maximum ROI"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "SEO Optimization", 
                      "description": "Strategic search engine optimization that improves visibility"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Brand Strategy & Identity",
                      "description": "Complete brand development from strategy to visual identity"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Web Development",
                      "description": "High-converting websites and applications that drive business growth"
                    }
                  }
                ]
              },
              "founder": [
                {
                  "@type": "Person",
                  "name": "Aakash Lakhataria",
                  "jobTitle": "Co-Founder"
                },
                {
                  "@type": "Person", 
                  "name": "Ansh Rai",
                  "jobTitle": "Co-Founder"
                }
              ],
              "numberOfEmployees": "27+",
              "foundingDate": "2022",
              "slogan": "Strategy. Marketing. Growth.",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150+",
                "bestRating": "5"
              },
              "sameAs": [
                "https://www.linkedin.com/company/stenth",
                "https://twitter.com/stenth", 
                "https://www.instagram.com/stenth",
                "https://www.facebook.com/stenth"
              ],
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://stenth.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Stenth Digital Marketing Agency",
              "url": "https://stenth.com",
              "description": "Transform your business with data-driven digital marketing strategies that build businesses, not just campaigns.",
              "publisher": {
                "@type": "Organization",
                "name": "Stenth",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://stenth.com/Stenth_Logo-removebg.png"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://stenth.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Stenth Digital Marketing Agency",
              "alternateName": "Stenth",
              "url": "https://stenth.com",
              "logo": "https://stenth.com/Stenth_Logo-removebg.png",
              "description": "We don't just market brands—we build businesses through data-driven strategies, brand management, and measurable ROI.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX", // Replace with actual phone
                "contactType": "customer service",
                "availableLanguage": ["English"],
                "areaServed": ["CA", "AU", "US"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "368 Prince of Wales Dr",
                "addressLocality": "Mississauga",
                "addressRegion": "ON", 
                "postalCode": "L5B 0A1",
                "addressCountry": "CA"
              }
            })
          }}
        />

        {/* FAQ Schema for common questions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question", 
                  "name": "What makes Stenth different from other marketing agencies?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Stenth doesn't just create marketing campaigns—we build comprehensive business growth systems. We provide data-first strategies, monthly performance reviews, complete brand management, and transparent ROI tracking."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What services does Stenth offer?",
                  "acceptedAnswer": {
                    "@type": "Answer", 
                    "text": "Stenth offers complete digital marketing services including brand strategy & identity, paid advertising, SEO optimization, social media marketing, content marketing, web development, and analytics & tracking."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does Stenth track ROI and performance?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We provide monthly growth sessions with detailed lead and conversion reports, cost-per-lead analysis, ROI optimization recommendations, and strategic adjustments based on real-time data analysis."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What industries does Stenth work with?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Stenth works with businesses across multiple industries including e-commerce, FMCG, SaaS, fintech, retail, tours & travels, and more. We tailor strategies to each industry's unique challenges and opportunities."
                  }
                }
              ]
            })
          }}
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cal.com" />
        <link rel="dns-prefetch" href="https://vercel.com" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={<div className="h-20 bg-slate-950/95" />}>
          <Header />
        </Suspense>
        <main>
          {children}
        </main>
        <Analytics />
        
        {/* Additional Performance Optimizations */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Optimize Core Web Vitals
              if ('requestIdleCallback' in window) {
                requestIdleCallback(() => {
                  // Preload critical resources
                  const link = document.createElement('link');
                  link.rel = 'preload';
                  link.href = '/Stenth_Logo-removebg.png';
                  link.as = 'image';
                  document.head.appendChild(link);
                });
              }
              
              // Set viewport height CSS custom property for mobile
              function setVH() {
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty('--vh', vh + 'px');
              }
              setVH();
              window.addEventListener('resize', setVH);
            `
          }}
        />
      </body>
    </html>
  )
}
