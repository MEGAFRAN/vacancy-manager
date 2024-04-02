"use client"

import React, { useState, useEffect } from "react"
import { CardData } from "../interfaces/components"
import Card from "./Card"
import NewCardForm from "./NewCardForm"
import styles from "../styles/components/dashboard.module.scss"

const initialColumns = [
  { number: 1, name: "Interested" },
  { number: 2, name: "Applied" },
  { number: 3, name: "Recruiter Interview" },
  { number: 4, name: "Tech Interview" },
  { number: 5, name: "Client Interview" },
  { number: 6, name: "HR Interview" },
  { number: 7, name: "Offer" },
  { number: 8, name: "Not Selected" },
]

const Dashboard: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([])
  const [showNewCardFormForColumnNumber, setShowNewCardFormForColumnNumber] = useState<
    number | null
  >(null)

  useEffect(() => {
    const allCards = initialColumns.flatMap((column) => {
      const columnCards = localStorage.getItem(`column-${column.number}`)
      return columnCards ? JSON.parse(columnCards) : []
    })
    setCards(allCards)
  }, [])

  const addNewCard = (newCardData: Omit<CardData, "id">, columnNumber: number) => {
    const newCard: CardData = {
      ...newCardData,
      id: Date.now().toString(),
      column: columnNumber.toString(),
    }
    const columnCards = JSON.parse(localStorage.getItem(`column-${columnNumber}`) || "[]")
    localStorage.setItem(`column-${columnNumber}`, JSON.stringify([...columnCards, newCard]))
    setCards([...cards, newCard])
  }

  const handleDeleteCard = (id: string, columnNumber: number) => {
    const columnCards = JSON.parse(localStorage.getItem(`column-${columnNumber}`) || "[]")
    const updatedColumnCards = columnCards.filter((card: CardData) => card.id !== id)
    localStorage.setItem(`column-${columnNumber}`, JSON.stringify(updatedColumnCards))
    setCards(cards.filter((card) => card.id !== id))
  }

  const handleUpdateCard = (updatedCard: CardData) => {
    const originalCard = cards.find((card) => card.id === updatedCard.id)
    const originalColumn = originalCard ? originalCard.column : null

    if (originalColumn && originalColumn !== updatedCard.column) {
      const originalColumnCards = JSON.parse(
        localStorage.getItem(`column-${originalColumn}`) || "[]",
      )
      const filteredOriginalColumnCards = originalColumnCards.filter(
        (card: CardData) => card.id !== updatedCard.id,
      )
      localStorage.setItem(`column-${originalColumn}`, JSON.stringify(filteredOriginalColumnCards))

      const newColumnCards = JSON.parse(
        localStorage.getItem(`column-${updatedCard.column}`) || "[]",
      )
      const updatedNewColumnCards = [...newColumnCards, updatedCard]
      localStorage.setItem(`column-${updatedCard.column}`, JSON.stringify(updatedNewColumnCards))
    } else {
      const columnCards = JSON.parse(localStorage.getItem(`column-${updatedCard.column}`) || "[]")
      const updatedColumnCards = columnCards.map((card: CardData) =>
        card.id === updatedCard.id ? updatedCard : card,
      )
      localStorage.setItem(`column-${updatedCard.column}`, JSON.stringify(updatedColumnCards))
    }

    const updatedCards = cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    setCards(updatedCards)
  }

  return (
    <div className={styles.container}>
      {initialColumns.map((column) => {
        const columnCards = cards.filter((card) => card.column === column.number.toString())
        return (
          <div key={column.number} className={styles.column}>
            <div className={styles.header}>
              <h2>{column.name}</h2>
              <button
                className={styles.add_button}
                onClick={() => setShowNewCardFormForColumnNumber(column.number)}
              >
                Add
              </button>
            </div>
            {columnCards.map((cardData) => (
              <Card
                key={cardData.id}
                data={cardData}
                onDelete={() => handleDeleteCard(cardData.id, column.number)}
                onUpdate={handleUpdateCard}
                columns={initialColumns}
              />
            ))}
            {showNewCardFormForColumnNumber === column.number && (
              <NewCardForm
                onClose={() => setShowNewCardFormForColumnNumber(null)}
                onSave={(cardData) => addNewCard(cardData, column.number)}
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Dashboard
