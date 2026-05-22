const LOGOS = ['FEVISTICK', 'STELLA IND.', 'BOOST CAP', 'FMCG CLIENT A', 'PHARMA CLIENT B']
const CERTS = ['🏅 ISO 9001', '✔️ CE Marked', '🔒 Safety Certified']

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-inner">
          <span className="trust-label">Trusted by</span>
          <div className="trust-logos">
            {LOGOS.map(l => <div className="tlogo" key={l}>{l}</div>)}
          </div>
          <div className="cert-pills">
            {CERTS.map(c => <div className="cpill" key={c}>{c}</div>)}
          </div>
        </div>
      </div>
    </div>
  )
}
