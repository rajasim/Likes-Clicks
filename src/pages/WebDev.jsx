import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Layout,
  Smartphone,
  Globe,
  Cpu,
  Zap,
  Database,
  GitBranch,
  Search,
  PenTool,
  CpuIcon,
  Rocket,
  ClipboardCheck,
  ChevronRight,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WebDev = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: "Custom Web Development",
      description:
        "Bespoke websites built with modern technologies to meet your specific business requirements.",
      highlights: [
        "React.js/Next.js applications",
        "TypeScript development",
        "Headless CMS integration",
        "Custom API development",
      ],
      color: "blue",
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: "Frontend Development",
      description:
        "Beautiful, responsive interfaces that deliver exceptional user experiences.",
      highlights: [
        "Responsive design implementation",
        "UI/UX best practices",
        "Performance optimization",
        "Accessibility compliance",
      ],
      color: "green",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Full-Stack Solutions",
      description:
        "Complete web applications with both frontend and backend components.",
      highlights: [
        "Node.js/Express backends",
        "Database integration",
        "Authentication systems",
        "Server-side rendering",
      ],
      color: "purple",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "Progressive Web Apps",
      description:
        "Web applications that function like native apps with offline capabilities.",
      highlights: [
        "Service workers implementation",
        "App-like interfaces",
        "Push notifications",
        "Offline functionality",
      ],
      color: "yellow",
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "E-Commerce Solutions",
      description:
        "High-performance online stores with secure payment processing.",
      highlights: [
        "Shopify/WordPress WooCommerce",
        "Custom cart functionality",
        "Payment gateway integration",
        "Inventory management",
      ],
      color: "orange",
    },
    {
      icon: <GitBranch className="w-10 h-10" />,
      title: "Web Optimization",
      description: "Performance tuning and SEO enhancements for your website.",
      highlights: [
        "Page speed optimization",
        "SEO best practices",
        "Core Web Vitals improvement",
        "Analytics integration",
      ],
      color: "indigo",
    },
  ];

  const process = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Discovery & Planning",
      description:
        "We understand your business goals, audience, and preferred design styles.",
      clientInputs: [
        "Business type & goals",
        "Content & branding",
        "Reference websites",
        "Must-have features",
      ],
      ourRole: [
        "Competitor research",
        "Project planning",
        "Sitemap creation",
        "Technical specifications",
      ],
      color: "blue",
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Design & Prototyping",
      description:
        "Wireframes and UI mockups are created for your review and approval.",
      clientInputs: [
        "Feedback on colors",
        "Layout preferences",
        "Content placement",
        "Feature prioritization",
      ],
      ourRole: [
        "Figma designs",
        "Mobile responsiveness",
        "Usability focus",
        "Interactive prototypes",
      ],
      color: "purple",
    },
    {
      icon: <CpuIcon className="w-8 h-8" />,
      title: "Development & Testing",
      description:
        "We build the site using secure, scalable technologies with rigorous testing.",
      clientInputs: [
        "Final content approval",
        "Feature confirmations",
        "Go-live approval",
        "Training requests",
      ],
      ourRole: [
        "Full-stack development",
        "CMS integration",
        "Cross-browser testing",
        "Speed optimization",
      ],
      color: "green",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Launch & Support",
      description:
        "Site deployment with backups, security layers, and optional ongoing support.",
      clientInputs: [
        "Admin handover confirmation",
        "Maintenance preferences",
        "Marketing needs",
        "Future roadmap",
      ],
      ourRole: [
        "Hosting setup",
        "Analytics configuration",
        "Launch checklist",
        "Post-launch support",
      ],
      color: "orange",
    },
  ];

  const packages = [
    {
      name: "LaunchLite",
      description: "1-page website with basic SEO",
      idealFor: "Startups, event pages, quick campaign landers",
      features: [
        "Single page design",
        "Mobile responsive",
        "Basic SEO setup",
        "Contact form",
        "1 round of revisions",
      ],
      price: "$1,499+",
      color: "blue",
    },
    {
      name: "BizStart",
      description: "5-page CMS site with forms, blog setup, basic UI/UX",
      idealFor: "Local businesses, freelancers, early-stage brands",
      features: [
        "WordPress or Webflow CMS",
        "5 custom pages",
        "Blog setup",
        "Contact forms",
        "Basic analytics",
        "3 rounds of revisions",
      ],
      price: "$3,999+",
      color: "purple",
    },
    {
      name: "ProPresence",
      description: "10+ page custom site with animations, blog, integrations",
      idealFor: "Professional firms, consultancies, mid-size brands",
      features: [
        "Custom design",
        "Advanced animations",
        "CMS integration",
        "API connections",
        "Premium hosting",
        "SEO optimization",
        "Unlimited revisions",
      ],
      price: "$8,999+",
      color: "green",
    },
    {
      name: "ShopLaunch",
      description: "Shopify or WooCommerce store with 10 products + checkout",
      idealFor: "Small retailers, handmade stores, boutique brands",
      features: [
        "E-commerce platform",
        "Product listings",
        "Secure checkout",
        "Payment processing",
        "Inventory system",
        "Mobile optimized",
        "5 rounds of revisions",
      ],
      price: "$5,999+",
      color: "orange",
    },
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      hover: "hover:bg-blue-100",
    },
    green: {
      bg: "bg-green-50",
      text: "text-green-600",
      border: "border-green-200",
      hover: "hover:bg-green-100",
    },
    purple: {
      bg: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-200",
      hover: "hover:bg-purple-100",
    },
    yellow: {
      bg: "bg-yellow-50",
      text: "text-yellow-600",
      border: "border-yellow-200",
      hover: "hover:bg-yellow-100",
    },
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
      hover: "hover:bg-orange-100",
    },
    indigo: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-200",
      hover: "hover:bg-indigo-100",
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="text-center mb-20"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Web Development
          </span>{" "}
          Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We create high-performance, scalable web solutions that drive results
          and deliver exceptional user experiences.
        </p>
      </motion.div>

      {/* Our Process */}
      <div className="mb-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Proven Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A transparent, collaborative approach to deliver high-quality
            websites tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {process.map((stage, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-xl border ${
                colorClasses[stage.color].border
              } ${colorClasses[stage.color].bg} ${
                colorClasses[stage.color].hover
              } transition-all`}
            >
              <div
                className={`w-14 h-14 ${
                  colorClasses[stage.color].bg
                } rounded-lg flex items-center justify-center mb-4`}
              >
                <div className={`${colorClasses[stage.color].text}`}>
                  {stage.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {stage.title}
              </h3>
              <p className="text-gray-600 mb-5">{stage.description}</p>

              <div className="mb-5">
                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  CLIENT PROVIDES
                </h4>
                <ul className="space-y-2">
                  {stage.clientInputs.map((input, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight
                        className={`w-4 h-4 mt-0.5 mr-2 ${
                          colorClasses[stage.color].text
                        }`}
                      />
                      <span className="text-gray-700 text-sm">{input}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-500 mb-2">
                  OUR ROLE
                </h4>
                <ul className="space-y-2">
                  {stage.ourRole.map((role, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight
                        className={`w-4 h-4 mt-0.5 mr-2 ${
                          colorClasses[stage.color].text
                        }`}
                      />
                      <span className="text-gray-700 text-sm">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Packages */}
      <div className="mb-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Web Development Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Flexible solutions designed for businesses at every stage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`border rounded-xl overflow-hidden ${
                colorClasses[pkg.color].border
              } ${colorClasses[pkg.color].hover} transition-all`}
            >
              <div className={`p-6 ${colorClasses[pkg.color].bg} text-center`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 mb-3">{pkg.description}</p>
                <div className="text-sm font-medium text-gray-500">
                  Ideal for: {pkg.idealFor}
                </div>
              </div>
              <div className="p-6">
                <div className="text-3xl font-bold text-center mb-6">
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className={`h-5 w-5 ${
                          colorClasses[pkg.color].text
                        } mr-2 mt-0.5`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 ${colorClasses[pkg.color].bg} ${
                    colorClasses[pkg.color].hover
                  } rounded-lg font-medium transition-colors`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* All Services */}
      <div className="mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Web Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end solutions for every aspect of your web presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border ${
                colorClasses[service.color].border
              }`}
            >
              <div className="p-8">
                <div
                  className={`flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full ${
                    colorClasses[service.color].bg
                  }`}
                >
                  <div className={`${colorClasses[service.color].text}`}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className={`h-5 w-5 ${
                          colorClasses[service.color].text
                        } mr-2 mt-0.5`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
        className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Next Web Project?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can create a solution that drives results for
            your business.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Start Your Project
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default WebDev;
