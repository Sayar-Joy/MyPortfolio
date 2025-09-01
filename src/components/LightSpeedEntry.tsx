import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface LightSpeedEntryProps {
  children: React.ReactNode;
}

export default function LightSpeedEntry({ children }: LightSpeedEntryProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Light Speed Animation Overlay */}
      <motion.div
        className="fixed inset-0 z-50 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: showContent ? 0 : 1 }}
        transition={{ duration: 0.5, delay: showContent ? 0 : 1.5 }}
      >
        {/* Stars streaking effect */}
        <div className="absolute inset-0 bg-background">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{
                scale: 0.5,
                opacity: 0.3,
              }}
              animate={{
                scale: [0.5, 1, 0],
                opacity: [0.3, 1, 0],
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 200 - 100],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                delay: Math.random() * 0.5,
              }}
            />
          ))}
        </div>

        {/* Central light speed effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, times: [0, 0.5, 1] }}
        >
          <motion.div
            className="w-2 h-2 bg-primary rounded-full"
            initial={{ scale: 1 }}
            animate={{ 
              scale: [1, 50, 0],
              rotate: [0, 360]
            }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Light streaks */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`streak-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-primary to-transparent h-0.5"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '200px',
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              delay: Math.random() * 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Loading text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.h1
            className="text-2xl md:text-4xl font-bold text-primary text-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Entering Hyperspace...
          </motion.h1>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.8, delay: showContent ? 0.5 : 0 }}
      >
        {children}
      </motion.div>
    </>
  );
}