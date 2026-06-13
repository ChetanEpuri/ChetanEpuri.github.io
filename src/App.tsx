import { useState } from 'react'
import { LoadingScreen } from './components/LoadingScreen'
import { HeroSection } from './sections/HeroSection'
import { WorksSection } from './sections/WorksSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { SkillsSection } from './sections/SkillsSection'
import { StatsSection } from './sections/StatsSection'
import { FooterSection } from './sections/FooterSection'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <main className={`w-full min-h-screen bg-bg text-text-primary transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <HeroSection />
        <WorksSection />
        <ExperienceSection />
        <SkillsSection />
        <StatsSection />
        <FooterSection />
      </main>
    </>
  )
}

export default App
