import {
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaCloud,
  FaMicrochip,
  FaSyncAlt,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      name: "Custom Web Development",
      description:
        "Tailored web applications built with modern frameworks for optimal performance and scalability.",
      icon: <FaCode className="h-5 w-5" />,
      cta: "View web projects",
    },
    {
      name: "Mobile App Development",
      description:
        "iOS and Android applications that deliver seamless, native-quality user experiences.",
      icon: <FaMobileAlt className="h-5 w-5" />,
      cta: "See mobile work",
    },
    {
      name: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces crafted to drive engagement and improve conversion.",
      icon: <FaPaintBrush className="h-5 w-5" />,
      cta: "View design portfolio",
    },
    {
      name: "Cloud Solutions",
      description:
        "Scalable cloud architecture and SaaS platforms with robust infrastructure.",
      icon: <FaCloud className="h-5 w-5" />,
      cta: "Explore cloud services",
    },
    {
      name: "AI Integration",
      description:
        "Intelligent automation and machine learning features to enhance your operations.",
      icon: <FaMicrochip className="h-5 w-5" />,
      cta: "Discover AI capabilities",
    },
    {
      name: "Digital Transformation",
      description:
        "Comprehensive modernization of legacy systems and business processes.",
      icon: <FaSyncAlt className="h-5 w-5" />,
      cta: "Begin transformation",
    },
  ];

  return (
    <div className="relative py-15 bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-50/10 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center mb-20">
          <div className="inline-flex items-center gap-2 px-0 mb-8">
            <span className="w-12 h-px bg-blue-600"></span>
            <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">
              Our Expertise
            </span>
            <span className="w-12 h-px bg-blue-600"></span>
          </div>
          <h2 className="text-4xl font-light tracking-tight text-gray-900">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver end-to-end technology services designed to elevate your
            business and drive measurable results.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="group relative bg-white rounded-xl border border-gray-200 p-8 hover:border-blue-300 transition-all duration-300"
            >
              {/* Icon with subtle gradient background */}
              {/* <div className="absolute top-8 right-8 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                {" "}
              </div> */}

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {service.name}
                </h3>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group-hover:gap-2 transition-all duration-300"
                >
                  {service.cta}
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
