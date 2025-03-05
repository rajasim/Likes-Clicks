import React from "react";
import "../css_files/Page.css";
import { useNavigate } from "react-router-dom";
const Page = () => {
  
  return (
    <div className="home-container" id="homecontainer">
      <h2 className="goal-text">
      Our primary goal is to establish Easy Global Connect as a leading facilitator of international trade, recognized for its commitment to quality, reliability, and ethical sourcing practices. We aim to empower businesses globally by providing them with access to premium Indian products and services, while contributing positively to the economic and social development of our communities.
      </h2>
      <div className="content"> 
        
        <div className="Page" >
          <img src="/images/seo.png"></img>
          <div className="text-section">
            <h3>1. SEO (Search Engine Optimization)</h3>
            <p>Get ranked on Google and drive organic traffic</p>
          </div>
        </div>
        <div className="Page" >
        
          <img src="/images/Social.png"></img>
          <div className="text-section">
            <h3>Social Media Mastery</h3>
            <p>Engage your audience and grow your following</p>
          </div>
        </div>
        <div className="Page" >
        
          <img src="/images/digital.png"></img>
          <div className="text-section">
            <h3> Digital Marketing Excellence </h3>
            <p>Increase leads, sales, and brand visibility</p>
          </div>
        </div>
        <div className="Page">
          <img src="/images/web.jpg"></img>
          <div className="text-section">
            <h3>Website & App Development</h3>
            <p>Build user-friendly, high-performance platforms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;