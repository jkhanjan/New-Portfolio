import React, { useRef, useLayoutEffect, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { TorusKnot } from "@react-three/drei";

const GlassKnot = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    const t = state.clock.getElapsedTime();
    const xRotation = (mousePosition.y / window.innerHeight - 0.5) * Math.PI;
    const yRotation = (mousePosition.x / window.innerWidth - 0.5) * Math.PI;

    easing.damp(meshRef.current.rotation, "x", xRotation / 4, 0.1, delta);
    easing.damp(meshRef.current.rotation, "y", yRotation / 4, 0.1, delta);
    easing.damp(meshRef.current.position, "y", Math.sin(t) * 0.1, 0.1, delta);
    easing.damp3(meshRef.current.scale, hovered ? 1.12 : 1, 0.25, delta);
  });

  const material = useMemo(
    () => (
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
    ),
    []
  );

  return (
    <TorusKnot
      ref={meshRef}
      args={[1, 0.4, 64, 16]}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {material}
    </TorusKnot>
  );
};

export default React.memo(GlassKnot);
