import { INDUSTRIES } from '@/lib/data'

export default function IndustriesSection() {
  return (
    <section className="section" id="industries">
      <div className="container">
        <span className="label">Industries We Serve</span>
        <h2 className="h2">Built for <span className="red">Your</span> Industry</h2>
        <div className="ind-grid">
          {INDUSTRIES.map(ind => (
            <div className="indcard" key={ind.slug}>
              <div className="ind-bg" style={{ background: ind.bg }}>
                <div className="ind-bg-icon">{ind.icon}</div>
              </div>
              <div className="ind-overlay" />
              <div className="ind-body">
                <span className="ind-badge">{ind.badge}</span>
                <div className="ind-title">
                  {ind.title.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < ind.title.split('\n').length - 1 && <br />}</span>
                  ))}
                </div>
                <div className="ind-desc">{ind.desc}</div>
                <div className="ind-arrow">Explore solutions →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

