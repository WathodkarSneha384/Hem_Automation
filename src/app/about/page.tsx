import type { Metadata } from 'next'
import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { TEAM, SITE } from '@/lib/data'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = buildMetadata({
  title: 'About HEM Automation — Engineering Excellence Since 2005',
  description:
    'Learn about HEM Automation — Mumbai\'s leading cap and closure machine manufacturer since 2005. Meet the team behind 150+ installed machines across India.',
  path: '/about',
  keywords: ['HEM Automation history', 'cap machine manufacturer Mumbai', 'automation company India'],
})

const MILESTONES = [
  { year: '2005', event: 'HEM Automation founded by Mr. R.L. Chitnis in Mumbai' },
  { year: '2008', event: 'First Cap Slitting & Folding Machine delivered to FMCG client' },
  { year: '2012', event: 'Introduced PID-controlled temperature system — industry first at this price point' },
  { year: '2015', event: 'Launched air conveyor system with near-zero maintenance design' },
  { year: '2018', event: 'Crossed 100 machines installed across India' },
  { year: '2020', event: 'Expanded to HMI touchscreen interface on all machine lines' },
  { year: '2023', event: 'Crossed 150 machines installed; began exports to neighbouring markets' },
  { year: '2025', event: 'Launched 5-component SPM assembly platform' },
]

const VALUES = [
  { icon: '🎯', title: 'Precision First', desc: 'Every component is manufactured with exacting tolerances. We don\'t ship a machine unless we\'re confident it will perform flawlessly at your site.' },
  { icon: '🛡️', title: 'Safety by Design', desc: 'Safety enclosures, torque limiters, and interlocks are not add-ons — they\'re engineered into every machine from day one.' },
  { icon: '🔧', title: 'Honest After-Sales', desc: 'We answer the phone. Our after-sales team is responsive, honest about timelines, and committed to getting you back to full production fast.' },
  { icon: '🤝', title: 'Customer Focus', desc: 'We\'ve built our reputation one satisfied customer at a time. We take every enquiry seriously and every installation personally.' },
]

export default function AboutPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: SITE.url },
    { name: 'About', url: `${SITE.url}/about` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-eyebrow">About HEM Automation</div>
          <h1>Engineering <em>Excellence</em><br />Since 2005</h1>
          <p>
            Two decades of building cap and closure machines trusted by India&apos;s leading
            FMCG, pharma, and industrial manufacturers.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }}>
            <div>
              <span className="label">Our Story</span>
              <h2 className="h2">Born from a Passion<br />for <span className="red">Engineering</span></h2>
              <p className="body-lg" style={{ marginTop: 16, marginBottom: 20 }}>
                HEM Automation was founded in 2005 by Mr. R.L. Chitnis — a mechanical engineer
                who saw that India&apos;s packaging industry needed better, more affordable automation.
              </p>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75, marginBottom: 20 }}>
                Starting from a workshop in Mumbai&apos;s Bhandup industrial area, HEM grew by solving
                real production problems — inconsistent slitting, high downtime, quality defects, and
                operator safety risks. Every machine we build is a direct response to a challenge a
                customer told us about.
              </p>
              <p style={{ fontSize: 14, color: '#555', lineHeight: 1.75 }}>
                Today, with 150+ machines installed across India and a team of dedicated engineers,
                we remain a founder-led, customer-first company. Our edge is not just the machines
                we build — it&apos;s the relationships we keep.
              </p>
            </div>
            <div className="stats-grid">
              {[
                { num: '20+', label: 'Years in business', featured: false, wide: false },
                { num: '800', label: 'Caps per minute peak output', featured: true, wide: false },
                { num: '150+', label: 'Machines installed across India', featured: false, wide: false },
                { num: '99%', label: 'Customer satisfaction rate', featured: false, wide: false },
                { num: '3', label: 'Machine families — Slitting · Stamping · SPM', featured: false, wide: true },
              ].map(s => (
                <div className={`scard${s.featured ? ' featured' : ''}${s.wide ? ' wide' : ''}`} key={s.label}>
                  <div className="snum">{s.num}</div>
                  <div className="slbl">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-dark">
        <div className="container">
          <span className="label">Our Values</span>
          <h2 className="h2">What We <span className="red">Stand For</span></h2>
          <div className="quad-grid" style={{ marginTop: 'clamp(32px,4vw,52px)' }}>
            {VALUES.map(v => (
              <div className="pcard" key={v.title}>
                <div className="pcard-icon">{v.icon}</div>
                <div className="pcard-title">{v.title}</div>
                <div className="pcard-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <span className="label">Milestones</span>
          <h2 className="h2">20 Years of <span className="red">Progress</span></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 'clamp(32px,4vw,52px)', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 56, top: 0, bottom: 0, width: 2, background: 'rgba(204,0,0,0.15)' }} />
            {MILESTONES.map(m => (
              <div key={m.year} style={{ display: 'flex', gap: 24, marginBottom: 20, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: 56, textAlign: 'right' }}>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 18, fontWeight: 900, color: 'var(--red)' }}>{m.year}</span>
                </div>
                <div style={{ flexShrink: 0, width: 10, height: 10, borderRadius: '50%', background: 'var(--red)', marginTop: 4, position: 'relative', zIndex: 1, marginLeft: 2 }} />
                <div style={{ flex: 1, fontSize: 14, color: '#444', lineHeight: 1.65, paddingBottom: 4 }}>{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section-dark" id="team">
        <div className="container">
          <span className="label">Our Team</span>
          <h2 className="h2">The People Behind <span className="red">The Machines</span></h2>
          <div className="team-grid">
            {TEAM.map(member => (
              <div className="teamcard" key={member.initials}>
                <div className="team-avatar">{member.initials}</div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <div className="team-bio">{member.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}

