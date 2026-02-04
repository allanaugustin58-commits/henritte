import React, { useState } from "react";
import { ExternalLink, Github, Eye, ArrowRight } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration, admin dashboard, and real-time inventory management.",
      category: "Web Development",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      liveLink: "#",
      githubLink: "#",
      features: ["Shopping Cart", "Payment Processing", "User Dashboard", "Admin Panel"]
    },
    {
      id: 2,
      title: "Business CRM System",
      description: "Customer Relationship Management tool for small businesses with analytics and reporting features.",
      category: "Business Solutions",
      tags: ["React", "Express", "PostgreSQL", "Chart.js", "JWT"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      liveLink: "#",
      githubLink: "#",
      features: ["Lead Management", "Analytics Dashboard", "Email Integration", "Task Tracking"]
    },
    {
      id: 3,
      title: "Inventory Management",
      description: "Web app for tracking inventory, generating reports, and managing stock levels for retail businesses.",
      category: "Web Development",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind", "React Query"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
      liveLink: "#",
      githubLink: "#",
      features: ["Stock Tracking", "Barcode Scanning", "Report Generation", "Supplier Management"]
    },
    {
      id: 4,
      title: "Hotel Booking System",
      description: "Complete hotel management system with room booking, payment processing, and guest management.",
      category: "Web Development",
      tags: ["React", "Node.js", "MySQL", "Socket.io", "Map API"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      liveLink: "#",
      githubLink: "#",
      features: ["Room Booking", "Payment Gateway", "Booking Calendar", "Review System"]
    },
    // ...other projects
  ];

  // Filter projects based on selected category
  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((project) => project.category === filter);

  const filters = ["All", "Web Development", "Business Solutions"];

  return (
    <section className=" pt-10 bg-gray-10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
    
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured <span className="text-blue-700">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that combine business needs with technical solutions.
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full font-medium transition-colors duration-200 ${
                filter === f
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-700"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex gap-2">
                    <a href={project.githubLink} className="p-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200" aria-label="GitHub repository">
                      <Github size={18} />
                    </a>
                    <a href={project.liveLink} className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100" aria-label="Live demo">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">{feature}</span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">{tag}</span>
                  ))}
                </div>

                <button className="w-full py-3 bg-blue-50 text-blue-700 font-medium rounded-lg hover:bg-blue-100 flex items-center justify-center gap-2">
                  <Eye size={18} /> View Project Details <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
