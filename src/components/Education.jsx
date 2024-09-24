import  { useRef, useEffect, useState } from "react";
const educationData = [
  {
    school: "University of California, Davis",
    logo: "/files/ucd_logo.png",
    degree: "Master of Science in Computer Science",
    years: "2024 - Present",
    gpa: "4.0",
    importantClasses: ["Machine Learning"],
  },
  {
    school: "University of California, Davis",
    logo: "/files/ucd_logo.png",
    degree: "Bachelor of Science in Computer Science",
    years: "2021 - 2023",
    gpa: "3.7",
    importantClasses: [
      "Algorithms",
      "Database Systems",
      "Web Development",
      "Data Structures",
      "Object Oriented Programming",
    ],
  },
  {
    school: "Diablo Valley College",
    logo: "/files/dvc_logo.png",
    degree: "NA",
    years: "2019 - 2021",
    gpa: "3.8",
    importantClasses: [],
  },
];


function Education() {
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
      <div className="space-y-6">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="p-6 bg-opacity-25 backdrop-blur-lg bg-gradient-to-br from-deepTwilightBlue to-spaceBlack text-starWhite border border-starWhite rounded-xl shadow-lg transition duration-300 transform hover:scale-95"
          >
            <div className="flex items-center mb-4">
              <img
                src={edu.logo}
                alt={`${edu.school} logo`}
                className="w-16 h-16 mr-4"
              />
              <h3 className="text-3xl font-semibold text-starWhite">
                {edu.school}
              </h3>
            </div>
            <p className="text-lg text-starWhite">Degree: {edu.degree}</p>
            <p className="text-lg text-starWhite">Years: {edu.years}</p>
            <p className="text-lg text-starWhite">GPA: {edu.gpa}</p>
            {edu.importantClasses.length > 0 && (
              <div className="mt-4">
                <p className="font-semibold text-xl text-starWhite mb-2">
                  Important Classes:
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.importantClasses.map((classItem, idx) => (
                    <span
                      key={idx}
                    className="bg-starWhite text-spaceBlack px-3 py-1 rounded-full text-sm font-semibold shadow-sm"
                    >
                      {classItem}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="h-24" />
    </div>
  );
}

export default Education;
