import { Reveal, RevealGroup, RevealItem } from './motion'

// Each chip is either an icon (devicon class) or a glyph (SVG sprite id).
const ROWS = [
  {
    label: 'Frontend',
    chips: [
      { text: 'React', icon: 'devicon-react-original', brand: '#1B9DC4' },
      { text: 'JavaScript', icon: 'devicon-javascript-plain', brand: '#B8960C' },
      { text: 'HTML & CSS', icon: 'devicon-html5-plain', brand: '#D0431B' },
      { text: 'Responsive design', glyph: 'g-responsive' },
    ],
  },
  {
    label: 'Backend',
    chips: [
      { text: 'Python', icon: 'devicon-python-plain', brand: '#3776AB' },
      { text: 'FastAPI', icon: 'devicon-fastapi-plain', brand: '#0B9A8D' },
      { text: 'REST APIs', glyph: 'g-api' },
      { text: 'Async services', glyph: 'g-async' },
    ],
  },
  {
    label: 'AI',
    chips: [
      { text: 'OpenAI API', glyph: 'g-spark' },
      { text: 'RAG & vector search', glyph: 'g-search' },
      { text: 'Document processing', glyph: 'g-doc' },
      { text: 'OCR', glyph: 'g-scan' },
    ],
  },
  {
    label: 'Data',
    chips: [
      { text: 'PostgreSQL', icon: 'devicon-postgresql-plain', brand: '#31648C' },
      { text: 'Redis', icon: 'devicon-redis-plain', brand: '#C6302B' },
      { text: 'SQL', glyph: 'g-db' },
    ],
  },
  {
    label: 'Deployment',
    chips: [
      { text: 'Docker', icon: 'devicon-docker-plain', brand: '#1D74BC' },
      { text: 'Ubuntu / Linux', icon: 'devicon-ubuntu-plain', brand: '#D9541E' },
      { text: 'CI/CD', glyph: 'g-pipeline' },
    ],
  },
]

function Chip({ chip }) {
  return (
    <RevealItem as="span" className="chip" y={9} style={chip.brand ? { '--brand': chip.brand } : undefined}>
      {chip.icon ? (
        <i className={chip.icon} />
      ) : (
        <svg>
          <use href={`#${chip.glyph}`} />
        </svg>
      )}
      {chip.text}
    </RevealItem>
  )
}

export default function Stack() {
  return (
    <section id="stack">
      <div className="wrap">
        <Reveal className="eyebrow">Tools</Reveal>
        <Reveal as="h2" delay={0.05}>
          What I build with.
        </Reveal>

        {ROWS.map((row) => (
          <div className="stack-row" key={row.label}>
            <div className="stack-label">{row.label}</div>
            <RevealGroup className="chips" stagger={0.06} amount={0.4}>
              {row.chips.map((chip) => (
                <Chip chip={chip} key={chip.text} />
              ))}
            </RevealGroup>
          </div>
        ))}

        <Reveal as="p" className="stack-note" delay={0.05}>
          Not sure what any of this means? That's fine — it's my job to pick the
          right tools, and yours to tell me what the software needs to do.
        </Reveal>
      </div>
    </section>
  )
}
