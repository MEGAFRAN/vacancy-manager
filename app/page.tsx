"use client"

import Dashboard from "./core/components/Dashboard"
import DefaultTemplate from "./core/components/layout/DefaultTemplate"
import useGlobalEventListeners from "./core/hooks/useEventListeners"

export default function Home() {
  useGlobalEventListeners()

  return (
    <DefaultTemplate
      title="Tech jobs tracker"
      introduction="Add and control the vacancies you are interested in"
    >
      <Dashboard />
    </DefaultTemplate>
  )
}
