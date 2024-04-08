import { Article } from "../interfaces"
import { extractEntries, fetchGraphQL } from "../queryService"

const collection = "knowledgeArticleCollection"
const fields = `
  sys {
    id
  }
  title
  slug
  summary
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
  date
  authorName
  categoryName
  articleImage {
    url
  }
`

export async function getAllArticles(limit = 3): Promise<Article[]> {
  const articles = await fetchGraphQL(
    `query {
      ${collection}(where:{slug_exists: true}, order: date_DESC, limit: ${limit}) {
          items {
            ${fields}
          }
        }
      }`,
  )
  return extractEntries(articles, collection)
}

const articlePagesArguments = {
  collection: "knowledgeArticleCollection",
  fields,
  limit: 3,
}

export default articlePagesArguments
