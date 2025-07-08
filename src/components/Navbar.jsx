import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Smartphone,
  Globe,
  Cloud,
  Brain,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRefs = useRef({});

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
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#",
      dropdown: [
        {
          name: "Custom Software",
          href: "/services",
          icon: Code,
          description: "Tailored solutions for your business",
        },
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
          name: "AI Solutions",
          href: "/ai",
          icon: Brain,
          description: "Intelligent automation & ML",
        },
        // {
        //   name: "Cloud Architecture",
        //   href: "/services/cloud",
        //   icon: Cloud,
        //   description: "Scalable cloud infrastructure",
        // },
      ],
    },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-700 shadow-lg"
          : "bg-gray-900/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <div className="relative">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">
                Likes & Clicks
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                ref={(el) => (dropdownRefs.current[item.name] = el)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center text-sm font-medium text-gray-200 hover:text-white transition-all duration-200 px-3 py-2 rounded-lg ${
                        activeDropdown === item.name
                          ? "text-white bg-gray-800"
                          : "hover:bg-gray-800/50"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1.5 w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-gray-800 backdrop-blur-md rounded-xl border border-gray-700 shadow-xl overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible translate-y-2"
                      }`}
                    >
                      <div className="p-1">
                        {item.dropdown.map((subItem, index) => {
                          const IconComponent = subItem.icon;
                          return (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="group flex items-center p-3 rounded-lg hover:bg-gray-700 transition-all duration-200"
                            >
                              <div className="p-2 bg-gray-700 rounded-lg mr-3 group-hover:bg-indigo-500 transition-all duration-200">
                                <IconComponent className="w-5 h-5 text-indigo-300 group-hover:text-white" />
                              </div>
                              <div className="flex-1">
                                <div className="text-white font-medium group-hover:text-indigo-300 transition-colors">
                                  {subItem.name}
                                </div>
                                <div className="text-gray-400 text-sm">
                                  {subItem.description}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all duration-200" />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`text-sm font-medium text-gray-200 hover:text-white transition-all duration-200 px-3 py-2 rounded-lg ${
                      window.location.pathname === item.href
                        ? "text-white bg-gray-800"
                        : "hover:bg-gray-800/50"
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Started
            </a>
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
                    className="w-full flex justify-between items-center py-3 text-gray-200 hover:text-white font-medium transition-colors"
                  >
                    {item.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
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
                    <div className="pl-4 pt-2 space-y-1">
                      {item.dropdown.map((subItem) => {
                        const IconComponent = subItem.icon;
                        return (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center py-2 text-gray-400 hover:text-indigo-300 transition-colors"
                          >
                            <IconComponent className="w-4 h-4 mr-2 text-indigo-400" />
                            {subItem.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className={`block py-3 text-gray-200 hover:text-white font-medium transition-colors ${
                    window.location.pathname === item.href
                      ? "text-indigo-300"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}

          <a
            href="/contact"
            className="block mt-4 w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-200"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
