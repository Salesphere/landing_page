'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TokenImageProps {
  src: string;
  size?: number;
  initialPosition: { x: number; y: number };
  animationDuration?: number;
}

export function TokenImage({ 
  src, 
  size = 48, 
  initialPosition,
  animationDuration = 20 
}: TokenImageProps) {
  return (
    <motion.div
      className="absolute"
      initial={{ 
        x: initialPosition.x, 
        y: initialPosition.y,
        scale: 0.8,
        opacity: 0.8
      }}
      animate={{
        y: [initialPosition.y - 50, initialPosition.y + 50, initialPosition.y - 50],
        rotate: [0, 360],
        scale: [0.8, 1, 0.8],
        opacity: [0.8, 1, 0.8]
      }}
      transition={{
        duration: animationDuration,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{
        width: size,
        height: size,
      }}
    >
      <Image
        src={src}
        alt="Token"
        width={size}
        height={size}
        className="rounded-full shadow-lg"
      />
    </motion.div>
  );
}