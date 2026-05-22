const METRICS = [
  { label: 'Current Speed', val: '798', unit: ' caps/min', trend: '↑ 2.3% vs last hour', warn: false },
  { label: 'Blade Temp', val: '142', unit: ' °C', trend: '✓ Within tolerance', warn: false },
  { label: 'Uptime Today', val: '99.7', unit: '%', trend: '↑ 0.4% vs yesterday', warn: false },
  { label: 'Rejection Rate', val: '0.3', unit: '%', trend: '↓ Target: <0.5%', warn: true },
]

const BARS = [55, 70, 62, 80, 75, 95, 88, 90, 85, 92, 98, 100]

export default function TechDashboard() {
  return (
    <section className="section section-dark" id="technology">
      <div className="container">
        <span className="label">Technology</span>
        <h2 className="h2">
          Real-Time Machine <span className="red">Intelligence</span>
        </h2>
        <p className="lead" style={{ marginTop: 12 }}>
          HEM machines ship with HMI dashboards giving operators live visibility into speed,
          temperature, uptime, and quality metrics.
        </p>
        <div className="dash-wrap">
          <div className="dash-titlebar">
            <div className="dtb-dot" style={{ background: '#ef4444' }} />
            <div className="dtb-dot" style={{ background: '#f59e0b' }} />
            <div className="dtb-dot" style={{ background: '#22c55e' }} />
            <span className="dtb-label">HEM Production Dashboard — Line 3 · Cap Slitting Machine</span>
          </div>
          <div className="dash-body">
            {METRICS.map(m => (
              <div className="dmetric" key={m.label}>
                <div className="dmetric-label">{m.label}</div>
                <div className="dmetric-val">{m.val}<em>{m.unit}</em></div>
                <div className={`dmetric-trend${m.warn ? ' warn' : ''}`}>{m.trend}</div>
              </div>
            ))}
            <div className="dash-chart">
              <div className="chart-lbl">Hourly Output (caps × 1000)</div>
              <div className="chart-bars">
                {BARS.map((h, i) => (
                  <div
                    key={i}
                    className={`cbar${h === 100 || h === 95 ? ' hi' : ''}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

