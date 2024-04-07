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
