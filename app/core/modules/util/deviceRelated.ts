const INSTALLATION_KEY = "clubtal-isInstalled"

const isMobileDevice = (): boolean => {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return false
  }

  const userAgent = navigator.userAgent.toLowerCase()
  const mobileKeywords = [
    "iphone",
    "ipad",
    "ipod",
    "android",
    "blackberry",
    "mini",
    "windows ce",
    "palm",
    "mobile",
  ]
  const isMobileUserAgent = mobileKeywords.some((keyword) => userAgent.includes(keyword))

  const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0

  return isMobileUserAgent || hasTouch
}

const isStandAloneMode = (): boolean => {
  if (typeof window === "undefined") return false

  const isIOsPWA = !!("standalone" in navigator && navigator.standalone)
  const isAndroidPWA = window.matchMedia("(display-mode: standalone)").matches
  const isOldAndroidPWA = window.matchMedia("(display-mode: fullscreen)").matches
  return isIOsPWA || isAndroidPWA || isOldAndroidPWA
}

const deviceRelated = {
  isMobileDevice,
  isStandAloneMode,
}

export default deviceRelated
