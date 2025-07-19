import React from "react";
import {
  FiUsers,
  FiDollarSign,
  FiPackage,
  FiMessageSquare,
  FiTrendingUp,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Skilled & Versatile Team",
    description:
      "Our multidisciplinary team brings diverse expertise to tackle any digital challenge.",
    icon: <FiUsers className="w-8 h-8" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    title: "Client-Centric Process",
    description:
      "Your goals drive our approach. We align every decision with your business objectives.",
    icon: <FiClock className="w-8 h-8" />,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 3,
    title: "Transparent Pricing",
    description:
      "No hidden fees. Clear budgets with predictable costs from day one.",
    icon: <FiDollarSign className="w-8 h-8" />,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    id: 4,
    title: "End-to-End Delivery",
    description:
      "From concept to launch and beyond - we handle every detail seamlessly.",
    icon: <FiPackage className="w-8 h-8" />,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    id: 5,
    title: "Reliable Communication",
    description:
      "Regular updates and responsive support when you need it most.",
    icon: <FiMessageSquare className="w-8 h-8" />,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    id: 6,
    title: "Scalable & Future-Ready",
    description:
      "Solutions designed to grow with your business and adapt to new technologies.",
    icon: <FiTrendingUp className="w-8 h-8" />,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We combine technical excellence with business acumen to deliver
            solutions that drive real results.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{
                duration: 0.6,
                delay: 0.1 * index,
              }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full p-8 rounded-xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-transparent">
                <div
                  className={`w-16 h-16 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <div className={`${feature.color}`}>{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                {/* <div className="flex items-center text-sm text-gray-500">
                  <FiCheckCircle className="mr-2 text-green-500" />
                  <span>Included in all projects</span>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Get to Market Faster
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our streamlined processes and experienced team reduce development
              time by 30-40% compared to industry averages.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:shadow-lg transition-all transform hover:scale-105">
              Start Your Project Now
              <FiTrendingUp className="inline ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
