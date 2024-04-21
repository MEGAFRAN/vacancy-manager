import Link from "next/link"
import SectionAnalytics from "../core/modules/analytics/components/SectionAnalytics"
import styles from "../core/styles/templates/toolsPageTemplate2.module.scss"

const internalLinks = [
  { name: "about", path: "/about" },
  { name: "wiki", path: "/wiki" },
  { name: "app", path: "/app" },
]

const externalLinks = [
  { name: "Github", path: "https://github.com/MEGAFRAN/vacancy-manager" },
  { name: "Discord", path: "https://discord.gg/7DwRKBTVXs" },
  { name: "LinkedIn", path: "https://www.linkedin.com/in/isfranciscocruz" },
]
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Collaboration tools</h1>
      <nav>
        {internalLinks.map(({ name, path }) => (
          <Link key={name} href={path}>
            {name}
          </Link>
        ))}
        {externalLinks.map(({ name, path }) => (
          <a key={name} href={path} target="_blank" rel="noopener noreferrer">
            {name}
          </a>
        ))}
      </nav>
      <SectionAnalytics />
    </div>
  )
}
