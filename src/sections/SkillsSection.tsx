import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SKILLS_LEFT = [
  "Python", "Java", "C++", "JavaScript", "HTML5", "CSS3"
];

const SKILLS_RIGHT = [
  "React", "Node.js", "Tailwind CSS", "Azure App Service", "Azure VNet", "Git / GitHub"
];

export const SkillsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;
    
    let ctx = gsap.context(() => {
      // Pin the center content
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      // Parallax for left column
      gsap.to('.left-col', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // Parallax for right column (moves faster)
      gsap.to('.right-col', {
        yPercent: -80,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[300vh] bg-bg overflow-hidden">
      
      {/* Layer 1: Pinned Center */}
      <div ref={contentRef} className="absolute inset-0 h-screen z-10 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-8 h-px bg-stroke" />
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Technical Skills</span>
          <div className="w-8 h-px bg-stroke" />
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-tight mb-6 pointer-events-auto">
          Developer <span className="font-display italic">toolkit</span>
        </h2>
        <p className="text-muted mb-8 max-w-sm pointer-events-auto">
          Languages, frameworks, and cloud platforms I use to build scalable applications.
        </p>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-[1000px] mx-auto h-full grid grid-cols-2 gap-12 md:gap-40 px-6 sm:px-10">
          
          {/* Left Column */}
          <div className="left-col flex flex-col gap-24 pt-[50vh] pointer-events-auto items-end">
            {SKILLS_LEFT.map((skill, i) => (
              <div key={`l-${i}`} className="px-8 py-6 rounded-3xl border border-stroke bg-surface/80 backdrop-blur-md rotate-[-4deg] hover:rotate-0 transition-transform duration-500 hover:scale-105 cursor-pointer flex items-center justify-center shadow-lg shadow-black/20">
                <span className="text-2xl md:text-3xl font-display text-text-primary">{skill}</span>
              </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="right-col flex flex-col gap-32 pt-[80vh] pointer-events-auto items-start">
            {SKILLS_RIGHT.map((skill, i) => (
              <div key={`r-${i}`} className="px-8 py-6 rounded-3xl border border-stroke bg-surface/80 backdrop-blur-md rotate-[4deg] hover:rotate-0 transition-transform duration-500 hover:scale-105 cursor-pointer flex items-center justify-center shadow-lg shadow-black/20">
                <span className="text-2xl md:text-3xl font-display text-text-primary">{skill}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
      
      {/* Gradients to fade out top/bottom for smooth transition to next sections */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-bg to-transparent z-30" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-bg to-transparent z-30" />
    </section>
  );
};
