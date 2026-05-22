'use client'

import { useState, useEffect } from 'react'

/*
  Only maxresdefault / sddefault — both are proper HD frames.
  1.jpg/2.jpg are tiny 120×90 YouTube auto-caps — never use for bg.
*/
const SLIDES = [
  {
    img: 'https://img.youtube.com/vi/qwTuLSLvFEc/maxresdefault.jpg',
    fallback: 'https://img.youtube.com/vi/qwTuLSLvFEc/sddefault.jpg',
    label: 'Cap Slitting & Folding',
    speed: '800 caps / min',
  },
  {
    img: 'https://img.youtube.com/vi/eky9XWhB6zc/maxresdefault.jpg',
    fallback: 'https://img.youtube.com/vi/eky9XWhB6zc/sddefault.jpg',
    label: 'Cap Slitting Machine',
    speed: '500 caps / min',
  },
  {
    img: 'https://img.youtube.com/vi/eky9XWhB6zc/hqdefault.jpg',
    fallback: 'https://img.youtube.com/vi/eky9XWhB6zc/sddefault.jpg',
    label: 'Slitting, Folding & Wad Insertion',
    speed: '150 caps / min',
  },
]

const INTERVAL = 4000

export default function ProductsHero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActive(i => (i + 1) % SLIDES.length), INTERVAL)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="ph-hero">

      {/* ── Background slides ── */}
      <div className="ph-bg">
        {SLIDES.map((s, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={s.img}
            src={s.img}
            alt={s.label}
            className={`ph-bg-img${i === active ? ' active' : ''}`}
            aria-hidden="true"
            onError={e => { (e.currentTarget as HTMLImageElement).src = s.fallback }}
          />
        ))}
      </div>

      {/* ── Overlay ── */}
      <div className="ph-overlay" />

      {/* ── Red bottom accent line ── */}
      <div className="ph-accent-line" />

      {/* ── Text content ── */}
      <div className="container ph-inner">

        <div className="ph-text">
          <div className="ph-eyebrow">
            <span className="ph-eyebrow-line" />
            Our Machines
          </div>
          <h1 className="ph-h1">
            Cap &amp; Closure<br /><em>Solutions</em>
          </h1>
          <p className="ph-sub">
            7 machine families &nbsp;·&nbsp; Mumbai-built &nbsp;·&nbsp; ISO Certified
          </p>
        </div>

        {/* Right: current slide info */}
        <div className="ph-active-label">
          <span className="ph-al-name">{SLIDES[active].label}</span>
          <span className="speed-badge">⚡ {SLIDES[active].speed}</span>
        </div>

      </div>

      {/* ── Dots + progress ── */}
      <div className="ph-controls">
        <div className="ph-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`ph-dot${i === active ? ' active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="ph-progress" key={active}>
          <div className="ph-progress-bar" style={{ animationDuration: `${INTERVAL}ms` }} />
        </div>
      </div>

    </div>
  )
}
