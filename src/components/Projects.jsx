import { Reveal, RevealGroup, RevealItem } from './motion'

// PLACEHOLDER PROJECTS — replace these with your real work.
// For each: a title, one or two lines on what it does and your role, the tech
// used, and links (set `code`/`live` to a real URL, or leave as null to hide
// that link). 2–4 projects is plenty to start.
const PROJECTS = [
  {
    title: 'Project One',
    blurb:
      'A short, honest description of what it does and what you built — the problem it solved and your part in it. Two lines is plenty.',
    tech: ['React', 'FastAPI', 'PostgreSQL'],
    code: 'https://github.com/apizkayyy',
    live: null,
  },
  {
    title: 'Project Two',
    blurb:
      'Another project — a side build, a work project you can talk about, or something you made while learning. Focus on what it does and the tech behind it.',
    tech: ['Python', 'Docker', 'Redis'],
    code: 'https://github.com/apizkayyy',
    live: null,
  },
  {
    title: 'Project Three',
    blurb:
      'Even a small, finished thing counts. Something with an AI feature, an automation, or a clean UI shows range. Replace this with a real one.',
    tech: ['React', 'OpenAI API', 'RAG'],
    code: 'https://github.com/apizkayyy',
    live: null,
  },
]

export default function Projects() {
  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="eyebrow">Selected work</Reveal>
        <Reveal as="h2" delay={0.05}>
          A few things
          <br />
          I've built.
        </Reveal>
        <RevealGroup className="projects" amount={0.15}>
          {PROJECTS.map((p, i) => (
            <RevealItem className="project" key={p.title}>
              <div className="project-top">
                <span className="project-idx">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="project-links">
                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code ↗
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>
              <h3>{p.title}</h3>
              <p>{p.blurb}</p>
              <div className="project-tech">
                {p.tech.map((t) => (
                  <span className="tech-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
        <Reveal as="p" className="section-note" delay={0.05}>
          {/* Remove this note once you've added real projects. */}
          ⤷ Placeholder projects — swap in your real work in src/components/Projects.jsx
        </Reveal>
      </div>
    </section>
  )
}
