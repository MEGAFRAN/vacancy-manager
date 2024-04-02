import LinksGrid from "../core/components/LinkGrid"
import DefaultTemplate from "../core/components/layout/Template"

const urls = [
  "https://www.toptal.com",
  "https://www.turing.com",
  "https://www.flexiple.com",
  "https://www.revelo.com",
  "https://clouddevs.com",
  "https://www.upwork.com",
  "https://www.fiverr.com",
  "https://gun.io",
  "https://gigster.com",
  "https://www.guru.com",
  "https://www.remotepanda.com",
]

export default function Home() {
  return (
    <DefaultTemplate
      title="Freelance tech jobs boards"
      introduction="Work as freelance on these sites"
    >
      <LinksGrid urls={urls} />
    </DefaultTemplate>
  )
}
