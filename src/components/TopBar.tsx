import { SITE } from '@/lib/data'

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <div className="topbar-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.93v1.99z" />
            </svg>
            <a href={`tel:${SITE.phone1}`}>{SITE.phone1}</a>
          </div>
          <div className="topbar-dot" />
          <div className="topbar-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
          <div className="topbar-dot" />
          <div className="topbar-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
              <circle cx="12" cy="12" r="10" />
              <polyline points="12,6 12,12 16,14" />
            </svg>
            <span>Mon – Sat &nbsp;·&nbsp; 9 AM – 6 PM IST</span>
          </div>
        </div>
        <div className="topbar-right">
          <span className="topbar-cert">✓ &nbsp;ISO Certified</span>
          <span className="topbar-cert">🇮🇳 &nbsp;Made in India</span>
        </div>
      </div>
    </div>
  )
}
