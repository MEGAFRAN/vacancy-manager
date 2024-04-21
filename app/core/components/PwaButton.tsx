"use client"

import React, { useEffect, useState } from "react"
import styles from "../styles/components/pwaButton.module.scss"

interface PwaButtonProps {
  text: string
}

const PwaButton: React.FC<PwaButtonProps> = ({ text }) => {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      if ("prompt" in e) {
        setInstallPrompt(e as BeforeInstallPromptEvent)
      }
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt as EventListener)

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt as EventListener)
    }
  }, [])

  const handleInstallClick = async () => {
    if (installPrompt) {
      await installPrompt.prompt()
      const choiceResult = await installPrompt.userChoice
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt")
      } else {
        console.log("User dismissed the install prompt")
      }
      setInstallPrompt(null)
    }
  }

  return (
    <button className={styles.container} onClick={handleInstallClick} disabled={!installPrompt}>
      &#x21a7; {text}
    </button>
  )
}

export default PwaButton
