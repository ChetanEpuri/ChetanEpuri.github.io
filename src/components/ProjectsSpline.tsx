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
      >
        <Suspense fallback={null}>
          <Spline 
            scene="https://prod.spline.design/MU0CuIHRi3DZreng/scene.splinecode" 
            className="w-full h-full scale-[1.15]" 
          />
        </Suspense>

        {/* PERFORMANCE FIX: Instead of a heavy WebGL maskImage, we use a cheap 2D CSS overlay to fade the edges into the background color. Looks identical, zero GPU lag. */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, var(--color-bg) 80%)'
          }}
        />
      </div>
    </ErrorBoundary>
  );
}
