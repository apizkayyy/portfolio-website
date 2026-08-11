import { Reveal } from './motion'

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <Reveal className="eyebrow">About</Reveal>
        <div className="about-grid">
          <Reveal as="h2">
            Based in Malaysia,
            <br />
            working anywhere.
          </Reveal>
          <Reveal delay={0.08}>
            <p>
              I'm a software developer with two years of professional experience,
              working across the full stack with a growing lean toward the
              backend — the services, data, and infrastructure that decide
              whether a product is reliable or merely finished.
            </p>
            <p>
              A lot of what I've been drawn to lately sits where backend
              engineering meets AI: systems that read documents, find the right
              answer inside a pile of data, and take care of the repetitive work
              people shouldn't be doing by hand.
            </p>
            <p>
              I'm still early in my career and deliberately curious — I'd rather
              understand why something works than just get it running. Right now
              I'm looking for opportunities and interesting problems to grow on.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
