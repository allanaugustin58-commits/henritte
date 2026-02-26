import React from "react";
import { 
  FaCode, 
  FaLaptopCode, 
  FaDatabase, 
  FaTools, 
  FaMobileAlt,
  FaShieldAlt,
  FaCogs,
  FaChartLine,
  FaArrowRight,
  FaPython,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaServer,
  FaWifi
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiSass, 
  SiRedux, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiGraphql, 
  SiJest,
  SiOwasp,
  SiJira,
  SiAdobexd,
  SiFirebase,
  SiVercel
} from "react-icons/si";
import { MdDesignServices } from "react-icons/md";
import { VscAzure } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function Skills() {
  const technicalSkills = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML & CSS", level: 95, icon: <FaCode />, color: "bg-orange-500" },
        { name: "JavaScript/TypeScript", level: 90, icon: <SiTypescript />, color: "bg-yellow-500" },
        { name: "React.js", level: 88, icon: <FaReact />, color: "bg-blue-500" },
        { name: "Next.js", level: 82, icon: <SiNextdotjs />, color: "bg-gray-800" },
        { name: "TailwindCSS", level: 90, icon: <SiTailwindcss />, color: "bg-teal-500" },
        { name: "SASS", level: 85, icon: <SiSass />, color: "bg-pink-500" },
        { name: "Redux", level: 80, icon: <SiRedux />, color: "bg-purple-500" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: <FaNodeJs />, color: "bg-green-600" },
        { name: "Python", level: 80, icon: <FaPython />, color: "bg-blue-600" },
        { name: "Express.js", level: 83, icon: <SiExpress />, color: "bg-gray-600" },
        { name: "REST API", level: 88, icon: <FaServer />, color: "bg-indigo-500" },
        { name: "GraphQL", level: 75, icon: <SiGraphql />, color: "bg-pink-600" },
        { name: "WebSockets", level: 70, icon: <FaWifi />, color: "bg-amber-500" }
      ]
    },
    {
      category: "Database Management",
      skills: [
        { name: "MongoDB", level: 78, icon: <SiMongodb />, color: "bg-green-500" },
        { name: "PostgreSQL", level: 75, icon: <SiPostgresql />, color: "bg-blue-400" },
        { name: "Database Management", level: 78, icon: <FaDatabase />, color: "bg-purple-500" },
        { name: "Firebase", level: 72, icon: <SiFirebase />, color: "bg-yellow-500" }
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git & GitHub", level: 88, icon: <FaGitAlt />, color: "bg-orange-600" },
        { name: "Docker", level: 65, icon: <FaDocker />, color: "bg-blue-500" },
        { name: "AWS", level: 60, icon: <FaAws />, color: "bg-yellow-600" },
        { name: "CI/CD", level: 62, icon: <FaCogs />, color: "bg-green-600" },
        { name: "Jest", level: 68, icon: <SiJest />, color: "bg-red-500" },
        { name: "Vercel", level: 75, icon: <SiVercel />, color: "bg-black" }
      ]
    }
  ];

  const otherSkills = [
    { name: "UI/UX Design", level: 75, icon: <MdDesignServices />, color: "bg-purple-500" },
    { name: "Figma", level: 72, icon: <FaFigma />, color: "bg-purple-400" },
    { name: "Agile Methodology", level: 70, icon: <FaChartLine />, color: "bg-green-500" },
    { name: "Web Security", level: 65, icon: <FaShieldAlt />, color: "bg-red-500" }
  ];

  const learningPath = [
    {
      step: "01",
      title: "Fundamentals",
      description: "Started with HTML, CSS, and JavaScript basics",
      duration: "2022-2023",
      achievements: ["Built first websites", "Mastered responsive design"]
    },
    {
      step: "02",
      title: "Intermediate",
      description: "Advanced JavaScript and responsive design techniques",
      duration: "2023",
      achievements: ["React fundamentals", "API integration", "State management"]
    },
    {
      step: "03",
      title: "Full Stack Focus",
      description: "Learning backend development and databases",
      duration: "2023-2024",
      achievements: ["Node.js & Express", "MongoDB", "REST APIs"]
    },
    {
      step: "04",
      title: "Advanced & DevOps",
      description: "Mastering advanced concepts and deployment",
      duration: "2024-Present",
      achievements: ["TypeScript", "Next.js", "Testing", "Cloud services"]
    }
  ];

  const approachPoints = [
    {
      title: "Clean Code Architecture",
      description: "Writing maintainable, scalable, and well-documented code following best practices and design patterns."
    },
    {
      title: "User-Centered Design",
      description: "Putting users first with intuitive interfaces, accessibility, and seamless user experiences."
    },
    {
      title: "Performance Optimization",
      description: "Building fast, efficient applications with optimized loading times and smooth interactions."
    },
    {
      title: "Agile Development",
      description: "Working iteratively with continuous feedback, adaptation, and rapid delivery of value."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 rounded-full mb-4">
            <FaCogs className="text-blue-600" />
            <span className="text-blue-700 font-medium">My Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical expertise and proficiency levels across various technologies.
          </p>
        </div>

        {/* Technical Skills by Category */}
        <div className="space-y-12 mb-16">
          {technicalSkills.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`text-2xl ${skill.color.replace('bg-', 'text-')}`}>
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                      <span className="ml-auto text-sm font-bold text-blue-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`${skill.color} h-2.5 rounded-full transition-all duration-500 group-hover:scale-x-105`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Other Skills Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Skills & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {otherSkills.map((skill, index) => (
                <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition">
                  <div className={`text-3xl ${skill.color.replace('bg-', 'text-')} mb-2`}>
                    {skill.icon}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{skill.name}</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                      <div className={`${skill.color} h-1.5 rounded-full`} style={{ width: `${skill.level}%` }}></div>
                    </div>
                    <span className="text-sm text-gray-600">{skill.level}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Path Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mb-16 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Learning Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningPath.map((item, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < learningPath.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-blue-200"></div>
                )}
                
                <div className="text-center relative">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-blue-600 text-sm font-medium mb-2">{item.duration}</p>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <ul className="text-left text-xs text-gray-500 space-y-1">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center gap-1">
                        <span className="text-blue-500">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Approach Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {approachPoints.map((point, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h4>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Cloud */}
        <div className="bg-gray-900 text-white rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Complete Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Node.js", 
              "Python", "Express", "MongoDB", "PostgreSQL", "TailwindCSS", "SASS", "Redux", 
              "Git", "GitHub", "REST API", "GraphQL", "WebSockets", "Jest", "Docker", 
              "AWS", "Firebase", "Vercel", "Figma", "Adobe XD", "Agile", "JIRA"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-blue-600 transition cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how my skills can help you build something amazing.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get In Touch
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}