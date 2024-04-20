"use client"

import React from "react"
import Link from "next/link"
import styles from "../styles/components/footer.module.scss"
import SocialLinks from "./SocialLinks"
import FeedbackForm from "./FeedbackForm"
import InstallPWAButton from "./PwaButton"

const sections = [
  { name: "about", slug: "about" },
  { name: "wiki", slug: "wiki" },
]

const Footer: React.FC = () => (
  <footer className={styles.container}>
    <hr />
    <div className={styles.content}>
      <SocialLinks />
      <FeedbackForm />
      <InstallPWAButton />
    </div>
    <nav
      style={{
        display: "flex",
        gap: 20,
        textTransform: "capitalize",
        padding: "10px",
      }}
    >
      {sections.map((section) => (
        <Link key={section.name} href={`/${section.slug}`}>
          {section.name}
        </Link>
      ))}
    </nav>
  </footer>
)

export default Footer
