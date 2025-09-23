import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Ads Management Canada | Expert PPC Services - Stenth',
  description: 'Professional Google Ads management services across Canada. Certified Google Ads partner. Maximize ROI, reduce costs, and drive qualified leads.',
  keywords: 'google ads management canada, ppc management canada, google ads agency canada, adwords management canada, sem services canada',
  alternates: {
    canonical: 'https://stenth.com/ca/google-ads-management-canada/',
    languages: {
      'en-CA': 'https://stenth.com/ca/google-ads-management-canada/',
      'en-AU': 'https://stenth.com/au/google-ads-management-australia/',
    },
  },
  openGraph: {
    title: 'Google Ads Management Canada | Expert PPC Services - Stenth',
    description: 'Professional Google Ads management services across Canada. Certified Google Ads partner. Maximize ROI, reduce costs, and drive qualified leads.',
    url: 'https://stenth.com/ca/google-ads-management-canada/',
    type: 'website',
    locale: 'en_CA',
  },
  other: {
    'google-site-verification': 'your-verification-code',
  },
}

export default function GoogleAdsManagementCanadaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://stenth.com/ca/google-ads-management-canada/',
    name: 'Stenth Google Ads Management Services Canada',
    image: 'https://stenth.com/images/google-ads-management.jpg',
    url: 'https://stenth.com/ca/google-ads-management-canada/',
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
      name: 'Google Ads Management Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Search Campaign Management',
            description: 'Strategic Google Search Ads management and optimization'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Display Campaign Management',
            description: 'Google Display Network advertising and retargeting campaigns'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopping Campaign Optimization',
            description: 'Google Shopping ads management for e-commerce businesses'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'YouTube Advertising',
            description: 'Video advertising campaigns on YouTube and Google partners'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '189',
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
