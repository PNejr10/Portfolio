import  { useRef, useEffect, useState } from "react";
const experiences = [
  {
    companyName: 'PerfAI.ai',
    companyLogo: '/files/perfai_logo.png',
    jobTitle: 'Software Engineer',
    duration: 'February 2024 - Present',
    keyResponsibilities: [
      'Engineered an automated testing script in TypeScript and Nest.js to enhance API security and governance,leveraging AI models trained on over 15k+ public APIs, significantly reducing manual testing efforts and improving vulnerability detection accuracy by 35%.',
      'Launched Governance AI and Security AI, on Product Hunt, achieving a Top 5 Product of the Day recognition and attracting 10+ paying customers through targeted marketing and user engagement strategies.',
      'Implemented and launched two public-facing websites using Vue.js, integrating AI models via Node.js backend, offering limited free access to company services, resulting in a 13% increase in revenue.',
    ],
    keyTechnologies: ['Nest.js', 'MongoDB', 'Express.js', 'Vue.js', 'Typescript'],
  },
  {
    companyName: 'Bashpole Software Inc.',
    companyLogo: '/files/bashpole_logo.jpg',
    jobTitle: 'Software Enginnering Intern',
    duration: 'June 2022 - October 2022',
    keyResponsibilities: [
      'Implemented efficient algorithms and data structures that revamped the software’s processing speed by 10%, allowing for real-time analysis and response to incoming tips.',
      'Enhanced software functionality using HTML, CSS, JavaScript, and MongoDB, and through rigorous testing and debugging, resulting in a 15% increase in user engagement.',
      'Executed cloud-stored data migration from AWS to GCP using Google Drive integration, leading to a 25% reduction in storage costs and enhancing the team’s data accessibility and collaboration efficiency.',
    ],
    keyTechnologies: ['Python', 'Node.js', 'HTML/CSS', 'MongoDB', 'GCP'],
  },
];



function Experience() {
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
      <h1 className="text-5xl font-bold mb-8 text-center">Professional Experience</h1>
      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="p-6 bg-opacity-25 backdrop-blur-lg bg-gradient-to-br from-deepTwilightBlue to-spaceBlack text-starWhite border border-starWhite rounded-xl shadow-lg transition duration-300 transform hover:scale-105"
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.8) 0px 12px 24px, rgba(255, 255, 255, 0.2) 0px 2px 8px',
            }}
          >
            <div className="flex items-center mb-6">
              <img
                src={exp.companyLogo}
                alt={`${exp.companyName} logo`}
                className="w-16 h-16 object-cover rounded-full mr-4 border-2 border-white"
              />
              <div>
                <h2 className="text-3xl font-bold">{exp.companyName}</h2>
                <p className="text-lg italic">{exp.jobTitle}</p>
                <p className="text-md text-gray-300">{exp.duration}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-starWhite mb-2">
                Key Responsibilities:
              </h3>
              <ul className="list-disc list-inside pl-5">
                {exp.keyResponsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-lg text-gray-200">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              {exp.keyTechnologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-starWhite text-spaceBlack px-3 py-1 rounded-full text-sm font-semibold shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-deepTwilightBlue to-nightSkyPurple opacity-30 blur-lg transform scale-105 -z-10"></div>
          </div>
        ))}
      </div>
     
    </section>
    <div className="h-24" />
    </div>
  );
}

export default Experience;
