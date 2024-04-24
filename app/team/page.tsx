import SectionAnalytics from "../core/modules/analytics/components/SectionAnalytics"
import Footer from "../core/components/Footer"
import TeamComponent from "../core/components/Team"
import ShareButton from "../core/components/ShareButton"
import deviceRelated from "../core/modules/util/deviceRelated"

const isMobileDevice = deviceRelated.isMobileDevice()
const isAppInstalled = deviceRelated.isAppInstalled()

const linksWithDownloadApp = [
  { name: "download app", path: "/download-app" },
  { name: "about", path: "/about" },
  { name: "wiki", path: "/wiki" },
]

const linksWithoutDownloadApp = [
  { name: "about", path: "/about" },
  { name: "wiki", path: "/wiki" },
]

const validatedInternalLinks = isAppInstalled
  ? [...linksWithoutDownloadApp]
  : [...linksWithDownloadApp]

const externalLinks = [
  { name: "Github", path: "https://github.com/MEGAFRAN/vacancy-manager" },
  { name: "Discord", path: "https://discord.gg/7DwRKBTVXs" },
  { name: "LinkedIn", path: "https://www.linkedin.com/in/isfranciscocruz" },
]
export default function Home() {
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
