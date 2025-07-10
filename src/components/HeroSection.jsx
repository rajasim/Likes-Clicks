import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Code,
  Smartphone,
  Cpu,
  Globe,
  Layout,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const [particles, setParticles] = useState([]);

  const slides = [
    {
      title: "Web Development Solutions",
      description:
        "Custom-built websites and web applications with modern frameworks for exceptional performance and user experience",
      cta: "Explore Web Services",
      badge: "Popular",
      icon: Code,
      gradient: "from-blue-600 via-indigo-600 to-purple-800",
      accentColor: "from-blue-500 to-indigo-600",
      bgImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80",
      link:"/webdev"
    },
    {
      title: "Mobile App Development",
      description:
        "High-performance iOS and Android applications built with native and cross-platform technologies",
      cta: "View App Portfolio",
      badge: "Hot",
      icon: Smartphone,
      gradient: "from-green-600 via-teal-600 to-cyan-800",
      accentColor: "from-green-500 to-teal-600",
      bgImage:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1920&q=80",
      link:"/mobileapp"
    },
    {
      title: "Full-Stack Development",
      description:
        "Complete solutions with robust backends and intuitive frontends for seamless digital experiences",
      cta: "See Our Work",
      badge: "Featured",
      icon: Cpu,
      gradient: "from-purple-600 via-pink-600 to-red-800",
      accentColor: "from-purple-500 to-pink-600",
      bgImage:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1920&q=80",
      link:"/services"
    },
    {
      title: "Progressive Web Apps",
      description:
        "Lightning-fast web applications with native app-like functionality and offline capabilities",
      cta: "Learn More",
      badge: "New",
      icon: Globe,
      gradient: "from-orange-600 via-amber-600 to-yellow-800",
      accentColor: "from-orange-500 to-amber-600",
      bgImage:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1920&q=80",
      link:"/services"
    },
    {
      title: "UI/UX Development",
      description:
        "Beautiful, intuitive interfaces crafted with user psychology and conversion optimization in mind",
      cta: "View Designs",
      badge: "Trending",
      icon: Layout,
      gradient: "from-red-600 via-pink-600 to-rose-800",
      accentColor: "from-red-500 to-pink-600",
      bgImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1920&q=80",
      link:"/services"
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
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];
  const IconComponent = currentSlideData.icon;

  // Animation variants
  const textVariants = {
    enter: (direction) => ({
      opacity: 0,
      y: direction > 0 ? 50 : -50,
    }),
    center: {
      opacity: 1,
      y: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction > 0 ? -50 : 50,
    }),
  };

  const transition = {
    duration: 0.8,
    ease: [0.32, 0.72, 0, 1],
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background with smooth transition */}
      <AnimatePresence custom={direction}>
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${currentSlideData.bgImage})`,
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${currentSlideData.gradient} opacity-70`}
          ></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>
      </AnimatePresence>

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

      {/* Main Content with smooth transitions */}
      <div className="relative h-full flex items-center justify-center z-10">
        <div className="text-center px-6 max-w-5xl mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={`badge-${currentSlide}`}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="mb-8"
            >
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r ${currentSlideData.accentColor} rounded-full shadow-lg`}
              >
                <IconComponent className="w-4 h-4" />
                {currentSlideData.badge}
              </span>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence custom={direction} mode="wait">
            <motion.h1
              key={`title-${currentSlide}`}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {currentSlideData.title}
              </span>
            </motion.h1>
          </AnimatePresence>

          <AnimatePresence custom={direction} mode="wait">
            <motion.p
              key={`desc-${currentSlide}`}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ ...transition, delay: 0.1 }}
              className="text-xl text-gray-200 mb-10"
            >
              {currentSlideData.description}
            </motion.p>
          </AnimatePresence>

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={`button-${currentSlide}`}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ ...transition, delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <button
                className={`group relative px-8 py-4 bg-gradient-to-r ${currentSlideData.accentColor} text-white font-semibold rounded-xl shadow-2xl transition-all duration-300 hover:scale-105`}
              >
                <span className="relative flex items-center gap-2">
                  {currentSlideData.cta}
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </motion.div>
          </AnimatePresence>
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
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white w-6" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
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
