import React, { Suspense, lazy, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Float } from "@react-three/drei";
import { EffectComposer, Bloom, N8AO } from "@react-three/postprocessing";

// Lazy load heavy components
const LazyGlassKnot = lazy(() => import("./GlassKnot"));
const LazyEnvironment = lazy(() => import("./Environment"));

const Scene2 = () => {
  return (
    <div style={{ width: "100%", height: "100%" }} className="absolute z-[0]">
      <Canvas shadows camera={{ position: [0, 0, 34], fov: 10 }}>
        <ResponsiveCanvas />
        <spotLight
          position={[10, 10, 1]}
          penumbra={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          angle={0.2}
        />

        <Suspense fallback={null}>
          <Float floatIntensity={2}>
            <LazyGlassKnot />
          </Float>
        </Suspense>

        <ContactShadows
          scale={10}
          position={[0, -2.5, 0]}
          blur={1}
          far={100}
          opacity={0.3}
        />

        <Suspense fallback={null}>
          <LazyEnvironment />
        </Suspense>

        <EffectComposer disableNormalPass>
          <N8AO aoRadius={2} intensity={5} />
          <Bloom intensity={0.5} luminanceThreshold={0.9} />
        </EffectComposer>

        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

// Keep ResponsiveCanvas as a separate component within the file
const ResponsiveCanvas = () => {
  const { size, camera } = useThree();

  useEffect(() => {
    const aspect = size.width / size.height;
    if (aspect > 1) {
      // Desktop adjustments
      camera.fov = 10;
      camera.position.set(0, 0, 34);
    } else {
      // Mobile adjustments
      camera.fov = 25;
      camera.position.set(0, 0, 20);
    }
    camera.updateProjectionMatrix();
  }, [size, camera]);

  return null;
};

export default Scene2;
