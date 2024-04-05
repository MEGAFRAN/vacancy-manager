import { extractEntries, fetchGraphQL } from "../queryService"

const collection = "wikiPageCollection"
const GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
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
        ${collection}(where:{slug_exists: true}, limit: ${limit}, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode,
  )
  return extractEntries(pages, collection)
}

export async function getPage(slug: string, isDraftMode = false) {
  const page = await fetchGraphQL(
    `query {
        ${collection}(where:{slug: "${slug}"}, limit: 1, preview: ${
      isDraftMode ? "true" : "false"
    }) {
          items {
            ${GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode,
  )
  return extractEntries(page, collection)[0]
}
