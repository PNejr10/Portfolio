import { useSelector } from 'react-redux';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Connect from './components/Education';
import { AnimatePresence } from 'framer-motion';
import FallingStars from './components/FallingStar';
import Content from './components/Content';  // Import the Content component

function App() {
  const currentSection = useSelector((state) => state.section);

  return (


    <div className="relative w-full h-screen overflow-hidden">
    <div className="absolute inset-0 bg-space-gradient"></div>
    
    <FallingStars />
    <div className="planet planet-1"></div>
    <div className="planet planet-2"></div>
    <div className="planet planet-3"></div>

    <div className="relative z-3">
     <div className="relative min-h-screen bg-space-gradient text-starWhite">
      <Content />
      <div className="container mx-auto p-8 relative z-3 overflow-y-auto">
        <AnimatePresence>
          {currentSection === 'about' && <AboutMe />}
          {currentSection === 'connect' && <Connect />}
          {currentSection === 'experience' && <Experience  colorVariant="nebula"  />}
          {currentSection === 'projects' && <Projects />}
        </AnimatePresence>
      </div>
    </div> 
    </div>
    
    </div>

  );


}

export default App;
