'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Percent, Zap } from 'lucide-react';

const features = [
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Aggregate Liquidity",
    description: "We connect you to multiple liquidity providers for better efficiency"
  },
  {
    icon: <Percent className="w-8 h-8" />,
    title: "Optimized Rates",
    description: "Get access to the best rates across platforms"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "One-Step Execution",
    description: "Trade your tokens in a single, effortless transaction."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export function HowItWorks() {
  return (
    <section id='how-it-works' className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#8F199B] mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Simplified Trading → Powerful Results
          </p>
          <p className="mt-4 text-muted-foreground">
            Trading on AmertisExchange is as simple as it gets
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-[1fr,auto,1fr,auto,1fr] gap-4 relative z-10"
          >
            {features.map((feature, index) => (
              <>
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <div className="bg-gradient-to-br from-[#8F199B]/10 to-purple-900/5 rounded-2xl p-6 h-full backdrop-blur-sm border border-[#8F199B]/20">
                    <div className="bg-[#8F199B]/10 rounded-full w-16 h-16 flex items-center justify-center mb-4 text-[#8F199B]">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
                {index < features.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="hidden md:flex items-center justify-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#8F199B]/10 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-[#8F199B]" />
                    </div>
                  </motion.div>
                )}
              </>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}