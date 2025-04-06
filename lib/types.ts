export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  github?: string
  demo?: string
  featured: boolean
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  description: string
  courses: string[]
}

export interface Skill {
  name: string
  level: number
}

export interface Language {
  name: string
  proficiency: string
  level: number
}

