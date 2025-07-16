import React from "react";
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

const CyberSecurity = () => {
  const approach = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Assessment",
      description:
        "Analyze current vulnerabilities, threats, and security gaps in your systems.",
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-600" />,
      title: "Implementation",
      description:
        "Apply firewalls, security audits, and compliance protocols tailored to your needs.",
    },
    {
      icon: <Activity className="w-8 h-8 text-green-600" />,
      title: "Monitoring & Response",
      description:
        "24/7 real-time threat detection with alerting and remediation plans.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-red-600" />,
      title: "Compliance & Assurance",
      description:
        "Ensure systems meet GDPR, CCPA and other data privacy regulations.",
    },
  ];

  const services = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "SecureStart (Hardening)",
      included: "SSL setup, WAF, plugin audit, brute-force protection",
      audience: "Any small business website needing secure setup",
      outcome:
        "A hardened web presence with protection against basic online threats and vulnerabilities",
    },
    {
      icon: <AlertTriangle className="w-8 h-8 text-purple-600" />,
      title: "VulneraScan (Pen Test)",
      included: "Manual + automated OWASP testing, remediation guide",
      audience: "Startups, SaaS, or e-commerce platforms pre-launch",
      outcome:
        "Detailed report of security flaws with criticality grading and remediation guide",
    },
    {
      icon: <Eye className="w-8 h-8 text-green-600" />,
      title: "LiveShield (Monitoring)",
      included: "Real-time alerts, logs, response plan, dashboard",
      audience: "Active businesses needing always-on monitoring",
      outcome:
        "24/7 monitoring with actionable alerts and detailed incident logs for compliance",
    },
    {
      icon: <FileText className="w-8 h-8 text-yellow-600" />,
      title: "CompliAudit (GDPR + Privacy)",
      included: "Templates, data mapping, gap analysis",
      audience: "Teams handling customer data, apps, or European users",
      outcome:
        "Compliance checks and documentation support for GDPR, CCPA, and similar frameworks",
    },
    {
      icon: <Code className="w-8 h-8 text-orange-600" />,
      title: "CodeGuard (Review)",
      included: "Static code scan, CI/CD integration, risk report",
      audience: "Dev teams inheriting outsourced codebases or doing releases",
      outcome:
        "Detailed risk report with code-level vulnerabilities and pipeline integration",
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

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Cybersecurity Approach
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
          Cybersecurity Service Packages
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
