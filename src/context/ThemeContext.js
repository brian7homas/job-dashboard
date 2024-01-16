import React, { createContext, useReducer } from "react";
import { ThemeReducer, INITIAL_STATE } from "./ThemeReducer";
export const ThemeContext = createContext({
  state: INITIAL_STATE,
  setTheme: () => ThemeReducer
})

export const ThemeProvider = ({children}) => {
  const [state, setTheme] = useReducer(ThemeReducer, INITIAL_STATE)
  return(
    <ThemeContext.Provider value={{state, setTheme}}>
      {children}
  </ThemeContext.Provider>
  )
}