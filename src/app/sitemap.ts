import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/industries`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/case-studies`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
  ]
}
