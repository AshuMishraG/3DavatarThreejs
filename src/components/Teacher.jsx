import { useGLTF } from "@react-three/drei";
export const teachers = ["Nanami", "Naoki"];

export const Teacher = ({ teacher, ...props }) => {
   const { scene } = useGLTF(`/models/teacher_${teacher}.glb`);
   return (
      <group {...props}>
         <primitive object={scene} />
      </group>
   );
};

teachers.forEach((teacher) => {
   useGLTF.preload(`/models/teacher_${teacher}.glb`);
});
