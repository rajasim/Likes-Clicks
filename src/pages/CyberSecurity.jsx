import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Search,
  Activity,
  FileText,
  Code,
  Lock,
  Server,
  AlertTriangle,
  Eye,
  Gauge,
  ClipboardCheck,
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

const CyberSecurity = () => {
  const approach = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Assessment",
      description:
        "Analyze current vulnerabilities, threats, and security gaps in your systems.",
      color: "blue",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Implementation",
      description:
        "Apply firewalls, security audits, and compliance protocols tailored to your needs.",
      color: "purple",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Monitoring & Response",
      description:
        "24/7 real-time threat detection with alerting and remediation plans.",
      color: "green",
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Compliance & Assurance",
      description:
        "Ensure systems meet GDPR, CCPA and other data privacy regulations.",
      color: "red",
    },
  ];

  const services = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SecureStart (Hardening)",
      included: "SSL setup, WAF, plugin audit, brute-force protection",
      audience: "Any small business website needing secure setup",
      outcome:
        "A hardened web presence with protection against basic online threats and vulnerabilities",
      color: "blue",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "VulneraScan (Pen Test)",
      included: "Manual + automated OWASP testing, remediation guide",
      audience: "Startups, SaaS, or e-commerce platforms pre-launch",
      outcome:
        "Detailed report of security flaws with criticality grading and remediation guide",
      color: "purple",
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "LiveShield (Monitoring)",
      included: "Real-time alerts, logs, response plan, dashboard",
      audience: "Active businesses needing always-on monitoring",
      outcome:
        "24/7 monitoring with actionable alerts and detailed incident logs for compliance",
      color: "green",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "CompliAudit (GDPR + Privacy)",
      included: "Templates, data mapping, gap analysis",
      audience: "Teams handling customer data, apps, or European users",
      outcome:
        "Compliance checks and documentation support for GDPR, CCPA, and similar frameworks",
      color: "yellow",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "CodeGuard (Review)",
      included: "Static code scan, CI/CD integration, risk report",
      audience: "Dev teams inheriting outsourced codebases or doing releases",
      outcome:
        "Detailed risk report with code-level vulnerabilities and pipeline integration",
      color: "orange",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Enterprise Cybersecurity Services
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We secure your digital assets through layered protection, risk
          identification, and proactive monitoring.
        </p>
      </div>

      {/* Process Section with Numbered Steps */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Cybersecurity Approach
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
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Cybersecurity Service Packages
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
                  <div className={colorClasses[service.color].text}>
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                  {service.title}
                </h3>
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-sm text-gray-700">
                    What's Included:
                  </p>
                  <p className="text-gray-600 text-sm">{service.included}</p>
                </div>
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-sm text-gray-700">Best For:</p>
                  <p className="text-gray-600 text-sm">{service.audience}</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium text-sm text-gray-700">Outcome:</p>
                  <p className="text-gray-600 text-sm">{service.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-12 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-2xl p-8 md:p-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Strengthen Your Security?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Our cybersecurity experts will help you identify vulnerabilities,
            implement protections, and maintain compliance with industry
            standards.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg text-lg transition-colors duration-300">
            Get Security Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
