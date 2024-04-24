"use client"

import React from "react"
import Link from "next/link"
import styles from "../styles/components/footer.module.scss"
import PwaButton from "./PwaButton"
import deviceRelated from "../modules/util/deviceRelated"

const Footer: React.FC = () => (
  <footer className={styles.container}>
    <nav>
      <Link href="/tools">Tools</Link>
      <Link href="/team">Team</Link>
      {deviceRelated.isPWAInstalled() ? <PwaButton text="Download App" /> : null}
    </nav>
  </footer>
)

export default Footer
