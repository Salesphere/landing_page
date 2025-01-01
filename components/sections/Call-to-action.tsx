'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from  'next/link';
import cube from '/public/images/illustration-2.png'

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-background/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8F199B]/10 via-background to-background" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="relative">
          {/* Fixed 3D cubes - positioned behind content */}
          <div className="absolute top-0 right-0 z-0">
            <Image
              src={cube}
              alt="3D Cube"
              width={200}
              height={200}
              className="opacity-90"
            />
          </div>

          <div className="absolute bottom-0 right-32 z-0">
            <Image
              src={cube}
              alt="3D Cube"
              width={160}
              height={160}
              className="opacity-80"
            />
          </div>

          {/* Content - positioned above cubes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#8F199B]">
              Your DeFi Trading
              <br />
              Revolution Starts Here
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take the leap to more seamless trades with the best rates in the market. Ready to elevate your trading experience.
            </p>
            <Link href="https://amertis-test.vercel.app/" target="_blank">
              <Button 
                size="lg"
                className="bg-[#8F199B] hover:bg-[#A11DAF] text-white px-8"
              >
                Launch App
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}