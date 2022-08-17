import { createContext, ReactElement, useReducer } from "react";
import { Action, gameReducer } from "./reducer";

interface CharacterType {
    x: number,
    y: number,
}

export interface GameState {
    enemies: ReactElement[],
    setEnemies?: (enemies:ReactElement[]) => void
    characters: CharacterType[],
    selectedBlock: { x:number, y:number }
}

export const initialState:GameState = {
    enemies: [],
    characters: [],
    selectedBlock: { x:0, y:0 },
}

const GameContext = createContext<{
    state: GameState;
    dispatch: React.Dispatch<Action>;
  }>({
    state: initialState,
    dispatch: () => null
  });

function GameProvider (props:any) {
    const [state, dispatch] = useReducer(gameReducer, initialState)
  
    return (
      <GameContext.Provider value={{ state, dispatch }}>
        {props.children}
      </GameContext.Provider>
    )
}
  
export { GameContext, GameProvider };
