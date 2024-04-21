"use client"

import React from "react"
import styles from "../../styles/templates/toolsPageTemplate.module.scss"
import SectionAnalytics from "../../modules/analytics/components/SectionAnalytics"
import Footer from "../Footer"

interface ToolsPageTemplateProps {
  children: React.ReactNode
  title?: string
}

const ToolsPageTemplate: React.FC<ToolsPageTemplateProps> = ({ children, title }) => (
  <div className={styles.container}>
    {title && <h1>{title}</h1>}
    {children}
    <Footer />
    <SectionAnalytics />
  </div>
)

export default ToolsPageTemplate
