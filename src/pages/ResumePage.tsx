import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export const ResumePage: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Effect Setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Transform mouse position into rotation values (max 10 degrees)
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  // Glare/specular highlight effect
  const glareX = useTransform(springX, [-0.5, 0.5], [100, 0]);
  const glareY = useTransform(springY, [-0.5, 0.5], [100, 0]);
  const glareOpacity = useTransform(springY, [-0.5, 0.5], [0.1, 0.4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate normalized mouse position relative to card center (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Reset to center smoothly when mouse leaves
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 md:px-10 lg:px-16 flex justify-center items-center perspective-[2000px]">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-gradient opacity-15 blur-[120px] rounded-full pointer-events-none" />

      {/* 3D Container Wrapper */}
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full max-w-[900px] group"
      >
        {/* The Glass Slab */}
        <div 
          className="relative rounded-[40px] border border-white/20 bg-black/40 backdrop-blur-3xl p-8 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_1px_rgba(255,255,255,0.05)] overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Dynamic Glare Overlay */}
          <motion.div 
            className="absolute inset-0 pointer-events-none mix-blend-screen"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, transparent 50%)`,
              opacity: glareOpacity
            }}
          />

          {/* Subtle noise texture for frosted feel */}
          <div 
            className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
          />

          {/* Content Layer (Pushed forward in 3D space) */}
          <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
            
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16" style={{ transform: 'translateZ(20px)' }}>
              <div>
                {/* Etched/Carved Name */}
                <h1 className="text-6xl md:text-8xl font-display italic tracking-tight text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" style={{ textShadow: '0 -1px 1px rgba(255,255,255,0.3), 0 2px 2px rgba(0,0,0,0.8)' }}>
                  Chetan Epuri
                </h1>
                <p className="text-white/70 text-lg md:text-xl font-light uppercase tracking-widest text-shadow-sm">
                  IoT & Network Engineering Student
                </p>
              </div>
              
              <a 
                href="/resume.pdf" 
                download
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_10px_20px_rgba(0,0,0,0.3)] hover:scale-105"
                style={{ transform: 'translateZ(30px)' }}
              >
                <span>Download PDF</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15V3M12 15L8 11M12 15L16 11M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div className="space-y-16">
              
              {/* Experience Section */}
              <section style={{ transformStyle: 'preserve-3d' }}>
                <div className="flex items-center gap-4 mb-8" style={{ transform: 'translateZ(10px)' }}>
                  <div className="w-8 h-px bg-white/30 shadow-[0_1px_0_rgba(0,0,0,0.5)]" />
                  <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-white/50 text-shadow-sm">Experience</h2>
                  <div className="flex-1 h-px bg-white/30 shadow-[0_1px_0_rgba(0,0,0,0.5)]" />
                </div>

                <div className="space-y-6">
                  {/* Etched Experience Card */}
                  <div className="group relative rounded-2xl p-6 bg-black/20 border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 hover:bg-white/5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]" style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                    <div className="transition-all duration-500 hover:scale-105" style={{ transform: 'translateZ(10px)' }}>
                      <div className="flex flex-col md:flex-row justify-between md:items-baseline gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-medium text-white drop-shadow-md">Network Engineering Intern</h3>
                        <span className="text-xs text-white/60 font-mono tracking-widest uppercase">Summer 2025</span>
                      </div>
                      <h4 className="text-accent-gradient drop-shadow-lg font-medium mb-4 text-sm uppercase tracking-wider">Tech Solutions Inc.</h4>
                      <p className="text-white/70 leading-relaxed font-light text-sm md:text-base">
                        Assisted in the deployment and configuration of enterprise-scale networking hardware. Developed automated Python scripts for network health monitoring, reducing manual check times by 40%.
                      </p>
                    </div>
                  </div>

                  <div className="group relative rounded-2xl p-6 bg-black/20 border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 hover:bg-white/5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]" style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                    <div className="transition-all duration-500 hover:scale-105" style={{ transform: 'translateZ(10px)' }}>
                      <div className="flex flex-col md:flex-row justify-between md:items-baseline gap-2 mb-2">
                        <h3 className="text-xl md:text-2xl font-medium text-white drop-shadow-md">IoT Developer Assistant</h3>
                        <span className="text-xs text-white/60 font-mono tracking-widest uppercase">2024 - 2025</span>
                      </div>
                      <h4 className="text-accent-gradient drop-shadow-lg font-medium mb-4 text-sm uppercase tracking-wider">University Innovation Lab</h4>
                      <p className="text-white/70 leading-relaxed font-light text-sm md:text-base">
                        Programmed microcontrollers (Arduino, ESP32) for smart campus initiatives. Integrated sensor data with cloud platforms using MQTT and built real-time visualization dashboards.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section style={{ transformStyle: 'preserve-3d' }}>
                <div className="flex items-center gap-4 mb-8" style={{ transform: 'translateZ(10px)' }}>
                  <div className="w-8 h-px bg-white/30 shadow-[0_1px_0_rgba(0,0,0,0.5)]" />
                  <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-white/50 text-shadow-sm">Education</h2>
                  <div className="flex-1 h-px bg-white/30 shadow-[0_1px_0_rgba(0,0,0,0.5)]" />
                </div>

                <div className="group relative rounded-2xl p-6 bg-black/20 border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6),inset_0_-1px_1px_rgba(255,255,255,0.1)] transition-all duration-500 hover:bg-white/5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.2)]" style={{ transform: 'translateZ(20px)' }}>
                  <div className="transition-all duration-500 hover:scale-105" style={{ transform: 'translateZ(10px)' }}>
                    <div className="flex flex-col md:flex-row justify-between md:items-baseline gap-2 mb-2">
                      <h3 className="text-xl md:text-2xl font-medium text-white drop-shadow-md">B.Tech in Computer Science</h3>
                      <span className="text-xs text-white/60 font-mono tracking-widest uppercase">2022 - 2026</span>
                    </div>
                    <h4 className="text-white/80 font-medium mb-2">SRM Institute of Science and Technology</h4>
                    <p className="text-sm text-white/60 font-light">Specialization in Internet of Things (IoT) and Cloud Computing. CGPA: 9.2/10</p>
                  </div>
                </div>
              </section>

              {/* Skills Section */}
              <section style={{ transformStyle: 'preserve-3d' }}>
                <div className="flex items-center gap-4 mb-8" style={{ transform: 'translateZ(10px)' }}>
                  <div className="w-8 h-px bg-white/30 shadow-[0_1px_0_rgba(0,0,0,0.5)]" />
                  <h2 className="text-xs font-medium tracking-[0.3em] uppercase text-white/50 text-shadow-sm">Core Skills</h2>
                  <div className="flex-1 h-px bg-white/30 shadow-[0_1px_0_rgba(0,0,0,0.5)]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ transform: 'translateZ(20px)' }}>
                  <div className="rounded-2xl p-6 bg-black/20 border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                    <h4 className="text-white font-medium mb-4 drop-shadow-md">Networking & Cloud</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Cisco IOS", "Azure", "AWS IoT Core", "TCP/IP", "Wireshark", "BGP/OSPF"].map(skill => (
                        <span key={skill} className="text-xs px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.4)] transition-transform hover:scale-110 hover:bg-white/10 cursor-default">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl p-6 bg-black/20 border border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
                    <h4 className="text-white font-medium mb-4 drop-shadow-md">Development & IoT</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "C++", "TypeScript", "React", "ESP32", "MQTT", "Docker"].map(skill => (
                        <span key={skill} className="text-xs px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.4)] transition-transform hover:scale-110 hover:bg-white/10 cursor-default">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
