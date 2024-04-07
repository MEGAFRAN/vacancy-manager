import { Page } from "../interfaces"
import { extractEntries, fetchGraphQL } from "../queryService"

const collection = "pageCollection"
const PAGE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  metaTitle
  metaDescription
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

export async function getAllPages(limit = 10): Promise<Page[]> {
  const pages = await fetchGraphQL(
    `query {
      ${collection}(where:{slug_exists: true}, limit: ${limit}) {
          items {
            ${PAGE_GRAPHQL_FIELDS}
          }
        }
      }`,
  )
  return extractEntries(pages, collection)
}

export async function getPage(slug: string): Promise<Page> {
  const page = await fetchGraphQL(
    `query {
      ${collection}(where:{slug: "${slug}"}, limit: 1) {
          items {
            ${PAGE_GRAPHQL_FIELDS}
          }
        }
      }`,
  )
  return extractEntries(page, collection)[0]
}
