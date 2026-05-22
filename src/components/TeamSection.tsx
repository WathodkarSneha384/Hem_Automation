import { TEAM } from '@/lib/data'

export default function TeamSection() {
  return (
    <section className="section section-alt" id="team">
      <div className="container">
        <span className="label">Our Team</span>
        <h2 className="h2">The People Behind <span className="red">The Machines</span></h2>
        <div className="team-grid">
          {TEAM.map(member => (
            <div className="teamcard" key={member.initials}>
              <div className="team-avatar">{member.initials}</div>
              <div className="team-name">{member.name}</div>
              <div className="team-role">{member.role}</div>
              <div className="team-bio">{member.bio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

