'use client'

import { useState } from 'react'
import Carousel from './Carousel'
import ContactModal from './ContactModal'
import { PRODUCTS } from '@/lib/data'

export default function ProductsSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="section" id="products">
        <div className="container">
          <div className="sec-head">
            <div>
              <span className="label">Our Machines</span>
              <h2 className="h2">Cap &amp; Closure <span className="red">Solutions</span></h2>
            </div>
            <button className="btn btn-ghost btn-sm" onClick={() => setModalOpen(true)}>
              Request Specs →
            </button>
          </div>
          <Carousel id="prodTrack">
            {PRODUCTS.map(p => (
              <div className="prodcard" key={p.slug}>
                {/* Image / thumbnail */}
                <div className="prodcard-img">
                  {p.videoId ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={`https://img.youtube.com/vi/${p.videoId}/maxresdefault.jpg`}
                      alt={p.name}
                      className="prodcard-thumb"
                      loading="lazy"
                    />
                  ) : (
                    <div className="prodcard-icon-bg">
                      <span className="prodcard-icon">{p.icon}</span>
                    </div>
                  )}
                  {p.tag && <span className="prodcard-tag">{p.tag}</span>}
                </div>

                <div className="prodcard-body">
                  <div className="prodcard-name">{p.name}</div>
                  <div className="prodcard-desc">{p.shortDesc}</div>
                  <div className="speed-badge">⚡ {p.speed}</div>
                </div>
              </div>
            ))}
          </Carousel>
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <a className="btn btn-primary" href="/products">View All Machines →</a>
          </div>
        </div>
      </section>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
