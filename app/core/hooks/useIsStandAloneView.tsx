import { useState } from "react"
import deviceRelated from "../modules/util/deviceRelated"

const useIsStandAloneMode = (): boolean => {
  const [isStandAloneMode] = useState<boolean>(() => deviceRelated.isStandAloneMode())
  return isStandAloneMode
}

export default useIsStandAloneMode
