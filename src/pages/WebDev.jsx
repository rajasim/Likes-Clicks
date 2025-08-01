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
  Rocket,
  ClipboardCheck,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Color configuration
const colorClasses = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
    hover: "hover:bg-blue-100",
    darkBg: "bg-blue-100",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
    hover: "hover:bg-green-100",
    darkBg: "bg-green-100",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-200",
    hover: "hover:bg-purple-100",
    darkBg: "bg-purple-100",
  },
  yellow: {
    bg: "bg-yellow-50",
    text: "text-yellow-600",
    border: "border-yellow-200",
    hover: "hover:bg-yellow-100",
    darkBg: "bg-yellow-100",
  },
  orange: {
    bg: "bg-orange-50",
    text: "text-orange-600",
    border: "border-orange-200",
    hover: "hover:bg-orange-100",
    darkBg: "bg-orange-100",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-200",
    hover: "hover:bg-indigo-100",
    darkBg: "bg-indigo-100",
  },
};

// Data configurations
const servicesData = [
  {
    icon: <Code className="w-10 h-10" />,
    title: "Custom Development",
    description:
      "built with modern technologies to for your specific  requirements.",
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

const processData = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Discover & Plan",
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
    title: "Design & Prototype",
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
    icon: <Cpu className="w-8 h-8" />,
    title: "Develop & Test",
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

const packagesData = [
  {
    name: "LaunchLite",
    description: "1-page website with basic SEO",
    idealFor: "Single-Page Sites",
    features: [
      "A Design to Make a Strong First Impression",
      "Optimized for Global Mobile Users",
      "Basic SEO to Help People Find You on Google",
      "Contact Form to Capture Leads Easily",
      "A sleek, single-page site that grabs attention fast",
      
      // "1 round of revisions",
    ],
    color: "blue",
  },
  {
    name: "BizStart",
    description: "5-page CMS site with forms, blog setup, basic UI/UX",
    idealFor: "Local Businesses",
    features: [
      "A 5-Page Website to Showcase your Services",
      "✓ Fully Responsive Layout for a Seamless Mobile Experience",
      "Blog + SEO Setup to Grow Your Audience",
      "Contact Forms That Turn Visitors into Customers",
      "A powerful online presence tailored for your local market",
      // "3 rounds of revisions",
    ],
    color: "purple",
  },
  {
    name: "ProPresence",
    description: "10+ page custom site with animations, blog, integrations",
    idealFor: "Professional Services",
    features: [
      "Custom Website That Reflects Your Expertise and Brand",
      "Fast-Loading Mobile Experience to Keep Users Engaged",
      "Built-In SEO Tools to Attract High-Value Traffic",
      "Easy-to-Manage CMS With Automation Integrations",
      "A high-performance site that enhances your professional image",
      
      // "Unlimited revisions",
    ],
    color: "green",
  },
  {
    name: "ShopLaunch",
    description: "Shopify or WooCommerce store with 10 products + checkout",
    idealFor: "E-Commerce Stores",
    features: [
      "Custom Online Store Built to Sell",
      "Mobile Shopping Experience to Boost Conversions",
      "Secure Payment System your Customers Trust",
      "Inventory Setup for Streamline Operations",
      "A conversion-optimized e-commerce store ready for growth",
      
      // "5 rounds of revisions",
    ],
    color: "orange",
  },
];

const webServices = [
  {
    title: "Custom Web Development",
    // icon: <FiCode />,
    color: "blue",
    included:
      "Bespoke Design and Layout Customiomization +Interactive Features with Seamless API Integrations",
    audience: "Brands Needing a Unique Design with Custom Features",
    outcome:
      " A  Tailored Website  Reflecting your Brand ",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "E-Commerce Solutions",
    // icon: <FiShoppingCart />,
    color: "purple",
    included: "Custom Storefront with Secure Checkout + Product Listings, Inventory & Order Management",
    audience:
      "Businesses Ready to Launch or Grow an Online Store",
    outcome: "A Seamless Online Store Built for Sales",
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe"],
  },
  {
    title: "CMS Development",
    // icon: <FiLayout />,
    color: "green",
    included: "Easy-to-Use CMS with SEO Tools + User Access Controls and Fully Customizeble Layouts",
    audience: "Teams Managing Content Without any Technical Help",
    outcome: "A Flexible Site You Can Update Anytime",
    technologies: ["WordPress", "Contentful", "Strapi", "Sanity"],
  },
  // Add more services as needed
];

// Component parts
const HeroSection = () => (
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
        Web Development Services
      </span>{" "}
    </h1>
    <p className="text-xl text-gray-600 w-full mx-auto leading-relaxed">
      We create high-performance, scalable web solutions that drive results and
      deliver exceptional user experiences.
    </p>
    
  </motion.div>
);

const SectionHeader = ({ title, subtitle }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      {title}
    </h2>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
  </motion.div>
);

const ProcessStage = ({ stage, index }) => {
  const [showClientInputs, setShowClientInputs] = useState(false);
  const [showOurRole, setShowOurRole] = useState(false);

  return (
    <motion.div
      key={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div
        className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center ${
          colorClasses[stage.color].bg
        } border-4 border-white shadow-lg`}
      >
        <span className={`font-bold ${colorClasses[stage.color].text}`}>
          {index + 1}
        </span>
      </div>

      {index < processData.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
          <svg
            className={`w-8 h-8 ${
              colorClasses[stage.color].text
            } drop-shadow-lg`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </div>
      )}

      <div
        className={`p-6 rounded-2xl border-2 ${
          colorClasses[stage.color].border
        } ${colorClasses[stage.color].bg} ${
          colorClasses[stage.color].hover
        } transition-all h-full shadow-md hover:shadow-lg`}
      >
        <div
          className={`w-14 h-14 mx-auto ${
            colorClasses[stage.color].bg
          } rounded-xl flex items-center justify-center mb-4 shadow-inner`}
        >
          <div className={`${colorClasses[stage.color].text} scale-125`}>
            {stage.icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
          {stage.title}
        </h3>
        <p className="text-gray-600 mb-4 pt-4 text-sm text-center leading-relaxed">
          {stage.description}
        </p>

        {/* Your Contribution - Dropdown */}
        <div
          className="mb-4"
          onMouseEnter={() => setShowClientInputs(!showClientInputs)}
          onMouseLeave={() => setShowClientInputs()}
        >
          <button
            // onMouseLeave={()=>set}
            className={`w-full flex justify-between items-center p-3 rounded-lg ${
              showClientInputs
                ? colorClasses[stage.color].darkBg
                : "bg-white/80"
            }`}
          >
            <svg
              className={`h-5 w-5  mr-2 mt-0.5`}
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
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Your Contribution
            </h4>
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-200 ${
                showClientInputs ? "rotate-90" : ""
              } ${colorClasses[stage.color].text}`}
            />
          </button>
          {showClientInputs && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <ul className="space-y-2 p-3 bg-white/90 rounded-b-lg text-sm">
                {stage.clientInputs.map((input, i) => (
                  <li key={i} className="flex items-start">
                    <div
                      className={`flex-shrink-0 mt-0.5 mr-2 ${
                        colorClasses[stage.color].text
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{input}</span>
                  </li>
                ))}
              </ul>
              
            </motion.div>
          )}
        </div>

        {/* Our Deliverables - Dropdown */}
        <div
          onMouseEnter={() => setShowOurRole(!showOurRole)}
          onMouseLeave={() => setShowOurRole()}
        >
          <button
            className={`w-full flex justify-between items-center p-3 rounded-lg ${
              showOurRole ? colorClasses[stage.color].darkBg : "bg-white/80"
            }`}
          >
            <svg
              className={`h-5 w-5  mr-2 mt-0.5`}
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
            <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Our Deliverables
            </h4>
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-200 ${
                showOurRole ? "rotate-90" : ""
              } ${colorClasses[stage.color].text}`}
            />
          </button>
          {showOurRole && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <ul className="space-y-2 p-3 bg-white/90 rounded-b-lg text-sm">
                {stage.ourRole.map((role, i) => (
                  <li key={i} className="flex items-start">
                    <div
                      className={`flex-shrink-0 mt-0.5 mr-2 ${
                        colorClasses[stage.color].text
                      }`}
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{role}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const PackageCard = ({ pkg, index }) => (
  <motion.div
    key={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className={`border rounded-xl overflow-hidden flex flex-col justify-between h-full ${
      colorClasses[pkg.color].border
    } ${colorClasses[pkg.color].hover} transition-all`}
  >
    <div className={`p-6 ${colorClasses[pkg.color].bg} text-center`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
      {/* <p className="text-gray-600 mb-3">{pkg.description}</p> */}
      <div className="text-m font-medium bg-white/80 rounded-lg py-2 px-3 inline-block">
        <span className="font-bold"> For:</span> {pkg.idealFor}
      </div>
    </div>

    <div className="p-6 flex flex-col flex-grow justify-between">
      <ul className="space-y-3 mb-6">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <svg
              className={`h-5 w-5 ${colorClasses[pkg.color].text} mr-2 mt-0.5`}
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
        } rounded-lg font-medium transition-colors mt-auto`}
      >
         Build My Site
      </button>
    </div>
  </motion.div>
);

const ServiceCard = ({ service, index }) => (
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
      <p className="text-gray-600 mb-6 text-left">{service.description}</p>
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
      <div className="mt-5 flex justify-center">
    <button className="bg-black text-white text-sm font-semibold py-2 px-5 rounded-full hover:bg-neutral-800 transition duration-300">
      Start Your Project
    </button>
  </div>
    </div>
  </motion.div>
);

const CTASection = () => (
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
        Let's discuss how we can create a solution that drives results for your
        business.
      </p>
      <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
        Start Your Project
      </button>
    </div>
  </motion.div>
);

// Main component
const WebDev = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <HeroSection />

      {/* Our Process */}
      <div className="mb-28">
        <SectionHeader
          title="Our  Development Process"
          // subtitle="A seamless, collaborative journey to deliver exceptional digital experiences."
        />
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {processData.map((stage, index) => (
              <ProcessStage key={index} stage={stage} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Service Packages */}
      <div className="mb-28">
        <SectionHeader
          title="Web Development Packages"
          // subtitle="Flexible solutions designed for businesses at every stage."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packagesData.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} index={index} />
          ))}
          
        </div>
      </div>

      <div className="mb-16">
        {/* <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Web Development Services
        </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webServices.map((service, index) => {
            // Color mapping for consistent styling
            const colorMap = {
              blue: {
                bg: "bg-blue-100",
                text: "text-blue-600",
                border: "border-blue-200",
              },
              green: {
                bg: "bg-green-100",
                text: "text-green-600",
                border: "border-green-200",
              },
              purple: {
                bg: "bg-purple-100",
                text: "text-purple-600",
                border: "border-purple-200",
              },
              yellow: {
                bg: "bg-yellow-100",
                text: "text-yellow-600",
                border: "border-yellow-200",
              },
              orange: {
                bg: "bg-orange-100",
                text: "text-orange-600",
                border: "border-orange-200",
              },
              indigo: {
                bg: "bg-indigo-100",
                text: "text-indigo-600",
                border: "border-indigo-200",
              },
            };

            // Get the appropriate color
            const currentColor = colorMap[service.color || "blue"];

            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border ${currentColor.border}`}
              >
                <div className="p-6">
                  {/* Left-aligned Main Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {service.title}
                  </h3>

                  {/* Feature Sections */}
                   <ul className="tech-card space-y-4">
    {/* Best For */}
    <li className="flex items-start">
      <svg
        className={`h-5 w-5 ${currentColor.text} mr-2 mt-0.5 flex-shrink-0`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <div>
        <p className="font-medium text-sm text-gray-700">Best For:</p>
        <p className="text-gray-600 text-sm">{service.audience}</p>
      </div>
    </li>

    {/* What's Included */}
    <li className="flex items-start">
      <svg
        className={`h-5 w-5 ${currentColor.text} mr-2 mt-0.5 flex-shrink-0`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <div>
        <p className="font-medium text-sm text-gray-700">What's Included:</p>
        <p className="text-gray-600 text-sm">{service.included}</p>
      </div>
    </li>

    {/* Outcome */}
    <li className="flex items-start">
      <svg
        className={`h-5 w-5 ${currentColor.text} mr-2 mt-0.5 flex-shrink-0`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
      <div>
        <p className="font-medium text-sm text-gray-700">Outcome:</p>
        <p className="text-gray-600 text-sm">{service.outcome}</p>
      </div>
    </li>
  </ul>

                  <div className="mt-4 flex justify-center">
    <button className="bg-black text-white text-sm font-medium py-2 px-5 rounded-full hover:bg-neutral-800 transition duration-300">
      Start Your Project
    </button>
    </div>
                </div>
              </motion.div>
            );
          })}
          
        </div>
      </div>

      {/* All Services */}
      <div className="mb-20">
        <SectionHeader
          title="Comprehensive Web Services"
          subtitle="End-to-end solutions for every aspect of your web presence."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
            
            
          ))}
          
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default WebDev;
