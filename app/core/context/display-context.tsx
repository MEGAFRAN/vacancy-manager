"use client"

import React, { createContext, useState } from "react"
import deviceRelated from "../modules/util/deviceRelated"

export const Context = createContext({
  isStandAloneMode: false,
  isMobileDevice: false,
})

const DisplayContext = ({ children }: any) => {
  const [isStandAloneMode] = useState<boolean>(() => deviceRelated.isStandAloneMode())
  const [isMobileDevice] = useState<boolean>(() => deviceRelated.isMobileDevice())

  return (
    <Context.Provider value={{ isStandAloneMode, isMobileDevice }}>{children}</Context.Provider>
  )
}

export default DisplayContext
