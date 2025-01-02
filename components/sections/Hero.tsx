'use client';

import { FloatingTokens } from '../hero/FloatingTokens';
import { GradientBlur } from '../hero/GradientBlur';
import { HeroContent } from '../hero/HeroContent';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <GradientBlur />
      <FloatingTokens />
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <HeroContent />
      </div>
    </section>
  );
}