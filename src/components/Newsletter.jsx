import React from "react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";

const NewsletterSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-900/10 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-900/10 to-transparent"></div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-7xl relative z-10">
        {/* Section header with decorative rule */}
        <div className="text-center mb-20">
          <div className="relative inline-flex items-center justify-center mb-8">
            <span className="h-px w-16 bg-blue-400 left-0"></span>
            <span className="text-xs uppercase tracking-[0.2em] text-blue-400 font-light px-4">
              Stay Updated
            </span>
            <span className="h-px w-16 bg-blue-400 right-0"></span>
          </div>
          <h2 className="text-4xl font-light tracking-tight text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Subscribe to Our
            </span>
            <span className="block text-white">Newsletter</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              Receive exclusive updates, industry insights, and special offers
              directly to your inbox.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Newsletter form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative bg-gray-800 rounded-lg border border-gray-700 p-8 shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-900/30 p-3 rounded-lg backdrop-blur-sm">
                  <FaEnvelope className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-light text-white">
                  Email Newsletter
                </h3>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-light rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                >
                  Subscribe
                  <FaArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>

              <p className="mt-4 text-sm text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>

          {/* Benefits list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: (
                  <svg
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  </svg>
                ),
                title: "Exclusive Content",
                description: "Access to premium articles and resources",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Weekly Updates",
                description: "Curated news delivered every Monday",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.5l-.394-.933a2.25 2.25 0 00-1.423-1.423L13.5 18.5l.933-.394a2.25 2.25 0 001.423-1.423l.394-.933.394.933a2.25 2.25 0 001.423 1.423l.933.394-.933.394a2.25 2.25 0 00-1.423 1.423z"
                    />
                  </svg>
                ),
                title: "Special Offers",
                description: "Member-only discounts and promotions",
              },
              {
                icon: (
                  <svg
                    className="h-6 w-6 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                ),
                title: "No Spam",
                description: "Quality content, never any junk mail",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-lg bg-gray-800 border border-gray-700 hover:border-blue-400/30 hover:bg-gray-700/50 transition-all duration-300 group"
              >
                <div className="bg-blue-900/20 p-2 rounded-lg backdrop-blur-sm group-hover:bg-blue-900/30 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-light text-white">{item.title}</h4>
                  <p className="text-sm text-gray-300 mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .container::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 20% 50%,
            rgba(96, 165, 250, 0.1) 0%,
            transparent 50%
          );
          pointer-events: none;
          z-index: -1;
        }
      `}</style>
    </section>
  );
};

export default NewsletterSection;
