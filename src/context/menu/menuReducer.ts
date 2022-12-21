import { MenuState } from './'

export enum MenuActionType {
  TOGGlE = '[Menu] Toggle',
}

interface Action {
  type: MenuActionType
}

export const menuReducer = (state: MenuState, action: Action) => {
  switch (action.type) {
    case '[Menu] Toggle':
      return {
        ...state,
        isOpen: !state.isOpen,
      }
    default:
      return state
  }
}
