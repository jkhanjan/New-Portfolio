import React, { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Instance, Instances } from "@react-three/drei";

function Stars() {
  const ref = useRef();

  const starsPositions = useMemo(() => {
    return Array.from({ length: 1000 }, () => [
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
        <sphereGeometry args={[0.007, 8, 10]} />
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
