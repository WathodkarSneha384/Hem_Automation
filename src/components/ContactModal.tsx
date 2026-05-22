'use client'

import { useEffect, useRef, useState } from 'react'

interface Props {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { onClose(); setSubmitted(false) }, 4200)
  }

  function bgClose(e: React.MouseEvent) {
    if (e.target === overlayRef.current) onClose()
  }

  return (
    <div
      className={`modal-overlay${open ? ' open' : ''}`}
      ref={overlayRef}
      onClick={bgClose}
    >
      <div className="modal-box">
        <div className="modal-top">
          <button className="modal-close" onClick={onClose}>×</button>
          <div className="modal-h">Get a Free<br />Automation Audit</div>
          <div className="modal-sub">Tell us your challenge — we will respond within 24 hours with a tailored solution.</div>
        </div>
        <div className="modal-body">
          {submitted ? (
            <div className="msuccess" style={{ display: 'block' }}>
              <div className="msuccess-icon">✅</div>
              <div className="msuccess-title">Enquiry Sent!</div>
              <div className="msuccess-msg">
                Thank you! Our team will respond within 24 hours.<br />
                Urgent? Call <strong>+91 97697 11529</strong>
              </div>
            </div>
          ) : (
            <form className="mform" onSubmit={handleSubmit}>
              <div className="mrow">
                <div className="mgroup">
                  <label>Your Name *</label>
                  <input type="text" placeholder="Rajesh Kumar" required />
                </div>
                <div className="mgroup">
                  <label>Company Name *</label>
                  <input type="text" placeholder="ABC Packaging Pvt. Ltd." required />
                </div>
              </div>
              <div className="mrow">
                <div className="mgroup">
                  <label>Phone Number *</label>
                  <input type="tel" placeholder="+91 98765 43210" required />
                </div>
                <div className="mgroup">
                  <label>Email Address</label>
                  <input type="email" placeholder="you@company.com" />
                </div>
              </div>
              <div className="mgroup">
                <label>Machine Interest</label>
                <select>
                  <option value="">Select a machine type...</option>
                  <option>Cap Slitting &amp; Folding Machine</option>
                  <option>Cap Slitting Machine Only</option>
                  <option>Slitting + Folding + Wad Insertion (Combo)</option>
                  <option>Hot Stamping Machine</option>
                  <option>Flip Top Closing Machine</option>
                  <option>Special Purpose Machine (Custom SPM)</option>
                  <option>Not Sure — Need Consultation</option>
                </select>
              </div>
              <div className="mrow">
                <div className="mgroup">
                  <label>Current Output</label>
                  <input type="text" placeholder="e.g. 200 caps/min or manual" />
                </div>
                <div className="mgroup">
                  <label>Target Output</label>
                  <input type="text" placeholder="e.g. 600+ caps/min" />
                </div>
              </div>
              <div className="mgroup">
                <label>Tell Us Your Challenge</label>
                <textarea placeholder="Describe your current production issue, what you're trying to solve, or any specific requirements..." />
              </div>
              <button type="submit" className="msubmit">Send Enquiry — Get Free Audit →</button>
              <div className="mnote">🔒 No spam · No obligation · Response within 24 hours · Mumbai-based team</div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
