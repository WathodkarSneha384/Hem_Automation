import type { Metadata } from 'next'
import { SITE } from './data'

const BASE_URL = SITE.url

export const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`

export function buildMetadata(opts: {
  title: string
  description: string
  path?: string
  ogImage?: string
  keywords?: string[]
}): Metadata {
  const { title, description, path = '', ogImage = DEFAULT_OG_IMAGE, keywords = [] } = opts
  const url = `${BASE_URL}${path}`

  return {
    title: `${title} | HEM Automation`,
    description,
    keywords: [
      'cap slitting machine',
      'cap folding machine',
      'hot stamping machine',
      'wad insertion machine',
      'flip top closing machine',
      'special purpose machine',
      'automation Mumbai',
      'cap closure automation',
      'FMCG packaging automation',
      'pharma cap machine',
      ...keywords,
    ],
    authors: [{ name: 'HEM Automation', url: BASE_URL }],
    creator: 'HEM Automation',
    publisher: 'HEM Automation',
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      title: `${title} | HEM Automation`,
      description,
      siteName: 'HEM Automation',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: 'en_IN',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | HEM Automation`,
      description,
      images: [ogImage],
    },
  }
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HEM Automation',
    url: BASE_URL,
    logo: SITE.logoUrl,
    foundingDate: String(SITE.founded),
    description: SITE.description,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phone1,
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Marathi'],
      },
    ],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: 'Plot 1044, Bhandup Sonapur Lane, Off LBS Marg',
        addressLocality: 'Mumbai',
        addressRegion: 'Maharashtra',
        postalCode: '400078',
        addressCountry: 'IN',
      },
    ],
    sameAs: [SITE.youtube, SITE.instagram],
  }
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}#localbusiness`,
    name: 'HEM Automation',
    url: BASE_URL,
    telephone: SITE.phone1,
    email: SITE.email,
    image: SITE.logoUrl,
    description: SITE.description,
    priceRange: '₹₹₹',
    currenciesAccepted: 'INR',
    openingHours: 'Mo-Sa 09:00-18:00',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Plot 1044, Bhandup Sonapur Lane, Off LBS Marg, Bhandup West',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      postalCode: '400078',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '19.1461',
      longitude: '72.9371',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.3',
      reviewCount: '6',
      bestRating: '5',
    },
  }
}

export function productSchema(product: {
  name: string
  description: string
  slug: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    url: `${BASE_URL}/products#${product.slug}`,
    brand: {
      '@type': 'Brand',
      name: 'HEM Automation',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'HEM Automation',
      url: BASE_URL,
    },
    category: 'Industrial Machinery',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: { '@type': 'Organization', name: 'HEM Automation' },
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
