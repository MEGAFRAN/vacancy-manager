"use client"

import { useEffect } from "react"
import gtmEvents from "../modules/analytics/google-tag-events.service"

function useGlobalEventListeners() {
  useEffect(() => {
    const appInstalled = "appinstalled"

    window.addEventListener(appInstalled, () => gtmEvents.installApp({}))

    return () => {
      window.removeEventListener(appInstalled, () => gtmEvents.installApp({}))
    }
  }, [])
}

export default useGlobalEventListeners
