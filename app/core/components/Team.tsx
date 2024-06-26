"use client"

import Link from "next/link"
import styles from "../styles/components/teamComponent.module.scss"

interface TeamComponentProps {
  title: string
  internalLinks: { name: string; path: string }[]
  externalLinks: { name: string; path: string }[]
  children?: React.ReactNode
}

const TeamComponent: React.FC<TeamComponentProps> = ({
  title,
  internalLinks,
  externalLinks,
  children,
}) => (
  <div className={styles.container}>
    {title && <h1>{title}</h1>}
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
      {children}
    </nav>
  </div>
)

export default TeamComponent
