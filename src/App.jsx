import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./javascript_files/Navbar";
import Cards from "./javascript_files/Cards";
import Footer from "./javascript_files/Footer";
import Hero from "./javascript_files/Hero";
import ChooseUs from "./javascript_files/ChooseUs";
import AboutUs from "./javascript_files/AboutUs";
import ITServices from "./javascript_files/ITServices";
import Page from "./javascript_files/Page";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ITServices/>
      
      <AboutUs />
      <Page/>
      <ChooseUs />
      <Footer />
    </>
  );
}

export default App;
