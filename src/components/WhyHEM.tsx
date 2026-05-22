const FEATURES = [
  {
    num: '01',
    title: 'PID-Controlled Precision',
    desc: 'Accurate, consistent blade temperatures — eliminating defect variance across production runs.',
  },
  {
    num: '02',
    title: 'Near-Zero Maintenance Air Conveyors',
    desc: 'Resistance-free cap conveying with almost zero maintenance cost — maximising uptime.',
  },
  {
    num: '03',
    title: 'Operator-First Safety Design',
    desc: 'Safety-interlocked enclosures, torque limiters, and HMI error diagnostics standard on every machine.',
  },
  {
    num: '04',
    title: 'Full Customisation & After-Sales',
    desc: 'Completely customisable SPMs with responsive after-sales service — customer satisfaction is never ignored.',
  },
]

const STATS = [
  { num: '20+', label: 'Years in business', featured: false, wide: false },
  { num: '800', label: 'Caps per minute peak', featured: true, wide: false },
  { num: '150+', label: 'Machines installed', featured: false, wide: false },
  { num: '99%', label: 'Customer satisfaction', featured: false, wide: false },
  { num: '₹0', label: 'Avg. unplanned conveyor downtime reported by clients', featured: false, wide: true },
]

export default function WhyHEM() {
  return (
    <section className="section" id="about">
      <div className="container">
        <span className="label">Why Choose HEM</span>
        <h2 className="h2">Engineering <span className="red">Excellence</span><br />Since 2005</h2>
        <div className="why-grid">
          <div>
            <p className="lead">
              For over two decades, HEM Automation has engineered cap and closure solutions trusted by
              India&apos;s leading FMCG, pharma, and packaging manufacturers.
            </p>
            <div className="feat-list">
              {FEATURES.map(f => (
                <div className="fitem" key={f.num}>
                  <div className="fnum">{f.num}</div>
                  <div>
                    <div className="ftitle">{f.title}</div>
                    <div className="fdesc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="stats-grid">
            {STATS.map(s => (
              <div
                className={`scard${s.featured ? ' featured' : ''}${s.wide ? ' wide' : ''}`}
                key={s.label}
              >
                <div className="snum">{s.num}</div>
                <div className="slbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

