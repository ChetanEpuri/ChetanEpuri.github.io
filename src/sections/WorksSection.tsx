import React from 'react';
import { motion } from 'framer-motion';

const PROJECTS = [
  {
    title: "Claude CLI-based MCP Tool",
    span: "md:col-span-7",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    aspect: "aspect-[4/3] md:aspect-auto md:h-[400px]"
  },
  {
    title: "Task Tracker",
    span: "md:col-span-5",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    aspect: "aspect-[4/3] md:aspect-auto md:h-[400px]"
  },
  {
    title: "Dating Website",
    span: "md:col-span-5",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    aspect: "aspect-[4/3] md:aspect-auto md:h-[400px]"
  },
  {
    title: "Portfolio V1",
    span: "md:col-span-7",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    aspect: "aspect-[4/3] md:aspect-auto md:h-[400px]"
  }
];

export const WorksSection: React.FC = () => {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-text-primary tracking-tight">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-muted mt-4 max-w-sm text-sm md:text-base">
              A selection of projects I've worked on, showcasing my skills in development and problem-solving.
            </p>
          </div>
          
          <a href="https://github.com/ChetanEpuri" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex items-center gap-2 relative group rounded-full border border-stroke px-6 py-3 text-sm hover:border-transparent transition-colors">
            <span className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <div className="absolute inset-0 bg-bg rounded-full -z-10" />
            <span className="text-text-primary">View all work</span>
            <span className="text-text-primary">→</span>
          </a>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className={`${project.span} ${project.aspect} relative group rounded-3xl overflow-hidden border border-stroke bg-surface cursor-pointer`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Halftone Overlay */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}
              />
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-all duration-500 flex items-center justify-center pointer-events-none">
                <div className="relative rounded-full px-6 py-3 overflow-hidden translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <div className="absolute inset-0 p-[2px] rounded-full">
                    <div className="absolute inset-0 accent-gradient animate-gradient-shift rounded-full" />
                  </div>
                  <div className="absolute inset-[2px] bg-white rounded-full" />
                  <span className="relative z-10 text-black text-sm">
                    View — <span className="font-display italic text-lg">{project.title}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
