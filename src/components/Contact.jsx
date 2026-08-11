import { motion, useReducedMotion } from 'framer-motion'
import { Reveal, EASE } from './motion'

const LINKS = [
  { label: 'Email', href: 'mailto:muhammadhafiz1502@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mhafiz1502/' },
  { label: 'GitHub', href: 'https://github.com/apizkayyy' },
  // Résumé link removed for now. To restore: drop your CV at
  // public/HafizK-Resume.pdf and re-add this entry:
  // { label: 'Résumé (PDF)', href: '/HafizK-Resume.pdf', download: true },
]

export default function Contact() {
  const reduce = useReducedMotion()
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal className="eyebrow">Get in touch</Reveal>
        <Reveal as="h2" delay={0.05}>
          Open to opportunities.
        </Reveal>
        <Reveal as="p" delay={0.1}>
          I'm looking for roles and projects where I can keep growing as a
          developer. If you think I'd be a good fit, or just want to talk shop,
          my inbox is open — I'll get back to you soon.
        </Reveal>
        <div className="links">
          {LINKS.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              {...(l.href.startsWith('http')
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              {...(l.download ? { download: '' } : {})}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, ease: EASE, delay: reduce ? 0 : i * 0.06 }}
              whileHover={reduce ? undefined : { y: -2 }}
            >
              {l.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
