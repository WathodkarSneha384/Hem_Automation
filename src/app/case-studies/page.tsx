import type { Metadata } from 'next'
import { buildMetadata, breadcrumbSchema } from '@/lib/seo'
import { CASE_STUDIES, SITE } from '@/lib/data'
import CTABand from '@/components/CTABand'

export const metadata: Metadata = buildMetadata({
  title: 'Case Studies — Real Results',
  description:
    'See how HEM Automation helped manufacturers cut rejection rates, triple output, and achieve ROI within 18 months. Real case studies from FMCG, pharma, and industrial clients.',
  path: '/case-studies',
  keywords: ['automation case study India', 'cap machine ROI', 'FMCG packaging results'],
})

const EXTENDED_CASES = [
  {
    ...CASE_STUDIES[0],
    context:
      'Fevistick and Stella Industries needed a 5-component SPM to assemble nozzle lids at scale. Manual assembly was creating a 12% rejection rate due to misalignment and operator variability.',
    solution:
      'HEM designed and built a custom Special Purpose Machine that automated the full nozzle lid assembly in a single pass. The machine included vision-guided component placement and auto-rejection of defective units.',
    timeline: '14 weeks from order to commissioning',
  },
  {
    ...CASE_STUDIES[1],
    context:
      'A Mumbai-based pharma cap manufacturer was failing batch compliance checks due to inconsistent tamper-evident band formation. Each non-conforming batch was being returned by their pharma clients — costing ₹8L annually.',
    solution:
      'HEM\'s Cap Slitting & Folding Machine with PID-controlled blade temperature replaced their manual process. Consistent blade heat eliminated the variance that was causing band formation failures.',
    timeline: '6 weeks from order to full production',
  },
  {
    ...CASE_STUDIES[2],
    context:
      'A Nashik-based beverage cap producer needed full-circumference hot stamping at 40 products per minute. Their existing vendor\'s machine could not maintain stamping quality above 20/min, causing brand inconsistency complaints.',
    solution:
      'HEM\'s Hot Stamping Machine with stepper motor foil winding and PID heater control delivered consistent full-circumference decoration at 40/min. Foil waste dropped 40% with the precision winding system.',
    timeline: '8 weeks from order to commissioning',
  },
]

export default function CaseStudiesPage() {
  const breadcrumb = breadcrumbSchema([
    { name: 'Home', url: SITE.url },
    { name: 'Case Studies', url: `${SITE.url}/case-studies` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <div className="page-hero">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="page-hero-eyebrow">Case Studies</div>
          <h1>Real Results, <em>Measurable Impact</em></h1>
          <p>
            Every HEM machine solves a specific production problem. Here&apos;s what our clients
            achieved after making the switch.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(32px,5vw,56px)' }}>
            {EXTENDED_CASES.map((cs, i) => (
              <div
                key={cs.client}
                style={{
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.09)',
                  borderRadius: 'var(--r-xl)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    background: i % 2 === 0 ? '#1A1A1A' : '#111',
                    padding: 'clamp(24px,3vw,36px)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 16,
                    flexWrap: 'wrap',
                  }}
                >
                  <div>
                    <div className="case-ind">{cs.industry}</div>
                    <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(22px,3vw,30px)', fontWeight: 900, textTransform: 'uppercase', color: '#fff', lineHeight: 1.05 }}>
                      {cs.client}
                    </h3>
                  </div>
                  <span className="case-badge" style={{ marginTop: 4 }}>{cs.badge}</span>
                </div>

                <div className="cs-inner-grid" style={{ padding: 'clamp(24px,3vw,36px)' }}>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: 8 }}>The Challenge</div>
                    <p style={{ fontSize: 13, color: '#444', lineHeight: 1.75, marginBottom: 16 }}>{cs.context}</p>

                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: 8 }}>The Solution</div>
                    <p style={{ fontSize: 13, color: '#444', lineHeight: 1.75, marginBottom: 16 }}>{cs.solution}</p>

                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(204,0,0,0.08)', border: '1px solid rgba(204,0,0,0.2)', borderRadius: 'var(--r-sm)', padding: '5px 12px', fontSize: 11, color: 'var(--red)', fontWeight: 600 }}>
                      ⏱ {cs.timeline}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: 16 }}>Results Achieved</div>
                    <div className="case-results" style={{ flexDirection: 'column', gap: 12 }}>
                      {cs.results.map(r => (
                        <div
                          key={r.label}
                          style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'var(--light)', borderRadius: 'var(--r-md)', padding: 'clamp(14px,2vw,20px)' }}
                        >
                          <div className="cres-val" style={{ fontSize: 'clamp(28px,3.5vw,40px)' }}>{r.val}</div>
                          <div className="cres-lbl" style={{ fontSize: 13, textAlign: 'left' }}>{r.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
