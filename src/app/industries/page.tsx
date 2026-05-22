import type { Metadata } from 'next'
import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { INDUSTRIES, SITE } from '@/lib/data'
import CTABand from '@/components/CTABand'
import CaseStudiesSection from '@/components/CaseStudiesSection'

export const metadata: Metadata = buildMetadata({
  title: 'Industries We Serve',
  description:
    'HEM Automation serves FMCG, pharmaceutical, adhesive, chemical, and industrial packaging industries with precision cap and closure automation machines.',
  path: '/industries',
  keywords: ['FMCG packaging automation', 'pharma cap machine', 'adhesive packaging machine', 'industrial SPM'],
})

const INDUSTRY_DETAILS = [
  {
    slug: 'fmcg-pharma',
    badge: 'FMCG & Pharma',
    headline: 'Tamper-Evident & Decorated Cap Solutions',
    desc: 'FMCG and pharmaceutical brands demand consistent tamper-evident bands, precision folding, and decorated closures — at scale. HEM Automation machines deliver up to 800 caps per minute with zero compromise on quality, meeting all regulatory requirements for tamper-proofing.',
    icon: '🧴',
    bg: 'linear-gradient(145deg,#0A3D1F 0%,#1B6B3A 50%,#0D2E17 100%)',
    machines: ['Cap Slitting & Folding Machine', 'Cap Slitting Machine', 'Hot Stamping Machine'],
    useCases: [
      'Tamper-evident band formation for FMCG caps',
      'Regulatory-compliant folding for pharma packaging',
      'Full-circumference decoration for branded closures',
      'High-speed production at 500–800 caps/min',
    ],
  },
  {
    slug: 'industrial',
    badge: 'Industrial',
    headline: 'Custom SPM for Multi-Component Assembly',
    desc: 'Industrial packaging lines often require multi-component assembly that off-the-shelf machines cannot handle. Our Special Purpose Machines are engineered to your exact specification — 2 to 5-component closure assembly with full after-sales support.',
    icon: '🏭',
    bg: 'linear-gradient(145deg,#1A0A00 0%,#5C2200 50%,#8B3300 100%)',
    machines: ['Special Purpose Machines (SPM)', 'Slitting, Folding & Wad Insertion Combo'],
    useCases: [
      '2 to 5-component closure assembly',
      'Cutting and closure integration on one machine',
      'Custom output tailored to production requirements',
      'Full design, build, and after-sales by HEM',
    ],
  },
  {
    slug: 'adhesives-chemicals',
    badge: 'Adhesives & Chemicals',
    headline: 'Nozzle Lid & Flip-Top Assembly Lines',
    desc: 'Adhesive and chemical product packaging requires precision nozzle lid assembly, flip-top closing, and wad insertion. HEM\'s combo machines handle these in a single pass — reducing footprint, handoffs, and failure points on your line.',
    icon: '🔬',
    bg: 'linear-gradient(145deg,#060A2E 0%,#1A2570 50%,#0D1550 100%)',
    machines: ['Flip Top Closing Machine', 'Slitting, Folding & Wad Insertion Combo', 'Special Purpose Machines'],
    useCases: [
      'Nozzle lid assembly (e.g. Fevistick-style)',
      'Flip-top cap closing at 150/min',
      'Wad insertion with slitting in one pass',
      'Adhesive packaging line integration',
    ],
  },
]

export default function IndustriesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: SITE.url },
    { name: 'Industries', url: `${SITE.url}/industries` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-eyebrow">Industries We Serve</div>
          <h1>Built for <em>Your</em> Industry</h1>
          <p>
            From FMCG and pharma to adhesives, chemicals, and industrial assembly —
            every HEM machine is engineered to your production reality.
          </p>
        </div>
      </div>

      {INDUSTRY_DETAILS.map((ind, i) => (
        <section
          key={ind.slug}
          id={ind.slug}
          className="section"
          style={{ background: i % 2 === 1 ? '#F2F2F2' : '#fff' }}
        >
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(32px,5vw,72px)', alignItems: 'start' }}>
              <div>
                <div
                  style={{
                    borderRadius: 'var(--r-xl)',
                    overflow: 'hidden',
                    minHeight: 280,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: ind.bg,
                  }}
                >
                  <div style={{ fontSize: 96, opacity: 0.25 }}>{ind.icon}</div>
                  <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                    <span className="ind-badge">{ind.badge}</span>
                  </div>
                </div>
              </div>
              <div>
                <span className="label">{ind.badge}</span>
                <h2 className="h2" style={{ marginBottom: 16 }}>{ind.headline}</h2>
                <p className="body-lg" style={{ marginBottom: 24 }}>{ind.desc}</p>

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: 10 }}>
                    Key Use Cases
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {ind.useCases.map(u => (
                      <li key={u} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, color: '#444' }}>
                        <span style={{ color: 'var(--red)', fontWeight: 700, flexShrink: 0 }}>✓</span> {u}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: 10 }}>
                    Recommended Machines
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {ind.machines.map(m => (
                      <span
                        key={m}
                        style={{ background: 'rgba(204,0,0,0.08)', border: '1px solid rgba(204,0,0,0.2)', borderRadius: 'var(--r-sm)', padding: '5px 12px', fontSize: 11, fontWeight: 600, color: 'var(--red)' }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <a href="/contact" className="btn btn-primary">Get Industry Solution →</a>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CaseStudiesSection />
      <CTABand />
    </>
  )
}

