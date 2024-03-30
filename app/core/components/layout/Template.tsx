"use client"

import React from "react"
import NavBar from "../NavBar"
import Footer from "../Footer"

interface DefaultTemplateProps {
  children: React.ReactNode
  title: string
}

const DefaultTemplate: React.FC<DefaultTemplateProps> = ({ children, title }) => (
  <>
    <header>
      <NavBar />
    </header>
    <main>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {children}
    </main>
    <Footer />
  </>
)

export default DefaultTemplate
