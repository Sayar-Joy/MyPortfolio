
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Text, Sphere } from '@react-three/drei';
import { Suspense, useRef, useState, forwardRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Death Star Model Component
function DeathStarModel() {
  const meshRef = useRef<THREE.Group>(null);

  // Automatic rotation
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  try {
    const { scene } = useGLTF('/deathStar.glb');
    
    return (
      <group ref={meshRef}>
        <primitive 
          object={scene.clone()} 
          scale={[2, 2, 2]} 
          position={[0, 0, 0]}
        />
      </group>
    );
  } catch (error) {
    console.warn('Death Star model failed to load, using fallback sphere');
    return <FallbackSphere />;
  }
}

// Fallback Sphere Component - simplified to avoid prop conflicts
function FallbackSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial 
        color="#4a5568"
        metalness={0.8}
        roughness={0.2}
        emissive="#1a365d"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

FallbackSphere.displayName = 'FallbackSphere';

// Loading Component
function LoadingFallback() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial 
          color="#4a5568"
          metalness={0.8}
          roughness={0.2}
          emissive="#1a365d"
          emissiveIntensity={0.2}
          wireframe
        />
      </mesh>
      <Text
        position={[0, -3, 0]}
        fontSize={0.5}
        color="#60a5fa"
        anchorX="center"
        anchorY="middle"
      >
        Loading Death Star...
      </Text>
    </group>
  );
}

// Simplified stars background using standard THREE.js approach
function Stars() {
  const starsRef = useRef<THREE.Points>(null);
  
  const starsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(1000 * 3);
    
    for (let i = 0; i < 1000 * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 50;
      positions[i + 1] = (Math.random() - 0.5) * 50;
      positions[i + 2] = (Math.random() - 0.5) * 50;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <points ref={starsRef} geometry={starsGeometry}>
      <pointsMaterial size={0.1} color="#60a5fa" />
    </points>
  );
}

// Main Death Star Scene Component
export default function DeathStarScene() {
  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#60a5fa" />
        
        {/* Death Star with Suspense for loading fallback */}
        <Suspense fallback={<LoadingFallback />}>
          <DeathStarModel />
        </Suspense>
        
        {/* Controls */}
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          enableRotate={true}
          minDistance={3}
          maxDistance={10}
          autoRotate={false}
        />
        
        {/* Background stars effect */}
        <Stars />
      </Canvas>
      
      {/* Overlay text */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 text-center px-4">
        <p className="text-xs sm:text-sm text-muted-foreground">
          ---
        </p>
      </div>
    </div>
  );
}

// Preload the GLTF model
useGLTF.preload('/deathStar.glb');
