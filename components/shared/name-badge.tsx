"use client"

import { motion } from "framer-motion"

export function NameBadge() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <span className="text-sm font-medium">Devrat Dave</span>
    </motion.div>
  )
}