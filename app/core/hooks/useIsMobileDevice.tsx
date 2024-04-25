import { useState } from "react"
import deviceRelated from "../modules/util/deviceRelated"

const useIsMobileDevice = (): boolean => {
  const [isMobileDevice] = useState<boolean>(() => deviceRelated.isMobileDevice())
  return isMobileDevice
}

export default useIsMobileDevice
