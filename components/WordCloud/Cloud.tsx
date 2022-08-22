import { Word } from "./Word";
import { Vector3 } from "three";
import { FC, useMemo } from "react";

interface CloudProps {
  word: string[]
  
  radius: number
}

export const WordCloud: FC<CloudProps> = ({ word, radius }) => {
  const words = useMemo(() => {
    const words: { pos: Vector3; word: string }[] = new Array();

    const wordCount = word.length

    let phi, theta;

    word.forEach((item, index) => {
      phi = Math.acos( - 1 + ( 2 * index ) / wordCount );
			theta = Math.sqrt( wordCount * Math.PI ) * phi;
      words.push({
        pos: new Vector3().setFromSphericalCoords(radius, phi, theta),
        word: item,
      });
    });
      
    return words;
  }, [word, radius]);

  return (
    <>
      {words.map(({ pos, word }, index) => (
        <Word key={index} position={pos}>
          {word}
        </Word>
      ))}
    </>
  );
};