import ToolsPageTemplate from "./core/components/layout/ToolsPage"
import ToolsGrid from "./core/components/ToolsGrid"

const tools = [
  { name: "Job tracker", path: "/job-tracker" },
  { name: "Job analyzer", path: "/job-description-analyzer" },
  { name: "Career pages", path: "/directories/career-pages" },
  { name: "Jobs boards", path: "/directories/tech-jobs-boards" },
  { name: "Jobs glossary", path: "/glossary" },
]
export default function Home() {
  return (
    <ToolsPageTemplate title="Tech Jobs Tools">
      <ToolsGrid tools={tools} />
    </ToolsPageTemplate>
  )
}
