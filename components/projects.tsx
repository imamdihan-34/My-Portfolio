
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, Folder } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  // =========================
  // PROJECT 1 — LEGALEASE
  // =========================
  {
    title: "LegalEase",
    description:
      "A modern lawyer booking platform that connects clients with legal professionals. Users can explore lawyers, view their profiles, and book legal consultations through an intuitive interface.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
    tags: ["HTML5", "CSS3", "React", "Next.js"],
    github:
      "https://github.com/imamdihan-34/Assignment-10-client-side",
    serverGithub:
      "https://github.com/imamdihan-34/Assignment-10-server-site",
    live: "https://legalease-client-new.vercel.app/",
    featured: true,
  },

  // =========================
  // PROJECT 2 — MEDIQUEUE
  // =========================
  {
    title: "MediQueue",
    description:
      "A tutor booking platform designed to help students discover tutors, explore their expertise, and book suitable tutoring sessions through a simple and user-friendly experience.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop",
    tags: ["HTML5", "CSS3", "React", "Next.js"],
    github:
      "https://github.com/imamdihan-34/Assignment-9-client-side",
    serverGithub:
      "https://github.com/imamdihan-34/Assignment-9-server-site",
    live: "https://mediqueue-client-side.vercel.app/",
    featured: true,
  },

  // =========================
  // PROJECT 3 — QURBANI ONLINE
  // =========================
  {
    title: "Qurbani Online",
    description:
      "An online Qurbani shopping platform where users can explore and purchase Qurbani animals through a clean, responsive, and user-friendly web interface.",
    image:
      "https://i.ibb.co.com/Fb3bqS4b/images.jpg",
    tags: ["HTML5", "CSS3", "React", "Next.js"],
    github:
      "https://github.com/imamdihan-34/Assignment-8",
    live: "https://qurbani-online.netlify.app/",
    featured: true,
  },

  // =========================
  // PROJECT 4 — KEEN KEEPER
  // =========================
  {
    title: "Keen Keeper",
    description:
      "A React-based social platform designed to help users discover and connect with friends, creating a simple and engaging experience for building new connections.",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
    tags: ["React", "JavaScript", "CSS3"],
    github:
      "https://github.com/imamdihan-34/Keen-Keeper-Project",
    live: "https://ph-a-7-keen-keeper.netlify.app/",
    featured: false,
  },
]

export function Projects() {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  return (
    <section id="projects" className="relative py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* =========================
            SECTION HEADER
        ========================== */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6" />

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent projects, built with modern web
            technologies and focused on creating practical user experiences.
          </p>
        </motion.div>

        {/* =========================
            PROJECT GRID
        ========================== */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="group rounded-2xl glass-card overflow-hidden"
            >

              {/* =========================
                  PROJECT IMAGE
              ========================== */}
              <div className="relative h-52 overflow-hidden">

                <Image
                  src={project.image}
                  alt={`${project.title} project`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Image Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70" />

                {/* =========================
                    HOVER ACTIONS
                ========================== */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-background/60 backdrop-blur-sm">

                  {/* Live Demo */}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      flex items-center gap-2
                      px-4 py-2.5
                      rounded-lg
                      bg-primary
                      text-primary-foreground
                      text-sm
                      font-medium
                      shadow-lg
                    "
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>

                  {/* Client GitHub */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      flex items-center gap-2
                      px-4 py-2.5
                      rounded-lg
                      glass-card
                      text-sm
                      font-medium
                      border border-border/50
                    "
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </motion.a>

                  {/* Server GitHub */}
                  {project.serverGithub && (
                    <motion.a
                      href={project.serverGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.95 }}
                      className="
                        flex items-center gap-2
                        px-4 py-2.5
                        rounded-lg
                        glass-card
                        text-sm
                        font-medium
                        border border-border/50
                      "
                    >
                      <Github className="w-4 h-4" />
                      Server
                    </motion.a>
                  )}

                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div
                    className="
                      absolute top-4 right-4
                      px-3 py-1
                      rounded-full
                      bg-gradient-to-r
                      from-purple-500
                      to-blue-500
                      text-xs
                      font-medium
                      text-white
                    "
                  >
                    Featured
                  </div>
                )}
              </div>

              {/* =========================
                  PROJECT INFORMATION
              ========================== */}
              <div className="p-6">

                {/* Project Title */}
                <div className="flex items-center gap-2 mb-3">
                  <Folder className="w-4 h-4 text-primary" />

                  <h3 className="text-xl font-semibold">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-2.5 py-1
                        rounded-md
                        bg-primary/10
                        text-xs
                        font-medium
                        text-primary
                        border border-primary/10
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* =========================
            VIEW ALL PROJECTS
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.8,
          }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="
              glass-card
              border-primary/30
              hover:bg-primary/10
            "
          >
            <a
              href="https://github.com/imamdihan-34"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  )
}


