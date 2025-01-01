"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroContent() {
  return (
    <motion.div
      className="relative z-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#8F199B] to-[#C339D1] text-transparent bg-clip-text">
        Trade Smarter, Not Harder
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
        Experience seamless trading with AmertisExchange, the ultimate aggregator connecting you to deep liquidity pools
      </p>
      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link href="https://amertis-test.vercel.app/" target="_blank">
          <Button
            size="lg"
            className="group bg-[#8F199B] hover:bg-[#A11DAF] text-white"
          >
            Start Trading
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
        <Link href="#">
        <Button
          size="lg"
          variant="outline"
          className="group border-[#8F199B] text-[#8F199B] hover:bg-[#8F199B]/10"
        >
          Learn More
          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
