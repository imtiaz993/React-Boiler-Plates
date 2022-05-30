import { useContext } from "react"
import { Store } from "./Store"

export const useMyContext = () => {
  const context = useContext(Store)

  if (context === undefined) {
    throw new Error("useTheme() must be used inside a ThemeProvider")
  }

  return context
}