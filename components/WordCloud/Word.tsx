import { Color } from "three";
import { Text } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { useRef, useState, useMemo, useEffect, PropsWithChildren, FC } from "react";

interface WordProps extends PropsWithChildren {
  position: THREE.Vector3
}

export const Word: FC<WordProps> = ({ children, position }) => {
  const ref = useRef<any>(null);

  const [hovered, setHovered] = useState(false);

  const color = useMemo(() => new Color(), []);

  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion);

    ref.current.material.color.lerp(color.set(hovered ? "#A3A3A3" : "#c1c2c5"), 0.1);
  });

  useEffect((): VoidFunction => {
    if (hovered) document.body.style.cursor = "pointer";

    return () => document.body.style.cursor = "auto";

  }, [hovered]);

  const onPointerOver = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation()
    setHovered(true)
  };

  const onPointerOut = () => setHovered(false)

  return (
    <Text
      ref={ref}
      fontSize={2}
      lineHeight={1}
      position={position}
      letterSpacing={-0.05}
      onPointerOut={onPointerOut}
      onPointerOver={onPointerOver} >
      {children}
    </Text>
  );
};
