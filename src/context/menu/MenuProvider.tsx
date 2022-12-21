import React from 'react'
import { MenuContext, menuReducer } from './'
import { MenuActionType } from './menuReducer'

interface Props {
  children: React.ReactNode
}

export interface MenuState {
  isOpen: boolean
}

const Menu_INITIAL_STATE: MenuState = {
  isOpen: false,
}

export const MenuProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(menuReducer, Menu_INITIAL_STATE)

  const toggleMenu = () => {
    dispatch({ type: MenuActionType.TOGGlE })
  }
  return (
    <MenuContext.Provider value={{ ...state, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
