import Dashboard from "./core/components/Dashboard"
import DefaultTemplate from "./core/components/layout/Template"

export default function Home() {
  return (
    <DefaultTemplate title="Tech jobs tracker">
      <Dashboard />
    </DefaultTemplate>
  )
}
