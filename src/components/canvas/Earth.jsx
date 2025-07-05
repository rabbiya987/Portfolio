import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
      style={{ width: "100%", height: "100%" }} // full container size
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Basic ambient light */}
        <ambientLight intensity={0.5} />
        {/* Point light for some depth */}
        <pointLight position={[10, 10, 10]} intensity={1} />

        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
