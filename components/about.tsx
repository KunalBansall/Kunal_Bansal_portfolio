"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert mx-auto"
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
        </div>
      </div>
    </section>
  )
}

