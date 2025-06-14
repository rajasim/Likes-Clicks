import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
    </>
  );
};

export default Homepage;
