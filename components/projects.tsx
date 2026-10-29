"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [activeFilter, setActiveFilter] = useState<string>("All")

  // Enhanced project data with categories and screenshots
  const projects = [
    {
      title: "HojaoShuru — Team Job-Sharing Platform",
      description:
        "A private workspace for small teams to collect job openings, organize opportunities, and track their own applications.",
      features: [
        "Member registration, admin controls, and ownership-based editing with JWT sessions in HTTP-only cookies.",
        "Search, Asia/Kolkata date filters, pagination, and per-user applied markers for shared job listings.",
        "CSV and JSON import with validation previews, exact-link deduplication, and review of likely company/role duplicates.",
        "Filtered CSV/JSON exports, bulk copying, and reviewed application packs handed off to ChatGPT.",
        "Origin-based CSRF protection, bcrypt password hashing, request rate limits, and validated API inputs.",
      ],
      technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT", "Zod"],
      github: "https://github.com/KunalBansall/HojaoShuru",
      demo: "",
      categories: ["Web App", "MERN Stack", "Full Stack"],
      screenshots: [],
    },
    {
      title: "Gymzy — Multi-Tenant Gym Management SaaS",
      description:
        "A production SaaS platform that helps gyms manage tenants, members, subscriptions, payments, and daily operations from role-based dashboards.",
      features: [
        "Solely designed, built, and deployed owner, gym admin, trainer, and member dashboards with JWT, RBAC, and isolated API scopes.",
        "Recurring Razorpay billing with server-side HMAC verification and trial, active, past-due, and expired subscription states.",
        "Built an internal ad network with five placements, role/gym targeting, and per-impression analytics.",
        "E-commerce, workout planning, attendance, and Recharts revenue dashboards.",
        "React Query caching, server-side pagination, memoized rendering, and Cloudinary uploads with progress.",
        "Deployed as a live production product at gymzy.in.",
      ],
      technologies: ["ReactJS", "TypeScript", "NodeJS", "ExpressJS", "MongoDB", "Razorpay", "Cloudinary", "React Query", "Recharts"],
      github: "https://github.com/KunalBansall/ActiveHubFitTracker",
      demo: "https://www.gymzy.in/signin",
      categories: ["SaaS", "MERN Stack", "Full Stack"],
      screenshots: ["/screenshots/Dashboard.png?height=600&width=800", "/screenshots/MemberDetails.png?height=600&width=800", "/screenshots/MemberPage.png?height=600&width=800"],
    },
    {
      title: "Near-By",
      description:
        "A full-stack real estate marketplace using the MERN stack with JWT authentication, Google OAuth, and Firebase for secure user access.",
      features: [
        "Listing CRUD, REST APIs, advanced search and filtering, and Firebase image uploads.",
        "Reduced redundant API calls by approximately 40% through Redux Toolkit caching and selector memoization.",
        "Deployed on Render for scalability and reliability.",
        "Firebase and Google OAuth for secure user authentication.",
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
        "A MERN messaging application combining authenticated user access with instant, Socket.IO-powered conversations.",
      features: [
        "Google OAuth and JWT authentication for secure user access.",
        "Real-time messaging powered by Socket.io.",
        "Responsive chat interface with searchable users and conversation views.",
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

        <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-8">
          Independent products spanning SaaS, job sharing, real estate, and real-time communication.
          Explore the implementation details and source code below.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="min-w-0"
              >
                <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30 hover:scale-[1.03] hover:-translate-y-1">
                  {/* Project Screenshot Preview */}
                  {project.screenshots.length > 0 ? <Dialog>
                    <DialogTrigger asChild>
                      <button type="button" aria-label={`View screenshots of ${project.title}`} className="relative block w-full h-48 overflow-hidden cursor-pointer">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
                        <img
                          src={project.screenshots[0] || "/placeholder.svg"}
                          alt={`${project.title} preview`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-medium">View Screenshots</span>
                        </div>
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <DialogTitle>{project.title}</DialogTitle>
                      <DialogDescription>Project screenshots</DialogDescription>
                      <ProjectScreenshots project={project} />
                    </DialogContent>
                  </Dialog> : (
                    <div className="flex h-48 flex-col justify-center gap-3 bg-gradient-to-br from-primary/20 via-primary/10 to-background px-6">
                      <span className="text-xs font-medium uppercase tracking-widest text-primary">Team job workspace</span>
                      <p className="text-3xl font-bold">HojaoShuru</p>
                      <p className="text-sm text-muted-foreground">Collect. Organize. Apply.</p>
                    </div>
                  )}

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
                      {project.features.map((feature, i) => (
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
                    {project.demo && <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors hover:scale-110"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

      </div>
    </section>
  )
}

// Component for displaying project screenshots in a modal
function ProjectScreenshots({ project }: { project: { title: string; screenshots: string[] } }) {
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
        {project.screenshots.map((_: string, index: number) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              index === currentIndex ? "bg-primary w-4" : "bg-primary/30",
            )}
            aria-label={`Show screenshot ${index + 1}`}
            aria-pressed={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <Button variant="outline" size="icon" className="rounded-full" aria-label="Previous screenshot" onClick={prevSlide}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <Button variant="outline" size="icon" className="rounded-full" aria-label="Next screenshot" onClick={nextSlide}>
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}


