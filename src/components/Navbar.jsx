import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Services",
      href: "#",
      dropdown: [
        { name: "Custom Software", href: "/services/custom" },
        { name: "Web Development", href: "/services/web" },
        { name: "Mobile Apps", href: "/services/mobile" },
        { name: "AI Solutions", href: "/services/ai" },
        { name: "Cloud Architecture", href: "/services/cloud" },
      ],
    },
    { name: "Work", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/blog" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm "
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <span className="ml-3 text-2xl font-light tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Likes and clicks
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative" ref={dropdownRef}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`flex items-center text-sm uppercase tracking-wider font-medium text-gray-700 hover:text-blue-600 transition-colors ${
                        activeDropdown === item.name ? "text-blue-600" : ""
                      }`}
                    >
                      {item.name}
                      <FiChevronDown
                        className={`ml-1.5 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-1/2 transform -translate-x-1/2 mt-6 w-56 bg-white rounded shadow-lg border border-gray-100 overflow-hidden"
                        >
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors border-b border-gray-100 last:border-0"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-sm uppercase tracking-wider font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}

            <a
              href="/contact"
              className="ml-4 px-6 py-2.5 rounded bg-blue-600 text-white text-sm uppercase tracking-wider font-medium hover:bg-blue-700 transition-all border border-blue-600 hover:border-blue-700"
            >
              Get in touch
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-gray-700 hover:text-blue-600 focus:outline-none transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-6 pt-2 pb-6 space-y-2 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-100 last:border-0"
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(`mobile-${item.name}`)}
                        className="w-full flex justify-between items-center py-4 text-sm uppercase tracking-wider text-gray-700 hover:text-blue-600"
                      >
                        {item.name}
                        <FiChevronDown
                          className={`ml-2 transition-transform ${
                            activeDropdown === `mobile-${item.name}`
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      {activeDropdown === `mobile-${item.name}` && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="pl-4 space-y-3 pb-3"
                        >
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="block py-2 text-sm text-gray-600 hover:text-blue-600"
                            >
                              {subItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block py-4 text-sm uppercase tracking-wider text-gray-700 hover:text-blue-600"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              <a
                href="/contact"
                className="block mt-4 w-full text-center px-6 py-3 rounded bg-blue-600 text-white text-sm uppercase tracking-wider font-medium border border-blue-600"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
