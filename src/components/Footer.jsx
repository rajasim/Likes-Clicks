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

const Footer = () => {
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
          <div>
            <h4 className="text-lg font-medium text-white mb-6 relative pb-4">
              <span className="absolute bottom-0 left-0 h-px w-12 bg-blue-400"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "Services",
                "Projects",
                "About Us",
                // "Team",
                // "Blog",
                // "Careers",
              ].map((item) => (
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
          </div>

          {/* Global offices */}
          <div>
            <h4 className="text-lg font-medium text-white mb-6 relative pb-4">
              <span className="absolute bottom-0 left-0 h-px w-12 bg-blue-400"></span>
              Our Offices
            </h4>
            <ul className="space-y-5">
              {[
                {
                  city: "India",
                  address:
                    "20, Saraf Kaskar Estate, Jogeshwari, Mumbai, India.",
                  time: "Mon-Fri: 9AM-6PM EST",
                },
                {
                  city: "UAE",
                  address: "197, Discovery Garden, Dubai, United Arab Emirates",
                  time: "Mon-Fri: 9AM-6PM GMT",
                },
                {
                  city: "Australia",
                  address:
                    "106, St Andrew Street, Kuraby, Brisbane, Australia.",
                  time: "Mon-Fri: 9AM-6PM SGT",
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

          {/* Newsletter */}
          {/* <div>
            <h4 className="text-lg font-medium text-white mb-6 relative pb-4">
              <span className="absolute bottom-0 left-0 h-px w-12 bg-blue-400"></span>
              Newsletter
            </h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex mb-6">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-r-lg transition-colors duration-300 flex items-center"
              >
                <FiSend className="h-5 w-5" />
              </button>
            </form>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-blue-400 mr-4" />
                <a
                  href="tel:+18005551234"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  +1 (800) 555-1234
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-4" />
                <a
                  href="mailto:info@digitalnexus.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  info@digitalnexus.com
                </a>
              </div>
            </div>
          </div> */}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Digital Nexus. All rights reserved.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookies",
              "Sitemap",
              "GDPR",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-500 hover:text-blue-400 text-sm transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
