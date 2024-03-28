import React, { useState } from "react"
import { CardData } from "../interfaces/components"

interface NewCardFormProps {
  onClose: () => void;
  onSave: (card: Omit<CardData, "id">) => void;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
    onClose()
  }

  const columnOptions = [
    "Interested", "Applied", "Recruiter Interview", "Tech Interview",
    "Client Interview", "HR Interview", "Contract", "Miss",
  ]

  return (
    <div className="newCardForm">
      <form onSubmit={handleSubmit}>
        <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} required />
        <input type="text" name="role" placeholder="Role" value={formData.role} onChange={handleChange} required />
        <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange} required />
        <input type="text" name="expectedSalary" placeholder="Expected Salary" value={formData.expectedSalary} onChange={handleChange} required />
        <textarea name="jobDescription" placeholder="Job Description" value={formData.jobDescription} onChange={handleChange} required />
        <textarea name="comments" placeholder="Comments" value={formData.comments} onChange={handleChange} />
        <select name="column" value={formData.column} onChange={handleChange} required>
          <option value="">Select a Column</option>
          {columnOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit">Save Card</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  )
}

export default NewCardForm
