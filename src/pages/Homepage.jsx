import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import NewsletterSection from "../components/Newsletter";
import TrustedBySection from "../components/TrustedBySection";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <TrustedBySection />
      <WhyChooseUs />
      <Portfolio />
      {/* <Testimonials /> */}
      <NewsletterSection />
    </>
  );
};

export default Homepage;
