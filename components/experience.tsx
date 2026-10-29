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
      title: "Software Engineer",
      company: "Actalink · Remote, London, UK",
      period: "September 2026 - Present",
      description: [
        "Building Web3 payment products: crypto payment links, recurring subscriptions, and hosted checkout on blockchain and stablecoin rails.",
        "Evolving the React platform and driving its migration to Next.js to improve performance, SEO, accessibility, and scalability.",
        "Authoring developer documentation for checkout APIs, subscription Paylinks, payment tracking, blockchain payment webhooks, and cancellation.",
        "Partnering with product and engineering on multi-chain payments, supported tokens, crypto wallets, and stablecoin settlement.",
      ],
    },
    {
      title: "Frontend Developer",
      company: "ISourse Technologies Pvt. Ltd.",
      period: "July 2025 - August 2026",
      description: [
        "Architected config-driven React and TypeScript modules for CRM, HRMS, recruitment, and gig-economy products used by 8+ enterprise clients including Blinkit, Swiggy, DishTV, NX Group, and DTDC Australia, reducing feature delivery time by approximately 30%.",
        "Built JWT login and refresh-token flows with Axios interceptors, RBAC, and permission-driven interfaces across 1,000+ secure API integrations.",
        "Delivered recruitment and onboarding workflows plus a LeetCode-style assessment portal with anti-cheating controls and PDF reporting for 300+ candidates.",
        "Built dynamic master-data mapping across 5+ HRMS entities to keep data consistent across portals, plus RBAC-controlled gig onboarding and proof-of-delivery validation for XpressBees.",
      ],
    },
    {
      title: "Software Development Engineer Intern",
      company: "Nyalazone Solutions",
      period: "January 2024 - June 2024",
      description: [
        "Developed an Asset Management System using Angular for the front-end and Flask for the back-end, managing employee data, tracking asset states, and handling asset allocation efficiently during an internship.",
        "Integrated Angular with Flask and PostgreSQL on AWS, improving query performance by approximately 25% while maintaining reliable data flows.",
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
