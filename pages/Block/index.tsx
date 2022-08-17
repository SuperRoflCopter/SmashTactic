import { useContextBridge } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import React, { ReactElement, useContext, useState } from 'react'
import { BackSide, FrontSide,  } from 'three'
import { GameContext } from '../Context'
import Enemy from '../Enemy'

type Props = {
    color: string
} & MeshProps

function Block({color= "black", ...props}:Props): ReactElement {

    const [hasSide, setHasSide] =  useState(false)
    const [colorBack, setColorBack] =  useState(color)
    const { state, dispatch } = useContext(GameContext)
    // @ts-ignore 
    const x = props?.position?.[0]
    // @ts-ignore
    const y = props?.position?.[1]

    const clickHandler = (e: any) => {
        e.stopPropagation()
        if(e.which === 1) dispatch({ type: 'ADD_ENEMY', element: <Enemy key={Math.floor((1 + Math.random()) * 0x10000)} position={[x, y, 1]} /> })
      }

    const rightClickHandler = (e: any) => {
        e.stopPropagation()
        dispatch({ type: 'SELECT_BLOCK', x, y })
    }

    return (
     <mesh
        {...props}
        scale={1}
        onClick={clickHandler}
        onContextMenu={rightClickHandler}
        onPointerOver={(event) => {
            event.stopPropagation()
            setHasSide(true)
            setColorBack("red")
        }}
        onPointerOut={(event) => {
            setColorBack(color)
        }}
    >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={colorBack} shadowSide={hasSide ? BackSide: FrontSide} />
     </mesh>
    )
}

export default Block