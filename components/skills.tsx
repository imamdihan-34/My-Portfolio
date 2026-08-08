"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import {
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiFramer,
} from "react-icons/si"

// Core Frontend
const coreSkills = [
  {
    name: "HTML5",
    icon: SiHtml5,
    color: "text-orange-500",
  },
  {
    name: "CSS3",
    icon: SiCss,
    color: "text-blue-500",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-cyan-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-foreground",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-400",
  },
]

// Backend
const backendSkills = [
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-foreground",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
  },
  {
    name: "Firebase",
    icon: SiFirebase,
    color: "text-yellow-500",
  },
]

// Tools
const toolSkills = [
  {
    name: "Git & GitHub",
    icon: SiGit,
    color: "text-orange-500",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    color: "text-pink-500",
  },
]

export function Skills() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section id="skills" className="relative py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
            What I work with
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6" />

          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to build modern, scalable and
            user-focused web applications.
          </p>
        </motion.div>

        {/* ================= CORE FRONTEND ================= */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center text-lg font-semibold mb-7"
          >
            Core <span className="gradient-text">Frontend</span>
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {coreSkills.map((skill, index) => {
              const Icon = skill.icon

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : {}
                  }
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -6,
                    scale: 1.03,
                  }}
                  className="
                    group
                    flex flex-col
                    items-center
                    justify-center
                    gap-3
                    min-h-[140px]
                    rounded-2xl
                    border border-border/50
                    bg-background/40
                    backdrop-blur-xl
                    p-5
                    transition-all
                    duration-300
                    hover:border-primary/40
                    hover:bg-primary/5
                    hover:shadow-lg
                    hover:shadow-primary/5
                  "
                >
                  <div
                    className="
                      flex items-center justify-center
                      w-14 h-14
                      rounded-2xl
                      bg-muted/50
                      border border-border/50
                      transition-all duration-300
                      group-hover:scale-110
                      group-hover:bg-primary/10
                    "
                  >
                    <Icon
                      className={`w-7 h-7 ${skill.color}`}
                    />
                  </div>

                  <span className="font-medium text-sm sm:text-base">
                    {skill.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ================= BACKEND ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-14"
        >
          <h3 className="text-center text-lg font-semibold mb-7">
            Backend <span className="gradient-text">Technologies</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {backendSkills.map((skill, index) => {
              const Icon = skill.icon

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : {}
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.04,
                  }}
                  className="
                    group
                    flex items-center gap-3
                    px-5 py-3.5
                    rounded-xl
                    border border-border/50
                    bg-background/40
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-primary/40
                    hover:bg-primary/5
                  "
                >
                  <Icon
                    className={`w-5 h-5 ${skill.color}`}
                  />

                  <span className="text-sm font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ================= TOOLS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold mb-7">
            Tools & <span className="gradient-text">Workflow</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {toolSkills.map((skill, index) => {
              const Icon = skill.icon

              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : {}
                  }
                  transition={{
                    duration: 0.4,
                    delay: 0.6 + index * 0.08,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.04,
                  }}
                  className="
                    group
                    flex items-center gap-3
                    px-5 py-3.5
                    rounded-xl
                    border border-border/50
                    bg-background/40
                    backdrop-blur-xl
                    transition-all duration-300
                    hover:border-primary/40
                    hover:bg-primary/5
                  "
                >
                  <Icon
                    className={`w-5 h-5 ${skill.color}`}
                  />

                  <span className="text-sm font-medium">
                    {skill.name}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}