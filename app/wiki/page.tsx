import Link from "next/link"
import DefaultTemplate from "../core/components/layout/Template"
import { getAllPages } from "../core/modules/contentful/content_types/wikiPages"

export default async function Home() {
  const pages = await getAllPages()

  return (
    <DefaultTemplate
      title="Sections of clubtal project"
      introduction="Enter in the section you are interested on gain experience"
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
          <Link key={title} href={`/wiki/${slug}`}>
            {title}
          </Link>
        ))}
      </nav>
    </DefaultTemplate>
  )
}
