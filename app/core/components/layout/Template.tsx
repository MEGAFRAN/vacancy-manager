"use client"

import React from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"
import styles from "../../styles/templates/template.module.scss"

interface DefaultTemplateProps {
  children: React.ReactNode
  title: string
  introduction: string
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children, title, introduction }) => (
  <div className={styles.container}>
    <header>
      <NavBar />
    </header>
    <main>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <p style={{ textAlign: "center" }}>{introduction}</p>
      {children}
    </main>
    <Footer />
  </div>
)

export default DefaultTemplate
