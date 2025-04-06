"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ResumeHeader } from "@/components/resume/resume-header"
import { ExperienceTab } from "@/components/resume/experience-tab"
import { EducationTab } from "@/components/resume/education-tab"
import { SkillsTab } from "@/components/resume/skills-tab"
import { NameBadge } from "@/components/shared/name-badge"

export function ResumePage() {
  const [activeTab, setActiveTab] = useState("education")

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-4 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">Resume</h1>
          </div>

          <Button className="mt-6 md:mt-0" asChild>
            <a href="/Devrat_Dave.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
        </div>

        <ResumeHeader />

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <ExperienceTab />
          </TabsContent>

          <TabsContent value="education">
            <EducationTab />
          </TabsContent>

          <TabsContent value="skills">
            <SkillsTab />
          </TabsContent>
        </Tabs>
      </div>
      <NameBadge />
    </div>
  )
}

