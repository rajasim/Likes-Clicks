import React from "react";

const TrustedBySection = () => {
  const companies = [
    { name: "Sozortus.ai" },
    { name: "Bridging Borders" },
    { name: "AWWAL" },
    { name: "Anuhira" },
  ];

  return (
    <div className="bg-white py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-50/30 to-transparent"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="relative inline-flex items-center justify-center mb-6">
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
            <span className="text-sm uppercase tracking-[0.3em] text-blue-600 font-medium px-6">
              Our Partners
            </span>
            <span className="h-px w-20 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></span>
          </div>
          <h2 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl">
            Trusted by{" "}
            <span className="font-medium text-blue-600">innovative</span>{" "}
            organizations
          </h2>
        </div>

        {/* Company logos grid */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-12 lg:max-w-none">
          {companies.map((company, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center"
            >
              {/* Text with custom styling */}
              <div
                className="text-3xl font-extrabold text-gray-700 cursor-pointer 
        transition-all duration-300 relative
        hover:text-blue-600 hover:scale-105
        transform-gpu
        [font-stretch:125%] 
        tracking-tighter
        before:absolute before:bottom-0 before:left-0 
        before:w-full before:h-0.5 before:bg-blue-600 
        before:origin-left before:scale-x-0 
        before:transition-transform before:duration-300
        hover:before:scale-x-100"
              >
                {company.name}
              </div>

              {/* Glow effect on hover */}
              <div
                className="absolute -inset-3 rounded-lg bg-blue-100/30 
        opacity-0 blur-md group-hover:opacity-100 
        transition-opacity duration-300 -z-10"
              ></div>
            </div>
          ))}
        </div>

        {/* Animated floating elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-100/50 blur-3xl opacity-30 animate-float"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 rounded-full bg-indigo-100/50 blur-3xl opacity-30 animate-float animation-delay-2000"></div>
      </div>

      {/* Add this to your global CSS */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default TrustedBySection;
