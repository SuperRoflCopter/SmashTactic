import { Canvas, useThree } from "@react-three/fiber";
import React, { ReactElement, useEffect, useRef } from "react";
import Block from "../Block";
import { PerspectiveCamera, TrackballControls } from "@react-three/drei";
import { GameContext } from "../Context";
import Scene from "../Scene";

function CanvasElement({ children }: any): ReactElement {

  const context = React.useContext(GameContext); 
  const size = 600;
  const canvasRef = useRef<any>()

  const touchMoveHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    console.log("touchMove", e);
  };
  const onMouseDownCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("onMouseDownCapture", e, context);
  };

  return (
    <>
        <Canvas
          ref={canvasRef}
          style={{ border: "1px solid black", height: size, width: size }}
          onTouchMove={touchMoveHandler}
          onMouseDownCapture={onMouseDownCapture}
          camera={{position:[0,0,10], far:90}}
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          <TrackballControls
            rotateSpeed={1.0}
            zoomSpeed={1.2}
            panSpeed={0.8}
            noZoom={false}
            noPan={false}
            staticMoving={true}
            dynamicDampingFactor={0.3}
            
          />
          {/* <PerspectiveCamera
            far={3000} /> */}
          <Scene/>
        </Canvas>
      </>
  );
}

export default CanvasElement;

