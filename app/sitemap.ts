// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://stenth.com';
  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/stenth`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // add other important URLs here
  ];
}
