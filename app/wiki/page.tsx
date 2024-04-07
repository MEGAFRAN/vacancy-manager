import Link from "next/link"
import DefaultTemplate from "../core/components/layout/Template"
import { getAllPages } from "../core/modules/contentful/content_types/wikiPages"

export default async function Home() {
  const sections = await getAllPages()

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
        {sections.map((section: any) => (
          <Link key={section.title} href={`/wiki/${section.slug}`}>
            {section.title}
          </Link>
        ))}
      </nav>
    </DefaultTemplate>
  )
}
