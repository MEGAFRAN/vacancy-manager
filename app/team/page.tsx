import SectionAnalytics from "../core/modules/analytics/components/SectionAnalytics"
import Footer from "../core/components/Footer"
import TeamComponent from "../core/components/Team"
import ShareButton from "../core/components/ShareButton"
import isMobileDevice from "../core/modules/util/deviceRelated"

const internalLinks = [
  { name: "download app", path: "/download-app" },
  { name: "about", path: "/about" },
  { name: "wiki", path: "/wiki" },
]

const externalLinks = [
  { name: "Github", path: "https://github.com/MEGAFRAN/vacancy-manager" },
  { name: "Discord", path: "https://discord.gg/7DwRKBTVXs" },
  { name: "LinkedIn", path: "https://www.linkedin.com/in/isfranciscocruz" },
]
export default function Home() {
  return (
    <div>
      <TeamComponent title="Team tools" externalLinks={externalLinks} internalLinks={internalLinks}>
        {isMobileDevice() ? <ShareButton text="Share" /> : null}
      </TeamComponent>

      <Footer />
      <SectionAnalytics />
    </div>
  )
}
