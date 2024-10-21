"use client";
import { Box, Gltf, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Experiance = () => {
   return (
      <>
         <Canvas>
            <OrbitControls />
            <Gltf src="" />
         </Canvas>
      </>
   );
};
