import { Suspense, lazy, useRef, useEffect, useState } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Spline = lazy(() => import('@splinetool/react-spline'));

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSpline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!isLoaded || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Subtle scroll-linked parallax and rotation
      gsap.to(containerRef.current, {
        y: 200,
        rotationZ: 3,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#work', // The parent section
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1, // Smooth scrubbing
        }
      });
    });

    return () => ctx.revert();
  }, [isLoaded]);

  return (
    <ErrorBoundary fallback={<div className="absolute inset-0 bg-transparent pointer-events-none -z-10" />}>
      <div 
        ref={containerRef} 
        className="absolute inset-0 pointer-events-none -z-10 opacity-60 mix-blend-screen origin-center"
      >
        <Suspense fallback={null}>
          <Spline 
            scene="https://prod.spline.design/G8yO6mga4wypfAcN/scene.splinecode" 
            onLoad={() => setIsLoaded(true)}
            className="w-full h-full object-cover"
          />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
