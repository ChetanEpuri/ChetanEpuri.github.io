import React from 'react';
import { motion } from 'framer-motion';
import { ProjectsSpline } from '../components/ProjectsSpline';

const PROJECTS = [
  {
    title: "Azure Cloud Networking Deployment",
    description: "Multi-subnet Virtual Network with secure NSG rules, load balancing, and automated CLI verification.",
    span: "md:col-span-7",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    aspect: "aspect-[4/3] md:aspect-auto md:h-[400px]"
  },
  {
    title: "Claude CLI-based MCP Tool",
    description: "AI interaction and automation workflow CLI using Python and Anthropic's Model Context Protocol.",
    span: "md:col-span-5",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85",
    aspect: "aspect-[4/3] md:aspect-auto md:h-[400px]"
  },
  {
    title: "n8n AI Agent Automation",
    description: "Automated workflow processing utilizing Python, JS, and Azure SQL within n8n.",
    span: "md:col-span-4",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
    aspect: "aspect-[4/3] md:aspect-auto md:h-[400px]"
  },
  {
    title: "Task Tracker",
    description: "Responsive web application with Tailwind CSS and advanced sorting algorithms.",
    span: "md:col-span-4",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
    aspect: "aspect-[4/3] md:aspect-auto md:h-[400px]"
  },
  {
    title: "Dating Website",
    description: "DevSoc25 CodeChef Hackathon project with user matching and data filtering algorithms.",
    span: "md:col-span-4",
    image: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85",
    aspect: "aspect-[4/3] md:aspect-auto md:h-[400px]"
  }
];

export const WorksSection: React.FC = () => {
  return (
    <section id="work" className="relative flex flex-col pt-0 pb-16 md:pb-24">
      
      {/* Full Screen Header Area with Spline Background */}
      <div className="relative w-full min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden mb-16 md:mb-24 border-b border-stroke/30">
        
        {/* Spline 3D Asset */}
        <ProjectsSpline />
        
        {/* Title Overlay */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="relative z-20 text-center px-6 pointer-events-none"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-stroke" />
            <span className="text-sm text-muted uppercase tracking-[0.4em]">Selected Work</span>
            <div className="w-12 h-px bg-stroke" />
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-tighter mb-6 drop-shadow-2xl">
            My <span className="font-display italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Projects</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-base md:text-lg">
            A selection of projects encompassing cloud networking, AI integrations, and full-stack development.
          </p>

          <div className="mt-12">
            <a href="https://github.com/ChetanEpuri" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 relative group rounded-full border border-stroke px-8 py-4 text-sm hover:border-transparent transition-colors pointer-events-auto">
              <span className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              <div className="absolute inset-0 bg-bg rounded-full -z-10" />
              <span className="text-text-primary">View GitHub</span>
              <span className="text-text-primary group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>

      {/* Bento Grid */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className={`${project.span} ${project.aspect} relative group rounded-3xl overflow-hidden border border-stroke bg-surface cursor-pointer`}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
              />
              {/* Halftone Overlay */}
              <div 
                className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '4px 4px' }}
              />
              
              {/* Text overlay always visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl md:text-2xl font-display text-text-primary mb-1">{project.title}</h3>
                <p className="text-xs md:text-sm text-muted max-w-sm line-clamp-2">{project.description}</p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-bg/80 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 flex items-center justify-center pointer-events-none">
                <div className="relative rounded-full px-6 py-3 overflow-hidden translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                  <div className="absolute inset-0 p-[2px] rounded-full">
                    <div className="absolute inset-0 accent-gradient animate-gradient-shift rounded-full" />
                  </div>
                  <div className="absolute inset-[2px] bg-white rounded-full" />
                  <span className="relative z-10 text-black text-sm">
                    View Project
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

