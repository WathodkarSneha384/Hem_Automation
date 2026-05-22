import { CASE_STUDIES } from '@/lib/data'

export default function CaseStudiesSection() {
  return (
    <section className="section" id="case-studies" style={{ background: '#F7F7F7' }}>
      <div className="container">
        <span className="label">Case Studies</span>
        <h2 className="h2">Real Results, <span className="red">Measurable Impact</span></h2>
        <div className="case-grid">
          {CASE_STUDIES.map(cs => (
            <div className="casecard" key={cs.client}>
              <div className="case-top">
                <div>
                  <div className="case-ind">{cs.industry}</div>
                  <div className="case-client">{cs.client}</div>
                </div>
                <span className="case-badge">{cs.badge}</span>
              </div>
              <div className="case-body">
                <div className="case-prob">{cs.problem}</div>
                <div className="case-results">
                  {cs.results.map(r => (
                    <div className="cres" key={r.label}>
                      <div className="cres-val">{r.val}</div>
                      <div className="cres-lbl">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

