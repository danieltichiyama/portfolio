import React, { createContext, useReducer } from "react"

export const PortfolioContext = createContext()

const initialState = {
  isOpen: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      console.log("toggling in reducer")
      return {
        isOpen: !state.isOpen,
      }
    default:
      return initialState
  }
}

export const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <PortfolioContext.Provider value={{ state, dispatch }}>
      {children}
    </PortfolioContext.Provider>
  )
}
