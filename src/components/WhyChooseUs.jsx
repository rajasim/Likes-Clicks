import { useState, useEffect, useRef } from "react";
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
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const strengths = [
    {
      id: 1,
      title: "Lightning-Fast Delivery",
      description:
        "Accelerated development cycles using agile methodologies and cutting-edge automation tools",
      icon: <FaRocket className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/10",
      glowColor: "shadow-orange-500/25",
    },
    {
      id: 2,
      title: "Enterprise-Grade Scalability",
      description:
        "Cloud-native architectures designed to handle millions of users with zero downtime",
      icon: <FaChartLine className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10",
      glowColor: "shadow-green-500/25",
    },
    {
      id: 3,
      title: "Flexible Investment Models",
      description:
        "Risk-free engagement with milestone-based payments and transparent pricing",
      icon: <FaWallet className="w-6 h-6" />,
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-500/10 to-orange-500/10",
      glowColor: "shadow-yellow-500/25",
    },
    {
      id: 4,
      title: "24/7 Premium Support",
      description:
        "Dedicated DevOps team monitoring your systems with proactive issue resolution",
      icon: <FaHeadset className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10",
      glowColor: "shadow-blue-500/25",
    },
    {
      id: 5,
      title: "Military-Grade Security",
      description:
        "Advanced security protocols with compliance certifications for regulated industries",
      icon: <FaShieldAlt className="w-6 h-6" />,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-500/10 to-pink-500/10",
      glowColor: "shadow-red-500/25",
    },
    {
      id: 6,
      title: "AI-Powered Innovation",
      description:
        "Next-generation solutions leveraging machine learning and artificial intelligence",
      icon: <FaLightbulb className="w-6 h-6" />,
      gradient: "from-purple-500 to-indigo-500",
      bgGradient: "from-purple-500/10 to-indigo-500/10",
      glowColor: "shadow-purple-500/25",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            setTimeout(() => {
              setVisibleCards((prev) => new Set([...prev, index]));
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll(".strength-card");
    cards?.forEach((card) => observer.observe(card));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.01}px`,
            top: `${mousePosition.y * 0.01}px`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 3px 3px, rgba(255,255,255,0.03) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mx-auto max-w-4xl text-center mb-20">
          <div className="inline-flex items-center gap-4 px-0 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
            <span className="text-sm uppercase tracking-[0.2em] text-blue-400 font-semibold">
              Our Advantages
            </span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
          </div>

          <h2 className="text-5xl sm:text-6xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
              Your Strategic
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              Technology Partner
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We don't just build software—we architect digital experiences that
            scale, secure, and revolutionize your business landscape.
          </p>
        </div>

        {/* Strengths Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {strengths.map((strength, index) => (
            <div
              key={strength.id}
              data-index={index}
              className={`strength-card group relative transform transition-all duration-700 ${
                visibleCards.has(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-16 opacity-0"
              }`}
              onMouseEnter={() => setHoveredCard(strength.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${strength.gradient} rounded-2xl blur opacity-0 group-hover:opacity-40 transition-all duration-500`}
              ></div>

              {/* Main Card */}
              <div className="relative bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl p-8 h-full hover:bg-slate-800/80 transition-all duration-500 group-hover:border-slate-600/50 group-hover:scale-105">
                {/* Background Pattern */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${strength.bgGradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Floating Icon Background */}
                <div className="absolute top-4 right-4 w-16 h-16 rounded-xl bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${strength.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${strength.glowColor} shadow-lg`}
                  >
                    <div className="text-white">{strength.icon}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                    {strength.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {strength.description}
                  </p>

                  {/* Check Mark */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <FaCheckCircle className={`w-5 h-5 text-green-400`} />
                  </div>
                </div>

                {/* Hover Particles */}
                {hoveredCard === strength.id && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${strength.gradient} rounded-full animate-ping`}
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                          animationDelay: `${Math.random() * 0.5}s`,
                          animationDuration: "1.5s",
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          {/* CTA Glow Background */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-20 animate-pulse"></div>

          {/* Main CTA Container */}
          <div className="relative bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-xl p-12 text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 rounded-xl"></div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
                  Ready to Transform
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                  Your Business?
                </span>
              </h3>

              <p className="text-slate-300 mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
                Let's discuss your project and create something extraordinary
                together. Your digital transformation starts here.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <span className="relative flex items-center gap-3">
                    Start Your Project
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>

                <button className="group px-10 py-4 text-white font-bold text-lg border-2 border-white/20 hover:border-white/40 rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/5">
                  <span className="flex items-center gap-3">
                    View Our Portfolio
                    <svg
                      className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* CTA Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full animate-pulse"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
