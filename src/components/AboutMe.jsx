/* eslint-disable react/no-unescaped-entities */
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 space-y-8 md:space-y-0 md:space-x-12 relative -top-12">
      {" "}
      {/* Picture Section */}
      <div className="md:w-1/3 flex flex-col items-center">
        <img
          src="/files/Paiman.jpg"
          alt="Paiman Nejrabi"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-starWhite shadow-xl"
        />
        {/* Resume Download Section */}
        <div className="mt-6">
          <a
            href="/files/Paiman_Nejrabi_Resume.pdf"
            download="Paiman_Nejrabi_Resume.pdf"
            className="text-spaceBlack bg-starWhite hover:bg-deepTwilightBlue hover:text-starWhite font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Resume
          </a>
        </div>
      </div>
      {/* Introduction Section */}
      <div className="text-center md:text-left md:w-2/3">
        <h1 className="text-5xl font-bold text-starWhite mb-4">
          Hello, I am Paiman Nejrabi
        </h1>
        <p className="text-xl text-starWhite mb-6">
          I'm a passionate software engineer and Master's student in Computer
          Science at UC Davis. I'm passionate about Machine Learning and always
          eager to learn new technologies in both ML and software engineering. I
          enjoy creating solutions that make an impact. Outside of work, I stay
          active by going to the gym and playing either soccer, tennis, or
          volleyball. Welcome to my website — feel free to explore and reach out
          if you'd like to connect!
        </p>

        {/* Connect Section */}
        <div className="flex justify-center md:justify-start space-x-6">
          <a
            href="https://www.linkedin.com/in/paiman-nejrabi/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-starWhite hover:text-cosmicBlue transition duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/PNejr10" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-starWhite hover:text-cosmicBlue transition duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="mailto:paiman.nejrabi2000@gmail.com" 
            className="text-starWhite hover:text-cosmicBlue transition duration-300"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
