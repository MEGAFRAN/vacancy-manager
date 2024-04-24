"use client"

import React from "react"
import Link from "next/link"
import styles from "../styles/components/footer.module.scss"
import PwaButton from "./PwaButton"
import deviceRelated from "../modules/util/deviceRelated"

const isAppInstalled = deviceRelated.isAppInstalled()

const Footer: React.FC = () => (
  <footer className={styles.container}>
    <nav>
      <Link href="/tools">Tools</Link>
      <Link href="/team">Team</Link>
      {isAppInstalled ? null : <PwaButton text="Download App" />}
    </nav>
  </footer>
)

export default Footer
