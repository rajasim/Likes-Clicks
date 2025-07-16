import React from "react";
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

const MobileApp = () => {
  const process = [
    {
      icon: <ClipboardList className="w-8 h-8 text-blue-600" />,
      title: "Discovery & Requirement Gathering",
      description:
        "Understand your business needs, app goals, user personas, and core functionality.",
    },
    {
      icon: <Figma className="w-8 h-8 text-purple-600" />,
      title: "Design & Prototyping",
      description:
        "Wireframes and high-fidelity UI mockups created using Figma for early feedback.",
    },
    {
      icon: <Code className="w-8 h-8 text-green-600" />,
      title: "Development & Integration",
      description:
        "Frontend development with Flutter, React Native, Swift, or Kotlin with secure API integrations.",
    },
    {
      icon: <Play className="w-8 h-8 text-red-600" />,
      title: "Testing & Deployment",
      description:
        "QA on multiple devices, App Store/Play Store deployment, and post-launch monitoring.",
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
          We create high-performance mobile applications with a structured,
          collaborative, and scalable approach.
        </p>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Development Process
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
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
          Our Mobile App Services
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
                  <p className="text-gray-600">{service.description}</p>
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
