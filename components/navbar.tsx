"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors flex items-center"
        >
          KB
          <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">MERN DEV</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col justify-center items-center md:hidden transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <nav className="flex flex-col space-y-6 text-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

