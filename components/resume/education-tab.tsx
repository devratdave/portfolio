"use client"
import { educationData } from "@/lib/data"
import { TimelineItem } from "@/components/resume/timeline-item"

export function EducationTab() {
  return (
    <div className="space-y-8">
      {educationData.map((edu, index) => (
        <TimelineItem
          key={index}
          index={index}
          title={edu.degree}
          subtitle={edu.institution}
          period={edu.period}
          description={edu.description}
          items={edu.courses}
          itemsLabel="Relevant Courses:"
        />
      ))}
    </div>
  )
}

