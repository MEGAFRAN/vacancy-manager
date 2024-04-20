// types.d.ts
declare global {
  interface BeforeInstallPromptEvent extends Event {
    prompt(): Promise<void>
    userChoice: Promise<{
      outcome: "accepted" | "dismissed"
      platform: string
    }>
  }

  interface Window {
    onbeforeinstallprompt?: (e: BeforeInstallPromptEvent) => void
  }
}

export {}
