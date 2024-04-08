const fields = `
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

const pagesArguments = {
  collection: "pageCollection",
  fields,
  limit: 10,
}

export default pagesArguments
