'use client'

import { useEffect, useRef } from 'react'
import { PROBLEMS } from '@/lib/data'

export default function ProblemsSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.09, rootMargin: '0px 0px -40px 0px' }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section section-alt" id="problems" ref={ref}>
      <div className="container">
        <span className="label">Why Upgrade</span>
        <h2 className="h2">Problems We <span className="red">Solve</span></h2>
        <div className="problems-grid">
          {PROBLEMS.map((p, i) => (
            <div
              className={`pcard reveal reveal-delay-${(i % 3) + 1}`}
              key={p.num}
            >
              <span className="pcard-num">{p.num}</span>
              <div className="pcard-icon">{p.icon}</div>
              <div className="pcard-title">{p.title}</div>
              <div className="pcard-desc">{p.desc}</div>
              <div className="pcard-tag">{p.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

