"use client"

import React, { useContext } from "react"
import Link from "next/link"
import styles from "../styles/components/footer.module.scss"
import PwaButton from "./PwaButton"
import { Context } from "../context/display-context"

const Footer: React.FC = () => {
  const { isStandAloneMode } = useContext(Context)

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
