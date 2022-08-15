import { Canvas, useThree } from "@react-three/fiber";
import React, { ReactElement, useEffect, useRef } from "react";
import Block from "../Block";
import { GameContext } from "../Context";
import Wall from "../Wall";

function Scene({ children }: any): ReactElement {

  const context = React.useContext(GameContext)

  const buildBoard = () => {
    const result = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        result.push(<Block layers={0} position={[i, j, 0]} color={j%2 && i%2 || !(j%2) && !(i%2) ? "black": "white"} />)
      }
    }
    return result;
  }

  const buildWall = () => {
    const result = [];
    for (let i = -1; i < 11; i++) {
        result.push(<Wall position={[i, -1, 0]} />)
        result.push(<Wall position={[i, -1, 1]} />)

        result.push(<Wall type="vertical" position={[-1, i, 0]} />)
        result.push(<Wall type="vertical" position={[-1, i, 1]} />)

        result.push(<Wall  type="vertical" position={[10, i, 0]} />)
        result.push(<Wall  type="vertical" position={[10, i, 1]} />)

        result.push(<Wall position={[i, 10, 0]} />)
        result.push(<Wall position={[i, 10, 1]} />)
    }
    return result;
  }

  return (
    <>
          {children}
          {context.enemies}
          {buildBoard()}
          {buildWall()}
      </>
  )
}

export default Scene;