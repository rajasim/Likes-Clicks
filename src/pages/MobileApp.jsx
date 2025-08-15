import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Figma,
  Code,
  Play,
  GitMerge,
  Zap,
  Cpu,
  Layout,
  Wrench,
  Package,
} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const colorClasses = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-200",
    darkBg: "bg-blue-200",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    border: "border-purple-200",
    darkBg: "bg-purple-200",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    border: "border-green-200",
    darkBg: "bg-green-200",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
    border: "border-red-200",
    darkBg: "bg-red-200",
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

const process = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: <>Plan</>,
    description: "Define Goals, Target Users, Core Features",
    color: "blue",
  },
  {
    icon: <Figma className="w-6 h-6" />,
    title: <>Design</>,
    description: "Craft and Refine UI, Based on Real Feedback",
    color: "purple",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: <>Build</>,
    description: "Develop App with Backend  Integrations",
    color: "green",
  },
  {
    icon: <Play className="w-6 h-6" />,
    title: <>Launch</>,
    description: "Test , Deploy, Monitor & Release ",
    color: "red",
  },
];

  

const services = [
  {
    icon: <GitMerge className="w-8 h-8 text-blue-600" />,
    title: "AppGo",
    description: "UI for 3 Screens , Backend API Integration , Built Using Flutter or React",
    audience: "Businesses Validating New Ideas",
    outcome:
      "A Sleek, Functional App Built Quickly — Ideal for Fast Validation and Lean Launches",
  },
  {
    icon: <Zap className="w-8 h-8 text-green-600" />,
    title: "DroidLaunch",
    description: "Kotlin-Based Native Android Build , Backend Integration , Performance Optimization",
    audience: "Businesses Targeting Android-First Audiences or Device-Specific Solutions",
    outcome:
      "A Robust, Native Android App Built for Performance ,Speed, and Compatibility",
  },
  {
    icon: <Cpu className="w-8 h-8 text-purple-600" />,
    title: "iLaunch",
    description: "Swift-Based Native iOS App , Apple-Aligned UI , Responsive Experience",
    audience: "iOS-First Markets, Premium User Segments, or Apple-Only Platforms",
    outcome:
      "A Polished iOS Experience with Seamless Performance and Native Feel",
  },
  {
    icon: <Layout className="w-8 h-8 text-yellow-600" />,
    title: "AppVision",
    description: "Figma Wireframes , Clickable Prototypes , User Journey-Aligned Design",
    audience: "Founders, Designers, or Dev Teams Needing Clarity Before Coding",
    outcome:
      "Figma Wireframes  Clickable Prototypes  User Journey-Aligned Design",
  },
  {
    icon: <Wrench className="w-8 h-8 text-orange-600" />,
    title: "AppCare",
    description: "Ongoing Bug Fixes , OS/Version Upgrades , Performance Monitoring",
    audience: "Live Apps Needing Long-Term Care, Updates, and Support",
    outcome:
      "Ongoing Bug Fixes , OS/Version Upgrades , Performance Monitoring",
  },
  {
    icon: <Package className="w-8 h-8 text-indigo-600" />,
    title: "AppReady",
    description: "App Store Submission (iOS & Android) , Metadata & Compliance Review ",
    audience: "First-Time App Launches by SMEs, Founders, or Solo Entrepreneurs",
    outcome:
      "A Seamless, Compliant Launch on Both App Stores — Ready for User Downloads",
  },
];

const MobileApp = () => {
  return (

     

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    {/* 🔵 New Section Title Block */}
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
        Mobile App Development Services
      </h1>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        We design and build powerful , user-friendly mobile apps for business , brands ,  ideas
      </p>
    </div>
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
        Our Development Process
      </h2>

      <div className="flex flex-wrap justify-between items-stretch gap-4 mb-16">
        {process.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex-1 min-w-[250px] max-w-[300px]"
            >
              <div
                className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center ${colorClasses[step.color].bg} border-4 border-white shadow-lg`}
              >
                <span className={`font-bold ${colorClasses[step.color].text}`}>
                  {index + 1}
                </span>
              </div>

              <div
                className={`${colorClasses[step.color].bg} rounded-xl pt-10 p-6 border-2 ${colorClasses[step.color].border} shadow-sm min-h-[320px] flex flex-col justify-between`}
              >
                <div>
                  <div className={`w-14 h-14 mx-auto ${colorClasses[step.color].darkBg} rounded-xl flex items-center justify-center mb-4`}>
                    <div className={colorClasses[step.color].text}>{step.icon}</div>
                  </div>

                  <h3 className="text-xl font-semibold text-center mb-4 leading-snug">
                    {step.title}
                  </h3>

                 <p className="text-gray-600 text-left leading-relaxed mt-4">
  {step.description}
</p>

                  <div className="mt-5 flex justify-center">
    <a
  href="https://www.powr.io/form-builder/i/39931915#page"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black text-white text-sm font-semibold py-2 px-5 rounded-full hover:bg-neutral-800 transition duration-300"
>
  Start Your Project
</a>

  </div>
                </div>
              </div>
            </motion.div>

            {index < process.length - 1 && (
              <div className="hidden lg:flex items-center justify-center">
                <svg
                  className={`w-8 h-8 ${colorClasses[step.color].text} drop-shadow-lg`}
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
          </React.Fragment>
        ))}
      </div>

      {/* Mobile App Services Section */}
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
        Our Mobile App Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service, index) => {
          const color = service.icon.props.className.match(
            /text-(blue|green|purple|yellow|orange|indigo)-600/
          )?.[1];
          const current = colorClasses[color] || colorClasses.blue;

          return (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg border ${current.border} p-6`}
            >
              <div className="flex justify-center mb-4">
                <div className={`w-12 h-12 rounded-full ${current.bg} flex items-center justify-center`}>
                  {React.cloneElement(service.icon, {
                    className: `w-6 h-6 ${current.text}`,
                  })}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                {service.title}
              </h3>
              <ul className="space-y-4 min-h-[240px]">
                {/* Reordered */}
                <li className="flex items-start gap-2">
                  <span className={`w-5 h-5 mt-0.5 ${current.text}`}>✓</span>
                  <div>
                    <p className="font-medium text-sm text-gray-700">Best For:</p>
                    <p className="text-gray-600 text-sm min-h-[48px]">{service.audience}</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`w-5 h-5 mt-0.5 ${current.text}`}>✓</span>
                  <div>
                    <p className="font-medium text-sm text-gray-700">What's Included:</p>
                    <p className="text-gray-600 text-sm min-h-[48px]">{service.description}</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className={`w-5 h-5 mt-0.5 ${current.text}`}>✓</span>
                  <div>
                    <p className="font-medium text-sm text-gray-700">Outcome:</p>
                    <p className="text-gray-600 text-sm min-h-[64px]">{service.outcome}</p>
                    
                  </div>
                  
                </li>
              </ul>
              <div className="mt-5 flex justify-center">
   <a
  href="https://www.powr.io/form-builder/i/39936984#page"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black text-white text-sm font-semibold py-2 px-5 rounded-full hover:bg-neutral-800 transition duration-300"
>
  Start Your Project
</a>

  </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your Mobile App?
        </h2>
        <p className="text-xl mb-6">
          Our experts will help you create a powerful, modern mobile experience.
        </p>
       <a
  href="https://www.powr.io/form-builder/i/39936984#page"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black text-white text-sm font-semibold py-2 px-5 rounded-full hover:bg-neutral-800 transition duration-300"
>
  Start Your Project
</a>

      </div>
    </div>
  );
};

export default MobileApp;
