import React, { createContext, useReducer } from "react";
import { ThemeReducer, INITIAL_STATE } from "./ThemeReducer";
import { Theme } from "@radix-ui/themes";
export const ThemeContext = createContext({
  state: INITIAL_STATE,
  setTheme: () => ThemeReducer
})

export const ThemeProvider = ({children}) => {
  const [state, setTheme] = useReducer(ThemeReducer, INITIAL_STATE)
  return(
    <ThemeContext.Provider value={{state, setTheme}}>
      <Theme
        appearance={state.theme}
        accentColor="gray"
        grayColor="sage"
        panelBackground="translucent"
        scaling="100%"
        radius="medium"
      >
        {children}
      </Theme>
    </ThemeContext.Provider>
  )
}