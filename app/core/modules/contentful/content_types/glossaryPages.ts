const fields = `
  sys {
    id
  }
  title
  slug
  section
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

const glossaryPagesArguments = {
  collection: "wikiPageCollection",
  fields,
  limit: 30,
  section: "glossary",
}

export default glossaryPagesArguments
