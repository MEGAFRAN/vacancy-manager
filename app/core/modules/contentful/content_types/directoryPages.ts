import { DirectoryPage } from "../interfaces"
import { extractEntries, fetchGraphQL } from "../queryService"

const collection = "directoryPageCollection"
const GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  content
  metadata
`

export async function getAllPages(limit = 10): Promise<DirectoryPage[]> {
  const pages = await fetchGraphQL(
    `query {
        ${collection}(where:{slug_exists: true}, limit: ${limit}) {
          items {
            ${GRAPHQL_FIELDS}
          }
        }
      }`,
  )
  return extractEntries(pages, collection)
}

export async function getPage(slug: string): Promise<DirectoryPage> {
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
