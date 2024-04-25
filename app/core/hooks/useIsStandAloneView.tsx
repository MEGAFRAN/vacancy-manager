import { useState, useEffect } from "react"
import deviceRelated from "../modules/util/deviceRelated"

// Custom hook to detect online/offline status
const useIsStandAloneMode = (): boolean => {
  const [isStandAloneMode, setIsStandAloneMode] = useState<boolean>(false)

  useEffect(() => setIsStandAloneMode(deviceRelated.isStandAloneMode()), [])

  return isStandAloneMode
}

export default useIsStandAloneMode
