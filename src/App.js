import React from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import SkillsSection from './components/SkillsSection';
import TimelineSection from './components/TimelineSection';
import AwardsSection from './components/AwardsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      
      ,<SkillsSection />, <TimelineSection />, <AwardsSection />, <ProjectsSection/>, <ContactSection/>
    </div>
  );
}

export default App;
