import { MeshProps } from '@react-three/fiber'
import React, { ReactElement } from 'react'
import { BackSide } from 'three'

type Props = {
    type?: 'horizontal' | 'vertical'
} & MeshProps

function Wall({type= "horizontal", ...props}:Props): ReactElement {
    return (
     <mesh
        {...props}
        scale={1}
    >
        {/* <boxGeometry args={[type === "horizontal" ? 1: 0.5, type === "vertical" ? 1: 0.5, 1]} /> */}
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"orange"} shadowSide={BackSide} clipShadows={true} />
     </mesh>
    )
}

export default Wall