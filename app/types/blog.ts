import type { ParsedContent } from '@nuxt/content'

export interface BlogPost extends ParsedContent {
  // Required fields
  title: string
  description: string
  date: string // ISO 8601 format
  tags: string[]
  _path: string

  // Optional fields
  image?: string // Cover image path
  author?: string
  draft?: boolean
  updatedAt?: string

  // Custom SEO
  head?: {
    title?: string
    description?: string
    image?: string
  }

  // Body with TOC
  body?: {
    type: string
    children: any[]
    toc?: {
      title: string
      searchDepth: number
      depth: number
      links: Array<{
        id: string
        text: string
        depth: number
        children?: Array<{
          id: string
          text: string
          depth: number
        }>
      }>
    }
  }
}
