"use client"

import React, { useState } from "react"
import styles from "../styles/components/feedbackForm.module.scss"

const FeedbackForm: React.FC = () => {
  const [feedback, setFeedback] = useState("")

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const response = await fetch(
        "https://clubtal-web-services.azurewebsites.net/api/add-repo-issue",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ feedback }),
        },
      )

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`)
      }

      setFeedback("")
    } catch (error) {}
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        id="feedbackInput"
        type="text"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Comments, bugs, features"
        required
      />
      <button type="submit">Report</button>
    </form>
  )
}

export default FeedbackForm
