import React, { useState, useEffect } from "react";
import snap from "../assets/snap.jpg";
import { FaWhatsapp, FaPhone, FaEnvelope, FaChartLine, FaChevronDown } from "react-icons/fa";

const Home = () => {
  const whatsappNumber = "+250782575191";
  const whatsappMessage = "Hello David! I saw your portfolio and would like to discuss a project.";
  
  const [showContactPanel, setShowContactPanel] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Core skills with levels
  const coreSkills = [
    { skill: "Business Analysis", level: "Advanced" },
    { skill: "Web Development", level: "Expert" },
    { skill: "System Design", level: "Advanced" },
    { skill: "Project Management", level: "Good" },
    { skill: "Database Design", level: "Advanced" },
    { skill: "IT Solutions", level: "Expert" },
  ];

  // Technical skills
  const technicalSkills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js",
    "MongoDB", "SQL", "APIs", "Git", "Business Tools",
    "Data Analysis", "Cloud Basics", "UI/UX",
  ];

  // Stats
  const stats = [
    { label: "Projects Done", value: "25+" },
    { label: "Years Experience", value: "3+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Focus", value: "Business IT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="min-h-screen bg-white text-gray-900 px-4 sm:px-6">
      {/* Fixed WhatsApp Button */}
      <div className="fixed right-6 bottom-6 z-50">
        {/* Contact Panel */}
        {showContactPanel && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 animate-slideUp">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">Contact Me</h3>
              <button 
                onClick={() => setShowContactPanel(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            
            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 mb-4"
            >
              <FaWhatsapp className="text-xl" />
              Message on WhatsApp
            </a>

            {/* Other Contact Options */}
            <div className="space-y-3">
              <a 
                href="tel:+250782575191" 
                className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <FaPhone className="text-blue-600" />
                <div>
                  <p className="font-medium">Call Now</p>
                  <p className="text-sm">+250 782 575 191</p>
                </div>
              </a>
              
              <a 
                href="mailto:davidluxxnm@gmail.com" 
                className="flex items-center gap-3 p-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <FaEnvelope className="text-blue-600" />
                <div>
                  <p className="font-medium">Send Email</p>
                  <p className="text-sm">davidluxxnm@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Quick Response:</span> Usually within 30 minutes
              </p>
            </div>
          </div>
        )}

        {/* Floating WhatsApp Button */}
        <button
          onClick={() => setShowContactPanel(!showContactPanel)}
          className={`w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            isScrolled ? 'scale-110' : 'scale-100'
          }`}
        >
          {showContactPanel ? (
            <span className="text-2xl">×</span>
          ) : (
            <FaWhatsapp className="text-2xl" />
          )}
        </button>
      </div>

      <div className="max-w-6xl mx-auto w-full py-12">
        {/* PROFILE SECTION */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-12">

          {/* Profile Image */}
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-blue-50 shadow-xl">
                <img
                  src={snap}
                  alt="David Luxx Nizeyimana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full border-4 border-blue-100 opacity-60" />
              <div className="absolute bottom-6 right-6 w-6 h-6 bg-green-500 rounded-full border-4 border-white" />
            </div>
          </div>

          {/* Profile Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <span className="inline-block px-4 py-2 bg-blue-50 rounded-full text-blue-700 font-medium mb-4">
              Welcome to My Portfolio
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              David Luxx <span className="text-blue-700">Nizeyimana</span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
              Business IT Professional
            </h2>
            <p className="text-blue-600 font-medium mb-6">
              Full-Stack Developer & IT Solutions
            </p>

            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              I build web applications that help businesses grow by aligning
              technical solutions with real business needs.
            </p>

            <p className="text-gray-600 leading-relaxed">
              With experience in both business and IT, I design systems that are
              reliable, scalable, and focused on measurable results.
            </p>
          </div>
        </div>

        {/* CORE SKILLS */}
        <section className="py-12 border-t border-blue-50">
          <p className="text-blue-700 font-semibold text-2xl text-center mb-8">
            Core Skills
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {coreSkills.map(({ skill, level }, idx) => (
              <div key={idx} className="bg-blue-50 p-5 rounded-lg text-center hover:shadow-md transition">
                <h3 className="text-xl font-medium text-gray-800 mb-3">{skill}</h3>
                <div className="w-full bg-blue-100 rounded-full h-2.5 mb-2">
                  <div
                    className={`h-2.5 rounded-full ${
                      level === "Expert"
                        ? "w-full bg-blue-600"
                        : level === "Advanced"
                        ? "w-4/5 bg-blue-500"
                        : "w-3/5 bg-blue-400"
                    }`}
                  />
                </div>
                <span className="text-blue-600 font-medium">{level}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="py-12 border-t border-blue-50">
          <p className="text-blue-700 font-semibold text-2xl text-center mb-8">
            Technical Skills
          </p>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {technicalSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-5 py-2 bg-white border border-blue-200 text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* STATS */}
        <section className="py-12 border-t border-blue-50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto text-center">
            {stats.map(({ label, value }, idx) => (
              <div key={idx}>
                <div className="text-3xl font-bold text-blue-700">{value}</div>
                <div className="text-sm text-gray-600">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-12 border-t border-blue-50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-8">
              Click the WhatsApp button in the bottom right corner for a quick chat about your needs.
              I'm here to help bring your ideas to life!
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Available for new projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Quick response guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Free initial consultation</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Home;