import { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaShieldAlt,
  FaRobot,
  FaChartLine,
  FaServer,
  FaPalette,
  FaRocket,
} from "react-icons/fa";
import { FiCpu, FiLayers } from "react-icons/fi";
import { BsGlobe, BsFillShieldLockFill } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);

  const services = [
    {
      name: "Web Development",
      description:
        "Crafting stunning, high-performance websites tailored to your brand and business goals—designed for speed, scalability, and seamless user experience across all devices.",
      icon: <BsGlobe className="h-6 w-6" />,
      cta: "Build your site",
      gradient: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-600/10 to-cyan-500/10",
      particles: "blue",
    },
    {
      name: "Mobile App Development",
      description:
        "Building intuitive, feature-rich mobile applications that engage users and elevate your digital presence—whether on iOS, Android, or cross-platform frameworks.",
      icon: <FaMobileAlt className="h-6 w-6" />,
      cta: "Launch your app",
      gradient: "from-purple-600 to-fuchsia-500",
      bgGradient: "from-purple-600/10 to-fuchsia-500/10",
      particles: "purple",
    },
    {
      name: "Marketing & Automation",
      description:
        "Driving measurable growth with data-driven digital marketing strategies, smart automation tools, and targeted campaigns designed to convert and retain customers.",
      icon: <FaChartLine className="h-6 w-6" />,
      cta: "Grow your business",
      gradient: "from-green-600 to-emerald-500",
      bgGradient: "from-green-600/10 to-emerald-500/10",
      particles: "green",
    },
    {
      name: "Cybersecurity",
      description:
        "Protecting your business with robust, modern security solutions—covering everything from penetration testing to real-time monitoring, compliance, and data protection.",
      icon: <BsFillShieldLockFill className="h-6 w-6" />,
      cta: "Secure your assets",
      gradient: "from-red-600 to-orange-500",
      bgGradient: "from-red-600/10 to-orange-500/10",
      particles: "red",
    },
    {
      name: "AI Development",
      description:
        "Empowering your business with intelligent AI-driven tools—from chatbots to predictive analytics—designed to automate, personalize, and scale your operations.",
      icon: <GiArtificialIntelligence className="h-6 w-6" />,
      cta: "Explore AI solutions",
      gradient: "from-indigo-600 to-violet-500",
      bgGradient: "from-indigo-600/10 to-violet-500/10",
      particles: "indigo",
    },
    // {
    //   name: "UI/UX Design",
    //   description:
    //     "Creating beautiful, intuitive interfaces that delight users and drive engagement through thoughtful design principles and user-centered approaches.",
    //   icon: <FaPalette className="h-6 w-6" />,
    //   cta: "Design your vision",
    //   gradient: "from-pink-600 to-rose-500",
    //   bgGradient: "from-pink-600/10 to-rose-500/10",
    //   particles: "pink",
    // },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]));
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll(".service-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Particle colors
  const particleColors = {
    blue: "bg-blue-500",
    purple: "bg-purple-500",
    green: "bg-green-500",
    red: "bg-red-500",
    indigo: "bg-indigo-500",
    pink: "bg-pink-500",
  };

  return (
    <div className="relative py-24 bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.05),transparent_70%)]"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: [
                "#3b82f6",
                "#8b5cf6",
                "#10b981",
                "#ef4444",
                "#6366f1",
                "#ec4899",
              ][Math.floor(Math.random() * 6)],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 20}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <div className="inline-flex items-center gap-4 px-0 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent animate-pulse"></div>
            <span className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold">
              Our Expertise
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent animate-pulse"></div>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Digital Solutions
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              For Modern Businesses
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive services designed to elevate your digital presence,
            secure your assets, and drive measurable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={service.name}
              data-index={index}
              className={`service-card group relative transform transition-all duration-700 ${
                visibleCards.has(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-all duration-500`}
              ></div>

              {/* Main Card */}
              <div className="relative bg-white backdrop-blur-xl border border-gray-200 rounded-xl p-8 h-full hover:bg-gray-50 transition-all duration-500 group-hover:border-transparent group-hover:scale-[1.02] shadow-sm hover:shadow-lg overflow-hidden">
                {/* Background Pattern */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Floating Circles */}
                <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-150 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                <div className="absolute -left-5 -bottom-5 w-20 h-20 rounded-full opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-150 bg-gradient-to-r from-purple-500 to-pink-500"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white text-2xl">{service.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  {/* <button
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg opacity-100 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-xl`}
                  >
                    {service.cta}
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button> */}
                </div>

                {/* Hover Particles */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute rounded-full animate-float ${
                          particleColors[service.particles]
                        }`}
                        style={{
                          left: `${10 + Math.random() * 80}%`,
                          top: `${10 + Math.random() * 80}%`,
                          width: `${Math.random() * 3 + 1}px`,
                          height: `${Math.random() * 3 + 1}px`,
                          opacity: 0.7,
                          animationDelay: `${Math.random() * 2}s`,
                          animationDuration: `${3 + Math.random() * 4}s`,
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 overflow-hidden">
            {/* Button shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
              <div className="absolute top-0 left-0 w-20 h-full bg-white/30 animate-shine"></div>
            </div>
            <span className="flex items-center gap-3 relative z-10">
              Start Your Project Today
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
          <p className="mt-4 text-gray-500">
            Let's build something amazing together
          </p>
        </div>
      </div>

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%) skew(-15deg);
          }
          100% {
            transform: translateX(300%) skew(-15deg);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-shine {
          animation: shine 2s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default Services;
