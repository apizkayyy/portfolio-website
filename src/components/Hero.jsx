import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from './motion'

const CHAIN = [
  { idx: '01', name: 'Interface', sub: 'What your customer clicks' },
  { idx: '02', name: 'API', sub: 'The contract between the two halves' },
  { idx: '03', name: 'Logic & AI', sub: 'Rules, processing, the smart parts' },
  { idx: '04', name: 'Data', sub: 'Stored properly, queried fast' },
  { idx: '05', name: 'Deployment', sub: 'Running on a server, not my laptop' },
]

export default function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09 } },
  }
  const item = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
      }

  const nodeItem = reduce
    ? { hidden: { opacity: 1 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: EASE } },
      }

  // Gentle infinite pulse for the "live" pips — glow cyan on the dark theme.
  const pip = (delay) =>
    reduce
      ? {}
      : {
          animate: {
            backgroundColor: ['#5f6d79', '#22d3ee', '#5f6d79'],
            boxShadow: [
              '0 0 0px rgba(34,211,238,0)',
              '0 0 10px rgba(34,211,238,0.9)',
              '0 0 0px rgba(34,211,238,0)',
            ],
          },
          transition: {
            duration: 2.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay,
          },
        }

  return (
    <header className="hero">
      <div className="wrap hero-grid">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div className="avail" variants={item}>
            <span className="dot" /> Open to new opportunities
          </motion.div>
          <motion.h1 variants={item}>
            Full stack developer,
            <br />
            <em>comfortable everywhere</em>.
          </motion.h1>
          <motion.p className="lede" variants={item}>
            I'm HafizK, a software developer based in Malaysia with two years of
            experience building web applications end to end — interface, API,
            database, and deployment. I like understanding the whole system, not
            just one slice of it.
          </motion.p>
          <motion.div className="cta-row" variants={item}>
            <motion.a
              className="btn"
              href="#work"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.18, ease: EASE }}
            >
              View my work
            </motion.a>
            <motion.a
              className="btn ghost"
              href="#contact"
              whileHover={reduce ? undefined : { y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.97 }}
              transition={{ duration: 0.18, ease: EASE }}
            >
              Get in touch
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="chain"
          aria-label="The layers of a project I handle end to end"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className="chain-head">
            <span>The stack</span>
            <span>End to end</span>
          </div>

          {CHAIN.map((node, i) => (
            <div key={node.idx}>
              <motion.div className="node" variants={nodeItem}>
                <span className="idx">{node.idx}</span>
                <span className="name">
                  {node.name}
                  <span>{node.sub}</span>
                </span>
                <motion.span className="pip" {...pip(i * 0.3)} />
              </motion.div>
              {i < CHAIN.length - 1 && <div className="rail" />}
            </div>
          ))}

          <div className="chain-foot">
            → Every layer I've worked across, in one place.
          </div>
        </motion.div>
      </div>
    </header>
  )
}
