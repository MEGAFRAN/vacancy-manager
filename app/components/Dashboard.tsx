"use client"

import React, { useState, useEffect } from "react"
import { CardData } from "../interfaces/components"
import Card from "./Card"
import NewCardForm from "./NewCardForm"
import styles from "../styles/dashboard.module.scss"

const initialColumns = [
  "Interested",
  "Applied",
  "Recruiter Interview",
  "Tech Interview",
  "Client Interview",
  "HR Interview",
  "Contract",
  "Miss",
]

const Dashboard: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([])

  const [showNewCardForm, setShowNewCardForm] = useState(false)

  const addNewCard = (newCardData: Omit<CardData, "id">) => {
    const newCard: CardData = { ...newCardData, id: Date.now().toString() } // Using timestamp as a simple unique ID
    setCards([...cards, newCard])
  }

  useEffect(() => {
    const savedCards = sessionStorage.getItem("cards")
    if (savedCards) {
      setCards(JSON.parse(savedCards))
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem("cards", JSON.stringify(cards))
  }, [cards])

  const handleDeleteCard = (id: string) => {
    const updatedCards = cards.filter((card) => card.id !== id)
    setCards(updatedCards)
  }

  const handleUpdateCard = (updatedCard: CardData) => {
    const updatedCards = cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    setCards(updatedCards)
  }

  // Render columns and cards
  const renderColumns = initialColumns.map((column) => {
    const columnCards = cards.filter((card) => card.column === column)
    return (
      <div key={column} className="column">
        <h2>{column}</h2>
        <div className="cards">
          {columnCards.map((cardData) => (
            <Card
              key={cardData.id}
              data={cardData}
              onDelete={handleDeleteCard}
              onUpdate={handleUpdateCard}
            />
          ))}
        </div>
        <button onClick={() => setShowNewCardForm(true)}>Add New Card</button>
        {showNewCardForm && (
          <NewCardForm onClose={() => setShowNewCardForm(false)} onSave={addNewCard} />
        )}
      </div>
    )
  })

  return <div className={styles.container}>{renderColumns}</div>
}

export default Dashboard
