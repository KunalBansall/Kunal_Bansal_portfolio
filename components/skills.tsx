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

  const [activeCategory, setActiveCategory] = useState("Languages & Frontend")

  const skillCategories = [
    {
      title: "Languages & Frontend",
      icon: Code,
      skills: [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiJavascript, color: "#3178C6" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiReact, color: "#FFFFFF" },
        { name: "Redux Toolkit", icon: SiReact, color: "#764ABC" },
        { name: "React Query", icon: SiReact, color: "#FF4154" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      ],
    },
    {
      title: "Backend & APIs",
      icon: Server,
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#888888" },
        { name: "REST APIs", icon: SiNodedotjs, color: "#339933" },
        { name: "Socket.IO", icon: SiSocketdotio, color: "#888888" },
        { name: "JWT & Refresh Tokens", icon: SiJsonwebtokens, color: "#D63AFF" },
        { name: "RBAC", icon: SiJsonwebtokens, color: "#7C3AED" },
        { name: "Flask", icon: SiPython, color: "#888888" },
      ],
    },
    {
      title: "Data, Payments & Web3",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
        { name: "Razorpay & HMAC Webhooks", icon: SiJavascript, color: "#3395FF" },
        { name: "Crypto Payments", icon: SiJsonwebtokens, color: "#7C3AED" },
        { name: "Stablecoins", icon: SiJsonwebtokens, color: "#339933" },
        { name: "Cloudinary", icon: SiReact, color: "#3448C5" },
      ],
    },
    {
      title: "DevOps & Quality",
      icon: Terminal,
      skills: [
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
        { name: "Microsoft Azure", icon: SiDocker, color: "#0078D4" },
        { name: "Azure DevOps & CI/CD", icon: SiDocker, color: "#0078D4" },
        { name: "SonarQube", icon: SiSocketdotio, color: "#4E9BCD" },
        { name: "Git & GitHub", icon: SiJsonwebtokens, color: "#F05032" },
        { name: "Postman", icon: SiJavascript, color: "#FF6C37" },
      ],
    },
  ]

  skillCategories.push({
    title: "AI Development Tools",
    icon: Terminal,
    skills: ["Claude", "Cursor", "Codex", "Windsurf", "Antigravity"].map(name => ({ name, icon: SiJavascript, color: "#888888" })),
  })

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
                ?.skills.map((skill) => {
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
              <span className="font-semibold text-primary">Achievement:</span> Solved 500+ data structures and algorithms problems on LeetCode.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
