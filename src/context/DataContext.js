import React, { createContext, useReducer } from "react";
import { DataReducer, INITIAL_STATE } from "./DataReducer";
export const DataContext = createContext({
  state: INITIAL_STATE,
  setData: () => DataReducer
})

export const DataProvider = ({children}) => {
  const [state, setData] = useReducer(DataReducer, INITIAL_STATE)
  return(
    <DataContext.Provider value={{state, setData}}>
      {children}
  </DataContext.Provider>
  )
}