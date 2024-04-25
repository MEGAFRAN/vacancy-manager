import SectionAnalytics from "../core/modules/analytics/components/SectionAnalytics"
import Footer from "../core/components/Footer"
import TeamComponent from "../core/components/Team"
import ShareButton from "../core/components/ShareButton"
import useIsMobileDevice from "../core/hooks/useIsMobileDevice"
import useIsStandAloneMode from "../core/hooks/useIsStandAloneView"

export default function Home() {
  const isMobileDevice = useIsMobileDevice()
  const isStandAloneMode = useIsStandAloneMode()

  const linksWithDownloadApp = [
    { name: "download app", path: "/download-app" },
    { name: "about", path: "/about" },
    { name: "wiki", path: "/wiki" },
  ]

  const linksWithoutDownloadApp = [
    { name: "about", path: "/about" },
    { name: "wiki", path: "/wiki" },
  ]

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
        {isMobileDevice ? <ShareButton text="Share" /> : null}
      </TeamComponent>

      <Footer />
      <SectionAnalytics />
    </div>
  )
}
