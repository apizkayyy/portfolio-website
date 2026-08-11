import { motion, useScroll, useSpring } from 'framer-motion'
import AuroraBackground from './components/AuroraBackground'
import Glyphs from './components/Glyphs'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Build from './components/Build'
import Stack from './components/Stack'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <motion.div
        style={{
          scaleX,
          transformOrigin: '0%',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'linear-gradient(90deg, var(--teal), var(--cyan), var(--violet))',
          zIndex: 100,
        }}
      />
      <AuroraBackground />
      <Glyphs />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Build />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
