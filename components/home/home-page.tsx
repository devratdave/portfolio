"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, MousePointer } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { CustomCursor } from "@/components/shared/custom-cursor"
import { BackgroundGrid } from "@/components/shared/background-grid"
import { SkillCard } from "@/components/home/skill-card"
import { NameBadge } from "@/components/shared/name-badge"

export function HomePage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])

  const skills = [
    { title: "Frontend Development", desc: "React, Next.js, TypeScript, Tailwind CSS" },
    { title: "Backend Development", desc: "Node.js, Express, MongoDB, PostgreSQL" },
    { title: "Machine Learning", desc: "Scikit Learn, Seaborn, Pandas, Numpy, Matplotlib" },
    // { title: "DevOps", desc: "Docker, CI/CD, AWS, Vercel" },
  ]

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <CustomCursor />
      <BackgroundGrid />
      <SiteHeader />

      <main ref={ref} className="relative">
        <section className="min-h-screen flex flex-col justify-center relative z-10 px-6 md:px-12">
          <motion.div style={{ y, opacity }} className="max-w-4xl mx-auto">
            <motion.div className="space-y-4">
              <motion.p
                className="text-xl md:text-2xl font-medium text-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                data-cursor-text
              >
                Hi, I am
              </motion.p>
              <motion.h1
                className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                data-cursor-text
              >
                Devrat Dave
              </motion.h1>

              <div className="h-2 md:h-4"></div>

              <motion.div
                className="inline-block relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-20 bg-purple-500"></span>
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-purple-300 pl-2 mb-8 uppercase"
                  data-cursor-text
                >
                  Software Developer
                  <br />&
                  Data Enthusiast
                </h2>
              </motion.div>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-white/70 max-w-2xl mb-8 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              data-cursor-text
            >
              I specialise in full-stack development backed by data science and economic logic to deliver impactful user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
                data-cursor-text
              >
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <MousePointer className="h-6 w-6 animate-bounce" />
            <span className="text-sm text-white/50 mt-2">Scroll to explore</span>
          </motion.div>
        </section>

        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 bg-gradient-to-b from-black to-gray-900">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-5xl font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-cursor-text
            >
              Featured Skills
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <SkillCard key={index} title={skill.title} description={skill.desc} index={index} />
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
                data-cursor-text
              >
                <Link href="/resume">
                  View Full Resume <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <NameBadge />
      <SiteFooter />
    </div>
  )
}

