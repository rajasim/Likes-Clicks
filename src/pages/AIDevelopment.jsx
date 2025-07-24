import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  BookText,
  LineChart,
  LayoutDashboard,
  Search,
  Code,
  Cpu,
  MessageSquare,
  FileSearch,
  TrendingUp,
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
  yellow: {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
    border: "border-yellow-200",
    hover: "hover:bg-yellow-50",
    darkBg: "bg-yellow-200",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    border: "border-orange-200",
    hover: "hover:bg-orange-50",
    darkBg: "bg-orange-200",
  },
};

const AIDevelopment = () => {
  const approach = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Discovery",
      description:
        "Identify repetitive tasks, data-driven decisions, or prediction needs.",
      color: "blue",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Design",
      description:
        "Choose the best AI model/framework and outline solution flow.",
      color: "purple",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Development",
      description: "Build and train using APIs, Python, GPT, or OCR as needed.",
      color: "green",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Integration & Support",
      description:
        "Deploy securely with real-time insights or API connectivity.",
      color: "red",
    },
  ];

  const services = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "ChatIQ ",
      included: "Web/WhatsApp-based bot with GPT/Dialogflow",
      audience: "Customer support, sales teams, website onboarding",
      outcome:
        "Multilingual smart chatbot that handles queries and integrates with CRMs",
      color: "blue",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "SmartGPT ",
      included: "Custom GPT integration with OpenAI API",
      audience: "SaaS platforms, automation dashboards, education tools",
      outcome:
        "Context-aware GPT tools providing summaries and smart replies in your brand tone",
      color: "purple",
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "DocScan ",
      included: "Image-to-text workflows using Tesseract/API",
      audience: "Legal firms, document-heavy teams, operations staff",
      outcome:
        "Convert scanned files into Excel, searchable PDFs with AI-powered parsing",
      color: "green",
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "ForecastAI ",
      included: "Python-based regression/classification model",
      audience: "Financial analysts, marketers, planners",
      outcome:
        "Models forecasting demand, churn or risk with real-time visual predictions",
      color: "yellow",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "InsightDash ",
      included: "Power BI + AI for automated dashboards",
      audience: "Ops teams, founders, performance-driven leaders",
      outcome: "Business dashboards with AI-driven insights and auto reports",
      color: "orange",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          AI Development Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We turn your business challenges into smart, automated, and scalable
          AI-powered solutions.
        </p>
      </div>

      {/* Process Section with Numbered Steps */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our AI Development Approach
        </h2>
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {approach.map((step, index) => (
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
                {index < approach.length - 1 && (
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

                {/* Process Card with background color */}
                <div
                  className={`${
                    colorClasses[step.color].bg
                  } rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-2 ${
                    colorClasses[step.color].border
                  } h-full pt-8`}
                >
                  <div
                    className={`w-14 h-14 mx-auto ${
                      colorClasses[step.color].darkBg
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
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          AI Development Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border-2 ${
                colorClasses[service.color].border
              }`}
            >
              <div className="p-6">
                <div
                  className={`w-14 h-14 mx-auto mb-4 ${
                    colorClasses[service.color].bg
                  } rounded-xl flex items-center justify-center shadow-inner`}
                >
                  <div
                    className={`${colorClasses[service.color].text} w-6 h-6`}
                  >
                    {React.cloneElement(service.icon, {
                      className: `w-6 h-6 ${colorClasses[service.color].text}`,
                    })}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className={`h-5 w-5 ${
                        colorClasses[service.color].text
                      } mr-2 mt-0.5 flex-shrink-0`}
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
                    <div>
                      <p className="font-medium text-sm text-gray-700">
                        What's Included:
                      </p>
                      <p className="text-gray-600 text-sm">
                        {service.included}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className={`h-5 w-5 ${
                        colorClasses[service.color].text
                      } mr-2 mt-0.5 flex-shrink-0`}
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
                    <div>
                      <p className="font-medium text-sm text-gray-700">
                        Best For:
                      </p>
                      <p className="text-gray-600 text-sm">
                        {service.audience}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className={`h-5 w-5 ${
                        colorClasses[service.color].text
                      } mr-2 mt-0.5 flex-shrink-0`}
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
                    <div>
                      <p className="font-medium text-sm text-gray-700">
                        Outcome:
                      </p>
                      <p className="text-gray-600 text-sm">{service.outcome}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our AI experts will help you automate processes, gain insights, and
            build intelligent solutions tailored to your needs.
          </p>
          <button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-300">
            Get AI Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIDevelopment;
