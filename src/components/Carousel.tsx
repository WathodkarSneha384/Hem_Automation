'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface Props {
  children: React.ReactNode[]
  id: string
}

export default function Carousel({ children, id }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [cur, setCur] = useState(0)
  const [vc, setVc] = useState(1) // visible card count — reactive so dots stay in sync

  const total = children.length

  const calcVc = useCallback(() => {
    const t = trackRef.current
    if (!t || !t.children[0]) return 1
    const gap = parseInt(getComputedStyle(t).gap) || 20
    const cw = (t.children[0] as HTMLElement).offsetWidth + gap
    return Math.max(1, Math.floor((t.parentElement!.offsetWidth + gap) / cw))
  }, [])

  const maxIdx = useCallback((visibleCount: number) => {
    return Math.max(0, total - visibleCount)
  }, [total])

  const applyTransform = useCallback((idx: number) => {
    const t = trackRef.current
    if (!t || !t.children[0]) return
    const gap = parseInt(getComputedStyle(t).gap) || 20
    const cw = (t.children[0] as HTMLElement).offsetWidth + gap
    t.style.transform = `translateX(-${idx * cw}px)`
  }, [])

  // Sync visible count on mount and resize
  useEffect(() => {
    const update = () => {
      const newVc = calcVc()
      setVc(newVc)
      setCur(c => {
        const clamped = Math.min(c, Math.max(0, total - newVc))
        applyTransform(clamped)
        return clamped
      })
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [calcVc, applyTransform, total])

  // Apply transform whenever cur changes
  useEffect(() => {
    applyTransform(Math.min(cur, maxIdx(vc)))
  }, [cur, vc, applyTransform, maxIdx])

  function move(dir: number) {
    setCur(c => Math.max(0, Math.min(c + dir, maxIdx(vc))))
  }

  const dotCount = Math.max(1, total - vc + 1)

  return (
    <div>
      <div className="carousel-wrap">
        <div className="carousel-track" ref={trackRef} id={id}>
          {children}
        </div>
      </div>
      <div className="carousel-nav">
        <button className="cnav-btn" onClick={() => move(-1)} disabled={cur === 0}>←</button>
        <div className="cdots">
          {Array.from({ length: dotCount }).map((_, i) => (
            <span
              key={i}
              className={`cdot${cur === i ? ' on' : ''}`}
              onClick={() => setCur(Math.min(i, maxIdx(vc)))}
            />
          ))}
        </div>
        <button className="cnav-btn" onClick={() => move(1)} disabled={cur >= maxIdx(vc)}>→</button>
      </div>
    </div>
  )
}
