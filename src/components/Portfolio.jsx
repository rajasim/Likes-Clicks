import React from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaShoppingCart,
  FaCoffee,
  FaCogs,
  FaShieldAlt,
  FaFileDownload,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Modern storefront for fashion and lifestyle brands with AI recommendations and smart analytics.",
    results: "+32% conversions, -45% cart abandonment",
    metrics: { users: "50K+", revenue: "$2M+", uptime: "99.9%" },
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "E-Commerce",
    icon: <FaShoppingCart className="text-4xl text-blue-600" />,
    links: [
      {
        url: "https://example.com",
        icon: <FaExternalLinkAlt />,
        label: "Live Demo",
      },
      { url: "https://github.com", icon: <FaGithub />, label: "Source Code" },
    ],
    pdfurl: "/pdf/Ecom.pdf",
    pdfName: "E-Commerce_Case_Study.pdf",
  },
  {
    id: 2,
    title: "Cafe & Food Business (Anuhira.com)",
    description:
      "Online presence for a vibrant café chain offering regional delicacies and beverages.",
    results: "Increased footfall and online orders by 40%",
    metrics: { cafes: "5+", dailyOrders: "300+", feedback: "4.7★" },
    tech: ["Next.js", "TailwindCSS", "Firebase"],
    category: "Food & Beverage",
    icon: <FaCoffee className="text-4xl text-amber-600" />,
    links: [
      {
        url: "https://anuhira.com",
        icon: <FaExternalLinkAlt />,
        label: "Website",
      },
    ],
    pdfurl: "/pdf/Cafe.pdf",
    pdfName: "Cafe_Business_Case_Study.pdf",
  },
  {
    id: 3,
    title: "CRM for CA Firms",
    description:
      "Centralized app to manage client data, documents, and automated task workflows for accounting professionals.",
    results: "Saved 20+ hours/week per team, improved response time",
    metrics: { firms: "80+", retention: "95%", support: "24/7" },
    tech: ["React", "Express.js", "MongoDB", "NodeMailer"],
    category: "CRM",
    icon: <FaCogs className="text-4xl text-purple-600" />,
    links: [],
    pdfurl: "/pdf/CRM.pdf",
    pdfName: "CRM_Case_Study.pdf",
  },
  {
    id: 4,
    title: "VAPT & Cybersecurity Services",
    description:
      "Advanced vulnerability assessments, penetration testing, and audits for web and network infrastructure.",
    results: "Secured over 100+ assets, zero critical vulnerabilities post-fix",
    metrics: { audits: "100+", avgFixTime: "<48h", criticalsPrevented: "50+" },
    tech: ["Nmap", "OWASP", "Burp Suite", "Kali Linux"],
    category: "Cybersecurity",
    icon: <FaShieldAlt className="text-4xl text-green-600" />,
    links: [{ url: "#", icon: <FaExternalLinkAlt />, label: "More Info" }],
    author: "By Aftab B. Maldar",
    pdfurl: "/pdf/Vapt.pdf", // Fixed typo from '/pad' to '/pdf'
    pdfName: "Cybersecurity_Case_Study.pdf",
  },
];

const Portfolio = () => {
  const handleDownloadCaseStudy = (pdfurl, pdfName) => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = pdfurl;
    link.download = pdfName || "Case_Study.pdf"; // Fallback filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Optional: Track download in analytics
    console.log(`Downloaded: ${pdfName}`);
  };

  return (
    <section className="min-h-screen py-20 px-6 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Our Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-200 overflow-hidden flex flex-col"
            >
              <div className="relative h-56 w-full bg-gray-100 flex items-center justify-center">
                <div className="p-8 bg-white rounded-full shadow-lg">
                  {project.icon}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-blue-600 uppercase font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="text-sm text-gray-800 mb-4">
                    <strong>Highlights:</strong> {project.results}
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center text-sm mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-lg font-semibold text-gray-900">
                          {value}
                        </div>
                        <div className="uppercase text-gray-500 text-xs tracking-widest">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 border border-gray-300 rounded-full text-xs text-gray-600 hover:border-blue-500 hover:text-blue-500 transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={() =>
                        handleDownloadCaseStudy(project.pdfurl, project.pdfName)
                      }
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      <FaFileDownload />
                      Case Study
                    </button>
                  </div>

                  {project.author && (
                    <p className="mt-4 text-xs text-right text-gray-400 italic">
                      {project.author}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
