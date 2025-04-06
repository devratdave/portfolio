"use client"

import { Button } from "@/components/ui/button"

interface EmptyProjectsProps {
  onClearFilter: () => void
}

export function EmptyProjects({ onClearFilter }: EmptyProjectsProps) {
  return (
    <div className="text-center py-20">
      <h3 className="text-2xl font-semibold mb-4">No projects found</h3>
      <p className="text-white/70 mb-6">Try changing your filter or check back later for new projects.</p>
      <Button onClick={onClearFilter}>Clear Filter</Button>
    </div>
  )
}

