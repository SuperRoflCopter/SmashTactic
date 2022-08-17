import { ReactElement } from "react"
import { GameState } from "."

export type Action = {
    type: 'ADD_ENEMY',
    element: ReactElement,
} | {
  type: 'SELECT_BLOCK',
  x: number,
  y: number
}

export function gameReducer(state: GameState, action: Action) {
    switch (action.type) {
      case 'ADD_ENEMY': {
        return {
            ...state,
            enemies: [ ...state.enemies, action.element ]
        }
      }
      case 'SELECT_BLOCK': {
        return {
            ...state,
            selectedBlock: { x:action.x, y:action.y },
        }
      }
      default: 
        return state
    }
  }