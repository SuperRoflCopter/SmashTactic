import { Canvas, useFrame } from '@react-three/fiber'
import React, { ReactElement, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import Character from '../Character'

function Scene({ children }): ReactElement {
    const size = 600
    const [items, setItems] = useState<ReactElement[]>([])
    const clickHandler = (e) => {
        const x = (e.nativeEvent.offsetX - size/2)/65
        const y = -(e.nativeEvent.offsetY - size/2)/65

        // let vector = new THREE.Vector3(10, 10, 10);
        console.log(e, x, y)
        console.log("screen", e.screenX,  e.screenY)
        console.log("native", e.nativeEvent.offsetX,   e.nativeEvent.offsetY)
        setItems(items => [...items, <Character key={Math.random()} position={[x,y,0]}  />])
    }

    return (
        <Canvas 
            style={{border:"1px solid black", height:size, width:size}} 
            onClick={clickHandler}
        >
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            {children}
            {items}
        </Canvas>
    )
  }

  export default Scene