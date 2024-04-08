const fields = `
  sys {
    id
  }
  title
  slug
  content
  metadata
`

const directoryPagesArguments = {
  collection: "directoryPageCollection",
  fields,
  limit: 10,
}

export default directoryPagesArguments
