import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { HeroSection } from './sections/HeroSection'
import { WorksSection } from './sections/WorksSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { SkillsSection } from './sections/SkillsSection'
import { StatsSection } from './sections/StatsSection'
import { FooterSection } from './sections/FooterSection'
import { SplineScene } from './components/SplineScene'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <main className={`w-full min-h-screen bg-bg text-text-primary transition-opacity duration-1000 relative ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        
        {/* Global Fixed Spline Background */}
        <div className="fixed inset-0 w-full h-full pointer-events-none -z-0 opacity-40 mix-blend-screen">
          <SplineScene scene="https://prod.spline.design/G8yO6mga4wypfAcN/scene.splinecode" />
        </div>

        {/* Content Layers (z-index ensures they sit above spline) */}
        <div className="relative z-10">
          <HeroSection />
          <WorksSection />
          <ExperienceSection />
          <SkillsSection />
          <StatsSection />
          <FooterSection />
        </div>
      </main>
    </>
  )
}

export default App
