
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { FloatingStarship } from './FloatingStarship';

interface FloatingStarshipsProps {
  className?: string;
  density?: 'low' | 'medium' | 'high';
}

export default function FloatingStarships({ className = '', density = 'medium' }: FloatingStarshipsProps) {
  const getStarshipPositions = () => {
    const positions: Array<{
      position: [number, number, number];
      type: 'tie' | 'xwing' | 'shuttle';
      rotationSpeed: number;
    }> = [];

    const counts = {
      low: 3,
      medium: 5,
      high: 8
    };

    const count = counts[density];

    for (let i = 0; i < count; i++) {
      positions.push({
        position: [
          (Math.random() - 0.5) * 25,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 12
        ],
        type: ['tie', 'xwing', 'shuttle'][Math.floor(Math.random() * 3)] as 'tie' | 'xwing' | 'shuttle',
        rotationSpeed: 0.1 + Math.random() * 0.4
      });
    }

    return positions;
  };

  const starships = getStarshipPositions();

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[8, 8, 8]} intensity={0.6} />
        <pointLight position={[-8, -8, -8]} intensity={0.3} color="#60a5fa" />
        <pointLight position={[8, -8, 5]} intensity={0.2} color="#ef4444" />
        
        <Suspense fallback={null}>
          {starships.map((starship, index) => (
            <FloatingStarship
              key={index}
              position={starship.position}
              type={starship.type}
              scale={0.1 + Math.random() * 0.15}
              rotationSpeed={starship.rotationSpeed}
            />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
}
