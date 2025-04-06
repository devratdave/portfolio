"use client"
import { experienceData } from "@/lib/data"
import { TimelineItem } from "@/components/resume/timeline-item"

export function ExperienceTab() {
  return (
    <div className="space-y-8">
      {experienceData.map((job, index) => (
        <TimelineItem
          key={index}
          index={index}
          title={job.title}
          subtitle={job.company}
          period={job.period}
          description={job.description}
          items={job.achievements}
        />
      ))}
    </div>
  )
}

