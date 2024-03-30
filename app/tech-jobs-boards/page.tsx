import Footer from "../core/components/Footer"
import LinksGrid from "../core/components/LinkGrid"
import NavBar from "../core/components/NavBar"
import DefaultTemplate from "../core/components/layout/Template"

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
    <DefaultTemplate title="Tech jobs boards">
      <LinksGrid urls={urls} />
    </DefaultTemplate>
  )
}
