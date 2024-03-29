"use client"

import React, { useState } from "react"
import { CardData } from "../interfaces/components"
import styles from "../styles/components/newCardForm.module.scss"

interface NewCardFormProps {
  onClose: () => void
  onSave: (card: Omit<CardData, "id">) => void
}

const initialFormData = {
  companyName: "",
  role: "",
  date: "",
  expectedSalary: "",
  jobDescription: "",
  comments: "",
  column: "",
}

const NewCardForm: React.FC<NewCardFormProps> = ({ onClose, onSave }) => {
  const [formData, setFormData] = useState(initialFormData)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
    onClose()
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="expectedSalary"
          placeholder="Expected Salary"
          value={formData.expectedSalary}
          onChange={handleChange}
          required
        />
        <textarea
          name="jobDescription"
          placeholder="Job Description"
          value={formData.jobDescription}
          onChange={handleChange}
          required
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={formData.comments}
          onChange={handleChange}
        />
        <div className={styles.button_container}>
          <button className={styles.add_button} type="submit">
            Save Card
          </button>
          <button className={styles.delete_button} type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default NewCardForm
