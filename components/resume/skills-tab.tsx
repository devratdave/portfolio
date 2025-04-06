"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { technicalSkills, softSkills, languages } from "@/lib/data"

export function SkillsTab() {
  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h3 className="text-xl font-bold mb-6">Technical Skills</h3>

        <div className="space-y-4">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-white/50">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-xl font-bold mb-6">Soft Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {softSkills.map((skill, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-white" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-6">Languages</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {languages.map((language, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{language.name}</span>
                <span className="text-white/50">{language.proficiency}</span>
              </div>
              <Progress value={language.level} className="h-2" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

