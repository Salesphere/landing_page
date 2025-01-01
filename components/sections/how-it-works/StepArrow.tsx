'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function StepArrow() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="hidden md:flex items-center justify-center"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <ArrowRight className="w-6 h-6 text-primary" />
      </div>
    </motion.div>
  );
}