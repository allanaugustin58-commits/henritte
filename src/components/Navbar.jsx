import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaHome,
  FaUserTie,
  FaCode,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaProjectDiagram,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";

export default function Navbar() {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  const navItems = [
    { path: "/", label: "Home", icon: FaHome },
    { path: "/about", label: "About", icon: FaUserTie },
    { path: "/skills", label: "Skills", icon: FaCode },
    { path: "/projects", label: "Projects", icon: FaProjectDiagram },
    { path: "/contact", label: "Contact", icon: FaEnvelope },
  ];

  const socialLinks = [
    {
      href: "https://instagram.com/henriette.nii",
      icon: FaInstagram,
      label: "Instagram",
      brandColor: "text-pink-500",
    },
    {
      href: "https://facebook.com/your-profile-link",
      icon: FaFacebook,
      label: "Facebook",
      brandColor: "text-blue-600",
    },
  ];

  return (
    <>
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Main Navigation */}
      <nav
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          hasScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-blue-100"
            : "bg-white border-b border-blue-50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            
            {/* Brand Logo/Name */}
            <Link
              to="/"
              className="flex items-center gap-3 group transition-transform hover:scale-[1.02]"
              aria-label="Home"
            >
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center shadow-sm">
                  <SiDevdotto className="text-blue-600 w-5 h-5 lg:w-6 lg:h-6 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <span className="absolute -top-1 -right-1 w-2 h-2 lg:w-2.5 lg:h-2.5 bg-blue-500 rounded-full animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-gray-900 tracking-tight">
                  HENRIETTE <span className="text-blue-600">NISHIMWE</span>
                </h1>
                <p className="text-xs text-gray-500 -mt-0.5 font-medium">
                  SWD Student
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-1">
                {navItems.map(({ path, label, icon: Icon }) => {
                  const active = isActive(path);
                  return (
                    <li key={path}>
                      <Link
                        to={path}
                        className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-lg transition-all duration-200
                          ${
                            active
                              ? "text-blue-700 bg-blue-50 font-semibold"
                              : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
                          }`}
                        aria-current={active ? "page" : undefined}
                      >
                        <Icon
                          className={`transition-transform duration-200 ${
                            active
                              ? "scale-110 text-blue-600"
                              : "text-gray-500 group-hover:text-blue-500 group-hover:scale-110"
                          }`}
                        />
                        <span className="font-medium">{label}</span>

                        {/* Active indicator */}
                        {active && (
                          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-blue-600 rounded-full" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Social Links and Hire Me */}
              <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
                {socialLinks.map(({ href, icon: Icon, label, brandColor }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`p-2 rounded-lg bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:scale-110 hover:shadow-sm`}
                  >
                    <Icon className={`${brandColor}`} />
                  </a>
                ))}

                <Link
                  to="/hireme"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-2.5 rounded-lg font-semibold text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-lg hover:shadow-blue-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Hire Me
                </Link>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <FaTimes size={22} className="text-blue-600" />
              ) : (
                <FaBars size={22} />
              )}
            </button>
          </div>

          {/* Mobile Menu Panel */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "max-h-[500px] opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-2"
            }`}
            role="menu"
            aria-hidden={!isMenuOpen}
          >
            <div className="bg-white shadow-xl rounded-b-xl border border-gray-100 mt-2 py-2">
              {navItems.map(({ path, label, icon: Icon }) => {
                const active = isActive(path);
                return (
                  <Link
                    key={path}
                    to={path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between px-6 py-3.5 transition-colors duration-150
                      ${
                        active
                          ? "text-blue-700 bg-blue-50 border-l-4 border-blue-600 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    role="menuitem"
                    aria-current={active ? "page" : undefined}
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        className={`${active ? "text-blue-600" : "text-gray-500"}`}
                      />
                      <span className="font-medium">{label}</span>
                    </div>
                    {active && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    )}
                  </Link>
                );
              })}

              {/* Mobile Social Links */}
              <div className="border-t border-gray-100 mt-2 pt-4 px-6 pb-3">
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map(({ href, icon: Icon, label, brandColor }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="p-3 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Icon className={`text-xl ${brandColor}`} />
                    </a>
                  ))}
                </div>
                <Link
                  to="/hireme"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 rounded-lg font-semibold text-white text-center block hover:from-blue-700 hover:to-blue-800 transition-colors"
                >
                  Hire Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
