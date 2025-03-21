"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Layout, Server, Terminal } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "C++", "Java", "Python (Familiar)"],
    },
    {
      title: "Libraries/Frameworks",
      icon: Layout,
      skills: ["ReactJS", "React Native", "Android", "Tailwind", "Bootstrap", "NodeJS", "ExpressJS"],
    },
    {
      title: "Real-time & Auth Tools",
      icon: Terminal,
      skills: ["Socket.IO", "Firebase", "JWT"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      title: "Containerization",
      icon: Server,
      skills: ["Docker", "Kubernetes"],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card hover:bg-card/80 border border-primary/10 hover:border-primary/30 rounded-lg p-6 transition-all duration-300 hover:shadow-md group"
            >
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-primary/5 text-foreground/80 px-3 py-1 rounded-full text-sm hover:bg-primary/10 hover:text-foreground transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-foreground/70">
            <span className="font-semibold">Achievement:</span> Solved more than 500 questions across platforms
            LeetCode, Coding Ninjas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

