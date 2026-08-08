"use client"

import { motion } from "framer-motion"
import { Heart, Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
 
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Github, href: "https://github.com/imamdihan-34", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/imam-dihan", label: "LinkedIn" },
  { icon: Mail, href: "mailto:imamdihan@gmail.com", label: "Email" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#home" className="text-2xl font-bold gradient-text">
              Md Imam Hassan Dihan
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Frontend Developer crafting clean, responsive interfaces with
              React and Next.js — backed by hands-on MERN stack experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label={item.label}
                >
                  <item.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Open for internships and remote opportunities worldwide.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Md Imam Hassan Dihan
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 sm:mt-0 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Back to Top
            <div className="w-8 h-8 rounded-lg glass-card flex items-center justify-center">
              <ArrowUp className="w-4 h-4" />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}