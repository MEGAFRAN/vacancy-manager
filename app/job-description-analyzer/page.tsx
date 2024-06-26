import type { NextPage } from "next"
import WordCounter from "../core/components/WordCounter"
import DefaultTemplate from "../core/components/layout/DefaultTemplate"

const Home: NextPage = () => (
  <DefaultTemplate
    title="Job description analyzer"
    introduction="Add a job description on the text box, then click analyze to see the most important requirements"
  >
    <WordCounter />
  </DefaultTemplate>
)

export default Home
