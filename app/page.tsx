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
import SnakeGame from "@/components/snake-game"

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
      <section id="snake-game" className="py-20">
        <div className="container mx-auto px-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Interactive Snake Game
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Have fun with this interactive Snake Game! Collect tech stack icons as you play and see how many technologies you can master.
          </p>
          <SnakeGame />
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
  )
}

