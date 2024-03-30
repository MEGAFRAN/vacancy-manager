import LinksGrid from "../core/components/LinkGrid"

const urls = [
  "https://www.toptal.com",
  "https://www.turing.com",
  "https://www.flexiple.com",
  "https://www.revelo.com",
  "https://clouddevs.com",
  "https://www.upwork.com",
  "https://www.fiverr.com",
  "https://gun.io",
  "https://gigster.com",
  "https://www.guru.com",
  "https://www.remotepanda.com",
]

export default function Home() {
  return (
    <div>
      <main>
        <h1 style={{ textAlign: "center" }}>Freelance tech jobs boards</h1>
      </main>
      <LinksGrid urls={urls} />
      <footer></footer>
    </div>
  )
}
