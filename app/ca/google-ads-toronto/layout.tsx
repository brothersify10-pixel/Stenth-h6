import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Ads Management Toronto | Certified Google Partner - Stenth',
  description: 'Expert Google Ads management in Toronto. Certified Google Partner. Increase ROI by 300%. Free Google Ads audit for Toronto businesses.',
  keywords: 'google ads toronto, google ads management toronto, ppc toronto, google advertising toronto, google ads agency toronto, sem toronto',
  alternates: {
    canonical: 'https://stenth.com/ca/google-ads-toronto/',
    languages: {
      'en-CA': 'https://stenth.com/ca/google-ads-toronto/',
      'en-AU': 'https://stenth.com/au/google-ads-sydney/',
    },
  },
  openGraph: {
    title: 'Google Ads Management Toronto | Certified Google Partner - Stenth',
    description: 'Expert Google Ads management in Toronto. Certified Google Partner. Increase ROI by 300%. Free Google Ads audit for Toronto businesses.',
    url: 'https://stenth.com/ca/google-ads-toronto/',
    type: 'website',
    locale: 'en_CA',
  },
  other: {
    'google-site-verification': 'your-verification-code',
  },
}

export default function GoogleAdsTorontoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Stenth Google Ads Management Toronto',
    image: 'https://stenth.com/images/toronto-office.jpg',
    url: 'https://stenth.com/ca/google-ads-toronto/',
    telephone: '+1-416-555-0123',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Bay Street',
      addressLocality: 'Toronto',
      addressRegion: 'ON',
      postalCode: 'M5J 2Y3',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 43.6532,
      longitude: -79.3832
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    sameAs: [
      'https://facebook.com/stenthcanada',
      'https://linkedin.com/company/stenth',
      'https://twitter.com/stenthcanada'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Google Ads Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Search Ads',
            description: 'Google Search advertising campaigns for Toronto businesses'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopping Ads',
            description: 'Google Shopping campaign management for Toronto retailers'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Display Ads',
            description: 'Display network advertising targeting Toronto audiences'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'YouTube Ads',
            description: 'YouTube video advertising campaigns for Toronto market'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '87',
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
