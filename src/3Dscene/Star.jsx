import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

function Stars() {
  const ref = useRef();

  // Precompute star positions using useMemo to ensure they don't change on re-renders
  const starsPositions = useMemo(() => {
    return [...Array(1000)].map(() => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
      ],
    }));
  }, []); // Empty dependency array ensures this runs only once

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.0005;
      ref.current.rotation.y += 0.0005;
    }
  });

  return (
    <group ref={ref}>
      {starsPositions.map((star, i) => (
        <mesh key={i} position={star.position}>
          <sphereGeometry args={[0.007, 8, 10]} />
          <meshBasicMaterial color="black" />
        </mesh>
      ))}
    </group>
  );
}

function MouseRotation() {
  const { camera } = useThree();
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const mouseX = (clientX / innerWidth) * 2 - 1;
      const mouseY = -(clientY / innerHeight) * 2 + 1;

      camera.rotation.y = (mouseX * Math.PI) / 80;
      camera.rotation.x = (mouseY * Math.PI) / 80;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [camera]);

  return null;
}

export default function Scene() {
  return (
    <div style={{ width: "100%", height: "100%" }} className="absolute z-[1]">
      <Canvas camera={{ position: [0, 0, 10], fov: 90 }}>
        <color attach="background" args={["white"]} />
        <Stars />
        <MouseRotation />
      </Canvas>
    </div>
  );
}
