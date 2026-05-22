'use client'

import Carousel from './Carousel'
import { VIDEOS, SITE } from '@/lib/data'

export default function VideosSection() {
  return (
    <section className="section" id="videos">
      <div className="container">
        <div className="sec-head">
          <div>
            <span className="label">See It In Action</span>
            <h2 className="h2">Machines at <span className="red">Full Speed</span></h2>
          </div>
          <a className="btn btn-yt" href={SITE.youtube} target="_blank" rel="noopener noreferrer">
            ▶ Subscribe on YouTube
          </a>
        </div>
        <Carousel id="ytTrack">
          {VIDEOS.map((v, i) => (
            <div className="ytcard" key={i}>
              <div
                className={`yt-thumb${v.isEmbed ? '' : ' yt-thumb-static'}`}
                onClick={!v.isEmbed && v.ytUrl ? () => window.open(v.ytUrl!, '_blank') : undefined}
                style={!v.isEmbed ? { cursor: 'pointer' } : undefined}
              >
                {v.isEmbed && v.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                    title={v.title}
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <>
                    <div className="yt-thumb-bg" style={{ background: v.thumbBg || '#111' }}>
                      {v.thumbIcon}
                    </div>
                    <div className="yt-play">▶</div>
                    {v.dur && <span className="yt-dur">{v.dur}</span>}
                  </>
                )}
              </div>
              <div className="ytcard-meta">
                <div className="yt-badge">▶ {v.badge}</div>
                <div className="yt-title">{v.title}</div>
                <div className="yt-info">{v.info}</div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

