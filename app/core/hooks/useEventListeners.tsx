"use client"

import { useEffect } from "react"
import deviceRelated from "../modules/util/deviceRelated"
import gtmEvents from "../modules/analytics/google-tag-events.service"

function useGlobalEventListeners() {
  useEffect(() => {
    const domContentLoaded = "DOMContentLoaded"
    const appInstalled = "appinstalled"

    window.addEventListener(domContentLoaded, () => deviceRelated.setStorageAppInstallationKey())
    window.addEventListener(appInstalled, () => gtmEvents.installApp({}))

    return () => {
      window.removeEventListener(domContentLoaded, () =>
        deviceRelated.setStorageAppInstallationKey(),
      )
      window.removeEventListener(appInstalled, () => gtmEvents.installApp({}))
    }
  }, [])
}

export default useGlobalEventListeners
