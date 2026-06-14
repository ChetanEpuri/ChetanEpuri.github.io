import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { LoadingScreen } from './components/LoadingScreen'
import { NavBar } from './components/NavBar'
import { VideoBackground } from './components/VideoBackground'
import { FooterSection } from './sections/FooterSection'
import { HomePage } from './pages/HomePage'
import { ResumePage } from './pages/ResumePage'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <main className={`relative w-full min-h-screen bg-bg text-text-primary transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        
        {/* Global Cosmic Background */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <VideoBackground src="https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8" />
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col min-h-screen">
          <NavBar />
          
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/resume" element={<ResumePage />} />
            </Routes>
          </div>
          
          <FooterSection />
        </div>
      </main>
    </Router>
  )
}

export default App
