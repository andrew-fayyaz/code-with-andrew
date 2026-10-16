import {
  Calendar,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import React from "react";
import { useScrollTrigger } from "../hooks/useScrollTrigger";
import Typewriter from "./Typewriter";

const About: React.FC = () => {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollTrigger({
    threshold: 0.3,
  });
  const { elementRef: contentRef, isVisible: contentVisible } =
    useScrollTrigger({ threshold: 0.2 });
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollTrigger({
    threshold: 0.4,
  });

  const personalInfo = [
    { icon: Calendar, label: "Experience", value: "8+ Years" },
    { icon: MapPin, label: "Location", value: "Lahore, Pakistan" },
    { icon: Mail, label: "Email", value: "andrew.fayyaz@gmail.com" },
    { icon: Phone, label: "Phone", value: "+923154327281" },
  ];

  const skills = [
    { name: "React.js", percentage: 90 },
    { name: "Next.js", percentage: 85 },
    { name: "Tailwind CSS", percentage: 95 },
    { name: "JavaScript", percentage: 85 },
    { name: "TypeScript", percentage: 90 },
    { name: "Responsive Design", percentage: 95 },
    { name: "API Integration", percentage: 90 },
    { name: "Material UI", percentage: 85 },
    { name: "Performance Optimization", percentage: 95 },
  ];

  const workExperience = [
    {
      company: "Ministry of Industry and Mineral Resources",
      position: "Software Engineer",
      duration: "May 2025 – Present",
      location: "Riyadh, Saudi Arabia",
    },
    {
      company: "Vaival Technologies",
      position: "Software Engineer",
      duration: "Jan 2023 – Sep 2024",
      location: "Lahore, Pakistan",
    },
    {
      company: "ITFAQ Digital Labs",
      position: "Freelancer (Project Based)",
      duration: "Jul 2022 – Oct 2022",
      location: "Dubai, United Arab Emirates",
    },
    {
      company: "EZ-AD",
      position: "Sr. Web Developer",
      duration: "Jan 2022 – Jul 2022",
      location: "Michigan, United States",
    },
    {
      company: "G1G Travel Insurance",
      position: "Sr. Front-end Developer",
      duration: "Mar 2020 – Dec 2021",
      location: "California, United States",
    },
    {
      company: "Crown IT Solutions (Pvt.) Ltd",
      position: "Team Lead – Front-end Development",
      duration: "Jan 2015 – Feb 2020",
      location: "Lahore, Pakistan",
    },
  ];

  const typewriterWords = [
    "Software Engineer",
    "Front-end Developer",
    "Web Developer",
    "Freelancer",
    "React Developer",
  ];

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/andrew-front-end-dev-resume.pdf"; // Path to your PDF file in the public folder
    link.download = "Andrew_Front-end_Dev_Resume.pdf"; // Filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-16 sm:py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Side - Image */}
            <div
              ref={titleRef}
              className={`relative transition-all duration-1000 order-1 lg:order-1 ${titleVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="relative">
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-2">
                  <div className="w-full h-full rounded-full overflow-hidden shadow-2xl">
                    <img
                      src="/andrew-fayyaz.jpg"
                      alt="Andrew Fayyaz - Software Engineer"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Typewriter effect below image */}
                <div className="text-center mt-6 sm:mt-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    A Passionate
                  </h3>
                  <div className="text-lg sm:text-xl">
                    <Typewriter
                      words={typewriterWords}
                      delay={100}
                      className="text-blue-500 font-semibold"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div
              ref={contentRef}
              className={`transition-all duration-1000 delay-300 order-2 lg:order-2 ${contentVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <span className="text-blue-500 font-medium text-base sm:text-lg block pt-5">
                    - Nice to meet you!
                  </span>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mt-3 sm:mt-4 mb-4 sm:mb-6">
                    Andrew Fayyaz
                  </h1>
                  <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                    Sr. Front-End Developer
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
                    I’m a Senior Front-End Developer who combines strong UI
                    engineering with seamless API integration to build modern,
                    scalable, and high-performance web applications. I
                    specialize in React.js, Next.js, TypeScript, and Tailwind
                    CSS, with expertise in RESTful APIs, GraphQL, and backend
                    integrations. My strengths are turning complex requirements
                    into clean, intuitive interfaces, building reusable and
                    maintainable components, optimizing performance, and
                    delivering polished, production-ready experiences with
                    exceptional attention to detail.
                  </p>
                </div>

                {/* Personal Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-4 h-4 text-blue-500" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-sm text-gray-500 dark:text-gray-400 block">
                          {info.label}
                        </span>
                        <span className="font-medium text-gray-800 dark:text-white text-sm sm:text-base break-all">
                          {info.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/andrew-fayyaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-blue-500" />
                  </a>
                  <a
                    href="https://github.com/andrew-fayyaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                  </a>
                </div>

                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center space-x-3 bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-colors duration-300"
                >
                  <Download className="w-5 h-5" />
                  <span className="font-medium">Download CV</span>
                </button>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Work Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Professional journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-2xl"
                >
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.position}
                  </h4>
                  <h5 className="text-base sm:text-lg font-semibold text-blue-500 mb-2">
                    {job.company}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 mb-1 text-sm sm:text-base">
                    {job.duration}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                    {job.location}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div
            ref={skillsRef}
            className={`mt-16 sm:mt-20 transition-all duration-1000 delay-600 ${skillsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Technical Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Core competencies
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4">
                    <svg
                      className="w-24 h-24 sm:w-32 sm:h-32 transform -rotate-90"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className="text-gray-200 dark:text-gray-700"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - (skillsVisible ? skill.percentage : 0) / 100)}`}
                        className="text-blue-500 transition-all duration-2000 ease-out"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    {skill.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-16 sm:mt-20">
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Education
              </h3>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 sm:p-8 rounded-2xl text-center">
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                BS in Information Technology
              </h4>
              <h5 className="text-base sm:text-lg font-semibold text-blue-500 mb-2">
                Forman Christian College (A Chartered University)
              </h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                December 2012
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
