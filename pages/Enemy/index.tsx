import { Canvas, useFrame, MeshProps } from '@react-three/fiber'
import React, { ReactElement, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import { GameContext } from '../Context'

function Enemy(props: MeshProps): ReactElement {
    // This reference will give us direct access to the mesh
    const mesh = useRef<any>()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const context = React.useContext(GameContext); 
    // Rotate mesh every frame, this is outside of React without overhead
  //   useFrame(() => (mesh.current.rotation.y += 0.03))
    useFrame((state, delta) => { 
      // console.log(state, delta, event)
      // console.log(mesh.current.position.x, state.pointer.x, state.camera.position.x)
      if(mesh.current.position.x > context.selectedBlock.x)
        mesh.current.position.x -= 0.01
      if(mesh.current.position.x < context.selectedBlock.x)
        mesh.current.position.x += 0.01 
      if(mesh.current.position.y > context.selectedBlock.y)
        mesh.current.position.y -= 0.01
      if(mesh.current.position.y < context.selectedBlock.y)
        mesh.current.position.y += 0.01 
  })

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={0.2}
        layers={0}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    )
  }

  export default Enemy