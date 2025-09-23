import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-commerce SEO Canada | Online Store Optimization - Stenth',
  description: 'Expert e-commerce SEO services across Canada. Increase online sales, improve product rankings, and drive qualified traffic to your online store.',
  keywords: 'ecommerce seo canada, online store seo canada, shopify seo canada, product seo canada, ecommerce optimization canada',
  alternates: {
    canonical: 'https://stenth.com/ca/ecommerce-seo-canada/',
    languages: {
      'en-CA': 'https://stenth.com/ca/ecommerce-seo-canada/',
      'en-AU': 'https://stenth.com/au/ecommerce-seo-australia/',
    },
  },
  openGraph: {
    title: 'E-commerce SEO Canada | Online Store Optimization - Stenth',
    description: 'Expert e-commerce SEO services across Canada. Increase online sales, improve product rankings, and drive qualified traffic to your online store.',
    url: 'https://stenth.com/ca/ecommerce-seo-canada/',
    type: 'website',
    locale: 'en_CA',
  },
  other: {
    'google-site-verification': 'your-verification-code',
  },
}

export default function EcommerceSEOCanadaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://stenth.com/ca/ecommerce-seo-canada/',
    name: 'Stenth E-commerce SEO Services Canada',
    image: 'https://stenth.com/images/ecommerce-seo.jpg',
    url: 'https://stenth.com/ca/ecommerce-seo-canada/',
    telephone: '+1-888-555-0123',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CA',
      addressRegion: 'ON',
      addressLocality: 'Toronto'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6532,
      longitude: -79.3832
    },
    serviceArea: {
      '@type': 'Country',
      name: 'Canada'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'E-commerce SEO Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Product Page SEO',
            description: 'Optimize product pages for higher search rankings and conversions'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Category Page Optimization',
            description: 'Category page SEO to capture broader search intent'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce Technical SEO',
            description: 'Technical optimization for online stores and shopping platforms'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopping Feed Optimization',
            description: 'Google Shopping and product feed optimization'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '142',
      bestRating: '5'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      {children}
    </>
  )
}