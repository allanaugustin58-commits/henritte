import React from "react";
import { 
  FaCode, 
  FaLaptopCode, 
  FaDatabase, 
  FaChartLine, 
  FaTools, 
  FaMobileAlt,
  FaShieldAlt,
  FaCogs 
} from "react-icons/fa";
import { MdBusiness, MdDesignServices, MdAnalytics } from "react-icons/md";

export default function Services() {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Application Development",
      description: "Custom web applications built with modern technologies like React, Node.js, and Express to solve specific business problems.",
      features: ["Full-stack development", "Responsive design", "Performance optimization", "API integration"],
      price: "Project-based",
      delivery: "4-8 weeks"
    },
    {
      icon: <MdBusiness />,
      title: "Business IT Solutions",
      description: "Technology solutions designed specifically for business needs, focusing on efficiency and growth.",
      features: ["Business process automation", "System integration", "Workflow optimization", "IT consulting"],
      price: "Consultation + Project",
      delivery: "Ongoing"
    },
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      description: "Creating beautiful, user-friendly interfaces with React and modern CSS frameworks for optimal user experience.",
      features: ["React.js applications", "UI/UX implementation", "Cross-browser compatibility", "Mobile-first design"],
      price: "From $500",
      delivery: "2-4 weeks"
    },
    {
      icon: <FaDatabase />,
      title: "Backend Development",
      description: "Robust server-side solutions with secure APIs, database design, and efficient data management.",
      features: ["API development", "Database design", "Authentication systems", "Server deployment"],
      price: "From $800",
      delivery: "3-6 weeks"
    },
    {
      icon: <MdDesignServices />,
      title: "UI/UX Design",
      description: "User-centered design that combines aesthetics with functionality to create intuitive digital experiences.",
      features: ["Wireframing", "Prototyping", "User research", "Design systems"],
      price: "From $400",
      delivery: "1-3 weeks"
    },
    {
      icon: <FaTools />,
      title: "Website Maintenance",
      description: "Ongoing support, updates, and maintenance to keep your website running smoothly and securely.",
      features: ["Regular updates", "Security patches", "Bug fixes", "Performance monitoring"],
      price: "Monthly retainer",
      delivery: "Ongoing"
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Web Design",
      description: "Websites that work perfectly on all devices - desktop, tablet, and mobile - for maximum reach.",
      features: ["Mobile optimization", "Touch-friendly", "Fast loading", "Cross-device testing"],
      price: "From $300",
      delivery: "1-2 weeks"
    },
    {
      icon: <MdAnalytics />,
      title: "Business Analytics Dashboards",
      description: "Custom dashboards to visualize business data and help make informed decisions.",
      features: ["Data visualization", "Real-time updates", "Custom reports", "KPIs tracking"],
      price: "Project-based",
      delivery: "3-5 weeks"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-50 rounded-full mb-4">
            <FaCogs className="text-blue-600" />
            <span className="text-blue-700 font-medium">What I Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional IT and development services tailored to help businesses grow and succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-2xl group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & Delivery */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Starting from</p>
                    <p className="text-lg font-bold text-gray-900">{service.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500 mb-1">Delivery time</p>
                    <p className="text-lg font-medium text-blue-600">{service.delivery}</p>
                  </div>
                </div>
              </div>

              {/* Hover Action */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Working Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understand your business needs and project requirements"
              },
              {
                step: "02",
                title: "Planning",
                description: "Create detailed project plan and technical specifications"
              },
              {
                step: "03",
                title: "Development",
                description: "Build the solution with regular updates and feedback"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Deploy, test, and provide ongoing support"
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white border border-blue-200 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that fits your business needs perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
                Get a Free Quote
              </button>
              <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-300">
                Schedule a Call
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              Response guaranteed within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}