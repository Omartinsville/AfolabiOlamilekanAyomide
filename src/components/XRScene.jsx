// src/components/XRScene.jsx

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

function Object() {
  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
    </Float>
  );
}

export default function XRScene() {
  return (
    <section id="xrstudio" className="h-[600px] w-full">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} />
        <Object />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
}
