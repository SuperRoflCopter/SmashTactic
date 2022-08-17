import { Canvas, useThree } from "@react-three/fiber";
import React, { ReactElement, useContext, useEffect, useRef, useState } from "react";
import Block from "../Block";
import { GameContext } from "../Context";
import Wall from "../Wall";

function Scene({ children }: any): ReactElement {
  const [score, setScore] = useState(0)
  const { state: { enemies }, dispatch } = useContext(GameContext)
  
  const buildBoard = () => {
    const result = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        result.push(<Block key={`${i}_${j}`} layers={0} position={[i, j, 0]} color={j%2 && i%2 || !(j%2) && !(i%2) ? "black": "white"} />)
      }
    }
    return result;
  }

  // useEffect(() => {
  //   setScore(enemies.length)
  //   console.log("enemies", enemies.length)
  // }, [enemies])

  const buildWall = () => {
    const result = [];
    for (let i = -1; i < 11; i++) {
        result.push(<Wall key={`${i}_bottom0`} position={[i, -1, 0]} />)
        result.push(<Wall key={`${i}_bottom1`} position={[i, -1, 1]} />)

        result.push(<Wall key={`${i}_left0`} type="vertical" position={[-1, i, 0]} />)
        result.push(<Wall key={`${i}_left1`} type="vertical" position={[-1, i, 1]} />)

        result.push(<Wall key={`${i}_right0`} type="vertical" position={[10, i, 0]} />)
        result.push(<Wall key={`${i}_right1`} type="vertical" position={[10, i, 1]} />)

        result.push(<Wall key={`${i}_top0`} position={[i, 10, 0]} />)
        result.push(<Wall key={`${i}_top1`} position={[i, 10, 1]} />)
    }
    return result;
  }

  return (
    <>
          {children}
          {enemies}
          {buildBoard()}
          {buildWall()}

      </>
  )
}

export default Scene;