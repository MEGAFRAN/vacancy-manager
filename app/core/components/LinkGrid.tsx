"use client"

import React from "react"
import styles from "../styles/components/linkGrid.module.scss"

interface LinksGridProps {
  urls: string[]
}

const LinksGrid: React.FC<LinksGridProps> = ({ urls }) => (
  <div className={styles.container}>
    {urls.map((url, index) => (
      <a key={index} href={url} target="_blank" rel="noopener noreferrer">
        {url}
      </a>
    ))}
  </div>
)

export default LinksGrid
