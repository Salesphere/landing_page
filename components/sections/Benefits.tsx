'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Image from 'next/image';
import amertis from '/public/images/illustration.svg';

const benefits = [
  {
    title: 'Better rates with aggregated liquidity',
    description: 'Access deep liquidity pools across multiple DEXes'
  },
  {
    title: 'Instant, transparent trades',
    description: 'Execute trades with minimal slippage and maximum transparency'
  },
  {
    title: 'Extremely low spreads',
    description: 'Get the best prices with minimal price differences'
  },
  {
    title: 'Empowering your DeFi journey',
    description: 'Simplified solutions for all your trading needs'
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits list */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#8F199B]">What You Benefit</span> From
              <br />
              AmertisExchange
            </h2>
            <div className="text-xl mb-8">
              <span className="text-white">Trade Smarter</span>
              <span className="text-muted-foreground mx-2">—</span>
              <span className="text-muted-foreground">Not Harder</span>
            </div>
            
            {/* Benefits list */}
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 bg-[#8F199B]/20 rounded-full p-1">
                    <Check className="w-4 h-4 text-[#8F199B]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right side - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-[#8F199B]/20 blur-[100px] rounded-full" />
              
              {/* Main illustration */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: -20 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 4,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <Image
                  src={amertis}
                  alt="Trading Dashboard"
                  width={600}
                  height={400}
                  className="relative z-10"
                />
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#8F199B]/10 rounded-full blur-xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-900/20 rounded-full blur-lg" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}