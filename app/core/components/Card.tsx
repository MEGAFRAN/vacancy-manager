"use client"

import React from "react"
import styles from "../styles/components/card.module.scss"
import { CardData } from "../interfaces/components"

interface CardProps {
  data: CardData
  onDelete: (id: string) => void
  onUpdate: (data: CardData) => void
  columns: { number: number; name: string }[]
}

const Card: React.FC<CardProps> = ({ data, onDelete, onUpdate, columns }) => {
  const handleDelete = () => onDelete(data.id)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value })
  }

  const handleColumnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onUpdate({ ...data, column: e.target.value })
  }

  return (
    <div className={styles.container}>
      <div>
        <label htmlFor={`companyName-${data.id}`}>Company Name</label>
        <input
          id={`companyName-${data.id}`}
          type="text"
          name="companyName"
          value={data.companyName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor={`role-${data.id}`}>Role</label>
        <input
          id={`role-${data.id}`}
          type="text"
          name="role"
          value={data.role}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor={`date-${data.id}`}>Date</label>
        <input
          id={`date-${data.id}`}
          type="date"
          name="date"
          value={data.date}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor={`expectedSalary-${data.id}`}>Expected Salary</label>
        <input
          id={`expectedSalary-${data.id}`}
          type="text"
          name="expectedSalary"
          value={data.expectedSalary}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor={`jobDescription-${data.id}`}>Job Description</label>
        <textarea
          id={`jobDescription-${data.id}`}
          name="jobDescription"
          value={data.jobDescription}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor={`comments-${data.id}`}>Comments</label>
        <textarea
          id={`comments-${data.id}`}
          name="comments"
          value={data.comments}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor={`column-${data.id}`}>Move to</label>
        <select id={`column-${data.id}`} value={data.column} onChange={handleColumnChange}>
          {columns.map((column) => (
            <option key={column.number} value={column.number.toString()}>
              {column.name}
            </option>
          ))}
        </select>
      </div>
      <button className={styles.delete_button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}

export default Card
