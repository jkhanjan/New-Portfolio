import React, { useState, useEffect, useRef } from "react";
import "./CursorFollower.css"; // For styling

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState(0); // Track speed/velocity
  const lastPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;

      // Calculate the distance between current and previous positions
      const distance = Math.sqrt(
        Math.pow(x - lastPosition.current.x, 2) +
          Math.pow(y - lastPosition.current.y, 2)
      );

      // Update velocity and position
      setVelocity(distance); // Use distance as a measure of speed
      setPosition({ x, y });

      // Update last position
      lastPosition.current = { x, y };
    };

    // Add mousemove event listener to update position and velocity
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="cursor-follower"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${10 + velocity / 1}px`, // Adjust width based on speed
        height: `${10  + velocity / 1}px`, // Adjust height based on speed
        transform: `translate(-50%, -50%) rotate(${velocity * 1}deg)`, // Optional: Rotate for a dynamic effect
      }}
    ></div>
  );
};

export default CursorFollower;
