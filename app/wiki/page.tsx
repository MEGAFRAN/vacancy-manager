import Link from "next/link"
import DefaultTemplate from "../core/components/layout/Template"

export default function Home() {
  const sections = [
    { name: "ux", slug: "ux" },
    { name: "frontend ui", slug: "frontend-ui" },
    { name: "frontend logic", slug: "frontend-logic" },
    { name: "accessibility", slug: "accessibility" },
    { name: "web performance", slug: "web-performance" },
    { name: "seo", slug: "/seo" },
    { name: "web analytics", slug: "web-analytics" },
    { name: "devops", slug: "devops" },
  ]

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
        {sections.map((section) => (
          <Link key={section.name} href={`/wiki/${section.slug}`}>
            {section.name}
          </Link>
        ))}
      </nav>
    </DefaultTemplate>
  )
}
