import type { NextPage } from "next"
import WordCounter from "../core/components/WordCounter"
import DefaultTemplate from "../core/components/layout/Template"

const Home: NextPage = () => (
  <DefaultTemplate
    title="Job description required skills"
    introduction="Add a job description on the text box, then click analyze to see the most important requirements"
  >
    <WordCounter />
  </DefaultTemplate>
)

export default Home
