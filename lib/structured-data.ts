import { siteStructure } from './site-structure'

// Generate structured data for better SEO and internal linking
export function generateBreadcrumbStructuredData(pathname: string) {
  const pathSegments = pathname.split('/').filter(Boolean)
  const breadcrumbs = []

  // Always start with home
  breadcrumbs.push({
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://www.stenth.com/"
  })

  // Build breadcrumb chain
  let builtPath = ''
  let position = 2

  for (const segment of pathSegments) {
    builtPath += '/' + segment
    const page = siteStructure.find(p => p.path === builtPath)

    if (page) {
      breadcrumbs.push({
        "@type": "ListItem",
        "position": position,
        "name": page.title,
        "item": `https://www.stenth.com${page.path}`
      })
      position++
    }
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs
  }
}

export function generateSiteNavigationStructuredData() {
  const mainPages = siteStructure.filter(page => page.priority <= 2)

  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": mainPages.map(page => ({
      "@type": "WebPage",
      "name": page.title,
      "url": `https://www.stenth.com${page.path}`,
      "description": page.description
    }))
  }
}

export function generateLocationPageStructuredData(country: string, city?: string) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `STENTH Digital Marketing${city ? ` - ${city}` : ` - ${country}`}`,
    "description": `Professional digital marketing services in ${city || country}`,
    "url": `https://www.stenth.com/${country.toLowerCase()}${city ? `/${city.toLowerCase()}` : ''}`,
    "serviceArea": {
      "@type": "Country",
      "name": country === 'AU' ? 'Australia' : 'Canada'
    }
  }

  if (country === 'AU') {
    return {
      ...baseData,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "AU",
        "addressLocality": city || "Melbourne",
        "streetAddress": "Picnic Ave Clyde North VIC 3978"
      },
      "telephone": "+61-XXX-XXX-XXX" // Replace with actual AU number
    }
  } else if (country === 'CA') {
    return {
      ...baseData,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "CA",
        "addressLocality": city || "Mississauga",
        "addressRegion": "ON",
        "streetAddress": "368 Prince of Wales Dr",
        "postalCode": "L5B 0A1"
      },
      "telephone": "+1-705-790-1965"
    }
  }

  return baseData
}

export function generateServicePageStructuredData(service: string) {
  const serviceMap: Record<string, any> = {
    'seo': {
      name: 'Search Engine Optimization',
      description: 'Professional SEO services to improve search rankings and organic traffic',
      serviceType: 'SEO Services'
    },
    'ads': {
      name: 'Google Ads Management',
      description: 'Expert Google Ads and PPC campaign management for maximum ROI',
      serviceType: 'Paid Advertising'
    },
    'web': {
      name: 'Web Development',
      description: 'Custom website development and optimization services',
      serviceType: 'Web Development'
    },
    'content': {
      name: 'Content Marketing',
      description: 'Strategic content creation and marketing services',
      serviceType: 'Content Marketing'
    },
    'analytics': {
      name: 'Analytics & Tracking',
      description: 'Marketing analytics setup and conversion tracking',
      serviceType: 'Analytics Services'
    },
    'branding': {
      name: 'Brand Strategy',
      description: 'Professional branding and brand strategy services',
      serviceType: 'Branding Services'
    }
  }

  const serviceInfo = serviceMap[service] || serviceMap['seo']

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceInfo.name,
    "description": serviceInfo.description,
    "serviceType": serviceInfo.serviceType,
    "provider": {
      "@type": "Organization",
      "name": "STENTH Digital Marketing Agency",
      "url": "https://www.stenth.com"
    },
    "areaServed": ["Canada", "Australia"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing Services",
      "itemListElement": siteStructure
        .filter(page => page.category === 'services')
        .map(page => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": page.title,
            "description": page.description,
            "url": `https://www.stenth.com${page.path}`
          }
        }))
    }
  }
}