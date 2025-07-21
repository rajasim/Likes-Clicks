import React from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Cpu,
  Zap,
  Database,
  Shield,
  Layout,
  GitMerge,
  ClipboardList,
  Code,
  Play,
  Figma,
  Package,
  Wrench,
} from "lucide-react";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Color classes for consistent styling
const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-200",
    hover: "hover:bg-blue-50",
    darkBg: "bg-blue-200",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    border: "border-purple-200",
    hover: "hover:bg-purple-50",
    darkBg: "bg-purple-200",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    border: "border-green-200",
    hover: "hover:bg-green-50",
    darkBg: "bg-green-200",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
    border: "border-red-200",
    hover: "hover:bg-red-50",
    darkBg: "bg-red-200",
  },
};

const MobileApp = () => {
  const process = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Discovery & Requirement Gathering",
      description:
        "Understand your business needs, app goals, user personas, and core functionality.",
      color: "blue",
    },
    {
      icon: <Figma className="w-6 h-6" />,
      title: "Design & Prototyping",
      description:
        "Wireframes and high-fidelity UI mockups created using Figma for early feedback.",
      color: "purple",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Development & Integration",
      description:
        "Frontend development with Flutter, React Native, Swift, or Kotlin with secure API integrations.",
      color: "green",
    },
    {
      icon: <Play className="w-6 h-6" />,
      title: "Testing & Deployment",
      description:
        "QA on multiple devices, App Store/Play Store deployment, and post-launch monitoring.",
      color: "red",
    },
  ];

  const services = [
    {
      icon: <GitMerge className="w-8 h-8 text-blue-600" />,
      title: "AppGo (Cross-Platform)",
      description: "UI for 3 screens + backend API integration",
      audience: "Startups, MVPs, budget-conscious businesses",
      outcome:
        "A sleek, functional app built fast using Flutter or React—ideal for testing or lean launches",
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "DroidLaunch (Android)",
      description: "Kotlin-based Android app build",
      audience: "Businesses targeting Android-first or device-specific markets",
      outcome:
        "Fast, native Android app tailored to your market—built for performance and compatibility",
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      title: "iLaunch (iOS)",
      description: "Swift-based iOS-only app",
      audience: "iOS-first markets, premium user segments",
      outcome: "Smooth, scalable iOS experience with native design guidelines",
    },
    {
      icon: <Layout className="w-8 h-8 text-yellow-600" />,
      title: "AppVision (UI/UX)",
      description: "Figma wireframes and prototypes",
      audience: "Founders and dev teams needing visuals before coding",
      outcome:
        "Wireframes + clickable prototypes that align with user journey and client vision",
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-600" />,
      title: "AppCare (Maintenance)",
      description: "Bug fixes, upgrades, performance monitoring",
      audience: "Live apps needing long-term support",
      outcome:
        "Reliable monthly maintenance including OS updates, bug resolution, and version upgrades",
    },
    {
      icon: <Package className="w-8 h-8 text-indigo-600" />,
      title: "AppReady (Publishing)",
      description: "Metadata, compliance checks, store submission",
      audience: "SMEs or solo founders launching their first app",
      outcome:
        "Seamless app store submissions and compliance (iOS/Android), including ASO basics",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Mobile App Development Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We create high-performance mobile applications
          {/* with a structured,           collaborative, and scalable approach. */}
        </p>
      </div>

      {/* Process Section with Numbered Steps */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Development Process
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Numbered Badge */}
                <div
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center ${
                    colorClasses[step.color].bg
                  } border-4 border-white shadow-lg`}
                >
                  <span
                    className={`font-bold ${colorClasses[step.color].text}`}
                  >
                    {index + 1}
                  </span>
                </div>

                {/* Process Arrow */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <svg
                      className={`w-8 h-8 ${colorClasses[step.color].text}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}

                {/* Process Card */}
                <div
                  className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 ${
                    colorClasses[step.color].border
                  } h-full pt-8`}
                >
                  <div
                    className={`w-14 h-14 mx-auto ${
                      colorClasses[step.color].bg
                    } rounded-xl flex items-center justify-center mb-4 shadow-inner`}
                  >
                    <div className={colorClasses[step.color].text}>
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      {/* Services Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Mobile App Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
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

            // Get the appropriate color based on the icon's existing color
            const iconColor =
              service.icon.props.className.match(
                /text-(blue|green|purple|yellow|orange|indigo)-600/
              )?.[1] || "blue";
            const currentColor = colorMap[iconColor];

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
                  <div
                    className={`flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full ${currentColor.bg}`}
                  >
                    {React.cloneElement(service.icon, {
                      className: `w-6 h-6 ${currentColor.text}`,
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                    {service.title}
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg
                        className={`h-5 w-5 ${currentColor.text} mr-2 mt-0.5 flex-shrink-0`}
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
                      <span className="text-gray-600 text-sm">
                        {service.description}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className={`h-5 w-5 ${currentColor.text} mr-2 mt-0.5 flex-shrink-0`}
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
                      <span className="text-gray-600 text-sm">
                        {service.audience}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className={`h-5 w-5 ${currentColor.text} mr-2 mt-0.5 flex-shrink-0`}
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
                      <span className="text-gray-600 text-sm">
                        {service.outcome}
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our mobile experts will guide you from concept to launch, creating
            an app that stands out in the marketplace.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-300">
            Start Your App Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
