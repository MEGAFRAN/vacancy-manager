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
      <div>
        <label htmlFor="companyName">Company Name</label>
        <input
          id="companyName"
          type="text"
          name="companyName"
          value={data.companyName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <input id="role" type="text" name="role" value={data.role} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" value={data.date} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="expectedSalary">Expected Salary</label>
        <input
          id="expectedSalary"
          type="text"
          name="expectedSalary"
          value={data.expectedSalary}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="jobDescription">Job Description</label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          value={data.jobDescription}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="comments">Comments</label>
        <textarea id="comments" name="comments" value={data.comments} onChange={handleChange} />
      </div>
      <button className={styles.delete_button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}

export default Card
