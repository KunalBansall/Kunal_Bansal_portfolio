"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Calendar, Briefcase, GraduationCap, Code } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timelineItems = [
   
    {
      year: "July 2024",
      title: "Computer Science Degree",
      description: "Graduated with honors, specializing in web development",
      icon: <GraduationCap className="h-5 w-5" />,
    },
    {
      year: "June 2024",
      title: "First Major Project",
      description: "Built a full-stack e-commerce platform with MERN stack NearBy",
      icon: <Code className="h-5 w-5" />,
    },{
      year: "Jan 2024",
      title: "Internship at Nyalazone Solutions",
      description: "Developed an Asset Management System using Angular and Flask",
      icon: <Briefcase className="h-5 w-5" />,
    },
    
    {
      year: "2020",
      title: "Started Coding Journey",
      description: "Began learning web development fundamentals",
      icon: <Calendar className="h-5 w-5" />,
    },
  ]

  const funFacts = [
    "I love debugging more than writing code 🚀",
    "I once built an app in 24 hours ⏳",
    "My code is powered by coffee and curiosity ☕",
  ]

  return (
    <section id="about" ref={ref} className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert mx-auto mb-16"
          >
            <p>
              I specialize in building responsive and user-friendly web applications using modern technologies like
              React, Node.js, and MongoDB. My recent internship at Nyalazone Solutions allowed me to apply my skills in
              a real-world setting, developing an Asset Management System using Angular and Flask.
            </p>
            <p>
              I'm currently focused on expanding my expertise in mobile development, working with React Native and
              Android development to build cross-platform and native mobile applications. This allows me to create
              seamless experiences across web and mobile platforms.
            </p>
            <p>
              When I'm not coding, I enjoy solving algorithmic problems on platforms like LeetCode and continuously
              expanding my knowledge through certifications and courses.
            </p>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">My Journey</h3>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

              <div className="space-y-12">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                      <div className="font-bold text-lg">{item.title}</div>
                      <div className="text-muted-foreground">{item.description}</div>
                    </div>
                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-md">
                      {item.icon}
                    </div>
                    <div className={`w-1/2 ${index % 2 === 0 ? "pl-8" : "pr-8 text-right"}`}>
                      <div className="text-xl font-bold">{item.year}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Fun Facts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card rounded-lg p-8 shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Fun Facts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  className="bg-muted/50 p-4 rounded-md text-center text-lg font-medium"
                >
                  {fact}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

