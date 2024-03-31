"use client"

import React from "react"
import styles from "../styles/components/footer.module.scss"
import SocialLinks from "./SocialLinks"
import FeedbackForm from "./FeedbackForm"

const Footer: React.FC = () => (
  <footer className={styles.container}>
    <hr />
    <div className={styles.content}>
      <SocialLinks />
      <FeedbackForm />
    </div>
  </footer>
)

export default Footer
