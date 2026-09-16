import { Reveal, RevealGroup, RevealItem } from './motion'

// Placeholder job history — swap in real roles, dates, and impact bullets.
// Keep the shape ({ role, company, period, points }) so the layout/CSS just works.
const JOBS = [
  {
    role: '[Role title]',
    company: '[Company name]',
    period: '[Month Year] — Present',
    points: [
      'Placeholder — a concrete thing you shipped or owned in this role.',
      'Placeholder — a system, feature, or process you improved, with a result if you have one.',
      'Placeholder — tools/stack you used day to day in this role.',
    ],
  },
  {
    role: '[Role title]',
    company: '[Previous company name]',
    period: '[Month Year] — [Month Year]',
    points: [
      'Placeholder — a concrete thing you shipped or owned in this role.',
      'Placeholder — a system, feature, or process you improved, with a result if you have one.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="eyebrow">05 — Experience</Reveal>
        <Reveal as="h2" delay={0.05}>
          Where I've worked.
        </Reveal>

        <RevealGroup className="jobs" amount={0.15}>
          {JOBS.map((job) => (
            <RevealItem className="job" key={job.company + job.role}>
              <div className="job-head">
                <h3>
                  {job.role} <span className="job-at">@ {job.company}</span>
                </h3>
                <span className="job-period">{job.period}</span>
              </div>
              <ul className="job-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal as="p" className="section-note" delay={0.05}>
          Placeholder section — replace the bracketed roles, dates, and bullet
          points above with your real work history.
        </Reveal>
      </div>
    </section>
  )
}
