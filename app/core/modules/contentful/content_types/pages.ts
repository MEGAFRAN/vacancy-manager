import { extractEntries, fetchGraphQL } from "../queryService"

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

export async function getAllPages(limit = 10, isDraftMode = false) {
  const pages = await fetchGraphQL(
    `query {
        pageCollection(where:{slug_exists: true}, limit: ${limit}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${PAGE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode,
  )
  return extractEntries(pages, "pageCollection")
}

export async function getPage(slug: string, isDraftMode = false) {
  const page = await fetchGraphQL(
    `query {
        pageCollection(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${PAGE_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode,
  )
  return extractEntries(page, "pageCollection")[0]
}
