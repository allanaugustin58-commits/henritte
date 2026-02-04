import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCalendarAlt, FaClock } from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";

export default function Contact() {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "+250 782 575 191",
      link: "tel:+250782575191",
      description: "Call or WhatsApp"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "davidluxxnm@gmail.com",
      link: "mailto:davidluxxnm@gmail.com",
      description: "Response within 24 hours"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      info: "Rubavu, Gisenyi – Rwanda",
      link: "https://maps.google.com/?q=Rubavu+Rwanda",
      description: "Available for remote work worldwide"
    },
    {
      icon: <FaClock />,
      title: "Availability",
      info: "Monday - Friday",
      description: "9:00 AM - 6:00 PM CAT",
      badge: "Available Now"
    }
  ];

  const socialLinks = [
    { icon: <FaGithub />, name: "GitHub", link: "https://github.com/davidluxx", color: "hover:text-gray-800" },
    { icon: <FaLinkedin />, name: "LinkedIn", link: "https://linkedin.com/in/davidluxx", color: "hover:text-blue-700" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-100 rounded-full mb-4">
            <MdConnectWithoutContact className="text-blue-600" />
            <span className="text-blue-700 font-medium">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <FaPaperPlane className="text-blue-600" />
              Contact Information
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <div className="text-xl">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-500 text-sm mb-1">{item.title}</p>
                      {item.link ? (
                        <a 
                          href={item.link} 
                          className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors block"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-gray-900">{item.info}</p>
                      )}
                      <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                      {item.badge && (
                        <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Connect on Social Media</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 bg-white border border-blue-100 text-gray-700 rounded-lg hover:shadow-md transition-all duration-300 group"
                  >
                    <span className={`text-xl ${social.color} transition-colors`}>
                      {social.icon}
                    </span>
                    <span className="font-medium group-hover:text-blue-600 transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-xl border border-blue-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
              <p className="text-gray-600 mb-8">Fill out the form below and I'll get back to you as soon as possible.</p>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                      placeholder="username@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-blue-100">
                Let's schedule a call to discuss your requirements and how I can help you achieve your goals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-end">
              <a
                href="mailto:davidluxxnm@gmail.com"
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
              >
                <FaEnvelope />
                Email Directly
              </a>
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <FaCalendarAlt />
                Schedule Call
              </a>
            </div>
          </div>
        </div>

        {/* Response Time Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm">Typically responds within 24 hours</span>
          </div>
        </div>
      </div>
    </section>
  );
}