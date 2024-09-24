import  { useRef, useEffect, useState } from "react";

const projects = [
  {
    title: "Chat Web Application",
    date:"December 2023",
    description:
      "A real-time messaging platform built with the MERN stack, allowing users to seamlessly communicate and share media with friends.",
    technologies: ["MongoDB", "Express.js","React.js", "Node.js" ],
    details:[
      "Developed a real-time messaging application using the MERN stack, allowing users to create accounts and add/remove friends seamlessly.",
      "Architected RESTful APIs in Node.js to seamlessly enable real-time communication with the ChatEnginelibrary, enabling real-time messaging and improving message delivery speed by 30%.",
      "Deployed a suite of messaging features enabling users to seamlessly share messages, videos, and images, increasing platform engagement."
     ],
    githubLink: "https://github.com/PNejr10/Chat_App",
  },
  {
    title: "Custom C Shell",
    date:"November 2022",
    description:
      "A custom command-line shell in C that supports multiple command execution and piping for streamlined user operations.",
    technologies: ["C" ],
    details:[
      "• Developed a command processing mechanism utilizing exec and fork commands, resulting in a high-performing shell environment.",
      "Improved the shell’s capabilities by implementing piping functionality, allowing users to chain up to 4 commands seamlessly."
     ],
    githubLink: "https://github.com/PNejr10/Custom_C_Shell",
  },
  {
    title: "Tiktok Pets",
    date:"May 2022",
    description:
      "A Python application that provides real-time COVID-19 case data with an intuitive user interface for easy location-specific tracking.",
    technologies: ["HTML", "CSS", "Express.js", "SQLite" ],
    details:[
     "Collaborated on developing a web-based game using HTML, CSS, and JavaScript for the front end and Express.js for the back end, enabling users to submit TikTok videos to the platform.",
     "Utilized an SQL database to efficiently store and manage user.",
     "Executed SQL commands to update user interactions, such as liked and saved videos, while using the Boyer-Moore algorithm to identify the most popular video in the database."
    ],
    githubLink: "https://github.com/PNejr10",
  },


  {
    title: "Covid-19 Tracker",
    date:"February 2022",
    description:
      "A Python application that provides real-time COVID-19 case data with an intuitive user interface for easy location-specific tracking.",
    technologies: ["Python" ],
    details:[
     "Engineered a Python-based data retrieval system empowering users to specify state locations and extract accurate COVID-19 case information within the last 7 days.",
     "Applied the Beautiful Soup library to dynamically gather and integrate real-time data, ensuring the system adapts seamlessly to evolving information.",
     "Created a user-friendly graphical interface for the application using the Tkinter library, resulting in seamless interaction and enhancing the overall user experience."
    ],
    githubLink: "https://github.com/PNejr10/COVID-19-TRACKER-",
  },

];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const containerRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (containerRef.current) {
        const { scrollHeight, clientHeight } = containerRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    return () => window.removeEventListener("resize", checkScrollable);
  }, []);

  return (
    <div
    ref={containerRef}
    className={`max-h-screen ${
      isScrollable ? "overflow-y-auto" : "overflow-y-hidden"
    } p-6`}
  >
    <section className="min-h-screen py-12 text-starWhite">
      <h1 className="text-5xl font-bold mb-8 text-center">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 bg-opacity-25 backdrop-blur-lg bg-gradient-to-br from-deepTwilightBlue to-spaceBlack text-starWhite border border-starWhite rounded-xl shadow-lg transition duration-300 transform hover:scale-105 hover:bg-shimmerEffect"
            onClick={() => openProjectModal(project)}
          >
            <h2 className="text-3xl font-semibold mb-1">{project.title}</h2>
            <p className="text-small font-semibold mb-4">{project.date}</p>
            <p className="text-lg mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-starWhite text-spaceBlack px-3 py-1 rounded-full text-sm font-semibold shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeProjectModal}
        >
          <div
           className="bg-gradient-to-br from-nightSkyPurple to-deepTwilightBlue text-starWhite p-8 rounded-lg shadow-xl border border-starWhite max-w-3xl mx-4 relative backdrop-blur-md transition duration-300 transform hover:scale-105"

            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-4xl font-bold mb-4">{selectedProject.title}</h2>
            <div className="mb-6">
              <ul className="list-disc list-inside pl-5">
                {selectedProject.details.map((responsibility, idx) => (
                  <li key={idx} className="text-lg text-gray-200">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex space-x-4 mb-6">
              <a
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-starWhite bg-deepTwilightBlue hover:bg-nightSkyPurple px-4 py-2 rounded-lg shadow-lg transition duration-300"
              >
                View on GitHub
              </a>
            </div>
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 text-xl text-gray-400 hover:text-gray-200 transition duration-200"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
    <div className="h-24" />
    </div>
  );
}

export default Projects;
