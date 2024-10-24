"use client";
import {
   Box,
   CameraControls,
   Environment,
   Gltf,
   OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Teacher } from "./teacher";
import { degToRad } from "three/src/math/MathUtils";

export const Experiance = () => {
   return (
      <>
         <Canvas
            camera={{
               position: [0, 0, 0.0001],
            }}
         >
            <CameraManager />
            <Environment preset="sunset" />
            <ambientLight intensity={0.8} color="pink" />
            <Teacher
               teacher={"Nanami"}
               position={[-1, -1.7, -3]}
               scale={1.5}
               rotation-y={degToRad(20)}
            />
            <Gltf
               src="/models/classroom_default.glb"
               position={[0.2, -1.7, -2]}
            />
         </Canvas>
      </>
   );
};

const CameraManager = () => {
   return (
      <CameraControls
         //   ref={controls}
         minZoom={1}
         maxZoom={3}
         polarRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
         azimuthRotateSpeed={-0.3} // REVERSE FOR NATURAL EFFECT
         mouseButtons={{
            left: 1, //ACTION.ROTATE
            wheel: 16, //ACTION.ZOOM
         }}
         touches={{
            one: 32, //ACTION.TOUCH_ROTATE
            two: 512, //ACTION.TOUCH_ZOOM
         }}
      />
   );
};
