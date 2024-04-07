import Link from "next/link"
import DefaultTemplate from "../core/components/layout/Template"
import { getAllPages } from "../core/modules/contentful/content_types/glossaryPages"

export default async function Home() {
  const pages = await getAllPages()

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
