
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface FloatingStarshipProps {
  position: [number, number, number];
  type: 'tie' | 'xwing' | 'shuttle';
  scale?: number;
  rotationSpeed?: number;
}

export function FloatingStarship({ position, type, scale = 0.3, rotationSpeed = 0.2 }: FloatingStarshipProps) {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * rotationSpeed;
      meshRef.current.rotation.x += delta * 0.1;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.003;
      meshRef.current.position.x += Math.cos(state.clock.elapsedTime * 0.5 + position[1]) * 0.002;
    }
  });

  if (type === 'tie') {
    return (
      <group ref={meshRef} position={position} scale={[scale, scale, scale]}>
        {/* TIE Fighter cockpit */}
        <mesh>
          <sphereGeometry args={[0.2, 12, 12]} />
          <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Solar panels */}
        <mesh position={[-0.4, 0, 0]}>
          <boxGeometry args={[0.05, 0.6, 0.6]} />
          <meshStandardMaterial color="#1a202c" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0.4, 0, 0]}>
          <boxGeometry args={[0.05, 0.6, 0.6]} />
          <meshStandardMaterial color="#1a202c" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
    );
  }

  if (type === 'xwing') {
    return (
      <group ref={meshRef} position={position} scale={[scale, scale, scale]}>
        {/* X-Wing fuselage */}
        <mesh>
          <cylinderGeometry args={[0.05, 0.08, 0.6]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.6} roughness={0.3} />
        </mesh>
        
        {/* Wings */}
        <mesh position={[0.3, 0.15, 0]} rotation={[0, 0, Math.PI / 6]}>
          <boxGeometry args={[0.4, 0.02, 0.15]} />
          <meshStandardMaterial color="#cbd5e0" metalness={0.7} roughness={0.2} />
        </mesh>
        <mesh position={[-0.3, 0.15, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <boxGeometry args={[0.4, 0.02, 0.15]} />
          <meshStandardMaterial color="#cbd5e0" metalness={0.7} roughness={0.2} />
        </mesh>
      </group>
    );
  }

  // Imperial Shuttle
  return (
    <group ref={meshRef} position={position} scale={[scale, scale, scale]}>
      {/* Shuttle body */}
      <mesh>
        <boxGeometry args={[0.2, 0.15, 0.8]} />
        <meshStandardMaterial color="#2d3748" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Wings */}
      <mesh position={[0, 0.4, 0]} rotation={[Math.PI / 4, 0, 0]}>
        <boxGeometry args={[0.3, 0.02, 0.6]} />
        <meshStandardMaterial color="#1a202c" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}
