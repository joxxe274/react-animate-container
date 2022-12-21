import React from 'react'

interface MenuContextProps {
  isOpen: boolean
  toggleMenu: () => void
}

export const MenuContext = React.createContext({} as MenuContextProps)
