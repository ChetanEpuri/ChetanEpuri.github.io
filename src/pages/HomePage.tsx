import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HeroSection } from '../sections/HeroSection';
import { WorksSection } from '../sections/WorksSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { JournalSection } from '../sections/JournalSection';
import { SkillsSection } from '../sections/SkillsSection';
import { StatsSection } from '../sections/StatsSection';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Remove the '#' to get the id
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to ensure components are mounted and layout is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <WorksSection />
      <ExperienceSection />
      <JournalSection />
      <SkillsSection />
      <StatsSection />
    </>
  );
};
