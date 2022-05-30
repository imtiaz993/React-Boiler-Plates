import { createContext, useReducer } from 'react'

export const Store = createContext()

const storeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload }
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload }
    default:
      return state
  }
}

export function storeProvider({ children }) {
  const [state, dispatch] = useReducer(storeReducer, {
    color: '#58249c',
    mode: 'dark'
  })

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color })
  }
  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode })
  }

  return (
    <Store.Provider value={{...state, changeColor, changeMode}}>
      {children}
    </Store.Provider>
  )
}