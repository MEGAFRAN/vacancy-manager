const fields = `
  sys {
    id
  }
  title
  slug
  metadata
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

const wikiPagesArguments = {
  collection: "wikiPageCollection",
  fields,
  limit: 10,
  section: "wiki",
}

export default wikiPagesArguments
