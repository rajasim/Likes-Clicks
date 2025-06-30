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
    <div className="relative min-h-[80vh] bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-xl opacity-50"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div>
              {/* Announcement Badge */}
              <div
                className={`mb-6 transform transition-all duration-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <div className="relative inline-block">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur opacity-30 group-hover:opacity-40 transition-all duration-300"></div>
                  <div className="relative rounded-full px-4 py-1.5 text-xs font-medium text-gray-700 bg-white/90 backdrop-blur-sm border border-gray-200 group-hover:border-gray-300 transition-all duration-200 shadow-xs">
                    🚀 AI integration services available
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 transform transition-all duration-700 delay-150 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <span className="block text-gray-900 leading-tight">
                  Transforming
                </span>
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                  Digital Dreams
                </span>
              </h1>

              <p
                className={`mt-4 text-lg leading-relaxed text-gray-600 max-w-lg transform transition-all duration-700 delay-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                We craft extraordinary digital experiences with cutting-edge
                technology.
              </p>

              {/* CTA Buttons */}
              <div
                className={`mt-8 flex flex-wrap gap-4 transform transition-all duration-700 delay-450 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium text-base rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-md hover:shadow-blue-500/20">
                  Start Your Project
                </button>
                <button className="px-6 py-3 text-gray-700 font-medium text-base border border-gray-300 rounded-lg transition-all duration-200 bg-white hover:bg-gray-50 shadow-sm">
                  View Our Work
                </button>
              </div>

              {/* Stats Section */}
              <div
                className={`mt-10 grid grid-cols-2 gap-6 max-w-xs transform transition-all duration-700 delay-600 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                {[
                  { number: "500+", label: "Projects" },
                  { number: "99%", label: "Satisfaction" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative h-full min-h-[300px] lg:min-h-[400px] transform transition-all duration-700 delay-200">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                {/* Replace with your actual image */}
                <img
                  src="/hero-image.jpg" // Replace with your image path
                  alt="Digital transformation"
                  className="w-full h-full object-cover"
                />
                {/* Fallback for Next.js Image component */}
                {/* <Image
                  src="/hero-image.jpg"
                  alt="Digital transformation"
                  layout="fill"
                  objectFit="cover"
                  quality={90}
                  priority
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compact Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="w-5 h-8 border border-gray-300 rounded-full flex justify-center">
          <div className="w-0.5 h-2 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
