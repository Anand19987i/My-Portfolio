import React from 'react';
import Navbar from './components/Navbar';
import '@fontsource/poppins';
import '@fontsource/montserrat';
import '@fontsource/source-code-pro';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className='bg-gradient-to-b from-sky-950 via-slate-950 to-slate-900 min-h-screen h-auto' id='home'>
      <Navbar />
      <HeroSection />
      <Projects />
      <Skills />
      
      {/* Global Style for smooth scrolling */}
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>
    </div>
  );
};

export default App;
