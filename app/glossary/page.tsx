import Link from "next/link"
import DefaultTemplate from "../core/components/layout/Template"

export default function Home() {
  const sections = [
    { name: "Applicant Screening", slug: "applicant-screening" },
    { name: "Behavioral Assessment", slug: "behavioral-assessment" },
    { name: "Cultural Fit", slug: "cultural-fit" },
    { name: "Employee Referral Program", slug: "employee-referral-program" },
  ]

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
        {sections.map((section) => (
          <Link key={section.name} href={`/glossary/${section.slug}`}>
            {section.name}
          </Link>
        ))}
      </nav>
    </DefaultTemplate>
  )
}
