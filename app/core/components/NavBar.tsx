"use client"

import React from "react"
import Link from "next/link"
import styles from "../styles/components/navBar.module.scss"

const NavBar: React.FC = () => (
  <nav className={styles.container}>
    <span>Tools: </span>
    <Link href={"/"}>Tech jobs tracker</Link>
    <Link href={"/tech-jobs-boards"}>Tech jobs boards</Link>
    <Link href={"/freelance-tech-jobs-boards"}>Freelance tech jobs boards</Link>
    <Link href={"/software-learning-sites"}>Software learning sites</Link>
  </nav>
)

export default NavBar
