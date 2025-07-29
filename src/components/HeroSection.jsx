import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Globe,
  Smartphone,
  Megaphone,
  Shield,
  Cpu,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();

  const slides = [
    {
      title: "Web Development",
      subtitle: "Build to Impress, Designed to Perform",
      description: "Responsive websites that attract, engage, and convert.",
      cta: "Explore Web Development",
      badge: "Popular",
      icon: Globe,
      gradient: "from-blue-200",
      accentColor: "from-blue-500 to-indigo-600",
      bgImage:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1920&q=80",
      link: "/webdev",
    },
    {
      title: "Mobile Apps",
      subtitle: "Apps That Deliver, Anywhere",
      description: "iOS, Android & cross-platform apps that scale with you.",
      cta: "View App Services",
      badge: "Hot",
      icon: Smartphone,
      gradient: "from-purple-200",
      accentColor: "from-purple-500 to-pink-600",
      bgImage:
        "https://images.unsplash.com/photo-1514996550219-62672472d03b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
      link: "/mobileapp",
    },
    {
      title: "Marketing & Automation",
      subtitle: "Turn Clicks Into Customers",
      description: "SEO, email flows & smart funnels that grow your brand.",
      cta: "See Marketing Solutions",
      badge: "Featured",
      icon: Megaphone,
      gradient: "from-orange-200",
      accentColor: "from-orange-500 to-amber-600",
      bgImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1920&q=80",
      link: "/MarketingAutomation",
    },
    {
      title: "Cybersecurity",
      subtitle: "Stay Secure, Stay Ahead",
      description: "Modern protection against threats, breaches, and downtime.",
      cta: "Learn About Security",
      badge: "New",
      icon: Shield,
      gradient: "from-green-200",
      accentColor: "from-green-500 to-teal-600",
      bgImage:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1920&q=80",
      link: "/cybersecurity",
    },
    {
      title: "AI Development",
      subtitle: "Smarter Tools. Sharper Results.",
      description: "Custom AI models, chatbots, and automation workflows.",
      cta: "Explore AI Capabilities",
      badge: "Trending",
      icon: Cpu,
      gradient: "from-red-200",
      accentColor: "from-red-500 to-pink-600",
      bgImage:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1920&q=80",
      link: "/AIDevelopment",
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

  const redirectTo = (link) => {
    navigate(link);
  };

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

      {/* Left Navigation Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="relative h-full flex items-center justify-center z-10">
        <div className="text-center px-6 max-w-5xl mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={`title-group-${currentSlide}`}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                  {currentSlideData.title}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-white mb-6">
                {currentSlideData.subtitle}
              </h2>
            </motion.div>
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
              className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
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
                onClick={() => redirectTo(currentSlideData.link)}
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

      {/* Slide Indicators - moved to bottom center */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
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
      </div>
    </div>
  );
};

export default HeroSection;
