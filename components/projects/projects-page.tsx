"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ProjectCard } from "@/components/projects/project-card"
import { projectsData } from "@/lib/data"
import { EmptyProjects } from "@/components/projects/empty-projects"
import { NameBadge } from "@/components/shared/name-badge"

export function ProjectsPage() {
  const [filter, setFilter] = useState<string | null>(null)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = filter ? projectsData.filter((project) => project.tags.includes(filter)) : projectsData

  const allTags = Array.from(new Set(projectsData.flatMap((project) => project.tags)))

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">My Projects</h1>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="flex flex-wrap gap-2">
              {filter && (
                <Badge
                  variant="outline"
                  className="cursor-pointer bg-white/5 hover:bg-white/10 transition-colors"
                  onClick={() => setFilter(null)}
                >
                  Clear Filter
                </Badge>
              )}
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={cn(
                    "cursor-pointer transition-colors",
                    filter === tag ? "bg-white text-black hover:bg-white/90" : "bg-white/5 hover:bg-white/10",
                  )}
                  onClick={() => setFilter(tag === filter ? null : tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isHovered={hoveredProject === project.id}
              onHover={() => setHoveredProject(project.id)}
              onLeave={() => setHoveredProject(null)}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && <EmptyProjects onClearFilter={() => setFilter(null)} />}
      </div>
      <NameBadge />
    </div>
  )
}

