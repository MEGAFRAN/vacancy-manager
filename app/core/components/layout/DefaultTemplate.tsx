"use client"

import React from "react"
import Footer from "../Footer"
import styles from "../../styles/templates/template.module.scss"
import SectionAnalytics from "../../modules/analytics/components/SectionAnalytics"

interface DefaultTemplateProps {
  children: React.ReactNode
  title?: string
  introduction?: string
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children, title, introduction }) => (
  <div className={styles.container}>
    <main>
      {title && <h1 style={{ textAlign: "center" }}>{title}</h1>}
      {introduction && <p style={{ textAlign: "center" }}>{introduction}</p>}
      {children}
    </main>
    <Footer />
    <SectionAnalytics />
  </div>
)

export default DefaultTemplate
