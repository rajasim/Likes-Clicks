import { FaStar, FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "The level of innovation and precision Likes and Clicks brings to digital marketing is unmatched. Their ability to blend creative content with data-driven strategies has significantly elevated our online presence. Truly a game-changing experience.",
      author: "Osman Gunny",
      role: "Chief Strategy Officer",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      id: 2,
      quote:
        "Working with Likes and Clicks was one of the best decisions we made for our digital transformation. Their team is proactive, highly knowledgeable, and consistently delivers beyond expectations. We've seen measurable growth in engagement and conversions.",
      author: "Raj Mahat",
      role: "Vice President of Global Marketing",
      rating: 5,
      date: "1 month ago",
    },
    {
      id: 3,
      quote:
        "Likes and Clicks isn’t just a service provider—they’re a growth partner. Their insight into SEO, performance marketing, and web optimization helped us scale faster than we anticipated. Highly recommend for any organization looking to scale intelligently.",
      author: "Raj Gopale",
      role: "Senior Director – Digital & Analytics",
      rating: 5,
      date: "3 months ago",
    },
    {
      id: 4,
      quote:
        "From strategy to execution, Likes and Clicks nailed every aspect of our campaign. Their attention to brand detail and commitment to results have made them our go-to for all things digital. Exceptional team with a forward-thinking approach.",
      author: "Andrew Barbra (From Aftab B. Maldar)",
      role: "Head of Brand & Communication Strategy",
      rating: 5,
      date: "2 months ago",
    },
  ];

  return (
    <section className="relative py-32 bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-50/10 to-transparent"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded border border-gray-200 p-8 hover:border-blue-300 transition-all duration-300"
            >
              <FaQuoteLeft className="absolute top-8 right-8 text-blue-100 text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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

              <blockquote className="mb-8">
                <p className="text-gray-700 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>

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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
