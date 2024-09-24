// Navbar.js
import { useDispatch } from 'react-redux';
import { changeSection } from '../store/sectionSlice';

function Navbar() {
  const dispatch = useDispatch();

  return (

    <nav className="flex justify-around bg-spaceBlack text-starWhite p-4 border-b-2 border-deepTwilightBlue shadow-lg">
  <button onClick={() => dispatch(changeSection('about'))} className="relative group">
    About Me
    <span className="absolute bottom-0 left-0 w-0 h-1 bg-starWhite transition-all duration-500 group-hover:w-full"></span>
  </button>
  <button onClick={() => dispatch(changeSection('connect'))} className="relative group">
    Education
    <span className="absolute bottom-0 left-0 w-0 h-1 bg-starWhite transition-all duration-500 group-hover:w-full"></span>
  </button>
  <button onClick={() => dispatch(changeSection('experience'))} className="relative group">
    Experience
    <span className="absolute bottom-0 left-0 w-0 h-1 bg-starWhite transition-all duration-500 group-hover:w-full"></span>
  </button>
  <button onClick={() => dispatch(changeSection('projects'))} className="relative group">
    Projects
    <span className="absolute bottom-0 left-0 w-0 h-1 bg-starWhite transition-all duration-500 group-hover:w-full"></span>
  </button>
 
</nav>

  );
}

export default Navbar;
