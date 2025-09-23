// app/sitemap.ts - Enhanced version with debugging
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.stenth.com';
  const lastModified = new Date();

  // Log for debugging (will show in build logs)
  console.log('Generating sitemap with baseUrl:', baseUrl);
  console.log('Last modified:', lastModified.toISOString());

  const sitemapEntries: MetadataRoute.Sitemap = [
    // Main Pages
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    
    // High-Value Action Pages
    {
      url: `${baseUrl}/book`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/start`,
      lastModified,
      changeFrequency: 'weekly', 
      priority: 0.9,
    },

    // About/FAQ Page (Good for SEO with structured data)
    {
      url: `${baseUrl}/stenth`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Service Pages (Important for SEO)
    {
      url: `${baseUrl}/services/branding`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ads`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/seo`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/content`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/web`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/analytics`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Portfolio Case Studies (Great for SEO)
    {
      url: `${baseUrl}/portfolio/stenth-x`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/retail-boost`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio/leadgen-saas`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // CANADA - Country Homepage
    {
      url: `${baseUrl}/ca/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // CANADA - Contact & Case Studies
    {
      url: `${baseUrl}/ca/contact/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ca/case-studies/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // CANADA - Major City SEO Services (Tier 1)
    {
      url: `${baseUrl}/ca/seo-services-toronto/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ca/seo-services-montreal/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ca/seo-services-vancouver/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // CANADA - Tier 2 Cities
    {
      url: `${baseUrl}/ca/seo-services-calgary/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ca/seo-services-ottawa/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // CANADA - National Service Pages
    {
      url: `${baseUrl}/ca/google-ads-canada/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ca/google-ads-management-canada/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ca/social-media-marketing-canada/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ca/web-design-canada/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ca/content-marketing-canada/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ca/ecommerce-seo-canada/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ca/technical-seo-audit-canada/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ca/link-building-services-canada/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ca/seo-for-law-firms-canada/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ca/google-ads-toronto/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/ca/google-ads-vancouver/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // AUSTRALIA - Country Homepage
    {
      url: `${baseUrl}/au/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // AUSTRALIA - Contact & Case Studies
    {
      url: `${baseUrl}/au/contact/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/au/case-studies/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // AUSTRALIA - Major City SEO Services (Tier 1)
    {
      url: `${baseUrl}/au/seo-services-sydney/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/au/seo-services-melbourne/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // AUSTRALIA - Tier 2 Cities
    {
      url: `${baseUrl}/au/seo-services-brisbane/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/au/seo-services-perth/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // AUSTRALIA - National Service Pages
    {
      url: `${baseUrl}/au/google-ads-australia/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/au/social-media-marketing-australia/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/au/web-design-australia/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/au/content-marketing-australia/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/au/ecommerce-seo-australia/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/au/technical-seo-audit-australia/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/au/link-building-services-australia/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/au/seo-for-tradies-australia/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/au/google-ads-sydney/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/au/google-ads-melbourne/`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  console.log(`Sitemap generated with ${sitemapEntries.length} entries`);
  return sitemapEntries;
}
