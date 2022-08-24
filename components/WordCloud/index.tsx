import { Vector3 } from "three";
import { config } from "@config";
import { FC, useMemo } from "react";
import { WordCloud } from "./Cloud";
import { Canvas, useFrame } from "@react-three/fiber";
import { TrackballControls } from "@react-three/drei";

const CameraRotation = () => {
  const v = useMemo(() => new Vector3(), [])

  return useFrame((state) => {
    const t = state.clock.elapsedTime
    state.camera.position.lerp(v.set(20 * Math.sin(t / 5), 20 * Math.cos(t / 5), 45), 1)
    state.camera.lookAt(0, 0, 0)
  })
}

export const WordCloudCanvas: FC = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 45], fov: 90 }} >
      <fog attach="fog" args={["#c1c2c5", 0, 80]} />

      <WordCloud word={config.wordClouds.words} radius={config.wordClouds.radius} />

      <TrackballControls noZoom noPan />
      <CameraRotation />
    </Canvas>
  );
}