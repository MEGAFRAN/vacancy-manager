"use client"

import React from "react"
import styles from "../styles/components/footer.module.scss"
import SocialLinks from "./SocialLinks"
import FeedbackForm from "./FeedbackForm"

const Footer: React.FC = () => (
  <>
    <hr />
    <footer className={styles.container}>
      <SocialLinks />
      <FeedbackForm />
    </footer>
  </>
)

export default Footer
