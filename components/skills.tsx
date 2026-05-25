"use client";

import { generateKeyPair } from "crypto";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiSocketdotio,
  SiJsonwebtokens,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-3xl text-orange-500" />,
    level: 95,
    color: "from-orange-400 to-orange-600",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-3xl text-blue-500" />,
    level: 90,
    color: "from-blue-400 to-blue-600",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-3xl text-yellow-400" />,
    level: 88,
    color: "from-yellow-400 to-yellow-500",
  },
  {
    name: "React.js",
    icon: <FaReact className="text-3xl text-cyan-400" />,
    level: 85,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-3xl text-white" />,
    level: 82,
    color: "from-gray-700 to-black",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-3xl text-green-500" />,
    level: 80,
    color: "from-green-500 to-green-700",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-3xl text-gray-300" />,
    level: 78,
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-3xl text-green-400" />,
    level: 80,
    color: "from-emerald-400 to-green-600",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-3xl text-orange-400" />,
    level: 75,
    color: "from-orange-400 to-yellow-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-3xl text-cyan-400" />,
    level: 92,
    color: "from-teal-400 to-cyan-500",
  },
];

const otherSkills = [
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="text-purple-500" />,
  },
  {
    name: "JWT Auth",
    icon: <SiJsonwebtokens className="text-pink-500" />,
  },
  {
    name: "Git & GitHub",
    icon: <FaGitAlt className="text-orange-500" />,
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio className="text-white" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-cyan-300" />,
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-blue-500" />,
  },
  {
    name: "Responsive Design",
    icon: "📱",
  },
];

export function Skills() {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full mb-6" />

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to build modern and scalable web
            applications.
          </p>
        </motion.div>

        {/* Main Skills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="p-6 rounded-2xl glass-card group cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {skill.icon}

                  <h3 className="font-semibold text-lg">
                    {skill.name}
                  </h3>
                </div>

                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={
                    isInView
                      ? { width: `${skill.level}%` }
                      : {}
                  }
                  transition={{
                    duration: 1,
                    delay: 0.5 + index * 0.1,
                  }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6 text-muted-foreground">
            Other Technologies & Tools
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : {}
                }
                transition={{
                  duration: 0.3,
                  delay: 0.8 + index * 0.05,
                }}
                whileHover={{
                  scale: 1.08,
                  y: -3,
                }}
                className="flex items-center gap-2 px-5 py-3 rounded-full glass-card text-sm font-medium cursor-default hover:bg-primary/10 transition-colors"
              >
                <span className="text-lg">
                  {skill.icon}
                </span>

                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}