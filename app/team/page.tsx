"use client"

import { useContext } from "react"
import SectionAnalytics from "../core/modules/analytics/components/SectionAnalytics"
import Footer from "../core/components/Footer"
import TeamComponent from "../core/components/Team"
import ShareButton from "../core/components/ShareButton"
import { Context } from "../core/context/display-context"

export default function Home() {
  const { isStandAloneMode, isMobileDevice } = useContext(Context)

  const linksWithDownloadApp = [
    { name: "download app", path: "/download-app" },
    { name: "about", path: "/about" },
  ]

  const linksWithoutDownloadApp = [{ name: "about", path: "/about" }]

  const validatedInternalLinks = isStandAloneMode
    ? [...linksWithoutDownloadApp]
    : [...linksWithDownloadApp]

  const externalLinks = [
    { name: "Github", path: "https://github.com/MEGAFRAN/vacancy-manager" },
    { name: "Discord", path: "https://discord.gg/7DwRKBTVXs" },
    { name: "LinkedIn", path: "https://www.linkedin.com/in/isfranciscocruz" },
  ]

  return (
    <div>
      <TeamComponent
        title="Team tools"
        externalLinks={externalLinks}
        internalLinks={validatedInternalLinks}
      >
        {isMobileDevice ? <ShareButton text="Share" /> : <ShareButton text="Share" />}
      </TeamComponent>

      <Footer />
      <SectionAnalytics />
    </div>
  )
}
