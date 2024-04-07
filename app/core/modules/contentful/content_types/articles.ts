import { Article } from "../interfaces"
import { extractEntries, fetchGraphQL } from "../queryService"

const collection = "knowledgeArticleCollection"
const ARTICLE_GRAPHQL_FIELDS = `
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
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
  )
  return extractEntries(articles, collection)
}

export async function getArticle(slug: string): Promise<Article> {
  const article = await fetchGraphQL(
    `query {
      ${collection}(where:{slug: "${slug}"}, limit: 1) {
          items {
            ${ARTICLE_GRAPHQL_FIELDS}
          }
        }
      }`,
  )
  return extractEntries(article, collection)[0]
}
