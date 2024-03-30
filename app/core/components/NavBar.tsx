"use client"

import React from "react"
import Link from "next/link"
import styles from "../styles/components/navBar.module.scss"

interface NavBarProps {
  urls: string[]
}

const NavBar: React.FC = () => (
  <nav className={styles.container}>
    <Link href={"/"}>Tech jobs tracker</Link>
    <Link href={"/tech-jobs-boards"}>Tech jobs boards</Link>
    <Link href={"/freelance-tech-jobs-boards"}>Freelance tech jobs boards</Link>
    <Link href={"/software-learning-sites"}>Software learning sites</Link>
  </nav>
)

export default NavBar
