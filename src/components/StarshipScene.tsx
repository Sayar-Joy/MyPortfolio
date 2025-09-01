import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { Suspense, useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ModelA Component
function ModelA({
  position,
  rotationSpeed = 0.5,
}: {
  position: [number, number, number];
  rotationSpeed?: number;
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed;
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.position.y +=
        Math.sin(state.clock.elapsedTime + position[0]) * 0.01;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Main cockpit */}
      <mesh>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Solar panels */}
      <mesh position={[-0.8, 0, 0]}>
        <boxGeometry args={[0.1, 1.2, 1.2]} />
        <meshStandardMaterial color="#1a202c" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0.8, 0, 0]}>
        <boxGeometry args={[0.1, 1.2, 1.2]} />
        <meshStandardMaterial color="#1a202c" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Connecting struts */}
      <mesh position={[-0.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
      <mesh position={[0.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.02, 0.02, 0.8]} />
        <meshStandardMaterial color="#4a5568" />
      </mesh>
    </group>
  );
}

// ModelB Component
function ModelB({
  position,
  rotationSpeed = 0.3,
}: {
  position: [number, number, number];
  rotationSpeed?: number;
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * rotationSpeed;
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.position.x +=
        Math.sin(state.clock.elapsedTime * 0.5 + position[1]) * 0.01;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      {/* Main fuselage */}
      <mesh>
        <cylinderGeometry args={[0.1, 0.15, 1.2]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.6} roughness={0.3} />
      </mesh>

      {/* Wings */}
      <mesh position={[0.6, 0.3, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.8, 0.05, 0.3]} />
        <meshStandardMaterial color="#cbd5e0" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[-0.6, 0.3, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <boxGeometry args={[0.8, 0.05, 0.3]} />
        <meshStandardMaterial color="#cbd5e0" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[0.6, -0.3, 0]} rotation={[0, 0, -Math.PI / 6]}>
        <boxGeometry args={[0.8, 0.05, 0.3]} />
        <meshStandardMaterial color="#cbd5e0" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[-0.6, -0.3, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[0.8, 0.05, 0.3]} />
        <meshStandardMaterial color="#cbd5e0" metalness={0.7} roughness={0.2} />
      </mesh>

      {/* Engine glows */}
      <mesh position={[0, 0, -0.7]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#1e40af"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

// ModelC Component
function ModelC({
  position,
  rotationSpeed = 0.2,
}: {
  position: [number, number, number];
  rotationSpeed?: number;
}) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed;
      meshRef.current.position.z +=
        Math.sin(state.clock.elapsedTime * 0.3 + position[0]) * 0.005;
    }
  });

  return (
    <group ref={meshRef} position={position} scale={[0.8, 0.8, 0.8]}>
      {/* Main body */}
      <mesh>
        <boxGeometry args={[0.4, 0.3, 1.5]} />
        <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Wings */}
      <mesh position={[0, 0.8, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <boxGeometry args={[0.6, 0.05, 1.2]} />
        <meshStandardMaterial color="#1a202c" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.8, 0]} rotation={[-Math.PI / 4, 0, 0]}>
        <boxGeometry args={[0.6, 0.05, 1.2]} />
        <meshStandardMaterial color="#1a202c" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

// Simplified stars background
function Stars() {
  const starsRef = useRef<THREE.Points>(null);

  const starsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(2000 * 3);

    for (let i = 0; i < 2000 * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 100;
      positions[i + 1] = (Math.random() - 0.5) * 100;
      positions[i + 2] = (Math.random() - 0.5) * 100;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.02;
      starsRef.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={starsRef} geometry={starsGeometry}>
      <pointsMaterial size={0.08} color="#60a5fa" />
    </points>
  );
}

// Loading Component
function LoadingFallback() {
  return (
    <group>
      <Text
        position={[0, 0, 0]}
        fontSize={0.5}
        color="#60a5fa"
        anchorX="center"
        anchorY="middle"
      >
        Loading Fleet...
      </Text>
    </group>
  );
}

// Main 3D Scene Component
export default function ThreeDScene() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: "transparent" }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#60a5fa" />
        <pointLight position={[5, 5, 5]} intensity={0.3} color="#ef4444" />

        {/* 3D Models with Suspense for loading fallback */}
        <Suspense fallback={<LoadingFallback />}>
          <ModelA position={[3, 2, -2]} rotationSpeed={0.5} />
          <ModelA position={[-4, -1, 1]} rotationSpeed={0.3} />
          <ModelA position={[2, -3, -1]} rotationSpeed={0.7} />
          <ModelB position={[-3, 2, 2]} rotationSpeed={0.4} />
          <ModelB position={[4, -2, -3]} rotationSpeed={0.2} />
          <ModelC position={[0, 3, -4]} rotationSpeed={0.1} />
          <ModelC position={[-2, -4, 2]} rotationSpeed={0.15} />
        </Suspense>

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
        />

        {/* Background stars effect */}
        <Stars />
      </Canvas>

      {/* Overlay text */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-center px-4">
        <p className="text-xs sm:text-sm text-muted-foreground"></p>
      </div>
    </div>
  );
}
