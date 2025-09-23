import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Ads Management Vancouver | Certified Google Partner - Stenth',
  description: 'Expert Google Ads management in Vancouver. Certified Google Partner. Increase ROI by 300%. Free Google Ads audit for Vancouver businesses.',
  keywords: 'google ads vancouver, google ads management vancouver, ppc vancouver, google advertising vancouver, google ads agency vancouver, sem vancouver',
  alternates: {
    canonical: 'https://stenth.com/ca/google-ads-vancouver/',
    languages: {
      'en-CA': 'https://stenth.com/ca/google-ads-vancouver/',
      'en-AU': 'https://stenth.com/au/google-ads-melbourne/',
    },
  },
  openGraph: {
    title: 'Google Ads Management Vancouver | Certified Google Partner - Stenth',
    description: 'Expert Google Ads management in Vancouver. Certified Google Partner. Increase ROI by 300%. Free Google Ads audit for Vancouver businesses.',
    url: 'https://stenth.com/ca/google-ads-vancouver/',
    type: 'website',
    locale: 'en_CA',
  },
  other: {
    'google-site-verification': 'your-verification-code',
  },
}

export default function GoogleAdsVancouverLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Stenth Google Ads Management Vancouver',
    image: 'https://stenth.com/images/vancouver-office.jpg',
    url: 'https://stenth.com/ca/google-ads-vancouver/',
    telephone: '+1-604-555-0123',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '789 West Georgia Street',
      addressLocality: 'Vancouver',
      addressRegion: 'BC',
      postalCode: 'V6C 2T8',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.2827,
      longitude: -123.1207
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
            description: 'Google Search advertising campaigns for Vancouver businesses'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopping Ads',
            description: 'Google Shopping campaign management for Vancouver retailers'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Display Ads',
            description: 'Display network advertising targeting Vancouver audiences'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'YouTube Ads',
            description: 'YouTube video advertising campaigns for Vancouver market'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '65',
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