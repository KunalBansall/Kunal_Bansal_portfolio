import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Certifications from "@/components/certifications"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

