"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

export function ResumeHeader() {
  return (
    <div className="mb-12">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h2 className="text-2xl font-bold mb-2">Devrat Dave</h2>
        <h3 className="text-xl text-white/70 mb-4">Software Developer & Data Enthusiast</h3>
        <p className="text-white/70 mb-6 max-w-2xl">    
          A passionate Web Developer with hands-on experience in building modern web applications. Skilled in React, Next.js, and Typescript, with additional exposure to Machine Learning and Data Analytics. Focused on writing clean, maintainable code and creating responsive, user-friendly interfaces. Eager to contribute and grow in dynamic, collaborative environments.
        </p>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <span className="text-white/50 mr-2">Email:</span>
            <a href="mailto:devratdave02@hotmail.com" className="hover:text-white/90 transition-colors">
              devratdave02@hotmail.com
            </a>
          </div>
          <div className="flex items-center">
            <span className="text-white/50 mr-2">Location:</span>
            <span>New Delhi, India</span>
          </div>
          <div className="flex items-center">
            <span className="text-white/50 mr-2">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/devratdave"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/90 transition-colors inline-flex items-center"
            >
              LinkedIn
              <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}



