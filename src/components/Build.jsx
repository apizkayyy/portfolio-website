import { Reveal, RevealGroup, RevealItem } from './motion'

const CARDS = [
  {
    tag: 'Web applications',
    title: 'Interfaces and the systems behind them',
    body: 'Dashboards, portals, and internal tools — built React frontends backed by real APIs and databases, with attention to how the whole thing fits together.',
  },
  {
    tag: 'APIs & integration',
    title: 'Getting systems to talk to each other',
    body: 'REST APIs, third-party services, payment gateways, and backends for apps that need one. I care about clean, documented contracts between the two halves.',
  },
  {
    tag: 'Artificial intelligence',
    title: 'Practical, working AI features',
    body: 'Reading and extracting data from documents, searching information in plain language (RAG), and classification — the useful kind, with sensible handling for when the model gets it wrong.',
  },
  {
    tag: 'Automation',
    title: 'Removing the repetitive work',
    body: 'Manual data entry, reports rebuilt by hand, files moved between systems one at a time. If a task repeats on a schedule, it can usually be scripted away.',
  },
]

export default function Build() {
  return (
    <section id="build">
      <div className="wrap">
        <Reveal className="eyebrow">What I build</Reveal>
        <Reveal as="h2" delay={0.05}>
          The kinds of things
          <br />I like to work on.
        </Reveal>
        <RevealGroup className="cards" amount={0.15}>
          {CARDS.map((c) => (
            <RevealItem className="card" key={c.tag}>
              <span className="tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
