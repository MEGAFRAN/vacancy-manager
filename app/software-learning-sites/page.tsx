import Footer from "../core/components/Footer"
import LinksGrid from "../core/components/LinkGrid"
import NavBar from "../core/components/NavBar"
import DefaultTemplate from "../core/components/layout/Template"

const urls = [
  "https://www.freecodecamp.org",
  "https://frontendmasters.com",
  "https://www.codecademy.com",
  "https://www.udemy.com",
  "https://www.coursera.org",
  "https://www.edx.org",
  "https://www.pluralsight.com",
  "https://www.khanacademy.org",
  "https://www.udacity.com",
]

export default function Home() {
  return (
    <DefaultTemplate title="Software learning sites" introduction="Learn on these sites">
      <LinksGrid urls={urls} />
    </DefaultTemplate>
  )
}
