import { motion, useReducedMotion } from 'framer-motion'
import { Reveal } from './motion'

// No real side projects yet — this section shows an honest, upbeat
// "in progress" state. When you have work to show, restore the PROJECTS
// array + card grid (see git history) and drop this placeholder panel.
const TEASERS = [
  'A build worth showing',
  'Something with an AI feature',
  'A clean, fast interface',
  'An automation that saves hours',
]

export default function Projects() {
  const reduce = useReducedMotion()

  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="eyebrow">Selected work</Reveal>
        <Reveal as="h2" delay={0.05}>
          Something worth
          <br />
          showing — soon.
        </Reveal>

        <Reveal delay={0.1}>
          <div className="soon-card">
            <div className="soon-status">
              <span className="soon-dot" aria-hidden="true" />
              <span>STATUS: building in progress</span>
            </div>

            <p className="soon-line">
              This space is reserved for real, shipped work
              <span className="soon-caret" aria-hidden="true">
                _
              </span>
            </p>

            <p className="soon-copy">
              I'd rather show you finished things I'm proud of than filler.
              A few side projects are in the works — they'll land right here.
              In the meantime, take a look at what I build and how I work.
            </p>

            <ul className="soon-teasers" aria-label="Projects in the works">
              {TEASERS.map((t, i) => (
                <motion.li
                  key={t}
                  className="soon-teaser"
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                >
                  <span className="soon-teaser-mark" aria-hidden="true">
                    →
                  </span>
                  {t}
                </motion.li>
              ))}
            </ul>

            <div className="soon-actions">
              <a
                className="btn ghost"
                href="https://github.com/apizkayyy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow along on GitHub ↗
              </a>
              <a className="btn" href="#contact">
                Want early access? Say hi
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
