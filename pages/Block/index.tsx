import { MeshProps } from '@react-three/fiber'
import React, { ReactElement, useState } from 'react'
import { BackSide, FrontSide,  } from 'three'
import { GameContext } from '../Context'
import Enemy from '../Enemy'

type Props = {
    color: string
} & MeshProps

function Block({color= "black", ...props}:Props): ReactElement {

    const [hasSide, setHasSide] =  useState(false)
    const [colorBack, setColorBack] =  useState(color)
    const context = React.useContext(GameContext); 
    const x = props?.position?.[0]
    const y = props?.position?.[1]

    const clickHandler = (e: any) => {
        // const x = (e.nativeEvent.offsetX - size / 2) / 65;
        // const y = -(e.nativeEvent.offsetY - size / 2) / 65;
    
        // let vector = new THREE.Vector3(10, 10, 10);
        // console.log(e, x, y);
        // console.log("screen", e.screenX, e.screenY);
        // console.log("native", e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        // setItems((items) => [
        //   ...items,
        //   <Character key={Math.random()} position={[1, 1, 1]} />,
        // ]);
        e.stopPropagation()
        // e.which === 1 && setItems(<Character key={Math.floor((1 + Math.random()) * 0x10000)} position={[0, 0, 1]} />)
        if(e.which === 1) context.enemies = [ ...context.enemies, <Enemy key={Math.floor((1 + Math.random()) * 0x10000)} position={[x, y, 1]} />]
      }

    const rightClickHandler = (e: any) => {
        e.stopPropagation()
        context.selectedBlock = { x, y }
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