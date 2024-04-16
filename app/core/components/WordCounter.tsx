"use client"

import hardSkills from "@/app/job-description-required-skills/skills"
import React, { useState } from "react"
import styles from "../styles/components/wordCounter.module.scss"

const defaultWords = [...hardSkills].map((keyword) => keyword.toLowerCase())

interface WordCount {
  word: string
  count: number
}

const WordCounter: React.FC = () => {
  const [text, setText] = useState("")
  const [wordCounts, setWordCounts] = useState<WordCount[]>([])

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value)
  }

  const handleValidate = () => {
    const wordMap = new Map<string, number>()

    const words = text.toLowerCase().match(/\b(\w+)\b/g)

    words?.forEach((word) => {
      if (defaultWords.includes(word)) {
        wordMap.set(word, (wordMap.get(word) || 0) + 1)
      }
    })

    const sortedWords = Array.from(wordMap.entries())
      .map(([word, count]) => ({ word, count }))
      .sort((a, b) => b.count - a.count)

    setWordCounts(sortedWords)
  }

  return (
    <div className={styles.container}>
      <textarea value={text} onChange={handleTextChange} />
      <button onClick={handleValidate}>Analyze</button>
      {wordCounts.length ? (
        <>
          <h2>Skills required</h2>
          <ol>
            {wordCounts.map(({ word }) => (
              <li key={word}>{word}</li>
            ))}
          </ol>
        </>
      ) : null}
    </div>
  )
}

export default WordCounter
