import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { LoadingScreen } from './components/LoadingScreen'
import { NavBar } from './components/NavBar'
import { FooterSection } from './sections/FooterSection'
import { HomePage } from './pages/HomePage'
import { ResumePage } from './pages/ResumePage'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <main className={`w-full min-h-screen bg-bg text-text-primary transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        
        <FooterSection />
      </main>
    </Router>
  )
}

export default App
