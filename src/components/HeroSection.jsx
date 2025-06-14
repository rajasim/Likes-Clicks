const HeroSection = () => {
  return (
    <div className="relative py-32 sm:py-40 lg:py-48 isolate px-6 bg-white">
      {/* Premium decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-50/20 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-4xl">
        {/* Announcement badge - premium version */}
        <div className="mb-12 flex justify-center">
          <div className="relative group">
            {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div> */}
            <div className="relative rounded-full px-4 py-1.5 text-xs leading-6 text-blue-600 bg-white/95 backdrop-blur-sm ring-1 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
              Now offering AI integration services.{" "}
              <a href="#services" className="font-medium">
                <span className="absolute inset-0" aria-hidden="true" />
                Explore now
              </a>
            </div>
          </div>
        </div>

        {/* Main hero content - premium version */}
        <div className="text-center">
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-0">
              <span className="w-12 h-px bg-blue-600"></span>
              <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">
                Digital Innovation
              </span>
              <span className="w-12 h-px bg-blue-600"></span>
            </div>
          </div>

          <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Transforming Ideas</span>
            <span className="block font-medium text-blue-600">
              Into Digital Excellence
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            We craft bespoke software solutions that elevate businesses. From
            concept to deployment, we deliver exceptional digital experiences.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group relative px-8 py-3.5 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 text-sm uppercase tracking-widest font-medium"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Get a Consultation</span>
            </a>

            <a
              href="#portfolio"
              className="group px-6 py-3.5 text-sm uppercase tracking-widest font-medium text-gray-900 hover:text-blue-600 flex items-center gap-2 transition-all duration-300"
            >
              <span className="relative">View Our Work</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Premium decorative bottom element */}
      <div className="absolute inset-x-0 bottom-0 h-32 abc bg-gradient-to-t from-white via-white/80 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
