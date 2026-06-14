import React from 'react';
import { HeroSection } from '../sections/HeroSection';
import { WorksSection } from '../sections/WorksSection';
import { ExperienceSection } from '../sections/ExperienceSection';
import { JournalSection } from '../sections/JournalSection';
import { SkillsSection } from '../sections/SkillsSection';
import { StatsSection } from '../sections/StatsSection';

export const HomePage: React.FC = () => {
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
