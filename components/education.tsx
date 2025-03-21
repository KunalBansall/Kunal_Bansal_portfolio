"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { GraduationCap, School } from "lucide-react"

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      institution: "Chitkara University, Rajpura",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      period: "2020 - 2024",
      grade: "CGPA: 9.28",
      icon: GraduationCap,
    },
    {
      institution: "R.S. Public Sr. Sec. School, Karnal",
      degree: "Class XII",
      period: "2019 - 2020",
      grade: "Percentage: 86.2%",
      icon: School,
    },
    {
      institution: "R.S. Public Sr. Sec. School, Karnal",
      degree: "Class X",
      period: "2017 - 2018",
      grade: "Percentage: 91.2%",
      icon: School,
    },
  ]

  return (
    <section id="education" ref={ref} className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="mb-10 relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300"
            >
              <div className="absolute -left-3 top-0 bg-background p-1 rounded-full border-2 border-primary">
                <edu.icon className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">{edu.institution}</h3>
              <p className="text-lg text-foreground/80">{edu.degree}</p>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <p className="text-sm text-foreground/60">{edu.period}</p>
                <p className="text-sm font-medium text-primary">{edu.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

