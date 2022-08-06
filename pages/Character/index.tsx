import { Canvas, useFrame, MeshProps } from '@react-three/fiber'
import React, { ReactElement, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

function Character(props: MeshProps): ReactElement {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    // useFrame(() => (mesh.current.rotation.x += 0.03))
    // useFrame(() => (mesh.current.rotation.y += 0.03))
    useFrame(() => (mesh.current.rotation.z += 0.03))
    // useFrame(() => (mesh.current.position.x += 0.01))

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 0.30 : 0.2}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 0]} />
        <meshStandardMaterial color={hovered ? 'black' : 'orange'} />
      </mesh>
    )
  }

  export default Character