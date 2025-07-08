import React from "react";
import {
  Smartphone,
  Cpu,
  Zap,
  Database,
  GitBranch,
  Shield,
  Layout,
  Globe,
} from "lucide-react";

const MobileApp = () => {
  const services = [
    {
      icon: <Smartphone className="w-10 h-10 text-blue-600" />,
      title: "Cross-Platform Apps",
      description:
        "Build once, deploy everywhere with React Native and Flutter for maximum efficiency.",
      highlights: [
        "React Native development",
        "Flutter applications",
        "Single codebase for iOS/Android",
        "Native-like performance",
      ],
    },
    {
      icon: <Cpu className="w-10 h-10 text-green-600" />,
      title: "Native iOS Development",
      description:
        "High-performance apps built specifically for Apple's ecosystem.",
      highlights: [
        "Swift & SwiftUI",
        "UIKit development",
        "iOS SDK integration",
        "App Store optimization",
      ],
    },
    {
      icon: <Zap className="w-10 h-10 text-purple-600" />,
      title: "Native Android Development",
      description:
        "Custom Android applications leveraging Google's latest technologies.",
      highlights: [
        "Kotlin development",
        "Jetpack Compose",
        "Material Design 3",
        "Play Store optimization",
      ],
    },
    {
      icon: <Database className="w-10 h-10 text-yellow-600" />,
      title: "Mobile Backend Services",
      description:
        "Scalable cloud infrastructure to power your mobile applications.",
      highlights: [
        "Firebase integration",
        "Custom API development",
        "Real-time databases",
        "Cloud functions",
      ],
    },
    {
      icon: <Shield className="w-10 h-10 text-orange-600" />,
      title: "App Security",
      description:
        "Enterprise-grade protection for your mobile applications and data.",
      highlights: [
        "Data encryption",
        "Secure authentication",
        "Penetration testing",
        "Compliance certifications",
      ],
    },
    {
      icon: <Layout className="w-10 h-10 text-indigo-600" />,
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive interfaces that drive engagement and retention.",
      highlights: [
        "Mobile-first design",
        "User testing",
        "Prototyping",
        "Accessibility compliance",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Professional Mobile App Development
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We create high-performance mobile applications that deliver
          exceptional user experiences across all platforms.
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
