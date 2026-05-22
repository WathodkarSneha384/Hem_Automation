'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import ContactModal from './ContactModal'
import { SITE } from '@/lib/data'

const NAV_LINKS = [
  { href: '/products', label: 'Products' },
  { href: '/industries', label: 'Industries' },
  { href: '/about', label: 'Why HEM' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SITE.logoUrl} alt="HEM Automation" className="nav-logo-img" />
          </Link>

          <ul className="nav-links">
            {NAV_LINKS.map(l => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <Link href="/contact" className="btn btn-ghost btn-sm">Contact</Link>
            <button className="btn btn-primary btn-sm" onClick={() => setModalOpen(true)}>
              Free Audit
            </button>
          </div>

          <button
            className={`hamburger${drawerOpen ? ' open' : ''}`}
            onClick={() => setDrawerOpen(o => !o)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <div className={`mobile-drawer${drawerOpen ? ' open' : ''}`}>
        <div className="mob-header">
          <div className="mob-title">Navigation</div>
        </div>
        {NAV_LINKS.map(l => (
          <Link
            key={l.href}
            href={l.href}
            className="mob-link"
            onClick={() => setDrawerOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <div className="mob-cta">
          <Link
            href="/contact"
            className="btn btn-outline-white"
            style={{ justifyContent: 'center' }}
            onClick={() => setDrawerOpen(false)}
          >
            Contact Us
          </Link>
          <button
            className="btn btn-primary"
            style={{ justifyContent: 'center' }}
            onClick={() => { setDrawerOpen(false); setModalOpen(true) }}
          >
            Free Automation Audit →
          </button>
        </div>
        <div className="mob-contact">
          <div className="mob-contact-item">
            📞 <a href="tel:+919769711529">+91 97697 11529</a>
          </div>
          <div className="mob-contact-item">
            ✉️ <a href="mailto:hemautomation@gmail.com">hemautomation@gmail.com</a>
          </div>
        </div>
      </div>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
