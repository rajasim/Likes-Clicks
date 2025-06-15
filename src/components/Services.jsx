import {
  FaCode,
  FaMobileAlt,
  FaSearch,
  FaHashtag,
  FaAd,
  FaPenFancy,
  FaEnvelope,
  FaLaptopCode,
  FaCloud,
  FaChartBar,
  FaShieldAlt,
  FaPaintBrush,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      name: "Website Development",
      description:
        "Custom websites for businesses, schools, e-commerce, and more using modern frameworks.",
      icon: <FaCode className="h-5 w-5" />,
      cta: "Get started",
    },
    {
      name: "Mobile App Development",
      description:
        "Android and iOS app development with responsive design and user-friendly interfaces.",
      icon: <FaMobileAlt className="h-5 w-5" />,
      cta: "Learn more",
    },
    {
      name: "Search Engine Optimization (SEO)",
      description:
        "On-page and off-page SEO to improve website visibility and ranking.",
      icon: <FaSearch className="h-5 w-5" />,
      cta: "Boost rankings",
    },
    {
      name: "Social Media Marketing (SMM)",
      description:
        "Campaigns and content strategies for platforms like Instagram, Facebook, and LinkedIn.",
      icon: <FaHashtag className="h-5 w-5" />,
      cta: "Grow followers",
    },
    {
      name: "Pay-Per-Click Advertising (PPC)",
      description:
        "Google Ads, Meta Ads, and other paid ad management for high-converting traffic.",
      icon: <FaAd className="h-5 w-5" />,
      cta: "Increase leads",
    },
    {
      name: "Content Marketing",
      description:
        "Blog writing, press releases, video content, and infographics to attract and retain audiences.",
      icon: <FaPenFancy className="h-5 w-5" />,
      cta: "See samples",
    },
    {
      name: "Email Marketing Automation",
      description:
        "Bulk mailing, automated follow-ups, and personalized email campaigns.",
      icon: <FaEnvelope className="h-5 w-5" />,
      cta: "Automate now",
    },
    {
      name: "Custom Software Development",
      description:
        "ERP, CRM, inventory, and custom SaaS solutions tailored to business needs.",
      icon: <FaLaptopCode className="h-5 w-5" />,
      cta: "Request demo",
    },
    {
      name: "Cloud Services & Hosting",
      description:
        "Secure cloud storage, AWS/Azure management, and domain/hosting support.",
      icon: <FaCloud className="h-5 w-5" />,
      cta: "Migrate now",
    },
    {
      name: "Data Analytics & Business Intelligence",
      description:
        "Visual dashboards, sales insights, and predictive analytics for better decisions.",
      icon: <FaChartBar className="h-5 w-5" />,
      cta: "Analyze data",
    },
    {
      name: "Cybersecurity & Data Protection",
      description:
        "Firewall setup, penetration testing, encryption, endpoint protection, and GDPR compliance.",
      icon: <FaShieldAlt className="h-5 w-5" />,
      cta: "Secure assets",
    },
    {
      name: "UI/UX Design",
      description:
        "Attractive, user-friendly design for websites and mobile apps with wireframes and prototypes.",
      icon: <FaPaintBrush className="h-5 w-5" />,
      cta: "View portfolio",
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
              Our Services
            </span>
            <span className="w-12 h-px bg-blue-600"></span>
          </div>
          <h2 className="text-4xl font-light tracking-tight text-gray-900">
            Comprehensive Digital Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            End-to-end technology and marketing services to grow your business
            in the digital world.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="group relative bg-white rounded-xl border border-gray-200 p-8 hover:border-blue-300 transition-all duration-300"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-medium text-gray-900 mb-3">
                  {service.name}
                </h3>

                <p className="text-gray-600 mb-6">{service.description}</p>

                {/* <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1.5 group-hover:gap-2 transition-all duration-300"
                >
                  {service.cta}
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
