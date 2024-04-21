"use client"

import React from "react"
import Link from "next/link"
import styles from "../styles/components/toolGrid.module.scss"

interface ToolsGridProps {
  tools: { name: string; path: string }[]
}

const ToolsGrid: React.FC<ToolsGridProps> = ({ tools }) => (
  <div className={styles.container}>
    {tools.map(({ name, path }) => (
      <Link key={name} href={path}>
        {name}
      </Link>
    ))}
  </div>
)

export default ToolsGrid
