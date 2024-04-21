import Link from "next/link"
import DefaultTemplate from "../core/components/layout/DefaultTemplate"
import { getAllPages } from "../core/modules/contentful/queryService"
import glossaryPagesArguments from "../core/modules/contentful/content_types/glossaryPages"

export default async function Home() {
  const { collection, fields, limit, section } = glossaryPagesArguments
  const pages = await getAllPages(collection, fields, limit, section)

  return (
    <DefaultTemplate
      title="Glossary of tech jobs terms"
      introduction="Click the term you want to learn more about"
    >
      <nav
        style={{
          display: "inline-flex",
          flexDirection: "column",
          gap: 20,
          textTransform: "capitalize",
        }}
      >
        {pages.map(({ title, slug }) => (
          <Link key={title} href={`/glossary/${slug}`}>
            {title}
          </Link>
        ))}
      </nav>
    </DefaultTemplate>
  )
}
