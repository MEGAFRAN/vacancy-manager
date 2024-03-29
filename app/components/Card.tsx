"use client"

import React from "react"
import { CardData } from "../interfaces/components"
import styles from "../styles/components/card.module.scss"

interface CardProps {
  data: CardData
  onDelete: (id: string) => void
  onUpdate: (data: CardData) => void
}

const Card: React.FC<CardProps> = ({ data, onDelete, onUpdate }) => {
  const handleDelete = () => onDelete(data.id)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.container}>
      <input type="text" name="companyName" value={data.companyName} onChange={handleChange} />
      <input type="text" name="role" value={data.role} onChange={handleChange} />
      <input type="date" name="date" value={data.date} onChange={handleChange} />
      <input
        type="text"
        name="expectedSalary"
        value={data.expectedSalary}
        onChange={handleChange}
      />
      <textarea name="jobDescription" value={data.jobDescription} onChange={handleChange} />
      <textarea name="comments" value={data.comments} onChange={handleChange} />
      <button className={styles.delete_button} onClick={handleDelete}>
        Delete Card
      </button>
    </div>
  )
}

export default Card
