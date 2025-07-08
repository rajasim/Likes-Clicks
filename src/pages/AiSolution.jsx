import React from "react";
import {
  Brain,
  Bot,
  Database,
  Shield,
  Cpu,
  BarChart,
  Code,
  Cloud,
} from "lucide-react";

const AiSolution = () => {
  const services = [
    {
      icon: <Brain className="w-10 h-10 text-blue-600" />,
      title: "Machine Learning",
      description:
        "Custom ML models to extract insights from your data and automate decision-making.",
      highlights: [
        "Predictive analytics",
        "Pattern recognition",
        "Anomaly detection",
        "Recommendation systems",
      ],
    },
    {
      icon: <Bot className="w-10 h-10 text-green-600" />,
      title: "Natural Language Processing",
      description:
        "AI systems that understand, interpret, and generate human language.",
      highlights: [
        "Chatbots & virtual assistants",
        "Sentiment analysis",
        "Text classification",
        "Language translation",
      ],
    },
    {
      icon: <Cpu className="w-10 h-10 text-purple-600" />,
      title: "Computer Vision",
      description:
        "AI that interprets and processes visual information from the world.",
      highlights: [
        "Object recognition",
        "Facial recognition",
        "Image classification",
        "Video analytics",
      ],
    },
    {
      icon: <Database className="w-10 h-10 text-yellow-600" />,
      title: "Data Analytics & AI",
      description: "Transform raw data into actionable business intelligence.",
      highlights: [
        "Data mining",
        "Predictive modeling",
        "Trend analysis",
        "Real-time analytics",
      ],
    },
    {
      icon: <Shield className="w-10 h-10 text-orange-600" />,
      title: "AI Security Solutions",
      description: "Protect your systems with intelligent threat detection.",
      highlights: [
        "Fraud detection",
        "Network security",
        "Behavioral analysis",
        "Risk assessment",
      ],
    },
    {
      icon: <Cloud className="w-10 h-10 text-indigo-600" />,
      title: "AI Cloud Integration",
      description: "Scalable AI solutions deployed in cloud environments.",
      highlights: [
        "Cloud-based ML models",
        "AI-as-a-Service",
        "Serverless AI",
        "Distributed training",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Advanced AI Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We develop cutting-edge artificial intelligence systems that transform
          businesses and create competitive advantages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div className="p-8">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-50">
                {service.icon}
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
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
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
          </div>
        ))}
      </div>

      <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our AI specialists will help you identify opportunities and
            implement solutions that drive real business value.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-300">
            Explore AI Solutions
          </button>
        </div>
      </div>
    </div>
  );
};

export default AiSolution;
