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

const setStorageAppInstallationKey = (): void => {
  if (typeof localStorage === "undefined") return

  const hasPWAInstalled = localStorage.getItem(INSTALLATION_KEY) === "true"

  if (hasPWAInstalled) return

  const isIOsPWA = !!("standalone" in navigator && navigator.standalone)
  const isAndroidPWA = window.matchMedia("(display-mode: standalone)").matches
  const isOldAndroidPWA = window.matchMedia("(display-mode: fullscreen)").matches
  const isMobilePWA = isIOsPWA || isAndroidPWA || isOldAndroidPWA

  localStorage.setItem(INSTALLATION_KEY, String(isMobilePWA))
}

const isAppInstalled = (): boolean => localStorage.getItem(INSTALLATION_KEY) === "true"

const deviceRelated = {
  isMobileDevice,
  setStorageAppInstallationKey,
  isAppInstalled,
}

export default deviceRelated
