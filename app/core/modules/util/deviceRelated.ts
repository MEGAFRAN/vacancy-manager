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

export default isMobileDevice
