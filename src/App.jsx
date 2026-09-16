import Glyphs from './components/Glyphs'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Build from './components/Build'
import Stack from './components/Stack'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Glyphs />
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Build />
        <Stack />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
