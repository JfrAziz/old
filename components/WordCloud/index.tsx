import { FC } from "react";
import { config } from "@config";
import { WordCloud } from "./Cloud";
import { Canvas } from "@react-three/fiber";
import { TrackballControls } from "@react-three/drei";

export const WordCloudCanvas: FC = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 45], fov: 90 }} >
      <fog attach="fog" args={["#202025", 0, 80]} />

      <WordCloud word={config.wordClouds.words} radius={config.wordClouds.radius} />

      <TrackballControls noZoom noPan />
    </Canvas>
  );
}