import { useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaShoppingCart,
  FaHospital,
  FaMobile,
  FaTruck,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Custom Shopify alternative with AI-powered recommendations and advanced analytics for fashion retail",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    results: "+32% conversion rate, -45% cart abandonment",
    metrics: { users: "50K+", revenue: "$2M+", uptime: "99.9%" },
    tech: ["React", "Node.js", "MongoDB", "TensorFlow", "Stripe"],
    category: "E-Commerce",
    icon: <FaShoppingCart />,
    links: [
      {
        url: "https://example.com",
        icon: <FaExternalLinkAlt />,
        label: "Live Demo",
      },
      { url: "https://github.com", icon: <FaGithub />, label: "Source Code" },
    ],
  },
  {
    id: 2,
    title: "Healthcare SaaS Platform",
    description:
      "HIPAA-compliant patient management system with telemedicine capabilities and automated scheduling",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
    results: "-60% admin workload, 200+ clinics onboarded",
    metrics: { users: "25K+", practices: "200+", satisfaction: "4.9/5" },
    tech: ["TypeScript", "Next.js", "PostgreSQL", "AWS", "Socket.io"],
    category: "Healthcare",
    icon: <FaHospital />,
    links: [
      {
        url: "https://example.com",
        icon: <FaExternalLinkAlt />,
        label: "Live Demo",
      },
    ],
  },
  {
    id: 3,
    title: "Mobile Banking Application",
    description:
      "Fintech application with biometric authentication, budgeting tools, and real-time transaction monitoring",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
    results: "250K users in 6 months, 4.8★ rating",
    metrics: { downloads: "250K+", rating: "4.8/5", retention: "85%" },
    tech: ["Flutter", "Firebase", "Node.js", "Plaid API", "ML Kit"],
    category: "FinTech",
    icon: <FaMobile />,
    links: [],
  },
  {
    id: 4,
    title: "IoT Fleet Management",
    description:
      "Real-time vehicle tracking and analytics platform with predictive maintenance and route optimization",
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop&crop=center",
    results: "-22% fuel costs, improved delivery efficiency",
    metrics: { vehicles: "5K+", savings: "$500K+", efficiency: "+35%" },
    tech: ["React Native", "Python", "AWS IoT", "DynamoDB", "TensorFlow"],
    category: "Logistics",
    icon: <FaTruck />,
    links: [
      { url: "https://github.com", icon: <FaGithub />, label: "Source Code" },
    ],
  },
];

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="min-h-screen bg-white py-24 overflow-hidden relative">
      {/* Premium decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-50/20 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Premium Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center gap-2 px-0 mb-8">
            <span className="w-12 h-px bg-blue-600"></span>
            <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">
              Selected Works
            </span>
            <span className="w-12 h-px bg-blue-600"></span>
          </div>

          <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl mb-6 leading-tight">
            <span className="block font-normal">Crafting Digital</span>
            <span className="block font-medium">Masterpieces</span>
          </h2>

          <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
            We transform visionary ideas into exceptional digital experiences
            that elevate brands and drive measurable results.
          </p>
        </div>

        {/* Premium Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative bg-white rounded-none border-t border-gray-100 pt-8 transition-all duration-500 hover:shadow-xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Header */}
              <div className="flex justify-between items-start mb-8 px-8">
                <div>
                  <div className="text-xs uppercase tracking-widest text-blue-600 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-2xl font-light text-gray-900">
                    {project.title}
                  </h3>
                </div>
                <div className="text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                  {project.icon}
                </div>
              </div>

              {/* Project Image */}
              <div className="relative h-80 overflow-hidden mb-8">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="px-8 pb-8">
                <p className="text-gray-600 leading-relaxed mb-8 border-b border-gray-100 pb-8">
                  {project.description}
                </p>

                {/* Results */}
                <div className="mb-8">
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                    Key Achievements
                  </div>
                  <p className="text-lg text-gray-900 font-light">
                    {project.results}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="border-l border-gray-200 pl-4">
                      <div className="text-2xl font-light text-gray-900 mb-1">
                        {value}
                      </div>
                      <div className="text-xs uppercase tracking-widest text-gray-500">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs uppercase tracking-widest text-gray-600 border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {project.links.length > 0 && (
                  <div
                    className={`absolute top-8 right-8 flex gap-3 transition-all duration-500 ${
                      hoveredProject === project.id
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4"
                    }`}
                  >
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        className="bg-white hover:bg-gray-50 text-gray-700 hover:text-blue-600 p-3 transition-all duration-300 border border-gray-200 flex items-center justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                        title={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Premium CTA Section */}
        <div className="relative text-center">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-0">
              <span className="w-12 h-px bg-blue-600"></span>
              <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">
                Get In Touch
              </span>
              <span className="w-12 h-px bg-blue-600"></span>
            </div>
          </div>

          <h3 className="text-3xl font-light text-gray-900 mb-6">
            Ready to begin your project?
          </h3>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Let's collaborate to create something extraordinary that reflects
            your vision and exceeds your expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/portfolio"
              className="group inline-flex items-center gap-2 px-8 py-4 border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              View Full Portfolio
              <FiArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              Start a Conversation
              <FiArrowRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        article {
          animation: fadeIn 0.8s ease-out forwards;
          animation-delay: calc(var(--index) * 0.1s);
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
