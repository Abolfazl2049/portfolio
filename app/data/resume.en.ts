/**
 * Sample Resume Data (English)
 * Based on JSON Resume schema (modified)
 * @see https://jsonresume.org/schema/
 */

import type { Resume } from '~/types/resume'

export const resumeData: Resume = {
  basics: {
    name: 'Ali Arghyani',
    label: 'Senior Frontend Developer',
    email: 'ali@example.com',
    phone: '+98 912 345 6789',
    url: 'https://aliarghyani.com',
    location: {
      city: 'Tehran',
      country: 'Iran',
    },
    profiles: [
      {
        network: 'LinkedIn',
        url: 'https://linkedin.com/in/aliarghyani',
        icon: 'i-mdi-linkedin',
      },
      {
        network: 'GitHub',
        url: 'https://github.com/aliarghyani',
        icon: 'i-mdi-github',
      },
    ],
    summary:
      'Passionate Frontend Developer with 5+ years of experience in Vue.js, Nuxt.js, and TypeScript. Specialized in building scalable, performant web applications with focus on DX, accessibility, and client-centric delivery.',
  },
  work: [
    {
      company: 'NexaPortal',
      position: 'Senior Frontend Developer',
      startDate: '2024-12',
      highlights: [
        'Led development of medical tourism platform with Vue 3 and TypeScript',
        'Implemented RBAC, i18n, and PWA features for enhanced user experience',
        'Improved application performance by 40% through code optimization',
        'Mentored junior developers and established coding standards',
      ],
    },
    {
      company: 'Freelance',
      position: 'Frontend Developer',
      startDate: '2023-09',
      endDate: '2024-12',
      highlights: [
        'Delivered high-performance SSR applications with Nuxt 3',
        'Designed modular component systems for multiple clients',
        'Collaborated with cross-functional teams using Git workflows',
        'Built responsive, accessible UIs across various devices',
      ],
    },
  ],
  education: [
    {
      institution: 'Qom University of Technology',
      area: 'Telecommunications Engineering',
      studyType: 'Bachelor of Science',
      startDate: '2010-09',
      endDate: '2015-06',
    },
  ],
  skills: [
    {
      name: 'Frontend',
      keywords: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Vuetify'],
    },
    {
      name: 'Tools & DevOps',
      keywords: ['Git', 'GitHub', 'Vite', 'Docker', 'CI/CD'],
    },
  ],
  languages: [
    {
      language: 'Persian',
      fluency: 'Native',
    },
    {
      language: 'English',
      fluency: 'Fluent',
    },
  ],
}
