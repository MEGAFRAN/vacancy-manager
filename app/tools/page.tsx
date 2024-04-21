import ToolsGrid from "../core/components/ToolsGrid"
import ToolsPageTemplate from "../core/components/layout/ToolsPage"

const tools = [
  { name: "Job tracker", path: "/" },
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
