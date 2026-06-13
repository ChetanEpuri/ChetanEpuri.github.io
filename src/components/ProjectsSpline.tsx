import { Suspense, lazy, useRef } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const Spline = lazy(() => import('@splinetool/react-spline'));

export function ProjectsSpline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ErrorBoundary fallback={<div className="absolute inset-0 bg-transparent pointer-events-none -z-10" />}>
      <div 
        ref={containerRef} 
        className="absolute inset-[-10%] z-0 origin-center flex items-center justify-center pointer-events-none"
        style={{
          // Creates a seamless fade into the `#050505` background instead of sharp boxed edges
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      >
        <Suspense fallback={null}>
          <Spline 
            scene="https://prod.spline.design/Js-5tpuSzADOjULb/scene.splinecode" 
            className="w-full h-full scale-[1.15]" 
          />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
