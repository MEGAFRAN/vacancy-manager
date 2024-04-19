"use client"

import { useState, useMemo } from "react"
import hardSkills from "@/app/job-description-analyzer/skills"
import styles from "../styles/components/wordCounter.module.scss"

interface WordCount {
  word: string
  count: number
}

interface ResultState {
  wordCounts: WordCount[]
  yearsExperience: string[]
  totalWords: number
  readingTime: number
}

const WordCounter = () => {
  const [text, setText] = useState("")
  const [results, setResults] = useState<ResultState>({
    wordCounts: [],
    yearsExperience: [],
    totalWords: 0,
    readingTime: 0,
  })
  const [wasAnalyzed, setWasAnalyzed] = useState(false)

  const defaultWords = useMemo(() => hardSkills.map((keyword) => keyword.toLowerCase()), [])

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const handleValidate = () => {
    const wordsInText = text.toLowerCase().match(/\b\w+\b/g) || []
    const wordMap = new Map<string, number>()
    const yearsPattern =
      /\b(ten|nine|eight|seven|six|five|four|three|two|one|zero|[\d]+)\+?\s+(years?|años)\b/gi
    const years: string[] = []
    let match = yearsPattern.exec(text)
    while (match) {
      years.push(match[0])
      match = yearsPattern.exec(text)
    }

    wordsInText.forEach((word) => {
      if (defaultWords.includes(word)) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1)
      }
    })

    const wordCounts = Array.from(wordMap.entries()).map(([word, count]) => ({ word, count }))
    const totalWords = wordsInText.length
    const readingTime = Math.ceil(totalWords / 200)

    setResults({ wordCounts, yearsExperience: years, totalWords, readingTime })
    setWasAnalyzed(true)
  }

  const handleReset = () => {
    setText("")
    setResults({ wordCounts: [], yearsExperience: [], totalWords: 0, readingTime: 0 })
    setWasAnalyzed(false)
  }

  return (
    <div className={styles.container}>
      <textarea value={text} onChange={handleTextChange} />
      <div className={styles.button_control}>
        <button className={styles.analyze} onClick={handleValidate}>
          Analyze
        </button>
        <button className={styles.clear} onClick={handleReset}>
          Clear
        </button>
      </div>

      {wasAnalyzed && results.yearsExperience.length && (
        <>
          <h2>Years of Experience</h2>
          <span className={styles.yearsExperience}>{results.yearsExperience.join(", ")}</span>
        </>
      )}
      {wasAnalyzed && !results.yearsExperience.length && (
        <>
          <h2>Years of Experience</h2>
          <span className={styles.yearsExperience}>Not found experience</span>
        </>
      )}

      {wasAnalyzed && results.wordCounts.length > 0 && (
        <>
          <h2>Skills required</h2>
          <span>
            {results.wordCounts
              .map(({ word }) => word)
              .sort()
              .join(", ")}
          </span>
        </>
      )}
      {wasAnalyzed && (
        <>
          <h2>Saved Reading Time</h2>
          <span>{results.readingTime} minute(s)</span>
          <h2>Total Words</h2>
          <span>{results.totalWords}</span>
        </>
      )}
    </div>
  )
}

export default WordCounter
