import LinksGrid from "../core/components/LinkGrid"

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
    <div>
      <main>
        <h1 style={{ textAlign: "center" }}>Software learning sites</h1>
      </main>
      <LinksGrid urls={urls} />
      <footer></footer>
    </div>
  )
}
