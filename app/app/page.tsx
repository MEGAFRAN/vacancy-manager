import InstallPWAButton from "../core/components/PwaButton"
import LandingPageTemplate from "../core/components/layout/LandingPageTemplate"

export default function Home() {
  return (
    <LandingPageTemplate
      title="Clubtal Mobile App"
      subTitle="Tools"
      features={[
        "Job tracker",
        "Job description analyzer",
        "Job sites",
        "Job search advice",
        "and more to get tech jobs",
      ]}
    >
      <InstallPWAButton text="Free Download" />
    </LandingPageTemplate>
  )
}
