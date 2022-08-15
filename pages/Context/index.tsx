import React, { ReactElement } from "react";

interface CharacterType {
    x: number,
    y: number,
}

export const initialState: {
    enemies: ReactElement[],
    setEnemies?: (enemies:ReactElement[]) => void
    characters: CharacterType[],
    selectedBlock: { x:number, y:number }
} = {
    enemies: [],
    characters: [],
    selectedBlock: { x:0, y:0 }
}

export const GameContext = React.createContext(initialState);