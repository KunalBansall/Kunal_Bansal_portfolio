"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Layout, Server, Terminal } from "lucide-react"
import {
  SiJavascript,
  SiCplusplus,
  SiPython,
  SiReact,
  SiAndroid,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiFirebase,
  SiJsonwebtokens,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
} from "react-icons/si"
import { FaJava } from "react-icons/fa" // ✅ Correct import for Java icon
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "Java", icon: FaJava, color: "#007396" }, // ✅ Fixed `SiJava`
        { name: "Python", icon: SiPython, color: "#3776AB", suffix: "(Familiar)" },
      ],
    },
    {
      title: "Libraries/Frameworks",
      icon: Layout,
      skills: [
        { name: "ReactJS", icon: SiReact, color: "#61DAFB" },
        { name: "React Native", icon: SiReact, color: "#61DAFB" }, // ✅ Fixed `SiReacttable`
        { name: "Android", icon: SiAndroid, color: "#3DDC84" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
        { name: "NodeJS", icon: SiNodedotjs, color: "#339933" },
        { name: "ExpressJS", icon: SiExpress, color: "#000000" },
      ],
    },
    {
      title: "Real-time & Auth Tools",
      icon: Terminal,
      skills: [
        { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "JWT", icon: SiJsonwebtokens, color: "#000000" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      ],
    },
    {
      title: "Containerization",
      icon: Server,
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      ],
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
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon // ✅ Fix for category.icon component
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-card hover:bg-card/80 border border-primary/10 hover:border-primary/30 rounded-lg p-6 transition-all duration-300 hover:shadow-md group"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 p-2 rounded-full mr-4 group-hover:bg-primary/20 transition-colors">
                    <CategoryIcon className="h-5 w-5 text-primary" /> {/* ✅ Fixed component usage */}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                  <TooltipProvider>
                    {category.skills.map((skill, i) => {
                      const SkillIcon = skill.icon // ✅ Fix for skill.icon component
                      return (
                        <Tooltip key={i}>
                          <TooltipTrigger asChild>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              className="flex flex-col items-center justify-center"
                            >
                              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-card shadow-sm hover:shadow-md transition-all duration-300 p-2">
                                <SkillIcon
                                  className="w-8 h-8 transition-transform duration-300"
                                  style={{ color: skill.color }}
                                /> {/* ✅ Fixed component usage */}
                              </div>
                            </motion.div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>
                              {skill.name} {skill.suffix || ""}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      )
                    })}
                  </TooltipProvider>
                </div>
              </motion.div>
            )
          })}
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
