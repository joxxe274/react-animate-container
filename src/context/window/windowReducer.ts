import { WindowState } from './';

export enum WindowActionType {
  SET_ISMOBILE = '[Window] Set IsMobile',
  SET_ISTABLET = '[Window] Set IsTablet',
  SET_ISDESKTOP = '[Window] Set IsDesktop',
  SET_WINDOWWIDTH = '[Window] Set WindowWidth',
  SET_WINDOWHEIGHT = '[Window] Set WindowHeight',
  SET_SCROLLPOSITION = '[Window] Set ScrollPosition',
}

export const windowReducer = (state: WindowState, action: any) => {
  switch (action.type) {
    case '[Window] Set IsMobile':
      return {
        ...state,
        isMobile: action.payload,
      };
    case '[Window] Set IsTablet':
      return {
        ...state,
        isTablet: action.payload,
      };
    case '[Window] Set IsDesktop':
      return {
        ...state,
        isDesktop: action.payload,
      };
    case '[Window] Set WindowWidth':
      return {
        ...state,
        windowWidth: action.payload,
      };
    case '[Window] Set WindowHeight':
      return {
        ...state,
        windowHeight: action.payload,
      };
    case '[Window] Set ScrollPosition':
      return {
        ...state,
        scrollPosition: action.payload,
      };
    default:
      return state;
  }
}