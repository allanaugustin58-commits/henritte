import React from "react";
import snap from "../assets/snap.jpg"; // Your profile image
import { 
  FaUser, 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode, 
  FaLightbulb, 
  FaCertificate,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
  FaProjectDiagram,
  FaArrowRight,
  FaDownload,
  FaEnvelope,
  FaGlobeAfrica
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
      year: "2020",
      title: "Started Professional Journey in Rwanda",
      description: "Began freelance development for local Rwandan businesses and startups",
      icon: "🇷🇼"
    },
    {
      year: "2021",
      title: "East African Business IT Focus",
      description: "Expanded to serving businesses across East Africa with custom web solutions",
      icon: "🌍"
    },
    {
      year: "2022",
      title: "Full-Stack Expertise for African Markets",
      description: "Developed solutions specifically for African business environments and challenges",
      icon: "💻"
    },
    {
      year: "2023-Present",
      title: "Pan-African Technology Partner",
      description: "Partnering with businesses across Africa for digital transformation and growth",
      icon: "🤝"
    }
  ];

  const coreValues = [
    {
      title: "African Business Understanding",
      description: "Deep knowledge of local markets, challenges, and opportunities across Africa",
      icon: "🎯"
    },
    {
      title: "Context-Aware Solutions",
      description: "Technology solutions designed for African infrastructure and business environments",
      icon: "🌍"
    },
    {
      title: "Client Partnership",
      description: "Working collaboratively with African entrepreneurs and businesses for shared success",
      icon: "🤝"
    },
    {
      title: "Sustainable Growth",
      description: "Building solutions that support long-term business growth in African markets",
      icon: "📈"
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
                  src={snap}
                  alt="David Luxx Nizeyimana"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Introduction */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-blue-50 text-gray-800 font-medium mb-8 border border-green-100">
                <FaGlobeAfrica className="text-green-600 mr-2" />
                AFRICAN BUSINESS TECHNOLOGY EXPERT
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Building Digital
                <br />
                <span className="text-blue-600">Africa</span>
              </h1>
              
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
                Technology solutions designed for African businesses and markets
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                As an African Business IT Professional, I specialize in creating technology 
                solutions that understand and address the unique challenges and opportunities 
                of doing business in Africa.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center">
                    <FaCalendarAlt className="text-blue-600 mr-3" />
                    <div>
                      <div className="text-2xl font-bold text-blue-700">4+</div>
                      <div className="text-sm text-gray-600">Years in African Tech</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <div className="flex items-center">
                    <FaProjectDiagram className="text-blue-600 mr-3" />
                    <div>
                      <div className="text-2xl font-bold text-blue-700">50+</div>
                      <div className="text-sm text-gray-600">African Projects</div>
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
              My African <span className="text-blue-600">Journey</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From Rwandan entrepreneur to technology partner for businesses across Africa
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Career Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <FaBriefcase className="text-blue-600 mr-3" />
                African Career Timeline
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
                  src={africanImages.workSetup}
                  alt="African tech workspace and environment"
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
