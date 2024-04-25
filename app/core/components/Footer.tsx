"use client"

import React from "react"
import Link from "next/link"
import styles from "../styles/components/footer.module.scss"
import PwaButton from "./PwaButton"
import useIsStandAloneMode from "../hooks/useIsStandAloneView"

const Footer: React.FC = () => {
  const isStandAloneMode = useIsStandAloneMode()

  return (
    <footer className={styles.container}>
      <nav>
        <Link href="/tools">Tools</Link>
        <Link href="/team">Team</Link>
        {isStandAloneMode ? null : <PwaButton text="Download App" />}
      </nav>
    </footer>
  )
}

export default Footer
