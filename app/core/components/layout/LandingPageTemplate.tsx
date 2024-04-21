"use client"

import React from "react"
import styles from "../../styles/templates/landingPageTemplate.module.scss"
import SectionAnalytics from "../../modules/analytics/components/SectionAnalytics"

interface LandingPageTemplateProps {
  children: React.ReactNode
  title?: string
  subTitle?: string
  features?: string[]
}

const LandingPageTemplate: React.FC<LandingPageTemplateProps> = ({
  children,
  title,
  subTitle,
  features,
}) => (
  <div className={styles.container}>
    <main>
      {title && <h1>{title}</h1>}
      {subTitle && <h2>{subTitle}</h2>}
      <ol>
        {features?.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ol>
      {children}
    </main>
    <SectionAnalytics />
  </div>
)

export default LandingPageTemplate
