import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    title: "Network Engineering Intern",
    company: "Jio Platforms Limited",
    date: "June 2025 – July 2025",
    description: "Supported 4G/5G Network Deployment. Applied data structures and algorithms in Python/Java to optimize network performance. Collaborated with cross-functional teams using software development best practices.",
    icon: "📡"
  },
  {
    title: "B.Tech in Computer Science & Eng. (IoT)",
    company: "Vellore Institute of Technology",
    date: "Expected 2027",
    description: "Coursework in Data Structures and Algorithms, Web Development, and Object-Oriented Programming.",
    icon: "🎓"
  },
  {
    title: "OCI 2025 Generative AI Professional",
    company: "Oracle",
    date: "Certification",
    description: "Certified in building and managing generative AI applications and large language models on Oracle Cloud Infrastructure.",
    icon: "☁️"
  },
  {
    title: "Introduction to Model Context Protocol",
    company: "Anthropic",
    date: "Certification",
    description: "Certified in integrating Claude with external tools, APIs, and file systems using MCP.",
    icon: "🤖"
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="relative py-16 md:py-24">
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Experience</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight">
              My <span className="font-display italic">journey</span>
            </h2>
            <p className="text-muted mt-4 max-w-sm text-sm md:text-base">
              Education, internships, and certifications that have shaped my technical foundation.
            </p>
          </div>
          
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 relative group rounded-full border border-stroke px-6 py-3 text-sm hover:border-transparent transition-colors">
            <span className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <div className="absolute inset-0 bg-bg rounded-full -z-10" />
            <span className="text-text-primary">Download Resume</span>
            <span className="text-text-primary">📄</span>
          </a>
        </motion.div>

        {/* Entries list */}
        <div className="flex flex-col gap-4">
          {EXPERIENCES.map((entry, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 bg-surface/30 hover:bg-surface border border-stroke rounded-3xl sm:rounded-[40px] transition-colors group"
            >
              <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1 min-w-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden shrink-0 border border-stroke bg-bg flex items-center justify-center text-2xl sm:text-3xl">
                  <span className="group-hover:scale-125 transition-transform duration-500">{entry.icon}</span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl lg:text-2xl text-text-primary font-display mb-1">
                    {entry.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted mb-2">
                    <span className="font-medium text-text-primary/70">{entry.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="sm:hidden">—</span>
                    <span>{entry.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted/80 max-w-xl line-clamp-2 sm:line-clamp-none">
                    {entry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
