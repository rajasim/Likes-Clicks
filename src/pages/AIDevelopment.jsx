import React from "react";
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

const AIDevelopment = () => {
  const approach = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Discovery",
      description:
        "Identify repetitive tasks, data-driven decisions, or prediction needs.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-purple-600" />,
      title: "Design",
      description:
        "Choose the best AI model/framework and outline solution flow.",
    },
    {
      icon: <Code className="w-8 h-8 text-green-600" />,
      title: "Development",
      description: "Build and train using APIs, Python, GPT, or OCR as needed.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: "Integration & Support",
      description:
        "Deploy securely with real-time insights or API connectivity.",
    },
  ];

  const services = [
    {
      icon: <Bot className="w-8 h-8 text-blue-600" />,
      title: "ChatIQ (FAQ or Lead Bot)",
      included: "Web/WhatsApp-based bot with GPT/Dialogflow",
      audience: "Customer support, sales teams, website onboarding",
      outcome:
        "Multilingual smart chatbot that handles queries and integrates with CRMs",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-purple-600" />,
      title: "SmartGPT (Custom Tools)",
      included: "Custom GPT integration with OpenAI API",
      audience: "SaaS platforms, automation dashboards, education tools",
      outcome:
        "Context-aware GPT tools providing summaries and smart replies in your brand tone",
    },
    {
      icon: <FileSearch className="w-8 h-8 text-green-600" />,
      title: "DocScan (OCR Automation)",
      included: "Image-to-text workflows using Tesseract/API",
      audience: "Legal firms, document-heavy teams, operations staff",
      outcome:
        "Convert scanned files into Excel, searchable PDFs with AI-powered parsing",
    },
    {
      icon: <LineChart className="w-8 h-8 text-yellow-600" />,
      title: "ForecastAI (Predictive)",
      included: "Python-based regression/classification model",
      audience: "Financial analysts, marketers, planners",
      outcome:
        "Models forecasting demand, churn or risk with real-time visual predictions",
    },
    {
      icon: <LayoutDashboard className="w-8 h-8 text-orange-600" />,
      title: "InsightDash (BI Dashboards)",
      included: "Power BI + AI for automated dashboards",
      audience: "Ops teams, founders, performance-driven leaders",
      outcome: "Business dashboards with AI-driven insights and auto reports",
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

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our AI Development Approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approach.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-50">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          AI Development Packages
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-blue-50">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {service.title}
                </h3>
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-700">What's Included:</p>
                  <p className="text-gray-600">{service.included}</p>
                </div>
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-700">Best For:</p>
                  <p className="text-gray-600">{service.audience}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-700">Outcome:</p>
                  <p className="text-gray-600">{service.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
