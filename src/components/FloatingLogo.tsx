import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import {
  SiFlutter,
  SiDart,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiLaravel,
  SiPhp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiGit,
} from "react-icons/si";
import type { IconType } from "react-icons";

const iconMap: Record<string, IconType | undefined> = {
  Flutter: SiFlutter,
  Dart: SiDart,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Laravel: SiLaravel,
  PHP: SiPhp,
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  Figma: SiFigma,
  Git: SiGit,
};

const colorMap: Record<string, string> = {
  Flutter: "#02569B",
  Dart: "#0175C2",
  "Node.js": "#339933",
  "Express.js": "#828282",
  MongoDB: "#47A248",
  MySQL: "#4479A1",
  Laravel: "#FF2D20",
  PHP: "#777BB4",
  HTML: "#E34F26",
  CSS: "#1572B6",
  JavaScript: "#F7DF1E",
  Figma: "#F24E1E",
  Git: "#F05032",
};

const FloatingLogo = ({
  logo,
  position,
  size = 28,
  floatAmplitude = 0.2,
}: {
  logo: string;
  position: [number, number, number];
  size?: number;
  floatAmplitude?: number;
}) => {
  const meshRef = useRef<THREE.Group>(null);
  const Icon = iconMap[logo];
  const brandColor = colorMap[logo] ?? "#FFFFFF";
  const baseY = useRef(position[1]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y =
        baseY.current + Math.sin(t + position[0]) * floatAmplitude;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <Html center transform style={{ pointerEvents: "none" }}>
        <div
          style={{
            fontSize: size,
            color: brandColor,
            opacity: 0.95,
            filter: `drop-shadow(0 0 6px ${brandColor})`,
          }}
        >
          {Icon ? <Icon /> : null}
        </div>
      </Html>
    </group>
  );
};

export default FloatingLogo;
