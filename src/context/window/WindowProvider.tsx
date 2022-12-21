import React from 'react'
import { WindowContext } from './WindowContext';
import { windowReducer, WindowActionType } from './windowReducer';

interface Props {
  children: React.ReactNode
}

export interface WindowState {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  windowWidth: number
  windowHeight: number
  scrollPosition: number
}

const Window_INITIAL_STATE: WindowState = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  windowWidth: 0,
  windowHeight: 0,
  scrollPosition: 0,
}

export const WindowProvier: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(windowReducer, Window_INITIAL_STATE);
  
  React.useEffect(() => {
    const handleResize = () => {
      dispatch({
        type: WindowActionType.SET_WINDOWWIDTH,
        payload: window.innerWidth,
      })
      dispatch({
        type: WindowActionType.SET_WINDOWHEIGHT,
        payload: window.innerHeight,
      })
      dispatch({
        type: WindowActionType.SET_ISMOBILE,
        payload: window.innerWidth < 768,
      })
      dispatch({
        type: WindowActionType.SET_ISTABLET,
        payload: window.innerWidth >= 768 && window.innerWidth < 1024,
      })
      dispatch({
        type: WindowActionType.SET_ISDESKTOP,
        payload: window.innerWidth >= 1024,
      })
    }

    const handleScroll = () => {
      dispatch({ type: WindowActionType.SET_SCROLLPOSITION, payload: window.scrollY })
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    handleResize()
    handleScroll()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <WindowContext.Provider value={state}>{children}</WindowContext.Provider>
  )
}
