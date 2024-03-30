import LinksGrid from "../core/components/LinkGrid"

const urls = [
  "https://www.smashingmagazine.com/jobs",
  "https://www.ventureloop.com",
  "https://underdog.io",
  "https://builtin.com",
  "https://www.techfetch.com",
  "https://weworkremotely.com",
  "https://powertofly.com",
  "https://remoteok.io",
  "https://emberwork.com",
  "https://www.wphired.com",
  "https://www.indeed.com",
  "https://glassdoor.com",
  "https://angel.co",
  "https://www.crunchboard.com",
  "https://jobs.mashable.com",
  "https://whitetruffle.com",
  "https://itjobpro.com",
  "https://github.com/jobs",
]

export default function Home() {
  return (
    <div>
      <main>
        <h1 style={{ textAlign: "center" }}>Tech jobs boards</h1>
      </main>
      <LinksGrid urls={urls} />
      <footer></footer>
    </div>
  )
}
