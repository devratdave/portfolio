"use client"

import { motion } from "framer-motion"

interface SkillCardProps {
  title: string
  description: string
  index: number
}

export function SkillCard({ title, description, index }: SkillCardProps) {
  return (
    <motion.div
      className="p-6 rounded-xl border border-white/10 backdrop-blur-sm hover:border-white/30 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      data-cursor-text
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  )
}

