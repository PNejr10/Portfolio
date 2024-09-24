import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Connect from './Education';
import Navbar from './Navbar';  

const sectionVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

function Content() {
  const currentSection = useSelector((state) => state.section); 

  return (
    <div className="relative min-h-screen bg-space-gradient text-starWhite">
      <Navbar /> 
      <div className="container mx-auto p-8 relative z-10">
        <AnimatePresence mode="wait">  
          {currentSection === 'about' && (
            <motion.div
              key="about"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <AboutMe />
            </motion.div>
          )}
          {currentSection === 'experience' && (
            <motion.div
              key="experience"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Experience />
            </motion.div>
          )}
          {currentSection === 'projects' && (
            <motion.div
              key="projects"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Projects />
            </motion.div>
          )}
          {currentSection === 'connect' && (
            <motion.div
              key="connect"
              variants={sectionVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Connect />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}








export default Content;

