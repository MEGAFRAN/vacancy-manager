"use client"

import React from "react"
import Link from "next/link"
import styles from "../styles/components/navBar.module.scss"

const NavBar: React.FC = () => (
  <nav className={styles.container}>
    <span>Tools: </span>
    <Link href={"/"}>Tech jobs tracker</Link>
    <Link href={"/job-description-analyzer"}>Job description analyzer</Link>
    <Link href={"/directories/career-pages"}>Career pages</Link>
    <Link href={"/directories/tech-jobs-boards"}>Tech jobs boards</Link>
    <Link href={"/glossary"}>Tech jobs glossary</Link>
  </nav>
)

export default NavBar
