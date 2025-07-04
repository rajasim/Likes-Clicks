import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Shield,
} from "lucide-react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [particles, setParticles] = useState([]);

  const slides = [
    {
      title: "Cloud Solutions for Scalable Growth",
      description:
        "Enterprise-grade cloud infrastructure tailored to your business needs with 99.9% uptime guarantee",
      cta: "Explore Cloud Services",
      badge: "New",
      icon: Sparkles,
      gradient: "from-blue-600 via-purple-600 to-indigo-800",
      accentColor: "from-blue-500 to-purple-600",
      bgImage:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "AI & Machine Learning Services",
      description:
        "Transform your business with our cutting-edge AI solutions powered by advanced algorithms",
      cta: "Discover AI Solutions",
      badge: "Featured",
      icon: Zap,
      gradient: "from-emerald-600 via-teal-600 to-cyan-800",
      accentColor: "from-emerald-500 to-teal-600",
      bgImage:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1920&q=80",
    },
    {
      title: "Cybersecurity You Can Trust",
      description:
        "Protect your digital assets with our comprehensive security solutions and 24/7 monitoring",
      cta: "Secure Your Business",
      badge: "Popular",
      icon: Shield,
      gradient: "from-orange-600 via-red-600 to-pink-800",
      accentColor: "from-orange-500 to-red-600",
      bgImage:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80",
    },
  ];

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.5 + 0.3,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 10,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${currentSlideData.bgImage})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} opacity-70`}
        ></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-white/30 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `float ${particle.duration}s ease-in-out infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 border border-white/10 rounded-lg rotate-45 animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-16 h-16 border border-white/10 rounded-full animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="text-center px-6 max-w-5xl mx-auto">
          <div className="mb-8">
            <span
              className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r ${currentSlideData.accentColor} rounded-full shadow-lg`}
            >
              <IconComponent className="w-4 h-4" />
              {currentSlideData.badge}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              {currentSlideData.title}
            </span>
          </h1>

          <p className="text-xl text-gray-200 mb-10">
            {currentSlideData.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              className={`group relative px-8 py-4 bg-gradient-to-r ${currentSlideData.accentColor} text-white font-semibold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105`}
            >
              <span className="relative flex items-center gap-2">
                {currentSlideData.cta}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
        <button
          onClick={prevSlide}
          className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-white/30"
            }`}
          ></div>
        ))}
        <button
          onClick={nextSlide}
          className="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
