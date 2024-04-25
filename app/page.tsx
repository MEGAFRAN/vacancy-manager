"use client"

import Dashboard from "./core/components/Dashboard"
import DefaultTemplate from "./core/components/layout/DefaultTemplate"

export default function Home() {
  return (
    <DefaultTemplate
      title="Tech jobs tracker"
      introduction="Add and control the vacancies you are interested in"
    >
      <Dashboard />
    </DefaultTemplate>
  )
}
