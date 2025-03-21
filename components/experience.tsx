"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Briefcase } from "lucide-react"

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Nyalazone Solutions",
      period: "January 2024 - June 2024",
      description: [
        "Developed an Asset Management System using Angular for the front-end and Flask for the back-end, managing employee data, tracking asset states, and handling asset allocation efficiently during an internship.",
        "Integrated Angular with Flask for seamless communication and data consistency, enhancing skills in TypeScript, PostgreSQL, and AWS.",
        "Gained hands-on experience in a collaborative team environment while working on real-world asset management challenges.",
      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="mb-10 relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-3 top-0 bg-background p-1 rounded-full border-2 border-primary">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <p className="text-lg text-foreground/80">{exp.company}</p>
                <p className="text-sm text-foreground/60">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

