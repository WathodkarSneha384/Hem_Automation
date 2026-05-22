import type { Metadata } from 'next'
import './globals.css'
import TopBar from '@/components/TopBar'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { organizationSchema, localBusinessSchema } from '@/lib/seo'
import { SITE } from '@/lib/data'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'HEM Automation — Precision Cap & Closure Automation, Mumbai',
    template: '%s | HEM Automation',
  },
  description:
    'HEM Automation engineers cap slitting, folding, hot stamping, wad insertion, and SPM machines for FMCG, pharma, and industrial packaging in Mumbai. Est. 2005, ISO certified.',
  keywords: [
    'cap slitting machine',
    'cap folding machine',
    'hot stamping machine Mumbai',
    'wad insertion machine',
    'flip top closing machine',
    'special purpose machine',
    'cap closure automation India',
    'FMCG packaging machine',
    'pharma cap machine',
    'HEM Automation Mumbai',
  ],
  authors: [{ name: 'HEM Automation', url: SITE.url }],
  creator: 'HEM Automation',
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: '/icon.png',
    shortcut: '/icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: 'HEM Automation',
    title: 'HEM Automation — Precision Cap & Closure Automation',
    description:
      'Engineering post-moulding solutions — slitting, folding, assembly & hot stamping — with unmatched speed, safety & reliability. Mumbai, India.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'HEM Automation — Cap & Closure Machines',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEM Automation — Precision Cap & Closure Automation',
    description:
      'Engineering post-moulding cap and closure solutions from Mumbai since 2005.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
