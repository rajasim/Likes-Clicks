import React from "react";
import {
  Code,
  Layout,
  Smartphone,
  Globe,
  Cpu,
  Zap,
  Database,
  GitBranch,
} from "lucide-react";

const WebDev = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10 text-blue-600" />,
      title: "Custom Web Development",
      description:
        "Bespoke websites built with modern technologies to meet your specific business requirements.",
      highlights: [
        "React.js/Next.js applications",
        "TypeScript development",
        "Headless CMS integration",
        "Custom API development",
      ],
    },
    {
      icon: <Layout className="w-10 h-10 text-green-600" />,
      title: "Frontend Development",
      description:
        "Beautiful, responsive interfaces that deliver exceptional user experiences.",
      highlights: [
        "Responsive design implementation",
        "UI/UX best practices",
        "Performance optimization",
        "Accessibility compliance",
      ],
    },
    {
      icon: <Globe className="w-10 h-10 text-purple-600" />,
      title: "Full-Stack Solutions",
      description:
        "Complete web applications with both frontend and backend components.",
      highlights: [
        "Node.js/Express backends",
        "Database integration",
        "Authentication systems",
        "Server-side rendering",
      ],
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-600" />,
      title: "Progressive Web Apps",
      description:
        "Web applications that function like native apps with offline capabilities.",
      highlights: [
        "Service workers implementation",
        "App-like interfaces",
        "Push notifications",
        "Offline functionality",
      ],
    },
    {
      icon: <Database className="w-10 h-10 text-orange-600" />,
      title: "E-Commerce Solutions",
      description:
        "High-performance online stores with secure payment processing.",
      highlights: [
        "Shopify/WordPress WooCommerce",
        "Custom cart functionality",
        "Payment gateway integration",
        "Inventory management",
      ],
    },
    {
      icon: <GitBranch className="w-10 h-10 text-indigo-600" />,
      title: "Web Optimization",
      description: "Performance tuning and SEO enhancements for your website.",
      highlights: [
        "Page speed optimization",
        "SEO best practices",
        "Core Web Vitals improvement",
        "Analytics integration",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Professional Web Development Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We create high-performance, scalable web solutions using modern
          frameworks and industry-leading practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Next Web Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our expert web developers will create a solution that drives results
            and delivers exceptional user experiences.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-300">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDev;
