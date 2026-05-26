'use client'

import { useState, useRef } from 'react'
import { SITE } from '@/lib/data'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [status, setStatus]   = useState<Status>('idle')
  const [errMsg, setErrMsg]   = useState('')
  const formRef               = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrMsg('')

    const fd = new FormData(e.currentTarget)
    const payload = {
      name:          fd.get('name')          as string,
      company:       fd.get('company')       as string,
      phone:         fd.get('phone')         as string,
      email:         fd.get('email')         as string,
      machine:       fd.get('machine')       as string,
      currentOutput: fd.get('currentOutput') as string,
      targetOutput:  fd.get('targetOutput')  as string,
      challenge:     fd.get('challenge')     as string,
    }

    try {
      const res  = await fetch('/api/enquiry', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(payload),
      })
      const json = await res.json()

      if (!res.ok) {
        setErrMsg(json.error || 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('success')
      formRef.current?.reset()
    } catch {
      setErrMsg('Network error — please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <>
      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-eyebrow">Get In Touch</div>
          <h1>Contact <em>HEM Automation</em></h1>
          <p>
            Ready to automate? Tell us your production challenge and we&apos;ll respond within 24 hours
            with a tailored solution.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">

            {/* ── Info ── */}
            <div>
              <div className="contact-info-card">
                <div className="contact-info-title">Contact Information</div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div>
                    <div className="contact-item-label">Phone</div>
                    <div className="contact-item-value">
                      <a href={`tel:${SITE.phone1}`} style={{ color: 'inherit' }}>{SITE.phone1}</a><br />
                      <a href={`tel:${SITE.phone2}`} style={{ color: 'inherit' }}>{SITE.phone2}</a>
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div>
                    <div className="contact-item-label">Email</div>
                    <div className="contact-item-value">
                      <a href={`mailto:${SITE.email}`} style={{ color: 'inherit' }}>{SITE.email}</a>
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-item-label">Bhandup Plant</div>
                    <div className="contact-item-value">
                      <a href={SITE.address1.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        {SITE.address1.full}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-item-label">Navi Mumbai Office</div>
                    <div className="contact-item-value">
                      <a href={SITE.address2.mapsUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                        {SITE.address2.full}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="contact-item" style={{ border: 'none', marginBottom: 0, paddingBottom: 0 }}>
                  <div className="contact-icon">🕐</div>
                  <div>
                    <div className="contact-item-label">Working Hours</div>
                    <div className="contact-item-value">Monday – Saturday<br />9:00 AM – 6:00 PM IST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Form ── */}
            <div className="contact-form-card">
              <div className="contact-form-title">Send an Enquiry</div>
              <div className="contact-form-sub">Free consultation · Response within 24 hours</div>

              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>✅</div>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 26, fontWeight: 900, textTransform: 'uppercase', marginBottom: 10 }}>
                    Enquiry Sent!
                  </div>
                  <div style={{ fontSize: 14, color: '#666', lineHeight: 1.7 }}>
                    Thank you! Our team will respond within 24 hours.<br />
                    Urgent? Call <strong>{SITE.phone1}</strong>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    style={{ marginTop: 20, background: 'none', border: '1px solid #ddd', borderRadius: 6, padding: '8px 20px', fontSize: 13, cursor: 'pointer', color: '#555' }}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form className="mform" ref={formRef} onSubmit={handleSubmit}>
                  <div className="mrow">
                    <div className="mgroup">
                      <label>Your Name *</label>
                      <input name="name" type="text" placeholder="Rajesh Kumar" required />
                    </div>
                    <div className="mgroup">
                      <label>Company Name *</label>
                      <input name="company" type="text" placeholder="ABC Packaging Pvt. Ltd." required />
                    </div>
                  </div>
                  <div className="mrow">
                    <div className="mgroup">
                      <label>Phone Number *</label>
                      <input name="phone" type="tel" placeholder="+91 98765 43210" required />
                    </div>
                    <div className="mgroup">
                      <label>Email Address</label>
                      <input name="email" type="email" placeholder="you@company.com" />
                    </div>
                  </div>
                  <div className="mgroup">
                    <label>Machine Interest</label>
                    <select name="machine">
                      <option value="">Select a machine type...</option>
                      <option>Cap Slitting &amp; Folding Machine</option>
                      <option>Cap Slitting Machine Only</option>
                      <option>Slitting + Folding + Wad Insertion (Combo)</option>
                      <option>Hot Stamping Machine</option>
                      <option>Lacquering Machine</option>
                      <option>Flip Top Closing Machine</option>
                      <option>Special Purpose Machine (Custom SPM)</option>
                      <option>Not Sure — Need Consultation</option>
                    </select>
                  </div>
                  <div className="mrow">
                    <div className="mgroup">
                      <label>Current Output</label>
                      <input name="currentOutput" type="text" placeholder="e.g. 200 caps/min or manual" />
                    </div>
                    <div className="mgroup">
                      <label>Target Output</label>
                      <input name="targetOutput" type="text" placeholder="e.g. 600+ caps/min" />
                    </div>
                  </div>
                  <div className="mgroup">
                    <label>Tell Us Your Challenge</label>
                    <textarea
                      name="challenge"
                      placeholder="Describe your current production issue, what you're trying to solve, or any specific requirements..."
                    />
                  </div>

                  {status === 'error' && (
                    <div style={{ background: 'rgba(204,0,0,0.07)', border: '1px solid rgba(204,0,0,0.25)', borderRadius: 6, padding: '10px 14px', fontSize: 13, color: '#cc0000', marginBottom: 12 }}>
                      ⚠️ {errMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="msubmit"
                    disabled={status === 'loading'}
                    style={{ opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}
                  >
                    {status === 'loading' ? 'Sending…' : 'Send Enquiry — Get Free Audit →'}
                  </button>
                  <div className="mnote">🔒 No spam · No obligation · Response within 24 hours · Mumbai-based team</div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
