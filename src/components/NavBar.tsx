import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const NavBar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // If already on home page, just update the hash and scroll
      window.history.pushState(null, '', `/#${hash}`);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home with the hash
      navigate(`/#${hash}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 md:pt-6 px-4">
      <div className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${scrolled ? 'shadow-lg shadow-black/40' : ''}`}>
        {/* Logo */}
        <Link to="/" className="group relative w-9 h-9 rounded-full p-[1px] cursor-pointer transition-transform duration-300 hover:scale-110">
          <div className="absolute inset-0 rounded-full accent-gradient animate-gradient-shift group-hover:direction-reverse" />
          <div className="absolute inset-[1px] bg-bg rounded-full flex items-center justify-center font-display italic text-[13px] text-text-primary z-10">
            CE
          </div>
        </Link>
        
        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />
        
        {/* Nav Links */}
        <div className="flex items-center gap-1">
          <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-muted hover:text-text-primary hover:bg-stroke/50">
            Work
          </a>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-muted hover:text-text-primary hover:bg-stroke/50">
            Experience
          </a>
          <Link to="/resume" className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${location.pathname === '/resume' ? 'text-text-primary bg-stroke/50' : 'text-muted hover:text-text-primary hover:bg-stroke/50'}`}>
            Resume
          </Link>
        </div>

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />
        
        {/* Say hi button */}
        <a href="mailto:epuri.chetan@gmail.com" className="relative group text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1">
          <span className="absolute inset-[-2px] rounded-full accent-gradient animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          <div className="absolute inset-0 bg-surface rounded-full backdrop-blur-md -z-10" />
          <span className="text-text-primary">Say hi</span>
          <span className="text-text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
        </a>
      </div>
    </nav>
  );
};
