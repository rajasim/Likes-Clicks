import { useState, useEffect, useRef } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaHashtag,
  FaAd,
  FaPenFancy,
  FaEnvelope,
  FaLaptopCode,
  FaCloud,
  FaChartBar,
  FaShieldAlt,
  FaPaintBrush,
} from "react-icons/fa";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);

  const services = [
    {
      name: "Website Development",
      description:
        "Custom websites for businesses, schools, e-commerce, and more using modern frameworks.",
      icon: <FaCode className="h-6 w-6" />,
      cta: "Get started",
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-500/10 to-cyan-400/10",
    },
    {
      name: "Mobile App Development",
      description:
        "Android and iOS app development with responsive design and user-friendly interfaces.",
      icon: <FaMobileAlt className="h-6 w-6" />,
      cta: "Learn more",
      gradient: "from-purple-500 to-blue-500",
      bgGradient: "from-purple-500/10 to-blue-500/10",
    },
    {
      name: "Search Engine Optimization",
      description:
        "On-page and off-page SEO to improve website visibility and ranking.",
      icon: <FaSearch className="h-6 w-6" />,
      cta: "Boost rankings",
      gradient: "from-green-500 to-emerald-400",
      bgGradient: "from-green-500/10 to-emerald-400/10",
    },
    {
      name: "Social Media Marketing",
      description:
        "Campaigns and content strategies for platforms like Instagram, Facebook, and LinkedIn.",
      icon: <FaHashtag className="h-6 w-6" />,
      cta: "Grow followers",
      gradient: "from-pink-500 to-rose-400",
      bgGradient: "from-pink-500/10 to-rose-400/10",
    },
    {
      name: "Pay-Per-Click Advertising",
      description:
        "Google Ads, Meta Ads, and other paid ad management for high-converting traffic.",
      icon: <FaAd className="h-6 w-6" />,
      cta: "Increase leads",
      gradient: "from-orange-500 to-yellow-400",
      bgGradient: "from-orange-500/10 to-yellow-400/10",
    },
    {
      name: "Content Marketing",
      description:
        "Blog writing, press releases, video content, and infographics to attract and retain audiences.",
      icon: <FaPenFancy className="h-6 w-6" />,
      cta: "See samples",
      gradient: "from-indigo-500 to-purple-400",
      bgGradient: "from-indigo-500/10 to-purple-400/10",
    },
    {
      name: "Email Marketing Automation",
      description:
        "Bulk mailing, automated follow-ups, and personalized email campaigns.",
      icon: <FaEnvelope className="h-6 w-6" />,
      cta: "Automate now",
      gradient: "from-red-500 to-pink-400",
      bgGradient: "from-red-500/10 to-pink-400/10",
    },
    {
      name: "Custom Software Development",
      description:
        "ERP, CRM, inventory, and custom SaaS solutions tailored to business needs.",
      icon: <FaLaptopCode className="h-6 w-6" />,
      cta: "Request demo",
      gradient: "from-teal-500 to-cyan-400",
      bgGradient: "from-teal-500/10 to-cyan-400/10",
    },
    {
      name: "Cloud Services & Hosting",
      description:
        "Secure cloud storage, AWS/Azure management, and domain/hosting support.",
      icon: <FaCloud className="h-6 w-6" />,
      cta: "Migrate now",
      gradient: "from-blue-600 to-indigo-500",
      bgGradient: "from-blue-600/10 to-indigo-500/10",
    },
    {
      name: "Data Analytics & BI",
      description:
        "Visual dashboards, sales insights, and predictive analytics for better decisions.",
      icon: <FaChartBar className="h-6 w-6" />,
      cta: "Analyze data",
      gradient: "from-emerald-500 to-teal-400",
      bgGradient: "from-emerald-500/10 to-teal-400/10",
    },
    {
      name: "Cybersecurity & Protection",
      description:
        "Firewall setup, penetration testing, encryption, endpoint protection, and GDPR compliance.",
      icon: <FaShieldAlt className="h-6 w-6" />,
      cta: "Secure assets",
      gradient: "from-red-600 to-orange-500",
      bgGradient: "from-red-600/10 to-orange-500/10",
    },
    {
      name: "UI/UX Design",
      description:
        "Attractive, user-friendly design for websites and mobile apps with wireframes and prototypes.",
      icon: <FaPaintBrush className="h-6 w-6" />,
      cta: "View portfolio",
      gradient: "from-violet-500 to-purple-400",
      bgGradient: "from-violet-500/10 to-purple-400/10",
    },
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

  return (
    <div className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <div className="inline-flex items-center gap-4 px-0 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
            <span className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-semibold">
              Our Services
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Comprehensive
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            End-to-end technology and marketing services designed to elevate
            your business in the digital ecosystem.
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
                className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-all duration-500`}
              ></div>

              {/* Main Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-8 h-full hover:bg-slate-800/80 transition-all duration-500 group-hover:border-slate-600/50 group-hover:scale-105">
                {/* Background Pattern */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300">
                    {service.name}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${service.gradient} text-white font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 shadow-lg`}
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
                  </button>
                </div>

                {/* Hover Particles */}
                {hoveredCard === index && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${service.gradient} rounded-full animate-ping`}
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 1}s`,
                          animationDuration: "2s",
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
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            <span className="flex items-center gap-3">
              Get Started Today
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
        </div>
      </div>
    </div>
  );
};

export default Services;
