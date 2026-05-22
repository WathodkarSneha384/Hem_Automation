'use client'

import { useState } from 'react'
import ContactModal from './ContactModal'

const VIDEO_ID = 'qwTuLSLvFEc'
const EMBED_SRC =
  `https://www.youtube.com/embed/${VIDEO_ID}` +
  `?autoplay=1&mute=1&loop=1&controls=0&playlist=${VIDEO_ID}` +
  `&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&iv_load_policy=3`

const STATS = [
  { icon: '⚡', num: '800', unit: '/min', label: 'Peak Cap Output' },
  { icon: '🏭', num: '20',  unit: '+',    label: 'Years in Business' },
  { icon: '🔩', num: '150', unit: '+',    label: 'Machines Installed' },
  { icon: '✅', num: '99',  unit: '%',    label: 'Client Satisfaction' },
]

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="hero" id="home">

        {/* ── Split layout ── */}
        <div className="container" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <div className="hero-split">

            {/* ─── LEFT: text content ─── */}
            <div className="hero-left">

              {/* Location chip */}
              <div className="hero-chip">
                <span className="hero-chip-dot" />
                <span className="hero-chip-text">Mumbai, India &nbsp;·&nbsp; Est. 2005 &nbsp;·&nbsp; ISO Certified</span>
              </div>

              {/* Category label */}
              <span className="hero-cat">Cap &amp; Closure Machinery</span>

              {/* Headline */}
              <h1 className="hero-h1">
                Engineering<br />
                <em>Precision</em><br />
                Automation
              </h1>

              {/* Sub-copy */}
              <p className="hero-p">
                India&apos;s trusted manufacturer of cap slitting, folding, hot stamping
                &amp; custom SPM machines — powering 150+ FMCG and pharma lines since 2005.
              </p>

              {/* CTAs */}
              <div className="hero-actions">
                <a className="btn btn-primary btn-lg" href="/products">
                  Explore Machines &nbsp;→
                </a>
                <button
                  className="btn btn-outline-white btn-lg"
                  onClick={() => setModalOpen(true)}
                >
                  Get Free Audit
                </button>
              </div>
            </div>

            {/* ─── RIGHT: video panel ─── */}
            <div className="hero-right">
              <div className="hero-video-panel">

                {/* 16:9 video */}
                <div className="hero-video-wrap">
                  <iframe
                    src={EMBED_SRC}
                    title="HEM Automation – Cap & Closure Machinery"
                    allow="autoplay; encrypted-media"
                    allowFullScreen={false}
                    aria-hidden="true"
                  />
                </div>

                {/* Floating stat badges */}
                <div className="hvp-stat hvp-stat-tl">
                  <span className="hvp-num">800</span>
                  <span className="hvp-lbl">Caps / Min</span>
                </div>
                <div className="hvp-stat hvp-stat-br">
                  <span className="hvp-num">ISO</span>
                  <span className="hvp-lbl">9001 : 2015</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ── Full-width stats strip ── */}
        <div className="hero-stats-strip">
          {STATS.map((s, i) => (
            <div className="hstat" key={i}>
              <span className="hstat-icon">{s.icon}</span>
              <div className="hstat-body">
                <div className="hstat-n">{s.num}<em>{s.unit}</em></div>
                <div className="hstat-l">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="hero-scroll">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>

      </section>

      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
