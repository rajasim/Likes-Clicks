import React from "react";

const TrustedBySection = () => {
  const companies = [
    {
      name: "Transistor",
      logo: "/logos/logo1.jpg",
      width: 158,
      height: 48,
    },
    {
      name: "Reform",
      logo: "/logos/logo2.jpg",
      width: 158,
      height: 48,
    },
    {
      name: "Tuple",
      logo: "/logos/logo3.jpg",
      width: 158,
      height: 48,
    },
    {
      name: "SavvyCal",
      logo: "/logos/logo4.jpg",
    },
    // {
    //   name: "Statamic",
    //   logo: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
    //   width: 158,
    //   height: 48,
    // },
  ];

  return (
    <div className="bg-white py-24 sm:py-32 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-50/20 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Section header with decorative rule */}
        <div className="text-center mb-12">
          <div className="relative inline-flex items-center justify-center mb-8">
            <span className=" h-px w-16 bg-blue-600 left-0"></span>
            <span className="text-xs uppercase tracking-[0.2em] text-blue-600 font-medium px-4">
              Clients
            </span>
            <span className=" h-px w-16 bg-blue-600 right-0"></span>
          </div>
          <h2 className="text-3xl font-light tracking-tight text-gray-900">
            Trusted by the world's most innovative teams
          </h2>
        </div>

        {/* Companies grid */}
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className={`col-span-2 max-h-12 w-full object-contain flex items-center justify-center ${
                index === 3
                  ? "sm:col-start-2 lg:col-span-1"
                  : index === 4
                  ? "col-start-2 sm:col-start-auto lg:col-span-1"
                  : "lg:col-span-1"
              }`}
            >
              <img
                src={company.logo}
                alt={company.name}
                // width={company.width}
                // height={company.height}
                className="opacity-80 hover:opacity-100 transition-opacity duration-300  hover:grayscale-0 max-h-12 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBySection;
