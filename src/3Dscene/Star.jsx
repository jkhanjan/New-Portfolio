import React, { useRef, useMemo, useLayoutEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Instance, Instances } from "@react-three/drei";
import { throttle } from "lodash";


// Simple fallback component
function LoadingFallback() {
  return <div>Loading...</div>;
}

function Stars() {
  const ref = useRef();

  const starsPositions = useMemo(() => {
    // Reduce the number of stars for faster initial load
    return Array.from({ length: 650 }, () => [
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
    ]);
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.0005 * delta * 60;
      ref.current.rotation.y += 0.0005 * delta * 60;
    }
  });

  return (
    <group ref={ref}>
      <Instances>
        {/* Simplified sphere geometry to reduce rendering load */}
        <sphereGeometry args={[0.005, 6, 6]} />
        <meshBasicMaterial color="black" />
        {starsPositions.map((position, i) => (
          <Instance key={i} position={position} />
        ))}
      </Instances>
    </group>
  );
}

function MouseRotation() {
  const { camera } = useThree();

  useLayoutEffect(() => {
    const handleMouseMove = throttle((event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const mouseX = (clientX / innerWidth) * 2 - 1;
      const mouseY = -(clientY / innerHeight) * 2 + 1;

      camera.rotation.y = (mouseX * Math.PI) / 80;
      camera.rotation.x = (mouseY * Math.PI) / 80;
    }, 50); // Throttling to update every 50ms (adjust as needed)

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      handleMouseMove.cancel(); // Cancel throttled function when unmounting
    };
  }, [camera]);

  return null;
}

export default function Scene() {
  return (
    <div style={{ width: "100%", height: "100%" }} className="absolute z-[1]">
      <Canvas camera={{ position: [0, 0, 10], fov: 90 }} frameloop="demand">
        <color attach="background" args={["white"]} />
        <Suspense fallback={<LoadingFallback />}>
          <Stars />
        </Suspense>
        <MouseRotation />
      </Canvas>
    </div>
  );
}
