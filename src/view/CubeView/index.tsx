"use client";

import { Float, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { TextureLoader } from "three";

function Loader() {
  const { progress } = useProgress();

  return (
    <div
      style={{
        display: progress < 1 ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "fixed",
        inset: 0,
      }}
    >
      Loading...
    </div>
  );
}

function shuffleArray(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Box() {
  const [texturePaths] = useState([
    "assets/cube/AA02.png",
    "assets/cube/AB16.png",
    "assets/cube/AA16.png",
    "assets/cube/AF01.png",
    "assets/cube/AF09.png",
    "assets/cube/AF20.png",
    "assets/cube/E10.png",
  ]);

  const shuffledTextures = shuffleArray(texturePaths.slice(0,texturePaths.length));
  const textures = useLoader(TextureLoader, shuffledTextures);

  const materialElements = [];

  for (let i = 0; i < textures.length; i++) {
    materialElements.push(
      <meshBasicMaterial
        key={`material-${i}`}
        attach={`material-${i}`}
        map={textures[i]}
      />
    );
  }

  return (
    <mesh position={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[7, 7, 7]} />
      {materialElements}
    </mesh>
  );
}

const CubeView = () => {
  return (
    <div className="relative">
      <Loader />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Canvas camera={{ position: [0, 0, 10] }}>
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={5} // XYZ rotation intensity, defaults to 1
            floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          >
            <OrbitControls enableZoom={false} />
            {/* <ambientLight intensity={0.5} /> */}
            <Box />
          </Float>
        </Canvas>
      </div>
    </div>
  );
};

export default CubeView;
