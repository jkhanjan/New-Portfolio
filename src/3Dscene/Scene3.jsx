import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { easing } from "maath";
import {
  OrbitControls,
  TorusKnot,
  Environment,
  ContactShadows,
  Float,
  Lightformer,
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  N8AO,
  TiltShift2,
} from "@react-three/postprocessing";

const GlassKnot = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [mouseMoved, setMouseMoved] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement and update rotation
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseMoved(true);
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime();

    // Mouse-based rotation
    const xRotation = (mousePosition.y / window.innerHeight - 0.5) * Math.PI;
    const yRotation = (mousePosition.x / window.innerWidth - 0.5) * Math.PI;

    if (mouseMoved) {
      // Apply smooth mouse-driven rotation
      easing.damp(meshRef.current.rotation, "x", xRotation / 4, 0.1, delta);
      easing.damp(meshRef.current.rotation, "y", yRotation / 4, 0.1, delta);
    }

    // Smooth up and down movement
    easing.damp(meshRef.current.position, "y", Math.sin(t) * 0.1, 0.1, delta);

    // Smooth scaling animation
    easing.damp3(meshRef.current.scale, hovered ? 1.12 : 1, 0.25, delta);
  });

  return (
    <TorusKnot
      ref={meshRef}
      args={[1, 0.4, 128, 42]}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshPhysicalMaterial
        transparent
        transmission={0.91}
        roughness={0.4}
        thickness={0.2}
        envMapIntensity={1}
        clearcoat={1}
        clearcoatRoughness={0.1}
        color="#dfdde0"
        ior={1.5}
      />
    </TorusKnot>
  );
};

const ResponsiveCanvas = () => {
  const { size, camera } = useThree();

  useEffect(() => {
    const aspect = size.width / size.height;
    if (aspect > 1) {
      // Desktop adjustments
      camera.fov = 7;
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

const Scene3 = () => {
  return (
    <div style={{ width: "100%", height: "100%" }} className=" z-[0]">
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 100 }}>
        <ResponsiveCanvas />
        <spotLight position={[10, 10, 1]} penumbra={1} castShadow angle={0.2} />

        <Float floatIntensity={2}>
          <GlassKnot />
        </Float>

        <ContactShadows
          scale={10}
          position={[0, -2.5, 0]}
          blur={1}
          far={100}
          opacity={0.3}
        />

        <Environment preset="">
          <Lightformer
            intensity={5}
            position={[1, 10, 0]}
            scale={[10, 10, 10]}
            onUpdate={(self) => self.lookAt(0, 0, 0)}
          />
        </Environment>

        <EffectComposer disableNormalPass>
          <N8AO aoRadius={2} intensity={5} />
          <Bloom mipmapBlur luminanceThreshold={1.8} intensity={1} levels={0} />
          <TiltShift2 blur={0.2} />
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

export default Scene3;
