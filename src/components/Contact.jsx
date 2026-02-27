import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebook,
  FaPaperPlane,
  FaCalendarAlt,
  FaClock
} from "react-icons/fa";
import { MdConnectWithoutContact } from "react-icons/md";

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      info: "henriettenishimwe269@gmail.com",
      link: "mailto:henriettenishimwe269@gmail.com",
      description: "Primary contact"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      info: "+250 782 575 191",
      link: "https://wa.me/250782575191",
      description: "WhatsApp available"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      info: "Kigali, Rwanda – Rubavu / Gisenyi",
      link: "https://maps.google.com/?q=Kigali+Rwanda",
      description: "Available for remote work"
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      info: "Monday - Friday",
      description: "9:00 AM - 6:00 PM",
      badge: "Weekend by Appointment"
    }
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      name: "Instagram",
      link: "https://instagram.com/henriette.nii",
      color: "hover:text-pink-600"
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
      link: "https://facebook.com/",
      color: "hover:text-blue-700"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50 text-gray-800">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-100 rounded-full mb-4">
            <MdConnectWithoutContact className="text-blue-600" />
            <span className="text-blue-700 font-medium">Let's Connect</span>
          </div>

          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out if you have any questions or collaboration ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <FaPaperPlane className="text-blue-600" />
              Contact Information
            </h3>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border hover:shadow-lg transition"
                >
                  <div className="flex gap-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-lg text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{item.title}</p>

                      {item.link ? (
                        <a
                          href={item.link}
                          className="font-semibold hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="font-semibold">{item.info}</p>
                      )}

                      <p className="text-sm text-gray-600 mt-1">
                        {item.description}
                      </p>

                      {item.badge && (
                        <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full">
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
              <h4 className="font-semibold mb-4">Social Media</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex items-center gap-2 px-4 py-3 bg-white border rounded-lg hover:shadow transition"
                  >
                    <span className={`text-xl ${social.color}`}>
                      {social.icon}
                    </span>
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow border">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border rounded-lg"
              />

              <input
                type="text"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 border rounded-lg"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 border rounded-lg resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-sm text-gray-600">
          🟢 Typically responds within 24 hours
        </div>
      </div>
    </section>
  );
}