'use client'

import { useState } from 'react'
import ContactModal from './ContactModal'

export default function CTABand() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="cta-band" id="audit">
        <div className="container cta-inner">
          <div className="cta-h">Get Your <em>Free</em><br />Automation Audit</div>
          <div className="cta-p">
            Tell us your current cap output and challenges — we&apos;ll show you exactly how much you can save.
          </div>
          <div className="cta-form">
            <input className="cta-input" type="text" placeholder="Your name" />
            <input className="cta-input" type="text" placeholder="Company name" />
            <input className="cta-input" type="tel" placeholder="Phone number" />
            <button className="btn btn-primary" onClick={() => setModalOpen(true)}>
              Request Free Audit →
            </button>
          </div>
          <div className="cta-note">No obligation · Response within 24 hours · Mumbai-based team</div>
        </div>
      </div>
      <ContactModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
