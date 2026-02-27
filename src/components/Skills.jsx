import React from "react";
import { 
  FaCode, 
  FaLaptopCode, 
  FaDatabase, 
  FaPython,
  FaReact,
  FaNodeJs,
  FaServer,
  FaWifi,
  FaCogs
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
  SiFirebase
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

  ];

  // otherSkills section removed as requested
  const otherSkills = [];

  // learningPath and approachPoints removed per request
  const learningPath = [];

  const approachPoints = [];


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


        </div>


      </div>
    </section>
  );
}