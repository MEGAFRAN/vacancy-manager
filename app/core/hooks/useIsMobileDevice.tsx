import { useState, useEffect } from "react"
import deviceRelated from "../modules/util/deviceRelated"

// Custom hook to detect online/offline status
const useIsMobileDevice = (): boolean => {
  const [isMobileDevice, setIsMobileDevice] = useState<boolean>(false)

  useEffect(() => setIsMobileDevice(deviceRelated.isMobileDevice()), [])

  return isMobileDevice
}

export default useIsMobileDevice
