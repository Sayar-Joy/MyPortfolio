import React, { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import FloatingLogo from "./FloatingLogo";

const technologies = [
  "Flutter",
  "Dart",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Laravel",
  "PHP",
  "HTML",
  "CSS",
  "JavaScript",
  "Figma",
  "Git",
];

const LogoCloud = () => {
  const [dims, setDims] = useState({ width: 1024, height: 768 });

  useEffect(() => {
    const update = () =>
      setDims({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const isMobile = dims.width < 640; // tailwind sm breakpoint
  const isTablet = dims.width >= 640 && dims.width < 1024; // md

  // Keep all logos; adjust sizing/float for responsiveness
  const iconSize = isMobile ? 16 : isTablet ? 20 : 26;
  const floatAmp = isMobile ? 0.08 : isTablet ? 0.12 : 0.18;

  // Derive camera view bounds (default fov 75, z=10)
  const camZ = 10;
  const fov = 75 * (Math.PI / 180);
  const halfH = Math.tan(fov / 2) * camZ; // in scene units
  const halfW = halfH * (dims.width / dims.height);
  const marginX = isMobile ? 0.6 : 0.8;
  const marginY = isMobile ? 0.9 : 1.1;
  const xMin = -halfW + marginX;
  const xMax = halfW - marginX;
  const yMin = -halfH + marginY;
  const yMax = halfH - marginY;

  const techList = technologies;

  // Seeded random helper for stable positions per item
  const seeded = (seed: number) => {
    const x = Math.sin(seed * 9301 + 49297) * 233280;
    return x - Math.floor(x);
  };

  const logoPositions = useMemo(() => {
    return techList.map((_, idx) => {
      const rx = seeded(idx + 1);
      const ry = seeded(idx + 101);
      const rz = seeded(idx + 1001);
      const x = xMin + rx * (xMax - xMin);
      const y = yMin + ry * (yMax - yMin);
      const z = -1 + rz * 2; // between -1 and 1 to minimize scale variance
      return { position: [x, y, z] as [number, number, number] };
    });
  }, [xMin, xMax, yMin, yMax, techList.length]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10] }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          {techList.map((logo, index) => (
            <FloatingLogo
              key={logo}
              logo={logo}
              position={logoPositions[index].position}
              size={iconSize}
              floatAmplitude={floatAmp}
            />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default LogoCloud;
