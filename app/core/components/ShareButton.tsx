"use client"

import React from "react"
import styles from "../styles/components/shareButton.module.scss"

interface ShareButtonProps {
  text: string
}

const ShareButton: React.FC<ShareButtonProps> = ({ text }) => {
  const handleShare = async (): Promise<void> => {
    if (!navigator?.share) return

    await navigator.share({
      title: "Clubtal App",
      text: "Free tools to get tech jobs",
      url: "https://clubtal.com/",
    })
  }

  return (
    <button className={styles.container} onClick={handleShare}>
      {text}
    </button>
  )
}

export default ShareButton
