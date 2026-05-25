"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, GraduationCap, Calendar } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "Frontend Developer Intern",
    organization: "Tech Startup Inc.",
    period: "Jun 2024 - Present",
    description:
      "Developing responsive web applications using React and Next.js. Collaborating with design teams to implement pixel-perfect UI components and optimize performance.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    type: "work",
    title: "Freelance Web Developer",
    organization: "Self-Employed",
    period: "Jan 2023 - May 2024",
    description:
      "Built custom web solutions for small businesses and startups. Delivered 10+ projects including e-commerce sites, portfolios, and web applications.",
    skills: ["MERN Stack", "WordPress", "Firebase", "UI/UX"],
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    organization: "University of Technology",
    period: "2021 - 2025",
    description:
      "Specializing in Software Engineering with a focus on web technologies. Maintaining a 3.8 GPA while actively participating in coding clubs and hackathons.",
    skills: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering"],
  },
  {
    type: "education",
    title: "Full Stack Web Development",
    organization: "Online Certification - Coursera",
    period: "2022",
    description:
      "Completed comprehensive certification covering modern web development practices, including frontend frameworks, backend development, and database management.",
    skills: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 md:-translate-x-1/2" />

          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              <div
                className={`ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-2xl glass-card"
                >
                  {/* Header */}
                  <div
                    className={`flex items-center gap-3 mb-4 ${
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        item.type === "work"
                          ? "bg-gradient-to-r from-purple-500/20 to-purple-600/20"
                          : "bg-gradient-to-r from-blue-500/20 to-blue-600/20"
                      }`}
                    >
                      {item.type === "work" ? (
                        <Briefcase className="w-5 h-5 text-purple-400" />
                      ) : (
                        <GraduationCap className="w-5 h-5 text-blue-400" />
                      )}
                    </div>
                    <div className={index % 2 === 0 ? "md:text-right" : ""}>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-primary">{item.organization}</p>
                    </div>
                  </div>

                  {/* Period */}
                  <div
                    className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    {item.period}
                  </div>

                  {/* Description */}
                  <p
                    className={`text-muted-foreground mb-4 ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Skills */}
                  <div
                    className={`flex flex-wrap gap-2 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 top-6 md:-translate-x-1/2">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.2 }}
                  className={`w-4 h-4 rounded-full border-4 ${
                    item.type === "work"
                      ? "bg-purple-500 border-purple-500/30"
                      : "bg-blue-500 border-blue-500/30"
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
