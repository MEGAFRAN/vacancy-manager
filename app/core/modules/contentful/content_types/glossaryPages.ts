import { GlossaryPage } from "../interfaces"
import { extractEntries, fetchGraphQL } from "../queryService"

const collection = "wikiPageCollection"
const GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  section
  details {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
`

export async function getAllPages(limit = 30, section = "glossary"): Promise<GlossaryPage[]> {
  const pages = await fetchGraphQL(
    `query {
        ${collection}(where:{slug_exists: true, section: "${section}"}, limit: ${limit}) {
          items {
            ${GRAPHQL_FIELDS}
          }
        }
      }`,
  )
  return extractEntries(pages, collection)
}

export async function getPage(slug: string): Promise<GlossaryPage> {
  const page = await fetchGraphQL(
    `query {
        ${collection}(where:{slug: "${slug}"}, limit: 1) {
          items {
            ${GRAPHQL_FIELDS}
          }
        }
      }`,
  )
  return extractEntries(page, collection)[0]
}
