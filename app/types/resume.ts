/**
 * Resume TypeScript Interfaces
 * Based on JSON Resume schema (modified)
 * @see https://jsonresume.org/schema/
 */

export interface ResumeBasics {
  name: string
  label: string // Job title
  email: string
  phone: string
  url?: string
  image?: string // Profile photo URL
  location: {
    city: string
    country: string
  }
  profiles: Array<{
    network: string // LinkedIn, GitHub, etc.
    url: string
    icon?: string // Iconify icon name
  }>
  summary: string
}

export interface WorkExperience {
  company: string
  position: string
  startDate: string // YYYY-MM format
  endDate?: string // YYYY-MM or undefined for "Present"
  highlights: string[] // Bullet points
}

export interface Education {
  institution: string
  area: string // Field of study
  studyType: string // Degree type
  startDate: string // YYYY-MM format
  endDate?: string // YYYY-MM format
}

export interface Skill {
  name: string // Category name
  keywords: string[] // Individual skills
}

export interface Language {
  language: string
  fluency: 'Native' | 'Fluent' | 'Intermediate' | 'Basic'
}

export interface Certification {
  name: string
  issuer: string
  date: string // YYYY-MM format
}

export interface Resume {
  basics: ResumeBasics
  work: WorkExperience[]
  education: Education[]
  skills: Skill[]
  languages?: Language[]
  certifications?: Certification[]
}
