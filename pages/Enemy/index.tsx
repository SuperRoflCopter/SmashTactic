import { useFrame, MeshProps, useThree } from '@react-three/fiber'
import React, { ReactElement, useRef, useState } from 'react'
import { GameContext } from '../Context'
import { useGLTF } from '@react-three/drei'

function Enemy(props: MeshProps): ReactElement {
    const { scene } = useThree()
    
    const mesh = useRef<any>()
    const { state:{ selectedBlock, enemies } } = React.useContext(GameContext); 
    // useFrame(() => (mesh.current.rotation.y += 0.03))
    useFrame((state, delta) => { 
      if(mesh.current.position.x > selectedBlock.x)
        mesh.current.position.x -= 0.01
      if(mesh.current.position.x < selectedBlock.x)
        mesh.current.position.x += 0.01 
      if(mesh.current.position.y > selectedBlock.y)
        mesh.current.position.y -= 0.01
      if(mesh.current.position.y < selectedBlock.y)
        mesh.current.position.y += 0.01 
  })

    // @ts-ignore 
    const { nodes, materials } = useGLTF("/model/suzanne/suzanne.gltf");

    return (
      <>
      <group ref={mesh} {...props} dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Suzanne.geometry}
          material={nodes.Suzanne.material}
          position={[0, 0.19, -0.04]}
          scale={0.5}
        />
      </group>
      </>
    )
  }

  useGLTF.preload("/suzanne.gltf");
  export default Enemy