"use client"

import React, { useState, useEffect } from "react"
import { CardData } from "../interfaces/components"
import Card from "./Card"
import NewCardForm from "./NewCardForm"
import styles from "../styles/components/dashboard.module.scss"

const initialColumns = [
  "Interested",
  "Applied",
  "Recruiter Interview",
  "Tech Interview",
  "Client Interview",
  "HR Interview",
  "Offer",
  "Ended",
]

const Dashboard: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([])
  const [showNewCardFormForColumn, setShowNewCardFormForColumn] = useState<string>("")

  useEffect(() => {
    const allCards = initialColumns.flatMap((column) => {
      const columnCards = localStorage.getItem(column)
      return columnCards ? JSON.parse(columnCards) : []
    })
    setCards(allCards)
  }, [])

  const addNewCard = (newCardData: Omit<CardData, "id">, column: string) => {
    const newCard: CardData = { ...newCardData, id: Date.now().toString(), column }

    const columnCards = JSON.parse(localStorage.getItem(column) || "[]")
    localStorage.setItem(column, JSON.stringify([...columnCards, newCard]))

    setCards([...cards, newCard])
  }

  const handleDeleteCard = (id: string, column: string) => {
    // Update session storage
    const columnCards = JSON.parse(localStorage.getItem(column) || "[]")
    const updatedColumnCards = columnCards.filter((card: CardData) => card.id !== id)
    localStorage.setItem(column, JSON.stringify(updatedColumnCards))
    // Update state
    const updatedCards = cards.filter((card) => card.id !== id)
    setCards(updatedCards)
  }

  const handleUpdateCard = (updatedCard: CardData) => {
    // Update session storage
    const columnCards = JSON.parse(localStorage.getItem(updatedCard.column) || "[]")
    const updatedColumnCards = columnCards.map((card: CardData) =>
      card.id === updatedCard.id ? updatedCard : card,
    )
    localStorage.setItem(updatedCard.column, JSON.stringify(updatedColumnCards))
    // Update state
    const updatedCards = cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    setCards(updatedCards)
  }

  return (
    <div className={styles.container}>
      {initialColumns.map((column) => {
        const columnCards = cards.filter((card) => card.column === column)
        return (
          <div key={column} className={styles.column}>
            <div className={styles.header}>
              <h2>{column}</h2>
              <button
                className={styles.add_button}
                onClick={() => setShowNewCardFormForColumn(column)}
              >
                Add
              </button>
            </div>
            {columnCards.map((cardData) => (
              <Card
                key={cardData.id}
                data={cardData}
                onDelete={() => handleDeleteCard(cardData.id, column)}
                onUpdate={handleUpdateCard}
              />
            ))}
            {showNewCardFormForColumn === column && (
              <NewCardForm
                onClose={() => setShowNewCardFormForColumn("")}
                onSave={(cardData) => addNewCard(cardData, column)}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard
