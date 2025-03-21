"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award } from "lucide-react"

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const certifications = [
    {
      title: "Advanced Web Development",
      issuer: "Coding Ninjas",
      year: "2021",
    },
    {
      title: "Developing Front End Apps using React",
      issuer: "Coursera",
      year: "2024",
    },
    {
      title: "Back-End Development using JavaScript and Node.js",
      issuer: "Devtown",
      year: "2022",
    },
    {
      title: "Object Oriented Programming",
      issuer: "Coding Ninjas",
      year: "2021",
    },
    {
      title: "Developing Back-End Apps with Node.js and Express",
      issuer: "Coursera",
      year: "2024",
    },
    {
      title: "IBM Full Stack Software Developer",
      issuer: "Coursera",
      year: "2024",
    },
  ]

  return (
    <section id="certifications" ref={ref} className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Certifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-card hover:bg-card/80 border border-primary/10 hover:border-primary/30 rounded-lg p-6 transition-all duration-300 hover:shadow-md group"
            >
              <div className="flex items-start mb-4">
                <div className="bg-primary/10 p-2 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

