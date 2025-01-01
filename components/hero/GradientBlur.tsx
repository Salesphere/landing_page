'use client';

import { motion } from 'framer-motion';

export function GradientBlur() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-background/50 to-background" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#8F199B]/30 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#8F199B]/20 via-transparent to-transparent blur-3xl" />
    </motion.div>
  );
}