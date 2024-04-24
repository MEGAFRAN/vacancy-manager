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

const isPWAInstalled = (): boolean => {
  if (typeof localStorage === "undefined") return false

  const STORAGE_KEY = "clubtal.isPWAInstalled"
  const hasPWAInstalled = localStorage.getItem(STORAGE_KEY) === "true"

  if (hasPWAInstalled) return true

  const isIOsPWA = !!("standalone" in navigator && navigator.standalone)
  const isAndroidPWA = window.matchMedia("(display-mode: standalone)").matches
  const isOldAndroidPWA = window.matchMedia("(display-mode: fullscreen)").matches
  const isMobilePWA = isIOsPWA || isAndroidPWA || isOldAndroidPWA

  localStorage.setItem(STORAGE_KEY, String(isMobilePWA))
  return isMobilePWA
}

const deviceRelated = {
  isMobileDevice,
  isPWAInstalled,
}

export default deviceRelated
