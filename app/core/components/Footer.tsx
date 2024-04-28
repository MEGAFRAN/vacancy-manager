"use client"

import React, { useContext } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "../styles/components/footer.module.scss"
import PwaButton from "./PwaButton"
import { Context } from "../context/display-context"

const Footer: React.FC = () => {
  const { isStandAloneMode } = useContext(Context)
  const currentPathname = usePathname()

  const buttons = [
    { path: "/tools/", text: "Tools" },
    { path: "/team/", text: "Team" },
  ]

  return (
    <footer className={styles.container}>
      <nav>
        {buttons.map(({ path, text }) => (
          <Link className={currentPathname === path ? styles.active : ""} key={text} href={path}>
            {text}
          </Link>
        ))}
        {isStandAloneMode ? null : <PwaButton text="Download App" />}
      </nav>
    </footer>
  )
}

export default Footer
