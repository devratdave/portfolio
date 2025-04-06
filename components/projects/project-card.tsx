"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
  index: number
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

export function ProjectCard({ project, index, isHovered, onHover, onLeave }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className={cn("object-cover transition-transform duration-500", isHovered ? "scale-110" : "scale-100")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80" />

        {project.featured && <Badge className="absolute top-4 left-4 bg-white text-black">Featured</Badge>}

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-white/70 text-sm line-clamp-2 mb-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="bg-white/10">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="bg-white/10">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex gap-3">
            {project.github && (
              <Button size="sm" variant="outline" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
            {project.demo && (
              <Button size="sm" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

