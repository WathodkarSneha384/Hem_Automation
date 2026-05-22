const ITEMS = [
  'Cap Slitting & Folding',
  'Hot Stamping Machines',
  'Flip Top Closing',
  'Wad Insertion',
  'Lacquering Machines',
  '5-Component Assembly',
  'PID Temperature Control',
  'Air Conveyor Systems',
  'HMI Touchscreen Interface',
  'Tamper-Evident Solutions',
  'Custom SPM Machines',
]

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker">
      <div className="ticker-inner">
        {doubled.map((item, i) => (
          <span className="ticker-item" key={i}>
            <span className="tdot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
