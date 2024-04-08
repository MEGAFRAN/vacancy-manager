export async function fetchGraphQL(query: string): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
      next: {},
    },
  )
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function extractEntries(fetchResponse: any, collection: string) {
  return fetchResponse?.data?.[collection]?.items
}

export async function getAllPages(
  collection: string,
  fields: string,
  limit: number,
  section?: string,
): Promise<[]> {
  const whereRule = section
    ? `(where:{slug_exists: true, section: "${section}"}`
    : "(where:{slug_exists: true}"
  const pages = await fetchGraphQL(
    `query {
        ${collection}${whereRule}, limit: ${limit}) {
          items {
            ${fields}
          }
        }
      }`,
  )
  return extractEntries(pages, collection)
}

export async function getPage(collection: string, fields: string, slug: string): Promise<any> {
  const page = await fetchGraphQL(
    `query {
        ${collection}(where:{slug: "${slug}"}, limit: 1) {
          items {
            ${fields}
          }
        }
      }`,
  )
  return extractEntries(page, collection)[0]
}
