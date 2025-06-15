import { useState } from "react";
import {
  FaRocket,
  FaChartLine,
  FaWallet,
  FaHeadset,
  FaShieldAlt,
  FaLightbulb,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const strengths = [
    {
      id: 1,
      title: "Lightning-Fast Delivery",
      description:
        "Accelerated development cycles using agile methodologies and cutting-edge automation tools",
      icon: <FaRocket className="w-5 h-5" />,
    },
    {
      id: 2,
      title: "Enterprise-Grade Scalability",
      description:
        "Cloud-native architectures designed to handle millions of users with zero downtime",
      icon: <FaChartLine className="w-5 h-5" />,
    },
    {
      id: 3,
      title: "Flexible Investment Models",
      description:
        "Risk-free engagement with milestone-based payments and transparent pricing",
      icon: <FaWallet className="w-5 h-5" />,
    },
    {
      id: 4,
      title: "24/7 Premium Support",
      description:
        "Dedicated DevOps team monitoring your systems with proactive issue resolution",
      icon: <FaHeadset className="w-5 h-5" />,
    },
    {
      id: 5,
      title: "Military-Grade Security",
      description:
        "Advanced security protocols with compliance certifications for regulated industries",
      icon: <FaShieldAlt className="w-5 h-5" />,
    },
    {
      id: 6,
      title: "AI-Powered Innovation",
      description:
        "Next-generation solutions leveraging machine learning and artificial intelligence",
      icon: <FaLightbulb className="w-5 h-5" />,
    },
  ];

  return (
    <section className="relative py-22 bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-50/10 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center gap-2 px-0 mb-8">
            <span className="w-12 h-px bg-blue-600"></span>
            <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">
              Our Advantages
            </span>
            <span className="w-12 h-px bg-blue-600"></span>
          </div>
          <h2 className="text-4xl font-light tracking-tight text-gray-900 mb-4">
            Your Strategic Technology Partner
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don't just build software—we architect digital solutions that
            scale, secure, and succeed.
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {strengths.map((strength) => (
            <div
              key={strength.id}
              className={`group relative bg-white rounded border border-gray-200 p-8 transition-all duration-300 hover:border-blue-300 ${
                hoveredCard === strength.id ? "shadow-md" : ""
              }`}
              onMouseEnter={() => setHoveredCard(strength.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Icon Container */}
              {/* <div className="absolute top-8 right-8 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}

              <div className="relative z-10">
                <div className="w-12 h-12 rounded bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6">
                  {strength.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    {strength.title}
                  </h3>
                  <p className="text-gray-600">{strength.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative text-center bg-blue-600 rounded p-10 text-white shadow-md">
          <h3 className="text-3xl font-light text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something extraordinary
            together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3.5 rounded font-medium hover:bg-gray-50 transition-all duration-300 text-sm uppercase tracking-widest"
            >
              Start Your Project
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            {/* <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 bg-blue-700 text-white px-8 py-3.5 rounded font-medium hover:bg-blue-800 transition-all duration-300 text-sm uppercase tracking-widest border border-blue-500"
            >
              View Our Work
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
