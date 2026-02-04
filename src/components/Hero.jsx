import { FaArrowRight, FaCheck, FaFire, FaChartLine, FaCode, FaMicrophone, FaDownload, FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Home() {
  // Stats data
  const stats = [
    { value: "50+", label: "Projects Delivered", desc: "Successful implementations" },
    { value: "100+", label: "Clients Served", desc: "Across 15+ industries" },
    { value: "25+", label: "Speaking Engagements", desc: "Keynotes & Workshops" },
    { value: "7+", label: "Years Experience", desc: "Business & Tech" },
  ];

  // Services offered
  const services = [
    {
      icon: <FaChartLine className="text-3xl text-orange-500" />,
      title: "Business Strategy",
      desc: "Scale your startup or transform existing operations with data-driven strategies",
      points: ["Market Analysis", "Growth Planning", "Revenue Optimization"]
    },
    {
      icon: <FaCode className="text-3xl text-orange-500" />,
      title: "Full-Stack Development",
      desc: "Build robust, scalable web applications from concept to deployment",
      points: ["MERN Stack", "Next.js", "Real-time Applications"]
    },
    {
      icon: <FaMicrophone className="text-3xl text-orange-500" />,
      title: "Leadership Speaking",
      desc: "Inspire teams and drive innovation through motivational talks & workshops",
      points: ["Tech Leadership", "Innovation Mindset", "Team Motivation"]
    }
  ];

  // Featured technologies
  const techStack = [
    { icon: <SiNextdotjs />, name: "Next.js", color: "hover:text-white" },
    { icon: <SiReact />, name: "React", color: "hover:text-blue-400" },
    { icon: <SiNodedotjs />, name: "Node.js", color: "hover:text-green-500" },
    { icon: <SiMongodb />, name: "MongoDB", color: "hover:text-green-600" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-orange-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-red-900/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-900/30 text-orange-400 mb-6 border border-orange-800/50">
                <FaFire className="mr-2 animate-pulse" />
                <span className="text-sm font-semibold">TRIPLE THREAT PROFESSIONAL</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                I Transform{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Ideas
                </span>{" "}
                Into{" "}
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  Reality
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                <span className="font-bold text-orange-400">Business Strategist</span> ×{" "}
                <span className="font-bold text-orange-400">Full-Stack Developer</span> ×{" "}
                <span className="font-bold text-orange-400">Motivational Speaker</span>
              </p>
              
              <p className="text-gray-300 mb-10 text-lg leading-relaxed max-w-2xl">
                I bridge the gap between business vision and technical execution. With 7+ years building 
                successful startups and enterprise solutions, I help ambitious leaders turn concepts into 
                scalable digital products while inspiring teams to achieve excellence.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-12">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-orange-900/30 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
                >
                  Hire Me Now
                  <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <a
                  href="#projects"
                  className="border-2 border-gray-700 text-gray-300 px-8 py-4 rounded-lg font-bold text-lg hover:border-orange-500 hover:text-white transition-all duration-300"
                >
                  View My Work
                </a>
                
                <a
                  href="/resume.pdf"
                  className="border-2 border-gray-700 text-gray-300 px-8 py-4 rounded-lg font-bold text-lg hover:border-orange-500 hover:text-white transition-all duration-300 flex items-center"
                  download
                >
                  <FaDownload className="mr-3" />
                  Download CV
                </a>
              </div>
              
              {/* Tech Stack */}
              <div className="mb-8">
                <p className="text-gray-400 mb-4">Tech Stack I Build With:</p>
                <div className="flex gap-6">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center group cursor-pointer"
                    >
                      <div className="text-4xl text-gray-600 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <span className="text-sm text-gray-500 mt-2 group-hover:text-gray-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-orange-500/30 hover:bg-gray-800/80 transition-all duration-300 group"
                >
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-lg font-semibold text-gray-200 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-400">
                    {stat.desc}
                  </div>
                </div>
              ))}
              
              {/* Available for Work Badge */}
              <div className="col-span-2 bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/20 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                  <span className="text-green-400 font-bold">AVAILABLE FOR WORK</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Ready to Elevate Your Business?</h3>
                <p className="text-gray-400 mb-4">
                  I'm currently accepting new projects, speaking engagements, and consulting clients.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors"
                >
                  Schedule a Free Strategy Call
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How I <span className="text-orange-400">Deliver Value</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
              Combining technical expertise with business acumen and leadership inspiration
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-orange-500/50 hover:bg-gray-800/50 transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.desc}</p>
                <ul className="space-y-3">
                  {service.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <FaCheck className="text-green-500 mr-3" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Why <span className="text-orange-400">Hire Me</span> Over Others?
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                    <FaChartLine className="text-orange-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Business-First Approach</h3>
                    <p className="text-gray-400">
                      I don't just write code—I understand business goals, ROI, and market positioning.
                      Every technical decision is driven by business impact.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                    <FaCode className="text-orange-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">End-to-End Ownership</h3>
                    <p className="text-gray-400">
                      From initial concept to deployment and scaling. I handle strategy, development,
                      deployment, and team leadership in one cohesive package.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500/20 p-3 rounded-lg mr-4">
                    <FaMicrophone className="text-orange-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Team Leadership & Inspiration</h3>
                    <p className="text-gray-400">
                      Beyond delivery, I elevate team performance through motivational leadership,
                      clear communication, and innovative thinking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-orange-500/30 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-6">
                  <FaFire className="text-2xl text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h3>
                <p className="text-gray-400 mb-8">
                  Ready to transform your vision into reality? I'm just one conversation away.
                </p>
              </div>
              
              <div className="space-y-6">
                <a
                  href="mailto:hello@dluxx.com"
                  className="block bg-gradient-to-r from-orange-600 to-red-600 text-white text-center py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-orange-900/30 transition-all duration-300"
                >
                  Email: hello@dluxx.com
                </a>
                
                <div className="text-center">
                  <p className="text-gray-400 mb-4">Or connect with me on:</p>
                  <div className="flex justify-center space-x-6">
                    <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 text-2xl transition-colors">
                      <FaLinkedin />
                    </a>
                    <a href="https://github.com" className="text-gray-400 hover:text-white text-2xl transition-colors">
                      <FaGithub />
                    </a>
                    <a href="https://youtube.com" className="text-gray-400 hover:text-red-500 text-2xl transition-colors">
                      <FaYoutube />
                    </a>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-800 text-center">
                  <p className="text-gray-400 text-sm">
                    Response time: <span className="text-green-400 font-bold">Within 24 hours</span>
                  </p>
                  <p className="text-gray-400 text-sm mt-1">
                    Initial consultation: <span className="text-orange-400 font-bold">Always free</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to <span className="text-orange-400">Elevate</span> Your Digital Presence?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
            Whether you need a complete business solution, a cutting-edge web application,
            or a speaker to inspire your team—I deliver results that exceed expectations.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-5 rounded-xl font-bold text-xl hover:shadow-2xl hover:shadow-orange-900/40 transition-all duration-300 transform hover:-translate-y-1 flex items-center"
            >
              Start Your Project Today
              <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            
            <Link
              to="/projects"
              className="border-2 border-gray-700 text-gray-300 px-10 py-5 rounded-xl font-bold text-xl hover:border-orange-500 hover:text-white transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
          
          <p className="text-gray-500 mt-8 text-sm">
            Currently available for: Full-time positions • Contract projects • Consulting • Speaking engagements
          </p>
        </div>
      </section>
    </div>
  );
}