import React from "react";
import { 
  FaUser, 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode, 
  FaLightbulb, 
  FaCertificate,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHeartbeat,
  FaProjectDiagram,
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaBook
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function About() {
  const africanImages = {
    workSetup: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    businessMeeting: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    education: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    technology: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    entrepreneurship: "https://images.unsplash.com/photo-1551836026-d5c2c36afa4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    kigali: "https://images.unsplash.com/photo-1598894597311-b3b34d5c8c2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    innovation: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  };

  const careerTimeline = [
    {
      year: "High School",
      title: "Student at Kigali Institution",
      description: "Developed early interest in technology and coding through computer science curriculum",
      icon: "📚"
    },
    {
      year: "College",
      title: "Started Software Development Program",
      description: "Pursuing SWD degree and learning modern web development technologies",
      icon: "💻"
    },
    {
      year: "Projects",
      title: "Building Portfolio Projects",
      description: "Creating responsive web applications and demonstrating technical skills",
      icon: "🏗️"
    },
    {
      year: "Future",
      title: "Professional Web Developer",
      description: "Ready to contribute and grow in the tech industry with passion and dedication",
      icon: "🚀"
    }
  ];

  const coreValues = [
    {
      title: "Continuous Learning",
      description: "Always eager to learn new technologies and improve coding skills",
      icon: "📖"
    },
    {
      title: "Creative Solutions",
      description: "Problem-solving with innovative and elegant code designs",
      icon: "💡"
    },
    {
      title: "User-Centered Design",
      description: "Building websites that are intuitive and enjoyable to use",
      icon: "👥"
    },
    {
      title: "Code Quality",
      description: "Writing clean, maintainable, and well-documented code",
      icon: "✨"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Profile */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Profile Image with Circular Shape */}
            <div className="relative order-2 lg:order-1 flex justify-center">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://scontent.fkgl4-2.fna.fbcdn.net/v/t39.30808-6/551048854_122263010312166277_6775171718350126840_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEeF3R6KAGpHm6AztfQlEqy8CnvizgHp9HwKe-LOAen0T-cCyXdgbiFEPj5ZpvU67EdE9LZxwG9G_T6jcn5_YeU&_nc_ohc=k7r-dSlSPW4Q7kNvwEMKxKg&_nc_oc=AdljR126vZd4YbtwPYQx-RXe8huwlZPlM5XhjL_So3WsxezdtzkhHJ9rz0jn2FpbQoj9G3e-ntYA9K0VoVgueXNx&_nc_zt=23&_nc_ht=scontent.fkgl4-2.fna&_nc_gid=cDGqC1YIHeVhcnSUfvPCXA&oh=00_AfsPDIZFzKzmK-LPeMVbWLafK7aByBuAfr4q7NL7zz04Zg&oe=69A64187"
                  alt="Henriette Nishimwe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Introduction */}
            <div className="order-1 lg:order-2">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 text-gray-800 font-medium mb-8 border border-blue-100">
                <FaBook className="text-blue-600 mr-2" />
                WEB DEVELOPER & SWD STUDENT
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Henriette
                <br />
                <span className="text-blue-600">Nishimwe</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
                Passionate Web Developer from Rwanda
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                I'm a dedicated student pursuing Software Development with a passion for creating 
                beautiful, functional web applications. Based in Kigali, Rwanda, I'm committed to building 
                responsive and user-friendly digital experiences.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center">
                    <FaBook className="text-blue-600 mr-3" />
                    <div>
                      <div className="text-2xl font-bold text-blue-700">SWD</div>
                      <div className="text-sm text-gray-600">Student</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center">
                    <FaProjectDiagram className="text-blue-600 mr-3" />
                    <div>
                      <div className="text-2xl font-bold text-blue-700">10+</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              My Educational <span className="text-blue-600">Journey</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From student to aspiring professional developer in Rwanda
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Career Timeline */}
            <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <FaGraduationCap className="text-blue-600 mr-3" />
              My Path to Development
            </h3>
              
              <div className="relative">
                <div className="absolute left-6 h-full w-0.5 bg-gradient-to-b from-green-300 via-yellow-400 to-red-500"></div>
                
                {careerTimeline.map((item, index) => (
                  <div key={index} className="relative mb-10 ml-16">
                    <div className="absolute left-[-42px] w-4 h-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-full border-4 border-white"></div>
                    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-4">
                        <div className="text-2xl mr-3">{item.icon}</div>
                        <div>
                          <div className="text-blue-600 font-bold text-lg">{item.year}</div>
                          <h4 className="font-bold text-gray-900 text-xl">{item.title}</h4>
                        </div>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* African Work Environment Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://scontent.fkgl4-2.fna.fbcdn.net/v/t39.30808-6/551048854_122263010312166277_6775171718350126840_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeEeF3R6KAGpHm6AztfQlEqy8CnvizgHp9HwKe-LOAen0T-cCyXdgbiFEPj5ZpvU67EdE9LZxwG9G_T6jcn5_YeU&_nc_ohc=k7r-dSlSPW4Q7kNvwEMKxKg&_nc_oc=AdljR126vZd4YbtwPYQx-RXe8huwlZPlM5XhjL_So3WsxezdtzkhHJ9rz0jn2FpbQoj9G3e-ntYA9K0VoVgueXNx&_nc_zt=23&_nc_ht=scontent.fkgl4-2.fna&_nc_gid=cDGqC1YIHeVhcnSUfvPCXA&oh=00_AfsPDIZFzKzmK-LPeMVbWLafK7aByBuAfr4q7NL7zz04Zg&oe=69A64187"
                  alt="Web development workspace"
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
