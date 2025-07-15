import React from "react";

const SecondHero = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Content */}
        <div className="max-w-2xl lg:max-w-xl">
          <div className="mb-6 inline-flex items-center px-4 py-2 bg-purple-100 text-sm font-medium text-purple-800 rounded-full shadow-sm">
            🚀 AI integration services available
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            Transforming <span className="text-blue-600">Digital Dreams</span>{" "}
            into Reality
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            We craft extraordinary digital experiences with cutting-edge
            technology and innovative solutions tailored to your business needs.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Start Your Project
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-300">
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex flex-col">
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-bold text-blue-600">99%</p>
              <p className="text-gray-600 text-sm">Client Satisfaction</p>
            </div>
            <div className="flex flex-col">
              <p className="text-3xl font-bold text-blue-600">10+</p>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-[500px] xl:w-[550px] h-[350px] lg:h-[400px] rounded-xl shadow-xl overflow-hidden">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D12AQHBUbg2a1Ezsg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1551288547811?e=2147483647&v=beta&t=lPHCfydENFN3AoUNbFs6cbWANMzsKrxSEW7wyGOa6C4"
            alt="Digital transformation"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondHero;
