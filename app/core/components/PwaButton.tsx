import React, { useEffect, useState } from "react"

const InstallPWAButton: React.FC = () => {
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
    <button onClick={handleInstallClick} disabled={!installPrompt}>
      Install App
    </button>
  )
}

export default InstallPWAButton
