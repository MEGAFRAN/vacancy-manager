"use client"

import React from "react"
import Link from "next/link"
import styles from "../styles/components/navBar.module.scss"

const NavBar: React.FC = () => (
  <nav className={styles.container}>
    <span>Tools: </span>
    <Link href={"/"}>Tech jobs tracker</Link>
    <Link href={"/directories/tech-jobs-boards"}>Tech jobs boards</Link>
    <Link href={"/directories/freelance-tech-jobs-boards"}>Freelance tech jobs boards</Link>
    <Link href={"/glossary"}>Tech jobs glossary</Link>
    <Link href={"/directories/software-learning-sites"}>Software learning sites</Link>
  </nav>
)

export default NavBar
