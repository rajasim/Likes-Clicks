import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-50/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="relative inline-flex items-center justify-center mb-6">
              <span className=" h-px w-8 bg-blue-600 left-0"></span>
              <span className="text-xs uppercase tracking-widest text-blue-600 font-light px-4">
                Likes & Clicks
              </span>
              <span className=" h-px w-8 bg-blue-600 right-0"></span>
            </div>
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              Transforming Businesses Through Technology
            </h3>
            <p className="text-gray-600 mb-8 max-w-md">
              We deliver cutting-edge digital solutions to help your business
              thrive in the modern marketplace.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FaFacebookF className="h-4 w-4 text-gray-600 hover:text-blue-600 transition-colors" />
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FaTwitter className="h-4 w-4 text-gray-600 hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FaLinkedinIn className="h-4 w-4 text-gray-600 hover:text-blue-700 transition-colors" />
              </a>
              <a
                href="#"
                className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <FaInstagram className="h-4 w-4 text-gray-600 hover:text-pink-600 transition-colors" />
              </a>
            </div>
          </div>

          {/* Global offices */}
          <div>
            <h4 className="text-lg font-light text-gray-900 mb-6 relative pb-4">
              <span className="absolute bottom-0 left-0 h-px w-12 bg-blue-600"></span>
              Our Offices
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h5 className="font-light text-gray-900">Dubai</h5>
                  <p className="text-gray-600 text-sm mt-1">
                    Plot No. 123, Dubai Marina Complex
                    <br />
                    Dubai, United Arab Emirates
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h5 className="font-light text-gray-900">Mumbai</h5>
                  <p className="text-gray-600 text-sm mt-1">
                    123, MG Road, Fort
                    <br />
                    Mumbai, Maharashtra 400001, India
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-blue-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h5 className="font-light text-gray-900">Sydney</h5>
                  <p className="text-gray-600 text-sm mt-1">
                    Level 1, 123 Pitt Street
                    <br />
                    Sydney NSW 2000, Australia
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-light text-gray-900 mb-6 relative pb-4">
              <span className="absolute bottom-0 left-0 h-px w-12 bg-blue-600"></span>
              Contact Us
            </h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <FaPhone className="text-blue-500 mr-4" />
                <a
                  href="tel:+917588995299"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  +91 75889 95299
                </a>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-blue-500 mr-4" />
                <a
                  href="mailto:aftabmaldar1201@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  aftabmaldar1201@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()}Likes & Clicks . All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 text-sm transition-colors duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
