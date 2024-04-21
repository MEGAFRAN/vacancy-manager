"use client"

import React from "react"
import Link from "next/link"
import styles from "../styles/components/footer.module.scss"

const Footer: React.FC = () => (
  <footer className={styles.container}>
    <nav
      style={{
        display: "flex",
        gap: 20,
        textTransform: "capitalize",
        padding: "10px",
      }}
    >
      <Link href="/tools">Tools</Link>
      <Link href="/team">Team</Link>
    </nav>
  </footer>
)

export default Footer
