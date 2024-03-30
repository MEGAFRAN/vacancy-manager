import Link from "next/link"
import Dashboard from "./core/components/Dashboard"

export default function Home() {
  return (
    <div>
      <main>
        <h1 style={{ textAlign: "center" }}>Tech jobs tracker</h1>
        <nav style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "0 40px" }}>
          <Link href={"/tech-jobs-boards"}>Tech jobs board</Link>
          <Link href={"/freelance-tech-jobs-boards"}>Freelance tech jobs board</Link>
          <Link href={"/software-learning-sites"}>Software learning sites</Link>
        </nav>
        <Dashboard />
      </main>

      <footer></footer>
    </div>
  )
}
