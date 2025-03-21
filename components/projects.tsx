"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeFilter, setActiveFilter] = useState<string>("All")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // Enhanced project data with categories and screenshots
  const projects = [
    {
      title: "ActiveHub FitTracker",
      description:
        "A full-stack gym management software to streamline operations, enhance member engagement, and automate membership tracking.",
      features: [
        "Member dashboards, attendance tracking, and automated membership notifications.",
        "Real-time chat integration using Tawk.to and email notifications via Nodemailer.",
        "Cloudinary for seamless image uploads and storage.",
        "Deployed on Render for high performance and scalability.",
      ],
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TypeScript", "Cloudinary"],
      github: "https://github.com/KunalBansall/ActiveHubFitracker",
      demo: "https://activehubfitracker.onrender.com/",
      categories: ["Web App", "MERN Stack", "Full Stack"],
      screenshots: ["/screenshots/Dashboard.png?height=600&width=800", "/screenshots/MemberDetails.png?height=600&width=800", "/screenshots/MemberPage.png?height=600&width=800"],
    },
    {
      title: "Near-By",
      description:
        "A full-stack real estate marketplace using the MERN stack with JWT authentication, Google OAuth, and Firebase for secure user access.",
      features: [
        "Robust CRUD operations, REST APIs, and advanced search functionality.",
        "Optimized state management using Redux Toolkit for enhanced performance.",
        "Deployed on Render for scalability and reliability.",
        "Firebase for secure user authentication and data storage.",
        "Google Maps API integration for location-based services.",
      ],
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
      github: "https://github.com/KunalBansall/Near-By",
      demo: "https://near-by-wdv4.onrender.com/",
      categories: ["Web App", "MERN Stack", "Full Stack"],
      screenshots: ["/screenshots/NHome.png?height=600&width=800","/screenshots/NSearch.png?height=600&width=800", "/screenshots/NPrfile.png?height=600&width=800" ],
    },
    {
      title: "AmigoChat",
      description:
        "A real-time chat application powered by the MERN stack, enabling secure user authentication, instant messaging, and WebSocket communication.",
      features: [
        "Google OAuth and JWT authentication for secure user access.",
        "Real-time messaging powered by Socket.io.",
        "Modern UI with a responsive chat experience.",
        "Deployed on Render for high availability.",
      ],
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Socket.io", "JWT", "Google OAuth"],
      github: "https://github.com/KunalBansall/AmigoChat",
      demo: "https://auth-app-main-4bam.onrender.com/",
      categories: ["Web App", "MERN Stack", "Real-time"],
      screenshots: [ "/screenshots/search.png?height=600&width=800", "/screenshots/Chat.png?height=600&width=800","/screenshots/GoogleSign.png?height=600&width=800", ],
    },
  ]

  // Extract all unique categories
  const allCategories = ["All", ...Array.from(new Set(projects.flatMap((p) => p.categories)))]

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.categories.includes(activeFilter))

  // Scroll functions for carousel
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef
      const scrollAmount = direction === "left" ? -400 : 400
      current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }
  
  return (
    <section id="projects" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          Projects
        </motion.h2>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {allCategories.map((category, index) => (
            <Button
              key={index}
              variant={activeFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Carousel Navigation */}
        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          {/* Projects Carousel */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 py-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="min-w-[350px] md:min-w-[400px] lg:min-w-[450px] snap-start transition-all duration-300"
              >
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 hover:scale-[1.03] hover:-translate-y-1">
                  {/* Project Screenshot Preview */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <div
                        className="relative h-48 overflow-hidden cursor-pointer"
                        onClick={() => setSelectedProject(index)}
                      >
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                        <img
                          src={project.screenshots[0] || "/placeholder.svg"}
                          alt={`${project.title} preview`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-medium">View Screenshots</span>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <ProjectScreenshots project={project} />
                    </DialogContent>
                  </Dialog>

                  <CardHeader>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.categories.map((category, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/10">
                          {category}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors relative z-10">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                      {project.features.slice(0, 2).map((feature, i) => (
                        <li key={i} className="text-sm">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="bg-primary/5 hover:bg-primary/10">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors hover:scale-110"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors hover:scale-110"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-background/80 backdrop-blur-sm"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Component for displaying project screenshots in a modal
function ProjectScreenshots({ project }: { project: any }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === project.screenshots.length - 1 ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? project.screenshots.length - 1 : prevIndex - 1))
  }

  return (
    <div className="relative">
      <div className="relative h-[60vh] overflow-hidden rounded-lg">
        {project.screenshots.map((screenshot: string, index: number) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              index === currentIndex ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <img
              src={screenshot || "/placeholder.svg"}
              alt={`${project.title} screenshot ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {project.screenshots.map((_: any, index: number) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex ? "bg-primary w-4" : "bg-primary/30",
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <Button variant="outline" size="icon" className="rounded-full" onClick={prevSlide}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <Button variant="outline" size="icon" className="rounded-full" onClick={nextSlide}>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}



