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
import { useState } from "react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeCategory, setActiveCategory] = useState("Programming Languages")

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", proficiency: 90 },
        { name: "C++", icon: SiCplusplus, color: "#00599C", proficiency: 85 },
        { name: "Java", icon: FaJava, color: "#007396", proficiency: 80 }, // ✅ Fixed `SiJava`
        { name: "Python", icon: SiPython, color: "#3776AB", suffix: "(Familiar)", proficiency: 70 },
      ],
    },
    {
      title: "Libraries/Frameworks",
      icon: Layout,
      skills: [
        { name: "ReactJS", icon: SiReact, color: "#61DAFB", proficiency: 90 },
        { name: "React Native", icon: SiReact, color: "#61DAFB", proficiency: 85 }, // ✅ Fixed `SiReacttable`
        { name: "Android", icon: SiAndroid, color: "#3DDC84", proficiency: 80 },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", proficiency: 90 },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", proficiency: 85 },
        { name: "NodeJS", icon: SiNodedotjs, color: "#339933", proficiency: 85 },
        { name: "ExpressJS", icon: SiExpress, color: "#000000", proficiency: 80 },
      ],
    },
    {
      title: "Real-time & Auth Tools",
      icon: Terminal,
      skills: [
        { name: "Socket.IO", icon: SiSocketdotio, color: "#010101", proficiency: 85 },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28", proficiency: 90 },
        { name: "JWT", icon: SiJsonwebtokens, color: "#000000", proficiency: 85 },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", proficiency: 90 },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", proficiency: 85 },
      ],
    },
    {
      title: "Containerization",
      icon: Server,
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED", proficiency: 85 },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5", proficiency: 80 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" ref={ref} className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      <div className="container mx-auto px-4 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Category Navigation */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:w-1/4"
          >
            <div className="sticky top-24 space-y-2">
              {skillCategories.map((category) => {
                const CategoryIcon = category.icon
                return (
                  <motion.button
                    key={category.title}
                    variants={itemVariants}
                    onClick={() => setActiveCategory(category.title)}
                    className={`w-full flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${
                      activeCategory === category.title
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "hover:bg-primary/10"
                    }`}
                  >
                    <CategoryIcon className="w-5 h-5" />
                    <span className="font-medium">{category.title}</span>
                  </motion.button>
                )
              })}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="lg:w-3/4"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {skillCategories
                .find((cat) => cat.title === activeCategory)
                ?.skills.map((skill, index) => {
                  const SkillIcon = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="group relative"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary/50 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                      <div className="relative flex flex-col items-center gap-4 bg-card p-6 rounded-xl">
                        <div className="w-16 h-16 flex items-center justify-center">
                          <SkillIcon
                            className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
                            style={{ color: skill.color }}
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-medium mb-1">{skill.name}</h3>
                          {skill.suffix && (
                            <span className="text-xs text-muted-foreground">{skill.suffix}</span>
                          )}
                          <div className="w-full h-1.5 bg-primary/20 rounded-full mt-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.proficiency}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="h-full bg-primary rounded-full"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block rounded-lg bg-primary/10 px-6 py-3">
            <p className="text-foreground/90">
              <span className="font-semibold text-primary">Achievement:</span> Solved more than 500
              questions across platforms LeetCode, Coding Ninjas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
