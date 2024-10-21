"use client";
import { Box, Environment, Gltf, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Experiance = () => {
   return (
      <>
         <Canvas>
            <OrbitControls />
            <Environment preset="sunset" />
            <ambientLight intensity={0.8} color="pink" />
            <pointLight position={[10, 10, 10]} />
            <Gltf src="/models/classroom_default.glb" />
         </Canvas>
      </>
   );
};
