import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif"
];

export const ExplorationsSection: React.FC = () => {
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
          <span className="text-xs text-muted uppercase tracking-[0.3em]">Explorations</span>
          <div className="w-8 h-px bg-stroke" />
        </div>
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-text-primary tracking-tight mb-6 pointer-events-auto">
          Visual <span className="font-display italic">playground</span>
        </h2>
        <p className="text-muted mb-8 max-w-sm pointer-events-auto">
          A collection of experiments, side projects, and concepts that push the boundaries.
        </p>
        
        <a href="https://github.com/ChetanEpuri" target="_blank" rel="noopener noreferrer" className="pointer-events-auto group relative rounded-full text-sm px-8 py-3.5 bg-text-primary text-bg hover:scale-105 transition-transform duration-300">
          <span className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift opacity-0 group-hover:opacity-100 -z-10" />
          More on GitHub
        </a>
      </div>

      {/* Layer 2: Parallax Columns */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto h-full grid grid-cols-2 gap-12 md:gap-40 px-6 sm:px-10">
          
          {/* Left Column */}
          <div className="left-col flex flex-col gap-32 pt-[50vh] pointer-events-auto">
            {IMAGES.slice(0, 3).map((src, i) => (
              <div key={`l-${i}`} className="w-full aspect-square max-w-[320px] rounded-3xl overflow-hidden border-2 border-stroke bg-surface rotate-[-4deg] hover:rotate-0 transition-transform duration-500 hover:scale-105 cursor-pointer ml-auto">
                <img src={src} className="w-full h-full object-cover" alt="Exploration" />
              </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="right-col flex flex-col gap-40 pt-[80vh] pointer-events-auto">
            {IMAGES.slice(3, 6).map((src, i) => (
              <div key={`r-${i}`} className="w-full aspect-square max-w-[320px] rounded-3xl overflow-hidden border-2 border-stroke bg-surface rotate-[4deg] hover:rotate-0 transition-transform duration-500 hover:scale-105 cursor-pointer mr-auto">
                <img src={src} className="w-full h-full object-cover" alt="Exploration" />
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
