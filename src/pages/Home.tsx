import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  const location = useLocation()

  // Support deep-linking to a section, e.g. arriving at /#projects from another page.
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [location])

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}
