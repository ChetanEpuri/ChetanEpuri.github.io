import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { VideoBackground } from '../components/VideoBackground';

export const FooterSection: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marqueeRef.current) return;
    
    let ctx = gsap.context(() => {
      gsap.to('.marquee-inner', {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden flex flex-col items-center z-30">
      <VideoBackground 
        src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" 
        flipY 
        overlayClassName="bg-black/60"
      />

      {/* Marquee */}
      <div ref={marqueeRef} className="relative z-10 w-full overflow-hidden mb-16 md:mb-24 mt-10 pointer-events-none">
        <div className="marquee-inner flex whitespace-nowrap text-7xl md:text-9xl font-display italic text-text-primary/30 tracking-tight">
          {Array(10).fill("BUILDING THE FUTURE • ").map((text, i) => (
            <span key={i} className="px-4">{text}</span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mb-20 md:mb-32">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-display text-text-primary mb-8">
          Let's create <br className="hidden md:block"/>
          <span className="italic">something special.</span>
        </h2>
        
        <a href="mailto:epuri.chetan@gmail.com" className="group relative rounded-full px-8 py-4 bg-text-primary text-bg font-medium text-lg hover:scale-105 transition-transform duration-300">
          <span className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          hello@chetan.com
        </a>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 w-full px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-stroke/50 pt-8 mt-auto">
        <div className="flex items-center gap-6 text-sm text-muted">
          <a href="#" className="hover:text-text-primary transition-colors">Twitter</a>
          <a href="https://www.linkedin.com/in/chetan-e-810b8131a" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">LinkedIn</a>
          <a href="https://github.com/ChetanEpuri" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">GitHub</a>
        </div>
        
        <div className="flex items-center gap-3 bg-surface/50 backdrop-blur-sm border border-stroke rounded-full px-4 py-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-text-primary uppercase tracking-widest">Available for projects</span>
        </div>
      </div>
    </section>
  );
};
