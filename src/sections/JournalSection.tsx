import React from 'react';
import { motion } from 'framer-motion';

const JOURNALS = [
  {
    title: "Mastering the Model Context Protocol",
    date: "Jun 12, 2026",
    time: "5 min read",
    image: "https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif"
  },
  {
    title: "Building IoT Solutions with Raspberry Pi",
    date: "May 28, 2026",
    time: "8 min read",
    image: "https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif"
  },
  {
    title: "Modern React Patterns for 2026",
    date: "Apr 15, 2026",
    time: "4 min read",
    image: "https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif"
  },
  {
    title: "The Art of Data Structures",
    date: "Mar 02, 2026",
    time: "6 min read",
    image: "https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif"
  }
];

export const JournalSection: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Journal</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight">
              Recent <span className="font-display italic">thoughts</span>
            </h2>
            <p className="text-muted mt-4 max-w-sm text-sm md:text-base">
              Writings on development, design, and navigating the tech world as a student.
            </p>
          </div>
          
          <a href="#" className="hidden md:inline-flex items-center gap-2 relative group rounded-full border border-stroke px-6 py-3 text-sm hover:border-transparent transition-colors">
            <span className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <div className="absolute inset-0 bg-bg rounded-full -z-10" />
            <span className="text-text-primary">View all</span>
            <span className="text-text-primary">→</span>
          </a>
        </motion.div>

        {/* Entries list */}
        <div className="flex flex-col gap-4">
          {JOURNALS.map((entry, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="flex items-center justify-between gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border border-stroke">
                  <img src={entry.image} alt={entry.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl text-text-primary truncate">
                  {entry.title}
                </h3>
              </div>
              
              <div className="hidden sm:flex items-center gap-8 shrink-0 text-sm text-muted">
                <span>{entry.time}</span>
                <span>{entry.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
