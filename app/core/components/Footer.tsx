"use client"

import React from "react"
import styles from "../styles/components/footer.module.scss"
import SocialLinks from "./SocialLinks"

const Footer: React.FC = () => (
  <footer className={styles.container}>
    <SocialLinks />
  </footer>
)

export default Footer
