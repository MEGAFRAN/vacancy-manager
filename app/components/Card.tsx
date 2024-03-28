"use client"

import React from "react"
import { CardData } from "../interfaces/components"
import styles from "../styles/card.module.scss"

interface CardProps {
  data: CardData;
  onDelete: (id: string) => void;
  onUpdate: (data: CardData) => void;
}

const Card: React.FC<CardProps> = ({ data, onDelete, onUpdate }) => {
  const handleDelete = () => onDelete(data.id)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onUpdate({ ...data, [e.target.name]: e.target.value })
  }

  return (
    <div className={styles.container}>
      <input name="companyName" value={data.companyName} onChange={handleChange} />
      {/* Add other fields here */}
      <button onClick={handleDelete}>Delete</button>
      {/* Dropdown and other inputs */}
    </div>
  )
}

export default Card
