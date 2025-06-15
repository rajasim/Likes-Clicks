import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Their e-commerce solution increased our conversion rate by 32% within the first month. The team's technical expertise is unmatched.",
      author: "Sarah Johnson",
      role: "CEO, FashionForward",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      id: 2,
      quote:
        "The healthcare platform reduced our administrative workload by 60%. Their understanding of compliance gave us complete peace of mind.",
      author: "Dr. Michael Chen",
      role: "Medical Director, HealthPlus Clinics",
      rating: 5,
      date: "1 month ago",
    },
    {
      id: 3,
      quote:
        "250k mobile banking users in 6 months speaks for itself. The app's performance and security have been flawless since launch.",
      author: "David Rodriguez",
      role: "CTO, NeoBank",
      rating: 4,
      date: "3 months ago",
    },
    {
      id: 4,
      quote:
        "The IoT system paid for itself in fuel savings alone within 4 months. Their team delivered beyond our expectations.",
      author: "Lisa Williams",
      role: "Logistics Director, PrimeHaul",
      rating: 5,
      date: "2 months ago",
    },
  ];

  return (
    <section className="relative py-32 bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-50/10 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center gap-2 px-0 mb-8">
            <span className="w-12 h-px bg-blue-600"></span>
            <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">
              Client Voices
            </span>
            <span className="w-12 h-px bg-blue-600"></span>
          </div>
          <h2 className="text-4xl font-light tracking-tight text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it—hear what our clients say about
            working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded border border-gray-200 p-8 hover:border-blue-300 transition-all duration-300"
            >
              {/* Quote icon */}
              <FaQuoteLeft className="absolute top-8 right-8 text-blue-100 text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-200"
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  {testimonial.date}
                </span>
              </div>

              {/* Testimonial text */}
              <blockquote className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white font-medium">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative text-center">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-0">
              <span className="w-12 h-px bg-blue-600"></span>
              <span className="text-sm uppercase tracking-widest text-blue-600 font-medium">
                Ready to Experience Excellence?
              </span>
              <span className="w-12 h-px bg-blue-600"></span>
            </div>
          </div>

          <h3 className="text-3xl font-light text-gray-900 mb-6">
            Join Our Growing List of Satisfied Clients
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 text-sm uppercase tracking-widest font-medium rounded"
            >
              Start Your Project
              {/* <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" /> */}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
