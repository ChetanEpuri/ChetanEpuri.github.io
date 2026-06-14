import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { VideoBackground } from '../components/VideoBackground';

const ROLES = ["IoT Engineering Student", "Network Engineering Intern", "Backend Developer", "Cloud Enthusiast"];

export const HeroSection: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // GSAP Entrance animations
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo('.name-reveal', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.1 }
      )
      .fromTo('.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1, ease: "power3.out" },
        "-=0.9" // overlap slightly with name reveal
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent z-10" />



      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          PORTFOLIO '26
        </p>
        
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Chetan Epuri
        </h1>
        
        <p className="blur-in text-xl md:text-2xl lg:text-3xl font-body text-muted mb-6">
          A <span key={roleIndex} className="font-display italic text-text-primary animate-role-fade-in inline-block">{ROLES[roleIndex]}</span> building in India.
        </p>
        
        <p className="blur-in text-sm md:text-base text-muted max-w-md mb-12">
          Driven by building innovative solutions and exploring the intersection of technology and real-world applications.
        </p>

        <div className="blur-in inline-flex gap-4">
          <a href="#work" className="group relative rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-colors duration-300 hover:scale-105">
            <span className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift opacity-0 group-hover:opacity-100 -z-10" />
            See Works
          </a>
          <a href="mailto:epuri.chetan@gmail.com" className="group relative rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all duration-300 hover:scale-105">
            <span className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift opacity-0 group-hover:opacity-100 -z-10" />
            <div className="absolute inset-0 bg-bg rounded-full -z-10 group-hover:block hidden" />
            Reach out...
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-stroke overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1/2 accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
