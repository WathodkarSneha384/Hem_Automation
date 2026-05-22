'use client'

import Carousel from './Carousel'
import { TESTIMONIALS } from '@/lib/data'

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <span className="label">Client Reviews</span>
        <h2 className="h2">What Our <span className="red">Clients Say</span></h2>

        <div className="rating-bar">
          <div className="rating-big">
            <div className="rbig-num">4.3</div>
            <div className="rbig-stars">★★★★☆</div>
            <div className="rbig-count">6+ verified reviews</div>
          </div>
          <div className="rbar-section">
            {[
              { label: '5 ★', pct: 72, count: 4 },
              { label: '4 ★', pct: 18, count: 1 },
              { label: '3 ★', pct: 9, count: 1 },
              { label: '2 ★', pct: 0, count: 0 },
              { label: '1 ★', pct: 0, count: 0 },
            ].map(r => (
              <div className="rbar-row" key={r.label}>
                <span className="rbar-lbl">{r.label}</span>
                <div className="rbar-track">
                  <div className="rbar-fill" style={{ width: `${r.pct}%` }} />
                </div>
                <span className="rbar-ct">{r.count}</span>
              </div>
            ))}
          </div>
          <div className="rsources">
            {[
              { name: 'Justdial', stars: '★★★★☆', val: '4.3' },
              { name: 'IndiaMart', stars: '★★★★★', val: '4.5' },
              { name: 'Google', stars: '★★★★☆', val: '4.2' },
            ].map(s => (
              <div className="rsrc" key={s.name}>
                <div>
                  <div className="rsrc-name">{s.name}</div>
                  <div className="rsrc-stars">{s.stars}</div>
                </div>
                <div className="rsrc-val">{s.val}</div>
              </div>
            ))}
          </div>
        </div>

        <Carousel id="testTrack">
          {TESTIMONIALS.map(t => (
            <div className="tcard" key={t.initials + t.name}>
              <div className="tcard-text">{t.text}</div>
              <div className="tcard-author">
                <div className="tavatar">{t.initials}</div>
                <div>
                  <div className="tname">{t.name}</div>
                  <div className="tco">{t.company}</div>
                  <div className="tstars">{'★'.repeat(t.stars)}{'☆'.repeat(5 - t.stars)}</div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <a
            href="https://www.justdial.com/Mumbai/Hem-Automation-Opposite-Bhaktani-Industrial-Estate-Near-Asian-Paints-Bhandup-West/022PXX22-XX22-211019182235-L2F2_BZDET"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 12, color: '#777', borderBottom: '1px solid rgba(0,0,0,0.2)', paddingBottom: 2 }}
          >
            View all reviews on Justdial →
          </a>
        </div>
      </div>
    </section>
  )
}

