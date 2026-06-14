import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

export const ResumePage: React.FC = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen pt-32 pb-24 px-6 md:px-10 lg:px-16 flex justify-center items-center">
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent-gradient opacity-10 blur-[120px] rounded-full pointer-events-none" />

      {/* Glassmorphism Resume Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative w-full max-w-[900px] rounded-[40px] border border-white/10 bg-surface/30 backdrop-blur-2xl p-8 md:p-16 shadow-2xl overflow-hidden"
      >
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <h1 className="text-5xl md:text-7xl font-display italic tracking-tight text-text-primary mb-4">
                Chetan Epuri
              </h1>
              <p className="text-muted text-lg md:text-xl font-light">
                IoT & Network Engineering Student
              </p>
            </div>
            
            <a 
              href="/resume.pdf" 
              download
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-text-primary text-bg font-medium hover:scale-105 transition-transform"
            >
              <span>Download PDF</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15V3M12 15L8 11M12 15L16 11M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          <div className="space-y-16">
            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-stroke" />
                <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-muted">Experience</h2>
                <div className="flex-1 h-px bg-stroke" />
              </div>

              <div className="space-y-8">
                <div className="group">
                  <div className="flex flex-col md:flex-row justify-between md:items-baseline gap-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-medium text-text-primary">Network Engineering Intern</h3>
                    <span className="text-sm text-muted font-mono bg-surface px-3 py-1 rounded-full w-fit">Summer 2025</span>
                  </div>
                  <h4 className="text-accent-gradient bg-clip-text text-transparent font-medium mb-4">Tech Solutions Inc.</h4>
                  <p className="text-muted leading-relaxed">
                    Assisted in the deployment and configuration of enterprise-scale networking hardware. Developed automated Python scripts for network health monitoring, reducing manual check times by 40%.
                  </p>
                </div>

                <div className="group">
                  <div className="flex flex-col md:flex-row justify-between md:items-baseline gap-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-medium text-text-primary">IoT Developer Assistant</h3>
                    <span className="text-sm text-muted font-mono bg-surface px-3 py-1 rounded-full w-fit">2024 - 2025</span>
                  </div>
                  <h4 className="text-accent-gradient bg-clip-text text-transparent font-medium mb-4">University Innovation Lab</h4>
                  <p className="text-muted leading-relaxed">
                    Programmed microcontrollers (Arduino, ESP32) for smart campus initiatives. Integrated sensor data with cloud platforms using MQTT and built real-time visualization dashboards.
                  </p>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-stroke" />
                <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-muted">Education</h2>
                <div className="flex-1 h-px bg-stroke" />
              </div>

              <div className="space-y-8">
                <div>
                  <div className="flex flex-col md:flex-row justify-between md:items-baseline gap-2 mb-2">
                    <h3 className="text-xl md:text-2xl font-medium text-text-primary">B.Tech in Computer Science</h3>
                    <span className="text-sm text-muted font-mono bg-surface px-3 py-1 rounded-full w-fit">2022 - 2026</span>
                  </div>
                  <h4 className="text-muted font-medium mb-2">SRM Institute of Science and Technology</h4>
                  <p className="text-sm text-muted/80">Specialization in Internet of Things (IoT) and Cloud Computing. CGPA: 9.2/10</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-stroke" />
                <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-muted">Core Skills</h2>
                <div className="flex-1 h-px bg-stroke" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-text-primary font-medium mb-3">Networking & Cloud</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Cisco IOS", "Azure", "AWS IoT Core", "TCP/IP", "Wireshark", "BGP/OSPF"].map(skill => (
                      <span key={skill} className="text-xs px-3 py-1.5 rounded-full border border-stroke text-muted">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-text-primary font-medium mb-3">Development & IoT</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "C++", "TypeScript", "React", "ESP32", "MQTT", "Docker"].map(skill => (
                      <span key={skill} className="text-xs px-3 py-1.5 rounded-full border border-stroke text-muted">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
