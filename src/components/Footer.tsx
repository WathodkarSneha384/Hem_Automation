import Link from 'next/link'
import { SITE } from '@/lib/data'

const PRODUCT_LINKS = [
  { href: '/products#cap-slitting-folding', label: 'Cap Slitting & Folding' },
  { href: '/products#hot-stamping', label: 'Hot Stamping Machine' },
  { href: '/products#flip-top-closing', label: 'Flip Top Closing' },
  { href: '/products#slitting-folding-wad-insertion', label: 'Wad Insertion Machine' },
  { href: '/products#special-purpose-machines', label: 'SPM Assembly' },
]

const INDUSTRY_LINKS = [
  { href: '/industries#fmcg-pharma', label: 'FMCG & Pharma' },
  { href: '/industries#adhesives-chemicals', label: 'Adhesives & Chemicals' },
  { href: '/industries', label: 'Beverage Packaging' },
  { href: '/industries#industrial', label: 'Industrial Assembly' },
]

const COMPANY_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/about#team', label: 'Our Team' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
]

const CERTS = [
  'ISO 9001:2015 Certified',
  'Made in India 🇮🇳',
  '20+ Years Experience',
  'Mumbai-Based Team',
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="container">

          {/* ── Main grid ── */}
          <div className="footer-grid">

            {/* Brand column */}
            <div className="footer-brand">
              {/* Logo on white pill so it's always visible */}
              <div className="footer-logo-wrap">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={SITE.logoUrl}
                  alt="HEM Automation"
                  className="footer-logo-img"
                />
              </div>

              <p className="footer-tagline">
                Engineering precision cap &amp; closure automation solutions
                from Mumbai since 2005. Quality, safety, and customer
                satisfaction — always.
              </p>

              {/* Contact rows */}
              <div className="footer-contact">
                <div className="fci">
                  <span className="fci-icon">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C9.61 21 3 14.39 3 6a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z"/>
                    </svg>
                  </span>
                  <span>
                    <a href={`tel:${SITE.phone1}`}>{SITE.phone1}</a>
                    {' · '}
                    <a href={`tel:${SITE.phone2}`}>{SITE.phone2}</a>
                  </span>
                </div>
                <div className="fci">
                  <span className="fci-icon">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </span>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </div>
              </div>

              {/* Address cards */}
              <div className="footer-addrs">
                <a
                  className="faddr"
                  href={SITE.address1.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="faddr-label">
                    {SITE.address1.label}
                    <span className="map-icon">Open ↗</span>
                  </div>
                  <div className="faddr-text">{SITE.address1.full}</div>
                </a>
                <a
                  className="faddr"
                  href={SITE.address2.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="faddr-label">
                    {SITE.address2.label}
                    <span className="map-icon">Open ↗</span>
                  </div>
                  <div className="faddr-text">{SITE.address2.full}</div>
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <div className="fcol-title">Products</div>
              <ul className="flinks">
                {PRODUCT_LINKS.map(l => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <div className="fcol-title">Industries</div>
              <ul className="flinks">
                {INDUSTRY_LINKS.map(l => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <div className="fcol-title">Company</div>
              <ul className="flinks">
                {COMPANY_LINKS.map(l => (
                  <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Certification strip ── */}
          <div className="footer-cert-strip">
            {CERTS.map(cert => (
              <span className="fcert" key={cert}>
                <span className="fcert-dot" />
                {cert}
              </span>
            ))}
          </div>

          {/* ── Bottom bar ── */}
          <div className="footer-bottom">
            <div className="fcopy">
              © {new Date().getFullYear()} HEM Automation. All rights reserved. Mumbai, India.
            </div>

            <div className="social-icons">
              <a className="sicon yt" href={SITE.youtube} target="_blank" rel="noopener noreferrer" title="YouTube">
                <svg viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a className="sicon ig" href={SITE.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a className="sicon li" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>

            <div className="flegals">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/sitemap.xml">Sitemap</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
