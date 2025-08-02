import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Smartphone,
  Globe,
  ArrowRight,
  Shield,
  Zap,
  Cpu,
  BookOpen,
  Mail,
  Home,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRefs = useRef({});
  const location = useLocation();

  // Close all menus when location changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInsideAnyDropdown = Object.values(dropdownRefs.current).some(
        (ref) => ref && ref.contains(event.target)
      );
      if (!clickedInsideAnyDropdown) setActiveDropdown(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const navItems = [
    {
      name: "Home",
      href: "/",
      icon: Home,
    },
    {
      name: "Services",
      href: "#",
      icon: Zap, // Using Zap for services as a general icon
      dropdown: [
        {
          name: "Web Development",
          href: "/webdev",
          icon: Globe,
          description: "Modern, responsive websites",
        },
        {
          name: "Mobile Apps",
          href: "/mobileapp",
          icon: Smartphone,
          description: "iOS and Android applications",
        },
        {
          name: "CyberSecurity",
          href: "/cybersecurity",
          icon: Shield,
          description: "Security solutions for your business",
        },
        {
          name: "Marketing Automation",
          href: "/MarketingAutomation",
          icon: Zap,
          description: "Streamline your marketing efforts",
        },
        {
          name: "AI Development",
          href: "/AIDevelopment",
          icon: Cpu,
          description: "Custom AI solutions",
        },
      ],
    },
    {
      name: "About",
      href: "/about",
      icon: BookOpen,
    },
    {
      name: "Contact",
      href: "/contact",
      icon: Mail,
    },
  ];

  return (
    <header
      className={`sticky w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-blue-500/84 border-b border-gray-700 shadow-lg"
          : "bg-blue-500"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="relative">
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-50 to-white bg-clip-text text-transparent">
                Likes & Clicks
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center text-lg space-x-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative text-lg"
                ref={(el) => (dropdownRefs.current[item.name] = el)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center p-2 text-xl font-medium text-gray-200 hover:text-white transition-all duration-200 px-4  rounded-lg ${
                        activeDropdown === item.name
                          ? "text-white bg-blue-600/30"
                          : "hover:bg-blue-600/20"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-2 w-5 h-5 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-80 bg-gray-800 backdrop-blur-md rounded-xl border border-gray-700 shadow-xl overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                      }`}
                    >
                      <div className="p-1.5">
                        {item.dropdown.map((subItem) => {
                          const IconComponent = subItem.icon;
                          return (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="group flex items-center p-2 rounded-lg hover:bg-gray-700/80 transition-all duration-200"
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="p-2.5 bg-gray-700 rounded-lg mr-3 group-hover:bg-indigo-500 transition-all duration-200">
                                <IconComponent className="w-6 h-6 text-indigo-300 group-hover:text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="text-lg text-white font-medium group-hover:text-indigo-300 transition-colors">
                                  {subItem.name}
                                </div>
                                <div className="text-gray-400 text-base">
                                  {subItem.description}
                                </div>
                              </div>
                              <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all duration-200" />
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-lg font-medium text-gray-200 hover:text-white transition-all duration-200 px-4 py-2.5 rounded-lg ${
                      location.pathname === item.href
                        ? "text-white bg-blue-600/30"
                        : "hover:bg-blue-600/20"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-7 py-2.5 text-lg bg-gradient-to-r from-neutral-800 to-black text-white font-medium rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-200 hover:text-white hover:bg-gray-800 focus:outline-none transition-all duration-200"
              aria-label="Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden bg-gray-900 backdrop-blur-md border-t border-gray-800 transition-all duration-300 ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-2">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="border-b border-gray-800 last:border-0 pb-2 last:pb-0"
            >
              {item.dropdown ? (
                <div>
                  <button
                    onClick={() => toggleDropdown(`mobile-${item.name}`)}
                    className="w-full flex justify-between items-center py-3 text-lg text-gray-200 hover:text-white font-medium transition-colors"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        activeDropdown === `mobile-${item.name}`
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeDropdown === `mobile-${item.name}`
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 pt-2 space-y-2">
                      {item.dropdown.map((subItem) => {
                        const IconComponent = subItem.icon;
                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center py-2.5 text-lg text-gray-400 hover:text-indigo-300 transition-colors"
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            <IconComponent className="w-5 h-5 mr-3 text-indigo-400" />
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`block py-3 text-lg text-gray-200 hover:text-white font-medium transition-colors ${
                    location.pathname === item.href ? "text-indigo-300" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <Link
            to="/contact"
            className="block mt-4 w-full text-center px-6 py-3 text-lg bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
