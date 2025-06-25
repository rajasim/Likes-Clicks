import { useState, useEffect } from "react";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div
          className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400/15 to-blue-600/15 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-32 sm:py-40 lg:py-48">
        <div className="mx-auto max-w-6xl">
          {/* Announcement Badge */}
          <div
            className={`mb-12 flex justify-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full blur opacity-60 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
              <div className="relative rounded-full px-6 py-2 text-sm font-medium text-white bg-slate-900/90 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-300">
                🚀 Now offering AI integration services
                <span className="ml-2 text-cyan-400">→</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="text-center">
            <div
              className={`mb-8 transform transition-all duration-1000 delay-200 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="inline-flex items-center gap-4 px-0">
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                <span className="text-sm uppercase tracking-[0.2em] text-cyan-400 font-semibold">
                  Digital Innovation
                </span>
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              </div>
            </div>

            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 transform transition-all duration-1000 delay-400 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <span className="block bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent leading-tight">
                Transforming
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight animate-pulse">
                Digital Dreams
              </span>
              <span className="block text-white/90 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mt-2">
                Into Reality
              </span>
            </h1>

            <p
              className={`mt-8 text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto transform transition-all duration-1000 delay-600 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              We craft extraordinary digital experiences that push boundaries.
              From innovative concepts to flawless execution, we bring your
              vision to life with cutting-edge technology.
            </p>

            {/* CTA Buttons */}
            <div
              className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 transform transition-all duration-1000 delay-800 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <span className="relative flex items-center gap-2">
                  Start Your Project
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

              <button className="group px-8 py-4 text-white font-semibold text-lg border-2 border-white/20 hover:border-white/40 rounded-full transition-all duration-300 backdrop-blur-sm hover:bg-white/5">
                <span className="flex items-center gap-2">
                  View Our Work
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

            {/* Stats Section */}
            <div
              className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto transform transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              {[
                { number: "500+", label: "Projects Delivered" },
                { number: "99%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support Available" },
                { number: "5+", label: "Years Experience" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
