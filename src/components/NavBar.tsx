import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GlassSurface from './GlassSurface';

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
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div className={`transition-shadow duration-300 pointer-events-auto rounded-full ${scrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.5)]' : ''}`}>
        {/* @ts-ignore */}
        <GlassSurface
          width={"auto" as any}
          height={"auto" as any}
          borderRadius={9999}
          blur={15}
          opacity={0.8}
          backgroundOpacity={0.1}
          mixBlendMode="screen"
          className="px-2 py-2"
        >
          {/* Logo */}
          <Link to="/" className="group relative w-9 h-9 rounded-full p-[1px] cursor-pointer transition-transform duration-300 hover:scale-110">
            <div className="absolute inset-0 rounded-full accent-gradient animate-gradient-shift group-hover:direction-reverse" />
            <div className="absolute inset-[1px] bg-bg rounded-full flex items-center justify-center font-display italic text-[13px] text-white z-10">
              CE
            </div>
          </Link>
          
          <div className="w-px h-5 bg-white/20 mx-2 hidden sm:block" />
          
          {/* Nav Links */}
          <div className="flex items-center gap-1">
            <a href="#work" onClick={(e) => handleNavClick(e, 'work')} className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-white/70 hover:text-white hover:bg-white/10">
              Work
            </a>
            <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')} className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors text-white/70 hover:text-white hover:bg-white/10">
              Experience
            </a>
            <Link to="/resume" className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors ${location.pathname === '/resume' ? 'text-white bg-white/20' : 'text-white/70 hover:text-white hover:bg-white/10'}`}>
              Resume
            </Link>
          </div>

          <div className="w-px h-5 bg-white/20 mx-2 hidden sm:block" />
          
          {/* Say hi button */}
          <a href="mailto:epuri.chetan@gmail.com" className="relative group text-xs sm:text-sm px-4 py-2 flex items-center gap-1 ml-1 overflow-hidden rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors">
            <span className="text-white">Say hi</span>
            <span className="text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
          </a>
        </GlassSurface>
      </div>
    </nav>
  );
};
