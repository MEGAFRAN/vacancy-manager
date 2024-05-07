import LandingPageTemplate from "../core/components/layout/LandingPageTemplate"

export default function Home() {
  return (
    <LandingPageTemplate
      title="Cv template"
      subTitle="Create your tech job resume with this template"
      features={["Clear", "ATS Friendly", "Proven"]}
    >
      <a
        href="https://docs.google.com/document/d/1hnubC7unkwC3ibLmkIV4k-2_bfVcrnmlgX1J3eWWgcA/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get the template
      </a>
    </LandingPageTemplate>
  )
}
