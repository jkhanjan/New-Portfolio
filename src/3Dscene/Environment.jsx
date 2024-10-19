import React from "react";
import { Environment, Lightformer } from "@react-three/drei";

const SceneEnvironment = () => {
  return (
    <Environment preset="">
      <Lightformer
        intensity={5}
        position={[1, 10, 0]}
        scale={[10, 10, 10]}
        onUpdate={(self) => self.lookAt(0, 0, 0)}
      />
    </Environment>
  );
};

export default SceneEnvironment;
