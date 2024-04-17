interface Entry {
  sys: { id: number }
  title: string
  slug: string
  details?: {
    json: any
    links: {
      assets: {
        block: {
          sys: { id: number }
          url: string
          description: string
        }
      }
    }
  }
}

export interface Page extends Entry {
  metaTitles: string
  metaDescription: string
}

export interface WikiPage extends Entry {
  section: string
}

export interface GlossaryPage extends Entry {
  section: string
}

export interface DirectoryPage extends Entry {
  content: { h1: string; h1Paragraph: string; links: string[] }
  metadata: { canonicalUrl: string; title: string; description: string }
}

export interface Article extends Entry {
  summary: string
  date: Date
  authorName: string
  categoryName: string
  articleImage: { url: string }
}
