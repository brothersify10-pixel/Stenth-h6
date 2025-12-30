// Complete site structure for navigation and internal linking
export interface PageInfo {
  title: string
  path: string
  description: string
  category: string
  country?: string
  city?: string
  service?: string
  priority: number // 1-5, 1 being highest priority
}

export const siteStructure: PageInfo[] = [
  // Main pages
  { title: "Home", path: "/", description: "Digital marketing agency that builds businesses", category: "main", priority: 1 },
  { title: "About Us", path: "/about", description: "Learn about our digital marketing expertise", category: "main", priority: 2 },
  { title: "Services", path: "/services", description: "Comprehensive digital marketing services", category: "main", priority: 2 },
  { title: "Portfolio", path: "/portfolio", description: "Our successful digital marketing case studies", category: "main", priority: 2 },
  { title: "Contact", path: "/contact", description: "Get in touch with our marketing experts", category: "main", priority: 2 },
  { title: "Book Consultation", path: "/book", description: "Book a free digital marketing consultation", category: "main", priority: 3 },

  // Service pages
  { title: "Paid Advertising", path: "/services/ads", description: "Google Ads and paid advertising services", category: "services", service: "ads", priority: 3 },
  { title: "SEO Services", path: "/services/seo", description: "Search engine optimization services", category: "services", service: "seo", priority: 3 },
  { title: "Web Development", path: "/services/web", description: "Professional web development services", category: "services", service: "web", priority: 3 },
  { title: "Content Marketing", path: "/services/content", description: "Content marketing and strategy services", category: "services", service: "content", priority: 3 },
  { title: "Analytics & Tracking", path: "/services/analytics", description: "Marketing analytics and conversion tracking", category: "services", service: "analytics", priority: 3 },
  { title: "Branding Services", path: "/services/branding", description: "Brand strategy and identity services", category: "services", service: "branding", priority: 3 },

  // Australia pages
  { title: "Australia", path: "/au", description: "Digital marketing services in Australia", category: "location", country: "AU", priority: 2 },
  { title: "Book Consultation (AU)", path: "/au/book", description: "Book consultation in Australia", category: "location", country: "AU", priority: 3 },
  { title: "Australian Case Studies", path: "/au/case-studies", description: "Success stories from Australian clients", category: "location", country: "AU", priority: 3 },
  { title: "Contact Australia", path: "/au/contact", description: "Contact our Australian office", category: "location", country: "AU", priority: 3 },

  // Australian cities
  { title: "Melbourne Marketing", path: "/au/melbourne", description: "Digital marketing services in Melbourne", category: "location", country: "AU", city: "Melbourne", priority: 4 },
  { title: "Sydney Marketing", path: "/au/sydney", description: "Digital marketing services in Sydney", category: "location", country: "AU", city: "Sydney", priority: 4 },
  { title: "Brisbane Marketing", path: "/au/brisbane", description: "Digital marketing services in Brisbane", category: "location", country: "AU", city: "Brisbane", priority: 4 },
  { title: "Perth Marketing", path: "/au/perth", description: "Digital marketing services in Perth", category: "location", country: "AU", city: "Perth", priority: 4 },

  // Australian services
  { title: "Google Ads Melbourne", path: "/au/google-ads-melbourne", description: "Google Ads management in Melbourne", category: "location-service", country: "AU", city: "Melbourne", service: "google-ads", priority: 4 },
  { title: "Google Ads Sydney", path: "/au/google-ads-sydney", description: "Google Ads management in Sydney", category: "location-service", country: "AU", city: "Sydney", service: "google-ads", priority: 4 },
  { title: "SEO Services Melbourne", path: "/au/seo-services-melbourne", description: "SEO services in Melbourne", category: "location-service", country: "AU", city: "Melbourne", service: "seo", priority: 4 },
  { title: "SEO Services Sydney", path: "/au/seo-services-sydney", description: "SEO services in Sydney", category: "location-service", country: "AU", city: "Sydney", service: "seo", priority: 4 },

  // Canada pages
  { title: "Canada", path: "/ca", description: "Digital marketing services in Canada", category: "location", country: "CA", priority: 2 },
  { title: "Book Consultation (CA)", path: "/ca/book", description: "Book consultation in Canada", category: "location", country: "CA", priority: 3 },
  { title: "Canadian Case Studies", path: "/ca/case-studies", description: "Success stories from Canadian clients", category: "location", country: "CA", priority: 3 },
  { title: "Contact Canada", path: "/ca/contact", description: "Contact our Canadian office", category: "location", country: "CA", priority: 3 },

  // Canadian cities
  { title: "Toronto Marketing", path: "/ca/toronto", description: "Digital marketing services in Toronto", category: "location", country: "CA", city: "Toronto", priority: 4 },
  { title: "Vancouver Marketing", path: "/ca/vancouver", description: "Digital marketing services in Vancouver", category: "location", country: "CA", city: "Vancouver", priority: 4 },
  { title: "Montreal Marketing", path: "/ca/montreal", description: "Digital marketing services in Montreal", category: "location", country: "CA", city: "Montreal", priority: 4 },
  { title: "Calgary Marketing", path: "/ca/calgary", description: "Digital marketing services in Calgary", category: "location", country: "CA", city: "Calgary", priority: 4 },

  // Canadian services
  { title: "Google Ads Toronto", path: "/ca/google-ads-toronto", description: "Google Ads management in Toronto", category: "location-service", country: "CA", city: "Toronto", service: "google-ads", priority: 4 },
  { title: "Google Ads Vancouver", path: "/ca/google-ads-vancouver", description: "Google Ads management in Vancouver", category: "location-service", country: "CA", city: "Vancouver", service: "google-ads", priority: 4 },
  { title: "Google Ads Management Canada", path: "/ca/google-ads-management-canada", description: "Professional Google Ads management across Canada", category: "location-service", country: "CA", service: "google-ads", priority: 4 },
  { title: "SEO Services Toronto", path: "/ca/seo-services-toronto", description: "SEO services in Toronto", category: "location-service", country: "CA", city: "Toronto", service: "seo", priority: 4 },
  { title: "SEO Services Vancouver", path: "/ca/seo-services-vancouver", description: "SEO services in Vancouver", category: "location-service", country: "CA", city: "Vancouver", service: "seo", priority: 4 },
  { title: "SEO Services Montreal", path: "/ca/seo-services-montreal", description: "SEO services in Montreal", category: "location-service", country: "CA", city: "Montreal", service: "seo", priority: 4 },
  { title: "Content Marketing Canada", path: "/ca/content-marketing-canada", description: "Content marketing services across Canada", category: "location-service", country: "CA", service: "content", priority: 4 },
  { title: "E-commerce SEO Canada", path: "/ca/ecommerce-seo-canada", description: "E-commerce SEO services in Canada", category: "location-service", country: "CA", service: "ecommerce-seo", priority: 4 },
  { title: "Link Building Canada", path: "/ca/link-building-services-canada", description: "Professional link building services in Canada", category: "location-service", country: "CA", service: "link-building", priority: 4 },
  { title: "Technical SEO Audit Canada", path: "/ca/technical-seo-audit-canada", description: "Technical SEO audit services in Canada", category: "location-service", country: "CA", service: "technical-seo", priority: 4 },

  // Special pages
  { title: "Get Started", path: "/start", description: "Start your digital marketing journey", category: "conversion", priority: 3 },
  { title: "About Stenth", path: "/stenth", description: "Learn more about the Stenth brand", category: "about", priority: 5 },
]

export function getRelatedPages(currentPath: string, limit: number = 6): PageInfo[] {
  const currentPage = siteStructure.find(page => page.path === currentPath)
  if (!currentPage) return siteStructure.filter(page => page.priority <= 3).slice(0, limit)

  // Get related pages based on category, country, city, or service
  const related = siteStructure.filter(page => {
    if (page.path === currentPath) return false

    // Same category gets highest priority
    if (page.category === currentPage.category) return true

    // Same country
    if (currentPage.country && page.country === currentPage.country) return true

    // Same city
    if (currentPage.city && page.city === currentPage.city) return true

    // Same service
    if (currentPage.service && page.service === currentPage.service) return true

    // High priority pages
    if (page.priority <= 2) return true

    return false
  })

  // Sort by relevance and priority
  return related
    .sort((a, b) => {
      // Prioritize same category
      if (a.category === currentPage.category && b.category !== currentPage.category) return -1
      if (b.category === currentPage.category && a.category !== currentPage.category) return 1

      // Then by priority
      return a.priority - b.priority
    })
    .slice(0, limit)
}

export function getBreadcrumbs(currentPath: string): PageInfo[] {
  const pathSegments = currentPath.split('/').filter(Boolean)
  const breadcrumbs: PageInfo[] = []

  // Always start with home
  breadcrumbs.push(siteStructure.find(page => page.path === '/') || siteStructure[0])

  // Build path progressively
  let builtPath = ''
  for (const segment of pathSegments) {
    builtPath += '/' + segment
    const page = siteStructure.find(p => p.path === builtPath)
    if (page && page.path !== '/') {
      breadcrumbs.push(page)
    }
  }

  return breadcrumbs
}

export function getPagesByCategory(category: string): PageInfo[] {
  return siteStructure
    .filter(page => page.category === category)
    .sort((a, b) => a.priority - b.priority)
}

export function getPagesByCountry(country: string): PageInfo[] {
  return siteStructure
    .filter(page => page.country === country)
    .sort((a, b) => a.priority - b.priority)
}
