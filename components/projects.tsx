"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "ActiveHub FitTracker",
      description:
        "A full-stack gym management software to streamline gym operations, improve member engagement, and track memberships effectively.",
      features: [
        "Implemented features like member dashboards, attendance tracking, membership notifications, and email notifications using Nodemailer.",
        "Enhanced user engagement through real-time chat integration using tawk.to and optimized the user interface with React and TailwindCSS.",
      ],
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "TypeScript", "Cloudinary"],
     github: "https://github.com/KunalBansall/ActiveHubFitracker",
      demo: "https://activehubfitracker.onrender.com/",
    },
    {
      title: "Near-By",
      description:
        "A full-stack real estate marketplace using the MERN stack with features like JWT authentication, Google OAuth, and Firebase for secure user access.",
      features: [
        "Built robust CRUD operations and REST APIs for property listings, advanced search functionality, and image uploads, ensuring smooth performance and a user-friendly interface.",
        "Deployed the application on Render and optimized state management using Redux Toolkit, enhancing the user experience and application efficiency.",
      ],
      technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase"],
       github: "https://github.com/KunalBansall/Near-By",
      demo: "https://near-by-wdv4.onrender.com/",
    },
  ]

  return (
    <section id="projects" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-all duration-300 border-primary/10 hover:border-primary/30">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
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
                    className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-foreground/70 hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Live Demo
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

