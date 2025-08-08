import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: "4+", label: "Years Programming" },
  { value: "10+", label: "Projects Completed" },
  { value: "100%", label: "Dedication" }
];

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24 border-y border-stroke relative z-30">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-stroke">
          {STATS.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col items-center text-center ${i !== 0 ? 'pt-12 md:pt-0' : ''}`}
            >
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-display text-text-primary mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-muted uppercase tracking-[0.2em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
