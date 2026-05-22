export const SITE = {
  name: 'HEM Automation',
  tagline: 'Precision Cap & Closure Automation',
  description:
    'HEM Automation engineers post-moulding cap and closure solutions — slitting, folding, assembly & hot stamping — with unmatched speed, safety & reliability. Mumbai, India.',
  url: 'https://hemautomation.co.in',
  phone1: '+91 97697 11529',
  phone2: '+91 82910 79767',
  email: 'hem.automation@gmail.com',
  founded: 2005,
  youtube: 'https://www.youtube.com/channel/UCsUF7dngvt-la4hiPG_glcQ',
  instagram: 'https://www.instagram.com/hem.automation',
  logoUrl: '/hem-logo.png',
  address1: {
    label: 'Bhandup Plant',
    full: 'Plot 1044, Opp. Bhaktani Industrial Estate, Bhandup Sonapur Lane, Off LBS Marg, Bhandup West, Mumbai 400078',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Plot+1044+Bhandup+Sonapur+Lane+Off+LBS+Marg+Bhandup+West+Mumbai+400078',
  },
  address2: {
    label: 'Navi Mumbai Office',
    full: 'Near D157, Nerul MIDC, TTC Industrial Area, LP Bridge, Nerul East, Shiravane, Navi Mumbai 400705',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=D157+Nerul+MIDC+TTC+Industrial+Area+Nerul+East+Shiravane+Navi+Mumbai+400705',
  },
}

export const PRODUCTS = [
  {
    slug: 'cap-slitting-folding',
    icon: '⚙️',
    videoId: 'qwTuLSLvFEc',
    name: 'Cap Slitting & Folding Machine',
    shortDesc:
      'Creates tamper-evident bands with PID-controlled blade heat and air conveyor. Torque limiter protects against jams.',
    speed: '800 caps/min',
    tag: 'Flagship',
    features: [
      'PID-controlled blade temperature',
      'Air conveyor — near-zero maintenance',
      'Torque limiter jam protection',
      'HMI touchscreen with error diagnostics',
      'Tamper-evident band formation',
      'ISO safety-certified enclosure',
    ],
    description:
      'Our flagship Cap Slitting & Folding Machine delivers up to 800 caps per minute with consistent quality. PID-controlled blade heating ensures exact temperature every cycle, eliminating defects. The integrated air conveyor requires almost no maintenance, keeping your line running shift after shift.',
  },
  {
    slug: 'cap-slitting',
    icon: '✂️',
    videoId: 'eky9XWhB6zc',
    name: 'Cap Slitting Machine',
    shortDesc:
      'Slitting-only with precision ground blade, enclosed safety area, and HMI error display for easy troubleshooting.',
    speed: '500 caps/min',
    tag: null,
    features: [
      'Precision ground slitting blade',
      'Enclosed safety area with safety doors',
      'HMI touchscreen error display',
      'Compact footprint',
      'Easy blade change system',
      'Torque limiter protection',
    ],
    description:
      'When you need slitting only, our dedicated Cap Slitting Machine delivers up to 500 caps per minute with precision and reliability. The enclosed safety area and HMI error display make operation and maintenance straightforward.',
  },
  {
    slug: 'slitting-folding-wad-insertion',
    icon: '🔩',
    videoId: null,
    name: 'Slitting, Folding & Wad Insertion',
    shortDesc:
      'Three operations in a single machine — slitting, folding, and wad insertion. Minimal footprint, single-pass output.',
    speed: '150 caps/min',
    tag: '3-in-1',
    features: [
      '3-in-1 combined operations',
      'Minimal floor footprint',
      'Precision-manufactured components',
      'Single-pass processing',
      'Reduced handoff failure points',
      'HMI touchscreen interface',
    ],
    description:
      'Three operations — slitting, folding, and wad insertion — combined in one compact machine. Fewer floor footprints, fewer handoffs, fewer failure points. This combo machine dramatically reduces complexity and cost per unit.',
  },
  {
    slug: 'hot-stamping',
    icon: '🔥',
    videoId: null,
    name: 'Hot Stamping Machine',
    shortDesc:
      'Full-circumference decoration with stepper motor foil winding, auto loading/unloading, and PID heater control.',
    speed: '40 products/min',
    tag: null,
    features: [
      'Full-circumference decoration',
      'Stepper motor foil winding',
      'Auto loading & unloading',
      'PID heater control',
      '40% foil waste reduction',
      '100% brand consistency',
    ],
    description:
      'Decorate caps with full-circumference hot stamping at 40 products per minute. Stepper motor foil winding with automatic loading/unloading and PID heater control ensures 100% brand consistency and dramatically reduces foil waste.',
  },
  {
    slug: 'lacquering',
    icon: '🎨',
    videoId: null,
    name: 'Lacquering Machine',
    shortDesc:
      'Applies protective or decorative lacquer to the outer periphery of closures with consistent coat quality and high throughput.',
    speed: '200 caps/min',
    tag: null,
    features: [
      'Outer periphery lacquer application',
      'Consistent coat thickness',
      'Auto feeding & unloading',
      'PID-controlled lacquer temperature',
      'Suitable for all closure sizes',
      'Low wastage formulation system',
    ],
    description:
      'The HEM Lacquering Machine applies protective or decorative lacquer uniformly to the outer periphery of caps and closures. PID-controlled temperature and precision applicator rollers ensure consistent coat quality at high throughput, reducing waste and finishing variation.',
  },
  {
    slug: 'flip-top-closing',
    icon: '🔄',
    videoId: null,
    name: 'Flip Top Closing Machine',
    shortDesc:
      'Automatic feeding system with auto unloading, safety interlock, and positive cap closure mechanism.',
    speed: '150 caps/min',
    tag: null,
    features: [
      'Automatic feeding system',
      'Auto unloading',
      'Safety interlock',
      'Positive cap closure mechanism',
      'Compact design',
      'Low rejection rate',
    ],
    description:
      'Close flip-top caps with precision at 150 per minute. The automatic feeding and unloading system with safety interlock and positive closure mechanism ensures every cap closes perfectly, every time.',
  },
  {
    slug: 'special-purpose-machines',
    icon: '🏭',
    videoId: null,
    name: 'Special Purpose Machines',
    shortDesc:
      'Fully customisable SPMs — from 2-component to 5-component closure assembly built to exact client requirements.',
    speed: 'Custom output',
    tag: 'Custom',
    features: [
      '2 to 5-component assembly',
      'Fully customisable to requirements',
      'Nozzle lid assembly',
      'Multi-component closure integration',
      'In-house design & build',
      'After-sales support included',
    ],
    description:
      'When off-the-shelf machines do not fit your process, we engineer Special Purpose Machines to your exact requirements. From 2-component to 5-component closure assembly, our SPMs are designed, built, and supported by our in-house team.',
  },
]

export const INDUSTRIES = [
  {
    slug: 'fmcg-pharma',
    badge: 'FMCG & Pharma',
    title: 'Caps &\nClosures',
    desc: 'Tamper-evident, lacquered, and decorated solutions for FMCG and pharmaceutical packaging lines running at high speed.',
    icon: '🧴',
    bg: 'linear-gradient(145deg,#0A3D1F 0%,#1B6B3A 50%,#0D2E17 100%)',
  },
  {
    slug: 'industrial',
    badge: 'Industrial',
    title: 'Custom\nSPM Machines',
    desc: 'Special purpose machines for multi-component assembly, cutting, and closure integration — fully customisable to your line.',
    icon: '🏭',
    bg: 'linear-gradient(145deg,#1A0A00 0%,#5C2200 50%,#8B3300 100%)',
  },
  {
    slug: 'adhesives-chemicals',
    badge: 'Adhesives & Chemicals',
    title: 'Nozzle &\nLid Assembly',
    desc: 'Precision nozzle lid, flip-top, and wad insertion lines for adhesive, chemical, and industrial product packaging.',
    icon: '🔬',
    bg: 'linear-gradient(145deg,#060A2E 0%,#1A2570 50%,#0D1550 100%)',
  },
]

export const CASE_STUDIES = [
  {
    industry: 'FMCG — Adhesive Packaging',
    client: 'Fevistick / Stella Industries',
    badge: 'SPM Build',
    problem:
      'Client needed a custom SPM to assemble nozzle lids — manual process was causing 12% rejection rate and production delays.',
    results: [
      { val: '↓12%', label: 'Rejection rate' },
      { val: '3×', label: 'Output increase' },
      { val: '18mo', label: 'ROI payback' },
    ],
  },
  {
    industry: 'Pharma — Tamper Proofing',
    client: 'Cap Manufacturer, Mumbai',
    badge: 'Slitting & Folding',
    problem:
      'Inconsistent tamper-evident band formation was causing regulatory compliance failures and returned batches from key clients.',
    results: [
      { val: '99.7%', label: 'Quality pass rate' },
      { val: '₹8L', label: 'Annual savings' },
      { val: '0', label: 'Compliance fails' },
    ],
  },
  {
    industry: 'FMCG — Decoration',
    client: 'Beverage Cap Producer',
    badge: 'Hot Stamping',
    problem:
      'Brand needed full-circumference hot stamping on caps at speed — existing vendor could not maintain quality above 20 units/min.',
    results: [
      { val: '40/min', label: 'Stamping speed' },
      { val: '↓40%', label: 'Foil waste' },
      { val: '100%', label: 'Brand consistency' },
    ],
  },
]

export const TESTIMONIALS = [
  {
    initials: 'RK',
    name: 'Rajesh K.',
    company: 'Production Head, Cap Manufacturer · Mumbai',
    stars: 5,
    text: '"HEM\'s slitting machine completely transformed our production line. We went from 60% efficiency to over 95% in under 3 months. The PID temperature control made all the difference — zero blade inconsistency across shifts."',
  },
  {
    initials: 'SP',
    name: 'Sangeeta P.',
    company: 'Operations Director, Stella Industries',
    stars: 5,
    text: '"We commissioned a custom SPM for nozzle lid assembly and HEM delivered exactly what we scoped. Build quality is solid, their team is technically sharp, and we\'ve had near-zero unplanned downtime in 2 years of running."',
  },
  {
    initials: 'AM',
    name: 'Amit M.',
    company: 'Plant Manager, Western India Packaging',
    stars: 5,
    text: '"The air conveyor is genuinely maintenance-free — 18 months, not a single conveyor issue. The safety enclosures also gave our compliance team confidence during audits. Very happy with the purchase."',
  },
  {
    initials: 'VD',
    name: 'Vijay D.',
    company: 'MD, Closure Manufacturer · Pune',
    stars: 5,
    text: '"Best automation partner in 15 years. R.L. Chitnis and his team truly understand the production floor — they don\'t just supply machines, they engineer around your specific problem."',
  },
  {
    initials: 'PK',
    name: 'Prakash K.',
    company: 'Purchase Manager, Beverage Cap Co. · Nashik',
    stars: 4,
    text: '"Good quality machines and responsive service. The hot stamping machine runs consistently at 40 per minute without issues. After-sales support was prompt — overall a trustworthy vendor."',
  },
  {
    initials: 'NB',
    name: 'Nikhil B.',
    company: 'Founder, NB Packaging Solutions · Mumbai',
    stars: 5,
    text: '"We\'ve sourced 3 machines from HEM over 8 years — a slitting machine, a wad inserter, and a flip-top closer. Each one has run reliably. Their honest pricing keeps us coming back."',
  },
]

export const TEAM = [
  {
    initials: 'RC',
    name: 'Mr. R.L. Chitnis',
    role: 'Founder · Design, Mechanical & Technical',
    bio: 'Started HEM out of a passion for designing automation. 20+ years engineering cap and closure solutions for India\'s leading manufacturers.',
  },
  {
    initials: 'CM',
    name: 'Mr. C.P. Mandhare',
    role: 'Design & Production Manager',
    bio: 'Oversees design and production, ensuring every machine meets our exacting quality and safety standards before it leaves the factory floor.',
  },
  {
    initials: 'HC',
    name: 'Mr. Hemil R. Chitnis',
    role: 'Electronics & Software Programming',
    bio: 'Brings the machines to life with custom electronics, HMI touchscreen interfaces, and precision control system programming.',
  },
]

export const PROBLEMS = [
  {
    num: '01',
    icon: '⏱️',
    title: 'Slow Production Output',
    desc: 'Manual or outdated cap lines bottleneck your entire production. Our high-speed automation delivers up to 800 caps/min with consistent quality every shift.',
    tag: '→ Up to 800 caps/min',
  },
  {
    num: '02',
    icon: '🔧',
    title: 'Frequent Downtime & Maintenance',
    desc: 'Air conveyor systems with near-zero maintenance, torque limiters, and HMI error diagnostics keep your line running — not waiting for a technician.',
    tag: '→ Near-zero maintenance',
  },
  {
    num: '03',
    icon: '❌',
    title: 'Inconsistent Blade & Seal Quality',
    desc: 'PID-controlled heating ensures consistent blade temperature every cycle — eliminating the variance that causes defects, rejects, and costly rework.',
    tag: '→ 99.7% quality pass rate',
  },
  {
    num: '04',
    icon: '👷',
    title: 'Operator Safety Risks',
    desc: 'Fully enclosed moving areas with interlocked safety doors and torque limiters ensure your operators are protected and your plant stays audit-ready.',
    tag: '→ ISO safety certified',
  },
  {
    num: '05',
    icon: '💸',
    title: 'High Cost Per Unit',
    desc: 'Our cost-effective automation solutions dramatically reduce per-unit cost, helping you compete on price without sacrificing quality or margin.',
    tag: '→ ROI within 18 months',
  },
  {
    num: '06',
    icon: '🔩',
    title: 'No Single-Machine Solution',
    desc: 'Slitting, folding, and wad insertion in one compact machine. Fewer floor footprints, fewer handoffs, fewer failure points — more throughput.',
    tag: '→ 3-in-1 combo machines',
  },
]

export const VIDEOS = [
  {
    id: 'eky9XWhB6zc',
    isEmbed: true,
    badge: 'HEM Automation · Official',
    title: 'Slitting & Folding Machine @ 500 caps/min — Live Demo',
    info: '📍 Mumbai Plant · Cap Slitting',
    ytUrl: null,
    thumbBg: null,
    thumbIcon: null,
    dur: null,
  },
  {
    id: null,
    isEmbed: false,
    badge: 'HEM Automation',
    title: 'Cap Slitting & Folding Machine — 800 caps/min Full Run',
    info: '⚙️ High Speed Demo',
    ytUrl: 'https://www.youtube.com/channel/UCsUF7dngvt-la4hiPG_glcQ',
    thumbBg: 'linear-gradient(135deg,#1a1a1a,#2a1010)',
    thumbIcon: '⚙️',
    dur: 'Coming Soon',
  },
  {
    id: null,
    isEmbed: false,
    badge: 'HEM Automation',
    title: 'Hot Stamping Machine — Full Circumference Decoration @ 40/min',
    info: '🔥 Decoration Line',
    ytUrl: 'https://www.youtube.com/channel/UCsUF7dngvt-la4hiPG_glcQ',
    thumbBg: 'linear-gradient(135deg,#1a0a00,#2a1200)',
    thumbIcon: '🔥',
    dur: 'Coming Soon',
  },
  {
    id: null,
    isEmbed: false,
    badge: 'HEM Automation',
    title: 'Wad Insertion + Slitting Combo — Single Pass, 150 caps/min',
    info: '🔩 SPM Line',
    ytUrl: 'https://www.youtube.com/channel/UCsUF7dngvt-la4hiPG_glcQ',
    thumbBg: 'linear-gradient(135deg,#001a0a,#001f0f)',
    thumbIcon: '🔩',
    dur: 'Coming Soon',
  },
]
