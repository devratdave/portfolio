"use client"

import { motion } from "framer-motion"

interface TimelineItemProps {
  index: number
  title: string
  subtitle: string
  period: string
  description: string
  items: string[]
  itemsLabel?: string
}

export function TimelineItem({
  index,
  title,
  subtitle,
  period,
  description,
  items,
  itemsLabel = "",
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-l-2 border-white/20 pl-6 py-2 relative"
    >
      <div className="absolute w-3 h-3 bg-white rounded-full -left-[7px] top-7" />
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white/70">{subtitle}</span>
        <span className="text-white/50 text-sm">{period}</span>
      </div>
      <p className="text-white/70 mb-4">{description}</p>
      <div className="text-white/70">
        {itemsLabel && <span className="font-medium">{itemsLabel}</span>}
        <ul className="mt-2 space-y-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70 mt-2 mr-2"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

