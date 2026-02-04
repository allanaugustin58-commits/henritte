import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaYoutube, 
  FaFacebook, 
  FaInstagram, 
  FaArrowRight,
  FaCode, 
  FaBriefcase,
  FaMicrophone,
  FaLightbulb,
  FaGraduationCap,
  FaRegHeart
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Expertise areas with professional icons
  const expertiseAreas = [
    { name: "Full-Stack Development", icon: <FaCode className="text-blue-600" /> },
    { name: "Business Technology", icon: <FaBriefcase className="text-blue-600" /> },
    { name: "Technical Consulting", icon: <FaLightbulb className="text-blue-600" /> },
    { name: "Digital Strategy", icon: <FaGraduationCap className="text-blue-600" /> },
    { name: "Project Leadership", icon: <FaRegHeart className="text-blue-600" /> },
  ];

  // Navigation links
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  // Social links with actual profiles
  const socialLinks = [
    { 
      href: "https://github.com/davidluxxnm", 
      icon: <FaGithub />, 
      label: "GitHub",
      color: "hover:bg-gray-900 hover:text-white",
      bgColor: "bg-gray-100 text-gray-700"
    },
    { 
      href: "https://linkedin.com/in/davidluxxnm", 
      icon: <FaLinkedin />, 
      label: "LinkedIn",
      color: "hover:bg-[#0077B5] hover:text-white",
      bgColor: "bg-gray-100 text-gray-700"
    },
    { 
      href: "https://youtube.com/@bwebwe_entertainment", 
      icon: <FaYoutube />, 
      label: "YouTube",
      color: "hover:bg-[#FF0000] hover:text-white",
      bgColor: "bg-gray-100 text-gray-700"
    },
    { 
      href: "https://facebook.com/david.luxx.nm", 
      icon: <FaFacebook />, 
      label: "Facebook",
      color: "hover:bg-[#1877F2] hover:text-white",
      bgColor: "bg-gray-100 text-gray-700"
    },
    { 
      href: "https://instagram.com/david_luxx_nm", 
      icon: <FaInstagram />, 
      label: "Instagram",
      color: "hover:bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white",
      bgColor: "bg-gray-100 text-gray-700"
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-white rounded-xl flex items-center justify-center border border-blue-100 shadow-sm">
                <span className="text-blue-700 text-lg font-bold">DL</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">David Luxx</h3>
                <p className="text-blue-600 text-sm font-medium">Full-Stack Developer</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Building scalable digital solutions and inspiring the next generation of developers 
              from Rwanda. Combining technical expertise with business acumen.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.bgColor} ${social.color} p-2 rounded-lg transition-all duration-300 transform hover:scale-105`}
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Expertise Areas */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
              <FaCode className="text-blue-600 mr-2" />
              Expertise
            </h4>
            <ul className="space-y-2">
              {expertiseAreas.map((area, idx) => (
                <li 
                  key={idx} 
                  className="flex items-center space-x-3 group cursor-pointer transition-all duration-200"
                >
                  <div className="w-5 h-5 bg-blue-50 rounded flex items-center justify-center group-hover:bg-blue-100">
                    {area.icon}
                  </div>
                  <span className="text-gray-600 text-xs group-hover:text-blue-700 group-hover:translate-x-1 transition-all duration-200">
                    {area.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
              <FaArrowRight className="text-blue-600 mr-2" />
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigationLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="flex items-center text-gray-600 hover:text-blue-700 transition-all duration-200 group"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-3 group-hover:bg-blue-600 transition-colors"></div>
                    <span className="text-sm group-hover:translate-x-2 transition-transform duration-200">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-base font-semibold text-gray-900 mb-4 flex items-center">
              <FaEnvelope className="text-blue-600 mr-2" />
              Contact
            </h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="w-7 h-7 bg-blue-50 rounded flex items-center justify-center group-hover:bg-blue-100 transition-colors flex-shrink-0">
                  <FaEnvelope className="text-blue-600" />
                </div>
                <div>
                  <a 
                    href="mailto:davidluxxnm@gmail.com" 
                    className="text-gray-600 hover:text-blue-700 transition-colors text-sm block"
                  >
                    davidluxxnm@gmail.com
                  </a>
                  <p className="text-gray-400 text-xs mt-1">Primary contact</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-7 h-7 bg-blue-50 rounded flex items-center justify-center group-hover:bg-blue-100 transition-colors flex-shrink-0">
                  <FaPhone className="text-blue-600" />
                </div>
                <div>
                  <a 
                    href="tel:+250782575191" 
                    className="text-gray-600 hover:text-blue-700 transition-colors text-sm block"
                  >
                    +250 782 575 191
                  </a>
                  <p className="text-gray-400 text-xs mt-1">WhatsApp available</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <div className="w-7 h-7 bg-blue-50 rounded flex items-center justify-center group-hover:bg-blue-100 transition-colors flex-shrink-0">
                  <FaMapMarkerAlt className="text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-600 text-sm">
                    Rubavu, Gisenyi
                  </p>
                  <p className="text-gray-400 text-xs mt-1">Rwanda • East Africa</p>
                </div>
              </div>
              
              {/* Contact CTA */}
              <div className="pt-4 border-t border-gray-100">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 shadow-sm hover:shadow w-full text-center group text-sm"
                >
                  Start a Project
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Section */}
        <div className="border-t border-gray-100 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-xs">
                © {currentYear} <span className="text-blue-700 font-medium">David Luxx Nizeyimana</span>
                <span className="text-gray-400 ml-2">All rights reserved.</span>
              </p>
              <p className="text-gray-400 text-xs mt-1">
                Kigali, Rwanda • VAT: RW-123456789
              </p>
            </div>
            
            {/* Policies & Status */}
            <div className="flex items-center space-x-6">
              <a 
                href="/privacy" 
                className="text-gray-500 hover:text-blue-700 transition-colors text-xs"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-gray-500 hover:text-blue-700 transition-colors text-xs"
              >
                Terms of Service
              </a>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-green-600 text-sm font-medium">Available for Projects</span>
              </div>
            </div>
          </div>
          
          {/* Motto & Identity */}
          <div className="text-center mt-6 pt-4 border-t border-gray-100">
            <p className="text-gray-600 text-xs italic mb-3">
              "Building digital futures, inspiring human potential."
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-500 text-xs">
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-700">Identity:</span>
                <span>Rwandan Developer</span>
              </div>
              <div className="w-px h-4 bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-700">Focus:</span>
                <span>Web Technology</span>
              </div>
              <div className="w-px h-4 bg-gray-200"></div>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-700">Mission:</span>
                <span>Digital Empowerment</span>
              </div>
            </div>
            
            {/* Social Media Handles */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-gray-500 text-xs mb-3">Connect with me:</p>
              <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-xs">
                <div className="flex items-center">
                  <FaYoutube className="text-red-500 mr-1" />
                  <span>@bwebwe_entertainment</span>
                </div>
                <div className="flex items-center">
                  <FaFacebook className="text-blue-600 mr-1" />
                  <span>david.luxx.nm</span>
                </div>
                <div className="flex items-center">
                  <FaInstagram className="text-pink-500 mr-1" />
                  <span>david_luxx_nm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}