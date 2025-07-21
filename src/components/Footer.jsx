import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useState } from "react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Contact Form Submission from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;

    window.location.href = `mailto:info@digitalnexus.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Optionally reset the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <footer className="relative bg-gray-900 pt-28 pb-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-blue-900/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <span className="h-px w-8 bg-blue-400"></span>
              <span className="text-xs uppercase tracking-widest text-blue-400 font-medium px-4">
                Digital Nexus
              </span>
              <span className="h-px w-8 bg-blue-400"></span>
            </div>
            <h3 className="text-3xl font-light text-white mb-6 leading-tight">
              Elevating Brands Through{" "}
              <span className="text-blue-400">Digital Excellence</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-lg">
              We craft transformative digital experiences that drive growth,
              engagement, and measurable results for forward-thinking businesses
              worldwide.
            </p>
            <div className="flex space-x-3">
              {[
                {
                  icon: <FaFacebookF className="h-4 w-4" />,
                  color: "hover:bg-blue-600",
                },
                {
                  icon: <FaTwitter className="h-4 w-4" />,
                  color: "hover:bg-blue-400",
                },
                {
                  icon: <FaLinkedinIn className="h-4 w-4" />,
                  color: "hover:bg-blue-700",
                },
                {
                  icon: <FaInstagram className="h-4 w-4" />,
                  color: "hover:bg-pink-600",
                },
                {
                  icon: <FaYoutube className="h-4 w-4" />,
                  color: "hover:bg-red-600",
                },
                {
                  icon: <FaPinterestP className="h-4 w-4" />,
                  color: "hover:bg-red-700",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`bg-gray-400 p-3 rounded-full transition-all duration-300 ${social.color} hover:text-white`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-lg font-medium text-white mb-6 relative pb-4">
              <span className="absolute bottom-0 left-0 h-px w-12 bg-blue-400"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Services", "Projects", "About Us"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors flex items-center group"
                  >
                    <span className="h-1 w-1 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Global offices */}
          <div>
            <h4 className="text-lg font-medium text-white mb-6 relative pb-4">
              <span className="absolute bottom-0 left-0 h-px w-12 bg-blue-400"></span>
              Our Offices
            </h4>
            <ul className="space-y-5">
              {[
                {
                  city: "Australia",
                  address:
                    "106, St Andrew Street, Kuraby, Brisbane, Australia.",
                  time: "Mon-Fri: 9AM-6PM SGT",
                },
                {
                  city: "UAE",
                  address: "197, Discovery Garden, Dubai, United Arab Emirates",
                  time: "Mon-Fri: 9AM-6PM GMT",
                },

                {
                  city: "India",
                  address:
                    "20, Saraf Kaskar Estate, Jogeshwari, Mumbai, India.",
                  time: "Mon-Fri: 9AM-6PM EST",
                },
              ].map((office, index) => (
                <li key={index} className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-400 mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h5 className="font-medium text-white">{office.city}</h5>
                    <p className="text-gray-400 text-sm mt-1 whitespace-pre-line">
                      {office.address}
                    </p>
                    <p className="text-gray-500 text-xs mt-1">{office.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="text-lg font-medium text-white mb-6 relative pb-4">
              <span className="absolute bottom-0 left-0 h-px w-12 bg-blue-400"></span>
              Contact Us
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center w-full"
              >
                <span>Send Message</span>
                <FiSend className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Digital Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
