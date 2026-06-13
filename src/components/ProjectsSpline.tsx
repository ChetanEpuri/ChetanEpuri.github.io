import { Suspense, lazy, useRef } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

const Spline = lazy(() => import('@splinetool/react-spline'));

export function ProjectsSpline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <ErrorBoundary fallback={<div className="absolute inset-0 bg-transparent pointer-events-none -z-10" />}>
      <div 
        ref={containerRef} 
        className="absolute inset-0 pointer-events-none -z-0 origin-center flex items-center justify-center"
      >
        <Suspense fallback={null}>
          <Spline 
            scene="https://prod.spline.design/Js-5tpuSzADOjULb/scene.splinecode" 
            style={{ width: '100%', height: '100%' }}
          />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}
